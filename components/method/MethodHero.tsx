import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function MethodHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Risk-First Framework
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              The Yaga Calls Method: Narrative, Timing, and Risk
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-tight">
              Yaga Calls does not chase random pumps. Every serious setup starts with market narrative research, technical structure, liquidity awareness, entry planning, invalidation logic, target mapping, and risk context before it becomes a signal note.
            </p>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                A crypto signal without risk context is not a plan. It is only a guess.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="method_hero_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/proof" variant="secondary" trackingLabel="method_hero_proof">
                View Selected Proof Examples
              </CTAButton>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
            </p>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-[#0a0a0a]">
            <Image 
              src="/hero-dashboard-v2.webp" 
              alt="Yaga Calls method showing crypto signal research with entry target invalidation and risk context" 
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
