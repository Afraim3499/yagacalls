"use client";

import React, { useState } from "react";
import Container from "../shared/Container";
import Section from "../shared/Section";
import { ShieldAlert, Zap, Target, Check, AlertTriangle } from "lucide-react";

export default function ComparisonTrap() {
  const [isHoveredChaos, setIsHoveredChaos] = useState(false);

  const noiseTags = [
    { text: "100x GEM 🚀", top: "12%", left: "15%", delay: "0s", duration: "1.2s", scatter: "translate-x-[-40px] translate-y-[-30px] rotate-[-12deg]" },
    { text: "BUY NOW OR DIE", top: "25%", left: "50%", delay: "0.2s", duration: "0.9s", scatter: "translate-x-[50px] translate-y-[-40px] rotate-[15deg]" },
    { text: "DELETED POST", top: "42%", left: "20%", delay: "0.4s", duration: "1.1s", scatter: "translate-x-[-60px] translate-y-[30px] rotate-[-20deg]" },
    { text: "NO STOP LOSS", top: "35%", left: "62%", delay: "0.1s", duration: "1.3s", scatter: "translate-x-[45px] translate-y-[45px] rotate-[10deg]" },
    { text: "REKT", top: "62%", left: "18%", delay: "0.3s", duration: "0.8s", scatter: "translate-x-[-35px] translate-y-[50px] rotate-[-8deg]" },
    { text: "PUMP & DUMP", top: "58%", left: "55%", delay: "0.5s", duration: "1.0s", scatter: "translate-x-[55px] translate-y-[-25px] rotate-[18deg]" },
    { text: "FOMO NOW!!", top: "78%", left: "32%", delay: "0.2s", duration: "1.4s", scatter: "translate-x-[-25px] translate-y-[60px] rotate-[-15deg]" },
    { text: "100X LEVERAGE", top: "72%", left: "65%", delay: "0.6s", duration: "0.95s", scatter: "translate-x-[60px] translate-y-[35px] rotate-[12deg]" }
  ];

  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-24">
      {/* CSS KEYFRAMES FOR JITTER & PULSE */}
      <style>{`
        @keyframes chaosJitter {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          20% { transform: translate(-3px, 2px) rotate(-1deg); }
          40% { transform: translate(3px, -2px) rotate(1.5deg); }
          60% { transform: translate(-2px, -3px) rotate(-0.5deg); }
          80% { transform: translate(2px, 3px) rotate(1deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        @keyframes laserPulse {
          0%, 100% { opacity: 0.4; transform: scaleX(0.98); }
          50% { opacity: 0.95; transform: scaleX(1.02); }
        }

        @keyframes goldCirclePulse {
          0%, 100% { box-shadow: 0 0 25px rgba(243, 208, 129, 0.2), inset 0 0 15px rgba(243, 208, 129, 0.1); }
          50% { box-shadow: 0 0 45px rgba(243, 208, 129, 0.45), inset 0 0 25px rgba(243, 208, 129, 0.25); }
        }

        .animate-chaos-jitter {
          animation: chaosJitter infinite ease-in-out;
        }

        .animate-laser-beam {
          animation: laserPulse 2.5s infinite ease-in-out;
        }

        .animate-gold-pulse {
          animation: goldCirclePulse 3s infinite ease-in-out;
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
            Hover over the chaos cloud below to see how hype groups scatter when pressure hits, compared to the steady calm of Yaga Calls.
          </p>
        </div>

        {/* GRAVITY FIELDS COMPARISON CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT ZONE: THE CHAOS CLOUD */}
          <div 
            onMouseEnter={() => setIsHoveredChaos(true)}
            onMouseLeave={() => setIsHoveredChaos(false)}
            className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(15,10,10,0.85)] backdrop-blur-[20px] border border-[#EF4444]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group transition-all duration-500 cursor-pointer min-h-[380px] sm:min-h-[420px]"
          >
            {/* Red Specular Top Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EF4444]/50 to-transparent" />

            {/* Header Badge */}
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 px-3 py-1 rounded-full border border-[#EF4444]/30 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>THE CHAOS CLOUD</span>
              </span>
              <span className="text-[10px] font-mono text-[#EF4444]/80 uppercase tracking-widest font-bold">
                ✕ SHAKING NOISE
              </span>
            </div>

            {/* CHAOS GRAVITY FIELD (CANVAS AREA WITH VIBRATING & SCATTERING WORDS) */}
            <div className="relative flex-1 w-full my-4 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.12)_0%,rgba(10,8,8,0.95)_80%)] border border-[#EF4444]/15">
              
              {/* Background SVG Grid Pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="chaos-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#EF4444" strokeWidth="0.5" strokeDasharray="2 2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#chaos-grid)" />
              </svg>

              {/* Floating Jittering & Scattering Text Tags */}
              {noiseTags.map((tag, idx) => (
                <div
                  key={idx}
                  style={{ 
                    top: tag.top, 
                    left: tag.left,
                    animationDuration: tag.duration,
                    animationDelay: tag.delay
                  }}
                  className={`absolute font-mono font-black uppercase text-xs sm:text-sm px-2.5 py-1 rounded-lg border shadow-lg transition-all duration-500 pointer-events-none ${
                    isHoveredChaos 
                      ? `${tag.scatter} bg-[#EF4444]/30 border-[#EF4444] text-[#FFFFFF] scale-110 shadow-[0_0_20px_rgba(239,68,68,0.6)]` 
                      : "animate-chaos-jitter bg-[rgba(25,12,12,0.85)] border-[#EF4444]/40 text-[#EF4444] shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  {tag.text}
                </div>
              ))}

              {/* Center Chaos Core Indicator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full border border-[#EF4444]/20 animate-ping opacity-25" />
              </div>
            </div>

            {/* Bottom Copy Label */}
            <div className="pt-3 border-t border-[#EF4444]/20 text-center">
              <p className="text-xs sm:text-sm font-bold text-[#EF4444] leading-tight">
                The Noise Cloud: <span className="text-[#A1A1AA] font-normal">Constant spam, deleted losses, zero risk plan.</span>
              </p>
            </div>
          </div>

          {/* RIGHT ZONE: THE GOLDEN NEEDLE */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.85)] backdrop-blur-[20px] border-2 border-[#E2C896] shadow-[0_0_45px_rgba(226,200,150,0.15)] flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
            {/* Gold Specular Top Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/60 to-transparent" />

            {/* Header Badge */}
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#09090B] bg-[#E2C896] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#09090B]" />
                <span>THE GOLDEN NEEDLE</span>
              </span>
              <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold">
                ● QUIET PRECISION
              </span>
            </div>

            {/* GOLDEN NEEDLE CANVAS (RAZOR SHARP GOLDEN CIRCLE & STEADY LASER BEAM) */}
            <div className="relative flex-1 w-full my-4 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(243,208,129,0.12)_0%,rgba(10,9,8,0.98)_85%)] border border-[rgba(243,208,129,0.25)] flex items-center justify-center">
              
              {/* Horizontal Golden Laser Trajectory Beam */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#E2C896] to-transparent animate-laser-beam z-0 shadow-[0_0_15px_#E2C896]" />

              {/* Central Razor-Sharp Golden Circle */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#E2C896] bg-[rgba(18,16,14,0.95)] backdrop-blur-md animate-gold-pulse flex flex-col items-center justify-center p-2 text-center">
                <div className="w-2 h-2 rounded-full bg-[#E2C896] mb-1 animate-ping" />
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#E2C896]">
                  YAGA SETUP
                </span>
                <span className="text-xs sm:text-sm font-black text-[#FFFFFF] font-mono">
                  $0.8400
                </span>
                <span className="text-[9px] font-mono text-[#22C55E] font-bold mt-0.5">
                  TARGET +70%
                </span>
              </div>

              {/* HUD Parameter Cards Flanking the Needle */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:block bg-[rgba(10,9,8,0.90)] border border-[rgba(243,208,129,0.2)] rounded-xl p-2 font-mono text-[10px] text-[#A1A1AA] shadow-lg">
                <div className="text-[#E2C896] font-bold">ENTRY</div>
                <div className="text-[#FFFFFF] font-bold">$0.8400</div>
              </div>

              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:block bg-[rgba(10,9,8,0.90)] border border-[#EF4444]/30 rounded-xl p-2 font-mono text-[10px] text-[#A1A1AA] shadow-lg text-right">
                <div className="text-[#EF4444] font-bold">STOP LOSS</div>
                <div className="text-[#FFFFFF] font-bold">$0.7900</div>
              </div>
            </div>

            {/* Bottom Copy Label */}
            <div className="pt-3 border-t border-[rgba(243,208,129,0.2)] text-center">
              <p className="text-xs sm:text-sm font-bold text-[#E2C896] leading-tight">
                Yaga Calls: <span className="text-[#FFFFFF] font-normal">1 solid setup. Exact safety exit. Complete calm.</span>
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
