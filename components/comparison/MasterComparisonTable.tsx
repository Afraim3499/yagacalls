import Container from "../shared/Container";
import Section from "../shared/Section";

export default function MasterComparisonTable() {
  const rows = [
    { f: "Telegram delivery", c1: "Yes", c2: "Yes", c3: "Sometimes", c4: "Sometimes", c5: "Yes" },
    { f: "Entry/target context", c1: "Limited", c2: "Inconsistent", c3: "Rule-based", c4: "Educational", c5: "Yes" },
    { f: "Invalidation logic", c1: "Rare", c2: "Often missing", c3: "Rule-based", c4: "Educational", c5: "Yes" },
    { f: "Risk management", c1: "Limited", c2: "Often weak", c3: "Depends", c4: "Educational", c5: "Core focus" },
    { f: "Narrative research", c1: "Limited", c2: "Usually weak", c3: "Weak", c4: "Sometimes", c5: "Core focus" },
    { f: "Proof examples", c1: "Limited", c2: "Promotional", c3: "Backtests", c4: "Case studies", c5: "Selected snapshots" },
    { f: "Manual onboarding", c1: "No", c2: "Usually unclear", c3: "No", c4: "Depends", c5: "Yes" },
    { f: "Free observation", c1: "Yes", c2: "Sometimes", c3: "Trial maybe", c4: "Yes", c5: "Yes" },
    { f: "Pricing clarity", c1: "Free", c2: "Often cheap", c3: "Subscription", c4: "Varies", c5: "Clear plans" },
    { f: "Best for", c1: "Observing", c2: "Budget users", c3: "Indicator alerts", c4: "Learning", c5: "Serious traders" },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Crypto Signal Provider Comparison Table</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              This comparison is a positioning guide. The right provider depends on the user’s goals, risk tolerance, and trading experience.
            </p>
          </div>

          <div className="overflow-x-auto border border-line rounded-2xl bg-surface shadow-xl">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-line bg-surface-deep">
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted sticky left-0 bg-surface-deep border-r border-line z-10">Feature</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Free Signal Channel</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Cheap VIP Group</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Automated Bot</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Education Community</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5">Yaga Calls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="px-4 py-4 text-xs font-bold text-text uppercase tracking-tight sticky left-0 bg-surface-deep border-r border-line z-10">{row.f}</td>
                    <td className="px-4 py-4 text-sm text-text-muted">{row.c1}</td>
                    <td className="px-4 py-4 text-sm text-text-muted">{row.c2}</td>
                    <td className="px-4 py-4 text-sm text-text-muted">{row.c3}</td>
                    <td className="px-4 py-4 text-sm text-text-muted">{row.c4}</td>
                    <td className="px-4 py-4 text-sm font-medium text-text bg-primary/5">{row.c5}</td>
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
