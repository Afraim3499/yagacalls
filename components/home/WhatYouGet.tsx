"use client";

import { m } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import { Send, Shield, Zap, ArrowUpRight } from "lucide-react";

export default function WhatYouGet() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>Institutional Signal Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center tracking-tight uppercase text-[#FFFFFF]">
            What You Get Inside Yaga Calls
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            Every component of Yaga Calls is engineered for precision, narrative clarity, and risk discipline.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1: MARKET NARRATIVE RESEARCH (Wide 2-span on LG) */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <GlowCard className="h-full p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-2.5 py-1 rounded-md border border-[#A38B5D]/20">
                    01 • Sector Catalyst Tracking
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8A8A93]">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    <span>NARRATIVE HEATMAP ACTIVE</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] mb-3">
                  1. Market Narrative Research
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  We track early stories, sector rotations, whale accumulation, liquidity shifts, and catalyst triggers before the market crowd reacts.
                </p>

                {/* MICRO-ARTIFACT: Sector Sentiment & Capital Flow Gauge */}
                <div className="bg-[#070605]/90 border border-[rgba(243,208,129,0.10)] rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-[#8A8A93]">Active Catalyst Rotation</span>
                    <span className="text-[#E2C896] font-bold">AI / RWA / Layer-1 Surge</span>
                  </div>
                  
                  {/* Progress bars representing capital flow */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] font-mono mb-1">
                        <span className="text-[#D4D4D8]">AI Narrative Momentum</span>
                        <span className="text-[#E2C896] font-bold">88% Volume Dominance</span>
                      </div>
                      <div className="w-full bg-[#181613] rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#A38B5D] to-[#E2C896] h-full rounded-full w-[88%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-mono mb-1">
                        <span className="text-[#D4D4D8]">RWA Institutional Inflow</span>
                        <span className="text-[#E2C896] font-bold">74% Capital Accumulation</span>
                      </div>
                      <div className="w-full bg-[#181613] rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#A38B5D] to-[#E2C896] h-full rounded-full w-[74%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </m.div>

          {/* CARD 2: TELEGRAM-FIRST DELIVERY (1-span) */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <GlowCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-2.5 py-1 rounded-md border border-[#A38B5D]/20">
                    02 • Fast Mobile Delivery
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] mb-3">
                  2. Telegram-First Delivery
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Real-time updates delivered straight to your phone. Zero lag when market setups trigger.
                </p>

                {/* MICRO-ARTIFACT: Floating Telegram Alert Card */}
                <div className="bg-[#070605]/90 border border-[rgba(243,208,129,0.12)] rounded-xl p-3.5 shadow-lg relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[rgba(243,208,129,0.06)] pb-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#E2C896] flex items-center justify-center">
                        <Send className="w-3 h-3 text-[#09090B] fill-[#09090B]" />
                      </div>
                      <span className="text-xs font-bold text-[#FFFFFF]">YAGA VIP TELEGRAM</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded font-semibold">● JUST NOW</span>
                  </div>
                  <p className="text-xs font-mono text-[#E2C896] font-bold">⚡ BREAKOUT CONFIRMED: $SOL</p>
                  <p className="text-[11px] text-[#A1A1AA] mt-1 font-mono">Entry: $158.00 • Invalidation: $150.00</p>
                </div>
              </div>
            </GlowCard>
          </m.div>

          {/* CARD 3: RISK-AWARE PLANNING (1-span) */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <GlowCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-2.5 py-1 rounded-md border border-[#A38B5D]/20">
                    03 • Capital Preservation
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] mb-3">
                  3. Risk-Aware Planning
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Every setup incorporates hard invalidation rules, R:R calculation, and strict capital allocation principles.
                </p>

                {/* MICRO-ARTIFACT: Visual Risk:Reward Bar (1 : 3.5 Ratio) */}
                <div className="bg-[#070605]/90 border border-[rgba(243,208,129,0.10)] rounded-xl p-3.5 space-y-2 font-mono">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8A8A93]">Risk : Reward Ratio</span>
                    <span className="text-[#E2C896] font-bold text-sm">1 : 3.5 R</span>
                  </div>
                  {/* Visual R:R bar */}
                  <div className="flex h-3 rounded-full overflow-hidden w-full text-[9px] font-bold">
                    <div className="w-[22%] bg-[#EF4444]/40 border-r border-[#EF4444] flex items-center justify-center text-[#EF4444]">
                      RISK 1.0x
                    </div>
                    <div className="w-[78%] bg-[#E2C896]/20 border-l border-[#E2C896] flex items-center justify-center text-[#E2C896]">
                      REWARD 3.5x
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#8A8A93] pt-1">
                    <span>Stop Loss: -2.1%</span>
                    <span className="text-[#E2C896]">Target: +7.35%</span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </m.div>

          {/* CARD 4: STRUCTURED SIGNAL NOTES (Wide 2-span on LG) */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <GlowCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-2.5 py-1 rounded-md border border-[#A38B5D]/20">
                    04 • Complete Trade Context
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#E2C896]">
                    <Shield className="w-3.5 h-3.5" />
                    <span>INVALIDATION FIRST LOGIC</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] mb-3">
                  4. Structured Signal Notes
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  No blind buy alerts. Every call provides entry parameters, target levels, invalidation logic, and trade rationale.
                </p>

                {/* MICRO-ARTIFACT: Formatted Yaga Signal Slate Snippet */}
                <div className="bg-[#070605]/90 border border-[rgba(243,208,129,0.10)] rounded-xl p-4 font-mono text-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(243,208,129,0.06)] pb-2">
                    <span className="text-sm font-bold text-[#FFFFFF]">$BTC / USDT NARRATIVE SETUP</span>
                    <span className="text-[10px] text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2 py-0.5 rounded font-bold">
                      VERIFIED LOGIC
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-2 bg-[#12110F] rounded border border-[rgba(243,208,129,0.06)]">
                      <span className="text-[10px] text-[#8A8A93] block">ENTRY ZONE</span>
                      <span className="text-[#FFFFFF] font-bold">$68,500</span>
                    </div>
                    <div className="p-2 bg-[#12110F] rounded border border-[rgba(243,208,129,0.06)]">
                      <span className="text-[10px] text-[#8A8A93] block">TARGET 1</span>
                      <span className="text-[#E2C896] font-bold">$75,000</span>
                    </div>
                    <div className="p-2 bg-[#12110F] rounded border border-[rgba(243,208,129,0.06)]">
                      <span className="text-[10px] text-[#8A8A93] block">INVALIDATION</span>
                      <span className="text-[#71717A] font-bold">&lt; $66,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </m.div>

        </div>

        {/* Bottom Internal Links Footer */}
        <div className="mt-16 max-w-4xl mx-auto text-center border-t border-[rgba(243,208,129,0.08)] pt-10 space-y-6">
          <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-2xl mx-auto">
            Some traders describe Yaga Calls as a <a href="/crypto-trading-group" className="text-[#E2C896] hover:underline font-bold">crypto trading group</a> or <a href="/crypto-trading-telegram-group" className="text-[#E2C896] hover:underline font-bold">crypto trading Telegram group</a>, but our standard is institutional: structured signal notes, narrative research, invalidation rules, and risk-aware delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-black uppercase tracking-widest text-[#E2C896]">
            <a href="/position-sizing-calculator" className="hover:underline underline-offset-4 flex items-center gap-1">
              Position Sizing Calculator <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a href="/leverage-trading-calculator" className="hover:underline underline-offset-4 flex items-center gap-1">
              Leverage Trading Calculator <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a href="/liquidation-price-calculator" className="hover:underline underline-offset-4 flex items-center gap-1">
              Liquidation Calculator <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a href="/free-vs-paid-crypto-signals" className="hover:underline underline-offset-4 flex items-center gap-1">
              Free vs Paid Signals <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
