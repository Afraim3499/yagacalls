import Container from "../shared/Container";
import Section from "../shared/Section";

export default function RegionalExperienceTable() {
  const rows = [
    { f: "Telegram access", g: "Global", r: "Region-specific CTA and context" },
    { f: "Market analysis", g: "Global crypto markets", r: "Local search relevance" },
    { f: "Signal delivery", g: "Telegram-first", r: "Timezone/session framing" },
    { f: "Proof", g: "Selected global examples", r: "Trust-building for local users" },
    { f: "Pricing", g: "Global premium plans", r: "Local buyer qualification" },
    { f: "Onboarding", g: "Manual Telegram process", r: "Region-specific clarity" },
    { f: "Risk disclaimer", g: "Global", r: "Local trust reinforcement" },
  ];

  return (
    <Section className="bg-surface-deep border-y border-line">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Global Access, Regional Focus</h2>
            <p className="text-text-muted">
              The goal of regional SEO is not to pretend crypto markets are different in every country. It's to help serious traders find Yaga Calls through the terms they actually search.
            </p>
          </div>

          <div className="overflow-x-auto border border-line rounded-2xl bg-background shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-surface-deep">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Feature</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Global Experience</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Regional Page Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.f}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{row.g}</td>
                    <td className="px-6 py-4 text-sm font-medium text-text">{row.r}</td>
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
