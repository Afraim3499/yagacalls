import Container from "../../shared/Container";
import Section from "../../shared/Section";
import CTAButton from "../../shared/CTAButton";
import Image from "next/image";

export default function GCCHero() {
  return (
    <Section className="pt-24 pb-16 bg-surface-deep border-b border-line overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Premium GCC Access
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Crypto Signals for GCC Traders
            </h1>
            <p className="text-xl text-text-muted leading-tight max-w-2xl mx-auto lg:mx-0">
              Yaga Calls provides Telegram-first crypto signal notes and market analysis for serious traders across the Gulf region, including UAE, Dubai, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.
            </p>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl max-w-2xl mx-auto lg:mx-0">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Built for traders who want structure, market narratives, risk context, and manual onboarding — not random pump calls.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="gcc_hero_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" trackingLabel="gcc_hero_pricing">
                Compare Discounted Premium Plans
              </CTAButton>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
            </p>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-black group flex items-center justify-center">
             {/* Premium CSS GCC Visual */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             
             {/* Glowing Grid Map Points */}
             <div className="relative z-10 text-center space-y-8 p-12">
                <div className="text-6xl md:text-8xl animate-pulse">🕌</div>
                <div className="space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Gulf Cooperation Council</div>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-xs mx-auto">
                    {["UAE", "DUBAI", "KSA", "QATAR", "KUWAIT", "BAHRAIN", "OMAN"].map((r) => (
                      <span key={r} className="text-[8px] font-black text-text/80 bg-white/5 px-2 py-1 rounded border border-white/10 tracking-widest">{r}</span>
                    ))}
                  </div>
                </div>
                {/* Simulated Signal Card */}
                <div className="p-4 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl text-left space-y-2 max-w-[240px] mx-auto shadow-2xl">
                   <div className="flex justify-between items-center border-b border-line pb-2">
                      <span className="text-[10px] font-black text-primary">SIGNAL NOTE</span>
                      <span className="text-[8px] text-text-muted">BTC/USDT</span>
                   </div>
                   <div className="grid grid-cols-2 gap-2 text-[8px] font-black uppercase">
                      <div className="text-text-muted">ENTRY:</div>
                      <div className="text-text">LIMIT ORDER</div>
                      <div className="text-text-muted">TARGET:</div>
                      <div className="text-text">ZONE 1-3</div>
                      <div className="text-text-muted">INVALIDATION:</div>
                      <div className="text-danger">STOP LOSS</div>
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
