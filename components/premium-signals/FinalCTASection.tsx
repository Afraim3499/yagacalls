import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

export default function FinalCTASection() {
  return (
    <Section>
      <Container className="text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Are Paid Telegram Crypto Signals Worth It?</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-text-muted text-lg leading-relaxed">
            Paid Telegram crypto signals may be worth it if the provider gives structure, research, risk context, and clear communication. They are not worth it if the group only provides random coin names, hype calls, or guaranteed-profit claims. Review our <a href="/proof" className="text-primary hover:underline font-bold">selected proof examples</a> to understand our research style.
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Start With the Free Telegram Group</h3>
            <p className="text-text-muted max-w-xl mx-auto text-sm">
              The best way to evaluate Yaga Calls is to observe the free Telegram group first. Review the market notes and communication style. If the structure fits your trading mindset, then compare <a href="/pricing" className="text-primary hover:underline font-bold">premium crypto signal plans</a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="premium_final_free"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" className="px-10" trackingLabel="premium_final_pricing">
              Compare Premium Plans
            </CTAButton>
          </div>
        </div>

        <div className="pt-12 border-t border-line space-y-4">
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Yaga Calls provides educational market analysis and signal ideas. Crypto trading involves risk. No content on this page is financial advice or a guarantee of profit. <a href="/crypto-signal-provider-comparison" className="text-primary hover:underline">Provider comparison</a> guide.
          </p>
        </div>
      </Container>
    </Section>
  );
}
