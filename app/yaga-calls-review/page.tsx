import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import { 
  ShieldCheck, 
  Target, 
  AlertTriangle, 
  Zap, 
  CheckCircle2, 
  X, 
  ArrowRight,
  MessageSquare,
  Lock,
  Eye,
  Activity,
  UserCheck,
  FileText,
  Navigation,
  Compass,
  Briefcase,
  TrendingUp,
  Search,
  ShieldAlert,
  Clock,
  HelpCircle,
  BarChart3,
  PieChart,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Yaga Calls Review | Method, Proof, Pricing & Telegram Access",
  description: "Read this Yaga Calls review before joining. Compare method, proof examples, pricing, Telegram access, onboarding, risks, strengths and limitations.",
  alternates: {
    canonical: "https://www.yagacalls.com/yaga-calls-review",
  },
  openGraph: {
    title: "Yaga Calls Review",
    description: "A transparent review of Yaga Calls: crypto signal method, Telegram delivery, proof examples, pricing, onboarding, and trading risks.",
    type: "article",
    url: "https://www.yagacalls.com/yaga-calls-review",
  }
};

export default function YagaCallsReviewPage() {
  const faqs = [
    {
      question: "What is Yaga Calls?",
      answer: "Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup notes, market narrative research, technical context, entry zones, targets, invalidation, risk-aware communication, selected proof examples, and manual premium onboarding."
    },
    {
      question: "Is Yaga Calls legit?",
      answer: "Yaga Calls presents visible pages for its method, proof examples, pricing, risk disclosure, and manual Telegram onboarding. Users should review those pages, use only official links, and avoid random Telegram DMs or unofficial payment requests."
    },
    {
      question: "Does Yaga Calls guarantee profit?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and all Yaga Calls content is educational market analysis, not financial advice or a promise of future results."
    },
    {
      question: "How does Yaga Calls deliver signals?",
      answer: "Yaga Calls uses Telegram for signal delivery and market updates. Users can observe free Telegram access and review premium Telegram options through official onboarding routes."
    },
    {
      question: "What does Yaga Calls include in signal notes?",
      answer: "Yaga Calls focuses on structured signal notes with market reason, technical context, entry zones, target planning, invalidation logic, stop-loss context, and risk-aware communication."
    },
    {
      question: "Can I try Yaga Calls before premium?",
      answer: "Users can join the free Telegram group first to observe communication style, market notes, and signal structure before comparing premium plans."
    },
    {
      question: "How should I review Yaga Calls proof examples?",
      answer: "Yaga Calls proof examples should be reviewed as selected historical snapshots. They help users evaluate communication and process but do not guarantee future performance."
    },
    {
      question: "How much does Yaga Calls cost?",
      answer: "Users should check the current pricing page for the latest premium plan details because pricing and onboarding offers may change."
    },
    {
      question: "Who is Yaga Calls best for?",
      answer: "Yaga Calls may fit serious traders who want Telegram-first crypto signals, structured market research, entry and target context, invalidation logic, selected proof examples, and risk-aware communication."
    },
    {
      question: "Who should avoid Yaga Calls?",
      answer: "Users should avoid Yaga Calls if they want guaranteed profit, no-loss trading, random pump calls, cheap lifetime VIP access, or someone else to take responsibility for trading decisions."
    },
    {
      question: "Is Yaga Calls financial advice?",
      answer: "No. Yaga Calls provides educational crypto market analysis and signal ideas only. It is not financial advice, and every trader remains responsible for their own decisions."
    },
    {
      question: "How do I join Yaga Calls premium safely?",
      answer: "Use only official links from the Yaga Calls website or approved contact/onboarding routes. Do not trust random Telegram DMs, copied logos, fake admins, or unofficial payment requests."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/yaga-calls-review#webpage",
        "url": "https://www.yagacalls.com/yaga-calls-review",
        "name": "Yaga Calls Review | Method, Proof, Pricing & Telegram Access",
        "description": "Transparent explainer and review of Yaga Calls' crypto signal service and risk-management framework.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/yaga-calls-review#article",
        "headline": "Yaga Calls Review: Method, Proof, Pricing, Telegram Access and Risk",
        "description": "Evaluate Yaga Calls' signal process, historical proof, pricing plans, and Telegram safety before joining.",
        "author": { "@type": "Organization", "name": "Yaga Calls" },
        "publisher": { "@id": "https://www.yagacalls.com/#organization" },
        "image": "https://www.yagacalls.com/og-review.jpg",
        "datePublished": "2024-05-15",
        "dateModified": "2024-05-15"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/yaga-calls-review#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://www.yagacalls.com/academy" },
          { "@type": "ListItem", "position": 3, "name": "Yaga Calls Review", "item": "https://www.yagacalls.com/yaga-calls-review" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/yaga-calls-review#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
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
      <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 relative z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Provider Review
                </span>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Yaga Calls <br />
                  <span className="text-primary">Review</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  This review explains how Yaga Calls works, who it may fit, who should avoid it, and what risks remain before joining.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed font-medium uppercase tracking-widest">
                  Evaluate by method, proof context, risk language, and Telegram safety before you join premium.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_review_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/proof" 
                  variant="secondary"
                  trackingLabel="hero_review_proof"
                >
                  Review Proof
                </CTAButton>
                <CTAButton 
                  href="/pricing" 
                  variant="secondary"
                  trackingLabel="hero_review_pricing"
                  className="hidden sm:inline-flex"
                >
                  Compare Plans
                </CTAButton>
              </div>

              <p className="text-[10px] text-text-muted/60 uppercase tracking-widest font-black max-w-md mx-auto lg:mx-0">
                Educational market analysis only. Yaga Calls does not guarantee profit, safety, or future results.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/50 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between border-b border-line pb-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Review Snapshot</h3>
                    <ShieldCheck className="text-primary" size={24} />
                  </div>

                  <div className="space-y-4">
                    {[
                      { l: "Service Type", v: "Telegram Crypto Signals" },
                      { l: "Signal Focus", v: "Structured Setup Notes", icon: <FileText size={14} className="text-primary" /> },
                      { l: "Method", v: "Narrative + Technical", icon: <Search size={14} className="text-primary" /> },
                      { l: "Risk Context", v: "Entry, Targets, Invalidation", icon: <Target size={14} className="text-primary" /> },
                      { l: "Proof", v: "Historical Examples Only", icon: <Eye size={14} className="text-primary" /> },
                      { l: "Best Fit", v: "Serious Traders (Process-Led)", icon: <UserCheck size={14} className="text-primary" /> },
                      { l: "Not For", v: "Guaranteed Profit Seekers", icon: <X size={14} className="text-danger" /> },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-line/50 last:border-0 group">
                        <div className="flex items-center gap-2">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">{row.icon}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.l}</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-tight text-text text-right">{row.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest text-center">
                        Review the process before paying.
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — Direct Answer Block */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Is Yaga Calls Worth Reviewing?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Yes. Yaga Calls should be reviewed before joining premium because crypto signal providers vary heavily in quality, risk language, and Telegram safety.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Yaga Calls positions itself around structured setup notes, market narrative research, technical structure, entry zones, targets, invalidation, and selected proof examples. Traders should review the free Telegram group, method, proof, and risk disclosure before deciding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — What Is Yaga Calls? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">What is <br /><span className="text-primary">Yaga Calls?</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Yaga Calls should be judged by its process, not by hype.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-center text-text-muted leading-relaxed">
              <p>
                Yaga Calls is a Telegram-first crypto signal and market analysis provider built around structured setup ideas. The service focuses on market narratives, technical setup context, entry zones, target planning, invalidation logic, and risk-aware signal notes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 not-prose">
                {[
                  { t: "Not a Pump Group", d: "Focused on research and technical structure, not hype-driven alerts.", icon: <ShieldCheck className="text-primary" /> },
                  { t: "No Guarantees", d: "Does not promise profit or fixed win rates. Trading involves risk.", icon: <X className="text-danger" /> },
                  { t: "Method-First", d: "The value is in the structured signal note delivered through Telegram.", icon: <FileText className="text-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mx-auto">
                      {item.icon}
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-text">{item.t}</h4>
                    <p className="text-[10px] text-text-muted font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Method</Link>
              <Link href="/telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Telegram Signal Guide</Link>
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Premium Access</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — Review Summary Table */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Yaga Calls <br /><span className="text-primary">Review Summary</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold">
                A good review asks: "Can I evaluate the process clearly?"
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Review Area</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Yaga Calls Standard</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">What to Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { a: "Service Type", s: "Telegram-first crypto signals and analysis.", c: "Does this style fit your trading routine?" },
                    { a: "Signal Structure", s: "Structured notes with entry, target, invalidation.", c: "Are signals clear enough for your risk process?" },
                    { a: "Method", s: "Narrative research, technicals, and risk context.", c: "Read the method page before joining premium." },
                    { a: "Proof", s: "Selected historical proof snapshots.", c: "Treat proof as context, not a future guarantee." },
                    { a: "Pricing", s: "Premium plans with manual onboarding.", c: "Review pricing only after the method is clear." },
                    { a: "Renewal Rate", s: "90% Quarterly Renewal Rate.", c: "High retention implies consistent value for members." },
                    { a: "Risk Language", s: "No guaranteed-profit framing; visible disclaimers.", c: "Confirm the provider does not sell certainty." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.a}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.s}</td>
                      <td className="px-8 py-8 text-xs text-primary font-bold uppercase tracking-tight">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — How It Works */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">The Decision <br /><span className="text-primary">Path</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Observe, verify, then decide.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { s: "1", t: "Join Free Telegram", d: "Observe public communication and market tone before paying." },
                { s: "2", t: "Read the Method", d: "Understand how narratives, technicals, and risk define the signal." },
                { s: "3", t: "Review Proof Examples", d: "Treat historical snapshots as educational context, not promises." },
                { s: "4", t: "Compare Pricing", d: "Decide whether paid access fits your budget and trading seriousness." },
                { s: "5", t: "Manual Onboarding", d: "Access premium only through official, verified Telegram routes." },
                { s: "6", t: "Use Risk Management", d: "Traders remain responsible for sizing and stop-loss decisions." }
              ].map((step, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] flex items-center gap-8 group hover:border-primary/40 transition-colors">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors leading-none">{step.s}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black uppercase tracking-widest text-text">{step.t}</h4>
                    <p className="text-[11px] text-text-muted font-bold leading-tight">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center pt-8 border-t border-line">
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Review Proof</Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Compare Plans</Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Official Contact</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Method Review */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Method <br /><span className="text-primary">Review</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Structure matters more than the app.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Narrative Research", d: "Scanning market stories and sector rotation catalysts.", icon: <Search /> },
                { t: "Technical Structure", d: "Validating setups through chart structure and volume.", icon: <Activity /> },
                { t: "Entry Zone", d: "Defining price areas where setups begin making sense.", icon: <Target /> },
                { t: "Invalidation", d: "Defining exactly where a trade idea becomes wrong.", icon: <ShieldAlert /> },
                { t: "Target Mapping", d: "Planning review areas, not guaranteed price outcomes.", icon: <TrendingUp /> },
                { t: "Risk Context", d: "Directly addressing volatility in signal notes.", icon: <AlertTriangle /> },
                { t: "Telegram Delivery", d: "Fast, mobile-first delivery for quick execution.", icon: <Zap /> },
                { t: "Onboarding Safety", d: "Manual, verified onboarding to reduce scam risk.", icon: <Lock /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 group hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                    {card.icon}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-text leading-tight">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the full Yaga Calls Method →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Proof Review */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Proof <br /><span className="text-primary">Review</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Proof should reduce uncertainty, not create fake certainty.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Weak Proof</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Responsible Proof</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { w: "Only winning screenshots.", r: "Shows full signal context and reason." },
                    { w: "No dates or setup logic.", r: "Provides timing and setup background." },
                    { w: "No risk discussion.", r: "Mentions risk and setup limitations." },
                    { w: "Implies future profit.", r: "Clarifies past results are not guarantees." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight border-r border-line/50">{row.w}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center pt-8">
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Review selected proof examples →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Pricing Review */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Pricing <br /><span className="text-primary">Review</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Do not buy because of urgency. Buy because of fit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <p className="text-text font-bold">Premium plans with high retention metrics.</p>
                <div className="space-y-4">
                  <div className="p-4 bg-surface-deep border border-line rounded-2xl flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Quarterly Renewal</span>
                    <span className="text-lg font-black text-primary">90%</span>
                  </div>
                  <div className="p-4 bg-surface-deep border border-line rounded-2xl flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Total Investors</span>
                    <span className="text-lg font-black text-text">3,500+</span>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed">
                  Yaga Calls offers quarterly, half-yearly, and yearly plans, with a strong focus on lifetime member satisfaction. Renewal rates reflect the consistency of the structured signal method.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton 
                    href="/pricing" 
                    trackingLabel="sec_review_pricing"
                  >
                    Compare Plans
                  </CTAButton>
                  <CTAButton 
                    href="/contact" 
                    variant="secondary"
                    trackingLabel="sec_review_onboarding"
                  >
                    Manual Onboarding
                  </CTAButton>
                </div>
              </div>

              <div className="p-8 bg-surface-deep border border-line rounded-[40px] space-y-6">
                {[
                  { q: "Free First?", a: "Start in free Telegram." },
                  { q: "What's Included?", a: "Structured signal access." },
                  { q: "Official Payment?", a: "Manual onboarding only." },
                  { q: "Retention?", a: "90% renewal rate." }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-line/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{item.q}</span>
                    <span className="text-xs font-black text-primary uppercase">{item.a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Telegram Review */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Telegram <br /><span className="text-primary">Review</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                The app is for speed. The method is for quality.
              </p>
            </div>

            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 text-primary">
                  <ShieldAlert size={24} />
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">Safety Review</h2>
                </div>
                <p className="text-xl text-text leading-tight font-bold">Use official routes only.</p>
                <p className="text-text-muted leading-relaxed max-w-2xl">
                  Telegram is useful for fast delivery but creates impersonation risk. Only use links from this website. Do not trust random direct messages or unofficial payment requests.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {[
                  "No trust for random DMs",
                  "Verify Group / Admin identity",
                  "Manual onboarding only",
                  "Official links from website",
                  "Ask support via official route",
                  "Risk-aware signal notes"
                ].map((check, i) => (
                  <div key={i} className="p-4 bg-background border border-line rounded-2xl flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-text">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Strengths */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-center">Yaga Calls <br /><span className="text-primary">Strengths</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { s: "Telegram-First", d: "Fast, mobile-focused signal delivery layer." },
                { s: "Structured Notes", d: "Every signal includes entry, targets, and invalidation." },
                { s: "Narrative Angle", d: "Scanning sectoral stories before chart technicals." },
                { s: "Manual Onboarding", d: "Reduced scam risk via verified Telegram contact." },
                { s: "High Retention", d: "90% quarterly renewal rate shows consistency." },
                { s: "Risk Awareness", d: "Visible disclaimers and risk-led signal framing." },
                { s: "Free Observation", d: "Observe tone and method before joining premium." },
                { s: "Institutional Size", d: "Serving thousands of active paid subscribers." }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-3 group hover:border-primary/40 transition-colors">
                  <div className="flex gap-3 items-center text-primary">
                    <CheckCircle2 size={18} />
                    <h4 className="text-[10px] font-black uppercase tracking-widest leading-tight">{card.s}</h4>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Limitations */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-danger/5 border border-danger/20 rounded-[48px] space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 text-danger">
                  <AlertTriangle size={24} />
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">Limitations <br />& Risks</h2>
                </div>
                <p className="text-xl text-text leading-tight font-bold uppercase tracking-tight">Yaga Calls is not risk-free.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    { t: "No Guaranteed Profit", d: "Markets have no certain outcomes." },
                    { t: "Personal Risk Management", d: "Traders must manage sizing and stops." },
                    { t: "Execution Risk", d: "Late entries can change risk-to-reward." },
                    { t: "Volatility Gaps", d: "Fast moves can bypass entry/target zones." }
                  ].map((lim, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-text">{lim.t}</h4>
                      <p className="text-[11px] text-text-muted font-bold italic">{lim.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Best Fit */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Best For</h3>
              <ul className="space-y-4">
                {[
                  "Process-led serious traders",
                  "Traders who want deep context",
                  "Telegram-first signal users",
                  "Investors who manage their own risk",
                  "Users who observe before paying"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-text-muted">Not For</h3>
              <ul className="space-y-4">
                {[
                  "Guaranteed profit seekers",
                  "No-loss signal wishers",
                  "Pump-style group chasers",
                  "Emotional risk takers",
                  "Users who avoid stop-losses"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                    <X className="text-danger flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Comparison Table */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Yaga Calls vs <br /><span className="text-primary">Typical Groups</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                The difference is the standard.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Typical Groups</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Yaga Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Main Message", t: "Buy now, urgent entry, hype.", y: "Structured notes with reason." },
                    { f: "Invalidation", t: "Usually missing or ignored.", y: "Core part of every setup." },
                    { f: "Risk Language", t: "Often ignored for hype.", y: "Visible disclaimers and notes." },
                    { f: "Onboarding", t: "Random DMs or unclear paths.", y: "Manual official onboarding." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-[10px] font-black text-text-muted border-r border-line/50 uppercase tracking-widest">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-text font-medium">{row.t}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Is It Legit? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Is Yaga Calls <br /><span className="text-primary">Legit?</span></h2>
              <p className="text-xl text-text-muted leading-relaxed font-bold">
                Evaluate legitimacy through visible process and transparent expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { l: "Method Explainer", u: "/method" },
                { l: "Proof Examples", u: "/proof" },
                { l: "Transparent Pricing", u: "/pricing" },
                { l: "Official Onboarding", u: "/contact" },
                { l: "Risk Disclosure", u: "/risk-disclosure" },
                { l: "Free Observation Path", u: "Telegram" }
              ].map((item, i) => (
                <Link key={i} href={item.u.startsWith('/') ? item.u : '#'} className="p-6 bg-surface-deep border border-line rounded-2xl flex justify-between items-center hover:border-primary/40 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text">{item.l}</span>
                  <ArrowRight size={14} className="text-primary" />
                </Link>
              ))}
            </div>
            
            <p className="text-center text-[10px] text-text-muted/60 uppercase tracking-widest font-black pt-8">
              "A serious provider should not fear observation."
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — Decision Path */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">How to <br /><span className="text-primary">Evaluate</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { t: "Observe Tone", d: "Join the free Telegram to check communication." },
                { t: "Audit Method", d: "Review the signal logic on the method page." },
                { t: "Check Risk", d: "Understand what happens if a setup fails." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-surface-deep rounded-2xl flex items-center justify-center mx-auto text-primary font-black">{i + 1}</div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-text">{item.t}</h4>
                  <p className="text-[10px] text-text-muted font-bold leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 15 — Verdict */}
      <Section className="bg-background py-24 border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto p-12 md:p-20 bg-surface-deep border border-line rounded-[64px] text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Review <br /><span className="text-primary">Verdict</span></h2>
            <div className="prose prose-invert prose-lg max-w-2xl mx-auto">
              <p className="text-text font-bold">Best for traders who value structure more than noise.</p>
              <p className="text-text-muted leading-relaxed italic">
                Yaga Calls is worth evaluating if you want Telegram-first structured signal notes and are willing to review the process before joining premium. It is not for users who want guaranteed profit or no-loss trading.
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="text-primary fill-primary" />)}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 16 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Review. Verify. <br />
              <span className="text-primary">Then Decide.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              Join the free Telegram to observe the research style and signal structure. No pressure. No hype.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_review_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_review_method"
              className="px-10 py-5 text-base"
            >
              Read Method
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Compare Plans</Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Review Proof</Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">Official Contact</Link>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
