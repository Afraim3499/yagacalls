import Container from "../shared/Container";
import Section from "../shared/Section";
import { Check, X, Shield, Sparkles } from "lucide-react";

export default function ComparisonTrap() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>Market Standard Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Avoid the Signal Group Trap
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            Most crypto signal channels trade hype instead of structure. Here is how Yaga Calls compares.
          </p>
        </div>
        
        {/* ELEVATED WINNER COLUMN TABLE */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-[rgba(243,208,129,0.15)] bg-[rgba(14,15,18,0.80)] backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(243,208,129,0.08)] bg-[rgba(7,6,5,0.80)]">
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#52525B] w-1/2">
                    Typical Signal Group
                  </th>
                  {/* WINNER COLUMN HEADER WITH GLOWING PILL */}
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#E2C896] bg-[rgba(243,208,129,0.08)] border-l border-[rgba(243,208,129,0.20)] relative w-1/2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#E2C896]" />
                      <span>Yaga Calls Standard</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(243,208,129,0.06)]">
                {[
                  ["Random coin names & noise", "Structured narrative setup slates"],
                  ["Late pump-and-dump alerts", "Timing & catalyst-driven entries"],
                  ["Zero stop-loss or risk context", "Hard invalidation & R:R parameters"],
                  ["Fake urgency & hype spam", "Disciplined setup planning"],
                  ["Only shows winning trades", "Audited ledger & educational context"],
                  ["Mass low-quality channels", "Built specifically for serious traders"],
                  ["Cheap lifetime VIP gimmicks", "Verified manual Telegram onboarding"],
                  ["Hype first mindset", "Institutional research first"]
                ].map(([typical, yaga], i) => (
                  <tr key={i} className="transition-colors hover:bg-[rgba(226,200,150,0.03)]">
                    {/* Muted Typical Column */}
                    <td className="p-5 sm:p-6 text-xs sm:text-sm text-[#52525B] flex items-start gap-3">
                      <X className="w-4 h-4 text-[#EF4444]/60 flex-shrink-0 mt-0.5" />
                      <span>{typical}</span>
                    </td>
                    {/* Elevated Yaga Winner Column */}
                    <td className="p-5 sm:p-6 text-xs sm:text-sm font-bold text-[#FFFFFF] bg-[rgba(243,208,129,0.04)] border-l border-[rgba(243,208,129,0.12)]">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[rgba(226,200,150,0.15)] border border-[#A38B5D]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#E2C896]" />
                        </div>
                        <span className="text-[#FFFFFF]">{yaga}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-[rgba(7,6,5,0.70)] text-center border-t border-[rgba(243,208,129,0.08)]">
            <p className="text-xs sm:text-sm text-[#A1A1AA] italic leading-relaxed">
              Yaga Calls is not competing to be the cheapest signal group. We build institutional market clarity for disciplined traders.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
