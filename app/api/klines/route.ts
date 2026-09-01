import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
      cache: "no-store"
    });

    if (!res.ok) {
      // Fallback 1: Try Binance US
      const fallbackRes = await fetch(`https://api.binance.us/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
        cache: "no-store"
      });
      if (fallbackRes.ok) {
        const data = await fallbackRes.json();
        return NextResponse.json(data, {
          headers: { "Cache-Control": "no-store, max-age=0, must-revalidate" }
        });
      }

      // Fallback 2: Try public Binance Proxy API
      const proxyRes = await fetch(`https://data-api.binance.vision/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
        cache: "no-store"
      });
      if (proxyRes.ok) {
        const data = await proxyRes.json();
        return NextResponse.json(data, {
          headers: { "Cache-Control": "no-store, max-age=0, must-revalidate" }
        });
      }

      return NextResponse.json({ error: "Failed to fetch from Binance" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: { "Cache-Control": "no-store, max-age=0, must-revalidate" }
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
