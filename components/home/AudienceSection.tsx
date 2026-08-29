import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import { Check, X, UserCheck, ShieldAlert } from "lucide-react";

export default function AudienceSection() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        <div className="text-center mb-14 space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>Trader Qualification Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Is Yaga Calls Right For You?
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            We maintain strict standards to ensure our setup slates serve disciplined crypto traders.
          </p>
        </div>

        {/* POLARIZED SPLIT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT DOSSIER: TRADERS WHO BELONG HERE */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.80)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/40 to-transparent" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-3 py-1 rounded-full border border-[#A38B5D]/30 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#E2C896]" />
                  <span>QUALIFIED PROFILE</span>
                </span>
                <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold">
                  ● HIGH FIT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-4">
                Who Should Join Yaga Calls?
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Yaga Calls is engineered for serious crypto traders who value structured market logic.
              </p>

              <div className="space-y-3.5">
                {[
                  "Understands basic crypto market volatility & position risk",
                  "Seeks trade rationale, invalidation & R:R rules (not blind alerts)",
                  "Prefers fast, mobile Telegram delivery for signal updates",
                  "Follows narrative-backed catalysts and sector rotations",
                  "Appreciates disciplined trade management over hype",
                  "Has capital allocation to properly manage risk parameters",
                  "Values institutional market clarity over low-tier group noise"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[rgba(226,200,150,0.15)] border border-[#A38B5D]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#E2C896]" />
                    </div>
                    <span className="text-sm font-bold text-[#FFFFFF] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[rgba(243,208,129,0.08)]">
              <p className="text-xs text-[#E2C896] font-mono font-bold uppercase tracking-widest text-center">
                ✓ Built for disciplined crypto execution
              </p>
            </div>
          </div>

          {/* RIGHT DOSSIER: WHO THIS IS NOT FOR */}
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

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF] mb-4">
                Who Should NOT Join?
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Yaga Calls is deliberately not built for everyone. Do not join if you are seeking:
              </p>

              <div className="space-y-3.5">
                {[
                  "Guaranteed returns or no-loss trading claims",
                  "Cheap lifetime VIP gimmicks or pump-and-dump alerts",
                  "Gambling-style leverage without stop-loss rules",
                  "Mass automated signal spam with zero context",
                  "Offloading trade responsibility onto someone else",
                  "Hype-driven FOMO coin alerts"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-[#EF4444]" />
                    </div>
                    <span className="text-sm font-medium text-[#A1A1AA] leading-snug line-through decoration-[#EF4444]/50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EF4444]/15">
              <p className="text-xs text-[#71717A] italic leading-relaxed text-center">
                Crypto trading involves real risk. Educational market slates provided, not financial advice.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
