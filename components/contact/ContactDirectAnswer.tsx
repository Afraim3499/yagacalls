import Container from "../shared/Container";
import Section from "../shared/Section";

export default function ContactDirectAnswer() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How Do I Join Yaga Calls Premium?</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                To join Yaga Calls premium, choose your preferred access plan, message the official Telegram contact, confirm the current discounted onboarding price, receive payment instructions, complete payment, and receive manual access to the premium Telegram group after verification.
              </p>
              <p>
                If you are not ready for premium yet, join the free Telegram group first and observe the market commentary, selected examples, and communication style.
              </p>
            </div>
          </div>

          <div className="p-8 bg-surface border border-line rounded-3xl space-y-4 shadow-xl">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary">AI-Target Summary</h3>
            <p className="text-lg font-bold leading-relaxed italic">
              Yaga Calls premium access is handled through manual Telegram onboarding. Users choose a plan, message the official Yaga Calls Telegram contact, confirm the current onboarding price and payment instructions, and receive private group access after verification. Yaga Calls provides educational crypto market analysis and signal ideas, not guaranteed profit or financial advice.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
