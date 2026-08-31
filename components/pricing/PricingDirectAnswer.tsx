import Container from "../shared/Container";
import Section from "../shared/Section";

export default function PricingDirectAnswer() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter">How Much Does Yaga Calls Premium Access Cost?</h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              Yaga Calls currently offers discounted manual onboarding pricing for premium Telegram access. Plans are structured by access period and include private signal delivery, market narrative research, structured setup notes, entry and target planning, invalidation context, and risk-aware trading guidance.
            </p>
            <p className="font-bold text-text">
              The current discounted pricing is:
            </p>
            <ul className="space-y-2 border-l-2 border-primary/30 pl-6">
              <li><span className="text-text font-black">Quarterly Access:</span> $250 / 3 months, reduced from $300</li>
              <li><span className="text-text font-black">Half-Yearly Access:</span> $350 / 8 months (Bonus +2 Mo), reduced from $400</li>
              <li><span className="text-text font-black">Yearly Access:</span> $700 / 14 months (Bonus +2 Mo + High Table & Elite Group), reduced from $800</li>
            </ul>
            <p>
              These are onboarding prices for users who are ready to join through the official Telegram manual onboarding process. If you are still evaluating the value of premium research, you can compare <a href="/free-vs-paid-crypto-signals" className="text-primary hover:underline font-bold">free vs paid crypto signals</a> to understand the difference in depth and structure.
            </p>
            <div className="p-8 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
              <p className="font-bold text-text italic">
                Yaga Calls pricing currently uses a limited-time discounted onboarding model for premium Telegram crypto signal access. The discounted plans are designed for serious traders who want market narrative research, structured setup notes, entry and target planning, invalidation logic, and risk-managed trading context without joining cheap pump-call groups or guaranteed-profit schemes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
