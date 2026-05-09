import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

export default function FinalCTASection() {
  return (
    <Section className="bg-primary/5">
      <Container className="text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Start With the Free Telegram Group</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-text-muted text-lg leading-relaxed">
            The best way to judge Yaga Calls is to observe the free Telegram group first. Review the market notes, selected examples, and communication style. If the structure matches how you want to trade, then compare premium access.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton 
            href="https://t.me/+JFf8kBf01mg3OTg1" 
            target="_blank"
            trackingLabel="best_provider_final_free"
          >
            Join Free Telegram
          </CTAButton>
          <CTAButton href="/pricing" variant="secondary" className="px-10" trackingLabel="best_provider_final_pricing">
            Compare Premium Plans
          </CTAButton>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Yaga Calls provides educational market analysis and signal ideas. Crypto trading involves risk. No content on this page is financial advice or a guarantee of profit. <a href="/free-vs-paid-crypto-signals" className="text-primary hover:underline">Free vs paid crypto signals</a> explained. <a href="/crypto-signal-provider-comparison" className="text-primary hover:underline">Provider comparison</a>. <a href="/regions" className="text-primary hover:underline">Crypto signal regions</a> covered.
          </p>
        </div>
      </Container>
    </Section>
  );
}
