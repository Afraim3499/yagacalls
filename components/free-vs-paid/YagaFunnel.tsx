import Container from "../shared/Container";
import Section from "../shared/Section";
import Link from "next/link";

export default function YagaFunnel() {
  const steps = [
    {
      title: "Step 1 — Join Free",
      content: "Observe the tone, market notes, and communication style in our public Telegram group.",
      link: "https://t.me/+JFf8kBf01mg3OTg1",
      linkLabel: "Join Free"
    },
    {
      title: "Step 2 — Read Method",
      content: "Understand how we think about narratives, technical structure, and risk-managed entries.",
      link: "/method",
      linkLabel: "Our Method"
    },
    {
      title: "Step 3 — Review Proof",
      content: "Look at selected historical snapshots and understand how setups develop over time.",
      link: "/proof",
      linkLabel: "View Proof"
    },
    {
      title: "Step 4 — Compare Plans",
      content: "If the structure fits your trading style, compare our discounted premium onboarding plans.",
      link: "/pricing",
      linkLabel: "View Pricing"
    },
    {
      title: "Step 5 — Onboarding",
      content: "Message the official Telegram contact to confirm pricing and receive verified access.",
      link: "/contact",
      linkLabel: "Start Now"
    }
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              The Right Way to Evaluate Yaga Calls
            </h2>
            <p className="text-text-muted">
              Do not treat premium access as an impulse buy. Use this simple 5-step evaluation path to ensure we are the right fit for your trading goals.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-line hidden lg:block -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 space-y-6 bg-surface-deep p-8 rounded-3xl border border-line hover:border-primary/40 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black group-hover:bg-primary group-hover:text-black transition-colors shadow-lg">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold uppercase tracking-tight text-sm">{step.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed min-h-[60px]">{step.content}</p>
                  </div>
                  <Link 
                    href={step.link} 
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all"
                    target={step.link.startsWith("http") ? "_blank" : undefined}
                  >
                    {step.linkLabel} <span className="text-lg">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
