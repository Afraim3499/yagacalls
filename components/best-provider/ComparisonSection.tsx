import Container from "../shared/Container";
import Section from "../shared/Section";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    ["Signal style", "Random coin alerts", "Structured setup ideas"],
    ["Entry logic", "Often vague", "Entry zones and context"],
    ["Targets", "Often unclear", "Target planning"],
    ["Risk", "Often ignored", "Risk and invalidation focus"],
    ["Market reason", "Usually hype", "Narrative-driven analysis"],
    ["Delivery", "Telegram", "Telegram-first delivery"],
    ["Proof", "Often only wins", "Selected educational examples"],
    ["Pricing", "Cheap or suspicious", "Premium manual onboarding"],
    ["Audience", "Everyone", "Serious traders"],
    ["Promise style", "“Guaranteed profit” tone", "Educational, risk-aware tone"]
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Yaga Calls vs Typical Crypto Signal Groups</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            The best crypto signal provider should not make trading feel like gambling. It should help traders think more clearly before entering the market.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-line bg-surface-deep shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-line">
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Factor</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Typical Signal Group</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-primary">Yaga Calls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map(([factor, typical, yaga], i) => (
                  <tr key={i} className="hover:bg-surface/50 transition-colors text-sm">
                    <td className="p-6 font-bold">{factor}</td>
                    <td className="p-6 text-text-muted flex items-start gap-2">
                      <X className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" /> {typical}
                    </td>
                    <td className="p-6 font-bold flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {yaga}
                    </td>
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
