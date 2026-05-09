import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

const steps = [
  {
    step: "1",
    title: "Choose Your Plan",
    desc: "Select Quarterly, Half-Yearly, or Yearly access based on your commitment level."
  },
  {
    step: "2",
    title: "Message on Telegram",
    desc: "Use the official Telegram CTA to contact the Yaga Calls team directly."
  },
  {
    step: "3",
    title: "Confirm Onboarding Price",
    desc: "Ask the team to confirm the current discounted onboarding price and plan availability."
  },
  {
    step: "4",
    title: "Complete & Get Access",
    desc: "Follow the payment instructions and receive manual access to the premium group."
  }
];

export default function ManualOnboardingSection() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Claim Discounted Premium Access</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            The onboarding process is manual so serious members can confirm details and payment instructions safely.
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

        <div className="max-w-xl mx-auto p-6 bg-danger/5 border border-danger/20 rounded-2xl text-center">
          <p className="text-xs font-bold text-danger uppercase tracking-widest mb-2">Safety Note</p>
          <p className="text-xs text-text-muted leading-relaxed">
            Only use official Yaga Calls links. Do not trust random Telegram DMs, fake admins, or anyone promising guaranteed profit.
          </p>
        </div>
      </Container>
    </Section>
  );
}
