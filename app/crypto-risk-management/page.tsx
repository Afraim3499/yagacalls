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
  TrendingDown, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Calculator,
  ShieldAlert,
  Dna,
  PieChart,
  Activity,
  UserCheck,
  FileText,
  Lock,
  Eye,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Risk Management | Position Sizing, Stops & Survival",
  description: "Learn crypto risk management with position sizing, stop-losses, invalidation, leverage control, drawdown rules, and risk-aware signal evaluation.",
  alternates: {
    canonical: "https://www.yagacalls.com/crypto-risk-management",
  },
  openGraph: {
    title: "Crypto Risk Management Guide",
    description: "A serious guide to crypto trading risk: position sizing, stop-losses, invalidation, leverage, drawdown, emotional control, and Yaga Calls’ risk-aware signal structure.",
    type: "article",
    url: "https://www.yagacalls.com/crypto-risk-management",
  }
};

export default function RiskManagementPillarPage() {
  const faqs = [
    {
      question: "What is crypto risk management?",
      answer: "Crypto risk management is the process of controlling potential losses before entering a trade. It includes position sizing, stop-loss planning, invalidation, leverage control, drawdown limits, and emotional discipline."
    },
    {
      question: "Why is risk management important in crypto trading?",
      answer: "Risk management is important because crypto markets are volatile, trade 24/7, and can move quickly. Without a risk plan, one bad trade or over-leveraged position can damage the whole account."
    },
    {
      question: "How much should I risk per crypto trade?",
      answer: "There is no universal number for every trader. Many disciplined traders study fixed risk limits such as 0.5% to 2% of account equity per trade, but the right level depends on account size, experience, volatility, leverage, and personal risk tolerance."
    },
    {
      question: "What is position sizing in crypto?",
      answer: "Position sizing decides how large a trade should be based on account size, planned risk, entry price, and stop-loss distance. It helps traders avoid risking too much on one setup."
    },
    {
      question: "What is the difference between stop-loss and invalidation?",
      answer: "A stop-loss is an execution level used to limit downside. Invalidation is the point where the original trade idea becomes wrong. Invalidation defines the thesis failure; the stop-loss controls the trade."
    },
    {
      question: "Is leverage risky in crypto?",
      answer: "Yes. Leverage increases both potential gains and potential losses. It can also increase liquidation risk and emotional pressure, especially in volatile crypto markets."
    },
    {
      question: "What is risk-to-reward in crypto trading?",
      answer: "Risk-to-reward compares the potential loss of a trade with the potential target. For example, risking $100 to target $300 creates a 1:3 risk-to-reward setup. It does not guarantee success."
    },
    {
      question: "How should I manage risk when using Telegram crypto signals?",
      answer: "Check whether the entry zone is still valid, identify invalidation, calculate position size, control leverage, and confirm that the signal came from an official source before acting."
    },
    {
      question: "Does Yaga Calls remove trading risk?",
      answer: "No. Yaga Calls does not remove trading risk or guarantee profit. It provides educational market analysis and structured signal ideas with risk-aware context."
    },
    {
      question: "What should I check before entering a crypto trade?",
      answer: "Check account size, planned risk amount, entry zone, stop-loss or invalidation, position size, leverage, risk-to-reward, volatility, signal source, and emotional state before entering a trade."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/crypto-risk-management#webpage",
        "url": "https://www.yagacalls.com/crypto-risk-management",
        "name": "Crypto Risk Management: Position Sizing, Stops & Survival",
        "description": "The definitive guide to crypto risk management, covering position sizing, stop-losses, and account survival.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/crypto-risk-management#article",
        "headline": "Crypto Risk Management: The Discipline of Survival",
        "description": "Learn how to protect your trading account using position sizing, stops, and invalidation logic.",
        "author": { "@type": "Organization", "name": "Yaga Calls" },
        "publisher": { "@type": "Organization", "name": "Yaga Calls" },
        "mainEntityOfPage": { "@id": "https://www.yagacalls.com/crypto-risk-management#webpage" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/crypto-risk-management#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.yagacalls.com/academy" },
          { "@type": "ListItem", "position": 3, "name": "Crypto Risk Management", "item": "https://www.yagacalls.com/crypto-risk-management" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/crypto-risk-management#faq",
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
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 relative z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Risk Management Guide
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Crypto <br />
                  <span className="text-primary">Risk Management</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  The first job of a trader is survival.
                </p>
                <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Crypto risk management is the discipline of deciding how much you can lose, where a trade idea becomes wrong, and how to protect your account before entering a setup.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed border-l-2 border-primary/30 pl-4 max-w-xl mx-auto lg:mx-0 font-medium italic">
                  "The first goal is not to win every trade. The first goal is to survive long enough to make better decisions."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_risk_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_risk_method"
                >
                  Read the Method
                </CTAButton>
                <CTAButton 
                  href="/position-sizing-calculator" 
                  variant="secondary"
                  className="hidden sm:inline-flex"
                >
                  Position Sizing Tool
                </CTAButton>
                <CTAButton 
                  href="/leverage-trading-calculator" 
                  variant="secondary"
                  className="hidden md:inline-flex"
                >
                  Leverage Calculator
                </CTAButton>
                <CTAButton 
                  href="/liquidation-price-calculator" 
                  variant="secondary"
                  className="hidden lg:inline-flex"
                >
                  Liquidation Calculator
                </CTAButton>
              </div>

              <div className="pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 max-w-md mx-auto lg:mx-0">
                  Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
                </p>
              </div>
            </div>

            {/* Right side: Risk Management Snapshot Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative">
                <div className="space-y-6">
                  <h3 className="text-lg font-black uppercase tracking-widest text-text border-b border-line pb-4 text-center">
                    Risk Management Snapshot
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { l: "Risk Per Trade", d: "How much is exposed?", icon: <Activity size={16} /> },
                      { l: "Entry Zone", d: "Where does it make sense?", icon: <Target size={16} /> },
                      { l: "Invalidation", d: "Where is the idea wrong?", icon: <AlertTriangle size={16} className="text-warning" /> },
                      { l: "Stop-Loss", d: "Where is downside capped?", icon: <ShieldCheck size={16} className="text-primary" /> },
                      { l: "Position Size", d: "How much to trade?", icon: <PieChart size={16} /> },
                      { l: "Leverage", d: "Account danger multiplier?", icon: <Zap size={16} /> }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-surface-deep/50 border border-line flex gap-3 items-start">
                        <div className="p-2 bg-background rounded-lg text-primary">{item.icon}</div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-text leading-none mb-1">{item.l}</h4>
                          <p className="text-[11px] text-text-muted font-medium leading-tight">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary italic">
                      Risk is planned before entry, not after panic.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — Direct Answer Block */}
      <Section className="bg-background border-b border-line overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] relative">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is Crypto Risk Management?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Crypto risk management is the process of controlling how much capital is exposed before entering a trade. It includes position sizing, stop-loss planning, invalidation, leverage control, risk-to-reward assessment, drawdown limits, and emotional discipline.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Good risk management does not guarantee profit. It helps traders avoid letting one bad decision damage the whole account. It is the bridge between gambling and systematic trading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Why Risk Management Matters More in Crypto */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Why Risk Matters <br /><span className="text-primary">More in Crypto</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                In crypto, being right about the direction is not enough if the position size is wrong.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Volatility", d: "Price can invalidate a setup faster than traditional markets.", icon: <Activity className="text-primary" /> },
                { t: "Leverage", d: "Magnifies both gains and the speed of account damage.", icon: <Zap className="text-warning" /> },
                { t: "Liquidity", d: "Thin markets move aggressively, especially in altcoins.", icon: <Dna className="text-primary" /> },
                { t: "Emotion", d: "FOMO and revenge trading destroy more accounts than bad math.", icon: <ShieldAlert className="text-danger" /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-text">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/what-are-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Learn what crypto signals should include →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — The Core Rule: Account Survival First */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">The Core Rule: <br /><span className="text-primary">Account Survival</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold">The first goal is not to catch every move. It is to avoid letting one trade destroy the account.</p>
                  <p className="text-text-muted leading-relaxed">
                    Account survival creates learning time. Traders who risk too much too soon exit the market before they have the experience to succeed. Small losses are simply the "cost of doing business."
                  </p>
                </div>
              </div>

              <div className="p-10 bg-background border border-primary/20 rounded-[48px] shadow-2xl shadow-primary/5 space-y-8">
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Survivor's Checklist</h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Answer these before every entry:</p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "How much can I lose if this trade fails?",
                    "Where is the trade idea invalid?",
                    "Is my position size too large for my risk?",
                    "Am I using leverage I can handle emotionally?",
                    "Am I following a plan or reacting to urgency?"
                  ].map((check, i) => (
                    <li key={i} className="flex gap-4 items-center p-3 rounded-xl bg-surface-deep/30 border border-line text-[11px] font-black uppercase tracking-tight text-text-muted">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={14} /> {check}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Risk Per Trade Explained */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Risk Per Trade <br /><span className="text-primary">Explained</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                Risk per trade is the percentage of your account you are willing to lose if a setup fails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Calculator size={20} />
                  <h4 className="text-sm font-black uppercase tracking-widest">The Risk Formula</h4>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
                  <p className="text-xs text-text-muted uppercase tracking-[0.2em] mb-2">Planned Loss Amount =</p>
                  <p className="text-2xl font-black text-primary">Account Size × Risk %</p>
                </div>
                <div className="space-y-4 pt-4 border-t border-line">
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    Many disciplined traders study fixed risk limits such as 0.5% to 2% per trade. Framing risk as a percentage keeps your decision-making consistent regardless of account size.
                  </p>
                </div>
              </div>

              <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-6">
                <div className="flex items-center gap-3 text-text">
                  <Activity size={20} />
                  <h4 className="text-sm font-black uppercase tracking-widest">Real-World Example</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-line/50 pb-2">
                    <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Account</span>
                    <span className="text-xs font-black">$1,000</span>
                  </div>
                  <div className="flex justify-between border-b border-line/50 pb-2">
                    <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Risk %</span>
                    <span className="text-xs font-black text-primary">1%</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Max Planned Loss</span>
                    <span className="text-xs font-black text-primary">$10</span>
                  </div>
                </div>
                <p className="text-[10px] text-text-muted/60 italic leading-relaxed uppercase tracking-widest mt-6">
                  If the stop-loss is hit, the loss is capped at $10. Position size must adjust to this limit.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Use Position Sizing Calculator →
              </Link>
              <Link href="/leverage-trading-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Use Leverage Trading Calculator →
              </Link>
              <Link href="/liquidation-price-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Use Liquidation Price Calculator →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Position Sizing Explained */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Position Sizing <br /><span className="text-primary">Mechanics</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold">Position size is not the same as risk amount.</p>
                  <p className="text-text-muted leading-relaxed">
                    Position sizing decides how large a trade should be based on account size, risk percentage, entry price, and stop-loss distance. It prevents traders from risking too much when volatility is high.
                  </p>
                </div>
                <div className="p-6 bg-background border border-line rounded-2xl">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-2">The Formula:</p>
                  <p className="text-lg font-black text-text uppercase">Position Size = <br /><span className="text-primary">Risk Amount ÷ Stop Distance</span></p>
                </div>
              </div>

              <div className="p-10 bg-background border border-line rounded-[40px] space-y-8 shadow-2xl">
                <h4 className="text-sm font-black uppercase tracking-widest text-primary text-center">Step-by-Step Example</h4>
                <div className="space-y-4">
                  {[
                    { l: "Account Size", v: "$2,000" },
                    { l: "Risk (1%)", v: "$20" },
                    { l: "Entry Price", v: "$100" },
                    { l: "Stop-Loss", v: "$95" },
                    { l: "Stop Distance", v: "$5" },
                    { l: "Resulting Position", v: "4 Units ($400)", highlight: true }
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center p-3 rounded-xl border ${row.highlight ? 'bg-primary/10 border-primary/20' : 'border-line/50'}`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.l}</span>
                      <span className={`text-xs font-black ${row.highlight ? 'text-primary' : 'text-text'}`}>{row.v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-center text-text-muted italic leading-relaxed uppercase tracking-widest">
                  Educational example only. Actual trading involves fees and slippage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Stop-Loss vs Invalidation */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Stop-Loss vs <br /><span className="text-primary">Invalidation</span></h2>
              <p className="text-xl text-text-muted leading-relaxed font-bold max-w-2xl mx-auto">
                A stop-loss controls the trade. Invalidation controls the thesis.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Concept</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Meaning</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Main Purpose</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Common Mistake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { c: "Stop-Loss", m: "A price level or order used to exit downside.", p: "Limit capital loss.", e: "Moving it emotionally." },
                    { c: "Invalidation", m: "The point where the setup logic fails.", p: "Define setup failure.", e: "Ignoring it out of hope." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-8 text-sm font-black text-text uppercase tracking-tight border-r border-line/50">{row.c}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.m}</td>
                      <td className="px-8 py-8 text-xs text-text font-bold uppercase tracking-tight">{row.p}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-text-muted opacity-50">
                TODO: Link to /how-to-set-stop-losses-in-crypto after implementation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Risk-to-Reward Ratio */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Risk-to-Reward <br /><span className="text-primary">Ratio</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">A strong ratio does not guarantee winning. It makes winning math easier.</p>
                <p className="text-text-muted leading-relaxed">
                  Risk-to-reward compares potential loss with potential targets. Risking $1 to target $3 creates a 1:3 ratio. A fake 1:10 setup is not better than a realistic 1:2 setup.
                </p>
              </div>
              <div className="flex gap-4 p-6 bg-background border border-line rounded-2xl items-center justify-center">
                <p className="text-sm font-black uppercase tracking-widest text-primary">R:R = Potential Reward ÷ Potential Risk</p>
              </div>
            </div>

            <div className="p-8 bg-background border border-line rounded-[40px] space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-text text-center">Setup Snapshot</h4>
              <div className="space-y-4">
                {[
                  { l: "Entry", v: "$100" },
                  { l: "Stop-Loss", v: "$95 (-$5)" },
                  { l: "Target", v: "$115 (+$15)" },
                  { l: "R:R Ratio", v: "1 : 3", highlight: true }
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center p-3 rounded-xl border ${item.highlight ? 'bg-primary text-background border-primary' : 'border-line/50'}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${item.highlight ? 'text-background' : 'text-text-muted'}`}>{item.l}</span>
                    <span className="text-xs font-black">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Leverage Risk Management */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="p-10 md:p-14 bg-danger/5 border border-danger/20 rounded-[48px] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-danger">
                  <Zap size={24} />
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Leverage Risk Management</h2>
                </div>
                <p className="text-xl text-text leading-tight font-bold">Leverage does not make a bad setup better. It only makes the outcome larger.</p>
                <p className="text-text-muted leading-relaxed">
                  Leverage magnifies exposure. High leverage reduces the room for error and increases liquidation risk. Liquidation can happen before a trade thesis even has time to play out.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-text">Before Using Leverage:</h4>
                  <ul className="space-y-3">
                    {[
                      "Do I know my liquidation level?",
                      "Do I know my stop-loss?",
                      "Is position size based on account risk?",
                      "Can I handle the loss emotionally?"
                    ].map((q, i) => (
                      <li key={i} className="flex gap-3 text-[11px] font-black uppercase tracking-tight text-text-muted">
                        <ArrowRight size={12} className="text-danger flex-shrink-0 mt-0.5" /> {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-background rounded-3xl border border-danger/20 flex flex-col justify-center text-center">
                  <p className="text-[10px] text-danger uppercase tracking-widest font-black mb-2">Liquidation Danger</p>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    Beginners often use leverage to chase gains. Serious traders use leverage to achieve specific position sizes within risk limits.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-danger/10 text-center">
                <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-widest text-danger hover:underline">
                  Read the full risk disclosure →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Drawdown and Losing Streaks */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-tight">Drawdown & <br /><span className="text-primary">Losing Streaks</span></h2>
              <p className="text-xl text-text-muted leading-relaxed font-bold max-w-2xl mx-auto">
                Losing streaks happen. Even good strategies have periods of failure.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Risk Per Trade</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Loss After 5 Hits</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Recovery Difficulty</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted text-center">Emotional Pressure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { r: "0.5%", l: "~2.5%", d: "Low", p: "Low" },
                    { r: "1.0%", l: "~5.0%", d: "Manageable", p: "Moderate" },
                    { r: "2.0%", l: "~10.0%", d: "Higher", p: "High" },
                    { r: "5.0%", l: "~25.0%", d: "Severe", p: "Very High", danger: true }
                  ].map((row, i) => (
                    <tr key={i} className={`hover:bg-primary/5 transition-colors ${row.danger ? 'bg-danger/5' : ''}`}>
                      <td className="px-8 py-6 text-sm font-black text-text border-r border-line/50">{row.r}</td>
                      <td className="px-8 py-6 text-sm text-text-muted font-bold">{row.l}</td>
                      <td className={`px-8 py-6 text-xs font-black uppercase tracking-tight ${row.danger ? 'text-danger' : 'text-text-muted'}`}>{row.d}</td>
                      <td className="px-8 py-6 text-xs text-text-muted text-center uppercase tracking-widest font-black">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-center text-text-muted italic uppercase tracking-widest">
              Educational only. Does not account for compounding, fees, or slippage.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Telegram Signal Risk Management */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Managing Risk With <br /><span className="text-primary">Telegram Signals</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">
                Fast delivery does not remove personal responsibility.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="p-10 bg-background border border-line rounded-[40px] space-y-8">
                <h4 className="text-sm font-black uppercase tracking-widest text-danger">Telegram Risk Factors</h4>
                <ul className="space-y-4">
                  {[
                    "Entering late after price moved",
                    "Blindly copying without context",
                    "Ignoring invalidation notes",
                    "Over-leveraging for 'urgency'",
                    "Following unofficial impersonators",
                    "Acting from FOMO or greed"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X className="text-danger flex-shrink-0" size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-background border border-primary/20 rounded-[40px] space-y-8">
                <h4 className="text-sm font-black uppercase tracking-widest text-primary">Pre-Trade Checklist</h4>
                <ul className="space-y-4">
                  {[
                    "Is the entry zone still valid?",
                    "Where is the invalidation area?",
                    "What is my position size?",
                    "What is my risk per trade?",
                    "Is this official Yaga communication?",
                    "Am I acting calmly?"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Understand Telegram crypto signal delivery →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — How Yaga Calls Uses Risk Context */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Yaga Calls <br /><span className="text-primary">Risk Framework</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
                Yaga Calls does not remove risk. It structures the conversation around risk before action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Market Narrative", d: "Why is attention moving to this setup?", icon: <FileText /> },
                { t: "Technical Structure", d: "Does price action support the thesis?", icon: <Activity /> },
                { t: "Entry Zone", d: "Where does it make sense without chasing?", icon: <Target /> },
                { t: "Target Planning", d: "Where should the setup be reviewed?", icon: <TrendingDown className="rotate-180" /> },
                { t: "Invalidation", d: "Where does the setup logic fail?", icon: <AlertTriangle className="text-warning" /> },
                { t: "Risk Note", d: "Specific context for downside protection.", icon: <ShieldCheck className="text-primary" /> },
                { t: "Telegram Delivery", d: "Clear communication of setup structure.", icon: <Zap className="text-primary" /> },
                { t: "Observation", d: "Observe free access before premium.", icon: <Eye /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-colors group">
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

      {/* SECTION 12 — Crypto Risk Management Checklist */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">The Risk Management <br /><span className="text-primary">Checklist</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-background border border-line rounded-[48px]">
              {[
                "Account size is clear and defined.",
                "Risk percentage is fixed per setup.",
                "Risk amount is calculated before entry.",
                "Entry zone is still valid (not chased).",
                "Invalidation level is clearly identified.",
                "Stop-loss is placed or planned.",
                "Position size matches planned risk.",
                "Leverage exposure is controlled.",
                "Risk-to-reward is realistic (1:2+).",
                "Market volatility is understood.",
                "Telegram source is verified official.",
                "Emotional state is calm and disciplined."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0">
                  <span className="text-primary font-black">{i + 1}.</span> {item}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-text-muted leading-relaxed">
                "If you cannot define the risk, you should not enter the trade."
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Common Crypto Risk Management Mistakes */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Common <br /><span className="text-danger">Risk Mistakes</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { m: "Risking too much per trade", d: "Letting a single failure damage long-term account survival." },
                { m: "Confusing size with risk", d: "Thinking a small position means low risk (even with a huge stop)." },
                { m: "Moving stops emotionally", d: "Moving a stop-loss further away because 'it has to bounce soon.'" },
                { m: "Ignoring Invalidation", d: "Holding a trade after the fundamental reason has failed." },
                { m: "Unplanned Leverage", d: "Using high leverage to chase quick gains without a risk plan." },
                { m: "Chasing Late Signals", d: "Entering after a setup has already reached its first targets." },
                { m: "Emotional Revenge Trading", d: "Trying to 'win back' losses by increasing risk on the next trade." },
                { m: "Treating Targets as Guarantees", d: "Assuming price MUST hit the target before risk is managed." }
              ].map((mistake, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-3 group hover:border-danger/30 transition-colors">
                  <div className="flex gap-3 items-center text-danger">
                    <X size={18} />
                    <h4 className="text-xs font-black uppercase tracking-widest">{mistake.m}</h4>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{mistake.d}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-text-muted italic">
              "Most trading damage comes from one bad risk decision repeated too many times."
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — Who Needs Risk Management Most? */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-background border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Who Needs It Most</h3>
              <ul className="space-y-4">
                {[
                  "Absolute beginners learning crypto",
                  "Futures and leverage traders",
                  "Telegram signal group users",
                  "Small-cap altcoin traders",
                  "Traders recovering from major losses",
                  "Busy people who enter setups quickly"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-background border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-text-muted">It Is Not Optional If...</h3>
              <ul className="space-y-4">
                {[
                  "You use leverage in volatile markets",
                  "You follow third-party signal alerts",
                  "You trade around high-impact news",
                  "You cannot monitor positions 24/7",
                  "You risk money you cannot afford to lose",
                  "You act emotionally after losses"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                    <ArrowRight className="text-primary flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 15 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Learn the Risk <br />
              <span className="text-primary">Before the Signal.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              A serious crypto signal is not complete without risk context. Yaga Calls is built for traders who want structured market notes, Telegram-first delivery, and risk-aware communication.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_risk_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_risk_method"
              className="px-10 py-5 text-base"
            >
              Read the Method
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                See Risk-Managed Signals
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Review Proof Examples
              </Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Compare Premium Plans
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
