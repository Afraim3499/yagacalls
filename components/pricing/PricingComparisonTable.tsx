import Container from "../shared/Container";
import Section from "../shared/Section";

export default function PricingComparisonTable() {
  const rows = [
    ["Quarterly", "$250", "$200 / 3 mo", "$50", "~$67/month", "Testing the method"],
    ["Half-Yearly", "$500", "$300 / 6 mo", "$200", "$50/month", "Best value"],
    ["Yearly", "$1000", "$600 / 12 mo", "$400", "$50/month", "Long-term access"]
  ];

  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Plan Comparison</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Choose the entry point that fits your trading goals. All plans provide the same high-quality signal structure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-deep border-b border-line">
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Plan</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Regular</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-primary">Onboarding</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-danger">Savings</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Monthly Eq.</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map(([plan, regular, onboarding, savings, monthly, bestFor]) => (
                  <tr key={plan} className="hover:bg-surface-deep/50 transition-colors text-sm font-bold">
                    <td className="p-6">{plan}</td>
                    <td className="p-6 text-text-muted line-through opacity-50">{regular}</td>
                    <td className="p-6 text-text">{onboarding}</td>
                    <td className="p-6 text-danger">{savings}</td>
                    <td className="p-6">{monthly}</td>
                    <td className="p-6 text-xs text-text-muted uppercase tracking-tight">{bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-text-muted italic">
          Current prices are limited-time manual onboarding prices. Future pricing may change as premium access and research depth increase.
        </p>
      </Container>
    </Section>
  );
}
