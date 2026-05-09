import Container from "../shared/Container";
import Section from "../shared/Section";

export default function ComparisonTables() {
  const sections = [
    {
      title: "Yaga Calls vs Typical Telegram Signal Groups",
      desc: "Yaga Calls should not compete with typical groups by sounding louder. It should compete by being clearer, more structured, and more serious.",
      col1Name: "Typical Signal Group",
      col2Name: "Yaga Calls",
      rows: [
        { f: "Signal style", c1: "Random coin alerts", c2: "Structured setup notes" },
        { f: "Market reason", c1: "Often vague", c2: "Narrative and market context" },
        { f: "Entry", c1: "Often unclear", c2: "Entry logic and zones" },
        { f: "Targets", c1: "Sometimes exaggerated", c2: "Target planning" },
        { f: "Invalidation", c1: "Often missing", c2: "Required setup context" },
        { f: "Risk", c1: "Often ignored", c2: "Risk-aware framework" },
        { f: "Proof", c1: "Usually only wins", c2: "Selected examples with disclaimer" },
        { f: "Onboarding", c1: "Often unclear", c2: "Manual Telegram onboarding" },
        { f: "Claims", c1: "Hype-heavy", c2: "Educational, risk-aware framing" },
      ]
    },
    {
      title: "Yaga Calls vs Cheap Lifetime VIP Groups",
      desc: "Cheap lifetime VIP groups often attract the wrong audience. If a provider is too cheap to sustain serious research, the real cost may be poor signals and low trust.",
      col1Name: "Cheap Lifetime VIP",
      col2Name: "Yaga Calls",
      rows: [
        { f: "Pricing style", c1: "Low-cost lifetime promise", c2: "Premium access periods" },
        { f: "Audience", c1: "Mass signups", c2: "Serious traders" },
        { f: "Research depth", c1: "Often thin", c2: "Narrative and market research" },
        { f: "Risk management", c1: "Often weak", c2: "Risk-aware setup notes" },
        { f: "Onboarding", c1: "Often automated or unclear", c2: "Manual Telegram onboarding" },
        { f: "Trust signal", c1: "Cheap access", c2: "Method, proof, and clarity" },
      ]
    },
    {
      title: "Yaga Calls vs Free Signal Channels",
      desc: "Free signal channels are useful for observation, but they usually cannot offer everything premium members expect in terms of context and updates.",
      col1Name: "Free Signal Channel",
      col2Name: "Yaga Calls Premium",
      rows: [
        { f: "Cost", c1: "Free", c2: "Paid access" },
        { f: "Use case", c1: "Observation", c2: "Deeper signal context" },
        { f: "Full setup notes", c1: "Limited", c2: "Yes" },
        { f: "Entry/target/risk", c1: "Limited", c2: "Yes" },
        { f: "Priority watchlists", c1: "Usually no", c2: "Yes, where applicable" },
        { f: "Research depth", c1: "Basic", c2: "Deeper narrative research" },
      ]
    },
    {
      title: "Yaga Calls vs Automated Signal Bots",
      desc: "Automated signal bots can be fast, but speed is not the same as judgment. Serious market analysis requires narrative context, liquidity behavior, and risk interpretation.",
      col1Name: "Automated Signal Bot",
      col2Name: "Yaga Calls",
      rows: [
        { f: "Speed", c1: "High", c2: "Fast via Telegram" },
        { f: "Human context", c1: "Limited", c2: "Yes" },
        { f: "Narrative research", c1: "Usually weak", c2: "Core part of method" },
        { f: "Risk explanation", c1: "Depends on bot", c2: "Risk-aware context" },
        { f: "Market judgment", c1: "Rule-based", c2: "Research-led" },
        { f: "Best for", c1: "Indicator alerts", c2: "Serious contextual analysis" },
      ]
    },
    {
      title: "Yaga Calls vs Education-Only Communities",
      desc: "Traders often need both: education to understand the setup and timely communication to follow market movement. Yaga Calls sits between education and signal delivery.",
      col1Name: "Education-Only Community",
      col2Name: "Yaga Calls",
      rows: [
        { f: "Learning content", c1: "Yes", c2: "Yes" },
        { f: "Telegram signals", c1: "Usually no", c2: "Yes" },
        { f: "Setup examples", c1: "Sometimes", c2: "Yes" },
        { f: "Market updates", c1: "Sometimes", c2: "Yes" },
        { f: "Risk framework", c1: "Often educational", c2: "Applied in signal context" },
        { f: "Best for", c1: "Learning only", c2: "Learning + market analysis" },
      ]
    }
  ];

  return (
    <Section className="bg-surface-deep border-y border-line">
      <Container>
        <div className="space-y-24 max-w-4xl mx-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">{section.title}</h2>
                <p className="text-text-muted leading-relaxed">{section.desc}</p>
              </div>
              
              <div className="overflow-x-auto border border-line rounded-2xl bg-background shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-line bg-surface-deep">
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">{section.col1Name}</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">{section.col2Name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {section.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.f}</td>
                        <td className="px-6 py-4 text-sm text-text-muted">{row.c1}</td>
                        <td className="px-6 py-4 text-sm font-medium text-text">{row.c2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
