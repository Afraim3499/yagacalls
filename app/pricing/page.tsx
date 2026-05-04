import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import PricingCards from "@/components/pricing/PricingCards";
import ScenarioCalculator from "@/components/pricing/ScenarioCalculator";
import GlowCard from "@/components/shared/GlowCard";
import JsonLd from "@/components/seo/JsonLd";
import { createOfferSchema, createFAQSchema, createWebPageSchema } from "@/lib/schema";
import AnswerBox from "@/components/seo/AnswerBox";
import KeyTakeaways from "@/components/seo/KeyTakeaways";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata = {
  title: "Yaga Calls Pricing | Premium Crypto Signals Access",
  description: "Compare Yaga Calls premium crypto signals plans and message us on Telegram for manual onboarding and payment instructions.",
};

export default function PricingPage() {
  const faqs = [
    { q: "Is onboarding automated?", a: "No. Premium onboarding is manual through Telegram. Message us with your preferred plan and we will confirm availability and payment instructions." },
    { q: "Do you offer refunds?", a: "Due to the nature of digital information, we do not offer refunds. We suggest starting with the monthly plan to test our quality." },
    { q: "Do you guarantee profits?", a: "No. No signal provider can guarantee results. Past examples are for education and transparency only. Crypto trading involves risk." },
    { q: "How are signals delivered?", a: "Signals are delivered in real-time via our private Telegram channel with clear entry, target, and stop-loss levels." },
    { q: "Which exchanges do I need?", a: "Our signals work on all major exchanges like Binance, ByBit, OKX, and Coinbase. We focus on liquid assets." },
    { q: "Is this financial advice?", a: "No. Yaga Calls shares market analysis and educational signal ideas. Your results will vary." }
  ];

  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls Pricing | Premium Crypto Signals Access",
    description: "Compare Yaga Calls premium crypto signals plans and message us on Telegram for manual onboarding.",
    url: "https://www.yagacalls.com/pricing"
  });

  const faqSchema = createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })));
  
  const offers = [
    createOfferSchema({ name: "Quarterly Membership", price: "200", url: "/pricing" }),
    createOfferSchema({ name: "Half-Yearly Membership", price: "300", url: "/pricing" }),
    createOfferSchema({ name: "Yearly Membership", price: "600", url: "/pricing" })
  ];

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={offers} />
      <Section className="bg-primary/5 pt-32 pb-20">
        <Container className="text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Pricing', href: '/pricing' }]} />
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">Choose Your Plan</h1>
          <p className="text-xl text-text-muted leading-relaxed font-medium">
            All plans include full access. Longer commitment = better value.
          </p>

          <AnswerBox answer="Yaga Calls offers three premium tiers—Quarterly, Half-Yearly, and Yearly—all providing full access to our Narrative Killer signals and research via manual Telegram onboarding." />
          
          <KeyTakeaways items={[
            'Full access to every narrative setup',
            'Manual human onboarding for all members',
            'No recurring bot-only automated billing',
            'Transparent results and historical proof'
          ]} />

          <p className="text-xs text-text-muted mt-6 uppercase tracking-[0.2em] font-bold opacity-60">
            Premium onboarding is handled manually through Telegram.
          </p>
        </Container>
      </Section>

      <PricingCards />

      <Section>
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Scenario Calculator</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Test hypothetical outcomes based on your own assumptions. This is not a prediction, guarantee, or financial advice.
            </p>
          </div>
          <ScenarioCalculator />
        </Container>
      </Section>

      <Section className="bg-surface-deep">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { q: "Is onboarding automated?", a: "No. Premium onboarding is manual through Telegram. Message us with your preferred plan and we will confirm availability and payment instructions." },
              { q: "Do you offer refunds?", a: "Due to the nature of digital information, we do not offer refunds. We suggest starting with the monthly plan to test our quality." },
              { q: "Do you guarantee profits?", a: "No. No signal provider can guarantee results. Past examples are for education and transparency only. Crypto trading involves risk." },
              { q: "How are signals delivered?", a: "Signals are delivered in real-time via our private Telegram channel with clear entry, target, and stop-loss levels." },
              { q: "Which exchanges do I need?", a: "Our signals work on all major exchanges like Binance, ByBit, OKX, and Coinbase. We focus on liquid assets." },
              { q: "Is this financial advice?", a: "No. Yaga Calls shares market analysis and educational signal ideas. Your results will vary." }
            ].map((faq) => (
              <GlowCard key={faq.q}>
                <h4 className="font-bold text-primary mb-3 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
