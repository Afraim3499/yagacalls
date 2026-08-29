import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import AuthorByline from "@/components/blog/AuthorByline";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import PositionSizingCalculator from "@/components/tools/PositionSizingCalculator";
import { createHowToSchema, createWebPageSchema, createBreadcrumbSchema, createFAQSchema } from "@/lib/schema";
import {
  ShieldCheck,
  Target,
  AlertTriangle,
  Zap,
  CheckCircle2,
  X,
  Calculator,
  Activity,
  UserCheck,
  FileText,
  PieChart,
  TrendingUp,
  Eye
} from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants/brand";

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
    images: [{ url: "https://www.yagacalls.com/api/og?title=Position%20Sizing%20Calculator&subtitle=Risk%2C%20Stop-Loss%20%26%20Target%20Price%20Tool", width: 1200, height: 630, alt: "Crypto Position Sizing Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Position Sizing Calculator",
    description: "Estimate crypto trade size using account size, risk per trade, entry, stop-loss and target price. Learn position sizing, stop distance and risk-to-reward.",
    images: ["https://www.yagacalls.com/api/og?title=Position%20Sizing%20Calculator&subtitle=Risk%2C%20Stop-Loss%20%26%20Target%20Price%20Tool"],
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

  const howToSchema = createHowToSchema({
    name: "How to Use the Crypto Position Sizing Calculator",
    description: "Calculate a risk-aware crypto trade size from account equity, risk tolerance, and stop distance in five steps.",
    url: "https://www.yagacalls.com/position-sizing-calculator",
    steps: [
      { name: "Enter account size and risk type", text: "Enter your account size and choose a risk type — a fixed percentage of equity or a fixed dollar amount." },
      { name: "Set leverage", text: "Enter the leverage multiplier you're considering for the trade." },
      { name: "Choose direction and entry price", text: "Select long or short, then enter your planned entry price." },
      { name: "Enter stop-loss (and optional target)", text: "Enter your stop-loss price, and optionally a target price for risk-to-reward context." },
      { name: "Review the calculated position size", text: "Review the calculated position size, dollar risk, and risk-to-reward before entering the trade." }
    ]
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...createWebPageSchema({
          title: "Crypto Position Sizing Calculator | Risk & Stop-Loss Tool",
          description: "Calculate crypto trade size from account equity, risk, and stop distance.",
          url: "https://www.yagacalls.com/position-sizing-calculator",
          speakableSelectors: [".faq-answer"]
        }),
        "@context": undefined
      },
      {
        "@type": "SoftwareApplication",
        "name": "Crypto Position Sizing Calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web",
        "description": "A free educational crypto position sizing calculator that estimates trade size from account size, risk, entry price, stop-loss price and optional target price.",
        "url": "https://www.yagacalls.com/position-sizing-calculator",
        "author": { "@type": "Person", "name": "Dmitry Voronov", "jobTitle": "Senior On-Chain & Data Analyst", "url": "https://www.yagacalls.com/authors/dmitry-voronov" }
      },
      {
        ...createBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Tools", item: "/academy" },
          { name: "Position Sizing Calculator", item: "/position-sizing-calculator" }
        ]),
        "@context": undefined
      },
      {
        ...createFAQSchema(faqs),
        "@context": undefined
      },
      { ...howToSchema, "@context": undefined }
    ]
  };

  return (
    <main className="bg-transparent text-[#FFFFFF] relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ARCHETYPE C: SINGLE CENTERED CONTAINER HERO */}
      <Section className="pt-24 pb-16 md:pt-36 md:pb-20 bg-transparent overflow-hidden relative">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 text-center relative z-10">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-4 py-2 rounded-full inline-block border border-[#A38B5D]/30">
                Risk Management Tool
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-[#FFFFFF]">
                Crypto Position <br />
                <span className="bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text text-transparent">
                  Sizing Calculator
                </span>
              </h1>
              <AuthorByline authorSlug="dmitry-voronov" className="mt-4 justify-center" />
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed font-medium">
                Estimate crypto position size based on account size, planned risk, entry price, stop-loss price, and optional target price.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
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
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — CALCULATOR CONTAINER */}
      <Section id="calculator" className="bg-transparent py-12 overflow-hidden">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#FFFFFF]">Calculate Your Trade Size</h2>
              <p className="text-xs text-[#A1A1AA] font-medium leading-relaxed italic">
                Educational tool only. Estimates trade exposure from planned stop-loss parameters.
              </p>
            </div>

            {/* Inset Charcoal Calculator Tool Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[rgba(14,15,18,0.85)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/40 to-transparent" />
              <PositionSizingCalculator />
            </div>

            <div className="p-6 bg-[#070605] border border-[rgba(243,208,129,0.08)] rounded-2xl text-center">
              <p className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                DISCLAIMER: This calculator is for educational demonstration only. It does not guarantee profit, safety, or loss prevention. Crypto trading involves significant risk.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — DIRECT ANSWER BLOCK */}
      <Section className="bg-transparent py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 bg-[rgba(14,15,18,0.75)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.12)] rounded-3xl relative overflow-hidden space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#E2C896] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#FFFFFF]">What Is Position Sizing in Crypto?</h2>
              </div>
              
              <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                <p className="text-[#FFFFFF] font-bold">
                  Position sizing is the process of deciding how large a crypto trade should be based on account size, planned risk, entry price, and stop-loss distance.
                </p>
                <p>
                  It helps traders control how much they could lose if the trade fails. Position size is not the same as risk. A large position can have small risk if the stop is tight, while a small position can still be risky if the stop is wide or leverage is high.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — WHY IT MATTERS */}
      <Section className="bg-transparent py-16">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
                Why Position Sizing <span className="text-[#E2C896]">Matters</span>
              </h2>
              <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto font-bold">
                Position sizing turns risk from an emotion into math.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Controls Downside", d: "Starts with the amount you are prepared to lose if the trade fails.", icon: <ShieldCheck size={20} className="text-[#E2C896]" /> },
                { t: "Connects Stop to Risk", d: "A wider stop usually requires a smaller position to keep risk controlled.", icon: <Target size={20} className="text-[#E2C896]" /> },
                { t: "Reduces Emotion", d: "Clear sizing can reduce panic because the loss is planned before entry.", icon: <UserCheck size={20} className="text-[#E2C896]" /> },
                { t: "Protects Survival", d: "Small controlled losses help traders survive inevitable losing streaks.", icon: <Activity size={20} className="text-[#E2C896]" /> }
              ].map((card, i) => (
                <div key={i} className="p-6 bg-[rgba(14,15,18,0.75)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.10)] rounded-2xl space-y-3 hover:border-[rgba(243,208,129,0.25)] transition-colors">
                  <div className="w-10 h-10 bg-[#070605] rounded-xl flex items-center justify-center border border-[rgba(243,208,129,0.08)]">
                    {card.icon}
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#FFFFFF]">{card.t}</h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
