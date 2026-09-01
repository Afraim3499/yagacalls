import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get('image') as File | null;
    const text = formData.get('text') as string;
    const signalId = formData.get('signalId') as string;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID;

    if (!BOT_TOKEN || !ADMIN_CHAT_ID) {
      console.warn("Missing Telegram credentials in env.");
      return NextResponse.json({
        success: false,
        error: "TELEGRAM_BOT_TOKEN or TELEGRAM_ADMIN_CHAT_ID is missing in server environment."
      }, { status: 500 });
    }

    if (!imageFile || !text || !signalId) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // Convert File to Buffer for the Telegram API
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const adminChatIds = ADMIN_CHAT_ID.split(',').map(id => id.trim()).filter(Boolean);

    const replyMarkup = {
      inline_keyboard: [
        [
          { text: "✅ Approve to Public", callback_data: `post_signal_${signalId}` },
          { text: "❌ Reject", callback_data: `reject_signal_${signalId}` }
        ]
      ]
    };

    const sendErrors: string[] = [];

    for (const chatId of adminChatIds) {
      const tgFormData = new FormData();
      tgFormData.append('chat_id', chatId);
      tgFormData.append('photo', new Blob([buffer], { type: 'image/png' }), 'signal.png');
      tgFormData.append('caption', text + "\n\n<i>Admin: Do you want to post this new signal to the public group?</i>");
      tgFormData.append('parse_mode', 'HTML');
      tgFormData.append('reply_markup', JSON.stringify(replyMarkup));

      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: 'POST',
        body: tgFormData
      });

      const data = await res.json();
      if (!data.ok) {
        console.error(`Telegram API error for chat ${chatId}:`, data);
        sendErrors.push(`Chat ${chatId}: ${data.description || 'Unknown error'}`);
      }
    }

    if (sendErrors.length > 0 && sendErrors.length === adminChatIds.length) {
      return NextResponse.json({ success: false, error: sendErrors.join('; ') }, { status: 500 });
    }

    return NextResponse.json({ success: true, warnings: sendErrors.length > 0 ? sendErrors : undefined });
  } catch (err: any) {
    console.error("Error in notify-admin route:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

