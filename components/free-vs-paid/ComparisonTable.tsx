import Container from "../shared/Container";
import Section from "../shared/Section";

export default function ComparisonTable() {
  const rows = [
    { feature: "General market updates", free: "Usually yes", paid: "Yes" },
    { feature: "Public commentary", free: "Usually yes", paid: "Yes" },
    { feature: "Basic education", free: "Sometimes", paid: "Yes" },
    { feature: "Selected setup examples", free: "Sometimes", paid: "Yes" },
    { feature: "Full signal structure", free: "Usually limited", paid: "Should be included" },
    { feature: "Entry zone", free: "Sometimes missing", paid: "Should be clear" },
    { feature: "Target levels", free: "Often limited", paid: "Should be clear" },
    { feature: "Invalidation / stop-loss context", free: "Often missing", paid: "Should be included" },
    { feature: "Risk management context", free: "Usually limited", paid: "Should be clear" },
    { feature: "Research depth", free: "Limited", paid: "Deeper" },
    { feature: "Follow-up updates", free: "Limited", paid: "More likely" },
    { feature: "Community quality", free: "Mixed", paid: "More controlled" },
    { feature: "Onboarding", free: "Public access", paid: "Manual or controlled" },
    { feature: "Cost", free: "Free", paid: "Paid" },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Free vs Paid Crypto Signals: Clear Comparison
            </h2>
            <p className="text-text-muted">
              Free crypto signals are not automatically bad. Paid crypto signals are not automatically good. The difference depends on structure, transparency, research depth, and risk communication.
            </p>
          </div>

          <div className="overflow-x-auto border border-line rounded-2xl bg-surface-deep shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Feature</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Free Crypto Signals</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Paid Crypto Signals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{row.free}</td>
                    <td className="px-6 py-4 text-sm font-medium text-text group-hover:text-primary transition-colors">{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
