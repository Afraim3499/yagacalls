import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import VerificationHero from "@/components/verification/VerificationHero";
import VerificationChecklist from "@/components/verification/VerificationChecklist";
import FAQSection from "../../components/shared/FAQSection";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Verified Crypto Signal Provider: How to Check Proof | Yaga Calls",
  description: "Learn how to verify a crypto signal provider by checking proof, method, risk context, Telegram transparency, onboarding process, and scam red flags.",
  alternates: {
    canonical: "https://www.yagacalls.com/verified-crypto-signal-provider",
  },
  openGraph: {
    title: "Verified Crypto Signal Provider — Yaga Calls Due Diligence Guide",
    description: "Learn how serious traders verify crypto signal providers before joining: proof, method, risk context, Telegram safety, and manual onboarding.",
  }
};

export default function VerifiedProviderPage() {
  const faqs = [
    {
      question: "What is a verified crypto signal provider?",
      answer: "A verified crypto signal provider should show more than screenshots. Serious traders should check proof examples, signal method, entry and target context, invalidation logic, risk disclaimers, official Telegram links, and onboarding transparency."
    },
    {
      question: "How do I know if a crypto signal provider is legit?",
      answer: "Check whether the provider shows proof examples, explains the signal method, avoids guaranteed-profit claims, includes risk context, uses official Telegram links, and provides a clear onboarding process before payment."
    },
    {
      question: "Does Yaga Calls show proof before premium access?",
      answer: "Yes. Yaga Calls has a proof page with selected historical snapshots shared for transparency and education. These examples do not guarantee future performance."
    },
    {
      question: "Does Yaga Calls explain its signal method?",
      answer: "Yes. Yaga Calls explains its method around market narratives, technical structure, entry and invalidation, target planning, risk management, and Telegram delivery."
    },
    {
      question: "Does Yaga Calls guarantee profit?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "How can I avoid fake crypto signal Telegram groups?",
      answer: "Use only official links from the provider’s website, avoid random Telegram DMs, verify admin accounts, reject guaranteed-profit claims, and confirm payment instructions before sending money."
    },
    {
      question: "Are screenshots enough to verify a crypto signal provider?",
      answer: "No. Screenshots alone are not enough. A serious provider should also show method, risk disclaimers, entry and target context, invalidation logic, and transparent onboarding."
    },
    {
      question: "Can I verify Yaga Calls before paying?",
      answer: "Yes. You can review the proof page, read the method page, and join the free Telegram group before deciding whether premium access is right for you."
    },
    {
      question: "What are red flags in crypto signal groups?",
      answer: "Red flags include guaranteed profit claims, no-loss promises, fake urgency, unclear admins, random payment DMs, no signal method, no risk context, and only posting winning screenshots."
    },
    {
      question: "What should I do before joining Yaga Calls premium?",
      answer: "Review Yaga Calls proof, read the method, observe the free Telegram group, compare premium plans, and only use the official Telegram onboarding process if you decide to join."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/verified-crypto-signal-provider#webpage",
        "url": "https://www.yagacalls.com/verified-crypto-signal-provider",
        "name": "Verified Crypto Signal Provider: How to Check Proof | Yaga Calls",
        "description": "Learn how to verify a crypto signal provider by checking proof, method, risk context, Telegram transparency, onboarding process, and scam red flags.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://www.yagacalls.com/verified-crypto-signal-provider#howto",
        "name": "How to Verify a Crypto Signal Provider",
        "description": "A due-diligence checklist for evaluating a crypto signal provider before joining premium access.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Review Proof Examples",
            "text": "Check whether the provider shows selected historical examples and explains that past performance does not guarantee future results."
          },
          {
            "@type": "HowToStep",
            "name": "Read the Signal Method",
            "text": "Check whether the provider explains how signals are generated, including market context, entry zones, targets, invalidation, and risk management."
          },
          {
            "@type": "HowToStep",
            "name": "Check Risk Disclaimers",
            "text": "Avoid providers that guarantee profits or ignore crypto trading risk."
          },
          {
            "@type": "HowToStep",
            "name": "Verify Telegram Links",
            "text": "Use only official Telegram links from the provider’s website and avoid random DMs or fake admins."
          },
          {
            "@type": "HowToStep",
            "name": "Confirm Onboarding",
            "text": "Review the provider’s onboarding process and confirm pricing and payment instructions before sending payment."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/verified-crypto-signal-provider#breadcrumb",
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
            "name": "Verified Crypto Signal Provider",
            "item": "https://www.yagacalls.com/verified-crypto-signal-provider"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/verified-crypto-signal-provider#faq",
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
      
      <VerificationHero />

      {/* Section 2 — Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How Do You Verify a Crypto Signal Provider?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  To verify a crypto signal provider, check whether the provider shows selected proof examples, explains its signal method, includes entry and target context, defines invalidation or risk notes, avoids guaranteed-profit claims, uses official Telegram links, and has a clear onboarding process.
                </p>
                <p>
                  A provider is not trustworthy just because it posts screenshots. Serious traders should look for proof, process, risk awareness, and transparent communication together.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "A verified crypto signal provider should show more than winning screenshots. Serious traders should check proof examples, signal method, entry and target context, invalidation logic, risk disclaimers, Telegram safety, and onboarding transparency. Yaga Calls supports this due-diligence process through selected proof snapshots, a documented risk-aware method, Telegram-first delivery, and manual premium onboarding."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Why Verification Matters */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Crypto Signal Verification Matters</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                Crypto signal groups are easy to create and hard to trust. Many groups can post screenshots or claim results without having a repeatable process. Before following any provider, ask these hard questions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Is there a documented signal method?",
                  "Are proof examples available before payment?",
                  "Does the provider explain risk?",
                  "Are entries, targets, and invalidation discussed?",
                  "Is onboarding clear?",
                  "Are there official Telegram links?",
                  "Does the provider avoid guaranteed-profit claims?",
                  "Can I observe the provider before upgrading?"
                ].map((q, i) => (
                  <div key={i} className="flex gap-3 text-sm font-bold uppercase tracking-tight text-text">
                    <span className="text-primary">?</span> {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <VerificationChecklist />

      {/* Section 6 — What Weak Providers Usually Hide */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Weak Providers Usually Hide</h2>
              <p className="text-text-muted leading-relaxed">
                Be careful if a provider avoids basic transparency. Weak providers often hide losing calls, missing context, or the actual method behind the alerts.
              </p>
              <div className="p-8 bg-surface-deep border border-line rounded-3xl space-y-4">
                <p className="text-xs font-black uppercase tracking-widest text-danger">The Hype Filter</p>
                <ul className="space-y-2">
                  {["Losing or invalidated calls", "Entry and target context", "Stop-loss or invalidation logic", "Payment process transparency", "The difference between free and premium"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X className="w-4 h-4 text-danger" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-primary">If the provider cannot explain the process, the user is being asked to trust hype.</p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How Yaga Calls Supports Due Diligence</h2>
              <p className="text-text-muted leading-relaxed">
                Yaga Calls is positioned as a provider that gives visitors enough information to evaluate the service before premium onboarding.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Proof", href: "/proof", text: "Selected historical snapshots" },
                  { label: "Method", href: "/method", text: "Documented 8-step framework" },
                  { label: "Risk", href: "/crypto-signals-with-risk-management", text: "Risk-aware signal notes" },
                  { label: "Onboarding", href: "/contact", text: "Manual Telegram verification" }
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="flex items-center justify-between p-4 rounded-xl bg-surface-deep border border-line hover:border-primary/40 transition-all group">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary">{item.label}</p>
                      <p className="text-sm font-bold uppercase tracking-tight text-text">{item.text}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Red Flags Section */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Red Flags: Avoid These Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Guarantees monthly profit",
                "Promises no-loss trading",
                "Claims a 100% win rate",
                "Sells cheap lifetime VIP access",
                "Pressures you to pay immediately",
                "Uses random Telegram DMs",
                "Hides the signal method",
                "No mention of risk or stop loss"
              ].map((flag, i) => (
                <div key={i} className="flex gap-4 p-6 bg-background rounded-2xl border border-line">
                  <X className="text-danger w-6 h-6 shrink-0" />
                  <p className="text-sm font-bold uppercase tracking-tight text-text">{flag}</p>
                </div>
              ))}
            </div>
            <div className="p-6 bg-danger/5 border border-danger/20 rounded-2xl text-center">
              <p className="text-sm font-black uppercase tracking-widest text-danger">The more a provider promises certainty, the more carefully you should verify them.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Section */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Verified Provider vs Pump Group</h2>
              <p className="text-text-muted">Serious traders do not need louder hype. They need clearer process.</p>
            </div>

            <div className="overflow-x-auto border border-line rounded-2xl bg-surface shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Pump / Hype Group</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Verified Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Main message", h: "“Buy now”", y: "Explain setup context" },
                    { f: "Proof", h: "Only flashy wins", y: "Selected examples with disclaimers" },
                    { f: "Risk", h: "Ignored", y: "Clearly discussed" },
                    { f: "Entry", h: "Vague", y: "Entry zone explained" },
                    { f: "Onboarding", h: "Random DMs", y: "Official process" },
                    { f: "Claims", h: "Guaranteed profit", y: "Educational, risk-aware" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.f}</td>
                      <td className="px-6 py-4 text-sm text-text-muted">{row.h}</td>
                      <td className="px-6 py-4 text-sm font-medium text-text">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Evaluation Path */}
      <Section className="bg-surface-deep border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Evaluate Yaga Calls Before Paying</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Proof", desc: "Review snapshots" },
                { step: "2", title: "Method", desc: "Read the framework" },
                { step: "3", title: "Observe", desc: "Join free Telegram" },
                { step: "4", title: "Compare", desc: "View plans" },
                { step: "5", title: "Verify", desc: "Manual Onboarding" }
              ].map((s, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black mx-auto">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-text">{s.title}</h4>
                    <p className="text-[10px] text-text-muted uppercase font-bold">{s.desc}</p>
                  </div>
                  {i < 4 && <div className="hidden md:block absolute right-0 top-5 text-primary/20">→</div>}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <CTAButton href="/proof" trackingLabel="verified_eval_proof">
                Review Proof Examples
              </CTAButton>
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" variant="secondary" trackingLabel="verified_eval_free">
                Join Free Telegram
              </CTAButton>
            </div>
            <div className="space-y-4">
              <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Compare Discounted Premium Plans
              </Link>
              <div className="flex flex-col gap-2">
                <Link href="/narrative-trading-crypto-signals" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Learn about narrative-driven signals
                </Link>
                <Link href="/crypto-signal-provider-comparison" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Compare crypto signal providers
                </Link>
              </div>
              <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
                Yaga Calls is not built for users looking for guaranteed profit, no-loss signals, or cheap pump groups. It is built for serious traders who want proof, process, and risk-aware market context.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
