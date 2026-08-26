import { NextResponse } from 'next/server';
import { mkdir, appendFile } from 'fs/promises';
import path from 'path';

// Durable, append-only log of every "telegram_click" conversion event, one
// JSON object per line. This previously only reached console.log and was
// never wired into GTM/GA4 either (see audit-2026/findings/12-analytics-tracking.md)
// — every CTA click was silently recorded nowhere durable. The client side
// (lib/trackTelegramClick.ts) now also pushes the same event into GTM's
// dataLayer directly, so this file is a first-party backstop / raw source
// of truth independent of the analytics platform, not the only record.
//
// Lives outside app/ and public/, so Next.js never serves it as a static
// asset or route — not reachable over HTTP. Also gitignored (see
// .gitignore) so accumulated runtime data never gets committed.
const LOG_DIR = path.join(process.cwd(), 'data');
const LOG_FILE = path.join(LOG_DIR, 'conversion-events.jsonl');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, label, path: pagePath } = body;
    const timestamp = new Date().toISOString();

    // Keep the existing console line — useful for live `pm2 logs` tailing —
    // but it's no longer the only place this data goes.
    console.log(`[CONVERSION TRACKING] Event: ${event}, Label: ${label}, Path: ${pagePath}, Timestamp: ${timestamp}`);

    try {
      await mkdir(LOG_DIR, { recursive: true });
      await appendFile(
        LOG_FILE,
        JSON.stringify({ event, label, path: pagePath, timestamp }) + '\n',
        'utf8'
      );
    } catch (writeError) {
      // A logging failure must never break the user-facing response —
      // the click already happened and the dataLayer push already fired
      // client-side regardless of whether this write succeeds.
      console.error('Conversion log write failed:', writeError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
