import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function ComparisonHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Evaluation Guide
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Free vs Paid Crypto Signals: What Serious Traders Should Know
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-tight">
              Free crypto signals can help you observe market commentary and understand a provider’s style. Paid crypto signals are only worth considering when they add deeper structure: market research, entry zones, target planning, invalidation logic, risk context, and clearer Telegram delivery.
            </p>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Start free. Upgrade only if the structure, research, and risk context make sense.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="free_vs_paid_hero_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" trackingLabel="free_vs_paid_hero_pricing">
                Compare Premium Plans
              </CTAButton>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
            </p>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-[#0a0a0a]">
            <Image 
              src="/free-vs-paid-hero.webp" 
              alt="Free vs paid crypto signals comparison for Yaga Calls Telegram access" 
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
