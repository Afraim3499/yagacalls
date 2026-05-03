import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import SignalTypesGrid from "@/components/home/SignalTypesGrid";
import WhyJoin from "@/components/home/WhyJoin";
import TrapSection from "@/components/home/TrapSection";
import Comparison from "@/components/home/Comparison";
import PreTradeChecklist from "@/components/home/PreTradeChecklist";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";

export const metadata = {
  title: "Yaga Calls | Professional Crypto Signals & Narrative Analysis",
  description: "Join Yaga Calls for curated crypto trading signals, market narrative analysis, and risk-aware setup ideas delivered through Telegram.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      
      <WhyJoin />
      
      <SignalTypesGrid />

      <PreTradeChecklist />

      <TrapSection />

      <Comparison />

      {/* Final CTA */}
      <Section className="bg-primary/5">
        <Container className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Ready to Trade with Discipline?</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Stop trading on emotion. Start following a systematic, research-backed framework for crypto signal generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="https://t.me/yagacalls" target="_blank" className="px-10 py-5 text-lg" trackingLabel="home_final_join_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="outline" className="px-10 py-5 text-lg" trackingLabel="home_final_view_pricing">
              Compare Premium Plans
            </CTAButton>
          </div>
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
            Manual premium onboarding · Not financial advice · Crypto trading involves risk
          </p>
        </Container>
      </Section>
    </>
  );
}
