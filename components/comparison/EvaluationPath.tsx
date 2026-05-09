import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Link from "next/link";
import { MessageCircle, Search, FileText, CreditCard, ShieldCheck } from "lucide-react";

export default function EvaluationPath() {
  const steps = [
    { step: "1", title: "Free Telegram", desc: "Observe market notes", icon: <MessageCircle className="w-5 h-5" /> },
    { step: "2", title: "Method", desc: "Read the framework", icon: <Search className="w-5 h-5" /> },
    { step: "3", title: "Proof", desc: "Review snapshots", icon: <FileText className="w-5 h-5" /> },
    { step: "4", title: "Pricing", desc: "Compare plans", icon: <CreditCard className="w-5 h-5" /> },
    { step: "5", title: "Onboard", desc: "Manual verification", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <Section className="bg-surface-deep border-y border-line">
      <Container>
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Evaluate Yaga Calls</h2>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
              Compare first. Join only if Yaga Calls fits your trading style. Serious traders should evaluate the process before paying.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="space-y-4 relative group">
                <div className="w-16 h-16 rounded-2xl bg-background border border-line flex items-center justify-center text-primary mx-auto group-hover:border-primary/40 transition-all shadow-xl">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text">{s.title}</h4>
                  <p className="text-[10px] text-text-muted uppercase font-bold">{s.desc}</p>
                </div>
                {i < 4 && <div className="hidden md:block absolute right-[-15px] top-5 text-primary/20">→</div>}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="eval_path_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/method" variant="secondary" trackingLabel="eval_path_method">
              Read the Yaga Calls Method
            </CTAButton>
          </div>

          <div className="space-y-4">
            <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
              Compare Discounted Premium Plans
            </Link>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
              Yaga Calls is not built for users looking for guaranteed monthly profit, no-loss trading, or cheap pump calls. It is built for serious traders who want structure, proof, method, and risk-aware market context.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
