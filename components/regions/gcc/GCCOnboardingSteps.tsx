import Container from "../../shared/Container";
import Section from "../../shared/Section";
import { MessageSquare, CreditCard, ShieldCheck, Zap } from "lucide-react";

export default function GCCOnboardingSteps() {
  const steps = [
    { title: "Choose Plan", desc: "Select 3, 6, or 12 months", icon: <Zap className="w-5 h-5" /> },
    { title: "Message Telegram", desc: "Contact @yagacalls47", icon: <MessageSquare className="w-5 h-5" /> },
    { title: "Confirm Price", desc: "Get current discount", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Get Access", desc: "Manual verification", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <Section className="bg-surface-deep border-y border-line">
      <Container>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Premium Manual Onboarding</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Current discounted pricing structure for serious GCC traders. Prices should always be confirmed via official Telegram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="space-y-4 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-background border border-line flex items-center justify-center text-primary mx-auto group-hover:border-primary/40 transition-all shadow-xl">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text">Step {i + 1}: {s.title}</h4>
                  <p className="text-[10px] text-text-muted uppercase font-bold">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto border border-line rounded-2xl bg-background shadow-xl max-w-3xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-surface-deep">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Plan</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Regular</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">GCC Discount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                  { p: "Quarterly", r: "$250", d: "$200 / 3 mo" },
                  { p: "Half-Yearly", r: "$500", d: "$300 / 6 mo" },
                  { p: "Yearly", r: "$1000", d: "$600 / 12 mo" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.p}</td>
                    <td className="px-6 py-4 text-sm text-text-muted line-through">{row.r}</td>
                    <td className="px-6 py-4 text-sm font-black text-primary uppercase tracking-widest">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center pt-8">
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
              Manual onboarding reduces fake-account confusion and protects the quality of the group for serious traders.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
