import Container from "../shared/Container";
import Section from "../shared/Section";
import { CheckCircle2, XCircle } from "lucide-react";

export default function BeforeYouMessage() {
  const requirements = [
    "Your preferred plan: Quarterly, Half-Yearly, or Yearly",
    "Whether you want to claim the current discounted onboarding price",
    "Your trading experience level",
    "Your region or timezone",
    "Your preferred exchange, if relevant",
    "Whether you understand crypto trading risk",
    "Whether you want to join free first or premium directly"
  ];

  return (
    <Section className="bg-surface/30">
      <Container className="max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Before You Start Onboarding</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Yaga Calls is built for serious traders, not random pump-call seekers. To keep onboarding clean, message only if you are genuinely interested in <a href="/pricing" className="text-primary hover:underline font-bold">premium crypto signal plans</a> or want to understand the free Telegram group first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-3xl border border-line space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                <CheckCircle2 className="text-primary w-6 h-6" />
                Be Ready to Share
              </h3>
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/5 p-8 rounded-3xl border border-red-500/10 space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2 text-red-500">
                <XCircle className="w-6 h-6" />
                Not a Fit If
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                If you are looking for guaranteed monthly profit, no-loss trading, cheap lifetime VIP access, or pump-and-dump alerts, Yaga Calls is not the right fit.
              </p>
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-xs font-bold text-red-500 uppercase tracking-widest">
                  Filtering for high-signal members only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
