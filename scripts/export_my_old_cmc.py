import asyncio
import csv
import os
import sys
from datetime import datetime

from telethon import TelegramClient
from telethon.tl.functions.messages import GetChatInviteImportersRequest
from telethon.tl.types import InputUserEmpty
import pandas as pd

# Your Telegram API Credentials
API_ID = 36612825
API_HASH = "582fe889fe978ee31e5a6a6b69acfb82"

# Channel / Group entity or invite link
CHAT = "https://t.me/+0KZVtC5E8XE5YmU1"
INVITE_LINK = "https://t.me/+0KZVtC5E8XE5YmU1"
SESSION_NAME = "yaga_session"

def phone_number_callback():
    phone = input("\nEnter your Telegram Phone Number (e.g., +8801404278548): ").strip()
    if phone.startswith("01") and len(phone) == 11:
        phone = "+88" + phone
        print(f"--> Auto-formatted phone number to: {phone}")
    elif not phone.startswith("+") and phone.isdigit():
        phone = "+" + phone
        print(f"--> Added '+' prefix to: {phone}")
    return phone

async def main():
    print("=" * 60)
    print(" Exporting Telegram Invite Link Importers")
    print("=" * 60)

    client = TelegramClient(SESSION_NAME, API_ID, API_HASH)

    print("Connecting to Telegram...")
    await client.start(phone=phone_number_callback)  # type: ignore

    print(f"\n[OK] Connected successfully!")
    print(f"Resolving chat entity: {CHAT}")

    try:
        entity = await client.get_entity(CHAT)
    except Exception as e:
        print(f"Error fetching group/channel entity: {e}")
        print("Note: If the invite link alone cannot be resolved, pass your channel's @username or channel ID instead.")
        await client.disconnect()
        return

    print(f"Fetching members for invite link: {INVITE_LINK}...")

    offset_date = None
    offset_user = InputUserEmpty()
    all_rows = []
    seen_user_ids = set()

    while True:
        try:
            result = await client(GetChatInviteImportersRequest(
                peer=entity,
                link=INVITE_LINK,
                offset_date=offset_date,
                offset_user=offset_user,
                limit=100
            ))
        except Exception as e:
            print(f"API Request Error: {e}")
            break

        if not result.importers:
            break

        users = {u.id: u for u in result.users}
        new_importers_count = 0

        for importer in result.importers:
            user = users.get(importer.user_id)
            if not user:
                continue

            if user.id in seen_user_ids:
                continue

            seen_user_ids.add(user.id)
            new_importers_count += 1
            joined_at = importer.date.strftime("%Y-%m-%d %H:%M:%S") if hasattr(importer, 'date') and importer.date else ""
            
            all_rows.append({
                "telegram_id": user.id,
                "first_name": user.first_name or "",
                "last_name": user.last_name or "",
                "username": f"@{user.username}" if user.username else "",
                "joined_at": joined_at
            })

        print(f"Fetched {len(all_rows)} unique users so far...")

        # If no new importers were added in this batch, break to avoid infinite loop
        if new_importers_count == 0:
            break

        last_importer = result.importers[-1]
        offset_date = last_importer.date
        last_user = users.get(last_importer.user_id)
        if last_user:
            try:
                offset_user = await client.get_input_entity(last_user)
            except Exception:
                offset_user = InputUserEmpty()
        else:
            break

    await client.disconnect()

    if not all_rows:
        print("\nNo importers returned. Ensure your Telegram account is an Admin/Owner in the target channel/group.")
        return

    # Export CSV & XLSX
    csv_file = "my_old_cmc_members.csv"
    xlsx_file = "my_old_cmc_members.xlsx"

    df = pd.DataFrame(all_rows)
    df.to_csv(csv_file, index=False, encoding="utf-8-sig")
    df.to_excel(xlsx_file, index=False, engine="openpyxl")

    print("\n" + "=" * 60)
    print(f"SUCCESS: Exported {len(all_rows)} members!")
    print(f"- CSV Saved:   {os.path.abspath(csv_file)}")
    print(f"- Excel Saved: {os.path.abspath(xlsx_file)}")
    print("=" * 60)

if __name__ == "__main__":
    asyncio.run(main())
