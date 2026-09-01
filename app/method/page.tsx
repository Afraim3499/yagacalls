import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import SignalCheck from "@/components/shared/SignalCheck";
import MethodHero from "@/components/method/MethodHero";
import MethodFramework from "@/components/method/MethodFramework";
import MethodComparison from "@/components/method/MethodComparison";
import FAQSection from "../../components/shared/FAQSection";
import Image from "next/image";
import Link from "next/link";
import { X, BookOpen, Clock, ShieldCheck } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import { createWebPageSchema, createBreadcrumbSchema, createFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Trading Method: Narrative & Risk Control",
  description: "Learn how the Yaga Calls method uses market narratives, technical structure, entry zones, targets, invalidation, and risk management before sharing crypto signal notes.",
  alternates: {
    canonical: "https://www.yagacalls.com/method",
  },
  openGraph: {
    locale: "en_US",
    siteName: "Yaga Calls",
    title: "The Yaga Calls Method — Narrative, Timing & Risk",
    description: "See how Yaga Calls structures crypto signal notes using market narratives, technical validation, entry zones, targets, invalidation, and risk-aware planning.",
    images: [{ url: "https://www.yagacalls.com/api/og?title=The%20Yaga%20Calls%20Method%20%E2%80%94%20Narrative%2C%20Timing%20%26%20Risk&subtitle=See%20how%20Yaga%20Calls%20structures%20crypto%20signal%20notes%20using%20market%20narratives%2C%20technical%20validation%2C%20entry%20zones%2C%20targets%2C%20invalidation%2C%20and%20risk-aware%20planning.", width: 1200, height: 630, alt: "The Yaga Calls Method — Narrative, Timing & Risk" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Yagacalls",
    creator: "@Yagacalls",
    title: "The Yaga Calls Method — Narrative, Timing & Risk",
    description: "See how Yaga Calls structures crypto signal notes using market narratives, technical validation, entry zones, targets, invalidation, and risk-aware planning.",
    images: ["https://www.yagacalls.com/api/og?title=The%20Yaga%20Calls%20Method%20%E2%80%94%20Narrative%2C%20Timing%20%26%20Risk&subtitle=See%20how%20Yaga%20Calls%20structures%20crypto%20signal%20notes%20using%20market%20narratives%2C%20technical%20validation%2C%20entry%20zones%2C%20targets%2C%20invalidation%2C%20and%20risk-aware%20planning."],
  }
};

export default function MethodPage() {
  const faqs = [
    {
      question: "What is the Yaga Calls method?",
      answer: "The Yaga Calls method is a structured crypto signal framework that combines market narrative research, technical setup validation, entry zone planning, target mapping, invalidation logic, risk management, and Telegram-based signal delivery."
    },
    {
      question: "Does Yaga Calls use risk management?",
      answer: "Yes. Yaga Calls emphasizes risk-aware setup notes, invalidation logic, stop-loss context, and position sizing awareness. Crypto trading still involves risk, and no signal provider can guarantee profit."
    },
    {
      question: "What is invalidation in a crypto signal?",
      answer: "Invalidation is the point where the original trade idea becomes wrong or no longer makes sense. It helps traders know when to reassess instead of holding emotionally."
    },
    {
      question: "Why does Yaga Calls focus on market narratives?",
      answer: "Crypto markets often move through narratives such as sector rotation, ecosystem catalysts, exchange listings, liquidity shifts, macro sentiment, and crowd attention. Yaga Calls uses narrative research to understand why a setup may matter."
    },
    {
      question: "Are Yaga Calls signals just buy alerts?",
      answer: "No. Yaga Calls is positioned around structured setup notes that include market context, entry zones, target planning, invalidation logic, and risk context instead of random buy alerts."
    },
    {
      question: "Does the Yaga Calls method guarantee profit?",
      answer: "No. The Yaga Calls method does not guarantee profit. It is an educational market analysis framework. Crypto trading involves risk, and every trader is responsible for their own decisions."
    },
    {
      question: "How are Yaga Calls signals delivered?",
      answer: "Yaga Calls delivers market updates and crypto signal notes through Telegram so traders can follow fast-moving market conditions in a mobile-friendly format."
    },
    {
      question: "What should a good crypto signal include?",
      answer: "A good crypto signal should include the asset, market reason, entry zone, target levels, invalidation or stop-loss context, risk awareness, and follow-up logic where necessary."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider. It avoids blind pump calls, guaranteed-profit claims, and no-stop-loss setups."
    },
    {
      question: "How can I see the Yaga Calls method before paying?",
      answer: "You can join the free Telegram group, read the method page, and review selected proof examples before deciding whether premium access is right for you."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...createWebPageSchema({
          title: "The Yaga Calls Method",
          description: "Learn how the Yaga Calls method uses market narratives, technical structure, entry zones, targets, invalidation, and risk management before sharing crypto signal notes.",
          url: "https://www.yagacalls.com/method"
        }),
        "@context": undefined
      },
      {
        "@type": "HowTo",
        "@id": "https://www.yagacalls.com/method#howto",
        "name": "How the Yaga Calls Method Structures Crypto Signal Ideas",
        "description": "The Yaga Calls method structures crypto signal ideas through narrative research, technical validation, liquidity review, entry planning, invalidation, target mapping, risk context, and Telegram delivery.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Market Narrative Scan",
            "text": "Yaga Calls reviews market narratives, catalysts, sector rotations, liquidity shifts, and attention cycles before considering a setup."
          },
          {
            "@type": "HowToStep",
            "name": "Technical Structure",
            "text": "Yaga Calls checks trend structure, support and resistance, volume behavior, liquidity zones, and broader market conditions."
          },
          {
            "@type": "HowToStep",
            "name": "Entry Zone Planning",
            "text": "A serious setup defines where the idea becomes relevant instead of giving a vague buy alert."
          },
          {
            "@type": "HowToStep",
            "name": "Invalidation Logic",
            "text": "Yaga Calls defines where the setup becomes wrong or should be reassessed."
          },
          {
            "@type": "HowToStep",
            "name": "Target Planning",
            "text": "Targets help traders plan exits or reassessment zones instead of reacting emotionally."
          },
          {
            "@type": "HowToStep",
            "name": "Risk Management",
            "text": "Yaga Calls emphasizes risk context, position sizing awareness, stop-loss thinking, and capital preservation."
          },
          {
            "@type": "HowToStep",
            "name": "Telegram Delivery",
            "text": "Structured signal notes and market updates are delivered through Telegram for fast mobile reading."
          }
        ]
      },
      {
        ...createBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Method", item: "/method" }
        ]),
        "@context": undefined
      },
      {
        ...createFAQSchema(faqs),
        "@context": undefined
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <MethodHero />

      {/* ARCHETYPE B: ELEVATED EDITORIAL READING CONTAINER */}
      <Section className="bg-transparent relative z-10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Reading Card Wrapper */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[rgba(14,15,18,0.75)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.12)] border-t-[rgba(243,208,129,0.25)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-8 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/40 to-transparent" />

              {/* Editorial Category Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[rgba(226,200,150,0.08)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#E2C896]" />
                  <span>INSTITUTIONAL METHODOLOGY</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#12110F] text-[#8A8A93] text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 border border-[rgba(243,208,129,0.08)]">
                  <Clock className="w-3.5 h-3.5 text-[#8A8A93]" />
                  <span>8 MIN READ</span>
                </span>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF] leading-tight">
                  What Is the Yaga Calls Method?
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                  <p>
                    The Yaga Calls method is a structured crypto signal framework built around narrative research, technical validation, entry zones, target planning, invalidation logic, risk management, and Telegram-first delivery.
                  </p>
                  <p>
                    Instead of posting random coin names, Yaga Calls looks for market stories, sector rotations, catalysts, liquidity behavior, and chart structure before sharing setup ideas. The goal is to help traders understand why a setup exists, where the idea makes sense, and where the idea becomes wrong.
                  </p>
                  
                  {/* Blockquote with Champagne Gold Left Border */}
                  <div className="p-6 bg-[rgba(226,200,150,0.04)] border-l-4 border-[#E2C896] rounded-r-2xl mt-8">
                    <p className="text-[#FFFFFF] font-bold italic text-base">
                      &ldquo;The Yaga Calls method is a risk-managed crypto signal framework that combines market narrative research, technical setup validation, entry zone planning, target mapping, invalidation logic, and Telegram-based signal delivery. It is designed for serious traders who want structured market context instead of random pump calls or guaranteed-profit claims.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Why a Crypto Signal Method Matters */}
              <div className="space-y-8 pt-8 border-t border-[rgba(243,208,129,0.08)]">
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-[#FFFFFF]">
                  Why a Crypto Signal Method Matters
                </h2>
                <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                  A crypto signal provider should not be judged only by how exciting the call sounds. A serious provider should be judged by the process behind the call. Without a method, signals become random.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#070605] p-6 sm:p-8 rounded-2xl border border-[rgba(243,208,129,0.10)]">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#71717A]">Weak Signal Strategy</h4>
                    <p className="text-xl font-black text-[#EF4444] italic">&ldquo;Buy this coin now.&rdquo;</p>
                    <p className="text-xs text-[#A1A1AA]">Vague instructions, no entry zone, no risk context, and no logic provided.</p>
                  </div>
                  <div className="space-y-3 border-t md:border-t-0 md:border-l border-[rgba(243,208,129,0.08)] pt-4 md:pt-0 md:pl-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896]">Yaga Calls Method</h4>
                    <div className="space-y-2">
                      {[
                        "Why does this setup matter?",
                        "What market narrative supports it?",
                        "Where is the entry zone and invalidation?",
                        "What are the target levels and risk?",
                      ].map((q, i) => (
                        <div key={i} className="flex gap-2 text-xs font-bold uppercase tracking-tight text-[#FFFFFF]">
                          <span className="text-[#E2C896]">/</span> {q}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </Section>

      <MethodFramework />

      {/* Steps Framework Section */}
      <Section className="bg-transparent relative z-10 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-[rgba(14,15,18,0.75)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.12)] space-y-6">
              <span className="text-xs font-mono text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-3 py-1 rounded-md border border-[#A38B5D]/30 font-bold">
                STEP 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#FFFFFF]">Market Narrative Scan</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Crypto markets move through narratives. A chart may show price, but narrative explains why attention moves.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold uppercase tracking-tight text-[#FFFFFF]">
                {["Sector rotations", "Ecosystem catalysts", "Exchange listings", "Whale behavior", "Liquidity shifts", "Token unlocks"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E2C896]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-[rgba(14,15,18,0.75)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.12)] space-y-6">
              <span className="text-xs font-mono text-[#E2C896] bg-[rgba(226,200,150,0.08)] px-3 py-1 rounded-md border border-[#A38B5D]/30 font-bold">
                STEP 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#FFFFFF]">Technical Validation</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                After narrative scanning, we check whether chart structure supports the idea.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold uppercase tracking-tight text-[#FFFFFF]">
                {["Trend direction", "Support & resistance", "Breakout zones", "Retest areas", "Volume behavior", "Higher timeframes"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E2C896]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </Section>

      <MethodComparison />

      <Section className="bg-transparent relative z-10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SignalCheck />
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
