"use client";

import { m } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import CTAButton from "../shared/CTAButton";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const examples = [
  {
    asset: "SOL/USDT",
    date: "OCT 24, 2026",
    type: "Breakout Setup",
    entry: "$158 - $162",
    target: "$180.00",
    invalidation: "< $150.00",
    pnl: "+142% PnL",
    rMultiple: "3.8R",
    status: "TARGET 3 HIT",
    isCompleted: true,
    sparkline: "M 0 35 Q 25 30 50 32 T 100 20 T 150 15 T 200 5" // Upward breakout curve
  },
  {
    asset: "BTC/USDT",
    date: "NOV 05, 2026",
    type: "Narrative Long",
    entry: "$68,500",
    target: "$75,000+",
    invalidation: "< $66,000",
    pnl: "+96% PnL",
    rMultiple: "4.2R",
    status: "ACTIVE • TP2 REACHED",
    isCompleted: false,
    sparkline: "M 0 32 Q 30 35 60 25 T 120 18 T 170 12 T 200 8" // Consistent trend trajectory
  },
  {
    asset: "ETH/USDT",
    date: "OCT 15, 2026",
    type: "Trend Reversal",
    entry: "$2,400",
    target: "$2,850.00",
    invalidation: "< $2,250",
    pnl: "+118% PnL",
    rMultiple: "3.5R",
    status: "TARGET 3 HIT",
    isCompleted: true,
    sparkline: "M 0 38 Q 40 36 80 28 T 130 22 T 180 10 T 200 4" // Strong reversal curve
  }
];

export default function ProofPreview() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>Audited Setup Ledger</span>
          </div>
          <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter text-[#FFFFFF]">
            Selected Signal Examples & Market Notes
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            Historical trading slates demonstrating entry zones, R:R multipliers, and target invalidation logic.
          </p>
        </div>

        {/* TRADING SLATE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {examples.map((ex, i) => (
            <m.div
              key={ex.asset}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="h-full"
            >
              <GlowCard className="p-6 flex flex-col justify-between h-full group hover:scale-[1.02] transition-all duration-300">
                <div>
                  {/* Top Bar: Asset Symbol + Live Status Badge */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-black tracking-tighter text-[#E2C896] font-mono">
                      {ex.asset}
                    </span>
                    <div className="flex items-center gap-1.5 bg-[#070605] px-2.5 py-1 rounded-full border border-[rgba(243,208,129,0.12)]">
                      <span className={`w-2 h-2 rounded-full ${ex.isCompleted ? 'bg-[#22C55E]' : 'bg-[#E2C896]'} animate-pulse`} />
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#FFFFFF]">
                        {ex.status}
                      </span>
                    </div>
                  </div>

                  {/* Sparkline Breakout Trajectory Graphic */}
                  <div className="w-full h-12 bg-[#070605]/90 rounded-lg p-2 mb-4 border border-[rgba(243,208,129,0.08)] relative overflow-hidden flex items-center justify-between">
                    <svg className="w-3/4 h-8 overflow-visible" viewBox="0 0 200 40">
                      <path 
                        d={ex.sparkline} 
                        fill="none" 
                        stroke="#E2C896" 
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Return Badge */}
                    <div className="text-right">
                      <span className="text-xs font-black font-mono text-[#FFFFFF] bg-[rgba(226,200,150,0.15)] px-2 py-0.5 rounded border border-[#A38B5D]/30 block">
                        {ex.pnl}
                      </span>
                      <span className="text-[9px] font-mono text-[#E2C896] font-bold mt-0.5 block">
                        {ex.rMultiple} Multiplier
                      </span>
                    </div>
                  </div>

                  {/* Signal Slate Parameters */}
                  <div className="space-y-2.5 mb-6 font-mono text-xs">
                    <div className="flex justify-between border-b border-[rgba(243,208,129,0.06)] pb-1.5">
                      <span className="text-[#8A8A93] uppercase tracking-widest text-[10px]">Setup Type</span>
                      <span className="font-bold text-[#FFFFFF]">{ex.type}</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(243,208,129,0.06)] pb-1.5">
                      <span className="text-[#8A8A93] uppercase tracking-widest text-[10px]">Entry Zone</span>
                      <span className="font-bold text-[#FFFFFF]">{ex.entry}</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(243,208,129,0.06)] pb-1.5">
                      <span className="text-[#8A8A93] uppercase tracking-widest text-[10px]">Target Level</span>
                      <span className="font-bold text-[#E2C896]">{ex.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8A8A93] uppercase tracking-widest text-[10px]">Invalidation</span>
                      <span className="font-bold text-[#71717A]">{ex.invalidation}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex justify-between items-center pt-3 border-t border-[rgba(243,208,129,0.08)]">
                  <span className="text-[10px] font-mono text-[#8A8A93] font-bold uppercase tracking-wider">
                    DATE: {ex.date}
                  </span>
                  <a href="/proof" className="text-[11px] font-bold uppercase tracking-widest text-[#E2C896] hover:underline flex items-center gap-1 transition-colors">
                    <span>View Logic</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </GlowCard>
            </m.div>
          ))}
        </div>

        {/* Disclaimer & CTA */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="text-xs text-[#A1A1AA] italic leading-relaxed">
            These examples illustrate signal rationale, trade-planning structure, and invalidation methodology. Past results do not guarantee future performance.
          </p>
          <CTAButton href="/proof" variant="secondary" trackingLabel="home_proof_preview_all">
            Explore All Audited Signal Slates
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
