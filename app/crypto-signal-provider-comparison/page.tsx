import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import { 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  Search,
  ArrowRight,
  X,
  FileText,
  AlertTriangle,
  Lock,
  Eye,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Navigation,
  Target,
  Briefcase,
  HelpCircle,
  BarChart3,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Signal Provider Comparison | Free, Bots, VIP & Yaga",
  description: "Compare crypto signal providers by method, proof, Telegram delivery, risk management, pricing, onboarding, bots, free groups, VIP groups and Yaga Calls.",
  alternates: {
    canonical: "https://www.yagacalls.com/crypto-signal-provider-comparison",
  },
  openGraph: {
    title: "Crypto Signal Provider Comparison",
    description: "Compare free signal channels, cheap VIP groups, automated bots, education communities, risk-managed providers and Yaga Calls before choosing where to spend time or money.",
    type: "article",
    url: "https://www.yagacalls.com/crypto-signal-provider-comparison",
    siteName: "Yaga Calls",
  }
};

export default function ComparisonPage() {
  const faqs = [
    {
      question: "How should I compare crypto signal providers?",
      answer: "Compare crypto signal providers by method, proof examples, signal structure, entry zones, target planning, invalidation logic, risk management, Telegram delivery, pricing clarity, onboarding safety, and whether they avoid guaranteed-profit claims."
    },
    {
      question: "What is the most important thing in a crypto signal provider comparison?",
      answer: "The most important factor is process clarity. A serious provider should explain why a setup exists, where the entry makes sense, where targets may be reviewed, and where the idea becomes invalid."
    },
    {
      question: "Are free crypto signal channels better than paid providers?",
      answer: "Free crypto signal channels are useful for observation, but they usually offer limited depth and follow-up. Paid providers may offer more structure, but payment does not guarantee quality or profit."
    },
    {
      question: "Are automated crypto signal bots reliable?",
      answer: "Automated bots can be useful for fast indicator-based alerts, but they often lack human market context, narrative judgment, and flexible risk interpretation. They should not be treated as guaranteed trading systems."
    },
    {
      question: "Are cheap lifetime VIP crypto groups worth it?",
      answer: "Cheap lifetime VIP groups can be risky because low price does not prove research quality, sustainability, or risk discipline. Users should check method, proof, risk language, and onboarding safety before joining."
    },
    {
      question: "How does Yaga Calls compare to typical Telegram signal groups?",
      answer: "Yaga Calls is positioned around structured setup notes, market narrative research, entry zones, target planning, invalidation logic, risk-aware communication, selected proof examples, and manual Telegram onboarding."
    },
    {
      question: "Does Yaga Calls guarantee better results than other providers?",
      answer: "No. Yaga Calls does not guarantee results. Crypto trading involves risk, and all content is educational market analysis, not financial advice or a promise of profit."
    },
    {
      question: "Can I evaluate Yaga Calls before paying?",
      answer: "Yes. Users can join the free Telegram group, read the Yaga Calls method, review selected proof examples, and compare pricing before deciding whether premium access fits their trading style."
    },
    {
      question: "What red flags should I avoid when comparing providers?",
      answer: "Avoid providers that promise guaranteed profit, claim 100% accuracy, sell no-loss signals, hide losing calls, use random Telegram DMs, provide no method, or avoid risk disclaimers."
    },
    {
      question: "Who is Yaga Calls best for compared to other providers?",
      answer: "Yaga Calls is best suited for serious traders who want Telegram-first crypto signals, structured market research, entry and target context, invalidation logic, selected proof examples, manual onboarding, and risk-aware communication."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#webpage",
        "url": "https://www.yagacalls.com/crypto-signal-provider-comparison",
        "name": "Crypto Signal Provider Comparison: Free Groups, Bots, VIP Groups and Yaga Calls",
        "description": "Compare crypto signal providers by method, proof, Telegram delivery, risk management, pricing, onboarding, bots, free groups, VIP groups and Yaga Calls.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#article",
        "headline": "Crypto Signal Provider Comparison",
        "description": "A side-by-side comparison of different crypto signal provider models, features, and risk levels.",
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
          "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#webpage"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#breadcrumb",
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
            "name": "Crypto Signal Provider Comparison",
            "item": "https://www.yagacalls.com/crypto-signal-provider-comparison"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/crypto-signal-provider-comparison#faq",
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
                  Provider Comparison Guide
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  Crypto Signal <br />
                  <span className="text-primary">Provider Comparison</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  Compare process before comparing price.
                </p>
                <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Serious traders should compare method, proof context, entry structure, invalidation, risk language, Telegram delivery, pricing clarity, and onboarding safety.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed border-l-2 border-primary/30 pl-4 max-w-xl mx-auto lg:mx-0 font-medium">
                  This guide compares free groups, paid VIP groups, automated bots, education communities, and Yaga Calls so traders can choose with clearer judgment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_comp_free"
                  className="px-8 py-4 text-sm"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/proof" 
                  variant="secondary"
                  trackingLabel="hero_comp_proof"
                  className="px-8 py-4 text-sm"
                >
                  Review Yaga Calls Proof
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_comp_method"
                  className="px-8 py-4 text-sm hidden sm:inline-flex"
                >
                  Read the Method
                </CTAButton>
              </div>

              <div className="pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 max-w-md mx-auto lg:mx-0">
                  Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
                </p>
              </div>
            </div>

            {/* Right side: Provider Comparison Snapshot Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative">
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase tracking-widest text-text border-b border-line pb-4 text-center">
                    Provider Type Snapshot
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { type: "Free Channels", desc: "Good for observation, limited depth.", icon: <Eye size={16} /> },
                      { type: "Cheap VIP Groups", desc: "Low price, often weak process.", icon: <AlertTriangle size={16} className="text-warning" /> },
                      { type: "Automated Bots", desc: "Fast alerts, limited human context.", icon: <Zap size={16} /> },
                      { type: "Education Groups", desc: "Useful learning, lacks live delivery.", icon: <Briefcase size={16} /> },
                      { type: "Risk-Managed Providers", desc: "Focus on invalidation and downside.", icon: <ShieldCheck size={16} className="text-primary" /> },
                      { type: "Yaga Calls", desc: "Research-led, Telegram-first notes.", icon: <TrendingUp size={16} className="text-primary" />, highlight: true }
                    ].map((row, i) => (
                      <div key={i} className={`flex gap-4 items-center p-3 rounded-2xl border transition-colors ${row.highlight ? 'bg-primary/5 border-primary/20 shadow-lg shadow-primary/5' : 'border-line/50 bg-surface-deep/30'}`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${row.highlight ? 'bg-primary text-background' : 'bg-surface-deep text-text-muted'}`}>
                          {row.icon}
                        </div>
                        <div>
                          <h4 className={`text-[10px] font-black uppercase tracking-widest ${row.highlight ? 'text-primary' : 'text-text'}`}>{row.type}</h4>
                          <p className="text-[11px] text-text-muted leading-tight font-medium">{row.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">
                      Compare process before comparing price.
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
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">How Should You Compare Crypto Signal Providers?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Compare crypto signal providers by looking at their method, proof examples, signal structure, entry and target context, invalidation logic, risk management, Telegram delivery, pricing clarity, onboarding safety, and whether they avoid guaranteed-profit claims. 
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Do not compare providers by hype alone. A serious provider should help traders understand the setup, the risk, and the point where the idea becomes wrong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Provider Categories Compared */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Provider Categories <br /><span className="text-primary">Compared Side-by-Side</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                The right comparison is not "who sounds most confident?". The right comparison is "who gives the clearest process?".
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[1200px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Provider Type</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">How It Works</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Best For</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Main Weakness</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Risk Level</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-primary text-center">Yaga View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { t: "Free Signal Channel", h: "Shares public alerts without paid access.", b: "Observation and basic learning.", w: "Limited depth, inconsistent follow-up.", r: "Medium", v: "Observe before paying." },
                    { t: "Cheap Lifetime VIP", h: "Sells low-cost lifetime access at scale.", b: "Budget users (caution needed).", w: "Weak research sustainability.", r: "High", v: "Price != Trust." },
                    { t: "Paid VIP Group", h: "Offers paid access to more frequent signals.", b: "Users who verify the method first.", w: "Payment doesn't prove quality.", r: "Med-High", v: "Unlock structure, not noise." },
                    { t: "Automated Signal Bot", h: "Uses rules or indicators to generate alerts.", b: "Indicator-based, speed-focused alerts.", w: "Limited human/narrative context.", r: "High", v: "Alert != Market Judgment." },
                    { t: "Education Community", h: "Teaches trading concepts and strategy.", b: "Beginners and learners.", w: "Lacks timely live signal delivery.", r: "Low-Med", v: "Education is the foundation." },
                    { t: "Research-Led Desk", h: "Connects signals to narratives and liquidity.", b: "Serious traders wanting context.", w: "Cannot remove market risk.", r: "Medium", v: "Closest to Yaga model." },
                    { t: "Yaga Calls", h: "Narrative, technical, and risk context.", b: "Traders wanting structured signal notes.", w: "Not for guaranteed-profit seekers.", r: "Medium", v: "Built for process.", bold: true }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className={`px-6 py-6 text-xs font-black uppercase tracking-tight border-r border-line/50 ${row.bold ? 'text-primary' : 'text-text'}`}>{row.t}</td>
                      <td className="px-6 py-6 text-[11px] text-text-muted leading-relaxed">{row.h}</td>
                      <td className="px-6 py-6 text-[11px] text-text-muted leading-relaxed font-bold">{row.b}</td>
                      <td className="px-6 py-6 text-[11px] text-text-muted leading-relaxed">{row.w}</td>
                      <td className="px-6 py-6 text-[11px] text-text-muted leading-relaxed text-center font-black">{row.r}</td>
                      <td className="px-6 py-6 text-[11px] text-text-muted text-center italic">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — What Actually Matters in a Provider Comparison */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Matters Most in <br /><span className="text-primary">a Provider Comparison?</span></h2>
              <p className="text-xl text-text-muted leading-relaxed font-bold">
                A provider comparison should punish vague certainty and reward clear process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { t: "Signal Structure", d: "Does the provider include asset, setup reason, entry zone, targets, invalidation, and risk note?", icon: <FileText /> },
                { t: "Method", d: "Does the provider explain how trade ideas are selected?", icon: <Search /> },
                { t: "Proof Context", d: "Does the provider show historical examples responsibly?", icon: <BarChart3 /> },
                { t: "Invalidation", d: "Does the signal explain where the idea becomes wrong?", icon: <Target /> },
                { t: "Risk Management", d: "Does the provider discuss downside and volatility?", icon: <ShieldCheck /> },
                { t: "Telegram Delivery", d: "Is delivery fast but still organized and clear?", icon: <Navigation /> },
                { t: "Onboarding Safety", d: "Are official links and payment steps clear?", icon: <Lock /> },
                { t: "Pricing Clarity", d: "Does the user know exactly what is included?", icon: <Briefcase /> },
                { t: "Realistic Claims", d: "Does the provider avoid guaranteed-profit language?", icon: <HelpCircle /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-all group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-text leading-tight">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/how-to-choose-a-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Use the provider selection checklist →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Yaga Calls vs Typical Telegram Signal Groups */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Yaga Calls vs <br /><span className="text-primary">Typical Telegram Groups</span></h2>
              <p className="text-xl text-text-muted leading-relaxed">
                Yaga Calls should not compete by being louder. It should compete by being clearer.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Typical Telegram Group</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Yaga Calls Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Signal style", t: "Random coin alerts or short calls.", y: "Structured setup notes with context." },
                    { f: "Market reason", t: "Often vague or missing.", y: "Narrative and technical context." },
                    { f: "Entry logic", t: "Often unclear or late.", y: "Entry zone planning." },
                    { f: "Targets", t: "Sometimes exaggerated.", y: "Target mapping as review areas." },
                    { f: "Invalidation", t: "Often missing.", y: "Core part of setup context." },
                    { f: "Risk language", t: "Often ignored.", y: "Risk-aware educational framing." },
                    { f: "Telegram delivery", t: "Fast but sometimes noisy.", y: "Telegram-first structured delivery." },
                    { f: "Proof", t: "Only winning screenshots.", y: "Selected historical proof examples." },
                    { f: "Claims", t: "Can lean into hype.", y: "No guaranteed-profit claims." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-sm font-black text-text-muted uppercase tracking-tight border-r border-line/50">{row.f}</td>
                      <td className="px-8 py-6 text-sm text-text-muted/60 italic">{row.t}</td>
                      <td className="px-8 py-6 text-sm font-bold text-text group-hover:text-primary transition-colors">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Understand Telegram delivery
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Review proof examples
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Yaga Calls vs Cheap Lifetime VIP Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Yaga Calls vs <br /><span className="text-primary">Cheap Lifetime VIP</span></h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-text font-bold">
                  Cheap access can become expensive if it encourages poor risk decisions.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Lifetime access at a low one-time price often lacks the research sustainability, risk review, and communication discipline required for a serious signal desk.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-6">
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <AlertTriangle className="text-warning" /> Lifetime VIP Risks
                </h3>
                <ul className="space-y-4">
                  {[
                    "Unstable research quality",
                    "Mass-market noisy delivery",
                    "Weak individual accountability",
                    "Lack of risk-aware structure",
                    "Promotional hype incentives",
                    "Unclear long-term roadmap"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text-muted">
                      <X className="text-danger w-4 h-4" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-surface-deep border border-primary/20 rounded-[40px] space-y-6 shadow-xl shadow-primary/5">
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> Yaga Standard
                </h3>
                <ul className="space-y-4">
                  {[
                    "Time-based premium plans",
                    "Focused narrative research",
                    "Manual Telegram onboarding",
                    "Structured setup notes",
                    "Clear risk disclaimers",
                    "Educational proof snapshots"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text">
                      <CheckCircle2 className="text-primary w-4 h-4" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-line">
                  <CTAButton href="/pricing" variant="secondary" className="w-full">Compare Premium Plans</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Yaga Calls vs Free Signal Channels */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Yaga Calls vs <br /><span className="text-primary">Free Signal Channels</span></h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl font-medium">
              Free signal channels are useful for observation. A serious provider should not fear observation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Free Channel", d: "Observation and basic public alerts. Limited depth.", c: "Free", color: "text-text-muted" },
                { t: "Yaga Free", d: "Observe communication style and signal tone before paying.", c: "Free", color: "text-primary" },
                { t: "Yaga Premium", d: "Full structured signal notes, research, and follow-up.", c: "Paid", color: "text-primary" }
              ].map((box, i) => (
                <div key={i} className="p-8 bg-background border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-colors">
                  <div className={`text-xs font-black uppercase tracking-widest ${box.color}`}>{box.c}</div>
                  <h4 className="text-lg font-black uppercase tracking-tighter">{box.t}</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">{box.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank">Join Free Telegram First</CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Yaga Calls vs Automated Crypto Signal Bots */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Yaga Calls vs <br /><span className="text-primary">Signal Bots</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold">Speed is useful, but speed is not market judgment.</p>
                  <p className="text-text-muted leading-relaxed">
                    Automated signal bots can be fast for indicator alerts, but they often struggle with narrative context, regime changes, liquidity, and risk interpretation.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/method" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:tracking-[0.4em] transition-all">
                    See the research method <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="p-8 bg-surface-deep border border-line rounded-[40px] space-y-8">
                {[
                  { f: "Signal Source", b: "Rules / Indicators", y: "Human Research" },
                  { f: "Narrative Context", b: "Limited", y: "Core Focus" },
                  { f: "Risk Explanation", b: "Depends on settings", y: "Structured Notes" },
                  { f: "Market Judgment", b: "Algorithmic", y: "Research-led" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-line/50 pb-4 last:border-0 last:pb-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.f}</span>
                    <div className="flex gap-4 text-[11px] font-bold uppercase tracking-tight">
                      <span className="text-text-muted/40">{row.b}</span>
                      <span className="text-primary">{row.y}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Yaga Calls vs Education-Only Communities */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Yaga Calls vs <br /><span className="text-primary">Education Groups</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">Learning matters. But timely structure also matters when markets are moving.</p>
                <p className="text-text-muted leading-relaxed">
                  Education-only groups are valuable for beginners, but many traders also want timely market notes and structured signal ideas delivered via Telegram.
                </p>
              </div>
              <Link href="/academy" className="text-xs font-black uppercase tracking-[0.3em] text-primary hover:underline inline-block">
                Learn crypto trading basics →
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { l: "Live Signal Delivery", e: "Limited", y: "Telegram-first" },
                { l: "Market Narrative", e: "Case studies", y: "Live context" },
                { l: "Risk Framework", e: "Conceptual", y: "Applied structure" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-background border border-line rounded-2xl flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-widest text-text-muted">{item.l}</span>
                  <div className="flex gap-4 text-xs font-black uppercase tracking-tight">
                    <span className="text-text-muted/40">{item.e}</span>
                    <span className="text-primary">{item.y}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Full Comparison Matrix */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Comparison Matrix</h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                Compare the feature sets before you trust the alerts.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[1200px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Feature</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Free Channel</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Cheap VIP</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Automated Bot</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-text-muted">Education Group</th>
                    <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-primary">Yaga Calls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Telegram Delivery", a: "Yes", b: "Yes", c: "Sometimes", d: "Sometimes", y: "Yes" },
                    { f: "Entry Zones", a: "Limited", b: "Inconsistent", c: "Rule-based", d: "Educational", y: "Yes" },
                    { f: "Target Planning", a: "Limited", b: "Inconsistent", c: "Rule-based", d: "Educational", y: "Yes" },
                    { f: "Invalidation", a: "Rare", b: "Missing", c: "Rule-based", d: "Educational", y: "Yes" },
                    { f: "Risk Context", a: "Limited", b: "Weak", c: "Optional", d: "Core", y: "Core" },
                    { f: "Narrative Research", a: "Limited", b: "Weak", c: "No", d: "Sometimes", y: "Core" },
                    { f: "Technical Structure", a: "Sometimes", b: "Varies", c: "Yes", d: "Yes", y: "Yes" },
                    { f: "Proof Snapshots", a: "Limited", b: "Promotional", c: "Backtests", d: "Case studies", y: "Selected" },
                    { f: "Free Observation", a: "Yes", b: "Sometimes", c: "Trial", d: "Yes", y: "Yes" },
                    { f: "Manual Onboarding", a: "No", b: "No", c: "No", d: "Varies", y: "Yes" },
                    { f: "Guaranteed Profit?", a: "Red Flag", b: "Red Flag", c: "No", d: "No", y: "Never" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-text-muted border-r border-line/50">{row.f}</td>
                      <td className="px-6 py-5 text-[11px] text-text-muted/60">{row.a}</td>
                      <td className="px-6 py-5 text-[11px] text-text-muted/60">{row.b}</td>
                      <td className="px-6 py-5 text-[11px] text-text-muted/60">{row.c}</td>
                      <td className="px-6 py-5 text-[11px] text-text-muted/60">{row.d}</td>
                      <td className="px-6 py-5 text-[11px] font-black text-text group-hover:text-primary transition-colors">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Red Flags in Comparison */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Comparison <br /><span className="text-danger">Red Flags</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Guaranteed profit claims",
                "No-loss signal promises",
                "100% win-rate marketing",
                "Cheap lifetime VIP access",
                "Deleted losing or failed calls",
                "Only winning screenshots",
                "No signal method published",
                "No risk disclaimer visible",
                "Random Telegram DM offers",
                "No official website presence",
                "No clear pricing clarity",
                "No invalidation or stop-loss"
              ].map((flag, i) => (
                <div key={i} className="flex gap-4 p-6 bg-background rounded-2xl border border-line group hover:border-danger/40 transition-colors">
                  <X className="text-danger w-5 h-5 shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-tight text-text leading-tight">{flag}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-8">
              <Link href="/how-to-choose-a-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Use the full provider selection checklist →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — How to Evaluate Yaga Calls Before Paying */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">How to Evaluate Yaga <br /><span className="text-primary">Before Premium Onboarding</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                A serious provider should not fear observation. Review the trust assets before deciding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { s: "1", t: "Observe", d: "Join free Telegram", href: "https://t.me/+JFf8kBf01mg3OTg1" },
                { s: "2", t: "Verify", d: "Read the Method", href: "/method" },
                { s: "3", t: "Audit", d: "Inspect Proof", href: "/proof" },
                { s: "4", t: "Compare", d: "Review Pricing", href: "/pricing" },
                { s: "5", t: "Confirm", d: "Manual Onboarding", href: "/contact" }
              ].map((step, i) => (
                <Link key={i} href={step.href} className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black mx-auto text-sm group-hover:bg-primary group-hover:text-background transition-all">
                    {step.s}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-text">{step.t}</h4>
                    <p className="text-[11px] text-text-muted font-bold uppercase tracking-tight">{step.d}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Who Is Yaga Calls Best For Compared to Others */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-background border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                <CheckCircle2 className="text-primary" /> Yaga Fits If...
              </h3>
              <ul className="space-y-4">
                {[
                  "You want structured setup notes",
                  "You care about entry & invalidation",
                  "You want narrative research context",
                  "You prefer manual onboarding safety",
                  "You review proof responsibly",
                  "You understand losses can happen"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-background border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                <X className="text-danger" /> Yaga Is Not For...
              </h3>
              <ul className="space-y-4">
                {[
                  "Guaranteed income hunters",
                  "No-loss signal seekers",
                  "Cheap lifetime VIP buyers",
                  "Random pump call fans",
                  "Bot-only automated users",
                  "Those ignoring risk management"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-danger/50" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Final CTA */}
      <Section className="bg-background py-32">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Compare by Process, <br />
              <span className="text-primary">Not Hype.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              A serious crypto signal provider comparison should focus on method, proof, and risk awareness. Compare how Yaga Calls approaches the market before you trust the alerts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_comp_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/proof" 
              variant="secondary"
              trackingLabel="final_comp_proof"
              className="px-10 py-5 text-base"
            >
              Review Proof Examples
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/method" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Read the Method
              </Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Compare Plans
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
