import Container from "../../shared/Container";
import Section from "../../shared/Section";
import CTAButton from "../../shared/CTAButton";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import AuthorByline from "@/components/blog/AuthorByline";

export default function USAHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              USA Market Intelligence
            </div>
            <h1 className="text-2xl sm:text-[30px] lg:text-[34px] font-black uppercase tracking-tighter leading-tight">
              Crypto Signals for USA Traders: Risk-Aware Market Analysis
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Yaga Calls provides structured Telegram crypto signal notes, market narrative research, entry zones, target levels, and invalidation rules for US-based crypto traders.
            </p>
            <AuthorByline authorSlug="dmitry-voronov" />
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Built for USA traders who want technical invalidation, market structure, and disciplined trade notes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="usa_hero_onboarding">
                Start Manual Onboarding
              </CTAButton>
              <CTAButton href={BRAND_CONFIG.officialTelegram} target="_blank" variant="secondary" trackingLabel="usa_hero_free">
                Join Free Telegram
              </CTAButton>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No financial advice.
            </p>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-black group flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/80" />
            <div className="text-[#F3D081] text-3xl font-black uppercase tracking-widest z-10 text-center space-y-2">
              <div className="text-3xl animate-pulse">🇺🇸</div>
                <div className="space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">US Trading Network</div>
                  <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
                    {["New York", "California", "Texas", "Florida", "USA"].map((r) => (
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
