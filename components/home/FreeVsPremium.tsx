import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import { Check, X } from "lucide-react";

export default function FreeVsPremium() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Free Telegram vs Premium Access</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-xl font-bold text-primary uppercase tracking-widest">Start free. Upgrade only if the structure fits your trading style.</p>
            <p className="text-text-muted">
              Choose between <a href="/free-vs-paid-crypto-signals" className="text-primary hover:underline font-bold">free vs paid crypto signals</a>. The free Telegram group is for observing Yaga Calls&apos; market commentary and selected examples. Premium access is for members who want deeper setup context and private signal delivery.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-line bg-background shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-line">
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Feature</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-text-muted">Free Telegram</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest text-primary">Premium Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                  ["General market updates", true, true],
                  ["Selected educational ideas", true, true],
                  ["Community announcements", true, true],
                  ["Public signal-style examples", true, true],
                  ["Basic commentary", true, true],
                  ["Private premium delivery", false, true],
                  ["Deeper setup notes", false, true],
                  ["Entry and target context", false, true],
                  ["Invalidation and risk notes", false, true],
                  ["Priority watchlists", false, true],
                  ["Premium trade-planning notes", false, true],
                  ["Manual onboarding", false, true]
                ].map(([feature, free, premium], i) => (
                  <tr key={i} className="hover:bg-surface/30 transition-colors text-sm">
                    <td className="p-6 font-bold">{feature as string}</td>
                    <td className="p-6 text-text-muted">
                      {typeof free === "boolean" ? (
                        free ? <Check className="w-5 h-5 text-primary" /> : <X className="w-5 h-5 text-danger" />
                      ) : (
                        free
                      )}
                    </td>
                    <td className="p-6 font-black text-primary">
                      {typeof premium === "boolean" ? (
                        premium ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />
                      ) : (
                        premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-surface flex flex-col sm:flex-row gap-4 justify-center items-center border-t border-line">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="primary" trackingLabel="home_free_vs_premium_join">
              Join Free Telegram First
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="home_free_vs_premium_compare">
              Compare Premium Plans
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
