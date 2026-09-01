import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GermanyHero from "@/components/regions/germany/GermanyHero";
import RegionalTrustBar from "@/components/regions/RegionalTrustBar";
import FAQSection from "@/components/shared/FAQSection";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Search } from "lucide-react";
import RelatedRegions from "@/components/regions/RelatedRegions";
import { regionalPages } from "@/content/data/regions";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import { createWebPageSchema, createBreadcrumbSchema, createFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Crypto Signals Germany | Telegram Access",
  description: "Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious Germany traders, with risk context, proof examples, and manual onboarding.",
  alternates: {
    canonical: "https://www.yagacalls.com/regions/germany",
  },
  openGraph: {
    siteName: "Yaga Calls",
    title: "Germany Crypto Signals — Yaga Calls",
    description: "Telegram-first crypto signal notes, market narrative research, risk-aware setup context, selected proof examples, and manual onboarding for serious Germany traders.",
    images: [{ url: "https://www.yagacalls.com/api/og?title=Germany%20Crypto%20Signals%20%E2%80%94%20Yaga%20Calls&subtitle=Telegram-first%20crypto%20signal%20notes%2C%20market%20narrative%20research%2C%20risk-aware%20setup%20context%2C%20selected%20proof%20examples%2C%20and%20manual%20onboarding%20for%20serious%20Germany%20traders.", width: 1200, height: 630, alt: "Germany Crypto Signals — Yaga Calls" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany Crypto Signals — Yaga Calls",
    description: "Telegram-first crypto signal notes, market narrative research, risk-aware setup context, selected proof examples, and manual onboarding for serious Germany traders.",
    images: ["https://www.yagacalls.com/api/og?title=Germany%20Crypto%20Signals%20%E2%80%94%20Yaga%20Calls&subtitle=Telegram-first%20crypto%20signal%20notes%2C%20market%20narrative%20research%2C%20risk-aware%20setup%20context%2C%20selected%20proof%20examples%2C%20and%20manual%20onboarding%20for%20serious%20Germany%20traders."],
  }
};

export default function GermanyPage() {
  const faqs = [
    {
      question: "Does Yaga Calls provide crypto signals for Germany traders?",
      answer: "Yes. Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious Germany traders who want narrative research, structured setup context, risk-aware notes, and manual onboarding."
    },
    {
      question: "Is Yaga Calls BaFin-regulated?",
      answer: "Yaga Calls is an educational crypto market analysis and signal idea provider, not a BaFin-regulated financial adviser or investment firm. MiCA creates broader EU rules for crypto-assets."
    },
    {
      question: "Can German traders join the free Telegram group before premium?",
      answer: "Yes. German traders can join the free Telegram group first to observe Yaga Calls’ communication style, market notes, and selected examples before considering premium access."
    },
    {
      question: "Does Yaga Calls guarantee profit for German traders?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and every trader remains responsible for their own decisions."
    },
    {
      question: "Does Yaga Calls provide financial advice in Germany?",
      answer: "No. Yaga Calls provides educational market analysis and signal ideas only. It does not provide financial advice."
    },
    {
      question: "Can Berlin, Munich, and Frankfurt traders use Yaga Calls?",
      answer: "Yes. Traders from Berlin, Munich, Frankfurt, Hamburg, and other German cities can join the free Telegram group and evaluate Yaga Calls before premium onboarding."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider focused on structure, risk, and Telegram delivery instead of random pump calls."
    },
    {
      question: "How do German traders start premium onboarding?",
      answer: "German traders should review premium plans, message the official Yaga Calls Telegram contact, confirm current discounted pricing, receive payment instructions, and get access after verification."
    },
    {
      question: "Should German traders use the Germany page or Europe page?",
      answer: "German traders should use the Germany page for country-specific search intent and the Europe page for broader European comparison."
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
        ...createWebPageSchema({
          title: "Crypto Signals Germany | Telegram Signals for Serious Traders",
          description: "Yaga Calls provides Telegram-first crypto signal notes and educational market analysis for serious Germany traders, with risk context, proof examples, and manual onboarding.",
          url: "https://www.yagacalls.com/regions/germany"
        }),
        "@context": undefined
      },
      {
        "@type": "Service",
        "@id": "https://www.yagacalls.com/#service",
        "name": "Premium Telegram Crypto Signals",
        "provider": { "@id": "https://www.yagacalls.com/#organization" },
        "serviceType": "Crypto market analysis and Telegram signal notes",
        "areaServed": "Germany",
        "description": "Telegram-first crypto signal notes with narrative research, entry zones, target planning, invalidation logic, and risk-aware trading context for serious Germany traders."
      },
      {
        ...createBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Regions", item: "/regions" },
          { name: "Germany", item: "/regions/germany" }
        ]),
        "@context": undefined
      },
      {
        ...createFAQSchema(faqs),
        "@context": undefined
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <GermanyHero />

      <Container>
        <RegionalTrustBar regionName="Germany" />
      </Container>

      {/* Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter">Does Yaga Calls Provide Signals for Germany Traders?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls provides Germany-focused crypto signal and market analysis content for serious traders who prefer Telegram-first delivery, structured setup notes, market narrative research, entry and target planning, invalidation logic, risk-aware context, selected proof examples, and manual premium onboarding.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <div className="flex gap-4 items-start text-text font-bold italic">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <p>
                      "Germany sits inside the EU’s MiCA regulatory environment. This makes transparent communication, risk disclaimers, and provider due diligence especially important. Yaga Calls provides educational market analysis and signal ideas only."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality & Structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12">
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter">Disciplined Analysis</h2>
                <p className="text-text-muted leading-relaxed">
                  German traders value precision. A serious provider should not rely on screenshots or profit claims alone. We focus on documented method, logical invalidation, and risk context.
                </p>
                <div className="space-y-4">
                  {[
                    "Documented signal method",
                    "Clear entry and target context",
                    "Logic-based invalidation notes",
                    "Official manual onboarding"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 className="text-primary w-4 h-4" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">BaFin & MiCA Context</h4>
                <p className="text-sm text-text-muted leading-relaxed italic">
                  Yaga Calls is positioned as an educational resource for traders who want structure. Every trader remains responsible for their own decisions and risk management within the German market.
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
            <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter">Berlin, Munich, Frankfurt & Germany Traders</h2>
            <p className="text-text-muted">Structured crypto signal notes for major German trading hubs:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne", "Düsseldorf", "Stuttgart", "Leipzig"].map((city) => (
                 <div key={city} className="p-4 bg-background border border-line rounded-xl text-xs font-black uppercase tracking-widest text-text">
                   {city}
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Link href="/regions/europe" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Europe Hub →</Link>
               <Link href="/regions/switzerland" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Swiss Signals</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-background">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter leading-snug">
              Start Free, Then Decide.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Join the free Telegram group first to observe our communication style. Then read the method, review selected proof examples, and compare discounted premium plans only if the structure fits your approach.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href={BRAND_CONFIG.officialTelegram} target="_blank" trackingLabel="germany_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="germany_final_pricing">
              Compare Premium Plans
            </CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-line/10">
            <Link href="/method" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Method</Link>
            <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">Proof</Link>
            <Link href="/regions/uk" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors underline">UK Signals</Link>
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
            currentSlug="germany" 
            relatedSlugs={regionalPages.find(p => p.slug === 'germany')?.relatedRegions || []} 
          />
        </Container>
      </Section>
    </main>
  );
}
