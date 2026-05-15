import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import LeverageTradingCalculator from "@/components/tools/LeverageTradingCalculator";
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
  TrendingUp,
  TrendingDown,
  Lock,
  Search,
  ShieldAlert,
  Clock,
  PieChart,
  BarChart3,
  HelpCircle,
  Eye
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { 
  createWebPageSchema, 
  createFAQSchema, 
  createBreadcrumbSchema,
  createOrganizationSchema
} from "@/lib/schema";
import { BRAND_CONFIG } from "@/lib/constants/brand";

const SITE_URL = BRAND_CONFIG.siteUrl;
const CANONICAL_URL = `${SITE_URL}/leverage-trading-calculator`;

export const metadata: Metadata = {
  title: "Crypto Leverage Trading Calculator | Margin, PnL & Risk",
  description: "Estimate crypto leverage trade margin, notional value, PnL, stop-loss loss, target profit and risk warnings. Educational calculator only.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Crypto Leverage Trading Calculator",
    description: "Estimate margin, position value, PnL and leverage risk for crypto trades. Learn how leverage changes exposure, losses and liquidation danger.",
    url: CANONICAL_URL,
    type: "website",
  }
};

export default function LeverageTradingCalculatorPage() {
  const faqs = [
    {
      question: "What is a crypto leverage trading calculator?",
      answer: "A crypto leverage trading calculator estimates notional position value, margin required, potential profit, potential loss, return on margin, and risk-to-reward for a leveraged crypto trade. It is educational only and does not guarantee execution or safety."
    },
    {
      question: "How does leverage work in crypto trading?",
      answer: "Leverage allows traders to control a larger position than the margin they put up. For example, 5x leverage means the notional exposure is five times the margin. This increases both potential gains and potential losses."
    },
    {
      question: "How do you calculate margin required?",
      answer: "Margin required is estimated by dividing notional position value by leverage. For example, a $1,000 position at 5x leverage requires about $200 margin before fees and exchange-specific rules."
    },
    {
      question: "Does leverage change the risk-to-reward ratio?",
      answer: "Leverage changes margin exposure and return on margin, but it does not automatically improve the trade's risk-to-reward. Risk-to-reward still depends on the distance between entry, stop-loss, and target."
    },
    {
      question: "Can this calculator calculate exact liquidation price?",
      answer: "No. This calculator can provide approximate liquidation-risk awareness only. Exact liquidation depends on exchange rules, margin mode, maintenance margin, fees, funding, collateral, and other factors."
    },
    {
      question: "Is leverage trading risky in crypto?",
      answer: "Yes. Leverage trading is risky because it magnifies losses, reduces room for error, and can lead to liquidation during volatile price moves."
    },
    {
      question: "Should I use high leverage with crypto signals?",
      answer: "High leverage can be dangerous, especially if the entry is late or the stop-loss is unclear. Traders should understand exposure, liquidation risk, and account risk before using leverage with any signal."
    },
    {
      question: "How should Telegram signal users use this calculator?",
      answer: "Telegram signal users can use the calculator to estimate margin, notional exposure, stop-loss loss, target profit, and liquidation-risk awareness before entering a trade."
    },
    {
      question: "Does Yaga Calls recommend leverage levels?",
      answer: "Yaga Calls provides educational market analysis and signal ideas only. It does not guarantee profit or provide personalized financial advice. Every trader remains responsible for leverage, position size, and risk decisions."
    },
    {
      question: "Does the calculator guarantee safe trading?",
      answer: "No. The calculator only provides educational estimates. It does not guarantee profit, safety, execution quality, liquidation protection, or loss prevention."
    }
  ];

  const webPageSchema = createWebPageSchema({
    title: "Crypto Leverage Trading Calculator | Margin, PnL & Risk",
    description: "Educational tool to estimate crypto trade margin, exposure, and risk.",
    url: CANONICAL_URL,
    datePublished: "2024-05-16",
    dateModified: "2024-05-16"
  });

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Crypto Leverage Trading Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": "A free educational crypto leverage trading calculator that estimates notional exposure, margin required, potential PnL, return on margin, risk-to-reward and leverage-risk awareness.",
    "url": CANONICAL_URL,
    "author": { "@type": "Organization", "name": "Yaga Calls" }
  };

  const organizationSchema = createOrganizationSchema();
  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Tools", item: "/academy" },
    { name: "Leverage Trading Calculator", item: "/leverage-trading-calculator" }
  ]);

  return (
    <main className="bg-background text-text">
      <JsonLd data={webPageSchema} />
      <JsonLd data={appSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

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
                Crypto Leverage <br />
                <span className="text-primary">Trading Calculator</span>
              </h1>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-text leading-tight font-bold uppercase tracking-tight">
                Use this calculator to estimate notional exposure, margin required, potential profit or loss, return on margin, and stop-loss impact for a leveraged crypto trade.
              </p>
              <p className="text-sm text-text-muted/80 leading-relaxed font-medium">
                Leverage does not reduce risk. It increases exposure. Calculator results are estimates and do not guarantee execution, profit, safety, or liquidation protection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <CTAButton 
                href="#calculator" 
                trackingLabel="hero_lev_scroll"
              >
                Use Calculator
              </CTAButton>
              <CTAButton 
                href="/crypto-risk-management" 
                variant="secondary"
                trackingLabel="hero_lev_risk"
              >
                Risk Management Guide
              </CTAButton>
              <CTAButton 
                href="/position-sizing-calculator" 
                variant="secondary"
                className="hidden sm:inline-flex"
              >
                Position Sizing Tool
              </CTAButton>
              <CTAButton 
                href="/liquidation-price-calculator" 
                variant="secondary"
                className="hidden md:inline-flex"
              >
                Liquidation Calculator
              </CTAButton>
            </div>

            <div className="pt-8 p-6 bg-background/40 border border-line rounded-3xl backdrop-blur-sm">
              <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-widest max-w-2xl mx-auto">
                Educational tool only. Crypto trading involves risk. Leverage can magnify losses. Results are estimates and may not account for exchange-specific liquidation rules, fees, slippage, funding rates, spread, maintenance margin, or execution failure.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — Calculator Tool */}
      <Section id="calculator" className="bg-background py-16 md:py-24 overflow-hidden border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Estimate Your Trade Exposure</h2>
              <p className="text-sm text-text-muted font-medium leading-relaxed italic">
                Input your trade details below to understand how leverage changes your margin, PnL, and liquidation-risk profile.
              </p>
            </div>

            <LeverageTradingCalculator />

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
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] relative overflow-hidden text-center md:text-left">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is a Crypto Leverage Trading Calculator?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    A crypto leverage trading calculator estimates how leverage changes trade exposure, margin required, potential profit, potential loss, and risk-to-reward.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    It helps traders understand the difference between notional position value and actual margin used. The calculator is educational only. It cannot predict market direction, guarantee execution, or calculate exact liquidation across every exchange. Serious traders use these tools to visualize the relationship between account size, exposure, and stop-loss distance before taking action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — What Leverage Means */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">What Leverage <br /><span className="text-primary">Means in Crypto</span></h2>
                <div className="prose prose-invert prose-lg">
                  <p className="text-text font-bold leading-relaxed">
                    Leverage allows a trader to control a larger notional position than the margin they put up.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    For example, 5x leverage means a trader can control a position worth five times the margin. This increases both potential gains and potential losses. While it feels like "free" money, leverage is essentially a loan from the exchange, secured by your margin. If the market moves against your position, the exchange may liquidate your margin to cover the notional loss.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                    Read the crypto risk management guide →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { t: "Increases Exposure", d: "You control more units than your margin would allow normally.", i: <Zap size={20} className="text-primary" /> },
                  { t: "Does Not Reduce Risk", d: "Leverage magnifies outcomes; it doesn't make the setup safer.", i: <ShieldAlert size={20} className="text-primary" /> },
                  { t: "Margin is Collateral", d: "Your margin is the 'skin in the game' used to back the larger loan.", i: <Lock size={20} className="text-primary" /> },
                  { t: "Liquidation Danger", d: "Higher leverage means price has less room to move before margin is lost.", i: <AlertTriangle size={20} className="text-danger" /> }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-surface-deep border border-line rounded-3xl flex gap-6 items-start">
                    <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center shrink-0">
                      {item.i}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-widest text-text">{item.t}</h4>
                      <p className="text-[11px] text-text-muted leading-relaxed font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-primary/5 border border-primary/20 rounded-[32px] text-center">
              <p className="text-xl text-text font-black uppercase tracking-tight">
                "Leverage does not make a setup better. It makes the outcome larger."
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Margin vs Notional Value */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Margin vs <br /><span className="text-primary">Notional Position Value</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Understanding the gap between what you pay and what you control.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                Margin is the amount of capital used to open or support a leveraged position. Notional position value is the full trade exposure controlled by that margin. A trader may use $200 margin at 5x leverage to control a $1,000 notional position.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Concept</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Meaning</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Example</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Risk Mistake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { c: "Margin", m: "Capital committed to open/support a leveraged trade.", e: "$200 margin.", x: "Thinking only $200 is at risk." },
                    { c: "Notional Value", m: "Full position exposure controlled by the trade.", e: "$1,000 exposure at 5x leverage.", x: "Ignoring how full exposure affects PnL." },
                    { c: "Leverage", m: "Multiplier between margin and notional exposure.", e: "5x leverage.", x: "Using high leverage because margin looks small." }
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

            <div className="text-center pt-8">
              <p className="text-xs text-text-muted font-bold uppercase tracking-widest">
                The market moves against the notional position, not against the trader's confidence.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — How to Calculate */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Calculate <br /><span className="text-primary">a Leveraged Crypto Trade</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Turning leverage into math before you execute.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-primary">Key Formulas</h3>
                <div className="space-y-6">
                  {[
                    { l: "Notional Value", f: "Asset Quantity × Entry Price" },
                    { l: "Margin Required", f: "Notional Value ÷ Leverage" },
                    { l: "PnL (Long)", f: "(Exit - Entry) × Quantity" },
                    { l: "PnL (Short)", f: "(Entry - Exit) × Quantity" },
                    { l: "Return on Margin %", f: "(PnL ÷ Margin) × 100" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">{item.l}</p>
                      <p className="text-sm font-black text-text bg-background p-3 rounded-xl border border-line/50">{item.f}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-primary">Calculation Example</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-background rounded-2xl border border-line/50 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
                      <span className="text-text-muted">Entry</span>
                      <span>$100</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
                      <span className="text-text-muted">Quantity</span>
                      <span>10 Units</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
                      <span className="text-text-muted">Leverage</span>
                      <span>5x</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight border-t border-line/50 pt-4">
                      <span className="text-primary">Margin Required</span>
                      <span className="text-primary">$200</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
                      <span className="text-text-muted">Target</span>
                      <span>$110</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight border-t border-line/50 pt-4">
                      <span className="text-primary font-bold">Total Profit</span>
                      <span className="text-primary font-bold">$100</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
                      <span className="text-primary font-bold">Return on Margin</span>
                      <span className="text-primary font-bold">50%</span>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed font-medium italic">
                    This example shows how leverage increases return on margin. It also means a move against the trade can damage the account faster. Profit examples are educational only and do not predict results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Leverage and Stop-Loss Risk */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Leverage and <br /><span className="text-primary">Stop-Loss Risk</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Losses come from exposure, not just leverage numbers.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                A stop-loss loss estimate depends on the distance between entry and stop-loss multiplied by position quantity. Leverage affects margin and liquidation risk, but the loss still comes from the notional exposure controlled by the trade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <GlowCard className="p-8 space-y-4">
                <Target size={24} className="text-primary" />
                <h4 className="text-sm font-black uppercase tracking-widest text-text">Formula Logic</h4>
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-background border border-line rounded-xl">
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">Stop-Loss Loss</p>
                    <p className="text-xs font-bold text-text">Stop Distance × Asset Quantity</p>
                  </div>
                  <div className="p-4 bg-background border border-line rounded-xl">
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">Account Risk %</p>
                    <p className="text-xs font-bold text-text">Stop-Loss Loss ÷ Account Size × 100</p>
                  </div>
                </div>
              </GlowCard>

              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-text">Why it Matters</h4>
                <ul className="space-y-4">
                  {[
                    "Leverage makes margin small but exposure large.",
                    "High leverage leaves less room before liquidation.",
                    "If liquidation comes before stop, the plan fails.",
                    "Slippage can affect your actual realized loss."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <CheckCircle2 size={16} className="text-primary shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-10 bg-danger/5 border border-danger/20 rounded-[48px] text-center">
              <p className="text-xl text-text font-black uppercase tracking-tight">
                "A stop-loss plan is incomplete if liquidation risk is ignored."
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/how-to-set-stop-losses-in-crypto" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Learn how to set stop-losses in crypto</Link>
              <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Use the position sizing calculator</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Long vs Short */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Long vs Short <br /><span className="text-primary">Leverage Trades</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Two directions, two sets of rules, same risk management requirement.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                A long leveraged trade profits when price rises and loses when price falls. A short leveraged trade profits when price falls and loses when price rises. Both directions carry liquidation and execution risk. Shorting is not safer than longing; it is simply a different direction with its own specific market mechanics.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Trade Direction</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Profits When</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Loses When</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Stop-Loss Logic</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Target Logic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { d: "Long", p: "Price moves above entry.", l: "Price moves below entry.", s: "Usually below entry / invalidation.", t: "Usually above entry." },
                    { d: "Short", p: "Price moves below entry.", l: "Price moves above entry.", s: "Usually above entry / invalidation.", t: "Usually below entry." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.d}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.p}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.l}</td>
                      <td className="px-8 py-8 text-xs text-text-muted font-medium italic">{row.s}</td>
                      <td className="px-8 py-8 text-xs text-text-muted font-medium italic">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center pt-8">
              <p className="text-xs text-text-muted font-bold uppercase tracking-widest italic">
                Shorting is not a hedge against learning. It is an active trade with full downside risk.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Approximate Liquidation */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Approximate <br /><span className="text-primary">Liquidation-Risk Awareness</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                When the exchange takes control of your position.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                Liquidation happens when an exchange closes a leveraged position because margin is no longer enough to support it. Exact liquidation price depends on exchange rules, isolated or cross margin, maintenance margin, fees, funding, collateral, unrealized PnL, and other factors. Any simple calculator should treat liquidation as an estimate, not a guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { t: "Isolated Margin", d: "Only the margin assigned to the trade is at risk.", i: <Lock /> },
                { t: "Cross Margin", d: "Your entire account balance supports the position.", i: <Activity /> },
                { t: "Maint. Margin", d: "The minimum buffer required to keep a trade open.", i: <ShieldAlert /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                  <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center text-primary">
                    {card.i}
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-danger/5 border border-danger/20 rounded-[48px] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-black uppercase tracking-tighter text-danger relative z-10">Warning: Not Exact Math</h3>
              <p className="text-lg text-text font-bold leading-relaxed relative z-10">
                This calculator provides an approximate liquidation-risk reference only. It is not exchange-specific liquidation math. If liquidation is close to your stop-loss, the trade may be too aggressively leveraged.
              </p>
              <div className="pt-4 relative z-10">
                <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                  Read the full risk disclosure →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Risk-to-Reward */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Risk-to-Reward <br /><span className="text-primary">With Leverage</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold leading-relaxed">
                  Leverage can increase return on margin, but it does not automatically improve the trade's risk-to-reward.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Risk-to-reward compares the estimated loss at stop-loss with the estimated profit at target. A bad setup does not become good because leverage is higher. In fact, high leverage can distort emotion and lead to premature exits, destroying even a good R:R plan.
                </p>
              </div>
              <div className="p-6 bg-surface-deep border border-line rounded-3xl">
                <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">RR Formula</p>
                <p className="text-sm font-black text-primary">Target Profit ÷ Stop-Loss Loss</p>
              </div>
            </div>

            <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8 shadow-2xl">
              <h3 className="text-xl font-black uppercase tracking-widest text-primary">Key Realities</h3>
              <ul className="space-y-6">
                {[
                  { t: "Target must be realistic", d: "Don't set high targets just to make the math look better." },
                  { t: "Stop-loss must be logical", d: "Base your stop on structure, not on your liquidation price." },
                  { t: "RR is Structure Based", d: "Leverage affects your capital, not the market's price levels." }
                ].map((item, i) => (
                  <li key={i} className="space-y-1">
                    <p className="text-xs font-black uppercase tracking-tight text-text">{item.t}</p>
                    <p className="text-[11px] text-text-muted leading-relaxed font-medium">{item.d}</p>
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-center">
                <p className="text-[10px] text-text-muted font-black uppercase tracking-widest italic">
                  Leverage can increase return on margin. It cannot make an unrealistic target more likely.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Mistakes */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Common Crypto <br /><span className="text-danger">Leverage Trading Mistakes</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Most leverage damage starts when the trader focuses on profit before exposure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { m: "Size before Risk", d: "Choosing trade size before deciding how much you can afford to lose." },
                { m: "Margin Error", d: "Thinking margin required is the maximum possible loss (it often isn't)." },
                { m: "Ignoring Liquidation", d: "Entering trades where the liquidation price is before the planned stop." },
                { m: "No Invalidation", d: "Entering without a clear price level where the trade idea is proven wrong." },
                { m: "Revenge Leverage", d: "Using high leverage to quickly 'win back' a previous account loss." },
                { m: "Chasing Signals", d: "Entering Telegram signals late after the price has already run from entry." }
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

      {/* SECTION 11 — Telegram Signals Usage */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Leverage With <br /><span className="text-primary">Telegram Crypto Signals</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                A Telegram signal can define the setup. The calculator helps expose the risk.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                Telegram signal users should use a leverage calculator before entering a trade to estimate margin, notional exposure, stop-loss loss, target profit, and liquidation-risk awareness. A Telegram signal may provide setup context, but the trader still controls leverage, position size, and execution risk.
              </p>
            </div>

            <div className="p-10 bg-surface-deep border border-line rounded-[48px] grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h4 className="text-xl font-black uppercase tracking-tighter text-primary">Pre-Trade Checklist</h4>
                <div className="space-y-4">
                  {[
                    "Confirm the signal is from official Yaga Calls.",
                    "Check whether the entry zone is still valid.",
                    "Identify the stop-loss or invalidation level.",
                    "Enter notional value into the calculator.",
                    "Review estimated margin required.",
                    "Check stop-loss loss vs account size."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 size={16} className="text-primary shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-danger">Safety Warnings</h4>
                <ul className="space-y-4">
                  {[
                    "Do not chase late signals.",
                    "Check liquidation-risk warning.",
                    "Decide calmly, not from FOMO.",
                    "Verify official admin handles."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X size={16} className="text-danger shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Telegram crypto signals guide</Link>
              <Link href="/crypto-trading-telegram-group" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Choose a crypto trading Telegram group safely</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — How Yaga Calls Approaches Leverage */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">How Yaga Calls <br /><span className="text-primary">Approaches Leverage Risk</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
                Yaga Calls provides signal structure so you can plan exposure before action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Market Reason", d: "Why does the setup deserve attention?", icon: <FileText /> },
                { t: "Entry Zone", d: "Where does the trade begin making sense?", icon: <Target /> },
                { t: "Target Planning", d: "Where should the setup be reviewed?", icon: <TrendingUp /> },
                { t: "Invalidation", d: "Where does the idea become wrong?", icon: <ShieldAlert /> },
                { t: "Stop-Loss Context", d: "Where should downside be controlled?", icon: <ShieldCheck /> },
                { t: "Position Sizing", d: "How much exposure fits the planned risk?", icon: <PieChart /> },
                { t: "Leverage Risk", d: "Does leverage create liquidation danger?", icon: <Zap /> },
                { t: "Telegram Delivery", d: "Fast, clear, structured signal notes.", icon: <Clock /> }
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
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Leverage Trading <br /><span className="text-primary">Checklist</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
              If you do not understand the exposure, you are not ready for leverage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-background border border-line rounded-[48px] text-left">
              {[
                "Account size is clear and defined.",
                "Entry price is known.",
                "Position size or notional value is calculated.",
                "Leverage is selected intentionally.",
                "Margin required is understood.",
                "Stop-loss or invalidation is clear.",
                "Stop-loss loss estimate is acceptable.",
                "Target is realistic for R:R.",
                "Risk-to-reward is understood.",
                "Liquidation-risk reference is checked.",
                "Fees and slippage are considered.",
                "The signal source is official.",
                "The trader is calm, not chasing FOMO."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0 group">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0 group-hover:rotate-12 transition-transform" /> {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — Who Needs This? */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Useful For</h3>
              <ul className="space-y-4">
                {[
                  "Futures and leverage traders",
                  "Telegram signal group users",
                  "Margin trading participants",
                  "Traders comparing stop-loss impact",
                  "Users evaluating premium setups"
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
                  "You use unplanned stop-losses",
                  "You are chasing late entries",
                  "You expect guaranteed profit",
                  "You cannot accept the planned loss"
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
              Plan Exposure <br />
              <span className="text-primary">Before Action.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              A leveraged trade is not fully planned until you understand notional position value, margin, stop-loss loss, and liquidation-risk awareness.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <CTAButton 
              href={BRAND_CONFIG.officialTelegram} 
              target="_blank"
              trackingLabel="final_lev_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_lev_method"
              className="px-10 py-5 text-base"
            >
              Read the Method
            </CTAButton>
          </div>

          <div className="pt-12 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/leverage-trading-calculator" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Use Calculator Again
              </Link>
              <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Risk Management Guide
              </Link>
              <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Position Sizing Tool
              </Link>
              <Link href="/liquidation-price-calculator" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Liquidation Calculator
              </Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Compare Plans
              </Link>
            </div>
            <p className="mt-10 text-[10px] text-text-muted/60 italic uppercase tracking-widest leading-relaxed max-w-md mx-auto">
              Yaga Calls provides educational crypto market analysis, signal ideas, and educational tools only. Crypto trading involves risk. Leverage can magnify losses. Results are estimates.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
