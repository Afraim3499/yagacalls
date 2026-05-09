import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import { CheckCircle2, XCircle } from "lucide-react";

export default function AudienceSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Who It's For */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Who Should Join Yaga Calls?</h2>
            <div className="space-y-6">
              <p className="text-text-muted text-lg">
                Yaga Calls is best suited for traders who:
              </p>
              <div className="space-y-4">
                {[
                  "Already understand basic crypto market risk",
                  "Want signal context, not blind buy alerts",
                  "Prefer Telegram-based market updates",
                  "Care about entry, target, and invalidation",
                  "Want narrative-backed market ideas",
                  "Can follow risk-management discipline",
                  "Have enough capital to justify premium access",
                  "Prefer quality over mass free calls"
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-bold tracking-tight leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <p className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-primary font-black uppercase tracking-widest text-center text-xs">
                Yaga Calls is for people who treat crypto trading seriously, not people looking for casino-style calls.
              </p>
            </div>
          </div>

          {/* Who It's Not For */}
          <GlowCard className="p-8 md:p-12 border-danger/20 bg-danger/5">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Who Should Not Join?</h2>
              <div className="space-y-6">
                <p className="text-text-muted text-lg">
                  Yaga Calls is not built for everyone. You should not join if you are looking for:
                </p>
                <div className="space-y-4">
                  {[
                    "Guaranteed monthly profit",
                    "No-loss trading",
                    "Cheap lifetime VIP access",
                    "Pump-and-dump alerts",
                    "Random “buy now” calls",
                    "Someone else to take responsibility for your trades",
                    "Gambling-style entries",
                    "Fake urgency and hype"
                  ].map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <XCircle className="text-danger w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold tracking-tight leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-danger/20">
                  <p className="text-xs text-text-muted italic leading-relaxed">
                    Crypto trading involves risk. Yaga Calls provides educational market analysis and signal ideas, not financial advice or guaranteed outcomes. This section is critical for filtering out users who do not match our professional standards.
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
