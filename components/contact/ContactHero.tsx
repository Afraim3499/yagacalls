import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function ContactHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Direct Analyst Access
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Contact Yaga Calls for Manual Telegram Onboarding
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-tight">
              Premium access is handled manually through Telegram so serious members can confirm the plan, current discounted onboarding price, payment instructions, and private group access before joining.
            </p>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl space-y-1">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Official Contact Email: <a href="mailto:partner@yagacalls.com" className="underline hover:text-white">partner@yagacalls.com</a>
              </p>
              <p className="text-[11px] text-text-muted">
                Use official Yaga Calls links only. Avoid fake admins, random DMs, and guaranteed-profit claims.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="contact_hero_start">
                Start Manual Onboarding
              </CTAButton>
              <a href="mailto:partner@yagacalls.com" className="px-6 py-3.5 rounded-xl border border-line bg-surface-deep text-text-high hover:border-primary font-bold text-sm text-center transition-colors">
                ✉️ Email Support
              </a>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
            </p>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-[#0a0a0a]">
            <Image 
              src="/contact-hero-v2.webp" 
              alt="Yaga Calls manual Telegram onboarding for premium crypto signals" 
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
