import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import DubaiHero from "@/components/regions/dubai/DubaiHero";
import dynamic from "next/dynamic";
import { regionalPages } from "@/content/data/regions";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";

const RegionalTrustBar = dynamic<{ regionName: string }>(() => import("@/components/regions/RegionalTrustBar.js").then(mod => mod.default));
const FAQSection = dynamic<{ faqs: { question: string; answer: string }[] }>(() => import("@/components/shared/FAQSection.js").then(mod => mod.default));
const RelatedRegions = dynamic<{ currentSlug: string; relatedSlugs: string[] }>(() => import("@/components/regions/RelatedRegions.js").then(mod => mod.default));

export const metadata: Metadata = {
  title: "Crypto Signals Dubai | Premium Telegram Signals for Serious Traders",
  description: "Yaga Calls provides premium Telegram crypto signal notes for serious Dubai traders, with narrative research, risk context, selected proof examples, and manual onboarding.",
  alternates: {
    canonical: "https://www.yagacalls.com/regions/dubai",
  },
  openGraph: {
    title: "Dubai Crypto Signals — Yaga Calls",
    description: "Premium Telegram crypto signal notes, market narrative research, risk-aware setup context, and manual onboarding for serious Dubai traders.",
  }
};

export default function DubaiPage() {
  const faqs = [
    {
      question: "Does Yaga Calls provide crypto signals for Dubai traders?",
      answer: "Yes. Yaga Calls provides Telegram-first crypto signal notes and market analysis for serious Dubai traders who want narrative research, risk context, selected proof examples, and manual premium onboarding."
    },
    {
      question: "Is Yaga Calls a Dubai-regulated crypto service?",
      answer: "Yaga Calls provides educational crypto market analysis and signal ideas, not as a regulated financial adviser or guaranteed-profit service. VARA oversees virtual asset activity in and from Dubai."
    },
    {
      question: "Can Dubai traders join the free Telegram group before premium?",
      answer: "Yes. Dubai traders can join the free Telegram group first to observe market notes, communication style, and selected examples before considering premium access."
    },
    {
      question: "Does Yaga Calls guarantee profit for Dubai traders?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and all content is educational market analysis and signal ideas only."
    },
    {
      question: "What makes Yaga Calls suitable for Dubai traders?",
      answer: "Yaga Calls focuses on Telegram delivery, market narrative research, structured setup notes, entry and target planning, invalidation logic, risk context, selected proof examples, and manual onboarding."
    },
    {
      question: "How do Dubai traders start premium onboarding?",
      answer: "Dubai traders should review premium plans, message the official Yaga Calls Telegram contact, confirm the current discounted onboarding price, receive payment instructions, and get access after verification."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider focused on structure, narratives, risk context, and Telegram delivery instead of random pump calls."
    },
    {
      question: "Should I use the Dubai page or UAE page?",
      answer: "Use the Dubai page for Dubai-specific crypto signal searches. Use the UAE page for broader country-wide searches including Abu Dhabi, Sharjah, and other emirates."
    },
    {
      question: "Are Yaga Calls signals financial advice in Dubai?",
      answer: "No. Yaga Calls provides educational market analysis and signal ideas only. It does not provide financial advice."
    },
    {
      question: "Can Dubai traders use discounted premium pricing?",
      answer: "Yes, if discounted onboarding pricing is currently available. Traders should confirm the latest price through the official Telegram contact before payment."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/regions/dubai#webpage",
        "url": "https://www.yagacalls.com/regions/dubai",
        "name": "Crypto Signals Dubai | Premium Telegram Signals for Serious Traders",
        "description": "Yaga Calls provides premium Telegram crypto signal notes for serious Dubai traders, with narrative research, risk context, selected proof examples, and manual onboarding.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Service",
        "@id": "https://www.yagacalls.com/#service",
        "name": "Premium Telegram Crypto Signals",
        "provider": { "@id": "https://www.yagacalls.com/#organization" },
        "serviceType": "Crypto market analysis and Telegram signal notes",
        "areaServed": "Dubai",
        "description": "Telegram-first crypto signal notes with narrative research, entry zones, target planning, invalidation logic, and risk-aware trading context for serious Dubai traders."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/regions/dubai#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Regions", "item": "https://www.yagacalls.com/regions" },
          { "@type": "ListItem", "position": 3, "name": "Dubai", "item": "https://www.yagacalls.com/regions/dubai" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/regions/dubai#faq",
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
      
      <DubaiHero />

      <Container>
        <RegionalTrustBar regionName="Dubai" />
      </Container>

      {/* Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Does Yaga Calls Provide Signals for Dubai Traders?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls provides Telegram-first crypto signal notes and market analysis for serious Dubai traders. The service is built around market narrative research, structured setup notes, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Yaga Calls provides Dubai-focused crypto signal and market analysis content for serious traders who want Telegram-first delivery, market narrative research, structured setup notes, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding. Yaga Calls is not a guaranteed-profit service or pump group; it is positioned for traders who prefer research and structure."
                  </p>
                </div>
              </div>
            </div>

            {/* Why Better Quality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Dubai Standard</h2>
                <p className="text-text-muted leading-relaxed">
                  Dubai traders are exposed to endless crypto information. The problem is not access—it's signal quality. Serious Dubai traders should expect more than just noisy alerts.
                </p>
                <div className="space-y-4">
                  {[
                    "Why the setup matters now",
                    "What narrative supports the move",
                    "Where the entry zone is",
                    "Where the idea becomes wrong"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <span className="text-primary font-black">?</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Dubai Trust Context</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Dubai is a high-standard financial market. VARA oversees virtual asset activity in and from Dubai. Serious traders demand disciplined research and risk management, not Telegram hype.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust & Telegram */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Trust, Speed, and Structure</h2>
            <p className="text-text-muted">Telegram is the speed. Structure is the edge. A serious Dubai signal note should include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
               {[
                 { t: "Asset Pair", d: "Clear ticker identification" },
                 { t: "Market Reason", d: "Narrative & technical context" },
                 { t: "Entry Zone", d: "Precise entry range planning" },
                 { t: "Target Levels", d: "Defined review zones" },
                 { t: "Invalidation", d: "Logic-based stop loss" },
                 { t: "Risk Note", d: "Volatility & sizing context" }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-background border border-line rounded-2xl space-y-2">
                   <h4 className="text-sm font-black uppercase tracking-widest text-primary">{item.t}</h4>
                   <p className="text-xs text-text-muted">{item.d}</p>
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Link href="/verified-crypto-signal-provider" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Verified Provider Checklist</Link>
               <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Risk Management Guide</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Compare Pages */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Dubai, UAE, or GCC?</h2>
              <p className="text-text-muted">Choose the page that matches your search intent or trading location.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                 <h3 className="text-xl font-black uppercase tracking-tighter text-primary">Dubai Page</h3>
                 <p className="text-xs text-text-muted">City-specific premium intent for Dubai traders.</p>
                 <Link href="/regions/dubai" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Active Page →</Link>
               </div>
               <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                 <h3 className="text-xl font-black uppercase tracking-tighter">UAE Page</h3>
                 <p className="text-xs text-text-muted">Country-wide coverage including Abu Dhabi and Sharjah.</p>
                 <Link href="/regions/uae" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">View UAE Signals →</Link>
               </div>
               <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                 <h3 className="text-xl font-black uppercase tracking-tighter">GCC Page</h3>
                 <p className="text-xs text-text-muted">Wider Gulf-region overview and parent hub.</p>
                 <Link href="/regions/gcc" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">View GCC Hub →</Link>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-surface-deep border-t border-line">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Start Free. Upgrade Later.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Join the free Telegram group, read the method, review selected proof examples, and compare discounted premium plans only if the structure matches your trading approach.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="dubai_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="dubai_final_pricing">
              Compare Premium Plans
            </CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-line/10">
            <Link href="/method" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Method</Link>
            <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Proof</Link>
            <Link href="/regions/uae" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">UAE Signals</Link>
            <Link href="/regions/gcc" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">GCC Hub</Link>
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
            currentSlug="dubai" 
            relatedSlugs={regionalPages.find(p => p.slug === 'dubai')?.relatedRegions || []} 
          />
        </Container>
      </Section>
    </main>
  );
}
