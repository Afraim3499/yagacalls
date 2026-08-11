"use client";

import { useState } from "react";

export default function AffiliateEarningsCalculator() {
  const [referralsCount, setReferralsCount] = useState(15);
  const [selectedPlan, setSelectedPlan] = useState<"quarterly" | "halfYearly" | "yearly">("quarterly");

  const planPrices = {
    quarterly: 299,
    halfYearly: 499,
    yearly: 799
  };

  const price = planPrices[selectedPlan];

  // Dynamic Tier Calculation
  let commissionRate = 15;
  let tierName = "Tier 1 (Standard Partner)";

  if (referralsCount >= 25) {
    commissionRate = 25;
    tierName = "Tier 3 (VIP Institutional)";
  } else if (referralsCount >= 10) {
    commissionRate = 20;
    tierName = "Tier 2 (Pro Creator)";
  }

  const commissionPerSale = (price * commissionRate) / 100;
  const monthlyRevenue = referralsCount * commissionPerSale;
  const annualRevenue = monthlyRevenue * 12;

  return (
    <div className="bg-surface-deep border border-line rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Interactive Earnings Simulator
          </span>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high mt-3">
            Calculate Your Monthly Passive Income
          </h3>
          <p className="text-xs text-text-muted mt-1">
            Adjust the referral volume slider and select subscription tiers to project your 15%–25% commission earnings.
          </p>
        </div>
        <div className="shrink-0 font-mono text-right bg-background/60 p-3 rounded-2xl border border-line">
          <span className="text-[10px] uppercase tracking-widest text-text-muted block">Current Rate</span>
          <span className="text-2xl font-black text-primary font-mono">{commissionRate}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Plan Selection */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-text-high block">
              1. Select Average Referred Plan Tier:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "quarterly", label: "Quarterly", price: "$299" },
                { id: "halfYearly", label: "Half-Yearly", price: "$499" },
                { id: "yearly", label: "Yearly", price: "$799" }
              ].map(plan => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.id as any)}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedPlan === plan.id
                      ? "bg-primary/15 border-primary text-primary font-black shadow-lg"
                      : "bg-background/40 border-line text-text-muted hover:border-text-muted"
                  }`}
                >
                  <span className="text-xs font-bold block uppercase tracking-wider">{plan.label}</span>
                  <span className="text-sm font-black font-mono mt-0.5 block">{plan.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Referral Count Slider */}
          <div className="space-y-3 bg-background/40 p-5 rounded-2xl border border-line">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black uppercase tracking-wider text-text-high">
                2. Monthly Referrals Volume:
              </label>
              <span className="text-lg font-black text-primary font-mono bg-primary/10 border border-primary/20 px-3 py-1 rounded-xl">
                {referralsCount} Members / mo
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="100"
              value={referralsCount}
              onChange={e => setReferralsCount(Number(e.target.value))}
              className="w-full accent-primary bg-line h-2 rounded-lg cursor-pointer"
            />

            <div className="flex justify-between text-[10px] font-mono text-text-muted pt-1">
              <span>1 Sale/mo (15%)</span>
              <span>10 Sales/mo (20% Pro)</span>
              <span>25+ Sales/mo (25% VIP)</span>
              <span>100 Sales/mo</span>
            </div>
          </div>

          {/* Tier Status Indicator */}
          <div className="p-4 bg-background border border-line rounded-2xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Achieved Partner Tier</span>
              <div className="text-sm font-black text-text-high">{tierName}</div>
            </div>
            <div className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
              ${commissionPerSale.toFixed(2)} / Sale
            </div>
          </div>
        </div>

        {/* Earnings Display Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-background via-surface-deep to-background border border-primary/40 p-6 md:p-8 rounded-3xl space-y-6 shadow-2xl text-center flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">
              Estimated Monthly Income
            </span>
            <div className="text-4xl md:text-5xl font-black text-primary font-mono tracking-tight">
              ${monthlyRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-[11px] text-text-muted">Paid monthly directly in USDT / USDC / SOL / BTC</p>
          </div>

          <div className="border-t border-line/60 pt-4 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
              Projected Annual Revenue
            </span>
            <div className="text-2xl font-black text-emerald-400 font-mono">
              ${annualRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / yr
            </div>
          </div>

          <a
            href="https://t.me/yaga_partner_program_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="grad-button text-background py-3.5 px-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 block hover:scale-105 transition-transform"
          >
            🤖 Join Partner Bot &amp; Get Link
          </a>
        </div>
      </div>
    </div>
  );
}
