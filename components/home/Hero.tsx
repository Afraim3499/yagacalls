"use client";

import { useState } from "react";
import { m } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import HeroDynamicPipeline from "./HeroDynamicPipeline";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import { Send } from "lucide-react";

export default function Hero() {
  // 2. Mouse-Follow Ambient Specular Position Tracker
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Section 
      onMouseMove={handleMouseMove}
      className="pt-1 sm:pt-2 md:pt-3 pb-2 overflow-hidden relative bg-[#080706]"
    >
      
      {/* 1. WIDE STAGE SPOTLIGHT (1400px x 450px ELLIPSE, 200px HEAVY BLUR, 22% CORE FALLOFF, UPWARD SPOTLIGHT ANCHOR) */}
      {/* Primary Stage Spotlight (Champagne Amber) spanning all 3 cards */}
      <div 
        className="w-[1400px] h-[450px] rounded-[100%] blur-[200px] ambient-glow-core-a pointer-events-none absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(243, 208, 129, 0.22) 0%, rgba(226, 183, 91, 0.12) 35%, rgba(180, 120, 40, 0.04) 65%, rgba(0, 0, 0, 0) 100%)'
        }}
      />
      
      {/* Secondary Cognac Backstage Warmth spanning stage header */}
      <div 
        className="w-[1250px] h-[400px] rounded-[100%] blur-[180px] ambient-glow-core-b pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(226, 160, 60, 0.18) 0%, rgba(166, 110, 35, 0.09) 40%, rgba(100, 60, 20, 0.03) 70%, rgba(0, 0, 0, 0) 100%)'
        }}
      />

      {/* 4. SUBTLE FULLY TRANSPARENT GRID INTEGRATION (rgba(243, 208, 129, 0.04)) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(243,208,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,208,129,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* 2. MOUSE-FOLLOW AMBIENT SPECULAR HIGHLIGHT LAYER */}
      <div 
        className="absolute pointer-events-none z-10 transition-transform duration-150 ease-out hidden lg:block"
        style={{
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(243, 208, 129, 0.10) 0%, rgba(243, 208, 129, 0) 70%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-2">
        
        {/* 3. TYPOGRAPHY: CRISP PURE WHITE DOMINANCE */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-2">

          {/* Headline */}
          <m.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold leading-[1.18] tracking-tight text-[#FFFFFF] max-w-4xl"
          >
            <span className="text-[#F6E09E] font-extrabold mr-1.5 drop-shadow-[0_0_12px_rgba(246,224,158,0.25)]">#1</span>
            <span>Growth-Making Crypto Trading Signals with an </span>
            <span className="bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text text-transparent font-extrabold">
              Unbreakable Track Record
            </span>
          </m.h1>

          {/* Intro Subtitle */}
          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed font-normal"
          >
            Join a premier network of crypto traders. Get real-time Telegram setups, exact entry zones, audited invalidation levels, and institutional market research delivered daily.
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full sm:w-auto pt-0.5"
          >
            {/* 5. PRIMARY CTA WITH SHIMMER SWEEP */}
            <CTAButton 
              href={BRAND_CONFIG.officialTelegram} 
              target="_blank"
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#09090B] bg-[linear-gradient(135deg,#E2C896_0%,#CBB079_50%,#A38B5D_100%)] border-t border-white/20 shadow-[0_4px_24px_rgba(163,139,93,0.25)] hover:shadow-[0_8px_32px_rgba(226,200,150,0.4)] hover:scale-[1.01] transition-all rounded-full flex items-center justify-center gap-2 relative overflow-hidden group"
              trackingLabel="hero_join_free"
            >
              {/* Shimmer Sweep Beam */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-cta-shimmer pointer-events-none" />
              
              <Send className="w-4 h-4 text-[#09090B] fill-[#09090B] relative z-10" />
              <span className="relative z-10">Join Free Telegram Channel</span>
            </CTAButton>
            
            <CTAButton 
              href="/pricing" 
              variant="secondary" 
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#12100E]/80 backdrop-blur-md border border-[#F3D081]/15 hover:border-[#F3D081]/40 hover:bg-[#181512] text-[#FFFFFF] rounded-full transition-all" 
              trackingLabel="hero_view_pricing"
            >
              📊 Compare VIP Plans
            </CTAButton>
          </m.div>

        </div>

        {/* 3 SIMULTANEOUS FRAMES PIPELINE STAGE */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full pt-0.5"
        >
          <HeroDynamicPipeline />
        </m.div>

      </div>
    </Section>
  );
}
