import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function PricingHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Limited-Time Onboarding Offer
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Premium Crypto Signal Plans — Limited-Time Onboarding Pricing
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-tight">
              Choose the Yaga Calls plan that fits your trading commitment. For a limited time, premium access is available at reduced manual onboarding pricing for serious traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="pricing_hero_onboarding">
                Start Manual Onboarding
              </CTAButton>
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="secondary" trackingLabel="pricing_hero_free">
                Join Free Telegram First
              </CTAButton>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Not cheap pump calls. Not guaranteed profit. This is limited-time onboarding pricing for serious traders who value structure.
              </p>
              <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
                Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-line shadow-2xl">
            <Image 
              src="/hero-dashboard-v2.webp" 
              alt="Yaga Calls Premium Pricing and Analysis" 
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
