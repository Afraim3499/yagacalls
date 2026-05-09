import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

const steps = [
  { step: "1", title: "Choose Plan", desc: "Select the premium duration that fits your needs." },
  { step: "2", title: "Message Telegram", desc: "Contact @yagacalls47 to start manual onboarding." },
  { step: "3", title: "Confirm Details", desc: "Get payment instructions and plan confirmation." },
  { step: "4", title: "Get Access", desc: "Receive your private Telegram group invitation link." }
];

export default function OnboardingSection() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Premium Access Should Feel Controlled, Not Random</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Premium crypto signals should not feel like a cheap checkout funnel. For a serious trading community, onboarding matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((s) => (
            <div key={s.step} className="relative p-8 bg-surface border border-line rounded-3xl text-center space-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-background rounded-full flex items-center justify-center font-black text-xl">
                {s.step}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight pt-2">{s.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-sm text-text-muted">
            Yaga Calls uses <a href="/contact" className="text-primary hover:underline font-bold">manual Telegram onboarding</a> for premium access. This helps reduce spam, protect the community, and clarify payment instructions.
          </p>
          <CTAButton href="/pricing" variant="primary" trackingLabel="best_provider_onboarding_pricing">
            Compare Premium Plans
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
