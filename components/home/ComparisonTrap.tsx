import Container from "../shared/Container";
import Section from "../shared/Section";
import { Check, X } from "lucide-react";

export default function ComparisonTrap() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Avoid the Signal Group Trap</h2>
          <div className="space-y-4 text-text-muted max-w-3xl mx-auto">
            <p>
              Many traders search for the &ldquo;<a href="/best-crypto-signal-provider" className="text-primary hover:underline">best crypto signal provider</a>&rdquo; after losing trust in noisy Telegram channels, fake screenshots, late entries, deleted losses, and pump-style calls.
            </p>
            <p>
              The problem is not that every signal group is useless. The problem is that most groups do not give enough structure.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-line bg-surface-deep shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-line">
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Typical Signal Group</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-primary">Yaga Calls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                  ["Random coin names", "Structured setup ideas"],
                  ["Late pump calls", "Narrative and timing focus"],
                  ["No stop-loss context", "Invalidation and risk context"],
                  ["Fake urgency", "Disciplined setup planning"],
                  ["Only shows wins", "Uses selected examples and education"],
                  ["Built for mass users", "Built for serious traders"],
                  ["Cheap lifetime access", "Premium manual onboarding"],
                  ["Hype first", "Research first"]
                ].map(([typical, yaga], i) => (
                  <tr key={i} className="hover:bg-surface/50 transition-colors">
                    <td className="p-6 text-sm text-text-muted flex items-start gap-3">
                      <X className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" /> {typical}
                    </td>
                    <td className="p-6 text-sm font-bold flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {yaga}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-surface text-center">
            <p className="text-sm text-text-muted italic leading-relaxed">
              Yaga Calls is not competing to be the cheapest crypto signal group. It is built to be a cleaner, more serious signal and market analysis community.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
