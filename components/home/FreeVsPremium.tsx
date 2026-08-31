"use client";

import React, { useState, useRef } from "react";
import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import { Crown, Sparkles, Radio, MoveHorizontal } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants/brand";

export default function FreeVsPremium() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-24">
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>PICK YOUR ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            See What VIP Traders See
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Drag the slider to see the difference between general free news and exact VIP trade execution.
          </p>
        </div>

        {/* NIGHT-VISION SCANNER SLIDER TERMINAL */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="max-w-5xl mx-auto overflow-hidden rounded-3xl bg-[#090807] border-2 border-[rgba(243,208,129,0.2)] shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative select-none cursor-ew-resize min-h-[420px] sm:min-h-[460px] flex flex-col justify-between"
        >
          {/* Specular Top Bar */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/60 to-transparent z-30" />

          {/* SLIDER HUD SCREEN CONTAINER */}
          <div className="relative w-full flex-1 overflow-hidden min-h-[340px] sm:min-h-[380px]">
            
            {/* LAYER 1: LEFT SIDE (FREE CHANNEL - FOGGY / MUTED DIM GLASS) */}
            <div className="absolute inset-0 p-6 sm:p-10 bg-[radial-gradient(ellipse_at_top_left,rgba(30,27,24,0.9)_0%,rgba(10,9,8,0.98)_80%)] flex flex-col justify-between filter blur-[0.4px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#71717A] bg-[#18181B] px-3 py-1 rounded-full border border-[#27272A]">
                    FREE TELEGRAM VIEW
                  </span>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest font-bold">
                    🌫️ FOGGY / GENERAL COMMENTARY
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#A1A1AA] mb-4">
                  Free Channel Feed
                </h3>

                <div className="space-y-3 font-mono text-xs sm:text-sm text-[#71717A] max-w-md">
                  <div className="p-3 rounded-xl bg-[#141210]/60 border border-[#27272A]">
                    "Bitcoin looking weak today. Watch out for volatility."
                  </div>
                  <div className="p-3 rounded-xl bg-[#141210]/60 border border-[#27272A]">
                    "Altcoins might bounce soon if support holds."
                  </div>
                  <div className="p-3 rounded-xl bg-[#141210]/60 border border-[#27272A] opacity-60">
                    (Delayed general updates with zero exact buy or sell levels)
                  </div>
                </div>
              </div>
            </div>

            {/* LAYER 2: RIGHT SIDE (VIP RADAR - SHARP GOLD HUD WITH CLIP PATH) */}
            <div 
              style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
              className="absolute inset-0 p-6 sm:p-10 bg-[radial-gradient(ellipse_at_center,rgba(243,208,129,0.15)_0%,rgba(10,9,8,0.98)_85%)] flex flex-col justify-between transition-none z-10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-black uppercase tracking-widest text-[#09090B] bg-[#E2C896] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#09090B]" />
                    <span>VIP NIGHT-VISION RADAR</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold flex items-center gap-1">
                    <Radio className="w-3 h-3 text-[#22C55E] animate-pulse" />
                    <span>LIVE SIGNAL EXECUTION</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#FFFFFF] mb-4">
                  VIP Execution Radar
                </h3>

                <div className="space-y-3 font-mono text-xs sm:text-sm max-w-md">
                  <div className="p-3 rounded-xl bg-[rgba(243,208,129,0.10)] border border-[rgba(243,208,129,0.3)] text-[#FFFFFF] flex items-center justify-between shadow-lg">
                    <span className="text-[#E2C896] font-bold">● EXACT ENTRY:</span>
                    <span className="font-extrabold text-[#FFFFFF]">$0.8400</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[rgba(239,68,68,0.10)] border border-[#EF4444]/30 text-[#FFFFFF] flex items-center justify-between shadow-lg">
                    <span className="text-[#EF4444] font-bold">● STOP LOSS:</span>
                    <span className="font-extrabold text-[#FFFFFF]">$0.7900</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[rgba(34,197,94,0.10)] border border-[#22C55E]/30 text-[#FFFFFF] flex items-center justify-between shadow-lg">
                    <span className="text-[#22C55E] font-bold">● TAKE PROFIT 1:</span>
                    <span className="font-extrabold text-[#FFFFFF]">$1.1500 (+36.9%)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#181614] border border-[#A38B5D]/30 text-[11px] text-[#E2C896] font-bold text-center">
                    ✓ LIVE 1-ON-1 DESK ACTIVE & REAL-TIME ALERTS
                  </div>
                </div>
              </div>
            </div>

            {/* DRAGGABLE VERTICAL GOLD SLIDER LINE & HANDLE */}
            <div 
              style={{ left: `${sliderPos}%` }}
              className="absolute top-0 bottom-0 w-1 bg-[#E2C896] z-20 shadow-[0_0_15px_#E2C896] transition-none pointer-events-none"
            >
              {/* Center Handle Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#E2C896] text-[#09090B] border-2 border-[#FFFFFF] flex items-center justify-center shadow-[0_0_20px_rgba(243,208,129,0.8)] font-bold">
                <MoveHorizontal className="w-5 h-5 text-[#09090B]" />
              </div>
            </div>

          </div>

          {/* ACTION BUTTON FOOTER */}
          <div className="p-6 bg-[#0E0D0B] border-t border-[rgba(243,208,129,0.15)] flex flex-col sm:flex-row gap-4 justify-between items-center z-30">
            <div className="text-xs font-mono text-[#A1A1AA] text-center sm:text-left">
              <span className="text-[#E2C896] font-bold">◄ DRAG SLIDER ►</span> to compare Free updates vs VIP execution
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <CTAButton 
                href={BRAND_CONFIG.officialTelegram} 
                target="_blank" 
                variant="secondary" 
                trackingLabel="home_scanner_free"
              >
                Join Free Channel
              </CTAButton>
              <CTAButton 
                href="/pricing" 
                variant="primary" 
                trackingLabel="home_scanner_vip"
              >
                Get VIP Access Now
              </CTAButton>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
