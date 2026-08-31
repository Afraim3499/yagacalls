"use client";

import React from "react";
import Container from "../shared/Container";
import Section from "../shared/Section";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import { Send, ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-24">
      <Container className="max-w-7xl">
        
        {/* OUTER BILLBOARD CONTAINER: THE GOLDEN RADAR VAULT */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#F3D081]/25 border-t-[#F3D081]/60 bg-[linear-gradient(145deg,#18120B_0%,#0C0D10_40%,#060608_100%)] p-6 sm:p-12 lg:p-16 shadow-[0_32px_80px_-20px_rgba(0,0,0,1)]">
          
          {/* 1. AMBIENT CAUSTIC LIGHTING (Pure CSS Glows) */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,_rgba(243,208,129,0.18)_0%,_rgba(180,100,30,0.08)_50%,_transparent_75%)] blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(212,140,40,0.22)_0%,_rgba(60,25,10,0.0)_70%)] blur-[100px]" />

          {/* 2. FACETED CRYSTAL SHARDS (Inline Geometric SVG Vector Layer) */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 600">
            <defs>
              <linearGradient id="shardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F3D081" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="shardGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2B75B" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Crystal Facet Polygons */}
            <polygon points="0,0 450,0 280,320 0,200" fill="url(#shardGrad1)" />
            <polygon points="450,0 850,0 620,400 280,320" fill="url(#shardGrad2)" />
            <polygon points="850,0 1200,0 1200,350 620,400" fill="url(#shardGrad1)" />
            <polygon points="280,320 620,400 480,600 0,600" fill="url(#shardGrad2)" />
            <polygon points="620,400 1200,350 1200,600 480,600" fill="url(#shardGrad1)" />
          </svg>

          {/* 3. TOP TELEMETRY STATUS BAR */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8 text-xs font-mono tracking-widest text-[#A1A1AA] uppercase">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-white font-bold">● SIGNAL DISPATCH ACTIVE</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden sm:inline">ACCURACY: <strong className="text-[#F3D081]">80%+ VERIFIED</strong></span>
              <span>ACCESS: <strong className="text-white">PUBLIC & VIP</strong></span>
            </div>
          </div>

          {/* 4. MAIN BANNER CONTENT & FLOATING TICKET GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Copy & Value Proposition (7 Cols on LG) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
                Ready to Stop Donating Your Money to the Market?
              </h2>
              
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
                Stop guessing tops and bottoms in noisy chatrooms. Get clear setups with exact entry zones, strict stop-losses, and live targets delivered straight to your phone.
              </p>

              {/* Proof Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-[#E2C896]">
                <span className="px-3 py-1.5 rounded-lg bg-[#F3D081]/10 border border-[#F3D081]/25 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F3D081]" /> Exact Buy & Sell Zones
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#F3D081]/10 border border-[#F3D081]/25 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F3D081]" /> Zero Blind Gambles
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#F3D081]/10 border border-[#F3D081]/25 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F3D081]" /> 100% Free Entry Channel
                </span>
              </div>
            </div>

            {/* Right Column: Live Intercept Card & Action Hub (5 Cols on LG) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* Live Setup Ticket Artifact */}
              <div className="relative overflow-hidden rounded-2xl border border-[#F3D081]/30 bg-[#0E0F14]/90 p-5 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between text-xs text-[#717684] pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-[#F3D081] font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F3D081]" /> LATEST DISPATCH #4092
                  </span>
                  <span className="text-[#10B981] font-semibold">● 100% SMASHED</span>
                </div>
                
                <div className="pt-3 flex justify-between items-center">
                  <div>
                    <div className="text-lg font-black text-white">$SOL / USDT</div>
                    <div className="text-xs text-[#A1A1AA]">Entry: $158.00 ─► Final TP: $210.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-[#F3D081]">+142.4%</div>
                    <div className="text-[10px] text-[#717684] uppercase tracking-wider">Audited Profit</div>
                  </div>
                </div>
              </div>

              {/* Stacked Conversion Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 pt-2">
                <a 
                  href={BRAND_CONFIG.officialTelegram} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#F3D081] via-[#E2B75B] to-[#C99738] px-8 py-4 text-sm sm:text-base font-black text-[#080808] shadow-[0_0_35px_rgba(243,208,129,0.35)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    JOIN FREE TELEGRAM CHANNEL
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

                <a 
                  href="/pricing" 
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-8 py-3.5 text-sm font-bold text-white transition-all hover:border-[#F3D081]/40 hover:bg-white/[0.07] active:scale-[0.98]"
                >
                  Compare VIP Membership Plans
                </a>
              </div>

            </div>

          </div>

          {/* 5. FOOTER DISCLAIMER & SEO LINKS */}
          <div className="relative z-10 pt-10 mt-10 border-t border-white/[0.06] text-center space-y-4">
            <p className="text-[10px] text-[#71717A] italic uppercase tracking-widest max-w-2xl mx-auto">
              Yaga Calls provides educational market analysis and signal ideas. Crypto trading involves risk. No content on this website should be treated as financial advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[10px] text-[#71717A] italic uppercase tracking-widest">
              <a href="/verified-crypto-signal-provider" className="hover:text-[#E2C896] transition-colors">Verified Crypto Signal Provider</a>
              <span>•</span>
              <a href="/best-crypto-signal-provider" className="hover:text-[#E2C896] transition-colors">Best Crypto Signal Provider</a>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
