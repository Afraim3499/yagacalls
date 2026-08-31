"use client";

import React, { useState, useEffect } from "react";
import Container from "../shared/Container";
import Section from "../shared/Section";
import { Filter, Zap, Send, ShieldCheck, Check } from "lucide-react";

export default function WhyJoin() {
  const badCoins = [
    { name: "$PEPE", x: 15, delay: "0s" },
    { name: "$DOGE", x: 30, delay: "0.8s" },
    { name: "$SCAM", x: 45, delay: "1.5s" },
    { name: "$RUG", x: 60, delay: "2.2s" },
    { name: "$PUMP", x: 75, delay: "2.9s" },
    { name: "$SHIB", x: 25, delay: "3.6s" },
    { name: "$MOON", x: 55, delay: "4.3s" }
  ];

  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-24">
      {/* CSS KEYFRAMES FOR FUNNEL COIN DROPS & ZAPS */}
      <style>{`
        @keyframes coinFallAndZap {
          0% {
            transform: translateY(-20px) scale(1);
            opacity: 0.8;
          }
          55% {
            transform: translateY(110px) scale(0.9);
            opacity: 0.9;
            filter: drop-shadow(0 0 0px transparent);
          }
          75% {
            transform: translateY(145px) scale(0.4);
            opacity: 0.8;
            filter: drop-shadow(0 0 10px #EF4444);
            color: #EF4444;
          }
          90%, 100% {
            transform: translateY(165px) scale(0.1);
            opacity: 0;
            filter: drop-shadow(0 0 15px #EF4444);
          }
        }

        @keyframes goldWinnerPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 25px rgba(243, 208, 129, 0.4); }
          50% { transform: scale(1.04); box-shadow: 0 0 45px rgba(243, 208, 129, 0.7); }
        }

        .animate-coin-fall {
          animation: coinFallAndZap 4.5s infinite linear;
        }

        .animate-gold-winner {
          animation: goldWinnerPulse 2.5s infinite ease-in-out;
        }
      `}</style>

      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <Filter className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>HOW WE TRADE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            We Kill 99 Bad Setups So You Only Trade The 1 That Works
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            The Filter: We scan the entire market, throw away the hype and traps, and send only the highest-conviction setup straight to your Telegram.
          </p>
        </div>

        {/* COIN GRINDER FUNNEL MACHINE TERMINAL */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl p-6 sm:p-10 bg-[rgba(14,15,18,0.85)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.2)] shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
          
          {/* Specular Top Reflection */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/50 to-transparent" />

          {/* FUNNEL ANIMATION ENGINE AREA */}
          <div className="relative w-full h-[360px] sm:h-[400px] flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(243,208,129,0.08)_0%,rgba(7,6,5,0.98)_75%)] border border-white/[0.06] p-4">
            
            {/* TOP INPUT ZONE: FAINT BAD COINS FALLING */}
            <div className="w-full h-24 relative z-10">
              <div className="text-center text-[10px] font-mono font-bold uppercase tracking-widest text-[#71717A] mb-2">
                ▼ SCANNING 500+ MARKET ASSETS DAILY
              </div>
              
              {/* Falling Coins */}
              {badCoins.map((coin, i) => (
                <div
                  key={i}
                  style={{
                    left: `${coin.x}%`,
                    animationDelay: coin.delay
                  }}
                  className="animate-coin-fall absolute font-mono font-bold text-[11px] px-2.5 py-1 rounded-full bg-[#18181B] border border-[#3F3F46] text-[#A1A1AA] pointer-events-none shadow-md"
                >
                  {coin.name}
                </div>
              ))}
            </div>

            {/* MID SVG LASER FUNNEL GRID (WITH ZAP SPARKS) */}
            <div className="relative w-full max-w-md h-36 flex items-center justify-center z-20">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E2C896" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#EF4444" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#E2C896" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Laser Funnel Walls */}
                <path d="M 20 10 L 160 120 L 240 120 L 380 10" stroke="url(#funnelGrad)" strokeWidth="3" strokeDasharray="6 3" />
                <line x1="160" y1="120" x2="240" y2="120" stroke="#E2C896" strokeWidth="4" />

                {/* Red Zap Filter Grid Lines */}
                <line x1="80" y1="50" x2="320" y2="50" stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="120" y1="85" x2="280" y2="85" stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.6" />

                {/* Zap Particles */}
                <circle cx="140" cy="90" r="3" fill="#EF4444" className="animate-ping" />
                <circle cx="260" cy="90" r="3" fill="#EF4444" className="animate-ping" style={{ animationDelay: '0.4s' }} />
              </svg>

              {/* Filter Label Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#EF4444] bg-[#180A0A] border border-[#EF4444]/40 px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#EF4444] animate-pulse" />
                  <span>99% DISQUALIFIED & REJECTED</span>
                </span>
              </div>
            </div>

            {/* BOTTOM OUTPUT ZONE: SINGLE SURVIVING GOLD TOKEN WITH EXACT PLAN */}
            <div className="w-full flex flex-col items-center z-30 pb-2">
              <div className="animate-gold-winner bg-[linear-gradient(135deg,#231E17_0%,#12100E_100%)] border-2 border-[#E2C896] rounded-2xl p-4 sm:p-5 text-center max-w-sm w-full relative">
                
                {/* Top Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E2C896] text-[#09090B] text-[9px] font-mono font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#09090B]" />
                  <span>100% HIGHEST CONVICTION</span>
                </div>

                <div className="text-base sm:text-lg font-black text-[#FFFFFF] font-mono tracking-tight mt-1">
                  ★ $SOL BREAKOUT SETUP
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-mono border-t border-[rgba(243,208,129,0.15)] pt-2.5">
                  <div className="bg-[rgba(243,208,129,0.06)] p-1.5 rounded-lg border border-[rgba(243,208,129,0.15)]">
                    <span className="text-[#A1A1AA] text-[10px] block">EXACT ENTRY</span>
                    <span className="text-[#E2C896] font-bold">$158.00</span>
                  </div>
                  <div className="bg-[rgba(239,68,68,0.06)] p-1.5 rounded-lg border border-[#EF4444]/20">
                    <span className="text-[#A1A1AA] text-[10px] block">STOP LOSS</span>
                    <span className="text-[#EF4444] font-bold">$150.00</span>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-[#E2C896] uppercase tracking-wider">
                  <Send className="w-3 h-3 text-[#E2C896]" />
                  <span>Sent Direct To Your Telegram Phone Alert</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
