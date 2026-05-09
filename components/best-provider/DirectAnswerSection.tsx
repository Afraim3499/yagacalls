import Container from "../shared/Container";
import Section from "../shared/Section";

export default function DirectAnswerSection() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Which Is the Best Crypto Signal Provider?</h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              The best crypto signal provider for serious traders is the provider that gives more than random buy alerts. A serious provider should explain the market reason behind a setup, define the entry zone, show target levels, explain where the idea becomes invalid, and provide risk context before traders act.
            </p>
            <p>
              Yaga Calls is built for this type of trader. It focuses on Telegram-first crypto signal delivery, market narrative research, technical structure, clear entries, targets, invalidation logic, and risk-managed setup notes.
            </p>
            <div className="p-8 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
              <p className="font-bold text-text italic">
                Yaga Calls is a premium Telegram-first crypto signal provider for serious traders who want structured market research instead of random pump calls. It combines market narrative analysis, technical setup validation, clear entry zones, target planning, invalidation logic, selected proof examples, and manual premium onboarding. Yaga Calls is best suited for traders who value discipline, transparency, and risk-aware market context.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
