import Container from "../shared/Container";
import Section from "../shared/Section";
import { CheckCircle2, XCircle } from "lucide-react";

export default function WhoShouldContact() {
  const whoShould = [
    "Want premium Telegram crypto signal access",
    "Understand that crypto trading involves risk",
    "Want structured setup notes instead of random coin alerts",
    "Care about entries, targets, invalidation, and risk context",
    "Want market narrative research",
    "Can afford premium responsibly",
    "Are ready to confirm the plan and payment process manually"
  ];

  const whoShouldNot = [
    "Guaranteed profit",
    "No-loss crypto signals",
    "Cheap lifetime VIP access",
    "Pump-and-dump alerts",
    "Instant wealth claims",
    "Someone else to take responsibility for your trades",
    "Random calls without risk context"
  ];

  return (
    <Section className="bg-surface-deep">
      <Container className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Who Should Start Manual Onboarding?</h2>
            <ul className="space-y-4">
              {whoShould.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Who Should Not Start Premium Onboarding?</h2>
            <ul className="space-y-4">
              {whoShouldNot.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-muted">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10">
              <p className="text-xs italic text-text-muted leading-relaxed">
                Crypto trading involves risk. Yaga Calls provides educational market analysis and signal ideas, not financial advice.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
