import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const symbol = (searchParams.get("symbol") || "ETHUSDT").toUpperCase();
    const interval = searchParams.get("interval") || "5m";
    const limit = searchParams.get("limit") || "150";
    const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" };

    // 1. Try Binance Futures (fapi) first, since most signals are leverage trades
    const futuresRes = await fetch(`https://fapi.binance.com/fapi/v1/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      headers, cache: "no-store"
    });
    
    if (futuresRes.ok) {
      const data = await futuresRes.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data, {
          headers: { "Cache-Control": "no-store, max-age=0, must-revalidate" }
        });
      }
    }

    // 2. Try Binance Spot
    const spotRes = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      headers, cache: "no-store"
    });

    if (spotRes.ok) {
      const data = await spotRes.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data, {
          headers: { "Cache-Control": "no-store, max-age=0, must-revalidate" }
        });
      }
    }

    // 3. Fallback: Try Binance US
    const fallbackRes = await fetch(`https://api.binance.us/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      cache: "no-store"
    });
    if (fallbackRes.ok) {
      const data = await fallbackRes.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data, {
          headers: { "Cache-Control": "no-store, max-age=0, must-revalidate" }
        });
      }
    }

    // 4. Fallback: Try public Binance Proxy API
    const proxyRes = await fetch(`https://data-api.binance.vision/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      cache: "no-store"
    });
    if (proxyRes.ok) {
      const data = await proxyRes.json();
      return NextResponse.json(data, {
        headers: { "Cache-Control": "no-store, max-age=0, must-revalidate" }
      });
    }

    return NextResponse.json({ error: "Failed to fetch from Binance (Futures & Spot)" }, { status: 500 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
