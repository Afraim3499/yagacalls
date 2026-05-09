import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import { CheckCircle2, XCircle } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function PricingFitWarning() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Read This Before Using the Discounted Price</h2>
            <div className="space-y-6">
              <p className="text-text-muted text-lg leading-relaxed">
                The discounted price does not mean Yaga Calls is built for everyone. Premium access may be a good fit if you:
              </p>
              <div className="space-y-4">
                {[
                  "Understand that crypto trading involves risk",
                  "Want structured signal notes, not random coin alerts",
                  "Can follow Telegram updates",
                  "Care about entry, target, and invalidation context",
                  "Want market narrative research",
                  "Can afford premium access without emotional pressure",
                  "Understand that no signal provider can guarantee profit"
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-bold tracking-tight leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <GlowCard className="p-8 md:p-12 border-danger/20 bg-danger/5">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-danger">Not a Good Fit If...</h2>
              <div className="space-y-6">
                <p className="text-text-muted text-lg">Premium access is not for you if you are looking for:</p>
                <div className="space-y-4">
                  {[
                    "Guaranteed monthly profit",
                    "No-loss crypto signals",
                    "Cheap lifetime VIP access",
                    "Pump-and-dump alerts",
                    "Random “buy now” calls",
                    "Someone else to take responsibility for your trades",
                    "Gambling-style signal groups"
                  ].map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <XCircle className="text-danger w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-lg font-bold tracking-tight leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8 text-center">
                  <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="secondary" trackingLabel="fit_warning_stay_free">
                    Join Free Telegram First
                  </CTAButton>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
        <p className="mt-12 text-center text-sm text-text-muted italic max-w-2xl mx-auto">
          The discount is for serious traders who want to evaluate Yaga Calls at reduced onboarding pricing, not for users looking for unrealistic profit promises.
        </p>
      </Container>
    </Section>
  );
}
