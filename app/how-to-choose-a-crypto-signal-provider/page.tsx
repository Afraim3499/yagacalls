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
  Copy,
  Info
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose a Crypto Signal Provider | 12-Point Checklist | Yaga Calls",
  description: "Use this 12-point checklist to evaluate crypto signal providers, verify proof, avoid pump groups, check Telegram safety, and choose with risk in mind.",
  alternates: {
    canonical: "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider",
  },
  openGraph: {
    title: "How to Choose a Crypto Signal Provider",
    description: "A serious checklist for evaluating crypto signal providers before joining or paying. Learn what to check, what to avoid, and how Yaga Calls approaches risk-aware signals.",
    type: "article",
    url: "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider",
    siteName: "Yaga Calls",
  }
};

export default function HowToChooseProviderPage() {
  const faqs = [
    {
      question: "How do I choose a crypto signal provider?",
      answer: "Choose a crypto signal provider by checking its method, signal structure, entry logic, target planning, invalidation, risk language, proof context, Telegram safety, pricing clarity, and communication style. Avoid providers that promise guaranteed profit or pressure users into payment."
    },
    {
      question: "What should a crypto signal provider include?",
      answer: "A serious crypto signal provider should include market reason, entry zones, target levels, stop-loss or invalidation context, risk notes, follow-up logic, transparent examples, and clear official access routes."
    },
    {
      question: "What are red flags in crypto signal providers?",
      answer: "Red flags include guaranteed-profit claims, no-loss promises, vague entries, no invalidation, only winning screenshots, deleted losing calls, fake Telegram admins, cheap lifetime VIP access, and aggressive payment pressure."
    },
    {
      question: "Should I trust crypto signal proof screenshots?",
      answer: "Proof screenshots should be reviewed carefully. Good proof includes context, timing, original setup information, risk awareness, and clear disclaimers. Screenshots alone do not guarantee future performance."
    },
    {
      question: "Should I join a free crypto signal group before paying?",
      answer: "Yes. A free group can help you observe communication quality, market discipline, risk language, and whether the provider’s method fits your trading style before considering premium access."
    },
    {
      question: "Are paid crypto signal providers better?",
      answer: "Paid crypto signal providers may offer deeper access, more updates, or premium research, but payment does not guarantee quality or profit. Always evaluate method, proof, and risk language first."
    },
    {
      question: "How do I know if a Telegram crypto signal provider is real?",
      answer: "Use only official links from the provider’s website, avoid random direct messages, confirm the group identity, and never send payment to unknown accounts or unofficial admins."
    },
    {
      question: "What is the most important thing to check before paying?",
      answer: "The most important thing is whether the provider has a clear method and risk framework. A provider should explain why a setup exists and where the idea becomes wrong."
    },
    {
      question: "Is Yaga Calls a good crypto signal provider?",
      answer: "Yaga Calls is positioned for serious traders who want structured crypto signal notes, market narrative research, entry zones, target planning, invalidation logic, selected proof examples, Telegram delivery, and risk-aware communication."
    },
    {
      question: "Can any crypto signal provider guarantee profit?",
      answer: "No. No crypto signal provider can guarantee profit. Crypto trading involves risk, and every trader remains responsible for their own decisions."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider#webpage",
        "url": "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider",
        "name": "How to Choose a Crypto Signal Provider: 12 Checks Before You Join",
        "description": "Use this 12-point checklist to evaluate crypto signal providers, verify proof, avoid pump groups, check Telegram safety, and choose with risk in mind.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider#article",
        "headline": "How to Choose a Crypto Signal Provider",
        "description": "A serious decision-making framework for evaluating crypto signal providers before paying.",
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
          "@id": "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider#webpage"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider#breadcrumb",
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
            "name": "How to Choose a Crypto Signal Provider",
            "item": "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/how-to-choose-a-crypto-signal-provider#faq",
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
                  Crypto Signal Provider Checklist
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  How to Choose a <br />
                  <span className="text-primary">Crypto Signal Provider</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  A serious crypto signal provider should not ask for blind trust.
                </p>
                <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Before joining or paying, traders should check the provider’s method, entry logic, target planning, invalidation, risk language, proof context, Telegram safety, and pricing fit.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed border-l-2 border-primary/30 pl-4 max-w-xl mx-auto lg:mx-0 font-medium italic">
                  This guide gives traders a practical checklist for evaluating crypto signal providers without falling for hype, fake certainty, or pump-style marketing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_choose_free"
                  className="px-8 py-4 text-sm"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_choose_method"
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

            {/* Right side: Provider Check Snapshot Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative">
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase tracking-widest text-text border-b border-line pb-4">
                    Provider Check Snapshot
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { label: "Method visible?", status: "check" },
                      { label: "Entry zones clear?", status: "check" },
                      { label: "Targets explained?", status: "check" },
                      { label: "Invalidation included?", status: "check" },
                      { label: "Risk discussed?", status: "check" },
                      { label: "Proof shown responsibly?", status: "check" },
                      { label: "Telegram links official?", status: "check" },
                      { label: "Pricing pressure-free?", status: "check" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-line bg-surface-deep/50">
                        <span className="text-[11px] font-black uppercase tracking-widest text-text-muted">{item.label}</span>
                        <CheckCircle2 size={16} className="text-primary" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-line text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">
                      Do not pay before the process is clear.
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
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">How Should You Choose a Crypto Signal Provider?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Choose a crypto signal provider by checking the provider’s method, signal structure, entry zones, target planning, invalidation logic, risk language, proof context, Telegram safety, pricing model, and communication style. 
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A serious provider should explain why a setup exists and where the idea becomes wrong. Avoid providers that promise guaranteed profit, hide risk, pressure users into payment, or rely only on screenshots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Why Choosing a Signal Provider Requires Discipline */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Why Choosing a Provider <br /><span className="text-primary">Requires Discipline</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                A provider should reduce confusion, not replace your judgment. Beginners often confuse confidence with competence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Market Risk", desc: "Even strong setups can fail because crypto markets move quickly and volatility can change the plan.", icon: <TrendingUp className="text-primary" /> },
                { title: "Provider Risk", desc: "A weak provider may give vague entries, unrealistic targets, no invalidation, and no risk context.", icon: <AlertTriangle className="text-primary" /> },
                { title: "Telegram Risk", desc: "Fake admins, copied groups, and impersonators can make the user trust the wrong channel.", icon: <ShieldAlert className="text-primary" /> },
                { title: "Emotional Risk", desc: "Urgent language can push traders to enter late, over-leverage, or ignore downside.", icon: <Zap className="text-primary" /> }
              ].map((card, i) => (
                <div key={i} className="p-10 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">{card.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed font-medium">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/what-are-crypto-signals" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:tracking-[0.4em] transition-all justify-center">
                Learn what crypto signals should include <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — The 12-Point Crypto Signal Provider Checklist */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The 12-Point <br /><span className="text-primary">Provider Checklist</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
                A provider passes the first test when it helps you think more clearly before acting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { n: 1, t: "Clear Method", c: "Does the provider explain how signals are selected?", r: "Only says 'trust us' or 'VIP knows first'." },
                { n: 2, t: "Market Reason", c: "Does each signal explain the narrative or technical catalyst?", r: "Names a coin without context." },
                { n: 3, t: "Entry Zone", c: "Is there a defined price area instead of 'buy now'?", r: "Posts after the move has already happened." },
                { n: 4, t: "Target Planning", c: "Are targets review areas, not guarantees?", r: "Wild targets with no structure." },
                { n: 5, t: "Invalidation", c: "Does the provider explain where the idea becomes wrong?", r: "No stop-loss, no invalidation discussed." },
                { n: 6, t: "Risk Context", c: "Does the provider mention sizing or volatility?", r: "Only upside is discussed." },
                { n: 7, t: "Follow-Up Logic", c: "Are signals updated or cancelled when conditions change?", r: "Old signals ignored after failure." },
                { n: 8, t: "Transparent Proof", c: "Are proof examples shown with context and disclaimers?", r: "Only winning screenshots, no dates." },
                { n: 9, t: "Telegram Safety", c: "Are official links shown on the website?", r: "Payment requests from random DMs." },
                { n: 10, t: "Pricing Clarity", c: "Is pricing clear without high-pressure countdowns?", r: "Aggressive sales or hidden renewal logic." },
                { n: 11, t: "No Guarantees", c: "Does the provider avoid 'fixed-profit' or 'no-loss' promises?", r: "Claims like '100% accurate signals'." },
                { n: 12, t: "Trader Style Fit", c: "Does the provider match your risk tolerance?", r: "You feel pressured to trade setups you don't get." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-background border border-line rounded-3xl space-y-6 hover:border-primary/40 transition-colors flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-black text-primary/20">0{item.n}</div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-text leading-tight">{item.t}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Check:</p>
                        <p className="text-xs text-text font-bold uppercase tracking-tight">{item.c}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-line/50">
                    <p className="text-[10px] font-black uppercase tracking-widest text-danger mb-1">Red Flag:</p>
                    <p className="text-[11px] text-text-muted italic">{item.r}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                See how Yaga Calls works
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Review Selected Proof Examples
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Provider Evaluation Scorecard */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Crypto Signal <br /><span className="text-primary">Provider Scorecard</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                Score each provider from 0 to 2 (0 = Missing, 1 = Partial, 2 = Clear).
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted text-center">0 pts</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted text-center">1 pt</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary text-center">2 pts</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text text-center">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    "Method Clarity", "Entry Zones", "Target Planning", "Invalidation", "Risk Language", 
                    "Proof Context", "Telegram Safety", "Pricing Clarity", "Communication Tone", "Educational Value"
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-sm font-black text-text uppercase tracking-tight border-r border-line/50">{row}</td>
                      <td className="px-8 py-6 text-center text-xs text-text-muted italic">Missing</td>
                      <td className="px-8 py-6 text-center text-xs text-text-muted italic">Vague</td>
                      <td className="px-8 py-6 text-center text-xs font-bold text-primary italic">Detailed</td>
                      <td className="px-8 py-6 text-center border-l border-line/50">
                        <div className="w-10 h-10 border border-line/50 rounded-lg mx-auto flex items-center justify-center text-xs font-black text-text-muted group-hover:border-primary/40 transition-colors">
                          _
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { r: "0–7", t: "High Risk", d: "Avoid paying until more information is clear.", color: "text-danger" },
                { r: "8–14", t: "Needs Caution", d: "Observe longer before joining premium.", color: "text-warning" },
                { r: "15–20", t: "Worth Evaluation", d: "Review proof and method before payment.", color: "text-primary" }
              ].map((res, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] text-center space-y-4">
                  <div className={`text-xs font-black uppercase tracking-widest ${res.color}`}>Score: {res.r}</div>
                  <h4 className="text-xl font-black uppercase tracking-tighter">{res.t}</h4>
                  <p className="text-xs text-text-muted font-medium uppercase tracking-tight leading-relaxed">{res.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Red Flags to Avoid */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Provider <br /><span className="text-danger">Red Flags</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                A serious provider does not need to sell certainty. It needs to show process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { f: "Guaranteed Profit", d: "No signal provider can remove market risk." },
                { f: "No-Loss Claims", d: "Trading always involves the risk of loss." },
                { f: "100% Accuracy", d: "Fixed win rates are statistically impossible." },
                { f: "Buy-Now Pressure", d: "Urgency pushes emotional, late entries." },
                { f: "No Invalidation", d: "Traders are left guessing when to exit." },
                { f: "Only Screenshots", d: "Wins without method are just luck or cherry-picking." },
                { f: "Deleted Losses", d: "Hiding failures is a sign of lack of discipline." },
                { f: "Fake Admins", d: "Be careful of impersonators and random DMs." },
                { f: "Cheap Lifetime VIP", d: "Sustainable signal desks have overhead and effort." },
                { f: "No Website", d: "Lack of official hub increases scam risk." },
                { f: "No Risk Disclaimer", d: "Ignoring risk is a sign of a pump-style group." },
                { f: "No Reasoning", d: "Shouting 'Buy' without a reason is gambling." }
              ].map((flag, i) => (
                <div key={i} className="p-8 bg-background border border-line rounded-3xl space-y-4 hover:border-danger/40 transition-colors">
                  <div className="flex gap-4 items-start">
                    <X className="text-danger w-5 h-5 mt-1 shrink-0" />
                    <div className="space-y-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-text leading-tight">{flag.f}</h4>
                      <p className="text-[11px] text-text-muted leading-relaxed">{flag.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/best-crypto-signal-groups-compared" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Compare different types of crypto signal groups →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — How to Judge Signal Proof */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">How to Judge <br /><span className="text-primary">Signal Proof</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold">
                    Proof should be reviewed as historical context, not a promise of future performance.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Good proof shows the setup, timing, communication style, market context, and outcome. Weak proof only shows profit screenshots without explaining the original idea or the risk involved.
                  </p>
                </div>
                <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">The Proof Audit</h4>
                  <ul className="space-y-3">
                    {["Original signal shown?", "Date clearly visible?", "Entry and targets clear?", "Invalidation mentioned?", "Risk acknowledged?", "Losing setups discussed?"].map((q, i) => (
                      <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text">
                        <HelpCircle size={14} className="text-primary mt-0.5 shrink-0" /> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden border border-line rounded-[40px] bg-surface-deep shadow-2xl h-full flex flex-col">
                <div className="px-8 py-6 bg-background border-b border-line">
                  <h3 className="text-xs font-black uppercase tracking-widest text-text-muted">Hype Proof vs Responsible Proof</h3>
                </div>
                <div className="divide-y divide-line overflow-y-auto">
                  {[
                    { f: "Focus", h: "Only gains", r: "Historical examples" },
                    { f: "Context", h: "Missing", r: "Explained" },
                    { f: "Risk", h: "Ignored", r: "Acknowledged" },
                    { f: "Dates", h: "Unclear", r: "Clear when possible" },
                    { f: "Future", h: "Implies wins", r: "No guarantee" },
                    { f: "Emotion", h: "Creates FOMO", r: "Encourages evaluation" }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 hover:bg-background/50 transition-colors">
                      <div className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-text-muted border-r border-line/50">{row.f}</div>
                      <div className="px-6 py-5 text-[11px] text-danger/60 line-through decoration-danger/30">{row.h}</div>
                      <div className="px-6 py-5 text-[11px] font-bold text-text">{row.r}</div>
                    </div>
                  ))}
                </div>
                <div className="p-8 mt-auto text-center border-t border-line">
                  <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                    Review Yaga Calls Proof Examples →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — How to Check Telegram Safety */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Check Telegram Safety <br /><span className="text-primary">Before Joining</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                Telegram is useful for fast delivery, but it also creates impersonation risk. A serious group will never request payment via random DM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { t: "Official Links Only", d: "Use only official website links to join groups." },
                  { t: "No Random DMs", d: "Never trust random direct messages from admins." },
                  { t: "Confirm Identity", d: "Check the group name and handle matches the site." },
                  { t: "Official Onboarding", d: "Confirm payment instructions through official routes." }
                ].map((rule, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-background border border-line rounded-3xl group hover:border-primary transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                      <Lock size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-black uppercase tracking-tight text-text leading-tight">{rule.t}</h4>
                      <p className="text-[11px] text-text-muted leading-relaxed">{rule.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-10 bg-background border border-primary/20 rounded-[40px] space-y-8 flex flex-col justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Official Link Check</h3>
                  <p className="text-sm text-text-muted leading-relaxed uppercase tracking-tight font-bold">
                    Yaga Calls routes all users through manual Telegram onboarding to ensure safety and clarity.
                  </p>
                </div>
                <CTAButton 
                  href="/premium-telegram-crypto-signals" 
                  variant="secondary"
                  className="w-full"
                >
                  Understand Telegram Delivery
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Should You Test a Free Group Before Paying? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Should You Test a Free Group <br /><span className="text-primary">Before Paying?</span></h2>
              <div className="prose prose-invert prose-xl max-w-none mx-auto">
                <p className="text-text font-bold">Yes. Traders should usually observe a free group before paying for premium access.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="p-10 bg-surface-deep border border-line rounded-[32px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-primary border-b border-line pb-4">The Observation Checklist</h3>
                <ul className="space-y-4">
                  {[
                    "Does the provider communicate calmly?",
                    "Are market ideas structured and logical?",
                    "Is risk mentioned regularly?",
                    "Are official links clear in the bio?",
                    "Is premium pushed aggressively via DM?",
                    "Are free users treated with respect?",
                    "Does the group educate or just sell?"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-surface-deep border border-line rounded-[32px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-text-muted border-b border-line pb-4">When Premium Is Reasonable</h3>
                <ul className="space-y-4">
                  {[
                    "The method is clear and documented",
                    "Proof is reviewed responsibly",
                    "You understand basic trading risk",
                    "Pricing is affordable without FOMO",
                    "Premium unlocks structure, not noise"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-text-muted/30" /> {item}
                    </li>
                  ))}
                </ul>
                <CTAButton href="/pricing" variant="secondary" className="w-full">
                  Compare Yaga Calls Plans
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — How Yaga Calls Fits the Checklist */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">How Yaga Calls Fits the <br /><span className="text-primary">Serious Provider Checklist</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                Yaga Calls should be evaluated by the same checklist as any other crypto signal provider.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Checklist Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">What Traders Look For</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Yaga Calls Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Method", t: "Documented selection process.", y: "Narrative scan + Technical structure framework." },
                    { f: "Entry Logic", t: "Price areas instead of buy commands.", y: "Entry zone planning per setup." },
                    { f: "Targets", t: "Review levels, not guarantees.", y: "Target mapping as review areas." },
                    { f: "Invalidation", t: "Thesis failure point explained.", y: "Core risk context included by default." },
                    { f: "Risk Language", t: "Avoids fake certainty.", y: "Educational and risk-aware disclaimers." },
                    { f: "Proof", t: "Examples shown responsibly.", y: "Selected historical educational snapshots." },
                    { f: "Telegram Safety", t: "Official access routes provided.", y: "Manual onboarding via official links." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 text-sm font-black text-text-muted uppercase tracking-tight border-r border-line/50">{row.f}</td>
                      <td className="px-8 py-6 text-sm text-text-muted italic">{row.t}</td>
                      <td className="px-8 py-6 text-sm font-bold text-text group-hover:text-primary transition-colors">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="fit_free">Join Free Telegram</CTAButton>
              <CTAButton href="/method" variant="secondary" trackingLabel="fit_method">Read the Method</CTAButton>
              <CTAButton href="/proof" variant="secondary" trackingLabel="fit_proof">Review Proof Examples</CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Who Should Avoid Any Signal Provider */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">When You Should Avoid <br /><span className="text-danger">Providers Completely</span></h2>
            
            <div className="p-10 bg-surface-deep border border-danger/20 rounded-[48px] space-y-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-danger/30" />
              <div className="prose prose-invert prose-xl max-w-none text-center">
                <p className="text-text font-bold">If you need a signal provider to promise certainty, you are not ready for signal trading.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "You want guaranteed income",
                  "You need money urgently",
                  "You cannot afford losses",
                  "You don't understand basic risk",
                  "You plan to over-leverage",
                  "You want to avoid responsibility",
                  "You feel emotional pressure to recover",
                  "You treat signals as gambling"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-background border border-line rounded-2xl">
                    <ShieldAlert className="text-danger w-5 h-5 shrink-0" />
                    <p className="text-xs font-bold uppercase tracking-tight text-text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Decision Framework */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Decision Framework: <br /><span className="text-primary">Observe, Verify, Decide</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-bold">
                The correct decision is not always to join. Sometimes the correct decision is to wait.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { s: "1", t: "Observe", d: "Join the free group, read public content, and watch how the provider communicates." },
                { s: "2", t: "Verify", d: "Check method, proof, risk language, Telegram safety, and pricing transparency." },
                { s: "3", t: "Decide", d: "Only consider premium access if the provider's structure fits your risk tolerance." }
              ].map((step, i) => (
                <div key={i} className="space-y-6 text-center group">
                  <div className="w-16 h-16 rounded-[24px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black mx-auto text-xl group-hover:bg-primary group-hover:text-background transition-all duration-500 transform group-hover:rotate-[10deg]">
                    {step.s}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black uppercase tracking-tighter">{step.t}</h3>
                    <p className="text-xs text-text-muted font-bold uppercase tracking-tight leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Final CTA */}
      <Section className="bg-background py-32">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Use the Checklist <br />
              <span className="text-primary">Before You Trust.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              A serious crypto signal provider should make the decision process clearer, not more emotional. Before joining any provider, check the method, logic, and risk language.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_choose_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_choose_method"
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
