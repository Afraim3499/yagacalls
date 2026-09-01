import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import BackgroundSpine from "@/components/home/BackgroundSpine";
import ReviewTrustBar from "@/components/home/ReviewTrustBar";
import TrustStrip from "@/components/home/TrustStrip";
import DirectAnswer from "@/components/home/DirectAnswer";

const WhyJoin = dynamic(() => import("@/components/home/WhyJoin.js").then(mod => mod.default));
const ComparisonTrap = dynamic(() => import("@/components/home/ComparisonTrap.js").then(mod => mod.default));
const WhatYouGet = dynamic(() => import("@/components/home/WhatYouGet.js").then(mod => mod.default));
const FreeVsPremium = dynamic(() => import("@/components/home/FreeVsPremium.js").then(mod => mod.default));
const AudienceSection = dynamic(() => import("@/components/home/AudienceSection.js").then(mod => mod.default));
const ProofPreview = dynamic(() => import("@/components/home/ProofPreview.js").then(mod => mod.default));
const RegionalBlock = dynamic(() => import("@/components/home/RegionalBlock.js").then(mod => mod.default));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA.js").then(mod => mod.default));
const FAQSection = dynamic(() => import("@/components/home/FAQSection.js").then(mod => mod.default));
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema, createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Professional Crypto Signals & Risk-Aware Trading",
  description: "Yaga Calls — also known as Yagacall or Yaga Call — provides premium Telegram crypto signals, market narrative research, and risk-managed setup ideas.",
  alternates: {
    canonical: "https://www.yagacalls.com/",
  },
  openGraph: {
    title: "Yaga Calls — Premium Telegram Crypto Signals",
    description: "Structured crypto setup ideas, narrative-driven market analysis, and risk-managed signal notes delivered through Telegram.",
    url: "https://www.yagacalls.com/",
    siteName: "Yaga Calls",
    type: "website",
    images: [
      {
        url: "https://www.yagacalls.com/api/og?title=Yaga%20Calls%20%E2%80%94%20Premium%20Telegram%20Crypto%20Signals&subtitle=Structured%20crypto%20setup%20ideas%2C%20narrative-driven%20market%20analysis%2C%20and%20risk-managed%20signal%20notes",
        width: 1200,
        height: 630,
        alt: "Yaga Calls — Premium Telegram Crypto Signals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaga Calls — Premium Telegram Crypto Signals",
    description: "Structured crypto setup ideas, narrative-driven market analysis, and risk-managed signal notes delivered through Telegram.",
    images: ["https://www.yagacalls.com/api/og?title=Yaga%20Calls%20%E2%80%94%20Premium%20Telegram%20Crypto%20Signals&subtitle=Structured%20crypto%20setup%20ideas%2C%20narrative-driven%20market%20analysis%2C%20and%20risk-managed%20signal%20notes"],
  },
};

export default function HomePage() {
  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls | Professional Crypto Signals With Risk Management",
    description: "Yaga Calls provides premium Telegram crypto signals, market narrative research, clear entries, targets, invalidation levels, and risk-managed setup ideas for serious traders.",
    url: "https://www.yagacalls.com/"
  });

  const serviceSchema = createServiceSchema({
    name: "Premium Telegram Crypto Signals",
    description: "Premium Telegram-first crypto signal notes with market narrative research, entry zones, targets, invalidation logic, and risk-managed trading context."
  });

  const faqs = [
    {
      question: "Is Yaga Calls a crypto signal provider?",
      answer: "Yes. Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup ideas, market narratives, entry zones, targets, invalidation logic, and risk-managed trading context."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is not positioned as a pump group. It focuses on narrative research, technical structure, and risk context instead of random hype calls or pump-and-dump alerts."
    },
    {
      question: "Does Yaga Calls guarantee profit?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "How are Yaga Calls signals delivered?",
      answer: "Yaga Calls delivers market updates and crypto signal notes through Telegram."
    },
    {
      question: "Can I join Yaga Calls for free first?",
      answer: "Yes. Visitors can join the free Telegram group first to understand Yaga Calls’ market commentary, selected examples, and communication style before considering premium access."
    },
    {
      question: "Who is Yaga Calls best for?",
      answer: "Yaga Calls is best for serious traders who want structured crypto setup ideas, market narrative research, Telegram-based updates, and disciplined risk context."
    },
    {
      question: "Who should avoid Yaga Calls?",
      answer: "Yaga Calls is not suitable for users looking for guaranteed returns, cheap lifetime VIP access, pump calls, no-loss trading, or gambling-style signals."
    },
    {
      question: "What makes Yaga Calls different from other crypto signal groups?",
      answer: "Yaga Calls focuses on structured signal logic, market narrative research, entry and target planning, invalidation context, risk awareness, and manual premium onboarding."
    }
  ];

  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" }
  ]);

  return (
    <div className="relative bg-[#070605] overflow-hidden min-h-screen">
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 3-POINT LIGHTING SPINE & CONTINUOUS GRID MATRIX CANVAS */}
      <BackgroundSpine />

      {/* HERO & REVIEW TRUST BAR */}
      <Hero />
      <ReviewTrustBar />

      {/* SECTION DIVIDER STROKE 1 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <DirectAnswer />

      {/* SECTION DIVIDER STROKE 2 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <TrustStrip />
      
      {/* SECTION DIVIDER STROKE 3 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <WhyJoin />

      {/* SECTION DIVIDER STROKE 4 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <ComparisonTrap />

      {/* SECTION DIVIDER STROKE 5 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <WhatYouGet />

      {/* SECTION DIVIDER STROKE 6 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <FreeVsPremium />

      {/* SECTION DIVIDER STROKE 7 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <AudienceSection />

      {/* SECTION DIVIDER STROKE 8 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <ProofPreview />

      {/* SECTION DIVIDER STROKE 9 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <RegionalBlock />

      {/* SECTION DIVIDER STROKE 10 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <FinalCTA />

      {/* SECTION DIVIDER STROKE 11 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent relative z-20" />

      <FAQSection />
    </div>
  );
}
