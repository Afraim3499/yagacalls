import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import NarrativeHero from "@/components/narrative-trading/NarrativeHero";
import NarrativeSectors from "@/components/narrative-trading/NarrativeSectors";
import FAQSection from "../../components/shared/FAQSection";
import Link from "next/link";
import { X, ArrowRight, MousePointer2, BarChart3, Users, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Narrative Trading Crypto Signals | Yaga Calls",
  description: "Yaga Calls uses narrative-driven crypto signal research to track sector rotations, catalysts, market stories, technical structure, entries, targets, and risk context.",
  alternates: {
    canonical: "https://www.yagacalls.com/narrative-trading-crypto-signals",
  },
  openGraph: {
    title: "Narrative Trading Crypto Signals — Yaga Calls",
    description: "Learn how Yaga Calls tracks crypto market narratives, sector rotations, catalysts, and technical structures before sharing risk-aware Telegram signal notes.",
  }
};

export default function NarrativeTradingPage() {
  const faqs = [
    {
      question: "What are narrative trading crypto signals?",
      answer: "Narrative trading crypto signals are setup ideas based on market stories, sector rotations, catalysts, attention shifts, and liquidity behavior. A serious narrative signal should still include technical structure, entry zones, targets, invalidation, and risk context."
    },
    {
      question: "What is narrative trading in crypto?",
      answer: "Narrative trading in crypto means identifying the stories, sectors, catalysts, and attention cycles that may drive market movement, then checking whether the technical setup and risk profile support a trade idea."
    },
    {
      question: "Does Yaga Calls use narrative analysis?",
      answer: "Yes. Yaga Calls uses narrative research as part of its signal process, along with technical structure, entry planning, target mapping, invalidation logic, and risk management."
    },
    {
      question: "Are narrative-based crypto signals guaranteed to work?",
      answer: "No. A strong narrative does not guarantee price movement. Narrative signals still require technical confirmation, risk management, and personal decision-making."
    },
    {
      question: "What crypto narratives can move altcoins?",
      answer: "Common crypto narratives include AI, meme coins, DeFi, Solana ecosystem, Ethereum Layer 2s, RWA, gaming, Bitcoin ecosystem, exchange listings, and macro-driven market themes."
    },
    {
      question: "Is narrative trading the same as pump chasing?",
      answer: "No. Pump chasing usually means entering after hype has already pushed price up. Narrative trading is more research-led and looks at market stories, timing, structure, and risk before acting."
    },
    {
      question: "How does Yaga Calls turn narratives into signals?",
      answer: "Yaga Calls should evaluate the narrative, market timing, technical structure, entry zone, targets, invalidation, and risk context before sharing a Telegram signal note."
    },
    {
      question: "Are narrative signals good for beginners?",
      answer: "Beginners can learn from narrative analysis, but they should understand crypto risk, volatility, entries, targets, invalidation, and position sizing before using any signal."
    },
    {
      question: "Can I see Yaga Calls narrative signals before premium?",
      answer: "You can join the free Telegram group to observe selected market notes and communication style before deciding whether premium access is right for you."
    },
    {
      question: "Does Yaga Calls guarantee profit from narrative signals?",
      answer: "No. Yaga Calls does not guarantee profit. It provides educational crypto market analysis and signal ideas. Crypto trading involves risk, and every trader is responsible for their own decisions."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/narrative-trading-crypto-signals#webpage",
        "url": "https://www.yagacalls.com/narrative-trading-crypto-signals",
        "name": "Narrative Trading Crypto Signals | Yaga Calls",
        "description": "Yaga Calls uses narrative-driven crypto signal research to track sector rotations, catalysts, market stories, technical structure, entries, targets, and risk context.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://www.yagacalls.com/narrative-trading-crypto-signals#howto",
        "name": "How to Evaluate Narrative Trading Crypto Signals",
        "description": "A framework for evaluating narrative-based crypto signals before acting.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Identify the Narrative",
            "text": "Check which crypto market story, sector rotation, catalyst, or attention cycle is driving interest."
          },
          {
            "@type": "HowToStep",
            "name": "Check Market Timing",
            "text": "Evaluate whether the narrative is early, active, or already overcrowded."
          },
          {
            "@type": "HowToStep",
            "name": "Confirm Technical Structure",
            "text": "Review whether the chart supports the narrative with structure such as support, resistance, breakout, retest, or trend continuation."
          },
          {
            "@type": "HowToStep",
            "name": "Define Entry and Targets",
            "text": "Identify where the setup makes sense and where it may be reviewed."
          },
          {
            "@type": "HowToStep",
            "name": "Define Invalidation and Risk",
            "text": "Check where the narrative trade idea becomes wrong and whether the risk is acceptable."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/narrative-trading-crypto-signals#breadcrumb",
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
            "name": "Narrative Trading Crypto Signals",
            "item": "https://www.yagacalls.com/narrative-trading-crypto-signals"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/narrative-trading-crypto-signals#faq",
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
      
      <NarrativeHero />

      {/* Section 2 — Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Are Narrative Trading Crypto Signals?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Narrative trading crypto signals are setup ideas based on the market stories, catalysts, sectors, and attention cycles that move crypto assets. Instead of only looking at chart patterns, narrative trading asks why traders are paying attention to a coin, sector, or ecosystem.
                </p>
                <p>
                  A serious narrative-based crypto signal should still include technical structure, entry zones, target planning, invalidation logic, and risk context. Narrative creates the reason to watch. Risk management decides whether the setup is worth following.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Yaga Calls provides narrative trading crypto signals by tracking market stories, sector rotations, catalysts, liquidity shifts, social attention, and technical structures before sharing risk-aware Telegram signal notes. The Yaga Calls approach combines narrative research with entry zones, target planning, invalidation logic, and risk management instead of relying on random pump calls."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — What Narrative Trading Means */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Narrative Trading Means</h2>
                <p className="text-text-muted leading-relaxed">
                  Narrative trading is the process of identifying the market stories that attract attention, liquidity, and speculation. In crypto, attention often moves before fundamentals fully catch up.
                </p>
                <div className="space-y-4">
                  {[
                    "Sector rotations (AI, DeFi, RWA)",
                    "Ecosystem catalysts (Solana, Base, ETH L2s)",
                    "Macro events and ETF flows",
                    "Social sentiment and attention velocity"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <span className="text-primary">•</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Why Narratives Move Altcoins</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Altcoins are highly sensitive to attention. When traders believe a sector is becoming important, liquidity often rotates into the strongest names in that sector. Narratives create urgency and speculative demand before the crowd arrives.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <NarrativeSectors />

      {/* Narrative to Signal Framework */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The Narrative-to-Signal Framework</h2>
              <p className="text-text-muted">How Yaga Calls turns market stories into structured Telegram signal notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Identify", desc: "Which story is gaining attention? AI, Meme, DeFi, etc.", icon: <Search className="w-6 h-6" /> },
                { step: "02", title: "Timing", desc: "Is the move early, active, or overcrowded?", icon: <MousePointer2 className="w-6 h-6" /> },
                { step: "03", title: "Structure", desc: "Does the chart support the narrative with structure?", icon: <BarChart3 className="w-6 h-6" /> },
                { step: "04", title: "Signal", desc: "Define entry, target, invalidation, and risk.", icon: <ArrowRight className="w-6 h-6" /> }
              ].map((s, i) => (
                <div key={i} className="relative group">
                  <div className="p-8 rounded-[32px] bg-background border border-line h-full space-y-6 relative z-10">
                    <span className="text-4xl font-black text-primary/10 absolute top-4 right-6 group-hover:text-primary/20 transition-colors">{s.step}</span>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      {s.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-tight">{s.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Section */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Narrative Trading vs Pump Chasing</h2>
              <p className="text-text-muted">Pump chasing is emotional. Narrative trading is research-led.</p>
            </div>

            <div className="overflow-x-auto border border-line rounded-2xl bg-surface shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Pump Chasing</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Narrative Trading</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Entry", h: "Enters after hype", y: "Tracks rotation before crowd" },
                    { f: "Setup", h: "No clear logic", y: "Requires technical structure" },
                    { f: "Risk", h: "Ignored", y: "Requires invalidation" },
                    { f: "Targets", h: "Missing", y: "Uses target mapping" },
                    { f: "Mindset", h: "Emotional", y: "Research-led" }
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

      {/* Responsible Use */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Use Narrative Signals</h2>
              <p className="text-text-muted leading-relaxed">
                Narrative-based signals should be used as market analysis, not blind instructions. A narrative can explain opportunity, but risk management decides whether it is worth taking.
              </p>
              <div className="space-y-4">
                {[
                  "What is the market story?",
                  "Is the move early or late?",
                  "Is the technical entry valid?",
                  "Where is the exit door (invalidation)?",
                  "Is the position size disciplined?"
                ].map((q, i) => (
                  <div key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                    <span className="text-primary font-black">?</span> {q}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter">Who This Is For</h3>
              <ul className="space-y-4">
                {[
                  "Intelligent traders seeking reasoning",
                  "Investors following altcoin sectors",
                  "Users who value research over hype",
                  "Traders ready to observe before buying"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-line">
                <p className="text-[10px] font-black uppercase tracking-widest text-danger">Not for: Guaranteed profit seekers or gambling hunters.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-background">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Track Narratives Before the Crowd.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              The best way to evaluate Yaga Calls is to join the free Telegram group first. Watch how market notes are shared, how narratives are discussed, and how structure is treated.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="narrative_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="narrative_final_pricing">
              Compare Discounted Premium Plans
            </CTAButton>
          </div>
          <div className="space-y-4">
            <Link href="/method" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
              Read the Full Yaga Calls Method
            </Link>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
              Yaga Calls is not built for users looking for random pump calls or guaranteed profit. It is built for serious traders who want narrative research, structure, and risk-aware market context.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}

function Search(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
