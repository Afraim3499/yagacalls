import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

const steps = [
  {
    step: "1",
    title: "Choose Your Plan",
    desc: "Review the available Yaga Calls premium plans and choose the access period that fits your commitment."
  },
  {
    step: "2",
    title: "Message on Telegram",
    desc: "Click the official Telegram CTA and message the Yaga Calls team to start manual onboarding."
  },
  {
    step: "3",
    title: "Confirm Details",
    desc: "Confirm the selected plan, payment method, and access instructions with the team."
  },
  {
    step: "4",
    title: "Get Premium Access",
    desc: "After confirmation, you are manually added to the private premium Telegram group."
  }
];

export default function OnboardingSteps() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Manual Premium Onboarding Process</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Yaga Calls does not treat premium access like a cheap anonymous checkout. The process is manual to ensure clarity and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((s) => (
            <div key={s.step} className="relative p-8 bg-surface border border-line rounded-3xl text-center space-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-background rounded-full flex items-center justify-center font-black text-xl">
                {s.step}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight pt-2 leading-tight">{s.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-sm text-text-muted">
            Ready to join the serious trading community? Start the <a href="/contact" className="text-primary hover:underline font-bold">manual premium onboarding</a> today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="premium_onboarding_start">
              Start Manual Onboarding
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="premium_onboarding_pricing">
              View Pricing First
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
