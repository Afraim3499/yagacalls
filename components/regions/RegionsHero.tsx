import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function RegionsHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Global Trading Hub
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Crypto Signals by Region for Serious Traders Worldwide
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-tight">
              Explore Yaga Calls regional pages for serious crypto traders in GCC, UAE, Dubai, Saudi Arabia, Qatar, UK, Europe, Germany, Switzerland, USA, Australia, Singapore, Russia, and other global markets.
            </p>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Global crypto markets move together, but traders still care about region, timezone, access, trust, and communication style.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="regions_hero_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="#region-grid" variant="secondary" trackingLabel="regions_hero_selector">
                Choose Your Region
              </CTAButton>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
            </p>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-black group flex items-center justify-center">
            <Image 
              src="/regions-hero.webp" 
              alt="Yaga Calls global crypto signal regions map for GCC UAE Dubai UK USA Australia Singapore and Europe" 
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
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
