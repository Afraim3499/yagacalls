"use client";

import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import CTAButton from "../shared/CTAButton";
import { Check, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Quarterly Access",
    badge: "START HERE",
    tagline: "Test the Method",
    price: "250",
    regular: "300",
    save: "50",
    period: "3 months",
    monthly: "~$83/month",
    isFeatured: false,
    desc: "Best for serious traders who want to evaluate the Yaga Calls method before committing to a longer access period.",
    features: [
      "Premium Telegram signal channel",
      "Structured crypto setup notes",
      "Market narrative research",
      "Entry and target context",
      "Invalidation and risk notes",
      "Risk management guidance",
      "Manual Telegram onboarding"
    ],
    bestFor: "Traders who want to test the quality, structure, and communication style before longer commitment.",
    cta: "Start 3-Month Access",
    tracking: "pricing_quarterly"
  },
  {
    name: "Half-Yearly Access",
    badge: "MOST POPULAR",
    tagline: "Commit to Structure",
    price: "350",
    regular: "400",
    save: "50",
    period: "8 months (Bonus +2 Mo)",
    monthly: "~$44/month",
    isFeatured: true,
    desc: "Best for traders who want consistent premium access across multiple market conditions, rotations, and narrative cycles.",
    features: [
      "Everything in Quarterly, plus:",
      "⭐ EXTREME OFFER: 8 Months Access (Instead of 6)",
      "Better monthly value",
      "Deeper market research notes",
      "Priority signal delivery",
      "Gem Book access (early-stage finds)",
      "Advanced research reports"
    ],
    bestFor: "Traders who want to follow Yaga Calls through more than one short market phase.",
    cta: "Start 8-Month Access",
    tracking: "pricing_halfyearly"
  },
  {
    name: "Yearly Access",
    badge: "HIGH TABLE + ELITE",
    tagline: "Long-Term Premium Access",
    price: "700",
    regular: "800",
    save: "100",
    period: "14 months (Bonus +2 Mo)",
    monthly: "~$50/month",
    isFeatured: false,
    desc: "Best for committed members who want long-term access to Yaga Calls premium research and market updates.",
    features: [
      "Everything in Half-Yearly, plus:",
      "🎁 EXTREME OFFER: High Table + Elite Group Access",
      "⭐ EXTREME OFFER: 14 Months Access (Instead of 12)",
      "Strongest total savings & priority communication",
      "Portfolio review (1x/quarter)",
      "1-on-1 strategy session",
      "Long-term premium context"
    ],
    bestFor: "Committed traders who already understand the method and want longer-term access.",
    cta: "Start 14-Month Access",
    tracking: "pricing_yearly"
  }
];

export default function PricingCardsGrid() {
  return (
    <Section className="bg-transparent relative z-10 py-16 overflow-hidden max-w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
          
          {/* ARCHETYPE A: Warm Amber Floor Glow behind Featured Tier */}
          <div 
            className="w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(243, 208, 129, 0.16) 0%, rgba(226, 183, 91, 0.05) 50%, transparent 75%)'
            }}
          />

          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`flex flex-col p-6 sm:p-7 rounded-3xl relative overflow-hidden transition-all duration-300 ${
                plan.isFeatured 
                  ? "bg-[rgba(14,15,18,0.85)] border-2 border-[#E2C896] shadow-[0_0_40px_rgba(226,200,150,0.15)] scale-100 lg:scale-[1.02] z-10" 
                  : "bg-[rgba(14,15,18,0.65)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.10)] border-t-[rgba(243,208,129,0.20)]"
              }`}
            >
              {/* Specular Light Reflection */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/40 to-transparent" />

              <div className="flex items-start justify-between gap-3 mb-5 relative z-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-[#FFFFFF]">{plan.name}</h3>
                  <p className="text-xs font-bold text-[#E2C896] uppercase tracking-widest mt-1">{plan.tagline}</p>
                </div>
                <div className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg shrink-0 flex items-center gap-1 ${
                  plan.isFeatured 
                    ? "bg-[#E2C896] text-[#09090B] shadow-md font-extrabold" 
                    : "bg-[rgba(226,200,150,0.08)] text-[#E2C896] border border-[#A38B5D]/30"
                }`}>
                  {plan.isFeatured && <Sparkles className="w-3 h-3 text-[#09090B]" />}
                  <span>{plan.badge}</span>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <div className="flex items-baseline gap-2 font-mono">
                  <span className="text-[#71717A] text-lg line-through opacity-70">${plan.regular}</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tighter text-[#FFFFFF]">${plan.price}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 font-mono">
                  <span className="text-[10px] font-black bg-[#EF4444]/10 text-[#EF4444] px-2 py-0.5 rounded uppercase tracking-widest border border-[#EF4444]/30">Save ${plan.save}</span>
                  <span className="text-xs font-bold text-[#A1A1AA]">/ {plan.period}</span>
                </div>
                <p className="text-xs text-[#E2C896] mt-1.5 uppercase tracking-widest font-bold font-mono">{plan.monthly}</p>
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 border-t border-[rgba(243,208,129,0.08)] pt-4 relative z-10">
                {plan.desc}
              </p>

              <div className="space-y-2.5 mb-6 flex-grow relative z-10">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <Check className="w-3.5 h-3.5 text-[#E2C896] flex-shrink-0 mt-0.5" />
                    <span className="text-[11.5px] font-bold tracking-tight leading-snug text-[#FFFFFF]">{f}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 relative z-10">
                <div className="p-4 bg-[#070605] border border-[rgba(243,208,129,0.10)] rounded-xl">
                  <p className="text-[10px] font-black text-[#E2C896] uppercase tracking-widest mb-1">Best For</p>
                  <p className="text-xs font-medium leading-tight text-[#A1A1AA]">{plan.bestFor}</p>
                </div>
                <CTAButton href="https://t.me/yagacalls47" target="_blank" fullWidth trackingLabel={plan.tracking} variant={plan.isFeatured ? "primary" : "secondary"}>
                  {plan.cta}
                </CTAButton>
                <p className="text-[10px] text-[#71717A] text-center italic uppercase tracking-widest">
                  No guaranteed profits. Educational market analysis only.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[rgba(14,15,18,0.75)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.12)] rounded-3xl text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E2C896]">
            Current prices are limited-time manual onboarding prices. Confirm latest availability through the official Yaga Calls Telegram contact before payment.
          </p>
          <p className="text-xs text-[#A1A1AA] mt-2">
            One-time crypto payment for the selected access period. No automated recurring billing.
          </p>
        </div>
      </Container>
    </Section>
  );
}
