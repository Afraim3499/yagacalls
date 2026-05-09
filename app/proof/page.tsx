import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import CTAButton from "@/components/shared/CTAButton";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "../../components/shared/FAQSection";

export const metadata: Metadata = {
  title: "Crypto Signals Proof & Selected Results | Yaga Calls",
  description: "View selected Yaga Calls crypto signal examples and historical snapshots. Educational proof only. Past performance does not guarantee future results.",
  alternates: {
    canonical: "https://www.yagacalls.com/proof",
  },
  openGraph: {
    title: "Yaga Calls Proof — Selected Crypto Signal Examples",
    description: "Review selected Yaga Calls historical signal examples and proof snapshots. Educational only. Past performance does not guarantee future results.",
  }
};

const proofImages = [
  { src: "/proof/10.08.25 (result).webp", label: "Result", date: "10-08-2025" },
  { src: "/proof/10.08.25 (result 2).webp", label: "Result", date: "10-08-2025" },
  { src: "/proof/bina result.webp", label: "Binance", date: "Recent" },
  { src: "/proof/cake.webp", label: "CAKE", date: "Recent" },
  { src: "/proof/cz's wife.webp", label: "CZ's Wife", date: "Recent" },
  { src: "/proof/10.08.25.webp", label: "Setup", date: "10-08-2025" },
];

