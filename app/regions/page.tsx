import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import RegionsHero from "@/components/regions/RegionsHero";
import RegionGrid from "@/components/regions/RegionGrid";
import RegionalExperienceTable from "@/components/regions/RegionalExperienceTable";
import FAQSection from "@/components/shared/FAQSection";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Signals by Region | Dubai, UAE, UK, USA, Australia & Singapore",
  description: "Explore Yaga Calls regional crypto signal pages for serious traders in GCC, UAE, Dubai, UK, USA, Australia, Singapore, Europe, and other high-purchase-power markets.",
  alternates: {
    canonical: "https://www.yagacalls.com/regions",
  },
  openGraph: {
    title: "Yaga Calls Global Crypto Signal Regions",
    description: "Find regional Yaga Calls pages for serious crypto traders in GCC, Dubai, UAE, UK, USA, Australia, Singapore, Europe, and other premium markets.",
  }
};

export default function RegionsPage() {
  const faqs = [
    {
      question: "Does Yaga Calls serve traders globally?",
      answer: "Yes. Yaga Calls is a Telegram-first crypto signal and market analysis provider serving serious traders across global regions including GCC, UAE, Dubai, Saudi Arabia, Qatar, UK, Europe, Germany, Switzerland, USA, Australia, Singapore, and Russia/CIS."
    },
    {
      question: "Which regions does Yaga Calls target?",
      answer: "Yaga Calls targets high-purchase-power crypto trading markets including Middle East/GCC, UAE, Dubai, Saudi Arabia, Qatar, Europe, United Kingdom, Germany, Switzerland, United States, Australia, Singapore, and Russia/CIS."
    },
    {
      question: "Can I join Yaga Calls from my country?",
      answer: "Yaga Calls is Telegram-first, so users from many countries can join the free Telegram group and evaluate the service. Premium access is handled through manual Telegram onboarding."
    },
    {
      question: "Are Yaga Calls signals different by region?",
      answer: "Yaga Calls provides global crypto market analysis, while regional pages help users understand the service through country-specific search intent, timezone relevance, trust framing, and onboarding clarity."
    },
    {
      question: "What is the best regional page for Dubai traders?",
      answer: "Dubai-based traders should use the Dubai regional page, which should target searches such as crypto signals Dubai, premium crypto signals Dubai, and Telegram crypto signals Dubai."
    },
    {
      question: "What is the best regional page for UK traders?",
      answer: "UK-based traders should use the UK regional page, which should focus on transparent, research-led crypto signal notes, Telegram delivery, risk disclaimers, and proof before premium access."
    },
    {
      question: "Can I join the free Telegram group before choosing premium?",
      answer: "Yes. Visitors should join the free Telegram group first if they want to observe Yaga Calls’ communication style, market notes, and selected examples before premium onboarding."
    },
    {
      question: "Does Yaga Calls guarantee profit for any region?",
      answer: "No. Yaga Calls does not guarantee profit in any region. Crypto trading involves risk, and all content is educational market analysis and signal ideas only."
    },
    {
      question: "Why does Yaga Calls create regional pages?",
      answer: "Regional pages help traders find Yaga Calls through the country and region-based search terms they actually use, while also providing local trust framing, timezone context, and onboarding clarity."
    },
    {
      question: "Which page should I read after the regions page?",
      answer: "After choosing your region, review the Yaga Calls method, proof page, premium Telegram signals page, and pricing page before deciding whether premium access fits your trading approach."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.yagacalls.com/regions#webpage",
        "url": "https://www.yagacalls.com/regions",
        "name": "Crypto Signals by Region | Dubai, UAE, UK, USA, Australia & Singapore",
        "description": "Explore Yaga Calls regional crypto signal pages for serious traders in GCC, UAE, Dubai, UK, USA, Australia, Singapore, Europe, and other high-purchase-power markets.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.yagacalls.com/regions#region-list",
        "name": "Yaga Calls Crypto Signal Regions",
        "description": "Regional Yaga Calls pages for serious crypto traders across GCC, UAE, Dubai, Saudi Arabia, Qatar, UK, Europe, Germany, Switzerland, USA, Australia, Singapore, and Russia/CIS.",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "GCC Crypto Signals", "url": "https://www.yagacalls.com/regions/gcc" },
          { "@type": "ListItem", "position": 2, "name": "UAE Crypto Signals", "url": "https://www.yagacalls.com/regions/uae" },
          { "@type": "ListItem", "position": 3, "name": "Dubai Crypto Signals", "url": "https://www.yagacalls.com/regions/dubai" },
          { "@type": "ListItem", "position": 4, "name": "Saudi Arabia Crypto Signals", "url": "https://www.yagacalls.com/regions/saudi-arabia" },
          { "@type": "ListItem", "position": 5, "name": "Qatar Crypto Signals", "url": "https://www.yagacalls.com/regions/qatar" },
          { "@type": "ListItem", "position": 6, "name": "United Kingdom Crypto Signals", "url": "https://www.yagacalls.com/regions/uk" },
          { "@type": "ListItem", "position": 7, "name": "Europe Crypto Signals", "url": "https://www.yagacalls.com/regions/europe" },
          { "@type": "ListItem", "position": 8, "name": "Germany Crypto Signals", "url": "https://www.yagacalls.com/regions/germany" },
          { "@type": "ListItem", "position": 9, "name": "Switzerland Crypto Signals", "url": "https://www.yagacalls.com/regions/switzerland" },
          { "@type": "ListItem", "position": 10, "name": "USA Crypto Signals", "url": "https://www.yagacalls.com/regions/usa" },
          { "@type": "ListItem", "position": 11, "name": "Australia Crypto Signals", "url": "https://www.yagacalls.com/regions/australia" },
          { "@type": "ListItem", "position": 12, "name": "Singapore Crypto Signals", "url": "https://www.yagacalls.com/regions/singapore" },
          { "@type": "ListItem", "position": 13, "name": "Russia and CIS Crypto Signals", "url": "https://www.yagacalls.com/regions/russia" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/regions#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Regions", "item": "https://www.yagacalls.com/regions" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/regions#faq",
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
      
      <RegionsHero />

      {/* Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Does Yaga Calls Serve Traders Globally?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls is a Telegram-first crypto signal and market analysis provider built for serious traders across major global regions. The regional pages help traders from high-purchase-power markets understand how Yaga Calls’ research-led, risk-aware signal approach fits their location, trading session, and market expectations.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Yaga Calls provides global Telegram-first crypto signal and market analysis access for serious traders across high-purchase-power regions, including GCC, UAE, Dubai, Saudi Arabia, Qatar, UK, Europe, Germany, Switzerland, USA, Australia, Singapore, and Russia/CIS. The regional pages help users find location-relevant information while Yaga Calls maintains a research-led, risk-aware, educational approach to crypto market analysis."
                  </p>
                </div>
              </div>
            </div>

            {/* Why Region Matters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Region Matters</h2>
                <p className="text-text-muted leading-relaxed">
                  Crypto is global, but traders are not all the same. A trader in Dubai may care about premium access and privacy, while a trader in the UK may care more about transparency and risk warnings.
                </p>
                <div className="space-y-4">
                  {[
                    "Is this provider relevant to my country?",
                    "Can I join from my region?",
                    "Is Telegram delivery practical for my timezone?",
                    "Does the provider understand premium markets?"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <span className="text-primary font-black">?</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Global Access, Local Relevance</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Yaga Calls currently highlights regions including Middle East/GCC, UAE, Dubai, Saudi Arabia, Qatar, Europe, United Kingdom, Germany, Switzerland, United States, Australia, and Singapore.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <RegionGrid />

      {/* Cluster Sections */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-24">
            {/* Middle East */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Crypto Signals for GCC, UAE, Dubai, Saudi Arabia & Qatar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-text-muted leading-relaxed">
                    Traders in Dubai, UAE, Saudi Arabia, Qatar, and the wider Gulf region often search for premium crypto signals and high-quality market analysis. Yaga Calls positions itself around premium Telegram signals, manual onboarding, and privacy-conscious communication.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/regions/gcc" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals GCC</Link>
                    <Link href="/regions/uae" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals UAE</Link>
                    <Link href="/regions/dubai" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Dubai</Link>
                    <Link href="/regions/saudi-arabia" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Saudi Arabia</Link>
                    <Link href="/regions/qatar" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Qatar</Link>
                  </div>
                </div>
                <div className="p-8 bg-background border border-line rounded-[32px] space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Regional Focus</h4>
                  <p className="text-xs text-text-muted leading-relaxed">Positioned for the Middle East's high-purchase-power markets with risk-aware signal notes and narrative research.</p>
                </div>
              </div>
            </div>

            {/* Europe & UK */}
            <div className="space-y-8 border-t border-line pt-24">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Crypto Signals for UK, Europe, Germany & Switzerland</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-text-muted leading-relaxed">
                    European traders likely care about transparency, provider quality, and risk disclaimers. Yaga Calls positions itself for Europe and the UK as a research-led provider that avoids hype-based claims.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/regions/uk" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals UK</Link>
                    <Link href="/regions/europe" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Europe</Link>
                    <Link href="/regions/germany" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Germany</Link>
                    <Link href="/regions/switzerland" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Switzerland</Link>
                  </div>
                </div>
                <div className="p-8 bg-background border border-line rounded-[32px] space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Trust Messaging</h4>
                  <p className="text-xs text-text-muted leading-relaxed">Focusing on proof before premium, Telegram signal delivery, and manual onboarding clarity.</p>
                </div>
              </div>
            </div>

             {/* North America, Oceania, Asia */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-line pt-24">
                <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-primary">North America</h3>
                  <p className="text-xs text-text-muted leading-relaxed">Education-first market analysis and risk-aware signal notes for serious US-based traders.</p>
                  <Link href="/regions/usa" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals USA →</Link>
                </div>
                <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-primary">Oceania</h3>
                  <p className="text-xs text-text-muted leading-relaxed">Professional market commentary and Telegram convenience for Australian traders.</p>
                  <Link href="/regions/australia" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Australia →</Link>
                </div>
                <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-primary">High-Income Asia</h3>
                  <p className="text-xs text-text-muted leading-relaxed">Disciplined risk context and research-led signals for Singapore's finance-first market.</p>
                  <Link href="/regions/singapore" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">crypto signals Singapore →</Link>
                </div>
             </div>
          </div>
        </Container>
      </Section>

      <RegionalExperienceTable />

      {/* Audience Sections */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <CheckCircle2 className="text-primary" /> Who These Pages Are For
              </h3>
              <ul className="space-y-4">
                {[
                  "Traders wanting country-specific relevance",
                  "Investors following local market sessions",
                  "Users who value research over hype",
                  "Serious traders seeking global intelligence"
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
                  "Pump-and-dump alert hunters",
                  "Casino-style crypto gamblers",
                  "Those wanting no-loss signals"
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
              Start Global. Go Regional.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Join the free Telegram group first. Then choose your regional page, read the method, review proof examples, and compare discounted premium plans.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="regions_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="#region-grid" variant="secondary" trackingLabel="regions_final_selector">
              Choose Your Region
            </CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-line/10">
            <Link href="/method" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Read the Method</Link>
            <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Review Proof</Link>
            <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Compare Plans</Link>
          </div>
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
            Past performance does not guarantee future results. Crypto trading involves risk. Yaga Calls provides educational market analysis and signal ideas only.
          </p>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
