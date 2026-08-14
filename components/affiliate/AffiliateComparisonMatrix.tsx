import React from "react";

export default function AffiliateComparisonMatrix() {
  const comparisonRows = [
    {
      feature: "Payout Frequency",
      yaga: "⚡ Daily (9–12h Variable)",
      exchange: "Monthly / Delayed",
      web: "60 – 90 Days Hold"
    },
    {
      feature: "Tracking System",
      yaga: "🤖 Native Telegram Chat Link",
      exchange: "Exchange Ref Link",
      web: "Browser Cookies"
    },
    {
      feature: "Attribution Drop-Off",
      yaga: "✅ 0% Loss (Server Tagged)",
      exchange: "⚠️ Moderate (KYC drops)",
      web: "❌ 40%+ Loss (AdBlocker/ITP)"
    },
    {
      feature: "Average Net Payout",
      yaga: "💰 $44.85 – $199.75 / Sale",
      exchange: "Micro-cents per trade",
      web: "3% – 10% One-Time"
    },
    {
      feature: "Payout Currencies",
      yaga: "💎 USDT / USDC / SOL / BTC",
      exchange: "Platform Exchange Tokens",
      web: "Bank Wire / PayPal"
    },
    {
      feature: "Real-Time Join Alerts",
      yaga: "🔔 Instant Telegram Bot Push",
      exchange: "❌ None (24h Delay)",
      web: "❌ Dashboard Sync Delays"
    },
    {
      feature: "Minimum Payout",
      yaga: "🎯 $50 USDT Threshold",
      exchange: "Varies ($100+)",
      web: "$100+ Net Threshold"
    }
  ];

  return (
    <div className="bg-surface-deep border border-line rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl overflow-hidden">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
          Disruptive Partner Technology
        </span>
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
          Why Yaga Beats Standard Affiliate Programs
        </h3>
        <p className="text-xs text-text-muted">
          Compare Yaga Calls native Telegram engine against traditional crypto exchange referral links and legacy web cookie networks.
        </p>
      </div>

      <div className="overflow-x-auto pt-2">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-widest font-mono text-text-muted">
              <th className="py-4 px-4 font-bold">Feature</th>
              <th className="py-4 px-4 font-black text-primary bg-primary/10 rounded-t-xl border-x border-t border-primary/30">
                Yaga Partner Engine
              </th>
              <th className="py-4 px-4 font-bold text-text-high">Exchange Referrals</th>
              <th className="py-4 px-4 font-bold text-text-high">Legacy Web Networks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/60 text-xs font-mono">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/40 transition-colors">
                <td className="py-4 px-4 font-bold text-text-high font-sans text-xs">
                  {row.feature}
                </td>
                <td className="py-4 px-4 font-black text-emerald-400 bg-primary/5 border-x border-primary/20">
                  {row.yaga}
                </td>
                <td className="py-4 px-4 text-text-muted">{row.exchange}</td>
                <td className="py-4 px-4 text-text-muted">{row.web}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4 border-t border-line/60 text-center">
        <p className="text-[11px] text-text-muted">
          Looking for in-depth comparison breakdowns? See our dedicated guides for{" "}
          <a href="/binance-affiliate-vs-yaga-calls" className="text-primary hover:underline font-bold">
            Binance Affiliate vs Yaga Calls
          </a>{" "}
          and{" "}
          <a href="/crypto-affiliate-programs-compared" className="text-primary hover:underline font-bold">
            Best Crypto Affiliate Programs Compared (2026)
          </a>
          .
        </p>
      </div>
    </div>
  );
}
