"use client";

import React, { useState } from "react";
import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import { UserCheck, ShieldAlert, Check, X, ArrowRight, Zap, AlertTriangle } from "lucide-react";

export default function AudienceSection() {
  const [selectedMindset, setSelectedMindset] = useState<"gambler" | "trader" | null>(null);

  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-24">
      {/* CSS STAMP ANIMATIONS */}
      <style>{`
        @keyframes stampBounce {
          0% { transform: scale(3) rotate(-15deg); opacity: 0; }
          70% { transform: scale(0.95) rotate(-5deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 1; }
        }

        .animate-stamp {
          animation: stampBounce 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>BEFORE YOU JOIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Be Honest: What Kind of Trader Are You?
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Click one of the mindset options below to test your qualification before joining Yaga Calls.
          </p>
        </div>

        {/* INTERACTIVE TRADE BOUNCER TERMINAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT OPTION: GAMBLER MINDSET (RED BUTTON) */}
          <div 
            onClick={() => setSelectedMindset("gambler")}
            className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[320px] select-none ${
              selectedMindset === "gambler"
                ? "bg-[#2A0C0C] border-2 border-[#EF4444] shadow-[0_0_50px_rgba(239,68,68,0.5)] scale-[1.02]"
                : "bg-[rgba(15,10,10,0.80)] backdrop-blur-[20px] border border-[#EF4444]/30 hover:border-[#EF4444] hover:shadow-[0_10px_30px_rgba(239,68,68,0.2)]"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EF4444]/50 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 px-3 py-1 rounded-full border border-[#EF4444]/30 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
                  <span>OPTION A</span>
                </span>
                <span className="text-[10px] font-mono text-[#EF4444] uppercase tracking-widest font-bold">
                  ● TAP TO TEST
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-3">
                🔴 "I WANT 100x IN 24 HOURS"
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#A1A1AA] leading-relaxed">
                "I want quick money, meme coins, and huge leverage."
              </p>
            </div>

            {/* STAMP / REJECTION STATE */}
            {selectedMindset === "gambler" ? (
              <div className="animate-stamp mt-6 p-4 rounded-2xl bg-[#3F0D0D] border-2 border-[#EF4444] text-[#EF4444] font-mono font-black text-center shadow-2xl">
                <div className="flex items-center justify-center gap-2 text-base sm:text-lg uppercase tracking-wider">
                  <X className="w-6 h-6 text-[#EF4444]" />
                  <span>REJECTED: NOT A FIT</span>
                </div>
                <p className="text-xs font-sans text-[#FFFFFF] mt-1">
                  You will lose your money gambling here. We don't do casino calls or pump-and-dump signals.
                </p>
              </div>
            ) : (
              <div className="mt-8 pt-4 border-t border-[#EF4444]/20 text-center text-xs font-mono text-[#EF4444] font-bold uppercase tracking-widest">
                Tap to test Option A qualification →
              </div>
            )}
          </div>

          {/* RIGHT OPTION: DISCIPLINED TRADER MINDSET (GOLD BUTTON) */}
          <div 
            onClick={() => setSelectedMindset("trader")}
            className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[320px] select-none ${
              selectedMindset === "trader"
                ? "bg-[linear-gradient(145deg,rgba(35,30,23,0.95)_0%,rgba(18,16,14,0.98)_100%)] border-2 border-[#E2C896] shadow-[0_0_60px_rgba(243,208,129,0.4)] scale-[1.02]"
                : "bg-[rgba(14,15,18,0.85)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.2)] hover:border-[#E2C896] hover:shadow-[0_10px_30px_rgba(243,208,129,0.2)]"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/60 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#09090B] bg-[#E2C896] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#09090B]" />
                  <span>OPTION B</span>
                </span>
                <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold">
                  ● RECOMMENDED
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-3">
                🟡 "I WANT TO GROW SAFELY"
              </h3>
              <p className="text-sm sm:text-base font-bold text-[#E2C896] leading-relaxed">
                "I want strict stop-losses, real setups, and steady profits."
              </p>
            </div>

            {/* STAMP / UNLOCK CLEARANCE STATE */}
            {selectedMindset === "trader" ? (
              <div className="animate-stamp mt-6 p-4 rounded-2xl bg-[rgba(226,200,150,0.15)] border-2 border-[#E2C896] text-[#E2C896] font-mono font-black text-center shadow-2xl">
                <div className="flex items-center justify-center gap-2 text-base sm:text-lg uppercase tracking-wider text-[#FFFFFF]">
                  <Check className="w-6 h-6 text-[#22C55E]" />
                  <span className="text-[#E2C896]">ACCESS CLEARED: YOU BELONG HERE</span>
                </div>
                <p className="text-xs font-sans text-[#A1A1AA] mt-1 mb-3">
                  You are ready for disciplined trading. Join our network today.
                </p>
                <CTAButton href="/pricing" variant="primary" fullWidth trackingLabel="home_bouncer_cleared">
                  Get Started Now <ArrowRight className="w-4 h-4 ml-1" />
                </CTAButton>
              </div>
            ) : (
              <div className="mt-8 pt-4 border-t border-[rgba(243,208,129,0.15)] text-center text-xs font-mono text-[#E2C896] font-bold uppercase tracking-widest">
                Tap to test Option B qualification →
              </div>
            )}
          </div>

        </div>
      </Container>
    </Section>
  );
}
