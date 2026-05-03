import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, label, path } = body;

    // Server-side logging for internal analytics
    console.log(`[CONVERSION TRACKING] Event: ${event}, Label: ${label}, Path: ${path}, Timestamp: ${new Date().toISOString()}`);

    // This endpoint currently does not send messages to Telegram as no bot is integrated.
    // It is prepared for future integration with analytics providers or a manual alert system.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
