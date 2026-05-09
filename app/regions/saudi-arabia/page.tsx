import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SaudiHero from "@/components/regions/saudi-arabia/SaudiHero";
import RegionalTrustBar from "@/components/regions/RegionalTrustBar";
import FAQSection from "@/components/shared/FAQSection";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import RelatedRegions from "@/components/regions/RelatedRegions";
import { regionalPages } from "@/content/data/regions";

export const metadata: Metadata = {
  title: "Crypto Signals Saudi Arabia | Telegram Signals for Serious Traders",
  description: "Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious Saudi Arabia traders, with risk context, proof examples, and manual onboarding.",
  alternates: {
    canonical: "https://www.yagacalls.com/regions/saudi-arabia",
  },
  openGraph: {
    title: "Saudi Arabia Crypto Signals — Yaga Calls",
    description: "Telegram-first crypto signal notes, market narrative research, risk-aware setup context, and manual onboarding for serious Saudi Arabia traders.",
  }
};

export default function SaudiPage() {
  const faqs = [
    {
      question: "Does Yaga Calls provide crypto signals for Saudi Arabia traders?",
      answer: "Yes. Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious Saudi Arabia traders who want narrative research, structured setup context, risk-aware notes, and manual onboarding."
    },
    {
      question: "Can Saudi traders join the free Telegram group before premium?",
      answer: "Yes. Saudi traders can join the free Telegram group first to observe Yaga Calls’ communication style, market notes, and selected examples before considering premium access."
    },
    {
      question: "Does Yaga Calls provide financial advice in Saudi Arabia?",
      answer: "No. Yaga Calls provides educational market analysis and signal ideas only. It does not provide financial advice or guaranteed-profit services."
    },
    {
      question: "Does Yaga Calls guarantee profit for Saudi traders?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and every trader remains responsible for their own decisions."
    },
    {
      question: "What makes Yaga Calls suitable for Saudi traders?",
      answer: "Yaga Calls emphasizes Telegram delivery, market narrative research, structured setup notes, entry and target planning, invalidation logic, risk context, selected proof examples, and manual onboarding."
    },
    {
      question: "Can Riyadh, Jeddah, and Dammam traders use Yaga Calls?",
      answer: "Yes. Traders from Riyadh, Jeddah, Dammam, and other Saudi cities can join the free Telegram group and evaluate Yaga Calls before premium onboarding."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider focused on structure, risk, and Telegram delivery instead of random pump calls."
    },
    {
      question: "How do Saudi traders start premium onboarding?",
      answer: "Saudi traders should review premium plans, message the official Yaga Calls Telegram contact, confirm current discounted pricing, receive payment instructions, and get access after verification."
    },
    {
      question: "Should Saudi traders use the Saudi Arabia page or GCC page?",
      answer: "Saudi traders should use the Saudi Arabia page for KSA-specific search intent and the GCC page for broader Gulf-region comparison."
    },
    {
      question: "Are Yaga Calls signals safe because they include risk context?",
      answer: "No crypto signal is risk-free. Risk context helps traders evaluate downside, but it does not remove crypto volatility, execution risk, or personal responsibility."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/regions/saudi-arabia#webpage",
        "url": "https://www.yagacalls.com/regions/saudi-arabia",
        "name": "Crypto Signals Saudi Arabia | Telegram Signals for Serious Traders",
        "description": "Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious Saudi Arabia traders, with risk context, proof examples, and manual onboarding.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Service",
        "@id": "https://www.yagacalls.com/#service",
        "name": "Premium Telegram Crypto Signals",
        "provider": { "@id": "https://www.yagacalls.com/#organization" },
        "serviceType": "Crypto market analysis and Telegram signal notes",
        "areaServed": "Saudi Arabia",
        "description": "Telegram-first crypto signal notes with narrative research, entry zones, target planning, invalidation logic, and risk-aware trading context for serious Saudi Arabia traders."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/regions/saudi-arabia#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Regions", "item": "https://www.yagacalls.com/regions" },
          { "@type": "ListItem", "position": 3, "name": "Saudi Arabia", "item": "https://www.yagacalls.com/regions/saudi-arabia" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/regions/saudi-arabia#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
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
      
      <SaudiHero />

      <Container>
        <RegionalTrustBar regionName="Saudi Arabia" />
      </Container>

      {/* Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Does Yaga Calls Provide Signals for Saudi Traders?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls provides Saudi Arabia-focused crypto signal and market analysis content for serious traders who prefer Telegram-first delivery, structured setup notes, market narrative research, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <div className="flex gap-4 items-start text-text font-bold italic">
                    <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                    <p>
                      "Saudi Arabia requires careful, risk-aware language around crypto because public authorities have historically warned against dealing in virtual currencies. Users should treat all Yaga Calls content as educational market analysis only, not financial advice."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk & Quality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">A Careful Approach</h2>
                <p className="text-text-muted leading-relaxed">
                  Saudi traders should be more careful than average when evaluating crypto signal providers. Does the provider communicate risk clearly enough for you to evaluate before acting?
                </p>
                <div className="space-y-4">
                  {[
                    "No guaranteed profit claims",
                    "No fake urgency or pump language",
                    "Clear entry, targets, and invalidation",
                    "Professional manual onboarding"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 className="text-primary w-4 h-4" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">KSA Trader Responsibility</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Every trader remains responsible for their own decisions, execution, and risk management. Yaga Calls is an educational resource, not a managed investment service.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cities Coverage */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Riyadh, Jeddah, Dammam & KSA Traders</h2>
            <p className="text-text-muted">Professional crypto signal notes for major Saudi trading hubs:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {["Riyadh", "Jeddah", "Dammam", "Khobar", "Mecca", "Medina", "Jubail", "Dhahran"].map((city) => (
                 <div key={city} className="p-4 bg-background border border-line rounded-xl text-xs font-black uppercase tracking-widest text-text">
                   {city}
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Link href="/regions/gcc" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Explore GCC Hub →</Link>
               <Link href="/regions/uae" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">UAE Signals</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-background">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Start Free, Then Decide.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Join the free Telegram group first to observe our communication style. Then read the method, review selected proof examples, and compare discounted premium plans only if the structure fits your approach.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="saudi_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="saudi_final_pricing">
              Compare Premium Plans
            </CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-line/10">
            <Link href="/method" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Method</Link>
            <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Proof</Link>
            <Link href="/regions/qatar" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Qatar Signals</Link>
          </div>
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
            Past performance does not guarantee future results. Crypto trading involves risk. Yaga Calls provides educational market analysis and signal ideas only.
          </p>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />

      <Section className="bg-background border-t border-line">
        <Container>
          <RelatedRegions 
            currentSlug="saudi-arabia" 
            relatedSlugs={regionalPages.find(p => p.slug === 'saudi-arabia')?.relatedRegions || []} 
          />
        </Container>
      </Section>
    </main>
  );
}
