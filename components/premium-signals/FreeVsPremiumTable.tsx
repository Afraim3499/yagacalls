import Container from "../shared/Container";
import Section from "../shared/Section";
import { Check, Minus } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function FreeVsPremiumTable() {
  const rows = [
    ["General market updates", true, true],
    ["Selected educational notes", true, true],
    ["Community announcements", true, true],
    ["Public signal examples", "Selected", true],
    ["Full setup context", "Limited", true],
    ["Entry, target, and invalidation notes", "Limited / selected", true],
    ["Priority market watchlists", false, true],
    ["Premium trade-planning notes", false, true],
    ["Private premium signal channel", false, true],
    ["Manual premium onboarding", false, true]
  ];

  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Free Telegram vs Premium Access</h2>
          <div className="space-y-4 text-text-muted max-w-2xl mx-auto">
            <p>
              Start free. Upgrade only if the structure fits your trading style.
            </p>
            <p className="text-sm">
              The free Telegram group is for observing Yaga Calls&apos; market commentary and selected examples. Premium access is for traders who want deeper setup context and private signal delivery. Learn more about <a href="/free-vs-paid-crypto-signals" className="text-primary hover:underline font-bold">free vs paid crypto signals</a>.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-deep border-b border-line">
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Feature</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Free Telegram</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-primary">Premium Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map(([feature, free, premium], i) => (
                  <tr key={i} className="hover:bg-surface-deep/50 transition-colors text-sm">
                    <td className="p-6 font-bold">{feature}</td>
                    <td className="p-6 text-text-muted">
                      {typeof free === 'boolean' ? (
                        free ? <Check className="w-4 h-4 text-primary" /> : <Minus className="w-4 h-4 text-text-muted/30" />
                      ) : (
                        <span className="font-medium text-xs uppercase tracking-tight">{free}</span>
                      )}
                    </td>
                    <td className="p-6 font-bold">
                      {typeof premium === 'boolean' ? (
                        premium ? <Check className="w-4 h-4 text-primary" /> : <Minus className="w-4 h-4 text-text-muted/30" />
                      ) : (
                        <span className="font-medium text-xs uppercase tracking-tight">{premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="free_vs_premium_table_free">
            Join Free Telegram First
          </CTAButton>
          <CTAButton href="/pricing" variant="secondary" trackingLabel="free_vs_premium_table_pricing">
            Compare Premium Plans
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
