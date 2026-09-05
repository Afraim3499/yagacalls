import { NextResponse } from 'next/server';
import { takeSignalScreenshot } from '@/lib/puppeteerScreenshot';

export async function POST(req: Request) {
  try {
    let data;
    try {
      data = await req.json();
    } catch {
      // Fallback in case old client tries to send FormData
      return NextResponse.json({ success: false, error: "Must send JSON payload" }, { status: 400 });
    }

    const { text, signalId, ...chartParams } = data;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID;

    if (!BOT_TOKEN || !ADMIN_CHAT_ID) {
      console.warn("Missing Telegram credentials in env.");
      return NextResponse.json({
        success: false,
        error: "TELEGRAM_BOT_TOKEN or TELEGRAM_ADMIN_CHAT_ID is missing in server environment."
      }, { status: 500 });
    }

    if (!text || !signalId) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // 1. Generate the screenshot purely on the server side using Puppeteer
    let buffer: Buffer;
    try {
      buffer = await takeSignalScreenshot(chartParams as Record<string, string>);
    } catch (shotErr: any) {
      console.error("Puppeteer screenshot failed:", shotErr);
      return NextResponse.json({ success: false, error: "Server-side screenshot failed: " + shotErr.message }, { status: 500 });
    }

    const supergroupId = process.env.TELEGRAM_SUPERGROUP_ID || '-1004498264496';
    const signalsThreadId = process.env.TG_THREAD_SIGNALS || '2';

    const targetChatIds = new Set<string>();
    if (ADMIN_CHAT_ID) {
      ADMIN_CHAT_ID.split(',').map(id => id.trim()).filter(Boolean).forEach(id => targetChatIds.add(id));
    }
    if (supergroupId) {
      targetChatIds.add(`${supergroupId}:${signalsThreadId}`);
    }

    const replyMarkup = {
      inline_keyboard: [
        [
          { text: "✅ Approve to Public", callback_data: `post_signal_${signalId}` },
          { text: "❌ Reject", callback_data: `reject_signal_${signalId}` }
        ]
      ]
    };

    const sendErrors: string[] = [];

    for (const chatIdRaw of Array.from(targetChatIds)) {
      const [chatId, customThreadId] = chatIdRaw.split(':');
      const threadId = customThreadId || (chatId.startsWith('-100') ? signalsThreadId : undefined);

      const tgFormData = new FormData();
      tgFormData.append('chat_id', chatId);
      if (threadId) {
        tgFormData.append('message_thread_id', threadId);
      }
      tgFormData.append('photo', new Blob([new Uint8Array(buffer)], { type: 'image/png' }), 'signal.png');
      tgFormData.append('caption', text);
      tgFormData.append('parse_mode', 'HTML');
      tgFormData.append('reply_markup', JSON.stringify(replyMarkup));

      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: 'POST',
        body: tgFormData,
        signal: AbortSignal.timeout(25000)
      });

      const resData = await res.json();
      if (!resData.ok) {
        console.error(`Telegram API error for chat ${chatId} (thread ${threadId}):`, resData);
        sendErrors.push(`Chat ${chatId}: ${resData.description || 'Unknown error'}`);
      }
    }

    if (sendErrors.length > 0 && sendErrors.length === targetChatIds.size) {
      return NextResponse.json({ success: false, error: sendErrors.join('; ') }, { status: 500 });
    }

    return NextResponse.json({ success: true, warnings: sendErrors.length > 0 ? sendErrors : undefined });
  } catch (err: any) {
    console.error("Error in notify-admin route:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

