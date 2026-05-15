import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import LiquidationPriceCalculator from "@/components/tools/LiquidationPriceCalculator";
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
  Eye,
  Navigation,
  Compass,
  Briefcase
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
const CANONICAL_URL = `${SITE_URL}/liquidation-price-calculator`;

export const metadata: Metadata = {
  title: "Crypto Liquidation Price Calculator | Estimate Leverage Risk",
  description: "Estimate approximate crypto liquidation price for long and short leverage trades. Learn margin, maintenance margin, stop-loss risk and liquidation warnings.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Crypto Liquidation Price Calculator",
    description: "Estimate approximate liquidation-risk levels for leveraged crypto trades. Learn how leverage, margin, stop-losses and exchange rules affect liquidation risk.",
    url: CANONICAL_URL,
    type: "website",
  }
};

export default function LiquidationPriceCalculatorPage() {
  const faqs = [
    {
      question: "What is a crypto liquidation price calculator?",
      answer: "A crypto liquidation price calculator estimates the approximate price area where a leveraged position may face forced closure by an exchange. It is educational only because exact liquidation depends on exchange rules, margin mode, fees, funding, mark price, collateral, and risk tiers."
    },
    {
      question: "What is liquidation in crypto trading?",
      answer: "Liquidation happens when an exchange closes a leveraged position because the margin is no longer enough to support the trade. It can happen quickly in volatile markets."
    },
    {
      question: "Can this calculator show exact liquidation price?",
      answer: "No. This calculator provides a simplified liquidation-risk estimate. Exact liquidation price varies by exchange, margin mode, maintenance margin, fees, funding, collateral, mark price, and risk rules."
    },
    {
      question: "What is the difference between liquidation and stop-loss?",
      answer: "A stop-loss is a planned exit controlled by the trader or platform order. Liquidation is a forced exit controlled by the exchange when margin requirements are no longer met."
    },
    {
      question: "Does higher leverage make liquidation closer?",
      answer: "Yes. Higher leverage usually moves the liquidation-risk area closer to the entry price, leaving less room for normal market volatility."
    },
    {
      question: "Is isolated margin easier to estimate than cross margin?",
      answer: "Yes. Isolated margin is easier to estimate because the margin assigned to one position is separated. Cross margin depends on broader account balance, collateral, and other positions."
    },
    {
      question: "Should my stop-loss be before liquidation?",
      answer: "Usually, yes. A stop-loss should normally be planned before the liquidation-risk area. If liquidation may happen before the stop, the trade may be too aggressive."
    },
    {
      question: "How should Telegram signal users check liquidation risk?",
      answer: "Telegram signal users should verify the official source, check entry validity, calculate position size, estimate liquidation risk, and ensure the stop-loss comes before the liquidation-risk area."
    },
    {
      question: "Does Yaga Calls guarantee liquidation protection?",
      answer: "No. Yaga Calls does not guarantee liquidation protection, profit, or execution quality. It provides educational market analysis and signal ideas only."
    },
    {
      question: "What affects real liquidation price?",
      answer: "Real liquidation price can be affected by leverage, margin mode, maintenance margin, fees, funding, mark price, collateral, risk tiers, exchange rules, and unrealized PnL."
    }
  ];

  const webPageSchema = createWebPageSchema({
    title: "Crypto Liquidation Price Calculator | Estimate Leverage Risk",
    description: "Educational tool to estimate crypto liquidation levels and risk.",
    url: CANONICAL_URL,
    datePublished: "2024-05-16",
    dateModified: "2024-05-16"
  });

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Crypto Liquidation Price Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": "A free educational crypto liquidation price calculator that estimates approximate liquidation-risk reference for long and short leveraged trades using entry price, position size, leverage, margin, and maintenance margin.",
    "url": CANONICAL_URL,
    "author": { "@type": "Organization", "name": "Yaga Calls" }
  };

  const organizationSchema = createOrganizationSchema();
  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Tools", item: "/academy" },
    { name: "Liquidation Price Calculator", item: "/liquidation-price-calculator" }
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
                Leverage Risk Tool
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                Crypto Liquidation <br />
                <span className="text-primary">Price Calculator</span>
              </h1>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-text leading-tight font-bold uppercase tracking-tight">
                Use this calculator to estimate an approximate liquidation-risk reference for a leveraged crypto trade based on entry price, direction, position size, leverage, and maintenance margin.
              </p>
              <p className="text-sm text-text-muted/80 leading-relaxed font-medium">
                Liquidation calculations are exchange-specific. This tool is for education and risk awareness, not exact exchange liquidation prediction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <CTAButton 
                href="#calculator" 
                trackingLabel="hero_liq_scroll"
              >
                Use Calculator
              </CTAButton>
              <CTAButton 
                href="/crypto-risk-management" 
                variant="secondary"
                trackingLabel="hero_liq_risk"
              >
                Risk Management Guide
              </CTAButton>
              <CTAButton 
                href="/leverage-trading-calculator" 
                variant="secondary"
                className="hidden sm:inline-flex"
              >
                Use Leverage Calculator
              </CTAButton>
            </div>

            <div className="pt-8 p-6 bg-background/40 border border-line rounded-3xl backdrop-blur-sm">
              <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-widest max-w-2xl mx-auto">
                Educational tool only. Crypto trading involves risk. Liquidation estimates may differ from real exchange liquidation because of margin mode, maintenance margin, mark price, fees, funding, spread, collateral, risk tiers, and execution rules.
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
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Estimate Your Liquidation Risk</h2>
              <p className="text-sm text-text-muted font-medium leading-relaxed italic">
                Use this calculator to estimate an approximate liquidation-risk reference for leveraged crypto trades. The result is educational only.
              </p>
            </div>

            <LiquidationPriceCalculator />

            <div className="p-8 bg-surface-deep border border-line rounded-[32px] text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60 leading-relaxed max-w-2xl mx-auto">
                This calculator is not financial advice. It does not calculate exact liquidation price for every exchange and does not guarantee safety, execution, profit, or loss prevention.
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
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is a Crypto Liquidation Price Calculator?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    A crypto liquidation price calculator estimates the approximate price area where a leveraged position may be at risk of being closed by an exchange.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    It uses inputs such as entry price, leverage, position size, margin, and maintenance margin. The result is only an educational estimate because exact liquidation rules vary by exchange, margin mode, fees, funding, mark price, collateral, and risk tiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — What Is Liquidation */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">What Is Liquidation <br /><span className="text-primary">in Crypto Trading?</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                When margin is no longer enough to support the loan.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center">
              <p>
                Liquidation happens when an exchange closes a leveraged position because the margin is no longer enough to support the trade. It is most common in futures and margin trading. Liquidation can happen quickly in crypto because volatility, leverage, fees, and mark-price movement can reduce available margin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { t: "Exchange Controlled", d: "The exchange risk engine decides when to close the position.", icon: <Search size={20} className="text-primary" /> },
                { t: "Not a Stop-Loss", d: "Liquidation is a forced exit, not a planned risk strategy.", icon: <ShieldAlert size={20} className="text-primary" /> },
                { t: "High Leverage Risk", d: "Using high leverage moves the liquidation area closer to entry.", icon: <Zap size={20} className="text-primary" /> },
                { t: "Mark Price Impact", d: "Exchanges often use mark price instead of last price to trigger liquidation.", icon: <Activity size={20} className="text-primary" /> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                  <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-text">{item.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-danger/5 border border-danger/20 rounded-[32px] text-center">
              <p className="text-xl text-text font-black uppercase tracking-tight">
                "Liquidation is not a risk-management strategy. It is what happens when risk control fails."
              </p>
              <div className="pt-4">
                <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                  Read the full risk disclosure
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Liquidation vs Stop-Loss */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Liquidation Price <br /><span className="text-primary">vs Stop-Loss</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Invalidation explains why to exit. The stop-loss controls how to exit.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                A stop-loss is a planned exit controlled by the trader or trading system. Liquidation is a forced exit controlled by the exchange when margin requirements are no longer met. A stop-loss should usually be planned before the liquidation-risk area, but execution is never guaranteed in fast markets.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Concept</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Who Controls It</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Main Purpose</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Main Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { c: "Stop-Loss", w: "Trader or trading platform order.", p: "Exit a trade before risk becomes larger.", r: "Slippage, gaps, poor placement, or emotional removal." },
                    { c: "Liquidation", w: "Exchange risk engine.", p: "Protect exchange from insufficient margin.", r: "Forced exit, fees, loss of margin, and possible worse outcome." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.c}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.w}</td>
                      <td className="px-8 py-8 text-xs text-text font-bold uppercase tracking-tight">{row.p}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center pt-8">
              <Link href="/how-to-set-stop-losses-in-crypto" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Learn how to set stop-losses in crypto →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Isolated vs Cross */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Isolated Margin <br /><span className="text-primary">vs Cross Margin</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Different ways to handle account exposure.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                In isolated margin, only the margin assigned to that position is used to support the trade. In cross margin, the exchange may use available account balance to support the position. This calculator uses a simplified isolated-margin model because cross-margin liquidation depends on account-level variables.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Margin Mode</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">How It Works</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Liquidation Impact</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Calculator Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { m: "Isolated Margin", h: "Margin is assigned to one position.", i: "Risk is limited to that position's margin.", c: "Simplified estimate can approximate risk area." },
                    { m: "Cross Margin", h: "Available account balance supports positions.", i: "Other funds can affect liquidation level.", c: "Cannot calculate accurately without account data." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.m}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.h}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.i}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-surface-deep border border-line rounded-[32px] text-center">
              <p className="text-sm text-text-muted font-bold uppercase tracking-widest">
                Cross margin can delay liquidation, but it can also expose more account capital.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Leverage Effect */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How Leverage <br /><span className="text-primary">Changes Liquidation Risk</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                The higher the leverage, the less space the trade has to be wrong.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-background/50">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Leverage</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Approx. Move Before Risk Area</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Risk Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { l: "2x", m: "About 50%", r: "More room, still risky." },
                    { l: "5x", m: "About 20%", r: "Less room for volatility." },
                    { l: "10x", m: "About 10%", r: "Small adverse move can be dangerous." },
                    { l: "20x", m: "About 5%", r: "Normal crypto volatility can approach area." },
                    { l: "50x", m: "About 2%", r: "Extremely small room for error." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.l}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.m}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-xs text-text-muted italic leading-relaxed font-medium">
              This table is simplified for education only. Real liquidation depends on exchange-specific rules, maintenance margin, fees, and funding.
            </p>

            <div className="text-center">
              <Link href="/leverage-trading-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Use the leverage trading calculator →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Long vs Short Table */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Long vs Short <br /><span className="text-primary">Liquidation</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Two directions, different risk vectors.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Direction</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Trade Wins When</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Liquidation Risk Area</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Stop-Loss Sits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { d: "Long", w: "Price rises.", r: "Below entry price.", s: "Below entry but ideally before liquidation." },
                    { d: "Short", w: "Price falls.", r: "Above entry price.", s: "Above entry but ideally before liquidation." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.d}</td>
                      <td className="px-8 py-8 text-xs text-text-muted font-medium">{row.w}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.r}</td>
                      <td className="px-8 py-8 text-xs text-text-muted font-medium italic">{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-sm text-text-muted font-bold uppercase tracking-widest">
              Short positions are not safer than longs. They are simply exposed to the opposite direction.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Maint Margin */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Maintenance Margin <br /><span className="text-primary">& Risk Tiers</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                The minimum buffer to keep the trade alive.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center">
              <p>
                Maintenance margin is the minimum margin required to keep a leveraged position open. Many exchanges use risk tiers, which means larger positions may require higher maintenance margin. This can change the actual liquidation price. Fees and funding can also reduce available margin over time.
              </p>
            </div>

            <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary text-center">Core Principles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <p className="text-xs text-text-muted font-medium leading-relaxed">Maintenance margin is exchange-specific and often calculated dynamically.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <p className="text-xs text-text-muted font-medium leading-relaxed">Larger positions may face higher maintenance margin requirements (Risk Tiers).</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <p className="text-xs text-text-muted font-medium leading-relaxed">Fees and funding payments can slowly reduce your available margin.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <p className="text-xs text-text-muted font-medium leading-relaxed">If your exchange shows a different liquidation price, trust the exchange's risk engine.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Stop-Loss Before Liq */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Stop-Loss Should <br /><span className="text-primary">Be Before Liquidation</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Plan the exit before the exchange forces it.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                A stop-loss is usually meant to exit a position before liquidation risk becomes critical. If the liquidation-risk reference is close to or before the planned stop, the trade may be over-leveraged, oversized, or poorly structured.
              </p>
            </div>

            <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
              <h4 className="text-xl font-black uppercase tracking-tighter text-primary text-center">Pre-Trade Risk Checklist</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Find your technical invalidation level.",
                  "Place your stop-loss based on structure.",
                  "Estimate the approximate liquidation-risk area.",
                  "Verify if stop-loss is reached before liquidation.",
                  "Reduce leverage or position size if needed.",
                  "Never treat liquidation as your primary risk plan."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0 md:last:border-b">
                    <span className="text-primary font-black">{i + 1}.</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-text-muted font-bold uppercase tracking-widest italic opacity-60">
                "If liquidation is closer than your stop-loss, the trade is not properly controlled."
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Telegram Signals */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Liquidation Risk & <br /><span className="text-primary">Telegram Crypto Signals</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                A fast signal still requires a personal risk check.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center">
              <p>
                Telegram signal users should check liquidation risk before entering leveraged trades. If the entry has moved, the stop-loss distance, position size, leverage, and liquidation-risk area may no longer match the original setup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-danger">Telegram Danger Zone</h4>
                <ul className="space-y-4">
                  {[
                    "Entering late after price moved.",
                    "Using too much leverage.",
                    "Copying someone else's size.",
                    "Ignoring invalidation logic.",
                    "Following unofficial signal admins."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X size={16} className="text-danger shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Telegram Pro Zone</h4>
                <ul className="space-y-4">
                  {[
                    "Verify signal authenticity.",
                    "Confirm entry zone validity.",
                    "Calculate size correctly.",
                    "Check liquidation vs stop-loss.",
                    "Stay disciplined under pressure."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 size={16} className="text-primary shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Telegram signals guide</Link>
              <Link href="/crypto-trading-telegram-group" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Choose a Telegram group safely</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Common Mistakes */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Common Crypto <br /><span className="text-danger">Liquidation Mistakes</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Most liquidations are warnings that were ignored.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { m: "Liquidation as a Stop", d: "Treating forced exit as a valid risk plan." },
                { m: "Leverage FOMO", d: "Using high leverage just because margin looks small." },
                { m: "Ignoring Maint. Margin", d: "Not accounting for the buffer exchanges require." },
                { m: "Cross Margin Blindness", d: "Exposing full account to one losing trade." },
                { m: "Chasing Late Signals", d: "Entering after price moved, moving liquidation closer." },
                { m: "Ignoring Fees/Funding", d: "Not realizing that costs reduce available margin." },
                { m: "Emotional Sizing", d: "Increasing leverage after a losing streak." },
                { m: "Mark Price Surprise", d: "Not understanding mark price vs last price liquidation." },
                { m: "Trading Essential Funds", d: "Using money needed for personal expenses." }
              ].map((mistake, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-3 group hover:border-danger/30 transition-colors">
                  <div className="flex gap-3 items-center text-danger">
                    <X size={18} />
                    <h4 className="text-xs font-black uppercase tracking-widest leading-tight">{mistake.m}</h4>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{mistake.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Yaga Calls Approach */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">How Yaga Calls <br /><span className="text-primary">Approaches Liquidation Risk</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
                Yaga Calls does not remove risk. It keeps risk part of the setup conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Market Reason", d: "Why does the setup deserve attention?", icon: <FileText /> },
                { t: "Entry Zone", d: "Where does the trade begin making sense?", icon: <Target /> },
                { t: "Target Planning", d: "Where should the setup be reviewed?", icon: <Navigation /> },
                { t: "Invalidation", d: "Where does the idea become wrong?", icon: <ShieldAlert /> },
                { t: "Stop-Loss Context", d: "Where should downside be controlled?", icon: <ShieldCheck /> },
                { t: "Sizing Awareness", d: "How much exposure fits the planned risk?", icon: <PieChart /> },
                { t: "Liquidation Check", d: "Does leverage create forced-exit danger?", icon: <Zap /> },
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

      {/* SECTION 13 — Liquidation Risk Checklist */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Crypto Liquidation <br /><span className="text-primary">Risk Checklist</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
              Before entering a leveraged trade, check these variables.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-background border border-line rounded-[48px] text-left shadow-2xl">
              {[
                "Direction is clear.",
                "Entry price is known.",
                "Position size is calculated.",
                "Leverage is intentional.",
                "Initial margin is understood.",
                "Maintenance margin is considered.",
                "Liquidation-risk area is estimated.",
                "Stop-loss is planned before liquidation.",
                "Invalidation logic is clear.",
                "Fees and funding are considered.",
                "Margin mode is understood.",
                "Exchange liquidation estimate is verified.",
                "Signal source is official Yaga Calls.",
                "Account risk is emotionally acceptable."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0 md:last:border-b group">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0 group-hover:rotate-12 transition-transform" /> {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — Who Should Use */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Who Should Use <br /><span className="text-primary">This Calculator?</span></h2>
              <ul className="space-y-4">
                {[
                  "Futures and margin traders.",
                  "Leverage users.",
                  "Telegram signal followers.",
                  "Traders comparing SL vs Liq risk.",
                  "Users learning isolated margin logic.",
                  "Traders evaluating signal quality."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">When Is It <br /><span className="text-danger">Not Enough?</span></h2>
              <ul className="space-y-4">
                {[
                  "If you need exact exchange precision.",
                  "If you ignore exchange risk tiers.",
                  "If you use cross margin recklessly.",
                  "If you chase late market entries.",
                  "If you ignore stop-loss planning.",
                  "If you cannot accept trading losses."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                    <X size={16} className="text-danger shrink-0" /> {item}
                  </li>
                ))}
              </ul>
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
              Plan the Risk. <br />
              <span className="text-primary">Trade the Plan.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              A leveraged crypto trade is not fully planned until the trader understands entry, size, leverage, margin, stop-loss, and liquidation-risk area.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="#calculator" 
              trackingLabel="final_liq_calc"
              className="px-10 py-5 text-base"
            >
              Use Calculator Again
            </CTAButton>
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              variant="secondary"
              trackingLabel="final_liq_free"
              className="px-10 py-5 text-base border-primary/20"
            >
              Join Free Telegram
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/leverage-trading-calculator" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Leverage Calculator
              </Link>
              <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Position Sizing Tool
              </Link>
              <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Risk Management Guide
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Proof Examples
              </Link>
            </div>
            <p className="mt-10 text-[10px] text-text-muted/60 italic uppercase tracking-widest leading-relaxed max-w-md mx-auto">
              Yaga Calls provides educational crypto market analysis, signal ideas, and educational tools only. Crypto trading involves risk. Estimates are simplified and do not guarantee accuracy, safety, or loss prevention.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
