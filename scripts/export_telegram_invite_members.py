import asyncio
import csv
import os
import re
import sys
from datetime import datetime

try:
    from telethon import TelegramClient
    from telethon.tl.functions.messages import GetChatInviteImportersRequest
    from telethon.tl.types import InputUserEmpty
    import pandas as pd
except ImportError:
    print("Missing required libraries. Please run: pip install telethon pandas openpyxl")
    sys.exit(1)

# Telegram API Credentials
API_ID = 36612825
API_HASH = "582fe889fe978ee31e5a6a6b69acfb82"
SESSION_NAME = "yaga_session"
OUTPUT_DIR = "telegram_exports"

def phone_number_callback():
    phone = input("\nEnter your Telegram Phone Number (e.g., +8801404278548): ").strip()
    if phone.startswith("01") and len(phone) == 11:
        phone = "+88" + phone
        print(f"--> Auto-formatted phone number to: {phone}")
    elif not phone.startswith("+") and phone.isdigit():
        phone = "+" + phone
        print(f"--> Added '+' prefix to: {phone}")
    return phone

def sanitize_filename(name):
    clean = re.sub(r'[^\w\-_]', '_', name).strip('_')
    return clean if clean else "telegram_members"

async def export_members(chat_entity, invite_link, output_name=None):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    client = TelegramClient(SESSION_NAME, API_ID, API_HASH)
    
    print("Connecting to Telegram...")
    await client.start(phone=phone_number_callback)  # type: ignore
    
    print(f"\nResolving group/channel entity '{chat_entity}'...")
    try:
        entity = await client.get_entity(chat_entity)
    except Exception as e:
        print(f"Error fetching group/channel entity: {e}")
        print("Tip: Make sure you pass your group/channel @username or full link.")
        await client.disconnect()
        return

    print(f"Fetching members for invite link: {invite_link}...")
    
    offset_date = None
    offset_user = InputUserEmpty()
    all_rows = []
    seen_user_ids = set()

    while True:
        try:
            result = await client(GetChatInviteImportersRequest(
                peer=entity,
                link=invite_link,
                offset_date=offset_date,
                offset_user=offset_user,
                limit=100
            ))

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
                    "phone": user.phone or "",
                    "joined_at": joined_at,
                    "is_bot": user.bot,
                    "is_verified": user.verified
                })

            print(f"Fetched {len(all_rows)} unique users so far...")

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

        except Exception as e:
            print(f"Error during fetching importers: {e}")
            break

    await client.disconnect()

    if not all_rows:
        print("\nNo members found or could not access invite link statistics.")
        print("Note: You must be an Admin of the group/channel to query invite link importers.")
        return

    df = pd.DataFrame(all_rows)

    if not output_name:
        output_name = "export_" + datetime.now().strftime("%Y%m%d_%H%M%S")

    clean_name = sanitize_filename(output_name)
    csv_path = os.path.join(OUTPUT_DIR, f"{clean_name}.csv")
    xlsx_path = os.path.join(OUTPUT_DIR, f"{clean_name}.xlsx")

    df.to_csv(csv_path, index=False, encoding="utf-8-sig")
    df.to_excel(xlsx_path, index=False, engine="openpyxl")

    print("\n" + "=" * 60)
    print(f"SUCCESS: Exported {len(all_rows)} members!")
    print(f"- CSV Saved:   {os.path.abspath(csv_path)}")
    print(f"- Excel Saved: {os.path.abspath(xlsx_path)}")
    print("=" * 60)

if __name__ == "__main__":
    print("=" * 60)
    print(" TELEGRAM INVITE LINK MEMBER EXPORTER")
    print("=" * 60)

    invite_link_input = input("Enter Telegram Invite Link (e.g., https://t.me/+...): ").strip()
    chat_input = input("Enter Group/Channel Username (optional, press Enter to use invite link): ").strip()
    file_name_input = input("Enter File Name for export (optional, press Enter for auto-name): ").strip()

    invite_link = invite_link_input
    chat_entity = chat_input if chat_input else invite_link

    asyncio.run(export_members(chat_entity, invite_link, file_name_input))
