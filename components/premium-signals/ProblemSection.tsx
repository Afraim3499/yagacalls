import Container from "../shared/Container";
import Section from "../shared/Section";
import { AlertCircle, XCircle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    "Random coin names without setup logic",
    "Late calls after the move already happened",
    "No entry zone",
    "No invalidation level",
    "No stop-loss context",
    "No explanation of risk",
    "Overuse of “100x” language",
    "Fake urgency",
    "Hidden losses",
    "Cheap lifetime VIP offers"
  ];

  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-danger">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Most Telegram Crypto Signal Groups Are Too Noisy</h2>
          </div>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              Many Telegram crypto groups attract attention with aggressive promises, pump language, fake urgency, and cherry-picked screenshots. That may create excitement, but it does not create discipline.
            </p>
            <p>
              The <a href="/best-crypto-signal-provider" className="text-primary hover:underline font-bold">best crypto signal provider</a> should avoid these common noise traps:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-3 items-start text-sm font-bold">
                  <XCircle className="w-5 h-5 text-danger flex-shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <p className="pt-6 border-t border-line text-sm text-text-muted italic">
              That is not premium. That is noise. A premium Telegram crypto signal channel should help traders think more clearly before they act.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
