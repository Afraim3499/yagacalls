import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function TelegramHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Telegram-First Delivery
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Premium Telegram Crypto Signals for Serious Traders
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-tight">
              Yaga Calls delivers structured crypto signal notes through Telegram — built around market narratives, entry zones, target planning, invalidation logic, and risk-managed trading context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="premium_hero_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" trackingLabel="premium_hero_pricing">
                Compare Premium Plans
              </CTAButton>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Fast enough for crypto. Structured enough for serious traders.
              </p>
              <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
                Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-[#0a0a0a]">
            <Image 
              src="/telegram-mockup-v2.webp" 
              alt="Premium Telegram Crypto Signal Mockup" 
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
