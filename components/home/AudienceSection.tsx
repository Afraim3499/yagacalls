import Container from "../shared/Container";
import Section from "../shared/Section";
import { Check, X, UserCheck, ShieldAlert } from "lucide-react";

export default function AudienceSection() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>BEFORE YOU JOIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Is Yaga Calls Right for You?
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We want people who take trading seriously. Read this before signing up.
          </p>
        </div>

        {/* POLARIZED SPLIT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT CARD (GOLD): YOU WILL LOVE IT HERE IF... */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.80)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/40 to-transparent" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-3 py-1 rounded-full border border-[#A38B5D]/30 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#E2C896]" />
                  <span>QUALIFIED PROFILE</span>
                </span>
                <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold">
                  ● PERFECT FIT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-6">
                You Will Love It Here If...
              </h3>

              <div className="space-y-4">
                {[
                  "You want simple, clear trades instead of 50 spam messages a day.",
                  "You care about protecting your money and using a stop-loss.",
                  "You want to trade calmly from your phone with direct alerts.",
                  "You want steady gains over time, not overnight lottery tickets."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3.5 items-start">
                    <div className="w-6 h-6 rounded-full bg-[rgba(226,200,150,0.15)] border border-[#A38B5D]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#E2C896]" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#FFFFFF] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[rgba(243,208,129,0.08)]">
              <p className="text-xs text-[#E2C896] font-mono font-bold uppercase tracking-widest text-center">
                ✓ Built for disciplined crypto traders
              </p>
            </div>
          </div>

          {/* RIGHT CARD (CHARCOAL/RED): PLEASE DO NOT JOIN IF... */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(15,10,10,0.80)] backdrop-blur-[20px] border border-[#EF4444]/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EF4444]/40 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 px-3 py-1 rounded-full border border-[#EF4444]/30 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#EF4444]" />
                  <span>DISQUALIFIED PROFILE</span>
                </span>
                <span className="text-[10px] font-mono text-[#EF4444] uppercase tracking-widest font-bold">
                  ✕ DO NOT JOIN
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-6">
                Please Do NOT Join If...
              </h3>

              <div className="space-y-4">
                {[
                  "You expect every trade to win with zero losing days.",
                  "You gamble your whole balance on dangerous 50x leverage.",
                  "You blame others when you ignore the stop-loss.",
                  "You are looking for pump-and-dump meme coins."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3.5 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-[#EF4444]" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#A1A1AA] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EF4444]/15">
              <p className="text-xs text-[#71717A] italic leading-relaxed text-center">
                Crypto trading involves risk. We protect capital and enforce trade discipline.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
