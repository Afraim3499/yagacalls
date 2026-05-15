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
  Zap, 
  Layout, 
  Globe,
  AlertTriangle,
  ArrowRight,
  X,
  FileText,
  MousePointer2,
  Lock,
  Eye,
  ShieldCheck,
  TrendingUp,
  MessageSquare
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Crypto Signal Groups Compared | Free, Paid & Telegram",
  description: "Compare free, paid, Telegram, pump-style and risk-managed crypto signal groups. Learn what to avoid and how to evaluate signal groups safely.",
  alternates: {
    canonical: "https://www.yagacalls.com/best-crypto-signal-groups-compared",
  },
  openGraph: {
    title: "Best Crypto Signal Groups Compared",
    description: "A serious comparison of free, paid, Telegram, pump-style, and risk-managed crypto signal groups — with red flags, evaluation criteria, and safer decision rules.",
    type: "article",
    url: "https://www.yagacalls.com/best-crypto-signal-groups-compared",
    siteName: "Yaga Calls",
  }
};

export default function BestCryptoSignalGroupsComparedPage() {
  const faqs = [
    {
      question: "What are crypto signal groups?",
      answer: "Crypto signal groups are communities or channels where market setup ideas are shared with traders. A signal group may post assets, entry zones, targets, stop-loss or invalidation levels, and market context. Quality varies heavily between groups."
    },
    {
      question: "What is the best type of crypto signal group?",
      answer: "The best type of crypto signal group is one that explains the setup clearly, includes risk context, avoids guaranteed-profit claims, and allows users to evaluate the provider’s method before paying."
    },
    {
      question: "Are free crypto signal groups useful?",
      answer: "Free crypto signal groups can be useful for observing a provider’s communication style and signal quality. They are usually limited, but they can help users decide whether a provider is worth trusting."
    },
    {
      question: "Are paid crypto signal groups better than free groups?",
      answer: "Paid crypto signal groups may offer more frequent updates or deeper analysis, but payment does not guarantee quality or profit. A trader should evaluate the provider’s method, proof context, and risk language before paying."
    },
    {
      question: "Are Telegram crypto signal groups safe?",
      answer: "Telegram crypto signal groups can be useful for fast delivery, but users must be careful of fake groups, impersonators, pump channels, and signals without risk context. Always use official links and avoid guaranteed-profit claims."
    },
    {
      question: "What is a pump signal group?",
      answer: "A pump signal group usually uses urgency and crowd pressure to push users into buying an asset quickly. These groups often lack entry discipline, invalidation, and proper risk management."
    },
    {
      question: "What should a serious crypto signal group include?",
      answer: "A serious crypto signal group should include market reason, entry zone, target levels, invalidation point, risk note, and follow-up logic. It should also avoid hype and guaranteed-profit language."
    },
    {
      question: "How does Yaga Calls compare to typical crypto signal groups?",
      answer: "Yaga Calls is positioned around structured crypto signal notes, narrative research, technical context, entry zones, target mapping, invalidation, risk awareness, and Telegram-first delivery."
    },
    {
      question: "Should beginners join crypto signal groups?",
      answer: "Beginners can learn from structured crypto signals, but they should first understand basic risk, entry zones, stop-losses, and invalidation. They should observe before paying or acting."
    },
    {
      question: "How can I evaluate Yaga Calls before premium?",
      answer: "You can join the free Telegram group, read the Yaga Calls method, review selected proof examples, and compare premium plans before deciding whether paid access fits your trading approach."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/best-crypto-signal-groups-compared#webpage",
        "url": "https://www.yagacalls.com/best-crypto-signal-groups-compared",
        "name": "Best Crypto Signal Groups Compared: Free, Paid, Telegram and Risk-Managed Groups",
        "description": "Compare free, paid, Telegram, pump-style and risk-managed crypto signal groups. Learn what to avoid and how to evaluate signal groups safely.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/best-crypto-signal-groups-compared#article",
        "headline": "Best Crypto Signal Groups Compared",
        "description": "A serious comparison of free, paid, Telegram, pump-style, and risk-managed crypto signal groups.",
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
          "@id": "https://www.yagacalls.com/best-crypto-signal-groups-compared#webpage"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/best-crypto-signal-groups-compared#breadcrumb",
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
            "name": "Best Crypto Signal Groups Compared",
            "item": "https://www.yagacalls.com/best-crypto-signal-groups-compared"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/best-crypto-signal-groups-compared#faq",
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 relative z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Crypto Signal Group Comparison
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  Best Crypto Signal <br />
                  <span className="text-primary">Groups Compared</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  Not every crypto signal group is built the same.
                </p>
                <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Some groups chase attention with hype, some share basic free alerts, and serious groups explain entries, targets, invalidation, market context, and risk before traders act.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed border-l-2 border-primary/30 pl-4 max-w-xl mx-auto lg:mx-0 font-medium">
                  This guide compares the main types of crypto signal groups so traders can understand what to avoid, what to observe, and what a serious signal group should include.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_compare_free"
                  className="px-8 py-4 text-sm"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_compare_method"
                  className="px-8 py-4 text-sm"
                >
                  Read the Yaga Calls Method
                </CTAButton>
              </div>

              <div className="pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 max-w-md mx-auto lg:mx-0">
                  Educational market analysis only. Crypto trading involves risk. No signal group can guarantee profit.
                </p>
              </div>
            </div>

            {/* Right side: Signal Group Snapshot Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative">
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase tracking-widest text-text border-b border-line pb-4">
                    Crypto Signal Group Snapshot
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { type: "Free Group", desc: "Good for observation, usually limited depth.", icon: <Eye size={16} className="text-primary" /> },
                      { type: "Paid Group", desc: "May offer more frequent updates, but quality varies.", icon: <Lock size={16} className="text-text-muted" /> },
                      { type: "Pump Group", desc: "Often uses urgency, weak risk control, and hype.", icon: <AlertTriangle size={16} className="text-danger" /> },
                      { type: "Risk-Managed Group", desc: "Explains entry, target, invalidation, and downside.", icon: <ShieldCheck size={16} className="text-primary" /> },
                      { type: "Yaga Calls", desc: "Research-led, Telegram-first, risk-aware setup notes.", icon: <TrendingUp size={16} className="text-primary" />, highlight: true }
                    ].map((row, i) => (
                      <div key={i} className={`flex gap-4 items-start p-3 rounded-2xl border transition-colors ${row.highlight ? 'bg-primary/5 border-primary/20' : 'border-transparent'}`}>
                        <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${row.highlight ? 'bg-primary text-background' : 'bg-surface-deep text-text-muted'}`}>
                          {row.icon}
                        </div>
                        <div>
                          <h4 className={`text-xs font-black uppercase tracking-tight ${row.highlight ? 'text-primary' : 'text-text'}`}>{row.type}</h4>
                          <p className="text-[11px] text-text-muted leading-tight font-medium">{row.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-line text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted/60 italic">
                      Compare the process before trusting the signal.
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
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 px-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is the Best Type of Crypto Signal Group?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    The best crypto signal group is not the loudest group or the group promising the highest profit. A serious crypto signal group should explain the asset, market reason, entry zone, target levels, invalidation point, and risk context. 
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Free groups are useful for observation, paid groups may offer more depth, and Telegram groups can be useful for fast delivery. But any group that uses hype, fake urgency, or guaranteed-profit claims should be treated as a red flag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Why Crypto Signal Groups Are Not All the Same */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Why Crypto Signal Groups <br /><span className="text-primary">Are Not All the Same</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                A signal group should be judged by its process, not by how loudly it advertises wins.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Speed",
                  desc: "Telegram groups can deliver fast updates, but speed without structure can lead to emotional decisions.",
                  icon: <Zap className="text-primary" />
                },
                {
                  title: "Structure",
                  desc: "A serious group explains the setup instead of only shouting the coin name.",
                  icon: <Layout className="text-primary" />
                },
                {
                  title: "Risk Control",
                  desc: "A useful signal group explains where the idea becomes wrong.",
                  icon: <ShieldAlert className="text-primary" />
                },
                {
                  title: "Transparency",
                  desc: "Proof should be educational context, not a promise of future profit.",
                  icon: <Globe className="text-primary" />
                }
              ].map((card, i) => (
                <div key={i} className="p-10 bg-surface-deep border border-line rounded-[32px] space-y-6 hover:border-primary/40 transition-all flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {card.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black uppercase tracking-tighter">{card.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed font-medium">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/what-are-crypto-signals" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:tracking-[0.4em] transition-all justify-center">
                Learn what crypto signals are <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — Crypto Signal Group Types Compared */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Types of Crypto Signal <br /><span className="text-primary">Groups Compared</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                The goal is not to find the most exciting group. The goal is to find the group with the clearest thinking.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Group Type</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">How It Works</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Best For</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Main Risk</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary text-center">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { t: "Free Groups", h: "Shares limited market ideas or public alerts.", b: "Observing quality before paying.", r: "Limited depth, delayed context.", s: "Medium", color: "text-text" },
                    { t: "Paid Groups", h: "Deeper or more frequent signal access.", b: "Users who verify the method first.", r: "Payment doesn't guarantee quality.", s: "Varies", color: "text-text" },
                    { t: "Telegram Groups", h: "Uses Telegram for fast mobile delivery.", b: "Traders needing quick alerts.", r: "Noise without proper structure.", s: "Med-High", color: "text-text" },
                    { t: "Pump Groups", h: "Uses urgency to push specific coins.", b: "Not recommended for serious traders.", r: "Manipulation, late entries.", s: "Low", color: "text-danger" },
                    { t: "Research-Led", h: "Signals connected to narrative & tech.", b: "Understanding the 'Why' behind setups.", r: "Cannot remove market risk.", s: "High", color: "text-primary" },
                    { t: "Risk-Managed", h: "Includes entry, targets, and invalidation.", b: "Traders prioritizing survival.", r: "Doesn't guarantee profit.", s: "High", color: "text-primary" },
                    { t: "Yaga Calls", h: "Narrative, technical, and risk context.", b: "Traders wanting structured signal notes.", r: "Trading involves risk of loss.", s: "High", color: "text-primary", bold: true }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className={`px-8 py-6 text-sm font-black uppercase tracking-tight border-r border-line/50 ${row.bold ? 'text-primary' : 'text-text'}`}>{row.t}</td>
                      <td className="px-8 py-6 text-[13px] text-text-muted leading-snug">{row.h}</td>
                      <td className="px-8 py-6 text-[13px] text-text-muted leading-snug font-bold">{row.b}</td>
                      <td className="px-8 py-6 text-[13px] text-text-muted leading-snug">{row.r}</td>
                      <td className={`px-8 py-6 text-xs font-black uppercase tracking-widest text-center ${row.color}`}>{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the Yaga Calls Method
              </Link>
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Understand Telegram signal delivery
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Free Crypto Signal Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Free Crypto <br /><span className="text-primary">Signal Groups</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">
                  Free crypto signal groups are useful for observing how a provider communicates before paying. 
                </p>
                <p className="text-text-muted leading-relaxed">
                  They can help users understand the provider’s market style, risk language, and signal format. But free groups are often limited, inconsistent, or designed mainly to push users toward paid access.
                </p>
              </div>
              <CTAButton 
                href="https://t.me/+JFf8kBf01mg3OTg1" 
                target="_blank"
                trackingLabel="free_group_cta"
                className="w-full sm:w-auto"
              >
                Join Free Telegram
              </CTAButton>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary">Good Use Cases</h3>
                <ul className="space-y-3">
                  {[
                    "Observing communication style",
                    "Checking whether the provider uses risk language",
                    "Seeing if calls are structured or vague",
                    "Learning basic market rhythm",
                    "Testing whether the group feels professional"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 size={14} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-background border border-line rounded-[32px] space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-text-muted">Common Weaknesses</h3>
                <ul className="space-y-3">
                  {[
                    "Limited depth and reasoning",
                    "Fewer updates than premium",
                    "Delayed follow-up context",
                    "Primary use as a sales funnel",
                    "Frequent promotional hype"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X size={14} className="text-danger shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Paid Crypto Signal Groups */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Paid Crypto Signal Groups</h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium italic">
                "Payment should unlock more structure, not more noise."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-background border border-line rounded-[40px] space-y-6">
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <TrendingUp className="text-primary" /> What Paid Groups May Offer
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Higher signal frequency",
                    "Deeper market analysis",
                    "Private real-time updates",
                    "More direct communication",
                    "Structured trade follow-up",
                    "Premium market narrative notes"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-background border border-line rounded-[40px] space-y-6">
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <AlertTriangle className="text-danger" /> Risks to Consider
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Expensive access without quality",
                    "Fake or exaggerated win-rate claims",
                    "Incentive to overtrade",
                    "High-pressure renewal sales",
                    "No clear methodology or logic",
                    "Lack of accountability for losses"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-danger" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Compare Yaga Calls Pricing
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Review Selected Proof Examples
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Telegram Crypto Signal Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Telegram Crypto <br /><span className="text-primary">Signal Groups</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold">
                    Telegram is the gold standard for fast delivery, but speed is only useful when the signal itself is structured.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A Telegram alert that only says “buy now” gives the trader speed without judgment. Yaga Calls uses Telegram for fast delivery, but every setup note follows our structured framework.
                  </p>
                </div>
                <Link href="/premium-telegram-crypto-signals" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:tracking-[0.4em] transition-all">
                  Premium Telegram Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary">Why Telegram?</h4>
                    <div className="flex flex-wrap gap-3">
                      {["Fast Alerts", "Mobile-First", "Real-time Updates", "Community Access"].map((tag, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-background px-3 py-1 rounded-md border border-line">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-danger/10 border border-danger/20 rounded-2xl space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-danger flex items-center gap-2">
                      <ShieldAlert size={12} /> Telegram Safety Rule
                    </h4>
                    <p className="text-xs font-bold text-text-muted leading-relaxed uppercase tracking-tight">
                      Only use official Yaga Calls links from the website. Be careful of impersonators, fake admins, and clone groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Pump Signal Groups */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Pump Signal Groups: <br /><span className="text-danger">Serious Traders Beware</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                A serious signal group explains risk before excitement. Pump groups do the opposite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter border-l-4 border-danger pl-6">Red Flag Checklist</h3>
                <ul className="space-y-4">
                  {[
                    "“Buy now before it explodes” urgency",
                    "Guaranteed profit or 100x coin claims",
                    "Complete absence of stop-loss or invalidation",
                    "No technical or narrative reason provided",
                    "Results shown only via screenshots, no context",
                    "Aggressive pressure to join VIP immediately",
                    "Administrative DMs asking for payment"
                  ].map((flag, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-background rounded-2xl border border-line">
                      <X className="text-danger w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm font-bold uppercase tracking-tight text-text-muted">{flag}</p>
                    </div>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-background border border-line rounded-[40px] space-y-8 h-full flex flex-col justify-center">
                <div className="space-y-4 text-center">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Avoid the Noise</h3>
                  <p className="text-text-muted leading-relaxed uppercase text-xs font-bold tracking-widest">
                    Pump groups are dangerous because they encourage emotional decisions instead of disciplined trading.
                  </p>
                </div>
                <div className="h-px bg-line w-full" />
                <div className="text-center">
                  <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                    See how risk-managed crypto signals work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Risk-Managed Crypto Signal Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Risk-Managed Crypto <br /><span className="text-primary">Signal Groups</span></h2>
              <div className="prose prose-invert prose-xl max-w-none">
                <p className="text-text font-bold leading-relaxed">
                  A risk-managed crypto signal group does not only discuss upside. It explains where the setup becomes invalid, where risk should be controlled, and why the trade idea may fail.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Weak Signal</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Risk-Managed Signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Entry", w: "Buy now", r: "Entry zone provided" },
                    { f: "Target", w: "Moon target", r: "Planned review areas" },
                    { f: "Stop-loss", w: "Missing", r: "Downside control" },
                    { f: "Invalidation", w: "Missing", r: "Thesis failure point" },
                    { f: "Risk Note", w: "Ignored", r: "Included per setup" },
                    { f: "Language", w: "Hype-heavy", r: "Calm and structured" },
                    { f: "Trader Role", w: "Blind follower", r: "Responsible decision-maker" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-sm font-black text-text-muted uppercase tracking-tight border-r border-line/50">{row.f}</td>
                      <td className="px-8 py-6 text-sm text-text-muted/60 italic">{row.w}</td>
                      <td className="px-8 py-6 text-sm font-bold text-text group-hover:text-primary transition-colors">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the risk-managed guide
              </Link>
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                See Yaga's risk-first method
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Research-Led Crypto Signal Groups */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Research-Led Crypto <br /><span className="text-primary">Signal Groups</span></h2>
              <p className="text-xl text-text-muted leading-relaxed font-bold">
                A chart shows price. Research explains why attention may be moving.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Research-led groups connect trading ideas to market narratives, technical structure, liquidity conditions, and broader risk sentiment. They help traders understand why a setup exists before acting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "BTC/ETH Direction",
                "Market Narratives",
                "Sector Rotation",
                "Token Catalysts",
                "Technical Structure",
                "Liquidity Zones",
                "Volatility",
                "Macro Sentiment",
                "Altcoin Strength",
                "Trend Reversals"
              ].map((item, i) => (
                <div key={i} className="p-6 bg-background border border-line rounded-2xl flex items-center justify-center text-center hover:border-primary transition-colors">
                  <p className="text-[10px] font-black uppercase tracking-widest text-text">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the Yaga Calls research-to-signal method →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Yaga Calls Compared Against Common Group Types */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">How Yaga Calls Compares to <br /><span className="text-primary">Common Signal Groups</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                Yaga Calls should be evaluated the same way every group should be: by method, risk language, and communication quality.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[1200px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Criteria</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Typical Free Group</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Typical Pump Group</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Typical Paid VIP</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-primary">Yaga Calls Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { c: "Main Focus", f: "Public Alerts", p: "Urgency", v: "Paid Access", y: "Structured Ideas" },
                    { c: "Signal Format", f: "Short Posts", p: "Buy-Now Calls", v: "Varies", y: "Multi-point setup notes" },
                    { c: "Market Reason", f: "Limited", p: "Vague", v: "Depends", y: "Narrative + Technical" },
                    { c: "Entry Zone", f: "Sometimes Missing", p: "Often Late", v: "May be included", y: "Entry zone planning" },
                    { c: "Invalidation", f: "Often Limited", p: "Missing", v: "Depends", y: "Required Risk Context" },
                    { c: "Risk Language", f: "Inconsistent", p: "Ignored", v: "Varies", y: "Educational & Aware" },
                    { c: "Telegram Use", f: "Public Group", p: "Urgent Alerts", v: "Private Access", y: "Structured Delivery" },
                    { c: "Best Fit", f: "Observation", p: "Not Recommended", v: "Verified Quality", y: "Serious Traders" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-text-muted border-r border-line/50">{row.c}</td>
                      <td className="px-6 py-5 text-[11px] text-text-muted">{row.f}</td>
                      <td className="px-6 py-5 text-[11px] text-danger/60">{row.p}</td>
                      <td className="px-6 py-5 text-[11px] text-text-muted">{row.v}</td>
                      <td className="px-6 py-5 text-[11px] font-black text-text group-hover:text-primary transition-colors">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="comp_free">Join Free Telegram</CTAButton>
              <CTAButton href="/method" variant="secondary" trackingLabel="comp_method">Read the Method</CTAButton>
              <CTAButton href="/proof" variant="secondary" trackingLabel="comp_proof">Review Proof Examples</CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — How to Choose a Crypto Signal Group */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">How to Choose a <br /><span className="text-primary">Crypto Signal Group</span></h2>
              <p className="text-xl text-text-muted leading-relaxed">
                The group that protects your judgment is usually safer than the group that tries to replace it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter border-l-4 border-primary pl-6">Decision Checklist</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Does the group explain why the setup exists?",
                    "Does it give an entry zone?",
                    "Does it explain targets clearly?",
                    "Does it include invalidation?",
                    "Does it discuss risk?",
                    "Does it avoid guaranteed-profit claims?",
                    "Does it show proof responsibly?",
                    "Does it have official links?",
                    "Does it allow observation before payment?",
                    "Does the communication feel calm or pressured?"
                  ].map((q, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-background rounded-xl border border-line">
                      <Search size={16} className="text-primary mt-0.5 shrink-0" />
                      <p className="text-xs font-bold uppercase tracking-tight text-text-muted leading-tight">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8 p-10 bg-background border border-line rounded-[40px]">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Final Evaluation</h3>
                  <p className="text-sm text-text-muted leading-relaxed uppercase tracking-tight font-bold">
                    Do not choose based only on screenshots, profit claims, or aggressive marketing. Compare method, risk language, and transparency first.
                  </p>
                </div>
                {/* TODO: Link this to the future P0 page “How to Choose a Crypto Signal Provider.” */}
                <div className="pt-6 border-t border-line">
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted italic">
                    More guides coming soon on choosing providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Who Should Use Each Type of Group? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">Which Crypto Signal <br /><span className="text-primary">Group Type Fits You?</span></h2>
            
            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Your Profile</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Best Match</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Avoid</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { p: "Beginner learning basics", m: "Free or Educational Group", a: "High-pressure VIP", r: "Learn structure before risking money." },
                    { p: "Busy trader observing markets", m: "Research-led Telegram", a: "Noisy Pump Channels", r: "Context matters more than speed." },
                    { p: "Trader needing fast alerts", m: "Telegram Signal Group", a: "Unverified Clone Groups", r: "Delivery must be fast and safe." },
                    { p: "Trader comparing paid access", m: "Free Group First", a: "Paying before observing", r: "Process should be visible first." },
                    { p: "Trader seeking structure", m: "Risk-Managed Group", a: "Buy-now alert groups", r: "Entries and invalidation matter." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-text-muted border-r border-line/50">{row.p}</td>
                      <td className="px-8 py-6 text-xs font-black uppercase text-primary">{row.m}</td>
                      <td className="px-8 py-6 text-xs font-black uppercase text-danger/60">{row.a}</td>
                      <td className="px-8 py-6 text-[11px] text-text-muted font-medium">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center bg-danger/5 p-6 border border-danger/20 rounded-2xl max-w-2xl mx-auto">
              <p className="text-xs font-black uppercase tracking-widest text-danger">
                Looking for guaranteed profit? No crypto signal group is for you. Guaranteed-profit claims are a major red flag.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Final CTA */}
      <Section className="bg-background py-32 border-t border-line">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Compare the Process <br />
              <span className="text-primary">Before You Trust.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              The best crypto signal group is not the one with the loudest screenshots. It is the one that helps traders understand the setup, the risk, and the market context before acting.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_compare_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_compare_method"
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

function Search({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  );
}
