import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

export default function FinalCTA() {
  return (
    <Section className="bg-primary/5">
      <Container className="text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Start With the Free Telegram Group</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-text-muted text-lg leading-relaxed">
            The best way to judge Yaga Calls is to watch the free Telegram group first. Review the market notes, selected examples, and communication style. If the structure fits your trading mindset, you can compare <a href="/pricing" className="text-primary hover:underline">premium crypto signal plans</a> later.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton 
            href="https://t.me/+JFf8kBf01mg3OTg1" 
            target="_blank"
            trackingLabel="home_final_join_free"
          >
            Join Free Telegram
          </CTAButton>
          <CTAButton href="/pricing" variant="secondary" className="px-10" trackingLabel="home_final_compare_plans">
            Compare Premium Plans
          </CTAButton>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-2xl mx-auto">
            Yaga Calls provides educational market analysis and signal ideas. Crypto trading involves risk. No content on this website should be treated as financial advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[10px] text-text-muted/60 italic uppercase tracking-widest">
            <a href="/verified-crypto-signal-provider" className="hover:text-primary transition-colors">Verified Crypto Signal Provider</a>
            <span>•</span>
            <a href="/best-crypto-signal-provider" className="hover:text-primary transition-colors">Best Crypto Signal Provider</a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
