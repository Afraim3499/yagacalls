import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import ComparisonHero from "@/components/comparison/ComparisonHero";
import ComparisonChecklist from "@/components/comparison/ComparisonChecklist";
import ComparisonTables from "@/components/comparison/ComparisonTables";
import MasterComparisonTable from "@/components/comparison/MasterComparisonTable";
import EvaluationPath from "@/components/comparison/EvaluationPath";
import FAQSection from "../../components/shared/FAQSection";
import Link from "next/link";
import { X, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Signal Provider Comparison | Yaga Calls vs Signal Groups",
  description: "Compare crypto signal providers by proof, method, risk management, Telegram delivery, pricing, onboarding, and transparency. See where Yaga Calls fits for serious traders.",
  alternates: {
    canonical: "https://www.yagacalls.com/crypto-signal-provider-comparison",
  },
  openGraph: {
    title: "Crypto Signal Provider Comparison — Yaga Calls",
    description: "A serious comparison guide for crypto signal providers: proof, method, risk context, Telegram delivery, pricing, onboarding, and red flags.",
  }
};

export default function ComparisonPage() {
  const faqs = [
    {
      question: "How should I compare crypto signal providers?",
      answer: "Compare crypto signal providers by proof examples, signal method, entry and target context, invalidation logic, risk management, Telegram delivery, pricing clarity, onboarding safety, and whether they avoid guaranteed-profit claims."
    },
    {
      question: "What makes Yaga Calls different from typical crypto signal groups?",
      answer: "Yaga Calls focuses on market narrative research, structured setup notes, entry and target context, invalidation logic, risk-aware signal delivery, selected proof examples, and manual Telegram onboarding instead of random pump calls."
    },
    {
      question: "Is Yaga Calls better than free crypto signal channels?",
      answer: "Free crypto signal channels can be useful for observation, but they usually provide limited setup context. Yaga Calls premium access is designed for deeper Telegram signal notes, narrative research, and risk-aware market context."
    },
    {
      question: "Is Yaga Calls better than automated signal bots?",
      answer: "Automated signal bots can be useful for indicator alerts, but they often lack human market context. Yaga Calls is positioned as a human-led, research-driven crypto signal provider with narrative analysis and Telegram delivery."
    },
    {
      question: "Does Yaga Calls guarantee better results than other providers?",
      answer: "No. Yaga Calls does not guarantee results. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "What should I avoid when comparing crypto signal groups?",
      answer: "Avoid providers that guarantee profit, promise no-loss signals, hide losses, use fake urgency, provide no risk context, send random payment DMs, or cannot explain their signal method."
    },
    {
      question: "Can I compare Yaga Calls before paying?",
      answer: "Yes. You can join the free Telegram group, read the method page, review selected proof examples, and compare premium plans before starting manual onboarding."
    },
    {
      question: "Does Yaga Calls show proof examples?",
      answer: "Yes. Yaga Calls shows selected historical proof snapshots for transparency and education. These examples do not guarantee future performance."
    },
    {
      question: "Does Yaga Calls use risk management?",
      answer: "Yes. Yaga Calls positions its method around risk-aware setup notes, invalidation logic, stop-loss context, volatility awareness, and disciplined signal planning."
    },
    {
      question: "Who is Yaga Calls best for compared to other providers?",
      answer: "Yaga Calls is best for serious traders who want premium Telegram crypto signals, market narrative research, structured setup notes, selected proof examples, manual onboarding, and risk-aware market context."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#webpage",
        "url": "https://www.yagacalls.com/crypto-signal-provider-comparison",
        "name": "Crypto Signal Provider Comparison | Yaga Calls vs Signal Groups",
        "description": "Compare crypto signal providers by proof, method, risk management, Telegram delivery, pricing, onboarding, and transparency. See where Yaga Calls fits for serious traders.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.yagacalls.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Crypto Signal Provider Comparison",
            "item": "https://www.yagacalls.com/crypto-signal-provider-comparison"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#comparison-checklist",
        "name": "Crypto Signal Provider Comparison Checklist",
        "description": "A checklist for comparing crypto signal providers by proof, method, risk management, Telegram delivery, pricing, onboarding, and transparency.",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Signal Structure" },
          { "@type": "ListItem", "position": 2, "name": "Market Method" },
          { "@type": "ListItem", "position": 3, "name": "Proof Examples" },
          { "@type": "ListItem", "position": 4, "name": "Risk Management" },
          { "@type": "ListItem", "position": 5, "name": "Invalidation Logic" },
          { "@type": "ListItem", "position": 6, "name": "Telegram Delivery Quality" },
          { "@type": "ListItem", "position": 7, "name": "Pricing Clarity" },
          { "@type": "ListItem", "position": 8, "name": "Onboarding Safety" },
          { "@type": "ListItem", "position": 9, "name": "Free Observation Path" },
          { "@type": "ListItem", "position": 10, "name": "Scam Resistance" },
          { "@type": "ListItem", "position": 11, "name": "Realistic Claims" },
          { "@type": "ListItem", "position": 12, "name": "Audience Fit" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ComparisonHero />

      {/* Section 2 — Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How Should You Compare Providers?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  To compare crypto signal providers, look beyond win screenshots and marketing claims. Serious traders should compare proof examples, signal method, entry and target context, invalidation logic, risk management, Telegram delivery, pricing clarity, onboarding process, and whether the provider avoids guaranteed-profit claims.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "A serious crypto signal provider comparison should evaluate proof, method, risk management, entry and target structure, invalidation logic, Telegram delivery, pricing transparency, onboarding safety, and realistic disclaimers. Yaga Calls is a premium Telegram-first crypto signal provider positioned for serious traders who prefer narrative research, structured setup notes, selected proof examples, and risk-aware market context over random pump calls."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Why Comparison Matters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Comparison Matters</h2>
                <p className="text-text-muted leading-relaxed">
                  Crypto signal groups are easy to create. That makes the market noisy. A provider can have a Telegram channel, loud claims, and fake urgency, but none of that proves quality.
                </p>
                <div className="space-y-4">
                  {[
                    "Does the provider explain the method?",
                    "Are proof examples educational?",
                    "Are entries, targets, and invalidation clear?",
                    "Is Telegram delivery organized?",
                    "Is onboarding safe and official?"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <span className="text-primary font-black">?</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">The Yaga Calls Approach</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Yaga Calls uses important trust assets on the site: method, proof, pricing, contact/onboarding, free Telegram, and risk disclaimers. Premium access is handled manually through Telegram, not through a bot-only checkout.
                </p>
                <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-widest text-text hover:text-primary transition-colors inline-block mt-4">
                  Learn about Premium Telegram signals →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ComparisonChecklist />
      <ComparisonTables />
      
      {/* Fit Score */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <CheckCircle2 className="text-primary" /> Who Should Choose Yaga Calls
              </h3>
              <ul className="space-y-4">
                {[
                  "Serious traders wanting structure",
                  "Those who value narrative research",
                  "Users wanting entry & invalidation context",
                  "People who prefer manual onboarding",
                  "Traders who want to observe for free first"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <X className="text-danger" /> Who Should Not
              </h3>
              <ul className="space-y-4">
                {[
                  "People looking for guaranteed profit",
                  "Seekers of cheap lifetime VIP access",
                  "Random pump call hunters",
                  "Fully automated bot-only users",
                  "Those wanting no-loss trading"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-danger mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <MasterComparisonTable />

      {/* Red Flags */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Red Flags in Signal Providers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Guarantees profit",
                "Promises no-loss signals",
                "Claims 100% win rate",
                "Sells cheap lifetime VIP",
                "Deletes losing calls",
                "Shows only hype screenshots",
                "Has no method page",
                "Provides no risk disclaimer",
                "Uses random Telegram DMs"
              ].map((flag, i) => (
                <div key={i} className="flex gap-4 p-6 bg-background rounded-2xl border border-line">
                  <X className="text-danger w-5 h-5 shrink-0" />
                  <p className="text-sm font-bold uppercase tracking-tight text-text">{flag}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-8">
              <p className="text-sm font-black uppercase tracking-widest text-primary">If a provider cannot explain risk, it is not ready to manage your trust.</p>
            </div>
          </div>
        </Container>
      </Section>

      <EvaluationPath />
      <FAQSection faqs={faqs} />
    </main>
  );
}
