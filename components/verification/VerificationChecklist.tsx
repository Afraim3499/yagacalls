import Container from "../shared/Container";
import Section from "../shared/Section";
import { CheckCircle2, ShieldCheck, FileText, Search, Target, ShieldX, Map, AlertCircle, Lock, Users } from "lucide-react";

export default function VerificationChecklist() {
  const points = [
    { title: "Proof Examples", desc: "A serious provider should show selected historical examples before asking for payment.", icon: <FileText className="w-5 h-5" /> },
    { title: "Signal Method", desc: "The provider must explain how setups are found (narratives, technicals, etc.).", icon: <Search className="w-5 h-5" /> },
    { title: "Entry Context", desc: "Signals must identify where the setup becomes interesting, not just 'buy now'.", icon: <Target className="w-5 h-5" /> },
    { title: "Target Planning", desc: "Structured exit areas should be mapped out to reduce emotional reactions.", icon: <Map className="w-5 h-5" /> },
    { title: "Invalidation Logic", desc: "The setup must define exactly where the original idea becomes wrong.", icon: <ShieldX className="w-5 h-5" /> },
    { title: "Risk Management", desc: "Discussions on position sizing and survival must come before profit talk.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "No Profit Promises", desc: "Avoid 'guaranteed monthly profit' or '100% win rate' claims at all costs.", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Official Telegram", desc: "Use only official links from the website to avoid impersonation risk.", icon: <Lock className="w-5 h-5" /> },
    { title: "Clear Onboarding", desc: "The process after payment should be transparent and manually verified.", icon: <Users className="w-5 h-5" /> },
    { title: "Free Observation", desc: "A serious provider lets you watch their style before you upgrade.", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  return (
    <Section className="bg-surface-deep border-y border-line">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              10 Things to Check Before Trusting a Provider
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Verification is not one screenshot. Verification is a pattern of transparency. Use this checklist to audit any crypto signal provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((point, i) => (
              <div key={i} className="p-8 rounded-3xl bg-background border border-line hover:border-primary/40 transition-all space-y-6 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  {point.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold uppercase tracking-tight text-sm flex items-center gap-2">
                    <span className="text-primary/40">#{(i + 1).toString().padStart(2, '0')}</span>
                    {point.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
