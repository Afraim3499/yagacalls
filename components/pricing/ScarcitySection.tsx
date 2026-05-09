import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

export default function ScarcitySection() {
  return (
    <Section className="bg-surface-deep">
      <Container className="max-w-4xl text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">This Is Not Permanent Cheap Access</h2>
        <div className="space-y-6 text-lg text-text-muted leading-relaxed">
          <p>
            The current prices are onboarding prices. They may change as Yaga Calls expands its premium research, improves signal delivery, and grows its serious member base.
          </p>
          <p>
            Yaga Calls is not trying to become the cheapest crypto signal group. The goal is to maintain a premium Telegram signal environment for traders who value structure, risk context, and disciplined market analysis.
          </p>
        </div>
        <div className="pt-6">
          <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="scarcity_onboarding">
            Start Manual Onboarding
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
