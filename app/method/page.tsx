import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import SignalCheck from "@/components/shared/SignalCheck";
import MethodHero from "@/components/method/MethodHero";
import MethodFramework from "@/components/method/MethodFramework";
import MethodComparison from "@/components/method/MethodComparison";
import FAQSection from "../../components/shared/FAQSection";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Signals With Risk Management | Yaga Calls Method",
  description: "Learn how the Yaga Calls method uses market narratives, technical structure, entry zones, targets, invalidation, and risk management before sharing crypto signal notes.",
  alternates: {
    canonical: "https://www.yagacalls.com/method",
  },
  openGraph: {
    title: "The Yaga Calls Method — Narrative, Timing & Risk",
    description: "See how Yaga Calls structures crypto signal notes using market narratives, technical validation, entry zones, targets, invalidation, and risk-aware planning.",
  }
};

export default function MethodPage() {
  const faqs = [
    {
      question: "What is the Yaga Calls method?",
      answer: "The Yaga Calls method is a structured crypto signal framework that combines market narrative research, technical setup validation, entry zone planning, target mapping, invalidation logic, risk management, and Telegram-based signal delivery."
    },
    {
      question: "Does Yaga Calls use risk management?",
      answer: "Yes. Yaga Calls emphasizes risk-aware setup notes, invalidation logic, stop-loss context, and position sizing awareness. Crypto trading still involves risk, and no signal provider can guarantee profit."
    },
    {
      question: "What is invalidation in a crypto signal?",
      answer: "Invalidation is the point where the original trade idea becomes wrong or no longer makes sense. It helps traders know when to reassess instead of holding emotionally."
    },
    {
      question: "Why does Yaga Calls focus on market narratives?",
      answer: "Crypto markets often move through narratives such as sector rotation, ecosystem catalysts, exchange listings, liquidity shifts, macro sentiment, and crowd attention. Yaga Calls uses narrative research to understand why a setup may matter."
    },
    {
      question: "Are Yaga Calls signals just buy alerts?",
      answer: "No. Yaga Calls is positioned around structured setup notes that include market context, entry zones, target planning, invalidation logic, and risk context instead of random buy alerts."
    },
    {
      question: "Does the Yaga Calls method guarantee profit?",
      answer: "No. The Yaga Calls method does not guarantee profit. It is an educational market analysis framework. Crypto trading involves risk, and every trader is responsible for their own decisions."
    },
    {
      question: "How are Yaga Calls signals delivered?",
      answer: "Yaga Calls delivers market updates and crypto signal notes through Telegram so traders can follow fast-moving market conditions in a mobile-friendly format."
    },
    {
      question: "What should a good crypto signal include?",
      answer: "A good crypto signal should include the asset, market reason, entry zone, target levels, invalidation or stop-loss context, risk awareness, and follow-up logic where necessary."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider. It avoids blind pump calls, guaranteed-profit claims, and no-stop-loss setups."
    },
    {
      question: "How can I see the Yaga Calls method before paying?",
      answer: "You can join the free Telegram group, read the method page, and review selected proof examples before deciding whether premium access is right for you."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/method#webpage",
        "url": "https://www.yagacalls.com/method",
        "name": "Crypto Signals With Risk Management | Yaga Calls Method",
        "description": "Learn how the Yaga Calls method uses market narratives, technical structure, entry zones, targets, invalidation, and risk management before sharing crypto signal notes.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://www.yagacalls.com/method#howto",
        "name": "How the Yaga Calls Method Structures Crypto Signal Ideas",
        "description": "The Yaga Calls method structures crypto signal ideas through narrative research, technical validation, liquidity review, entry planning, invalidation, target mapping, risk context, and Telegram delivery.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Market Narrative Scan",
            "text": "Yaga Calls reviews market narratives, catalysts, sector rotations, liquidity shifts, and attention cycles before considering a setup."
          },
          {
            "@type": "HowToStep",
            "name": "Technical Structure",
            "text": "Yaga Calls checks trend structure, support and resistance, volume behavior, liquidity zones, and broader market conditions."
          },
          {
            "@type": "HowToStep",
            "name": "Entry Zone Planning",
            "text": "A serious setup defines where the idea becomes relevant instead of giving a vague buy alert."
          },
          {
            "@type": "HowToStep",
            "name": "Invalidation Logic",
            "text": "Yaga Calls defines where the setup becomes wrong or should be reassessed."
          },
          {
            "@type": "HowToStep",
            "name": "Target Planning",
            "text": "Targets help traders plan exits or reassessment zones instead of reacting emotionally."
          },
          {
            "@type": "HowToStep",
            "name": "Risk Management",
            "text": "Yaga Calls emphasizes risk context, position sizing awareness, stop-loss thinking, and capital preservation."
          },
          {
            "@type": "HowToStep",
            "name": "Telegram Delivery",
            "text": "Structured signal notes and market updates are delivered through Telegram for fast mobile reading."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/method#breadcrumb",
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
            "name": "Method",
            "item": "https://www.yagacalls.com/method"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/method#faq",
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
      
      <MethodHero />

      {/* Section 2 — Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Is the Yaga Calls Method?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  The Yaga Calls method is a structured crypto signal framework built around narrative research, technical validation, entry zones, target planning, invalidation logic, risk management, and Telegram-first delivery.
                </p>
                <p>
                  Instead of posting random coin names, Yaga Calls looks for market stories, sector rotations, catalysts, liquidity behavior, and chart structure before sharing setup ideas. The goal is to help traders understand why a setup exists, where the idea makes sense, and where the idea becomes wrong.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "The Yaga Calls method is a risk-managed crypto signal framework that combines market narrative research, technical setup validation, entry zone planning, target mapping, invalidation logic, and Telegram-based signal delivery. It is designed for serious traders who want structured market context instead of random pump calls or guaranteed-profit claims."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Why a Signal Method Matters */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why a Crypto Signal Method Matters</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                A crypto signal provider should not be judged only by how exciting the call sounds. A serious provider should be judged by the process behind the call. Without a method, signals become random.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-surface-deep p-8 rounded-3xl border border-line">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-text-muted">Weak Signal Strategy</h4>
                  <p className="text-2xl font-black text-danger italic">"Buy this coin now."</p>
                  <p className="text-sm text-text-muted">Vague instructions, no entry zone, no risk context, and no logic provided.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Yaga Calls Method</h4>
                  <div className="space-y-2">
                    {[
                      "Why does this setup matter?",
                      "What market narrative supports it?",
                      "Where is the entry zone and invalidation?",
                      "What are the target levels and risk?",
                    ].map((q, i) => (
                      <div key={i} className="flex gap-2 text-xs font-bold uppercase tracking-tight text-text">
                        <span className="text-primary">/</span> {q}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-text-muted italic">A serious signal answers the hard questions first.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <MethodFramework />

      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {/* Step 1 */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Step 1: Market Narrative Scan</h2>
              <p className="text-text-muted leading-relaxed">
                Crypto markets move through narratives. A chart may show the price, but the narrative often explains why attention is moving. Yaga Calls looks for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Sector rotations", "Ecosystem catalysts", "Exchange listing momentum", "Whale behavior", "Liquidity shifts", "Token unlocks", "Social sentiment", "Macro-driven attention"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm font-bold uppercase tracking-tight text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
                <p className="text-sm font-black uppercase tracking-widest text-primary">Narrative creates the reason to watch. Structure decides if it is worth acting.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Step 2: Technical Structure</h2>
              <p className="text-text-muted leading-relaxed">
                After identifying a narrative, we check whether chart structure supports the idea. A strong narrative with weak chart structure is not enough. We look for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Trend direction", "Support and resistance", "Breakout zones", "Retest areas", "Volume behavior", "Liquidity zones", "Market structure shifts", "Higher timeframe context"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted italic">Yaga Calls studies trend structure and liquidity zones on multiple timeframes to ensure technical validation.</p>
            </div>

            {/* Step 3 */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Step 3: Liquidity and Market Condition</h2>
              <p className="text-text-muted leading-relaxed">
                Crypto signals should not be judged in isolation. A setup can look good on one chart but fail if the broader market condition is poor. Yaga Calls considers:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["BTC & ETH direction", "Market volatility", "Liquidity conditions", "Risk sentiment", "Altcoin strength", "Sector rotation", "Dominance changes", "Exchange liquidity"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm font-bold uppercase tracking-tight text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                <p className="text-sm font-black uppercase tracking-widest text-primary">A good setup at the wrong market moment can still become a bad trade.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Step 4: Entry Zone Planning</h2>
              <p className="text-text-muted leading-relaxed">
                A signal is not serious if it only says "buy." We focus on entry zones because price matters. A coin can be a good idea at one level and a bad idea after it has already moved too far. An entry zone helps traders understand:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Where the setup becomes interesting",
                  "Where risk can be managed",
                  "Whether the move is already late",
                  "Whether the trade still has room to work"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted italic font-bold">A structured signal should say "Watch this area for confirmation," not "Buy now or miss out."</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-deep">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Step 5: Invalidation — Where the Idea Becomes Wrong</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                Invalidation is one of the most important parts of a serious trading setup. A signal without invalidation leaves traders guessing.
              </p>
              <div className="space-y-4">
                {[
                  "What price level breaks the setup?",
                  "What structure failure changes the thesis?",
                  "When should the trader reassess?",
                  "Where does the risk become unacceptable?"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text">
                    <span className="text-primary font-black">!</span> {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-primary font-black uppercase tracking-widest italic">A serious signal does not only explain upside. It explains where the idea fails.</p>
            </div>
            <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-[#0a0a0a]">
              <Image 
                src="/signal-anatomy.webp" 
                alt="Anatomy of a Yaga Calls crypto signal with narrative entry target invalidation and risk note" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Step 6: Target Planning</h2>
              <p className="text-text-muted leading-relaxed">
                Targets help traders plan instead of reacting emotionally. A target is not a guarantee. It is a structured area where the setup may be reviewed, partially closed, or managed depending on market behavior. Targets help traders understand:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Where the first reaction area may be",
                  "Where partial profit-taking may make sense",
                  "Where resistance or liquidity may appear",
                  "Whether upside still justifies the risk"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Step 7: Risk Management</h2>
              <p className="text-text-muted leading-relaxed">
                Most traders focus on how much they can make. Serious traders first ask how much they can lose. The point of risk management is not to avoid every loss, but to survive long enough to keep making disciplined decisions. Risk management includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Position sizing", "Stop-loss context", "Volatility awareness", "Invalidation planning", "Filtering", "Overexposure", "Survival first", "Discipline"].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                <p className="text-sm font-black uppercase tracking-widest text-primary">The first job of a serious trader is survival. Profit comes after discipline.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Step 8: Telegram Delivery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-text-muted leading-relaxed">
                  Crypto markets move quickly, so delivery matters. Yaga Calls uses Telegram because it is fast and mobile-friendly, but we avoid the noise of typical pump channels.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  A structured Telegram signal note is easy to scan and includes the asset, setup type, entry zone, targets, invalidation, risk note, and market narrative.
                </p>
                <div className="flex gap-4 pt-4">
                  <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="method_step8_free">Join Free Telegram</CTAButton>
                </div>
              </div>
              <div className="p-8 bg-background border border-line rounded-[32px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-line pb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-primary">New Setup Note</span>
                    <span className="text-[10px] text-text-muted">Just Now</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-text uppercase">#BTC / USDT (Long)</p>
                    <p className="text-xs text-text-muted leading-relaxed">Narrative: ETF Inflow + Resistance Retest</p>
                    <p className="text-xs text-text-muted">Entry: 64,200 - 64,800</p>
                    <p className="text-xs text-text-muted">Targets: 68,000 / 72,000</p>
                    <p className="text-xs text-text-muted text-primary">Invalidation: 62,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <MethodComparison />

      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SignalCheck />
          </div>
        </Container>
      </Section>

      {/* Section 13 — What We Avoid */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">What Yaga Calls Avoids</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Blind Pump Calls", desc: "No chasing coins after aggressive moves." },
                { title: "No-Stop-Loss Setups", desc: "A setup without invalidation is incomplete." },
                { title: "Emotional FOMO Trades", desc: "Patience over forced trades when data doesn't align." },
                { title: "Guaranteed-Profit Language", desc: "No fake promises. Trading involves real risk." },
                { title: "Unclear Targets", desc: "No guessing on exits. Targets mapped upfront." },
                { title: "Cheap Lifetime VIP", desc: "Positioned for quality, not mass-market noise." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-background rounded-2xl border border-line">
                  <X className="text-danger w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-sm">{item.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 16 & 17 — Who it's for */}
      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Who This Method Is For</h2>
              <div className="space-y-4">
                {[
                  "Serious traders who want structured crypto signal notes",
                  "Traders who prefer explanation over hype",
                  "Traders who care about entry, target, and invalidation",
                  "Traders who follow market narratives and sector rotations",
                  "Traders who want proof and process, not blind claims"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Who Should Avoid Yaga Calls</h2>
              <div className="space-y-4">
                {[
                  "Users looking for guaranteed monthly profit",
                  "Users seeking no-loss signals or gambling-style calls",
                  "Users looking for cheap lifetime VIP access",
                  "Users who want someone else to take responsibility for trades",
                  "Users wanting 'Buy now or miss out' pressure"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center text-sm font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-danger/40" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 18 — Final CTA */}
      <Section className="bg-surface-deep border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">See the Method in Action</h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                The best way to judge a signal method is by watching how the provider communicates, how setups are explained, and how risk is treated.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="method_final_free">
                Join Free Telegram
              </CTAButton>
              <CTAButton href="/proof" variant="secondary" trackingLabel="method_final_proof">
                View Selected Proof Examples
              </CTAButton>
            </div>
            <div className="space-y-4">
              <Link href="/pricing" className="text-sm font-black uppercase tracking-widest text-primary hover:underline">
                Compare Premium Crypto Signal Plans
              </Link>
              <div className="flex flex-col gap-2">
                <Link href="/verified-crypto-signal-provider" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Verified crypto signal provider checklist
                </Link>
                <Link href="/crypto-signals-with-risk-management" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Crypto signals with risk management
                </Link>
                <Link href="/narrative-trading-crypto-signals" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Narrative trading crypto signals
                </Link>
                <Link href="/crypto-signal-provider-comparison" className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                  Compare crypto signal providers
                </Link>
              </div>
              <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto">
                Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
