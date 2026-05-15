import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
import SignalCheck from "@/components/shared/SignalCheck";
import Link from "next/link";
import { 
  CheckCircle2, 
  ShieldAlert, 
  BarChart, 
  Info, 
  ArrowRight, 
  X, 
  Zap, 
  Layout, 
  Globe,
  AlertTriangle,
  Search,
  Target,
  Navigation,
  FileText,
  Clock,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "What Are Crypto Signals? Entries, Targets & Stop-Loss Guide | Yaga Calls",
  description: "Learn what crypto signals are, how entries, targets, stop-losses and invalidation work, and how to evaluate signal groups without falling for hype.",
  alternates: {
    canonical: "https://www.yagacalls.com/what-are-crypto-signals",
  },
  openGraph: {
    title: "What Are Crypto Signals? A Serious Beginner’s Guide",
    description: "Understand crypto signals before risking money. Learn entries, targets, stop-losses, invalidation, red flags, and the Yaga Calls signal structure.",
    type: "article",
    url: "https://www.yagacalls.com/what-are-crypto-signals",
    siteName: "Yaga Calls",
  }
};

export default function WhatAreCryptoSignalsPage() {
  const faqs = [
    {
      question: "What are crypto signals?",
      answer: "Crypto signals are trading setup notes that suggest a possible opportunity in a cryptocurrency market. A serious signal usually includes the asset, market reason, entry zone, target levels, invalidation or stop-loss context, and risk awareness."
    },
    {
      question: "How do crypto signals work?",
      answer: "Crypto signals work by giving traders a structured market idea. The signal may explain what asset is being watched, why the setup matters, where the entry zone is, where targets may be reviewed, and where the idea becomes invalid."
    },
    {
      question: "Are crypto signals profitable?",
      answer: "Crypto signals can help traders understand market setups, but they do not guarantee profit. Crypto markets are volatile, and every setup can fail. Risk management and personal judgment remain essential."
    },
    {
      question: "What should a good crypto signal include?",
      answer: "A good crypto signal should include the asset or pair, setup direction, market reason, entry zone, target levels, stop-loss or invalidation point, risk note, and follow-up logic when market conditions change."
    },
    {
      question: "What is an entry zone in crypto signals?",
      answer: "An entry zone is the price area where the setup may make sense. It helps traders avoid chasing late moves and gives them a clearer area to judge risk."
    },
    {
      question: "What is a target in crypto signals?",
      answer: "A target is a planned review area where the trader may consider taking profit, managing the position, or reassessing the setup. Targets are not guarantees."
    },
    {
      question: "What is invalidation in a crypto signal?",
      answer: "Invalidation is the point where the original trade idea becomes wrong or needs reassessment. It helps traders avoid holding emotionally when the setup no longer makes sense."
    },
    {
      question: "Are Telegram crypto signals safe?",
      answer: "Telegram crypto signals are only as reliable as the provider’s process. A serious Telegram group should avoid fake urgency, explain risk, provide structure, and never promise guaranteed profits."
    },
    {
      question: "Should beginners use crypto signals?",
      answer: "Beginners can learn from structured crypto signals, but they should first understand basic risk, stop-loss logic, position sizing, and market volatility. Beginners should observe before paying or acting."
    },
    {
      question: "How can I evaluate Yaga Calls before premium?",
      answer: "You can join the free Telegram group, read the Yaga Calls method, review selected proof examples, and compare premium plans only after understanding the structure and risk framing."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/what-are-crypto-signals#webpage",
        "url": "https://www.yagacalls.com/what-are-crypto-signals",
        "name": "What Are Crypto Signals? A Complete Guide to Entries, Targets and Stop-Losses",
        "description": "Learn what crypto signals are, how entries, targets, stop-losses and invalidation work, and how to evaluate signal groups without falling for hype.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/what-are-crypto-signals#article",
        "headline": "What Are Crypto Signals? A Complete Guide",
        "description": "Learn what crypto signals are, how entries, targets, stop-losses and invalidation work, and how to evaluate signal groups without falling for hype.",
        "author": {
          "@type": "Organization",
          "name": "Yaga Calls"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Yaga Calls",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.yagacalls.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@id": "https://www.yagacalls.com/what-are-crypto-signals#webpage"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/what-are-crypto-signals#breadcrumb",
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
            "name": "Guides",
            "item": "https://www.yagacalls.com/academy"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What Are Crypto Signals?",
            "item": "https://www.yagacalls.com/what-are-crypto-signals"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/what-are-crypto-signals#faq",
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
    <main className="bg-background text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* SECTION 0 — HERO */}
      <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-surface-deep overflow-hidden relative">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left side: Copy */}
            <div className="space-y-8 relative z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Crypto Signal Guide
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                  What Are <br />
                  <span className="text-primary">Crypto Signals?</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  Crypto signals are trading setup notes that help traders evaluate possible market opportunities.
                </p>
                <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A serious signal should explain the asset, market reason, entry zone, target levels, invalidation point, and risk context before a trader acts.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed border-l-2 border-primary/30 pl-4 max-w-xl mx-auto lg:mx-0">
                  A signal should not ask for blind trust. It should give the trader enough structure to understand the idea, the risk, and the point where the setup becomes wrong.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_what_are_signals_free"
                  className="px-8 py-4 text-sm"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_what_are_signals_method"
                  className="px-8 py-4 text-sm"
                >
                  Read the Yaga Calls Method
                </CTAButton>
              </div>

              <div className="pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 max-w-md mx-auto lg:mx-0">
                  Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
                </p>
              </div>
            </div>

            {/* Right side: Signal Anatomy Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative">
                <div className="space-y-8">
                  <div className="flex justify-between items-start border-b border-line pb-6">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-text-muted mb-1">Example Signal Structure</h3>
                      <div className="text-3xl font-black text-text tracking-tighter">#BTC / USDT</div>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border border-primary/20">
                      Long / Spot
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                        <Search size={12} className="text-primary" /> Market Reason
                      </div>
                      <p className="text-sm font-bold text-text uppercase tracking-tight">
                        Liquidity retest + broader market strength
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                          <Navigation size={12} className="text-primary" /> Entry Zone
                        </div>
                        <p className="text-sm font-bold text-text uppercase tracking-tight">
                          64,200 – 64,800
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                          <Target size={12} className="text-primary" /> Targets
                        </div>
                        <p className="text-sm font-bold text-text uppercase tracking-tight">
                          68,000 / 72,000
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                          <X size={12} className="text-danger" /> Invalidation
                        </div>
                        <p className="text-sm font-bold text-text uppercase tracking-tight">
                          62,500
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                          <AlertTriangle size={12} className="text-primary" /> Risk Note
                        </div>
                        <p className="text-xs text-text-muted font-bold uppercase tracking-tight leading-tight">
                          Size should match risk limits.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-line text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted/60 italic">
                      Example only. Not financial advice.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — Direct Answer Block */}
      <Section className="bg-background border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-12 md:p-16 bg-surface-deep border border-primary/20 rounded-[48px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 px-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">What Are Crypto Signals?</h2>
                </div>
                
                <div className="prose prose-invert prose-xl max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Crypto signals are trading setup notes that suggest a possible market opportunity in a cryptocurrency pair. A signal may include the asset, direction, entry zone, target levels, stop-loss or invalidation area, market reason, and risk context.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A serious crypto signal does not simply say “buy now.” It gives the trader enough information to understand why the setup exists, where the idea makes sense, and where the trade thesis becomes wrong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Why Crypto Signals Exist */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Why Do Traders Use <br /><span className="text-primary">Crypto Signals?</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                Crypto markets move fast. Signal notes help traders receive market ideas without manually scanning every chart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Speed",
                  desc: "Crypto moves quickly. Telegram-based signal notes help traders receive market ideas without manually scanning every chart.",
                  icon: <Zap className="text-primary" />
                },
                {
                  title: "Structure",
                  desc: "A proper signal gives traders a framework: entry, target, invalidation, and risk context.",
                  icon: <Layout className="text-primary" />
                },
                {
                  title: "Market Context",
                  desc: "Good signals explain why the setup matters instead of only naming a coin.",
                  icon: <Globe className="text-primary" />
                }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black uppercase tracking-tighter">{card.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-block p-6 border-y border-primary/20">
                <p className="text-xl md:text-2xl font-black italic uppercase tracking-tight">
                  "A signal can point to an opportunity, but it cannot remove risk."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — The Anatomy of a Serious Crypto Signal */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Anatomy of a <br /><span className="text-primary">Serious Crypto Signal</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                If a signal does not explain where the idea becomes wrong, it is incomplete. Here is what you should look for in every setup note.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-3xl bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Signal Element</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">What It Means</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { e: "Asset / Pair", m: "Shows exactly which market the setup refers to.", w: "Ensures focus on the correct pair." },
                    { e: "Setup Direction", m: "Clarifies whether the idea is long, short, spot, or futures.", w: "Defines the fundamental approach." },
                    { e: "Market Reason", m: "Explains the catalyst, narrative, or technical structure.", w: "Builds confidence through logic." },
                    { e: "Entry Zone", m: "The price area where the setup makes sense.", w: "Prevents emotional chasing." },
                    { e: "Target Levels", m: "Areas where the setup may be reviewed or closed.", w: "Maps out the exit strategy." },
                    { e: "Stop-Loss / Invalidation", m: "Defines the point where the original idea is wrong.", w: "Protects capital from deep losses." },
                    { e: "Risk Note", m: "Reminds traders about position sizing and downside.", w: "Ensures account survival." },
                    { e: "Follow-Up Logic", m: "Explains updates if conditions change.", w: "Manages the trade actively." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-sm font-black text-text uppercase tracking-tight border-r border-line/50">{row.e}</td>
                      <td className="px-8 py-6 text-sm text-text-muted">{row.m}</td>
                      <td className="px-8 py-6 text-sm font-bold text-text group-hover:text-primary transition-colors">{row.w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center">
              <Link href="/method" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-primary hover:tracking-[0.3em] transition-all">
                Read the Yaga Calls Method <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Entry, Target, Stop-Loss and Invalidation Explained */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center lg:text-left">
              Entries, Targets, <br />
              <span className="text-primary">Stop-Losses & Invalidation</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                    <Navigation className="text-primary" /> Entry Zone
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    An entry zone is the price area where the setup starts to make sense. It is not always a single price. A zone helps traders avoid chasing a move too late and gives them a cleaner area to judge risk.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                    <Target className="text-primary" /> Target Levels
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    Targets are planned review areas. They are not guarantees. A target may be used for partial profit-taking, trade management, or reassessing whether the setup still has room to continue.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                    <Briefcase className="text-primary" /> Stop-Loss
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    A stop-loss is an execution tool designed to limit downside if the trade moves against the trader. It does not guarantee perfect protection because crypto markets can move quickly, slip, or gap in volatile conditions.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                    <X className="text-danger" /> Invalidation
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    Invalidation is the condition where the original trade idea becomes wrong. This may be a price level, a market structure break, or a change in the reason behind the setup.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-deep p-10 md:p-16 rounded-[48px] border border-line space-y-10">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Stop-Loss vs Invalidation</h3>
                <p className="text-text-muted uppercase text-xs font-black tracking-widest">The Critical Difference</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                <div className="p-8 bg-background border border-line rounded-3xl space-y-4">
                  <h4 className="text-lg font-black uppercase tracking-tight text-primary">Stop-Loss</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Execution level used to control downside and limit risk per trade.
                  </p>
                </div>
                <div className="p-8 bg-background border border-line rounded-3xl space-y-4">
                  <h4 className="text-lg font-black uppercase tracking-tight text-text">Invalidation</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Thesis failure point where the trading idea should be reassessed or discarded.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                See how risk-managed crypto signals work →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Good Crypto Signals vs Pump Calls */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Good Crypto Signals <br />vs <span className="text-primary">Pump Calls</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                The difference is not only in the signal. The difference is in the thinking behind the signal.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Pump-Style Group</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Serious Standard</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Yaga Calls Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Main message", p: "“Buy now”", s: "Explains setup", y: "Narrative + Context" },
                    { f: "Market reason", p: "Vague or none", s: "Provides context", y: "Technical + Liquidity" },
                    { f: "Entry", p: "Late or unclear", s: "Defines zone", y: "Entry zone planning" },
                    { f: "Targets", p: "Exaggerated", s: "Maps review areas", y: "Target mapping" },
                    { f: "Risk", p: "Risk ignored", s: "Includes downside", y: "Invalidation logic" },
                    { f: "Language", p: "Hype and urgency", s: "Calm and structured", y: "Risk-aware notes" },
                    { f: "User pressure", p: "Pushes payment", s: "Allows evaluation", y: "Educational framing" },
                    { f: "Long-term value", p: "Creates dependency", s: "Builds judgment", y: "Method-led thinking" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-xs font-black text-text-muted uppercase tracking-widest border-r border-line/50">{row.f}</td>
                      <td className="px-8 py-6 text-sm text-text-muted/60 line-through decoration-danger/30">{row.p}</td>
                      <td className="px-8 py-6 text-sm text-text-muted">{row.s}</td>
                      <td className="px-8 py-6 text-sm font-bold text-text group-hover:text-primary transition-colors">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Review selected proof examples
              </Link>
              <Link href="/verified-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Check the verified provider standard
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Are Crypto Signals Safe? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Are Crypto Signals Safe?</h2>
              <div className="prose prose-invert prose-xl max-w-none">
                <p className="text-text font-bold leading-relaxed">
                  No crypto signal is completely safe. Crypto markets are volatile, and even well-structured setups can fail.
                </p>
                <p className="text-text-muted leading-relaxed">
                  A good signal can help traders understand a market idea, but it cannot guarantee profit or remove personal responsibility. You must account for volatility, execution risk, and potential thesis failure in every trade.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-surface-deep border border-line rounded-[32px] space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-primary">Common Risks</h3>
                <ul className="space-y-4">
                  {[
                    "Extreme market volatility",
                    "Late entries (chasing the move)",
                    "Over-leverage on setups",
                    "Fake groups and scam alerts",
                    "Blindly following screenshots"
                  ].map((risk, i) => (
                    <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                      <AlertTriangle size={14} className="text-primary mt-0.5 flex-shrink-0" /> {risk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-primary/10 border border-primary/20 rounded-[32px] flex items-center justify-center text-center">
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight">
                    The serious question is not <br />
                    <span className="text-primary">“Can this signal win?”</span>
                  </p>
                  <div className="h-px bg-primary/20 w-16 mx-auto" />
                  <p className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight">
                    The serious question is <br />
                    <span className="text-text">“Do I understand the risk before acting?”</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the crypto risk management guide →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — How Beginners Should Use Crypto Signals */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">How Should Beginners <br /><span className="text-primary">Use Crypto Signals?</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                Start by observing, not buying immediately. Learn the structure of the signal before risking your capital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter border-l-4 border-primary pl-6">The Beginner Checklist</h3>
                <ul className="space-y-6">
                  {[
                    "Observe the group's communication for 1-2 weeks first.",
                    "Learn what entry, target, and invalidation mean in practice.",
                    "Avoid leverage until your risk management is solid.",
                    "Do not risk money needed for personal expenses.",
                    "Compare signals with the broader market condition.",
                    "Track outcomes honestly in a trade journal.",
                    "Never treat any provider as a guarantee."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black text-primary border border-primary/20">
                        {i + 1}
                      </div>
                      <p className="text-sm font-bold text-text-muted leading-tight uppercase tracking-tight">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <SignalCheck />
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/academy" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Learn crypto trading basics
              </Link>
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Understand Telegram signal delivery
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Free vs Paid Crypto Signals */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-text">Free vs Paid <br /><span className="text-primary">Crypto Signals</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                A trader should never pay for a signal group before understanding how the provider thinks.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Feature</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Free Signals</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Paid Signals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Purpose", fr: "Observation", p: "Structured access" },
                    { f: "Depth", fr: "Basic market notes", p: "Deeper setup context" },
                    { f: "Frequency", fr: "Lower frequency", p: "Higher frequency" },
                    { f: "Follow-up", fr: "Limited", p: "Direct follow-up" },
                    { f: "Risk context", fr: "May vary", p: "Should include risk framing" },
                    { f: "Best use", fr: "Evaluating quality", p: "Active trading support" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-sm font-black text-text-muted uppercase tracking-tight border-r border-line/50">{row.f}</td>
                      <td className="px-8 py-6 text-sm text-text-muted italic">{row.fr}</td>
                      <td className="px-8 py-6 text-sm font-bold text-text group-hover:text-primary transition-colors">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Compare Yaga Calls premium plans
              </Link>
              <Link href="/free-vs-paid-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Read the free vs paid guide
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — How Yaga Calls Structures Crypto Signals */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">How Yaga Calls <br /><span className="text-primary">Structures Signals</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                Built around structured setup notes, not random pump alerts. Our process focuses on logic and risk awareness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Narrative Scan", d: "Why is attention moving toward this asset or sector?", i: <Globe className="text-primary" /> },
                { t: "Technical Structure", d: "Does the chart and market structure support the idea?", i: <BarChart className="text-primary" /> },
                { t: "Entry Zone", d: "Where does the setup make sense without chasing?", i: <Navigation className="text-primary" /> },
                { t: "Target Planning", d: "Where should the setup be reviewed or partially closed?", i: <Target className="text-primary" /> },
                { t: "Invalidation", d: "Where does the original idea become wrong or failed?", i: <X className="text-danger" /> },
                { t: "Risk Context", d: "What can go wrong and how should the trader think about downside?", i: <ShieldAlert className="text-primary" /> },
                { t: "Telegram Delivery", d: "How is the setup communicated quickly and clearly?", i: <Zap className="text-primary" /> },
                { t: "Market Logic", d: "The 'Why' behind every setup we share.", i: <FileText className="text-primary" /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-background border border-line rounded-3xl space-y-4 hover:border-primary/40 transition-colors flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      {card.i}
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-tight text-text leading-tight">{card.t}</h3>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton 
                href="https://t.me/+JFf8kBf01mg3OTg1" 
                target="_blank"
                trackingLabel="structure_free"
                className="px-8"
              >
                Join Free Telegram
              </CTAButton>
              <CTAButton 
                href="/method" 
                variant="secondary"
                trackingLabel="structure_method"
                className="px-8"
              >
                Read the Yaga Calls Method
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Common Crypto Signal Mistakes */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
              Common Signal <br /><span className="text-primary">Mistakes</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { t: "Chasing late entries", d: "Entering after price has moved 5-10% past the zone, ruining the risk/reward profile." },
                { t: "Ignoring invalidation", d: "Holding onto a losing position emotionally after the setup has been proven wrong." },
                { t: "Using too much leverage", d: "Exposing too much capital on a single signal, leading to quick liquidation risk." },
                { t: "Treating targets as guarantees", d: "Assuming every target will be hit instead of managing the trade as it develops." },
                { t: "Joining fake Telegram groups", d: "Falling for pump groups that use fake screenshots and high-pressure sales." },
                { t: "Paying before observing", d: "Buying premium access without first watching how the provider handles market volatility." },
                { t: "Following screenshots", d: "Chasing results shown in screenshots instead of understanding the provider's actual process." },
                { t: "Risking too much", d: "Treating any single signal as a 'sure thing' and risking emergency or needed capital." }
              ].map((mistake, i) => (
                <div key={i} className="flex gap-6 p-8 border-l-2 border-line hover:border-primary transition-colors group">
                  <div className="text-2xl font-black text-text-muted/20 group-hover:text-primary/40 transition-colors">0{i + 1}</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black uppercase tracking-tight text-text">{mistake.t}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{mistake.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-xl font-black italic uppercase tracking-tight text-text">
                "Bad signal behavior usually starts before the trade. <br />
                <span className="text-primary">It starts when the trader stops asking questions.</span>"
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Who Crypto Signals Are For and Not For */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">Who Should Use <br /><span className="text-primary">Crypto Signals?</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 bg-background border border-line rounded-[40px] space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Signals May Help:</h3>
                  <div className="h-1 w-12 bg-primary" />
                </div>
                <ul className="space-y-5">
                  {[
                    "Traders who want structured market ideas",
                    "Beginners trying to understand setup anatomy",
                    "Busy traders who cannot scan every market",
                    "Users who want to observe a provider’s process",
                    "Traders who already understand basic risk"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-background border border-line rounded-[40px] space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-text-muted">Signals Are Not For:</h3>
                  <div className="h-1 w-12 bg-text-muted/30" />
                </div>
                <ul className="space-y-5">
                  {[
                    "People looking for guaranteed income",
                    "Users expecting no-loss trading",
                    "Traders who blindly copy every alert",
                    "People risking emergency money",
                    "Users who want gambling-style pumps"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted/60">
                      <ShieldAlert size={16} className="text-danger flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-text-muted">
                Signals are tools. They are not responsibility transfers.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Final CTA */}
      <Section className="bg-background py-32">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Start by Understanding <br />
              <span className="text-primary">Before Following.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              The best way to evaluate any crypto signal provider is to observe how they communicate before paying. Look at the method, risk language, and how they handle uncertainty.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_signals_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_signals_method"
              className="px-10 py-5 text-base"
            >
              Read the Method
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Review Proof Examples
              </Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Compare Premium Plans
              </Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Contact Support
              </Link>
            </div>
            <p className="mt-10 text-[10px] text-text-muted/60 italic uppercase tracking-widest leading-relaxed max-w-md mx-auto">
              Yaga Calls provides educational crypto market analysis and signal ideas only. Crypto trading involves risk. Past performance does not guarantee future results. Every trader is responsible for their own decisions.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
