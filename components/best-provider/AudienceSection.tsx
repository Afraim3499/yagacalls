import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import { CheckCircle2, XCircle } from "lucide-react";

export default function AudienceSection() {
  const points = [
    "Want premium Telegram crypto signals",
    "Want signal context, not blind instructions",
    "Care about entries, targets, and invalidation",
    "Understand that losses can happen",
    "Want market narrative research",
    "Prefer structured trading ideas over hype",
    {
      label: (
        <>
          Can afford <a href='/pricing' className='text-primary hover:underline font-bold'>premium access</a> responsibly
        </>
      )
    },
    "Want to judge the free Telegram group before upgrading",
    "Treat crypto trading as a disciplined activity"
  ];

  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Yaga Calls Is Best for Serious Traders</h2>
            <div className="space-y-6">
              <p className="text-text-muted text-lg">Yaga Calls is best for people who:</p>
              <div className="space-y-4">
                {points.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-bold tracking-tight leading-tight">
                      {typeof item === "string" ? item : item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-primary font-black uppercase tracking-widest text-center text-xs">
                Yaga Calls is for traders who want better decision context, not magical profit promises.
              </p>
            </div>
          </div>

          <GlowCard className="p-8 md:p-12 border-danger/20 bg-danger/5">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-danger">Who Should Avoid Yaga Calls?</h2>
              <div className="space-y-6">
                <p className="text-text-muted text-lg">Yaga Calls is not the right fit if you are looking for:</p>
                <div className="space-y-4">
                  {[
                    "Guaranteed monthly profit",
                    "No-loss trading",
                    "Cheap lifetime VIP access",
                    "Random pump calls",
                    "“Buy now or miss out” pressure",
                    "Someone else to take full responsibility for your trades",
                    "A gambling-style crypto group",
                    "A provider that hides risk"
                  ].map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <XCircle className="text-danger w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold tracking-tight leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-danger/20">
                  <p className="text-xs text-text-muted italic leading-relaxed">
                    Crypto trading involves risk. Yaga Calls provides educational market analysis and signal ideas, not financial advice or guaranteed outcomes.
                  </p>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </Container>
    </Section>
  );
}
