import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const symbol = (searchParams.get("symbol") || "ETHUSDT").toUpperCase();
    const interval = searchParams.get("interval") || "5m";
    const limit = searchParams.get("limit") || "80";

    const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      },
      next: { revalidate: 10 }
    });

    if (!res.ok) {
      // Fallback: Try Binance US or synthetic klines if main binance is blocked
      const fallbackRes = await fetch(`https://api.binance.us/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`);
      if (fallbackRes.ok) {
        const data = await fallbackRes.json();
        return NextResponse.json(data);
      }
      return NextResponse.json({ error: "Failed to fetch from Binance" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
