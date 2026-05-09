import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import ComparisonHero from "@/components/free-vs-paid/ComparisonHero";
import ComparisonTable from "@/components/free-vs-paid/ComparisonTable";
import YagaSeparation from "@/components/free-vs-paid/YagaSeparation";
import YagaFunnel from "@/components/free-vs-paid/YagaFunnel";
import RedFlags from "@/components/free-vs-paid/RedFlags";
import FAQSection from "../../components/shared/FAQSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free vs Paid Crypto Signals: What Serious Traders Should Know",
  description: "Compare free vs paid crypto signals, learn what serious traders should look for, and see how Yaga Calls uses free Telegram access and premium signal delivery.",
  alternates: {
    canonical: "https://www.yagacalls.com/free-vs-paid-crypto-signals",
  },
  openGraph: {
    title: "Free vs Paid Crypto Signals — Yaga Calls Guide",
    description: "Learn the real difference between free Telegram crypto signals and premium crypto signal access, including research depth, risk context, proof, and onboarding.",
  }
};

export default function FreeVsPaidPage() {
  const faqs = [
    {
      question: "Are paid crypto signals worth it?",
      answer: "Paid crypto signals may be worth it if the provider offers structured setup logic, market research, entry zones, target levels, invalidation or stop-loss context, risk awareness, and transparent communication. They are not worth it if they are only random pump calls or guaranteed-profit claims."
    },
    {
      question: "Are free crypto signals useful?",
      answer: "Free crypto signals can be useful for observing market commentary, learning how a provider communicates, and reviewing selected examples before deciding whether premium access makes sense."
    },
    {
      question: "What is the difference between free and paid crypto signals?",
      answer: "Free crypto signals usually provide general updates, selected examples, and basic commentary. Paid crypto signals should provide deeper research, clearer signal structure, entry zones, target planning, invalidation logic, risk context, and more controlled delivery."
    },
    {
      question: "Does Yaga Calls have a free Telegram group?",
      answer: "Yes. Yaga Calls uses its free Telegram group as an entry point for selected market notes, public updates, and communication-style preview before users consider premium access."
    },
    {
      question: "What does Yaga Calls premium include?",
      answer: "Yaga Calls premium access is designed for deeper Telegram signal notes, market narrative research, entry and target context, invalidation logic, risk-aware setup notes, and manual onboarding."
    },
    {
      question: "Should beginners use paid crypto signals?",
      answer: "Beginners should usually start with free educational content and learn risk management first. Premium access is better suited for users who already understand basic crypto volatility, entries, targets, and trading risk."
    },
    {
      question: "Does Yaga Calls guarantee profit?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "How do I know if a paid crypto signal group is serious?",
      answer: "A serious paid crypto signal group should explain the setup logic, entry zones, target levels, invalidation, risk context, proof examples, onboarding process, and disclaimers. It should not promise guaranteed profit."
    },
    {
      question: "Is discounted premium access still premium?",
      answer: "Yes, if the discount is used as controlled onboarding pricing and the service still provides structured research, risk context, and private Telegram delivery. Discounted does not have to mean cheap or low quality."
    },
    {
      question: "Should I join Yaga Calls free or premium first?",
      answer: "Most new visitors should join the free Telegram group first, observe the communication style, review the method and proof examples, and then compare premium plans if the structure fits their trading approach."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/free-vs-paid-crypto-signals#webpage",
        "url": "https://www.yagacalls.com/free-vs-paid-crypto-signals",
        "name": "Free vs Paid Crypto Signals: What Serious Traders Should Know",
        "description": "Compare free vs paid crypto signals, learn what serious traders should look for, and see how Yaga Calls uses free Telegram access and premium signal delivery.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/free-vs-paid-crypto-signals#breadcrumb",
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
            "name": "Free vs Paid Crypto Signals",
            "item": "https://www.yagacalls.com/free-vs-paid-crypto-signals"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/free-vs-paid-crypto-signals#faq",
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
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Are Paid Crypto Signals Worth It?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Paid crypto signals may be worth it for serious traders if the provider offers clear setup logic, market research, entry zones, target levels, invalidation or stop-loss context, risk awareness, and transparent communication.
                </p>
                <p>
                  Paid signals are not worth it if they are only random pump calls, fake urgency, guaranteed-profit claims, or cheap lifetime VIP access without real setup structure.
                </p>
                <p>
                  Yaga Calls uses the free Telegram group as a first step for selected market notes and public updates. <Link href="/premium-telegram-crypto-signals" className="text-primary hover:underline">Premium Telegram crypto signals</Link> are for traders who want deeper setup context, private Telegram delivery, and risk-aware signal notes.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Free crypto signals are useful for observing a provider’s communication style, while paid crypto signals are only worth considering when they provide deeper market research, clear entries, targets, invalidation logic, risk context, and transparent delivery. Yaga Calls uses free Telegram access as an entry point and premium Telegram access for serious traders who want structured crypto signal notes and market narrative research."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Why Traders Compare */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Traders Ask About Free vs Paid Crypto Signals</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                Most traders do not compare free and paid crypto signals out of curiosity. They compare because they are trying to avoid a bad decision. They want to know:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  "Is a paid crypto signal group actually worth it?",
                  "What should I get in premium that I do not get for free?",
                  "Is the Telegram group real or just hype?",
                  "Can I test the provider first?",
                  "Are there proof examples?",
                  "Is there risk management?",
                  "Do signals include entry, target, and stop-loss context?",
                  "Is the group built for serious traders or gamblers?"
                ].map((q, i) => (
                  <div key={i} className="flex gap-3 text-text font-bold uppercase tracking-tight text-sm">
                    <span className="text-primary">?</span> {q}
                  </div>
                ))}
              </div>
              <p className="text-text-muted font-medium italic">These are the right questions. A serious signal provider should be able to answer them clearly.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4 & 5 — What Free and Paid Provide */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Free Crypto Signals Usually Provide</h2>
              <p className="text-text-muted leading-relaxed">
                Free crypto signals can be useful, but they are usually limited. Their main purpose should be observation, education, and trust-building. A free crypto Telegram group may include:
              </p>
              <ul className="space-y-4">
                {["General market updates", "Selected educational notes", "Public market commentary", "Community announcements", "Occasional setup examples", "Basic trading reminders", "Provider style preview", "Free entry point into the brand"].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
                <p className="text-sm font-black uppercase tracking-widest text-primary">Free should help you evaluate. Premium should add depth.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Paid Crypto Signals Should Provide</h2>
              <p className="text-text-muted leading-relaxed">
                If a crypto signal provider charges money, it should offer more than random coin names. <Link href="/crypto-signals-with-risk-management" className="text-primary hover:underline">Crypto signals with risk management</Link> should be the standard. A serious paid service should provide:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {["Clear asset pair", "Entry zone", "Target levels", "Invalidation context", "Market narrative", "Technical structure", "Risk awareness", "Follow-up updates", "Transparent disclaimers", "Clear onboarding", "Proof examples", "Realistic expectations"].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted italic leading-relaxed">
                If a paid group cannot explain risk, structure, or reasoning, it is probably not worth the subscription. Yaga Calls positions its service around clear entries, targets, risk context, and narrative analysis.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <ComparisonTable />
      <YagaSeparation />

      {/* Section 8 & 9 — When Free/Premium Makes Sense */}
      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">When Free Crypto Signals Are Enough</h2>
                <p className="text-text-muted leading-relaxed">
                  Free access is enough if you are still evaluating the provider or learning the basics. Stay in the free Telegram group if:
                </p>
                <div className="space-y-4">
                  {[
                    "You are new to crypto signals",
                    "You do not understand risk management yet",
                    "You are learning how entry and target levels work",
                    "You are unsure whether Yaga Calls fits your style",
                    "You do not have enough trading capital to justify premium access",
                    "You want to observe before paying",
                    "You are still comparing signal providers"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text-muted">
                      <span className="text-primary/40">•</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="free_vs_paid_enough_free">
                Join Free Telegram First
              </CTAButton>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">When Paid Crypto Signals Make More Sense</h2>
                <p className="text-text-muted leading-relaxed">
                  Premium access may make sense if you already understand basic crypto risk and want deeper structure. It may be worth considering if:
                </p>
                <div className="space-y-4">
                  {[
                    "You already follow crypto markets actively",
                    "You want structured setup notes",
                    "You want entry, target, and invalidation context",
                    "You care about risk management",
                    "You want market narrative research",
                    "You can follow Telegram updates consistently",
                    "You prefer quality over mass free calls",
                    "You understand that results are never guaranteed"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text">
                      <span className="text-primary">•</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-text-muted italic leading-relaxed">
                Yaga Calls premium access is <Link href="/contact" className="text-primary hover:underline">manually onboarded</Link> through Telegram. Choose a plan, message the team, receive instructions, and join after verification.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <RedFlags />

      {/* Section 11 — Discounted Pricing */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Discounted Does Not Mean Cheap</h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                A discounted premium price can make sense if it is used as controlled onboarding pricing, not as a cheap mass-market offer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { plan: "Quarterly", reg: "$250", now: "$200", term: "3 months" },
                { plan: "Half-Yearly", reg: "$500", now: "$300", term: "6 months" },
                { plan: "Yearly", reg: "$1000", now: "$600", term: "12 months" }
              ].map((p, i) => (
                <div key={i} className="p-8 rounded-3xl bg-background border border-line space-y-4 shadow-xl">
                  <h3 className="text-xs font-black uppercase tracking-widest text-text-muted">{p.plan}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-text-muted line-through">{p.reg}</p>
                    <p className="text-4xl font-black text-primary">{p.now}</p>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">/ {p.term}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
                Premium access is currently available at discounted manual onboarding pricing for serious traders. Current pricing should always be confirmed through the official Telegram onboarding process before payment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="secondary" trackingLabel="free_vs_paid_discount_free">
                  Join Free First
                </CTAButton>
                <CTAButton href="/pricing" trackingLabel="free_vs_paid_discount_pricing">
                  Compare Plans
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <YagaFunnel />

      {/* Section 13 — Final CTA */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">Start Free. Upgrade Only If It Makes Sense.</h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                The free Telegram group is the best starting point. Watch how Yaga Calls communicates, how market notes are structured, and whether the style fits your trading mindset.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="free_vs_paid_final_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" trackingLabel="free_vs_paid_final_pricing">
                Compare Premium Plans
              </CTAButton>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                  View Selected Proof Examples
                </Link>
                <Link href="/verified-crypto-signal-provider" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Verified Provider Checklist
                </Link>
                <Link href="/crypto-signal-provider-comparison" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Provider Comparison Guide
                </Link>
              </div>
              <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto">
                Yaga Calls provides educational market analysis and signal ideas. Crypto trading involves risk. No content on this page is financial advice or a guarantee of profit.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
