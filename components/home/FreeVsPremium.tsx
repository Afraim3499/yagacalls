import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import { Check, Crown, Sparkles } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants/brand";

export default function FreeVsPremium() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>PICK YOUR ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Start Free. Upgrade When You Are Ready.
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Test our market updates for free, or jump into VIP for full real-time trade signals.
          </p>
        </div>

        {/* 2-TIER CARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto relative">
          
          {/* GOLD AMBIENT FLOOR GLOW BEHIND FEATURED VIP CARD */}
          <div 
            className="w-[450px] h-[450px] rounded-full blur-[180px] pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(243, 208, 129, 0.14) 0%, rgba(226, 183, 91, 0.04) 50%, transparent 75%)'
            }}
          />

          {/* LEFT CARD: FREE TELEGRAM CHANNEL */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.65)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.10)] border-t-[rgba(243,208,129,0.20)] flex flex-col justify-between z-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/30 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A1A1AA] bg-[rgba(226,200,150,0.06)] px-3 py-1 rounded-full border border-[rgba(243,208,129,0.12)]">
                  FREE ACCESS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF]">
                Free Telegram Channel
              </h3>
              <p className="text-xl font-bold font-mono text-[#E2C896] mt-2 mb-6">
                Always Free
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Daily market updates so you never get caught off guard",
                  "Occasional free trade setups with entry and targets",
                  "Weekly recaps showing what is moving next"
                ].map((bullet, i) => (
                  <div key={i} className="flex gap-3.5 items-start">
                    <Check className="w-5 h-5 text-[#E2C896] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-bold text-[#A1A1AA] leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(243,208,129,0.08)]">
              <CTAButton 
                href={BRAND_CONFIG.officialTelegram} 
                target="_blank" 
                variant="secondary" 
                fullWidth 
                trackingLabel="home_free_vs_vip_free"
              >
                Join Free Telegram
              </CTAButton>
            </div>
          </div>

          {/* RIGHT CARD: VIP SIGNALS CHANNEL (FEATURED CARD) */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.85)] backdrop-blur-[20px] border-2 border-[#E2C896] shadow-[0_0_50px_rgba(226,200,150,0.20)] flex flex-col justify-between z-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/60 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#09090B] bg-[#E2C896] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#09090B]" />
                  <span>MOST POPULAR</span>
                </span>
                <span className="text-[10px] font-mono text-[#E2C896] uppercase tracking-widest font-bold">
                  ● VIP MEMBER CHANNEL
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#FFFFFF]">
                VIP Signals Channel
              </h3>
              <p className="text-xl font-bold font-mono text-[#E2C896] mt-2 mb-6">
                Full Access
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Real-time trade alerts the second we enter",
                  "Exact buy zone, profit targets, and stop-loss levels",
                  "Live updates telling you when to take profit or adjust risk",
                  "1-on-1 support to help you get set up on Telegram"
                ].map((bullet, i) => (
                  <div key={i} className="flex gap-3.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-[rgba(226,200,150,0.15)] border border-[#A38B5D]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#E2C896]" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#FFFFFF] leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(243,208,129,0.15)]">
              <CTAButton 
                href="/pricing" 
                variant="primary" 
                fullWidth 
                trackingLabel="home_free_vs_vip_vip"
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
