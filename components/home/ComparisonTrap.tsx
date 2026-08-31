"use client";

import React, { useState } from "react";
import Container from "../shared/Container";
import Section from "../shared/Section";
import { ShieldAlert, Target, Check, AlertTriangle } from "lucide-react";

export default function ComparisonTrap() {
  const [isHoveredChaos, setIsHoveredChaos] = useState(false);

  const noiseTags = [
    { text: "100x GEM 🚀", top: "12%", left: "15%", delay: "0s", duration: "6s", scatter: "translate-x-[-40px] translate-y-[-30px] rotate-[-12deg]" },
    { text: "BUY NOW!!", top: "25%", left: "50%", delay: "1.2s", duration: "5.5s", scatter: "translate-x-[50px] translate-y-[-40px] rotate-[15deg]" },
    { text: "DELETED LOSS", top: "42%", left: "20%", delay: "2.4s", duration: "6.5s", scatter: "translate-x-[-60px] translate-y-[30px] rotate-[-20deg]" },
    { text: "NO STOP LOSS", top: "35%", left: "62%", delay: "0.8s", duration: "7s", scatter: "translate-x-[45px] translate-y-[45px] rotate-[10deg]" },
    { text: "REKT", top: "62%", left: "18%", delay: "1.8s", duration: "5s", scatter: "translate-x-[-35px] translate-y-[50px] rotate-[-8deg]" },
    { text: "PUMP & DUMP", top: "58%", left: "55%", delay: "3s", duration: "6.2s", scatter: "translate-x-[55px] translate-y-[-25px] rotate-[18deg]" },
    { text: "FOMO NOW!!", top: "78%", left: "32%", delay: "1.5s", duration: "6.8s", scatter: "translate-x-[-25px] translate-y-[60px] rotate-[-15deg]" },
    { text: "100X LEVERAGE", top: "72%", left: "65%", delay: "3.5s", duration: "5.8s", scatter: "translate-x-[60px] translate-y-[35px] rotate-[12deg]" }
  ];

  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-24">
      {/* CSS KEYFRAMES FOR GENTLE DRIFT */}
      <style>{`
        @keyframes gentleDrift {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(2px, -2px); }
        }

        .animate-gentle-drift {
          animation: gentleDrift infinite ease-in-out;
        }
      `}</style>

      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>THE HONEST TRUTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            99% of Telegram Groups Are Just Loud Noise
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Here is why most Telegram channels wreck your account, and how we do things differently.
          </p>
        </div>

        {/* 2 SIDE-BY-SIDE VISUAL ZONES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT ZONE: OTHER SIGNAL GROUPS (NOISE CLOUD) */}
          <div 
            onMouseEnter={() => setIsHoveredChaos(true)}
            onMouseLeave={() => setIsHoveredChaos(false)}
            className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(15,10,10,0.85)] backdrop-blur-[20px] border border-[#EF4444]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group transition-all duration-500 cursor-pointer min-h-[380px] sm:min-h-[420px]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EF4444]/50 to-transparent" />

            {/* Header Badge */}
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 px-3 py-1 rounded-full border border-[#EF4444]/30 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>OTHER SIGNAL GROUPS</span>
              </span>
              <span className="text-[10px] font-mono text-[#EF4444]/80 uppercase tracking-widest font-bold">
                ✕ MESSY SPAM
              </span>
            </div>

            {/* FLOATING SPAM WORDS CANVAS */}
            <div className="relative flex-1 w-full my-4 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.10)_0%,rgba(10,8,8,0.95)_80%)] border border-[#EF4444]/15">
              
              {/* Background Grid */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="chaos-grid-2" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#EF4444" strokeWidth="0.5" strokeDasharray="2 2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#chaos-grid-2)" />
              </svg>

              {/* Floating Gentle Tags */}
              {noiseTags.map((tag, idx) => (
                <div
                  key={idx}
                  style={{ 
                    top: tag.top, 
                    left: tag.left,
                    animationDuration: tag.duration,
                    animationDelay: tag.delay
                  }}
                  className={`absolute font-mono font-bold uppercase text-xs sm:text-sm px-2.5 py-1 rounded-lg border transition-all duration-500 pointer-events-none ${
                    isHoveredChaos 
                      ? `${tag.scatter} bg-[#EF4444]/30 border-[#EF4444] text-[#FFFFFF] scale-105 shadow-[0_0_15px_rgba(239,68,68,0.5)]` 
                      : "animate-gentle-drift bg-[rgba(25,12,12,0.85)] border-[#EF4444]/40 text-[#EF4444]"
                  }`}
                >
                  {tag.text}
                </div>
              ))}
            </div>

            {/* Bottom Copy Label */}
            <div className="pt-3 border-t border-[#EF4444]/20 text-center">
              <p className="text-xs sm:text-sm font-bold text-[#EF4444] leading-tight">
                Other Signal Groups: <span className="text-[#A1A1AA] font-normal">Constant spam, deleted losses, zero risk plan.</span>
              </p>
            </div>
          </div>

          {/* RIGHT ZONE: THE YAGA STANDARD */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.85)] backdrop-blur-[20px] border-2 border-[#E2C896] shadow-[0_0_45px_rgba(226,200,150,0.15)] flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/60 to-transparent" />

            {/* Header Badge */}
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#09090B] bg-[#E2C896] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#09090B]" />
                <span>THE YAGA STANDARD</span>
              </span>
              <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold">
                ● 1 CLEAR TRADE
              </span>
            </div>

            {/* CLEAN SETUP CARD */}
            <div className="relative flex-1 w-full my-4 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(243,208,129,0.12)_0%,rgba(10,9,8,0.98)_85%)] border border-[rgba(243,208,129,0.25)] flex items-center justify-center p-4">
              
              <div className="w-full max-w-sm bg-[rgba(18,16,14,0.95)] border border-[#E2C896]/40 rounded-2xl p-5 shadow-2xl space-y-3 font-mono">
                <div className="flex items-center justify-between border-b border-[rgba(243,208,129,0.15)] pb-2.5">
                  <span className="text-xs font-bold text-[#E2C896] uppercase">Trade Setup #104</span>
                  <span className="text-[10px] text-[#22C55E] font-bold">ACTIVE</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-[rgba(243,208,129,0.06)] p-2 rounded-xl border border-[rgba(243,208,129,0.15)]">
                    <span className="text-[10px] text-[#A1A1AA] block">BUY AT</span>
                    <span className="font-bold text-[#FFFFFF]">$0.8400</span>
                  </div>
                  <div className="bg-[rgba(239,68,68,0.06)] p-2 rounded-xl border border-[#EF4444]/20">
                    <span className="text-[10px] text-[#A1A1AA] block">SAFETY EXIT</span>
                    <span className="font-bold text-[#EF4444]">$0.7900</span>
                  </div>
                  <div className="bg-[rgba(34,197,94,0.06)] p-2 rounded-xl border border-[#22C55E]/20">
                    <span className="text-[10px] text-[#A1A1AA] block">PROFIT TARGET</span>
                    <span className="font-bold text-[#22C55E]">+$700</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#A1A1AA] font-sans text-center pt-1">
                  Simple setup logic. Clear safety rules. No noise.
                </div>
              </div>
            </div>

            {/* Bottom Copy Label */}
            <div className="pt-3 border-t border-[rgba(243,208,129,0.2)] text-center">
              <p className="text-xs sm:text-sm font-bold text-[#E2C896] leading-tight">
                The Yaga Standard: <span className="text-[#FFFFFF] font-normal">1 solid setup. Exact safety exit. Complete calm.</span>
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
