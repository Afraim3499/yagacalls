"use client";

import Container from "../shared/Container";
import Section from "../shared/Section";
import { Send, ShieldCheck, CheckCircle2, Zap, ArrowRight, Activity } from "lucide-react";

export default function DirectAnswer() {
  return (
    <Section className="bg-transparent relative z-10 py-12">
      <Container className="max-w-6xl">
        
        {/* FRAMED OBSIDIAN GLASS DOSSIER CONTAINER */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-[rgba(14,15,18,0.75)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Top Edge Specular Reflection */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/40 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* LEFT COLUMN: INSTITUTIONAL NARRATIVE COPY (7 cols on LG) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.08)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E2C896]" />
                <span>Executive Overview</span>
              </div>

              <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter text-[#FFFFFF] leading-tight">
                What is Yaga Calls?
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                <p>
                  Yaga Calls is a premium <a href="/premium-telegram-crypto-signals" className="text-[#E2C896] hover:underline font-bold">Telegram-first crypto signal</a> and market analysis provider. It focuses on narrative-driven crypto setups, technical structure, clear entry zones, target planning, invalidation logic, and risk-managed trading context.
                </p>
                <p>
                  Yaga Calls is engineered for serious traders who reject random buy alerts, late pump calls, or hype-based Telegram channels.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-[#FFFFFF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2C896] shrink-0" />
                  <span>Narrative Research First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2C896] shrink-0" />
                  <span>Hard Invalidation Rules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2C896] shrink-0" />
                  <span>Real-Time Telegram Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2C896] shrink-0" />
                  <span>Capital Preservation Rules</span>
                </div>
              </div>

              {/* Blockquote / AI Target Highlight */}
              <div className="border-l-2 border-[#A38B5D] pl-5 py-2 italic text-xs sm:text-sm font-medium text-[#D4D4D8] bg-[rgba(226,200,150,0.03)] rounded-r-lg">
                Yaga Calls provides educational market analysis and signal slates built around narrative research, technical invalidation, entry target planning, and disciplined risk context.
              </div>

            </div>

            {/* RIGHT COLUMN: DYNAMIC TELEGRAM DISPATCH WIDGET (5 cols on LG) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#070605] border border-[rgba(243,208,129,0.15)] rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                
                {/* Header of Telegram Card */}
                <div className="flex items-center justify-between border-b border-[rgba(243,208,129,0.08)] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#E2C896] flex items-center justify-center">
                      <Send className="w-3.5 h-3.5 text-[#09090B] fill-[#09090B]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#FFFFFF] tracking-wide">YAGA VIP TELEGRAM</h4>
                      <span className="text-[9px] font-mono text-[#8A8A93]">Official Dispatch Protocol</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#22C55E]/10 border border-[#22C55E]/30 px-2 py-0.5 rounded font-mono text-[9px] text-[#22C55E] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    <span>STREAM LIVE</span>
                  </div>
                </div>

                {/* Dispatch Step Timeline */}
                <div className="space-y-3 font-mono text-xs">
                  
                  {/* Step 1 */}
                  <div className="p-3 bg-[#12110F] rounded-xl border border-[rgba(243,208,129,0.08)] relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-[#E2C896] font-bold">STEP 1 • NARRATIVE RESEARCH</span>
                      <span className="text-[9px] text-[#22C55E]">VERIFIED</span>
                    </div>
                    <p className="text-[#D4D4D8] text-[11px]">AI / RWA Inflow Catalyst Detected</p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 bg-[#12110F] rounded-xl border border-[rgba(243,208,129,0.08)] relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-[#E2C896] font-bold">STEP 2 • TECHNICAL INVALIDATION</span>
                      <span className="text-[9px] text-[#22C55E]">SET</span>
                    </div>
                    <p className="text-[#D4D4D8] text-[11px]">Entry: $158.00 • Invalidation: &lt; $150.00</p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 bg-[rgba(226,200,150,0.06)] rounded-xl border border-[#A38B5D]/30 relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-[#E2C896] font-bold">STEP 3 • TELEGRAM ALERT SENT</span>
                      <span className="text-[9px] text-[#E2C896]">DISPATCHED</span>
                    </div>
                    <p className="text-[#FFFFFF] text-[11px] font-bold">⚡ Signal Slate Live in Telegram VIP</p>
                  </div>

                </div>

                {/* Footer Tagline */}
                <div className="pt-2 text-center border-t border-[rgba(243,208,129,0.06)]">
                  <a href="https://t.me/yagacalls" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-wider text-[#E2C896] hover:underline flex items-center justify-center gap-1">
                    <span>Join Telegram Channel</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}