export default function ProofPage() {
  const faqs = [
    {
      question: "Does Yaga Calls show crypto signal proof?",
      answer: "Yes. Yaga Calls shows selected historical proof snapshots and signal examples to help visitors evaluate its communication style and market analysis process. These examples are educational only and do not guarantee future performance."
    },
    {
      question: "Are Yaga Calls proof examples guaranteed results?",
      answer: "No. Yaga Calls proof examples are selected historical snapshots only. Past performance does not guarantee future results, and crypto trading involves risk."
    },
    {
      question: "Can I see proof before paying?",
      answer: "Yes. Visitors can review selected proof examples on the website and join the free Telegram group before considering premium access."
    },
    {
      question: "Do screenshots alone prove a crypto signal provider is good?",
      answer: "No. Screenshots alone are not enough. Serious traders should also review the provider’s method, risk disclaimers, communication style, and whether the examples are presented responsibly."
    },
    {
      question: "What should I look for in crypto signal proof?",
      answer: "Look for timing, setup context, market reasoning, result presentation, risk disclaimers, and whether the provider avoids guaranteed-profit claims."
    },
    {
      question: "Is Yaga Calls a verified crypto signal provider?",
      answer: "Yaga Calls provides selected proof examples, a documented method, Telegram delivery, and manual onboarding. Users should review the proof page, method page, and free Telegram group before deciding whether premium access is right for them."
    },
    {
      question: "Why does Yaga Calls include risk disclaimers on proof examples?",
      answer: "Risk disclaimers are necessary because crypto trading is volatile and past results do not guarantee future performance. A serious provider should explain both opportunity and risk."
    },
    {
      question: "Should I join premium after seeing proof?",
      answer: "Not immediately unless you are confident. A better path is to review the proof, read the method, join the free Telegram group, and then compare premium plans if the structure fits your trading style."
    },
    {
      question: "Does Yaga Calls guarantee monthly profit?",
      answer: "No. Yaga Calls does not guarantee monthly profit. It provides educational crypto market analysis and signal ideas. Every trader remains responsible for their own decisions and risk management."
    },
    {
      question: "What should I do after reviewing Yaga Calls proof?",
      answer: "After reviewing the proof page, read the Yaga Calls method, join the free Telegram group, and compare premium plans only if the communication style and market structure fit your trading approach."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/proof#webpage",
        "url": "https://www.yagacalls.com/proof",
        "name": "Crypto Signals Proof & Selected Results | Yaga Calls",
        "description": "View selected Yaga Calls crypto signal examples and historical proof snapshots. Educational proof only. Past performance does not guarantee future results.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/proof#breadcrumb",
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
            "name": "Proof",
            "item": "https://www.yagacalls.com/proof"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.yagacalls.com/proof#selected-examples",
        "name": "Selected Yaga Calls Proof Snapshots",
        "description": "Selected historical Yaga Calls proof snapshots shared for transparency and education. Past performance does not guarantee future results.",
        "itemListElement": proofImages.map((img, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": `Selected Historical Proof Snapshot - ${img.label}`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/proof#faq",
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
      
      {/* Section 1 — Hero */}
      <Section className="bg-surface-deep pt-24 pb-16 border-b border-line">
        <Container className="text-center max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            Transparency First
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Crypto Signals Proof: Selected Yaga Calls Examples
          </h1>
          <p className="text-xl md:text-2xl text-text-muted leading-tight">
            Review selected historical Yaga Calls proof snapshots and signal examples. These examples are shared for transparency and education so visitors can better understand how Yaga Calls communicates market ideas, setup context, and selected results.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl max-w-2xl mx-auto">
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
              Proof should help you evaluate the process. It should not be treated as a guarantee of future performance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="proof_hero_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/method" variant="secondary" trackingLabel="proof_hero_method">
              See the Yaga Calls Method
            </CTAButton>
          </div>
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
            Past performance does not guarantee future results. Crypto trading involves risk. Yaga Calls provides educational market analysis and signal ideas only.
          </p>
        </Container>
      </Section>

      {/* Section 2 — Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Does Yaga Calls Show Crypto Signal Proof?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Yes. Yaga Calls shares selected historical proof snapshots and signal examples to help visitors evaluate how past market ideas were presented, tracked, and communicated.
                </p>
                <p>
                  These examples are not a guarantee of future performance. They are educational references designed to help traders understand the Yaga Calls approach before joining the free Telegram group or considering premium access.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Yaga Calls provides selected crypto signal proof examples and historical snapshots to help visitors evaluate its signal communication style and market analysis process. These examples are educational only and do not guarantee future performance. Yaga Calls uses proof as a trust-building reference, not as a promise of profit."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — What This Proof Page Shows */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What You Can Learn From These Proof Examples</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                The proof examples on this page are meant to help visitors understand how Yaga Calls presents selected market ideas and historical results. When reviewing the examples, look for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "The asset or market being discussed",
                  "The date or timing of the setup",
                  "The market idea behind the call",
                  "The result shown in the snapshot",
                  "The communication style",
                  "The level of structure behind the update",
                  "Whether the example matches the Yaga Calls method",
                  "Whether the provider uses realistic disclaimers"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center text-sm font-bold uppercase tracking-tight text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4 — How to Read the Proof Images */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Read the Proof Images</h2>
              <p className="text-text-muted leading-relaxed">
                The existing proof images should be reviewed as selected historical snapshots. When looking at each image, do not focus only on the outcome. Focus on the structure around the example. Ask yourself:
              </p>
              <ul className="space-y-3">
                {[
                  "Was the setup shared with timing context?",
                  "Was the market idea clear?",
                  "Did the communication avoid hype?",
                  "Does the example connect to a broader method?",
                  "Is the result presented as historical proof?"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-widest text-text">
                    <span className="text-primary">/</span> {item}
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-background border-l-2 border-primary rounded-r-xl">
                <p className="text-[10px] text-text-muted italic leading-relaxed">
                  The proof images are selected examples. They are not full audited performance records, and they should not be interpreted as guaranteed future results.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Proof Does Not Mean</h2>
              <p className="text-text-muted leading-relaxed">
                Proof is important, but it must be understood correctly. A historical winning example does not mean future signals will win. A screenshot does not remove market risk.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-background rounded-2xl border border-line">
                  <p className="text-sm font-black text-danger uppercase tracking-widest mb-2">Fake Certainty</p>
                  <p className="text-xs text-text-muted italic">"This proof proves we never lose."</p>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-line">
                  <p className="text-sm font-black text-primary uppercase tracking-widest mb-2">Real Proof</p>
                  <p className="text-xs text-text-muted italic">"This proof shows a historical example of our method in action."</p>
                </div>
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-primary">Real proof builds trust. Fake certainty creates risk.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 6 — Existing Proof Image Section */}
      <Section className="bg-background">
        <Container>
          <div className="space-y-12 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Selected Historical Proof Snapshots</h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Below are selected Yaga Calls proof snapshots. These images are kept as historical examples and should be reviewed as educational references.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {proofImages.map((img, i) => (
                <GlowCard key={i} className="p-2 overflow-hidden flex flex-col group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-line bg-[#0a0a0a]">
                    <Image
                      src={img.src}
                      alt={`Selected Yaga Calls crypto signal proof snapshot - ${img.label} ${img.date}`}
                      fill
                      className="object-contain transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-line">
                      Historical Example
                    </div>
                  </div>
                  <div className="px-4 pb-4 flex justify-between items-center mt-auto">
                    <div className="text-[10px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded">
                      Educational Snapshot
                    </div>
                    <div className="text-[10px] font-bold text-text-muted uppercase">
                      {img.date}
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="mt-12 p-6 bg-surface-deep border border-line rounded-3xl text-center max-w-3xl mx-auto">
              <p className="text-[10px] text-text-muted italic leading-relaxed uppercase tracking-widest">
                These examples are selected historical snapshots. They are not guarantees of future performance. Crypto trading involves risk, and every trader is responsible for their own decisions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 7 — Why Proof Needs Context */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Proof Needs Context</h2>
                <p className="text-text-muted leading-relaxed">
                  A screenshot by itself can create attention, but context creates trust. Yaga Calls uses proof to support the broader method: narrative research, technical structure, entry planning, and risk management.
                </p>
                <div className="flex gap-4">
                  <CTAButton href="/method" trackingLabel="proof_context_method">Read the Yaga Calls Method</CTAButton>
                </div>
              </div>
              <div className="p-8 bg-background rounded-[32px] border border-line space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Context Checklist</h4>
                <div className="space-y-4">
                  {[
                    "What was the market condition?",
                    "Was the setup early or late?",
                    "Was there a clear trading idea?",
                    "Was risk acknowledged?",
                    "Was the example educational?"
                  ].map((q, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <span className="text-primary">•</span> {q}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 8 — Proof vs Hype Screenshots */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Proof Should Not Feel Like Hype</h2>
                <p className="text-text-muted">The proof page should make people trust the process, not gamble emotionally.</p>
              </div>

              <div className="overflow-x-auto border border-line rounded-2xl bg-background shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-line bg-surface">
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Hype Screenshot Style</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Yaga Calls Proof Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {[
                      { f: "Focus", h: "Only on gains", y: "Selected historical examples" },
                      { f: "Urgency", h: "Creates urgency", y: "Encourages review" },
                      { f: "Risk", h: "Ignores risk", y: "Includes risk disclaimers" },
                      { f: "Future", h: "Implies certainty", y: "Past results are not guarantees" },
                      { f: "Goal", h: "Instant payment", y: "Trust and observation first" }
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
          </div>
        </Container>
      </Section>

      {/* Section 9 — See Live Context in the Free Telegram Group */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Want More Context? Join Free Telegram</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                The proof page shows selected historical examples. The free Telegram group lets you observe Yaga Calls’ current communication style in real-time.
              </p>
              <ul className="space-y-2">
                {["Market notes", "Public updates", "Educational content", "Signal previews", "Risk discussions"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-xs font-black uppercase tracking-widest text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="proof_live_free">Join Free Telegram</CTAButton>
                <CTAButton href="/pricing" variant="secondary" trackingLabel="proof_live_pricing">Compare Premium Plans</CTAButton>
              </div>
            </div>
            <div className="p-12 bg-surface-deep rounded-[40px] border border-line text-center space-y-6">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Proof Is Stronger When You Understand the Method</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Do not judge Yaga Calls only by screenshots. Review the method behind the examples to understand how we treat narrative, timing, and risk.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/method" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Read the Yaga Calls Method</Link>
                <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-widest text-text-muted hover:underline">View Premium Telegram Signals</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 11 — Final CTA */}
      <Section className="bg-surface-deep border-t border-line">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Start With Proof. Then Observe the Free Telegram.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Review the proof snapshots, read the method, and join the free Telegram group before deciding whether premium access is right for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="proof_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="proof_final_pricing">
              Compare Discounted Premium Plans
            </CTAButton>
          </div>
          <div className="space-y-4">
            <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
              Start Manual Onboarding
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="/verified-crypto-signal-provider" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                How to verify a crypto signal provider
              </Link>
              <Link href="/crypto-signals-with-risk-management" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Crypto signals with risk management
              </Link>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
              Yaga Calls provides educational market analysis and signal ideas. Crypto trading involves risk. Past performance does not guarantee future results.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
