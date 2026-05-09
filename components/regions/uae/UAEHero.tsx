import Container from "../../shared/Container";
import Section from "../../shared/Section";
import CTAButton from "../../shared/CTAButton";

export default function UAEHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              UAE National Market
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Crypto Signals for UAE Traders
            </h1>
            <p className="text-xl text-text-muted leading-tight">
              Yaga Calls provides Telegram-first crypto signal notes and market analysis for serious traders across the UAE, including Dubai, Abu Dhabi, Sharjah, and other active crypto markets.
            </p>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Built for traders who want narrative research, entry and target context, invalidation logic, and risk-aware setup notes — not random pump calls.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="uae_hero_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" trackingLabel="uae_hero_pricing">
                Compare Discounted Premium Plans
              </CTAButton>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
            </p>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-black flex items-center justify-center">
             {/* UAE Visual */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
             <div className="relative z-10 text-center space-y-6 p-12">
                <div className="text-6xl md:text-8xl animate-pulse">🇦🇪</div>
                <div className="space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">UAE Trading Network</div>
                  <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
                    {["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "RAK"].map((r) => (
                      <span key={r} className="text-[8px] font-black text-text/80 bg-white/5 px-2 py-1 rounded border border-white/10 tracking-widest">{r}</span>
                    ))}
                  </div>
                </div>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
