import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import CTAButton from "../shared/CTAButton";
import { Check, X } from "lucide-react";

export default function Comparison() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Free Telegram vs Premium Access</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Choose the level of market depth that fits your trading goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <GlowCard className="p-8 border-line/50">
            <h3 className="text-2xl font-bold mb-6">Free Telegram</h3>
            <ul className="space-y-4 mb-8">
              {[
                "Market updates",
                "Selected educational ideas",
                "Community announcements",
                "Beginner-friendly content"
              ].map(item => (
                <li key={item} className="flex gap-3 text-sm text-text-muted">
                  <Check className="text-primary w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
              {[
                "Deeper setup notes",
                "Priority market watchlists",
                "Entry, target, and risk context",
                "Manual onboarding through Telegram",
                "Premium trade planning notes"
              ].map(item => (
                <li key={item} className="flex gap-3 text-sm text-text-muted/40">
                  <X className="w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="secondary" className="w-full" trackingLabel="home_comparison_free">
              Join Free Group
            </CTAButton>
          </GlowCard>

          <GlowCard className="p-8 border-primary/30 bg-primary/5">
            <div className="absolute top-4 right-4 bg-primary text-background text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Recommended</div>
            <h3 className="text-2xl font-bold mb-6">Premium Access</h3>
            <ul className="space-y-4 mb-8">
              {[
                "Deeper setup notes",
                "Priority market watchlists",
                "Entry, target, and risk context",
                "Manual onboarding through Telegram",
                "Premium trade planning notes"
              ].map(item => (
                <li key={item} className="flex gap-3 text-sm font-medium">
                  <Check className="text-primary w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <CTAButton href="/pricing" className="w-full" trackingLabel="home_comparison_premium">
              Compare Premium Plans
            </CTAButton>
          </GlowCard>
        </div>
      </Container>
    </Section>
  );
}
