import Container from "../shared/Container";
import Section from "../shared/Section";

export default function PaymentClaritySection() {
  const details = [
    "Premium onboarding happens through Telegram.",
    "Current discounted prices should be confirmed before payment.",
    "Crypto payments are handled manually.",
    "Access is provided after payment confirmation.",
    "There is no confusing automated bot-only checkout.",
    "Users should only follow official payment instructions.",
    "Users should avoid random DMs and unofficial admins."
  ];

  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Payment and Access Clarity</h2>
            <p className="text-lg text-text-muted">
              Premium access is handled manually to keep the process clear and controlled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-3xl border border-line space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight">Process Details</h3>
              <ul className="space-y-4">
                {details.map((detail, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex flex-col justify-center text-center space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight">One-Time Access Period</h3>
              <p className="text-lg font-bold leading-relaxed">
                One-time crypto payment for the selected access period. No automated recurring billing.
              </p>
              <p className="text-sm text-text-muted">
                Access is time-based. Manual renewal required for continued access.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
