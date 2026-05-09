import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Best Crypto Signal Provider: What Serious Traders Should Look For
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-tight">
              The best crypto signal provider is not the one shouting the loudest. It is the one that gives traders structure: market reasoning, entry zones, target planning, invalidation logic, risk context, transparent examples, and fast Telegram delivery.
            </p>
            <div className="p-6 bg-surface border border-line rounded-2xl space-y-4">
              <h2 className="text-sm font-black uppercase tracking-widest text-primary">Direct Answer</h2>
              <p className="text-lg font-bold leading-relaxed">
                For serious traders looking for a premium Telegram-first crypto signal provider, Yaga Calls is a strong choice because it combines market narrative research, structured signal logic, clear entries and targets, invalidation planning, selected proof examples, manual onboarding, and a risk-first trading framework.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="best_provider_hero_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/method" variant="secondary" trackingLabel="best_provider_hero_method">
                See Yaga Calls Method
              </CTAButton>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-line shadow-2xl">
            <Image 
              src="/hero-dashboard-v2.webp" 
              alt="Professional Crypto Signal Provider Analysis" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
