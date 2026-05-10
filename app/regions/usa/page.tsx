import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import USAHero from "@/components/regions/usa/USAHero";
import RegionalTrustBar from "@/components/regions/RegionalTrustBar";
import FAQSection from "@/components/shared/FAQSection";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import RelatedRegions from "@/components/regions/RelatedRegions";
import { regionalPages } from "@/content/data/regions";

export const metadata: Metadata = {
  title: "Crypto Signals USA | Premium Telegram Access",
  description: "Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious USA traders, with risk context, proof examples, and manual onboarding.",
  alternates: {
    canonical: "https://www.yagacalls.com/regions/usa",
  },
  openGraph: {
    title: "USA Crypto Signals — Yaga Calls",
    description: "Telegram-first crypto signal notes, market narrative research, risk-aware setup context, selected proof examples, and manual onboarding for serious USA traders.",
  }
};

export default function USAPage() {
  const faqs = [
    {
      question: "Does Yaga Calls provide crypto signals for USA traders?",
      answer: "Yes. Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious USA traders who want narrative research, structured setup context, risk-aware notes, and manual onboarding."
    },
    {
      question: "Is Yaga Calls SEC-registered or CFTC-approved?",
      answer: "Yaga Calls is an educational crypto market analysis and signal idea provider, not an SEC-registered or CFTC-approved financial adviser. We do not provide regulated investment advice."
    },
    {
      question: "Can US traders join the free Telegram group before premium?",
      answer: "Yes. US traders can join the free Telegram group first to observe Yaga Calls’ communication style, market notes, and selected examples before considering premium access."
    },
    {
      question: "Does Yaga Calls guarantee profit for US traders?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and every trader remains responsible for their own decisions."
    },
    {
      question: "Does Yaga Calls provide financial advice in the USA?",
      answer: "No. Yaga Calls provides educational market analysis and signal ideas only. It does not provide financial advice."
    },
    {
      question: "Can New York, California, and Texas traders use Yaga Calls?",
      answer: "Yes. Traders from New York, California, Texas, Florida, and other US states can join the free Telegram group and evaluate Yaga Calls before premium onboarding."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider focused on structure, risk, and Telegram delivery instead of random pump calls."
    },
    {
      question: "How do US traders start premium onboarding?",
      answer: "US traders should review premium plans, message the official Yaga Calls Telegram contact, confirm current discounted pricing, receive payment instructions, and get access after verification."
    },
    {
      question: "Are Yaga Calls signals safe because they include risk context?",
      answer: "No crypto signal is risk-free. Risk context helps traders evaluate downside, but it does not remove crypto volatility, execution risk, or personal responsibility."
    },
    {
      question: "What should US traders check before joining a crypto signal provider?",
      answer: "US traders should check proof examples, method, risk disclaimers, entry and target context, invalidation logic, official Telegram links, onboarding safety, and whether the provider avoids guaranteed-profit claims."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/regions/usa#webpage",
        "url": "https://www.yagacalls.com/regions/usa",
        "name": "Crypto Signals USA | Telegram Signals for Serious Traders",
        "description": "Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious USA traders, with risk context, proof examples, and manual onboarding.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Service",
        "@id": "https://www.yagacalls.com/#service",
        "name": "Premium Telegram Crypto Signals",
        "provider": { "@id": "https://www.yagacalls.com/#organization" },
        "serviceType": "Crypto market analysis and Telegram signal notes",
        "areaServed": "United States",
        "description": "Telegram-first crypto signal notes with narrative research, entry zones, target planning, invalidation logic, and risk-aware trading context for serious USA traders."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/regions/usa#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Regions", "item": "https://www.yagacalls.com/regions" },
          { "@type": "ListItem", "position": 3, "name": "USA", "item": "https://www.yagacalls.com/regions/usa" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/regions/usa#faq",
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
      
      <USAHero />

      <Container>
        <RegionalTrustBar regionName="USA" />
      </Container>

      {/* Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Does Yaga Calls Provide Signals for USA Traders?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls provides USA-focused crypto signal and market analysis content for serious traders who prefer Telegram-first delivery, structured setup notes, market narrative research, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <div className="flex gap-4 items-start text-text font-bold italic">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <p>
                      "The US market has heavy regulatory sensitivity. US regulators have warned about digital asset fraud, virtual currency trading risk, and pump-and-dump schemes. Yaga Calls provides educational market analysis and signal ideas only."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Better Quality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Risk-First Analysis</h2>
                <p className="text-text-muted leading-relaxed">
                  US traders should look for quality and trust. A serious provider should explain both opportunity and risk with professional discipline, avoiding guaranteed-profit language or "safe investment" claims.
                </p>
                <div className="space-y-4">
                  {[
                    "Selected proof examples before premium",
                    "Documented signal method",
                    "Entry zones and target planning",
                    "Manual, transparent onboarding path"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 className="text-primary w-4 h-4" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">SEC & CFTC Awareness</h4>
                <div className="flex gap-4 items-start text-xs text-text-muted leading-relaxed">
                   <AlertCircle className="w-5 h-5 text-warning shrink-0" />
                   <p>The CFTC warns that fraud is a significant risk in digital asset markets. Yaga Calls is positioned as a research-led, educational service—not a regulated financial adviser.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* State Coverage */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">NY, California, Texas, Florida & USA Traders</h2>
            <p className="text-text-muted">Structured crypto signal notes for major US hubs:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {["New York", "California", "Texas", "Florida", "Illinois", "Washington", "New Jersey", "Massachusetts"].map((state) => (
                 <div key={state} className="p-4 bg-background border border-line rounded-xl text-xs font-black uppercase tracking-widest text-text">
                   {state}
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Link href="/regions" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Global Regions →</Link>
               <Link href="/regions/australia" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Australia Signals</Link>
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
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="usa_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/method" variant="secondary" trackingLabel="usa_final_method">
              Read the Method
            </CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-line/10">
            <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Proof</Link>
            <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Pricing</Link>
            <Link href="/regions/europe" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Europe Hub</Link>
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
            currentSlug="usa" 
            relatedSlugs={regionalPages.find(p => p.slug === 'usa')?.relatedRegions || []} 
          />
        </Container>
      </Section>
    </main>
  );
}
