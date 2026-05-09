import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import UAEHero from "@/components/regions/uae/UAEHero";
import RegionalTrustBar from "@/components/regions/RegionalTrustBar";
import FAQSection from "@/components/shared/FAQSection";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";
import RelatedRegions from "@/components/regions/RelatedRegions";
import { regionalPages } from "@/content/data/regions";

export const metadata: Metadata = {
  title: "Crypto Signals UAE | Premium Telegram Signals for Serious Traders",
  description: "Yaga Calls provides premium Telegram crypto signal notes and market analysis for serious UAE traders, with narrative research, risk context, proof examples, and manual onboarding.",
  alternates: {
    canonical: "https://www.yagacalls.com/regions/uae",
  },
  openGraph: {
    title: "UAE Crypto Signals — Yaga Calls",
    description: "Premium Telegram crypto signal notes, narrative research, risk-aware setup context, and manual onboarding for serious traders across the UAE.",
  }
};

export default function UAEPage() {
  const faqs = [
    {
      question: "Does Yaga Calls provide crypto signals for UAE traders?",
      answer: "Yes. Yaga Calls provides Telegram-first crypto signal notes and market analysis for serious UAE traders, including users in Dubai, Abu Dhabi, Sharjah, and other emirates."
    },
    {
      question: "Can UAE traders join the free Telegram group before premium?",
      answer: "Yes. UAE traders can join the free Telegram group first to observe Yaga Calls’ communication style, market notes, and selected examples before considering premium access."
    },
    {
      question: "Is the UAE page different from the Dubai page?",
      answer: "Yes. The UAE page covers the broader national market, while the Dubai page targets Dubai-specific searches and premium local positioning."
    },
    {
      question: "Does Yaga Calls guarantee profit for UAE traders?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and all content is educational market analysis and signal ideas only."
    },
    {
      question: "What makes Yaga Calls suitable for UAE traders?",
      answer: "Yaga Calls emphasizes Telegram delivery, market narrative research, structured setup notes, entry and target planning, invalidation logic, risk context, selected proof examples, and manual onboarding."
    },
    {
      question: "How do UAE traders start premium onboarding?",
      answer: "UAE traders should review the premium plans, message the official Yaga Calls Telegram contact, confirm the current discounted onboarding price, receive payment instructions, and get access after verification."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider focused on narrative research, risk context, and structured Telegram delivery."
    },
    {
      question: "Can Abu Dhabi traders use Yaga Calls?",
      answer: "Yes. Abu Dhabi traders can join the free Telegram group and evaluate Yaga Calls before premium onboarding."
    },
    {
      question: "Are Yaga Calls signals financial advice in the UAE?",
      answer: "No. Yaga Calls provides educational market analysis and signal ideas only. It does not provide financial advice."
    },
    {
      question: "Which page should Dubai traders read?",
      answer: "Dubai traders should read the dedicated Dubai crypto signals page because it targets Dubai-specific search intent and premium local positioning."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/regions/uae#webpage",
        "url": "https://www.yagacalls.com/regions/uae",
        "name": "Crypto Signals UAE | Premium Telegram Signals for Serious Traders",
        "description": "Yaga Calls provides premium Telegram crypto signal notes and market analysis for serious UAE traders, with narrative research, risk context, proof examples, and manual onboarding.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Service",
        "@id": "https://www.yagacalls.com/#service",
        "name": "Premium Telegram Crypto Signals",
        "provider": { "@id": "https://www.yagacalls.com/#organization" },
        "serviceType": "Crypto market analysis and Telegram signal notes",
        "areaServed": "United Arab Emirates",
        "description": "Telegram-first crypto signal notes with narrative research, entry zones, target planning, invalidation logic, and risk-aware trading context."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/regions/uae#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Regions", "item": "https://www.yagacalls.com/regions" },
          { "@type": "ListItem", "position": 3, "name": "UAE", "item": "https://www.yagacalls.com/regions/uae" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/regions/uae#faq",
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
      
      <UAEHero />

      <Container>
        <RegionalTrustBar regionName="UAE" />
      </Container>

      {/* Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Does Yaga Calls Provide Signals for UAE Traders?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls is a Telegram-first crypto signal and market analysis provider for serious UAE traders. The service focuses on structured setup notes, market narrative research, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Yaga Calls provides UAE-focused crypto signal and market analysis content for serious traders who want Telegram-first delivery, narrative-driven research, structured setup notes, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding. Yaga Calls is designed for traders who prefer research and structure over random pump calls or guaranteed-profit claims."
                  </p>
                </div>
              </div>
            </div>

            {/* Why Better Quality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Quality Matters</h2>
                <p className="text-text-muted leading-relaxed">
                  The UAE crypto market is not short of Telegram groups or trading noise. The problem is quality. Serious UAE traders need to know *why* a setup matters, not just receive a random ticker.
                </p>
                <div className="space-y-4">
                  {[
                    "Why is this setup being watched?",
                    "What narrative supports the move?",
                    "Where is the entry zone?",
                    "Is risk discussed before upside?"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <span className="text-primary font-black">?</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">UAE Market Standard</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Avoid random buy alerts, fake urgency, and unclear admins. Yaga Calls provides education-first signal ideas with transparent proof and manual onboarding.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Locations Covered */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">UAE Trading Locations Covered</h2>
            <p className="text-text-muted">Yaga Calls is relevant for traders across the UAE, including:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((loc) => (
                 <div key={loc} className="p-4 bg-background border border-line rounded-xl text-xs font-black uppercase tracking-widest text-text">
                   {loc}
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Link href="/regions/dubai" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Dubai Crypto Signals →</Link>
               <Link href="/regions/gcc" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">GCC Crypto Signals</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* UAE Fit */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <CheckCircle2 className="text-primary" /> Who This Page Is For
              </h3>
              <ul className="space-y-4">
                {[
                  "UAE-based crypto traders",
                  "Abu Dhabi & Sharjah traders",
                  "Users wanting premium signals UAE",
                  "Investors seeking narrative research",
                  "Serious traders wanting risk context"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <X className="text-danger" /> Who Yaga Calls Is Not For
              </h3>
              <ul className="space-y-4">
                {[
                  "Guaranteed profit seekers",
                  "No-loss signal hunters",
                  "Cheap lifetime VIP seekers",
                  "Pump-and-dump group members",
                  "Those wanting gambling alerts"
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
      <Section className="bg-surface-deep border-t border-line">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Join Free Telegram.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              The best way to evaluate Yaga Calls is to join the free Telegram group first. Then read the method, review proof examples, and compare discounted premium plans.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="uae_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/regions/dubai" variant="secondary" trackingLabel="uae_final_dubai">
              Explore Dubai Signals
            </CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-line/10">
            <Link href="/method" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Method</Link>
            <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Proof</Link>
            <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Pricing</Link>
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
            currentSlug="uae" 
            relatedSlugs={regionalPages.find(p => p.slug === 'uae')?.relatedRegions || []} 
          />
        </Container>
      </Section>
    </main>
  );
}
