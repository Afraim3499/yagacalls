import Container from "../shared/Container";
import Section from "../shared/Section";

export default function PricingComparisonTable() {
  const rows = [
    ["Quarterly", "$300", "$250 / 3 mo", "$50", "~$83/month", "Testing the method"],
    ["Half-Yearly", "$400", "$350 / 8 mo (Bonus)", "$50", "~$44/month", "Best value (8 Mo Access)"],
    ["Yearly", "$800", "$700 / 14 mo (Bonus)", "$100", "~$50/month", "High Table + Elite Group (14 Mo)"]
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

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl relative">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="bg-surface-deep border-b border-line">
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-widest text-text-muted whitespace-nowrap">Plan</th>
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-widest text-text-muted whitespace-nowrap">Regular</th>
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-widest text-primary whitespace-nowrap">Onboarding</th>
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-widest text-danger whitespace-nowrap">Savings</th>
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-widest text-text-muted whitespace-nowrap">Monthly Eq.</th>
                  <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-black uppercase tracking-widest text-text-muted">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map(([plan, regular, onboarding, savings, monthly, bestFor]) => (
                  <tr key={plan} className="hover:bg-surface-deep/50 transition-colors text-xs sm:text-sm font-bold">
                    <td className="p-3.5 sm:p-5 whitespace-nowrap">{plan}</td>
                    <td className="p-3.5 sm:p-5 text-text-muted line-through opacity-50 whitespace-nowrap">{regular}</td>
                    <td className="p-3.5 sm:p-5 text-text whitespace-nowrap">{onboarding}</td>
                    <td className="p-3.5 sm:p-5 text-danger whitespace-nowrap">{savings}</td>
                    <td className="p-3.5 sm:p-5 whitespace-nowrap">{monthly}</td>
                    <td className="p-3.5 sm:p-5 text-[11px] sm:text-xs text-text-muted uppercase tracking-tight">{bestFor}</td>
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
