import { NextResponse } from 'next/server';

export async function GET() {
  const ids = [
    'bitcoin', 'ethereum', 'binancecoin', 'solana', 'cardano', 
    'xrp', 'polkadot', 'dogecoin', 'avalanche-2', 'chainlink', 
    'polygon', 'litecoin', 'bitcoin-cash', 'uniswap', 'stellar', 
    'ethereum-classic', 'monero', 'tron', 'cosmos', 'algorand'
  ].join(',');

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`,
      { 
        next: { revalidate: 60 },
        headers: {
          'accept': 'application/json'
        }
      }
    );

    if (!res.ok) {
      throw new Error(`Coingecko responded with ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Ticker fetch error:', error);
    // Return empty object or fallback data
    return NextResponse.json({}, { status: 500 });
  }
}
