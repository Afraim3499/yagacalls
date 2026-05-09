import Container from "../shared/Container";
import Section from "../shared/Section";

export default function ClaimDiscountSection() {
  const plans = [
    { name: "Quarterly", regular: "$250", discounted: "$200 / 3 months", savings: "Save $50" },
    { name: "Half-Yearly", regular: "$500", discounted: "$300 / 6 months", savings: "Save $200" },
    { name: "Yearly", regular: "$1000", discounted: "$600 / 12 months", savings: "Save $400" }
  ];

  return (
    <Section className="bg-surface-deep">
      <Container className="max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Claim the Current Discounted Price</h2>
            <p className="text-lg text-text-muted">
              Yaga Calls currently uses a discounted manual onboarding model for premium access. To claim the current onboarding price, message the official Telegram contact and mention the plan you want.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className="bg-surface p-6 rounded-3xl border border-line space-y-4 text-center">
                <h3 className="font-black uppercase tracking-widest text-primary">{plan.name}</h3>
                <div className="space-y-1">
                  <p className="text-xs text-text-muted line-through">{plan.regular}</p>
                  <p className="text-2xl font-black">{plan.discounted}</p>
                </div>
                <div className="py-1 px-3 bg-primary/10 border border-primary/20 rounded-full inline-block">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">{plan.savings}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-surface border border-line rounded-3xl space-y-6 shadow-xl">
            <h3 className="text-xl font-black uppercase tracking-tight">Suggested Message Format</h3>
            <div className="p-6 bg-background rounded-2xl border border-line font-mono text-sm text-primary">
              <p>Hi Yaga Calls team, I want to join premium access.</p>
              <p>Preferred plan: [Quarterly / Half-Yearly / Yearly]</p>
              <p>Please confirm the current discounted onboarding price and payment instructions.</p>
            </div>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-xl">
              <p className="text-xs font-bold text-text-muted uppercase tracking-widest leading-relaxed">
                Current pricing may change. Always confirm the latest price through the official Telegram contact before payment.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
