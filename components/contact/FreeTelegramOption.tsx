import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

export default function FreeTelegramOption() {
  const points = [
    "You are new to Yaga Calls",
    "You want to observe first",
    "You are still learning risk management",
    "You are unsure which plan to choose",
    "You are not ready to pay yet",
    "You want to see the tone and structure first"
  ];

  return (
    <Section className="bg-surface/30">
      <Container className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Not Ready for Premium Yet? Start Free.</h2>
            <p className="text-lg text-text-muted leading-relaxed">
              You do not need to buy premium immediately. The free Telegram group is the best place to understand Yaga Calls before paying. You can review the communication style, selected market notes, educational updates, and public examples before deciding whether premium access makes sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="contact_free_join">
                Join Free Telegram First
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" trackingLabel="contact_free_pricing">
                View Premium Plans
              </CTAButton>
            </div>
          </div>
          <div className="bg-surface p-8 rounded-3xl border border-line space-y-6 shadow-xl">
            <h3 className="text-xl font-black uppercase tracking-tight">Free Telegram is Best If:</h3>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
