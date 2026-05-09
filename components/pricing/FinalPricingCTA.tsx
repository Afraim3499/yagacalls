import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

export default function FinalPricingCTA() {
  return (
    <Section className="bg-surface-deep">
      <Container className="text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Choose Your Next Step</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            If you are serious and ready for premium access, use the current discounted onboarding price. If you are still evaluating, join the free Telegram group first.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="final_pricing_onboarding">
            Start Manual Onboarding
          </CTAButton>
          <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="secondary" className="px-10" trackingLabel="final_pricing_free">
            Join Free Telegram First
          </CTAButton>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/proof" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
            View Selected Proof Examples
          </a>
          <a href="/verified-crypto-signal-provider" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
            Verified Provider Checklist
          </a>
          <a href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
            Risk Management Guide
          </a>
          <a href="/crypto-signal-provider-comparison" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
            Compare Signal Providers
          </a>
        </div>
      </Container>
    </Section>
  );
}
