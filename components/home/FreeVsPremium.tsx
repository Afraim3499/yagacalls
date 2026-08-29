import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import { Check, X, Crown, Sparkles } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants/brand";

export default function FreeVsPremium() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        <div className="text-center mb-14 space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>Membership Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Free Telegram vs Premium Access
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            Start free. Upgrade only when you want complete institutional setup context.
          </p>
        </div>

        {/* ELEVATED PREMIUM COLUMN TABLE */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-[rgba(243,208,129,0.15)] bg-[rgba(14,15,18,0.80)] backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(243,208,129,0.08)] bg-[rgba(7,6,5,0.80)]">
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#8A8A93] w-2/5">
                    Feature Overview
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#A1A1AA] w-3/10">
                    Free Telegram
                  </th>
                  {/* ELEVATED PREMIUM COLUMN HEADER */}
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#E2C896] bg-[rgba(243,208,129,0.08)] border-l border-[rgba(243,208,129,0.20)] w-3/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#E2C896]" />
                      <span>Premium Access</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(243,208,129,0.06)]">
                {[
                  ["General market updates", true, true],
                  ["Selected educational ideas", true, true],
                  ["Community announcements", true, true],
                  ["Public signal-style examples", true, true],
                  ["Basic market commentary", true, true],
                  ["Private premium Telegram channel", false, true],
                  ["Deep narrative setup notes", false, true],
                  ["Entry zone & target levels", false, true],
                  ["Invalidation & R:R parameters", false, true],
                  ["Priority asset watchlists", false, true],
                  ["Manual 1-on-1 onboarding", false, true]
                ].map(([feature, free, premium], i) => (
                  <tr key={i} className="transition-colors hover:bg-[rgba(226,200,150,0.03)] text-xs sm:text-sm">
                    <td className="p-5 sm:p-6 font-bold text-[#FFFFFF]">{feature as string}</td>
                    
                    {/* Free Column */}
                    <td className="p-5 sm:p-6 text-[#A1A1AA]">
                      {typeof free === "boolean" ? (
                        free ? (
                          <div className="flex items-center gap-2 text-[#A1A1AA]">
                            <Check className="w-4 h-4 text-[#E2C896]" />
                            <span className="text-xs font-mono">Included</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-[#71717A]">
                            <X className="w-4 h-4 text-[#EF4444]/50" />
                            <span className="text-xs font-mono text-[#52525B]">Not Included</span>
                          </div>
                        )
                      ) : (
                        free
                      )}
                    </td>

                    {/* Elevated Premium Column */}
                    <td className="p-5 sm:p-6 font-black text-[#E2C896] bg-[rgba(243,208,129,0.04)] border-l border-[rgba(243,208,129,0.12)]">
                      {typeof premium === "boolean" ? (
                        premium ? (
                          <div className="flex items-center gap-2 text-[#E2C896]">
                            <div className="w-5 h-5 rounded-full bg-[rgba(226,200,150,0.15)] border border-[#A38B5D]/40 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-[#E2C896]" />
                            </div>
                            <span className="text-xs font-mono font-bold text-[#FFFFFF]">Full Access</span>
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-[#EF4444]" />
                        )
                      ) : (
                        premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Action Footer */}
          <div className="p-8 bg-[rgba(7,6,5,0.70)] flex flex-col sm:flex-row gap-4 justify-center items-center border-t border-[rgba(243,208,129,0.08)]">
            <CTAButton href={BRAND_CONFIG.officialTelegram} target="_blank" variant="primary" trackingLabel="home_free_vs_premium_join">
              Join Free Telegram First
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="home_free_vs_premium_compare">
              Compare VIP Plans
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
