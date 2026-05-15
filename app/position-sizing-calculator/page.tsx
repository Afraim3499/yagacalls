import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import PositionSizingCalculator from "@/components/tools/PositionSizingCalculator";
import { 
  ShieldCheck, 
  Target, 
  AlertTriangle, 
  Zap, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Calculator,
  Activity,
  UserCheck,
  FileText,
  Navigation,
  PieChart,
  BarChart3,
  TrendingUp,
  Compass,
  Briefcase,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Position Sizing Calculator | Risk & Stop-Loss Tool",
  description: "Calculate crypto position size using account size, risk percentage, entry price, stop-loss price and optional target price. Educational risk tool only.",
  alternates: {
    canonical: "https://www.yagacalls.com/position-sizing-calculator",
  },
  openGraph: {
    title: "Crypto Position Sizing Calculator",
    description: "Estimate crypto trade size using account size, risk per trade, entry, stop-loss and target price. Learn position sizing, stop distance and risk-to-reward.",
    type: "website",
    url: "https://www.yagacalls.com/position-sizing-calculator",
  }
};

export default function PositionSizingCalculatorPage() {
  const faqs = [
    {
      question: "What is a crypto position sizing calculator?",
      answer: "A crypto position sizing calculator estimates trade size based on account size, planned risk, entry price, and stop-loss price. It helps traders understand how much exposure may fit a planned risk amount."
    },
    {
      question: "How do you calculate crypto position size?",
      answer: "First calculate risk amount from account size and risk percentage. Then divide the risk amount by the stop-loss distance. The result estimates the number of units that fit the planned risk."
    },
    {
      question: "What is the position sizing formula?",
      answer: "The basic formula is: position size equals risk amount divided by stop-loss distance. Risk amount can be calculated as account size multiplied by risk percentage."
    },
    {
      question: "Is position size the same as risk?",
      answer: "No. Position size is the amount of asset or notional value being traded. Risk is the amount the trader expects to lose if the stop-loss is reached."
    },
    {
      question: "How does stop-loss distance affect position size?",
      answer: "A wider stop-loss distance usually creates a smaller position size if the planned risk amount stays the same. A tighter stop creates a larger calculated size, but tight stops may be hit by normal volatility."
    },
    {
      question: "Can I use position sizing with leverage?",
      answer: "Yes, but leverage increases exposure and risk. Position sizing still needs to account for stop-loss distance, liquidation risk, margin, fees, slippage, and volatility."
    },
    {
      question: "Should I copy position size from a Telegram signal?",
      answer: "No. Traders should calculate their own position size based on their account, risk amount, entry, and stop-loss. A signal can provide structure, but personal risk belongs to the trader."
    },
    {
      question: "Does the calculator guarantee safe trading?",
      answer: "No. The calculator only provides an estimate. It does not guarantee profit, safety, execution quality, or loss prevention."
    },
    {
      question: "What risk percentage should I use?",
      answer: "There is no universal percentage for every trader. Many disciplined traders study small fixed risk limits (0.5% - 2%), but the right level depends on account size and personal risk tolerance."
    },
    {
      question: "Does Yaga Calls use position sizing?",
      answer: "Yaga Calls emphasizes position sizing awareness, stop-loss context, invalidation logic, and risk-aware signal planning. It does not guarantee profit or remove trading risk."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/position-sizing-calculator#webpage",
        "url": "https://www.yagacalls.com/position-sizing-calculator",
        "name": "Crypto Position Sizing Calculator | Risk & Stop-Loss Tool",
        "description": "Calculate crypto trade size from account equity, risk, and stop distance.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Crypto Position Sizing Calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web",
        "description": "A free educational crypto position sizing calculator that estimates trade size from account size, risk, entry price, stop-loss price and optional target price.",
        "url": "https://www.yagacalls.com/position-sizing-calculator",
        "author": { "@type": "Organization", "name": "Yaga Calls" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/position-sizing-calculator#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.yagacalls.com/academy" },
          { "@type": "ListItem", "position": 3, "name": "Position Sizing Calculator", "item": "https://www.yagacalls.com/position-sizing-calculator" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/position-sizing-calculator#faq",
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
      <Section className="pt-32 pb-20 md:pt-48 md:pb-24 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center relative z-10">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                Risk Management Tool
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                Crypto Position <br />
                <span className="text-primary">Sizing Calculator</span>
              </h1>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-text leading-tight font-bold uppercase tracking-tight">
                Use this calculator to estimate crypto position size based on account size, planned risk, entry price, stop-loss price, and optional target price.
              </p>
              <p className="text-sm text-text-muted/80 leading-relaxed font-medium">
                Position sizing does not make a trade safe. It helps traders understand how much exposure fits a planned risk before entering a setup. Calculator results are estimates only.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <CTAButton 
                href="#calculator" 
                trackingLabel="hero_calc_scroll"
              >
                Use Calculator
              </CTAButton>
              <CTAButton 
                href="/crypto-risk-management" 
                variant="secondary"
                trackingLabel="hero_calc_risk"
              >
                Risk Management Guide
              </CTAButton>
              <CTAButton 
                href="https://t.me/+JFf8kBf01mg3OTg1" 
                variant="secondary"
                target="_blank"
                className="hidden sm:inline-flex"
              >
                Join Free Telegram
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — Calculator Tool */}
      <Section id="calculator" className="bg-background py-16 md:py-24 overflow-hidden border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Calculate Your Trade Size</h2>
              <p className="text-sm text-text-muted font-medium leading-relaxed italic">
                Educational tool only. Real trading may involve fees, slippage, funding rates, liquidation risk, and exchange execution differences.
              </p>
            </div>

            <PositionSizingCalculator />

            <div className="p-8 bg-surface-deep border border-line rounded-[32px] text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 leading-relaxed max-w-2xl mx-auto">
                DISCLAIMER: This calculator is not financial advice. It does not guarantee profit, safety, execution, or loss prevention. Crypto trading involves high risk and possible loss of all capital.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Direct Answer Block */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is Position Sizing in Crypto?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Position sizing is the process of deciding how large a crypto trade should be based on account size, planned risk, entry price, and stop-loss distance.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    It helps traders control how much they could lose if the trade fails. Position size is not the same as risk. A large position can have small risk if the stop is tight, while a small position can still be risky if the stop is wide or leverage is high.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — Why It Matters */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">Why Position Sizing <br /><span className="text-primary">Matters</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold">
                Position sizing turns risk from an emotion into math.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Controls Downside", d: "Starts with the amount you are prepared to lose if the trade fails.", icon: <ShieldCheck size={24} className="text-primary" /> },
                { t: "Connects Stop to Risk", d: "A wider stop usually requires a smaller position to keep risk controlled.", icon: <Target size={24} className="text-primary" /> },
                { t: "Reduces Emotion", d: "Clear sizing can reduce panic because the loss is planned before entry.", icon: <UserCheck size={24} className="text-primary" /> },
                { t: "Protects Survival", d: "Small controlled losses help traders survive inevitable losing streaks.", icon: <Activity size={24} className="text-primary" /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-text leading-tight">{card.t}</h4>
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

      {/* SECTION 4 — Position Size vs Risk */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Size Is Not <br /><span className="text-primary">The Same As Risk</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold">
                Risk is what you can lose. Position size is the exposure that creates that risk.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Concept</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Meaning</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Example</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Common Mistake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { c: "Account Size", m: "Total capital used for planning.", e: "$2,000 account.", x: "Risking too much on small accounts." },
                    { c: "Risk Amount", m: "Planned loss if stop is reached.", e: "1% ($20).", x: "Confusing this with trade size." },
                    { c: "Position Size", m: "Amount of asset or notional value.", e: "4 units @ $100 ($400).", x: "Choosing size before risk." },
                    { c: "Stop Distance", m: "Distance from entry to stop-loss.", e: "$100 to $95 ($5).", x: "Ignoring its effect on size." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.c}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.m}</td>
                      <td className="px-8 py-8 text-xs text-text font-bold uppercase tracking-tight">{row.e}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.x}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Formula Section */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">The Math of <br /><span className="text-primary">Position Sizing</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">The farther the stop, the smaller the position.</p>
                <p className="text-text-muted leading-relaxed">
                  The formula divides your planned risk by your stop distance. This ensures that no matter how far your stop is, you lose the exact same amount if it's hit.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 shadow-2xl">
                <div className="p-6 bg-background rounded-2xl border border-primary/20 text-center">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-black mb-2">The Golden Rule</p>
                  <p className="text-lg font-black text-primary uppercase">Units = Risk Amount ÷ Stop Distance</p>
                </div>
                <div className="space-y-3 pt-4 border-t border-line">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-tight">
                    <span className="text-text-muted">Account</span>
                    <span>$2,000</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-tight">
                    <span className="text-text-muted">Risk (1%)</span>
                    <span className="text-primary">$20</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-tight">
                    <span className="text-text-muted">Stop Dist</span>
                    <span className="text-danger">$5</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-tight pt-2 border-t border-line/50">
                    <span className="text-text">Result</span>
                    <span className="text-primary">4 Units</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Stop-Loss Distance Table */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How Distance <br /><span className="text-primary">Changes Size</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold">
                Wider stops are not automatically more dangerous if size is reduced.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Stop Price</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Stop Distance</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Estimated Units</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Notional Value</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Risk Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { p: "$99", d: "$1", u: "20 units", n: "$2,000", r: "$20" },
                    { p: "$98", d: "$2", u: "10 units", n: "$1,000", r: "$20" },
                    { p: "$95", d: "$5", u: "4 units", n: "$400", r: "$20" },
                    { p: "$90", d: "$10", u: "2 units", n: "$200", r: "$20" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50">{row.p}</td>
                      <td className="px-8 py-8 text-xs text-text-muted font-bold">{row.d}</td>
                      <td className="px-8 py-8 text-xs text-text font-black">{row.u}</td>
                      <td className="px-8 py-8 text-xs text-text-muted font-medium">{row.n}</td>
                      <td className="px-8 py-8 text-sm text-primary font-black">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-[10px] text-text-muted/60 uppercase tracking-widest font-black">
              Example based on a $2,000 account with a fixed 1% ($20) risk amount.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Risk Percentage and Amount */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Percentage <br /><span className="text-primary">vs Amount</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">Low risk creates more room to survive mistakes.</p>
                <p className="text-text-muted leading-relaxed">
                  Risk percentage converts your account equity into a concrete dollar value for planning. Small risk can feel slow, but large risk can end your trading journey before you have enough experience to succeed.
                </p>
              </div>
            </div>

            <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-6 shadow-2xl">
              <h4 className="text-xs font-black uppercase tracking-widest text-primary text-center">Risk Scaling Table</h4>
              <div className="space-y-4">
                {[
                  { a: "$1,000", p1: "$10", p2: "$20", p5: "$50" },
                  { a: "$5,000", p1: "$50", p2: "$100", p5: "$500" },
                  { a: "$10,000", p1: "$100", p2: "$200", p5: "$1,000" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-line/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.a} Account</span>
                    <div className="flex gap-4">
                      <span className="text-[10px] font-black text-primary">1%: {row.p1}</span>
                      <span className="text-[10px] font-black text-warning">2%: {row.p2}</span>
                      <span className="text-[10px] font-black text-danger">5%: {row.p5}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-center text-text-muted italic uppercase tracking-tight">Educational examples only.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Leverage Risk */}
      <Section className="bg-background py-24 border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-danger/5 border border-danger/20 rounded-[48px] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-danger">
                  <Zap size={24} />
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Leverage Warning</h2>
                </div>
                <p className="text-xl text-text leading-tight font-bold">Leverage does not reduce risk. It only increases exposure.</p>
                <p className="text-text-muted leading-relaxed max-w-2xl">
                  Leverage allows you to control larger positions with less margin, but it does not change the math of your risk from entry to stop-loss. High leverage increases liquidation risk and emotional pressure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                {["Check Liquidation", "Account for Funding", "Control Notional Size"].map((check, i) => (
                  <div key={i} className="p-4 bg-background border border-danger/10 rounded-2xl flex items-center gap-3">
                    <AlertTriangle size={16} className="text-danger" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-text">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Risk-to-Reward */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Risk-to-Reward <br /><span className="text-primary">Ratio</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">A large R:R is not useful if the target is unrealistic.</p>
                <p className="text-text-muted leading-relaxed">
                  The calculator estimates potential reward vs risk, but targets still need market logic. Risking $1 to target $3 (1:3) creates easier winning math, but the setup must be based on structure, not just a wish.
                </p>
              </div>
            </div>

            <div className="p-10 bg-background border border-line rounded-[40px] space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-text text-center">Reward Mapping</h4>
              <div className="space-y-4">
                {[
                  { l: "Entry", v: "$100" },
                  { l: "Stop-Loss", v: "$95 (-$5)" },
                  { l: "Target", v: "$115 (+$15)" },
                  { l: "R:R Ratio", v: "1 : 3", highlight: true }
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center p-3 rounded-xl border ${item.highlight ? 'bg-primary text-background border-primary shadow-lg shadow-primary/20' : 'border-line/50'}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${item.highlight ? 'text-background' : 'text-text-muted'}`}>{item.l}</span>
                    <span className="text-xs font-black">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Telegram Signals Usage */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Sizing for <br /><span className="text-primary">Telegram Signals</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">
                Do not copy another person's trade size. Use your own account risk.
              </p>
            </div>

            <div className="p-10 bg-surface-deep border border-line rounded-[48px] grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-danger">Signal Risks</h4>
                <ul className="space-y-4">
                  {[
                    "Entering after price moved too far",
                    "Copying without checking risk %",
                    "Ignoring personal stop limits",
                    "Using 'FOMO' leverage"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X className="text-danger flex-shrink-0" size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 border-l border-line pl-12 hidden md:block">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Calculation Rules</h4>
                <ul className="space-y-4">
                  {[
                    "Input current Entry into calculator",
                    "Input Signal Invalidation as Stop",
                    "Select personal Risk Amount",
                    "Verify Notional Exposure"
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

      {/* SECTION 11 — Common Mistakes */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Common <br /><span className="text-danger">Sizing Mistakes</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { m: "Size before Risk", d: "Choosing trade size before deciding how much you can afford to lose." },
                { m: "Ignoring Stop Distance", d: "Keeping the same size when the stop is much wider than normal." },
                { m: "Leverage for Force", d: "Using high leverage to force bigger trades on small accounts." },
                { m: "Copying Another Trader", d: "Using someone else's unit count without knowing their account size." },
                { m: "Ignoring News Spreads", d: "Not accounting for slippage or volatility gaps during news." },
                { m: "Increasing after Loss", d: "Increasing size to 'win back' a previous loss (revenge trading)." }
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
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Yaga Calls Awareness */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Yaga <br /><span className="text-primary">Risk Framework</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
                Yaga Calls provides signal structure so you can plan size before action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Market Reason", d: "Why the setup deserves attention.", icon: <FileText /> },
                { t: "Entry Zone", d: "Where it makes sense without chasing.", icon: <Target /> },
                { t: "Stop Context", d: "Where downside is controlled.", icon: <ShieldCheck /> },
                { t: "Invalidation", d: "Where the trade logic fails.", icon: <AlertTriangle /> },
                { t: "Target Plan", d: "Where the setup should be reviewed.", icon: <TrendingUp /> },
                { t: "Size Awareness", d: "Stop distance effect on risk.", icon: <PieChart /> },
                { t: "Premium Delivery", d: "Fast, structured Telegram signal notes.", icon: <Zap /> },
                { t: "Proof Audit", d: "Selected historical snapshots.", icon: <Eye /> }
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

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Method</Link>
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">See risk-managed signals</Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Review proof examples</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Checklist */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Position Sizing <br /><span className="text-primary">Checklist</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-background border border-line rounded-[48px]">
              {[
                "Account size is clear and defined.",
                "Risk percentage or fixed amount is set.",
                "Entry and Stop-Loss prices are known.",
                "Stop distance is calculated.",
                "Position size is calculated.",
                "Notional exposure is understood.",
                "Leverage does not create liquidation risk.",
                "Target price is realistic for R:R.",
                "Fees and slippage are considered.",
                "Telegram source is official Yaga.",
                "Loss is emotionally acceptable.",
                "Money is not needed for essentials."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0">
                  <span className="text-primary font-black">{i + 1}.</span> {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — Who Needs This Tool? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Useful For</h3>
              <ul className="space-y-4">
                {[
                  "Beginner crypto traders",
                  "Telegram signal group users",
                  "Futures and leverage traders",
                  "Altcoin market participants",
                  "Traders recovering from major losses"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-text-muted">Not Enough If...</h3>
              <ul className="space-y-4">
                {[
                  "You do not understand the setup",
                  "You use random, unplanned stops",
                  "You are chasing price FOMO",
                  "You risk money for essentials",
                  "You ignore liquidation levels"
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

      {/* SECTION 15 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Size the Risk <br />
              <span className="text-primary">Before the Trade.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              A serious trade is not planned until the size is calculated. Join the free Telegram to observe risk-aware signal structure first.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_calc_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_calc_method"
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
              <Link href="/how-to-set-stop-losses-in-crypto" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Stop-Loss Guide
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Proof Examples
              </Link>
            </div>
            <p className="mt-10 text-[10px] text-text-muted/60 italic uppercase tracking-widest leading-relaxed max-w-md mx-auto">
              Yaga Calls provides educational market analysis, signal ideas, and tools only. Crypto trading involves risk. Calculator results are estimates.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
