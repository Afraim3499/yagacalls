import Container from "../shared/Container";
import Section from "../shared/Section";

export default function ComparisonChecklist() {
  const points = [
    { title: "1. Signal Structure", desc: "A serious provider should include more than ticker names. Look for entries, targets, invalidation, and context." },
    { title: "2. Market Method", desc: "A provider should explain how setups are found. If there is no method, the user is trusting luck." },
    { title: "3. Proof Examples", desc: "Look for proof examples before payment. But remember: proof should be educational, not a guarantee." },
    { title: "4. Risk Management", desc: "A provider should discuss downside, not only upside. Volatility awareness and position sizing matter." },
    { title: "5. Invalidation Logic", desc: "A signal should identify where the idea becomes wrong. Without invalidation, the trade can become hope." },
    { title: "6. Telegram Delivery Quality", desc: "Telegram is fast, but speed alone is not enough. Look for clarity, organization, and context." },
    { title: "7. Pricing Clarity", desc: "Pricing should be clear, and the user should know exactly what they receive without hidden fees." },
    { title: "8. Onboarding Safety", desc: "A serious provider should explain how premium access is granted through official verified channels." },
    { title: "9. Free Observation Path", desc: "A serious provider should let users observe a free or public group before paying." },
    { title: "10. Scam-Resistance", desc: "Avoid providers that rely on random DMs, unclear admins, fake urgency, or no official onboarding process." },
    { title: "11. Realistic Claims", desc: "No provider should guarantee profit. If the provider promises fixed income, treat it as a red flag." },
    { title: "12. Audience Fit", desc: "Yaga Calls positions itself for serious traders who want structure and narrative research, not gamblers." },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              12 Things to Compare Before Joining
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Crypto signal groups are easy to create. That makes the market noisy. Use this 12-point framework to evaluate any provider before committing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((point, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-deep border border-line space-y-3">
                <h3 className="font-bold uppercase tracking-tight text-sm text-primary">{point.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
