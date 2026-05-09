import Container from "../shared/Container";
import Section from "../shared/Section";

export default function MethodComparison() {
  const rows = [
    { factor: "Main focus", hype: "Excitement", yaga: "Structure" },
    { factor: "Signal style", hype: "'Buy now' calls", yaga: "Setup notes with context" },
    { factor: "Narrative", hype: "Usually vague", yaga: "Core part of research" },
    { factor: "Entry", hype: "Often unclear", yaga: "Entry zone planning" },
    { factor: "Target", hype: "Often exaggerated", yaga: "Target mapping" },
    { factor: "Invalidation", hype: "Often missing", yaga: "Required context" },
    { factor: "Risk", hype: "Ignored or minimized", yaga: "Central part of method" },
    { factor: "Telegram use", hype: "Noise and urgency", yaga: "Fast delivery with structure" },
    { factor: "Claims", hype: "Profit-focused hype", yaga: "Educational, risk-aware framing" },
    { factor: "Audience", hype: "Anyone", yaga: "Serious traders" },
  ];

  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Yaga Calls Method vs Hype-Based Signal Groups
            </h2>
            <p className="text-text-muted">
              Yaga Calls should not try to sound like the loudest group. It should try to sound like the clearest one.
            </p>
          </div>

          <div className="overflow-x-auto border border-line rounded-2xl bg-background shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Hype-Based Signal Groups</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Yaga Calls Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.factor}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{row.hype}</td>
                    <td className="px-6 py-4 text-sm font-medium text-text group-hover:text-primary transition-colors">{row.yaga}</td>
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
