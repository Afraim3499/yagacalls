import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import CTAButton from "../shared/CTAButton";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Quarterly Access",
    badge: "START HERE",
    tagline: "Test the Method",
    price: "200",
    regular: "250",
    save: "50",
    period: "3 months",
    monthly: "~$67/month",
    desc: "Best for serious traders who want to evaluate the Yaga Calls method before committing to a longer access period.",
    features: [
      "Premium Telegram signal channel",
      "Structured crypto setup notes",
      "Market narrative research",
      "Entry and target context",
      "Invalidation and risk notes",
      "Risk management guidance",
      "Manual Telegram onboarding"
    ],
    bestFor: "Traders who want to test the quality, structure, and communication style before longer commitment.",
    cta: "Start 3-Month Access",
    tracking: "pricing_quarterly"
  },
  {
    name: "Half-Yearly Access",
    badge: "BEST VALUE",
    tagline: "Commit to Structure",
    price: "300",
    regular: "500",
    save: "200",
    period: "6 months",
    monthly: "$50/month",
    desc: "Best for traders who want consistent premium access across multiple market conditions, rotations, and narrative cycles.",
    features: [
      "Everything in Quarterly, plus:",
      "Longer access period",
      "Better monthly value",
      "Deeper market research notes",
      "Priority signal delivery",
      "Gem Book access (if available)",
      "Advanced research reports"
    ],
    bestFor: "Traders who want to follow Yaga Calls through more than one short market phase.",
    cta: "Start 6-Month Access",
    tracking: "pricing_halfyearly"
  },
  {
    name: "Yearly Access",
    badge: "MAXIMUM SAVINGS",
    tagline: "Long-Term Premium Access",
    price: "600",
    regular: "1000",
    save: "400",
    period: "12 months",
    monthly: "$50/month",
    desc: "Best for committed members who want long-term access to Yaga Calls premium research and market updates.",
    features: [
      "Everything in Half-Yearly, plus:",
      "12-month premium membership",
      "Strongest total savings",
      "Priority communication",
      "Portfolio review (if available)",
      "1-on-1 strategy session (if avail)",
      "Long-term premium context"
    ],
    bestFor: "Committed traders who already understand the method and want longer-term access.",
    cta: "Start 12-Month Access",
    tracking: "pricing_yearly"
  }
];

export default function PricingCardsGrid() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <GlowCard key={plan.name} className="flex flex-col p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-background text-[10px] font-black uppercase tracking-widest rounded-bl-xl">
                {plan.badge}
              </div>
              <div className="space-y-1 mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter">{plan.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-text-muted text-xl line-through opacity-50">${plan.regular}</span>
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-black bg-danger/10 text-danger px-2 py-0.5 rounded uppercase tracking-widest">Save ${plan.save}</span>
                  <span className="text-sm font-bold text-text-muted">/ {plan.period}</span>
                </div>
                <p className="text-xs text-text-muted mt-2 uppercase tracking-widest font-bold">{plan.monthly}</p>
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-8 border-t border-line pt-6">
                {plan.desc}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-bold tracking-tight leading-tight">{f}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-surface-deep border border-line rounded-xl">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Best For</p>
                  <p className="text-xs font-medium leading-tight">{plan.bestFor}</p>
                </div>
                <CTAButton href="https://t.me/yagacalls47" target="_blank" fullWidth trackingLabel={plan.tracking}>
                  {plan.cta}
                </CTAButton>
                <p className="text-[10px] text-text-muted text-center italic uppercase tracking-widest">
                  No guaranteed profits. Educational market analysis only.
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
        <div className="mt-12 p-6 bg-surface-deep border border-line rounded-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-text-muted">
            Current prices are limited-time manual onboarding prices. Confirm latest availability through the official Yaga Calls Telegram contact before payment.
          </p>
          <p className="text-xs text-text-muted mt-2">
            One-time crypto payment for the selected access period. No automated recurring billing.
          </p>
        </div>
      </Container>
    </Section>
  );
}
