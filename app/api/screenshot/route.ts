import { NextResponse } from 'next/server';
import { takeSignalScreenshot } from '@/lib/puppeteerScreenshot';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Ensure we have minimal params
    if (!data.symbol || !data.pair) {
      return NextResponse.json({ success: false, error: "Missing symbol or pair" }, { status: 400 });
    }

    const buffer = await takeSignalScreenshot(data);
    
    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="yagacalls-${data.symbol}-${Date.now()}.png"`
      }
    });
  } catch (err: any) {
    console.error("Screenshot API error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
