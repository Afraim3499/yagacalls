import Container from "../shared/Container";
import Section from "../shared/Section";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export default function ComparisonTrap() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>THE HONEST TRUTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Sick of Losing Money in Noisy Signal Groups?
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Here is why most Telegram channels wreck your account, and how we do things differently.
          </p>
        </div>

        {/* 2-CARD SIDE-BY-SIDE COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT CARD: OTHER SIGNAL GROUPS (RED ACCENT) */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(15,10,10,0.80)] backdrop-blur-[20px] border border-[#EF4444]/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EF4444]/40 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 px-3 py-1 rounded-full border border-[#EF4444]/30">
                  OTHER SIGNAL GROUPS
                </span>
                <span className="text-[10px] font-mono text-[#EF4444] uppercase tracking-widest font-bold">
                  ✕ HIGH RISK / NOISY
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-6">
                Other Signal Groups
              </h3>

              <div className="space-y-4">
                {[
                  'Spamming 20 coins a day shouting "100x GEM 🚀"',
                  'Zero stop-loss advice, so you get stuck losing money',
                  'Deleting losing posts and showing only fake profits',
                  'Leaving you completely alone when the market dumps'
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
              <p className="text-xs text-[#EF4444]/80 font-mono font-bold uppercase tracking-widest text-center">
                ✕ Wrecks consistency & account discipline
              </p>
            </div>
          </div>

          {/* RIGHT CARD: THE YAGA STANDARD (GOLD ACCENT / ELEVATED FEATURED) */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.85)] backdrop-blur-[20px] border-2 border-[#E2C896] shadow-[0_0_40px_rgba(226,200,150,0.15)] flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/60 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#09090B] bg-[#E2C896] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#09090B]" />
                  <span>THE YAGA STANDARD</span>
                </span>
                <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold">
                  ● DISCIPLINED EXECUTION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-6">
                The Yaga Standard
              </h3>

              <div className="space-y-4">
                {[
                  "Only 1 to 3 solid setups when the market is right",
                  "Clear stop-loss on every single trade to protect your funds",
                  "Real wins and real losses tracked openly",
                  "Simple explanations so you know why you are buying"
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

            <div className="mt-8 pt-4 border-t border-[rgba(243,208,129,0.15)]">
              <p className="text-xs text-[#E2C896] font-mono font-bold uppercase tracking-widest text-center">
                ✓ Built for steady, long-term market growth
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
