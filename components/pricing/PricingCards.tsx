import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import CTAButton from "@/components/shared/CTAButton";
import { Check } from "lucide-react";

const plans = [
  {
    id: "quarterly",
    label: "QUARTERLY",
    name: "Quarterly",
    oldPrice: 250,
    price: 200,
    duration: "/3 months",
    monthlyEquivalent: "($66/mo)",
    quote: "Test Our Method",
    microcopy: "Perfect for testing our method",
    featureHeading: "CORE ACCESS",
    benefits: [
      "Premium signal channel",
      "Daily market analysis",
      "Entry/exit/stop for every signal",
      "Risk management guidance"
    ],
    cta: "Start 3-Month Plan",
    href: "https://t.me/yagacalls47",
    tracking: "pricing_quarterly_dm"
  },
  {
    id: "half-yearly",
    label: "HALF-YEARLY",
    name: "Half-Yearly",
    oldPrice: 500,
    price: 300,
    duration: "/6 months",
    monthlyEquivalent: "($50/mo)",
    quote: "Commit to Growth",
    microcopy: "Our most popular plan. Strong value for long-term members.",
    featured: true,
    badge: "BEST VALUE",
    valueNote: "Best balance of price and value",
    featureHeading: "EVERYTHING IN QUARTERLY, PLUS:",
    subsections: [
      {
        title: "EXTENDED ACCESS",
        items: ["6-month membership", "Priority signal delivery"]
      },
      {
        title: "PREMIUM CONTENT",
        items: ["Gem Book access (early-stage finds)", "Advanced research reports"]
      }
    ],
    cta: "Start 6-Month Plan",
    href: "https://t.me/yagacalls47",
    tracking: "pricing_halfyearly_dm"
  },
  {
    id: "yearly",
    label: "YEARLY",
    name: "Yearly",
    oldPrice: 1000,
    price: 600,
    duration: "/12 months",
    monthlyEquivalent: "($50/mo)",
    quote: "Master the Market",
    microcopy: "Cancel anytime. Crypto payments only.",
    valueNote: "Ultimate value for long-term growth",
    featureHeading: "EVERYTHING IN HALF-YEARLY, PLUS:",
    subsections: [
      {
        title: "ULTIMATE ACCESS",
        items: ["12-month membership", "1-on-1 strategy session"]
      },
      {
        title: "BETTER SUPPORT",
        items: ["Priority DM support", "Portfolio review (1x/quarter)"]
      }
    ],
    cta: "Start 12-Month Plan",
    href: "https://t.me/yagacalls47",
    tracking: "pricing_yearly_dm"
  }
];

export default function PricingCards() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan) => (
            <GlowCard 
              key={plan.id} 
              className={`flex flex-col h-full relative transition-all duration-300 ${
                plan.featured 
                  ? 'border-primary shadow-[0_0_50px_rgba(227,158,46,0.2)] md:scale-105 z-10 border-2' 
                  : 'border-line/50 hover:border-line'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2 grad-button px-4 py-1 rounded-full text-[10px] font-black text-background uppercase tracking-widest shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">{plan.label}</div>
                
                <div className="flex flex-col mb-4">
                  <span className="text-xl text-text-muted/50 line-through font-bold">${plan.oldPrice}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black text-text-high tracking-tighter">${plan.price}</span>
                    <span className="text-text-muted text-sm font-bold uppercase tracking-widest opacity-60">{plan.duration}</span>
                  </div>
                  <div className="text-xs font-bold text-primary/80 mt-1 uppercase tracking-wider">{plan.monthlyEquivalent}</div>
                </div>

                {plan.valueNote && (
                  <div className="text-[10px] font-black text-success uppercase tracking-widest mb-4">{plan.valueNote}</div>
                )}

                <blockquote className="text-lg font-bold text-text-high border-l-2 border-primary pl-4 py-1 mb-8 italic">
                  &ldquo;{plan.quote}&rdquo;
                </blockquote>
              </div>

              <div className="space-y-8 flex-grow mb-10">
                <div>
                  <h4 className="text-[11px] font-black text-text-high/40 uppercase tracking-[0.15em] mb-6">{plan.featureHeading}</h4>
                  
                  {plan.benefits && (
                    <ul className="space-y-4">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-text-muted leading-tight">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {plan.subsections && (
                    <div className="space-y-8">
                      {plan.subsections.map((sub) => (
                        <div key={sub.title}>
                          <h5 className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-3">{sub.title}</h5>
                          <ul className="space-y-3">
                            {sub.items.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-text-muted leading-tight">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-auto">
                <CTAButton 
                  href={plan.href} 
                  target="_blank"
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="w-full py-5 text-base uppercase tracking-widest font-black"
                  trackingLabel={plan.tracking}
                >
                  {plan.cta}
                </CTAButton>
                
                <p className="text-[10px] text-text-muted/50 text-center mt-4 uppercase font-bold tracking-widest px-4">
                  {plan.microcopy}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12">
          <p className="text-sm text-text-muted uppercase tracking-[0.2em] font-bold opacity-60">
            Premium onboarding is handled manually through Telegram.
          </p>

          <GlowCard className="bg-surface/30 p-8 md:p-12 text-left">
            <h3 className="text-2xl font-black mb-8 text-center uppercase tracking-tighter">How Premium Onboarding Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Choose Plan", desc: "Select your preferred subscription tier above." },
                { step: "02", title: "Message Us", desc: "Click the DM button to open Telegram manually." },
                { step: "03", title: "Confirmation", desc: "We provide payment instructions and confirm availability." },
                { step: "04", title: "Access", desc: "Once confirmed, you are added to the VIP groups manually." }
              ].map((item) => (
                <div key={item.step} className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black mx-auto mb-4 text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center space-y-4">
              <p className="text-xs text-text-muted italic leading-relaxed">
                <strong>Manual Onboarding:</strong> We do not use automated bots for checkout. All payments (USDT/BTC/ETH) and access links are handled manually by our team to ensure security and clarity.
              </p>
              <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                Crypto Payments Accepted Only
              </div>
            </div>
          </GlowCard>
          
          <div className="text-xs text-text-muted opacity-40 uppercase tracking-widest">
            Message us on Telegram to confirm availability and payment instructions.
          </div>
        </div>
      </Container>
    </Section>
  );
}
