"use client";

import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const coinMap = [
  { sym: "BTC", key: "bitcoin" },
  { sym: "ETH", key: "ethereum" },
  { sym: "BNB", key: "binancecoin" },
  { sym: "SOL", key: "solana" },
  { sym: "ADA", key: "cardano" },
  { sym: "XRP", key: "xrp" },
  { sym: "DOT", key: "polkadot" },
  { sym: "DOGE", key: "dogecoin" },
  { sym: "AVAX", key: "avalanche-2" },
  { sym: "LINK", key: "chainlink" },
];

interface PriceData {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

export default function Ticker() {
  const [data, setData] = useState<PriceData | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/prices");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (e) {
        console.error("Ticker fetch failed", e);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted || !data) return <div className="h-8 bg-[#0A0907] border-b border-[rgba(243,208,129,0.06)] animate-pulse" />;

  return (
    <div className="h-8 bg-[#0A0907] border-b border-[rgba(243,208,129,0.06)] overflow-hidden flex items-center shrink-0">
      <div className="flex animate-ticker whitespace-nowrap gap-8 px-4">
        {[...coinMap, ...coinMap].map((coin, i) => {
          const price = data[coin.key]?.usd;
          const chg = data[coin.key]?.usd_24h_change;
          return (
            <div key={`${coin.sym}-${i}`} className="flex items-center gap-2 text-[11px] font-bold font-mono">
              <span className="text-[#8A8A93]">{coin.sym}</span>
              <span className="text-[#FFFFFF]">
                ${price ? price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "—"}
              </span>
              <span className={cn(
                "text-[10px]",
                chg >= 0 ? "text-[#22C55E]" : "text-[#EF4444]"
              )}>
                {chg >= 0 ? "+" : ""}{chg?.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
