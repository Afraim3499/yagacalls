import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GCCHero from "@/components/regions/gcc/GCCHero";
import RegionalTrustBar from "@/components/regions/RegionalTrustBar";
import GCCCountryRouting from "@/components/regions/gcc/GCCCountryRouting";
import GCCOnboardingSteps from "@/components/regions/gcc/GCCOnboardingSteps";
import FAQSection from "@/components/shared/FAQSection";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { CheckCircle2, X, MessageCircle } from "lucide-react";
import RelatedRegions from "@/components/regions/RelatedRegions";
import { regionalPages } from "@/content/data/regions";

export const metadata: Metadata = {
  title: "Crypto Signals GCC | Premium Telegram Signals for Gulf Traders",
  description: "Yaga Calls provides premium Telegram crypto signals and market analysis for serious GCC traders across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
  alternates: {
    canonical: "https://www.yagacalls.com/regions/gcc",
  },
  openGraph: {
    title: "GCC Crypto Signals — Yaga Calls",
    description: "Premium Telegram crypto signal notes, narrative research, risk context, and manual onboarding for serious traders across the Gulf region.",
  }
};

export default function GCCPage() {
  const faqs = [
    {
      question: "Does Yaga Calls provide crypto signals for GCC traders?",
      answer: "Yes. Yaga Calls provides Telegram-first crypto signal notes and market analysis for serious traders across the GCC region, including UAE, Dubai, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman."
    },
    {
      question: "Which countries are included in the GCC?",
      answer: "The Gulf Cooperation Council includes Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and the United Arab Emirates."
    },
    {
      question: "Can traders from UAE, Saudi Arabia, and Qatar join Yaga Calls?",
      answer: "Yes. Yaga Calls is Telegram-first, so traders from UAE, Saudi Arabia, Qatar, and other GCC countries can join the free Telegram group and evaluate the service before premium onboarding."
    },
    {
      question: "Are Yaga Calls signals different for GCC traders?",
      answer: "Yaga Calls provides global crypto market analysis, while the GCC page gives region-specific positioning, search relevance, and onboarding clarity for Gulf-based traders."
    },
    {
      question: "What makes Yaga Calls suitable for GCC traders?",
      answer: "Yaga Calls is suitable for serious GCC traders because it emphasizes Telegram delivery, market narrative research, structured setup notes, entry and target planning, invalidation logic, risk context, selected proof examples, and manual onboarding."
    },
    {
      question: "Can GCC traders join the free Telegram group before premium?",
      answer: "Yes. GCC traders can join the free Telegram group first to observe Yaga Calls’ communication style, market notes, and selected examples before considering premium access."
    },
    {
      question: "Does Yaga Calls guarantee profit for GCC traders?",
      answer: "No. Yaga Calls does not guarantee profit for any region. Crypto trading involves risk, and all content is educational market analysis and signal ideas only."
    },
    {
      question: "What is the best Yaga Calls page for Dubai traders?",
      answer: "Dubai traders should use the Dubai regional page because it targets Dubai-specific search intent, premium crypto signal positioning, Telegram delivery, and high-purchase-power trader expectations."
    },
    {
      question: "How do GCC traders start premium onboarding?",
      answer: "GCC traders should review premium plans, message the official Yaga Calls Telegram contact, confirm the current discounted onboarding price, receive payment instructions, and get access after verification."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider focused on narrative research, signal structure, risk context, and Telegram delivery instead of random pump calls."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/regions/gcc#webpage",
        "url": "https://www.yagacalls.com/regions/gcc",
        "name": "Crypto Signals GCC | Premium Telegram Signals for Gulf Traders",
        "description": "Yaga Calls provides premium Telegram crypto signals and market analysis for serious GCC traders across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.yagacalls.com/regions/gcc#country-pages",
        "name": "GCC Crypto Signal Country Pages",
        "description": "Country and region pages for Yaga Calls GCC crypto signal search intent.",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "UAE Crypto Signals", "url": "https://www.yagacalls.com/regions/uae" },
          { "@type": "ListItem", "position": 2, "name": "Dubai Crypto Signals", "url": "https://www.yagacalls.com/regions/dubai" },
          { "@type": "ListItem", "position": 3, "name": "Saudi Arabia Crypto Signals", "url": "https://www.yagacalls.com/regions/saudi-arabia" },
          { "@type": "ListItem", "position": 4, "name": "Qatar Crypto Signals", "url": "https://www.yagacalls.com/regions/qatar" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/regions/gcc#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Regions", "item": "https://www.yagacalls.com/regions" },
          { "@type": "ListItem", "position": 3, "name": "GCC", "item": "https://www.yagacalls.com/regions/gcc" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/regions/gcc#faq",
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
      
      <GCCHero />

      <Container>
        <RegionalTrustBar regionName="GCC" />
      </Container>

      {/* Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Does Yaga Calls Provide Signals for GCC Traders?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls is a Telegram-first crypto signal and market analysis provider for serious traders across the GCC region. The service is designed for users who want structured setup notes, market narrative research, entry and target context, invalidation logic, risk-aware signal delivery, and manual premium onboarding.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Yaga Calls provides GCC-focused crypto signal and market analysis pages for serious traders across the Gulf region, including UAE, Dubai, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. The service is Telegram-first and focuses on market narrative research, structured setup notes, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding."
                  </p>
                </div>
              </div>
            </div>

            {/* Why Better Quality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Quality Matters</h2>
                <p className="text-text-muted leading-relaxed">
                  Many GCC traders already understand that crypto markets move fast. The problem is not access to information—it's quality. Serious traders in the Gulf need to know *why* a setup is being watched, not just where to buy.
                </p>
                <div className="space-y-4">
                  {[
                    "Why is this setup being watched?",
                    "What narrative supports the move?",
                    "Where is the entry zone?",
                    "What is the risk and invalidation logic?"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <span className="text-primary font-black">?</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">The Yaga Standard</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Avoid random buy alerts, fake urgency, and unclear admins. Yaga Calls provides education-first signal ideas with transparent proof and manual onboarding.
                </p>
                <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-widest text-primary hover:underline inline-block">Learn about Premium signals →</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <GCCCountryRouting />

      {/* GCC Standards */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">What GCC Traders Should Look For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Telegram-First Delivery",
                "Market Narrative Research",
                "Clear Entry Zones",
                "Target Level Planning",
                "Invalidation Logic",
                "Risk-Aware Position Sizing",
                "Historical Proof Examples",
                "Manual Onboarding Process",
                "No Profit Guarantees"
              ].map((flag, i) => (
                <div key={i} className="flex gap-4 p-6 bg-background rounded-2xl border border-line">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <p className="text-sm font-bold uppercase tracking-tight text-text">{flag}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-8 space-y-6">
               <p className="text-sm font-black uppercase tracking-widest text-primary">Telegram is the delivery channel. Structure is the value.</p>
               <div className="flex justify-center gap-6">
                  <Link href="/verified-crypto-signal-provider" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Verified Provider Checklist</Link>
                  <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Risk Management Guide</Link>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      <GCCOnboardingSteps />

      {/* Comparison Table */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">GCC Page vs Country Pages</h2>
              <p className="text-text-muted">Use the GCC page for a regional overview, or a country-specific page for targeted search intent.</p>
            </div>
            <div className="overflow-x-auto border border-line rounded-2xl bg-surface-deep shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-line bg-background">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">If you search for...</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Best Page</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { q: "crypto signals GCC", p: "/regions/gcc" },
                    { q: "crypto signals UAE", p: "/regions/uae" },
                    { q: "crypto signals Dubai", p: "/regions/dubai" },
                    { q: "crypto signals Saudi Arabia", p: "/regions/saudi-arabia" },
                    { q: "crypto signals Qatar", p: "/regions/qatar" },
                    { q: "crypto signals Kuwait/Bahrain/Oman", p: "/regions/gcc hub" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.q}</td>
                      <td className="px-6 py-4 text-sm text-primary font-black uppercase tracking-widest">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Fit Score */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <CheckCircle2 className="text-primary" /> Who This Page Is For
              </h3>
              <ul className="space-y-4">
                {[
                  "GCC-based crypto traders",
                  "Traders in UAE, Saudi, Qatar, Kuwait",
                  "Users wanting Telegram-based analysis",
                  "Premium signal seekers in the Gulf",
                  "Serious traders wanting risk context"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <X className="text-danger" /> Who Yaga Calls Is Not For
              </h3>
              <ul className="space-y-4">
                {[
                  "Guaranteed profit seekers",
                  "Pump-and-dump alert hunters",
                  "Gambling-style Telegram groups",
                  "Fake urgency followers",
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

      {/* Final CTA */}
      <Section className="bg-background">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Start Free, Then Go GCC.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Join the free Telegram group first to observe our research. Then read the GCC overview, choose your country, and compare discounted premium plans.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="gcc_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/regions/dubai" variant="secondary" trackingLabel="gcc_final_dubai">
              Explore Dubai Signals
            </CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-line/10">
            <Link href="/regions/uae" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">UAE Signals</Link>
            <Link href="/regions/saudi-arabia" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Saudi Arabia Signals</Link>
            <Link href="/regions/qatar" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Qatar Signals</Link>
            <Link href="/method" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Method</Link>
            <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Proof</Link>
            <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Pricing</Link>
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
            currentSlug="gcc" 
            relatedSlugs={regionalPages.find(p => p.slug === 'gcc')?.relatedRegions || []} 
          />
        </Container>
      </Section>
    </main>
  );
}
