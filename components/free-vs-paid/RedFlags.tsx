import Container from "../shared/Container";
import Section from "../shared/Section";

export default function RedFlags() {
  const flags = [
    "Guarantee profit or 'no-loss' signals",
    "Sell cheap lifetime VIP access",
    "Use fake urgency or scarcity",
    "Hide losing calls or edit history",
    "Refuse to explain risk or invalidation",
    "Push low-liquidity 'pump' coins",
    "Cannot explain their signal method",
    "Send random payment DMs from 'admins'"
  ];

  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Red Flags Before Paying Any Crypto Signal Group
            </h2>
            <p className="text-xl text-text-muted leading-relaxed">
              Before paying for any crypto signal group, watch for these warning signs. If a signal group sounds risk-free, it is probably not serious.
            </p>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Checklist for Safety</p>
              <p className="text-xs text-text-muted leading-relaxed">
                A serious provider should be willing to explain risk, structure, examples, and onboarding before taking payment.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-background border border-line shadow-2xl space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-primary flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" /> Before You Pay, Check This
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {flags.map((flag, i) => (
                <div key={i} className="flex gap-4 items-start text-sm text-text-muted group">
                  <div className="w-5 h-5 rounded border border-line flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors mt-0.5">
                    <span className="text-[10px]">✕</span>
                  </div>
                  <p className="group-hover:text-text transition-colors">Avoid providers that {flag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
