import Container from "../shared/Container";
import Section from "../shared/Section";
import { CheckCircle2, XCircle } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function PricingSuitabilityChecker() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Should You Use the Discounted Premium Price?</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A discount should not make you join emotionally. Use this checklist first to see if Yaga Calls matches your trading style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 bg-surface border border-line rounded-3xl space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
              <CheckCircle2 className="text-primary w-6 h-6" /> Good Fit
            </h3>
            <div className="space-y-4">
              {[
                "You understand crypto trading risk",
                "You want structured setup notes",
                "You can follow Telegram updates",
                "You care about entries, targets, and risk context",
                "You want market narrative research",
                "You can afford the discounted price responsibly",
                "You are not expecting guaranteed profit"
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start font-bold text-sm">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <CTAButton href="https://t.me/yagacalls47" target="_blank" fullWidth trackingLabel="suitability_onboarding">
                Start Manual Onboarding
              </CTAButton>
            </div>
          </div>

          <div className="p-8 bg-surface-deep border border-line rounded-3xl space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 text-text-muted">
              <XCircle className="text-text-muted w-6 h-6" /> Not Ready
            </h3>
            <div className="space-y-4">
              {[
                "You are new to crypto trading",
                "You do not understand stop-loss logic",
                "You are expecting instant, guaranteed profit",
                "You cannot afford premium comfortably",
                "You only want cheap, high-volume calls",
                "You are looking for no-loss trading",
                "You want someone else to make all decisions"
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start font-bold text-sm text-text-muted">
                  <XCircle className="text-text-muted/30 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="secondary" fullWidth trackingLabel="suitability_free">
                Join Free Telegram First
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
