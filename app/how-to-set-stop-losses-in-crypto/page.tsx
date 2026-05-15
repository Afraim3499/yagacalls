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
  Calculator,
  BarChart3,
  Lock,
  Eye,
  Activity,
  UserCheck,
  FileText,
  Navigation,
  Compass,
  Briefcase,
  HelpCircle,
  ShieldAlert
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Stop-Losses in Crypto | Invalidation & Risk",
  description: "Learn how to set crypto stop-losses using invalidation, market structure, volatility, position sizing and risk management before entering a trade.",
  alternates: {
    canonical: "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto",
  },
  openGraph: {
    title: "How to Set Stop-Losses in Crypto",
    description: "A serious guide to crypto stop-loss placement: invalidation, structure, volatility, position sizing, leverage risk, Telegram signals and common mistakes.",
    type: "article",
    url: "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto",
  }
};

export default function StopLossPillarPage() {
  const faqs = [
    {
      question: "What is a stop-loss in crypto?",
      answer: "A stop-loss is an order or planned exit level used to limit downside when a crypto trade moves against the trader. It helps define risk before entry, but it does not guarantee perfect protection."
    },
    {
      question: "How do I set a stop-loss in crypto?",
      answer: "Set a crypto stop-loss by identifying invalidation first, then checking market structure, volatility, stop distance, position size, leverage risk, and the amount of account risk you are prepared to accept."
    },
    {
      question: "What is the difference between stop-loss and invalidation?",
      answer: "A stop-loss is the execution level used to exit a trade. Invalidation is the point where the original trade idea becomes wrong. Invalidation explains why to exit; the stop-loss controls how to exit."
    },
    {
      question: "Should I use the same stop-loss percentage on every crypto trade?",
      answer: "Using the same percentage on every trade can be risky because different crypto assets have different volatility, liquidity, structure, and leverage conditions. A stop-loss should fit the setup."
    },
    {
      question: "What is a structure-based stop-loss?",
      answer: "A structure-based stop-loss is placed around a level that would invalidate the trade idea, such as below support for a long trade or above resistance for a short trade."
    },
    {
      question: "What is a volatility-based stop-loss?",
      answer: "A volatility-based stop-loss accounts for how much an asset normally moves. It helps avoid placing stops so tight that normal market movement triggers the exit before the setup has room to work."
    },
    {
      question: "How does position sizing affect stop-losses?",
      answer: "Position sizing and stop-loss distance are connected. If the stop is far from the entry, the position size usually needs to be smaller to keep account risk controlled."
    },
    {
      question: "Are stop-losses safe in leveraged crypto trading?",
      answer: "Stop-losses can help control downside, but leverage increases risk. Fast markets, liquidation levels, slippage, and volatility can still create losses beyond what the trader expected."
    },
    {
      question: "Should I follow a Telegram signal if the entry zone already passed?",
      answer: "Usually, traders should be careful if the entry zone has already passed. Entering late can change the stop distance, position size, risk-to-reward, and overall trade quality."
    },
    {
      question: "Does Yaga Calls include stop-loss context?",
      answer: "Yaga Calls focuses on risk-aware signal notes with entry zones, target planning, invalidation logic, stop-loss context, position sizing awareness, and Telegram-first delivery."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto#webpage",
        "url": "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto",
        "name": "How to Set Stop-Losses in Crypto: Invalidation & Volatility",
        "description": "The definitive guide to crypto stop-loss placement, covering invalidation, structure, and position sizing.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto#article",
        "headline": "How to Set Stop-Losses in Crypto",
        "description": "Learn the professional method for setting stops using market structure and invalidation logic.",
        "author": { "@type": "Organization", "name": "Yaga Calls" },
        "publisher": { "@type": "Organization", "name": "Yaga Calls" },
        "mainEntityOfPage": { "@id": "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto#webpage" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.yagacalls.com/academy" },
          { "@type": "ListItem", "position": 3, "name": "How to Set Stop-Losses", "item": "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/how-to-set-stop-losses-in-crypto#faq",
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
      <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-surface-deep overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,183,141,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 relative z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Stop-Loss Guide
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  How to Set <br />
                  <span className="text-primary">Stop-Losses</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  A boundary, not a prediction.
                </p>
                <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A crypto stop-loss should not be a random percentage. It should be connected to invalidation, market structure, volatility, and position sizing.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed border-l-2 border-primary/30 pl-4 max-w-xl mx-auto lg:mx-0 font-medium">
                  Stop-losses can reduce downside, but they do not guarantee protection from volatility, slippage, gaps, or execution risk.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_sl_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_sl_method"
                >
                  Read the Method
                </CTAButton>
                <CTAButton 
                  href="/crypto-risk-management" 
                  variant="secondary"
                  className="hidden sm:inline-flex"
                >
                  Risk Management Guide
                </CTAButton>
              </div>

              <div className="pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 max-w-md mx-auto lg:mx-0">
                  Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
                </p>
              </div>
            </div>

            {/* Right side: Stop-Loss Planning Snapshot Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative">
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase tracking-widest text-text border-b border-line pb-4 text-center">
                    Stop-Loss Planning
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { l: "Entry", d: "Where the trade begins.", icon: <ArrowRight size={14} /> },
                      { l: "Invalidation", d: "Where the idea is wrong.", icon: <AlertTriangle size={14} className="text-warning" /> },
                      { l: "Stop-Loss", d: "Where downside is controlled.", icon: <ShieldCheck size={14} className="text-primary" /> },
                      { l: "Position Size", d: "Exposure that fits the risk.", icon: <Calculator size={14} /> },
                      { l: "Volatility", d: "Normal price movement depth.", icon: <Activity size={14} /> },
                      { l: "Leverage", d: "Danger multiplier check.", icon: <Zap size={14} className="text-warning" /> }
                    ].map((row, i) => (
                      <div key={i} className="flex gap-4 items-center p-3 rounded-2xl bg-surface-deep/40 border border-line transition-colors hover:bg-surface-deep/60">
                        <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-primary/80">
                          {row.icon}
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-text leading-none mb-1">{row.l}</h4>
                          <p className="text-[11px] text-text-muted font-medium leading-tight">{row.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary italic">
                      Plan the stop before the entry.
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
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">How Do You Set a Stop-Loss in Crypto?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Set a crypto stop-loss by first identifying where the trade idea becomes invalid, then checking market structure, volatility, stop distance, position size, and leverage risk.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A stop-loss should be placed where the setup is no longer valid, not at a random percentage chosen after entry. The stop should also match the amount of account risk the trader is prepared to accept before entering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — What Is a Stop-Loss in Crypto? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">The Definition <br /><span className="text-primary">of Protection</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                A stop-loss is an order used to limit downside when a trade moves against the plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t: "Risk Boundary", d: "Defines where the trade should no longer continue.", icon: <ShieldCheck /> },
                { t: "Execution Tool", d: "Helps control downside, though subject to slippage.", icon: <Zap /> },
                { t: "Discipline Check", d: "Tests whether you are following a plan or a hope.", icon: <UserCheck /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center text-primary">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-text">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the full crypto risk management guide →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — Stop-Loss vs Invalidation */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Stop-Loss vs <br /><span className="text-primary">Invalidation</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold">
                Invalidation explains why to exit. The stop-loss controls how to exit.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Concept</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Meaning</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Main Job</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Common Mistake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { c: "Stop-Loss", m: "The specific exit price level or order.", j: "Limit downside.", e: "Placing it randomly." },
                    { c: "Invalidation", m: "The area where the thesis logic fails.", j: "Define failure.", e: "Ignoring it out of hope." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.c}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.m}</td>
                      <td className="px-8 py-8 text-xs text-text font-bold uppercase tracking-tight">{row.j}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                See how risk-managed signals use invalidation →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Why Random Stop-Losses Fail */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Why Random <br /><span className="text-primary">Stops Fail</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">A stop chosen after entry is an emotional stop, not a risk plan.</p>
                <p className="text-text-muted leading-relaxed">
                  Fixed percentage stops ignore the volatility of the specific asset. A 2% stop might work for BTC but will get hunted instantly on a volatile altcoin.
                </p>
              </div>
            </div>

            <div className="p-10 bg-surface-deep border border-danger/20 rounded-[48px] space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-danger">Common Errors</h4>
              <ul className="space-y-4">
                {[
                  "Using the same % for every coin",
                  "Stops too tight to 'save' money",
                  "Stops too wide to avoid being 'wrong'",
                  "Ignoring liquidity sweep zones",
                  "Moving the stop after a price dip"
                ].map((err, i) => (
                  <li key={i} className="flex gap-4 items-center text-[11px] font-black uppercase tracking-tight text-text-muted">
                    <X className="text-danger flex-shrink-0" size={14} /> {err}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — The 5-Step Framework */}
      <Section className="bg-background py-24 border-t border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The 5-Step <br /><span className="text-primary">Placement Framework</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                A good stop starts with the trade thesis, not the trader's fear.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { s: "1", t: "Idea", d: "Identify the reason for the setup.", icon: <FileText /> },
                { s: "2", t: "Invalid", d: "Locate where the thesis fails.", icon: <AlertTriangle /> },
                { s: "3", t: "Vol", d: "Account for normal price noise.", icon: <Activity /> },
                { s: "4", t: "Size", d: "Adjust units to fit account risk.", icon: <Calculator /> },
                { s: "5", t: "Commit", d: "Verify discipline before entry.", icon: <UserCheck /> }
              ].map((step, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 relative group hover:border-primary/40 transition-colors text-center md:text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-sm font-black mx-auto md:mx-0 group-hover:bg-primary group-hover:text-background transition-colors">
                    {step.s}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-text mb-2">{step.t}</h4>
                    <p className="text-[11px] text-text-muted font-medium leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Structure-Based Stop-Losses */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Structure-Based <br /><span className="text-primary">Placement</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold">Place stops where market behavior proves you wrong.</p>
                  <p className="text-text-muted leading-relaxed">
                    A structure-based stop is placed around levels like support, resistance, swing highs, or trend boundaries. If price moves past these, the logic of the trade is broken.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-background border border-line rounded-[32px] space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Long Setup</h4>
                  <ul className="space-y-2 text-[11px] text-text-muted font-bold uppercase tracking-tight">
                    <li>• Below Support</li>
                    <li>• Below Swing Low</li>
                    <li>• Below Range Bottom</li>
                  </ul>
                </div>
                <div className="p-8 bg-background border border-line rounded-[32px] space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-warning">Short Setup</h4>
                  <ul className="space-y-2 text-[11px] text-text-muted font-bold uppercase tracking-tight">
                    <li>• Above Resistance</li>
                    <li>• Above Swing High</li>
                    <li>• Above Range Top</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Volatility-Based Stop-Losses */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight">Volatility-Based <br /><span className="text-primary">Distance</span></h2>
                <p className="text-text-muted leading-relaxed font-medium">
                  Volatile coins need wider stops. Liquid markets need tighter stops. If your stop ignores ATR (Average True Range) or wick depth, you'll be stopped out before the thesis plays out.
                </p>
                <div className="p-4 bg-background border border-primary/20 rounded-xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Core Principle:</p>
                  <p className="text-xs text-text font-bold uppercase">Wider volatility = Smaller position size.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-background rounded-3xl border border-line space-y-2">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-black">BTC-Level Volatility</p>
                  <p className="text-xs font-black text-primary">Tighter Stops Possible</p>
                </div>
                <div className="p-6 bg-background rounded-3xl border border-line space-y-2">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-black">Small-Cap Alt Volatility</p>
                  <p className="text-xs font-black text-warning">Wider Stops Required</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Percentage-Based Stops Table */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Comparing <br /><span className="text-primary">Stop Types</span></h2>
              <p className="text-xl text-text-muted font-bold">Simple is useful. Random is not.</p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Stop Type</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Strength</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Weakness</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Best Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { t: "Percentage Stop", s: "Simple and fast.", w: "Ignores structure.", b: "Rule-based plan." },
                    { t: "Structure Stop", s: "Linked to thesis.", w: "Requires analysis.", b: "Technical setups." },
                    { t: "Volatility Stop", s: "Accounts for noise.", w: "Harder to calculate.", b: "Fast altcoin trades." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.t}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.s}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.w}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Stop Distance and Position Sizing */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Size <br /><span className="text-primary">Connections</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold">A stop-loss without position sizing is only half a risk plan.</p>
                  <p className="text-text-muted leading-relaxed">
                    If the stop is far from entry, the position size must be smaller to keep the total dollar loss controlled. Ignoring this connection is how accounts get liquidated.
                  </p>
                </div>
              </div>

              <div className="p-10 bg-background border border-line rounded-[48px] space-y-6 shadow-2xl">
                <div className="p-6 bg-surface-deep rounded-2xl border border-primary/20 text-center">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-black mb-2">Math Bridge</p>
                  <p className="text-lg font-black text-primary uppercase">Units = Risk $ ÷ Stop Distance</p>
                </div>
                <div className="space-y-4 pt-4 border-t border-line text-center">
                  <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                    Learn more about Risk Per Trade →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Leverage Risk */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-16 bg-danger/5 border border-danger/20 rounded-[48px] space-y-8 relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-3 text-danger justify-center md:justify-start">
                  <Zap size={24} />
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Leverage Warning</h2>
                </div>
                <p className="text-xl text-text leading-tight font-bold">Leverage does not make a stop-loss better. It makes mistakes faster.</p>
                <p className="text-text-muted leading-relaxed max-w-2xl">
                  In leveraged trades, liquidation can happen before your stop is ever hit. High leverage reduces your room for error and magnifies emotional pressure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                {["Know Liquidation Level", "Plan Before Entry", "Adjust Position Size"].map((check, i) => (
                  <div key={i} className="p-4 bg-background border border-danger/10 rounded-2xl flex items-center gap-3">
                    <ShieldAlert size={16} className="text-danger" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-text">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Telegram Signal Logic */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Signals & <br /><span className="text-primary">Execution Responsibility</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">
                A signal provides structure. The trader still controls execution risk.
              </p>
            </div>

            <div className="p-10 bg-background border border-line rounded-[48px] space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-danger">The Danger Zone</h4>
                  <ul className="space-y-4">
                    {[
                      "Entering late after price moved",
                      "Blindly copying without checking",
                      "Ignoring invalidation context",
                      "Using too much leverage"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                        <X className="text-danger" size={14} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6 border-l border-line pl-12 hidden md:block">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">The Pro Zone</h4>
                  <ul className="space-y-4">
                    {[
                      "Verify Entry Zone validity",
                      "Confirm Invalidation level",
                      "Calculate Size correctly",
                      "Check account risk %"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-tight text-text">
                        <CheckCircle2 className="text-primary" size={14} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Understand Telegram crypto signal delivery →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Common Mistakes */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Common <br /><span className="text-danger">Stop-Loss Mistakes</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Setting stops after entry",
                "Fixed % for every coin",
                "Stops placed too tight",
                "Moving stops emotionally",
                "Ignoring invalidation",
                "Removing the stop",
                "Obvious liquidity levels",
                "Ignoring ATR volatility",
                "Treating stops as guarantees"
              ].map((mistake, i) => (
                <div key={i} className="flex gap-4 p-6 bg-surface-deep rounded-2xl border border-line group hover:border-danger/30 transition-colors items-center">
                  <X className="text-danger w-5 h-5 shrink-0" />
                  <p className="text-[11px] font-bold uppercase tracking-tight text-text">{mistake}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-text-muted italic opacity-60">
              "The worst mistake is not being stopped out. It's refusing to admit you're wrong."
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Pre-Trade Checklist */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Stop-Loss <br /><span className="text-primary">Checklist</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-background border border-line rounded-[48px]">
              {[
                "The trade idea is clear.",
                "The entry zone is still valid.",
                "Invalidation is defined.",
                "Stop-loss area is planned.",
                "Stop distance is calculated.",
                "Position size matches risk.",
                "Leverage is controlled.",
                "Volatility was considered.",
                "Risk-to-reward is 1:2+.",
                "The source is official Yaga.",
                "Loss is emotionally acceptable.",
                "Stop won't be moved."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0">
                  <span className="text-primary font-black">{i + 1}.</span> {item}
                </div>
              ))}
            </div>

            <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-text-muted leading-relaxed max-w-xl mx-auto">
              If the stop-loss plan is unclear, the trade is not ready.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — How Yaga Calls Uses It */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Yaga <br /><span className="text-primary">Signal Structure</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">
                Yaga Calls does not make stop-losses risk-free. It makes risk part of the setup conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Market Reason", d: "Why does the setup deserve attention?", icon: <Compass /> },
                { t: "Entry Zone", d: "Where the idea makes sense without chasing.", icon: <Target /> },
                { t: "Target Planning", d: "Where the setup should be reviewed.", icon: <Navigation /> },
                { t: "Invalidation", d: "Where the trade logic becomes wrong.", icon: <AlertTriangle /> },
                { t: "Stop-Loss Context", d: "Downside control if the setup fails.", icon: <ShieldCheck /> },
                { t: "Sizing Awareness", d: "Does trade size match your risk limit?", icon: <Calculator /> },
                { t: "Premium Delivery", d: "Fast, structured Telegram signal notes.", icon: <Zap /> },
                { t: "Proof Audit", d: "Observe selected historical snapshots.", icon: <Eye /> }
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

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Yaga Calls Method</Link>
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">See risk-managed signal examples</Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Review proof examples</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 15 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,183,141,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Plan the Stop. <br />
              <span className="text-primary">Trade the Plan.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              A crypto trade is not complete when the entry is found. It is complete when the risk plan is understood. Join the free Telegram to see how Yaga structures setup ideas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_sl_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_sl_method"
              className="px-10 py-5 text-base"
            >
              Read the Method
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Risk Management Guide
              </Link>
              <Link href="/leverage-trading-calculator" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Leverage Calculator
              </Link>
              <Link href="/liquidation-price-calculator" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Liquidation Calculator
              </Link>
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Risk-Managed Signals
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Proof Examples
              </Link>
            </div>
            <p className="mt-10 text-[10px] text-text-muted/60 italic uppercase tracking-widest leading-relaxed max-w-md mx-auto">
              Yaga Calls provides educational crypto market analysis and signal ideas only. Crypto trading involves risk. Past performance does not guarantee future results.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
