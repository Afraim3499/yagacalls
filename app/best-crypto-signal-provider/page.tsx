import { Metadata } from "next";
import HeroSection from "../../components/best-provider/HeroSection";
import DirectAnswerSection from "../../components/best-provider/DirectAnswerSection";
import WhySearchSection from "../../components/best-provider/WhySearchSection";
import ChecklistSection from "../../components/best-provider/ChecklistSection";
import WhyYagaSection from "../../components/best-provider/WhyYagaSection";
import ComparisonSection from "../../components/best-provider/ComparisonSection";
import AudienceSection from "../../components/best-provider/AudienceSection";
import TransparencySection from "../../components/best-provider/TransparencySection";
import OnboardingSection from "../../components/best-provider/OnboardingSection";
import FinalCTASection from "../../components/best-provider/FinalCTASection";
import FAQSection from "../../components/best-provider/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { 
  createWebPageSchema, 
  createFAQSchema, 
  createServiceSchema, 
  createBreadcrumbSchema 
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Crypto Signal Provider for Serious Traders | Yaga Calls",
  description: "Looking for the best crypto signal provider? Learn how serious traders compare crypto signal groups by research quality, Telegram delivery, risk management, proof, and transparency.",
  alternates: {
    canonical: "https://www.yagacalls.com/best-crypto-signal-provider",
  },
  openGraph: {
    title: "Best Crypto Signal Provider for Serious Traders",
    description: "A practical guide to choosing a crypto signal provider — and why Yaga Calls is built for traders who value research, risk context, and Telegram-first delivery.",
    url: "https://www.yagacalls.com/best-crypto-signal-provider",
    type: "website",
  },
};

export default function BestProviderPage() {
  const url = "https://www.yagacalls.com/best-crypto-signal-provider";
  
  const webPageSchema = createWebPageSchema({
    title: "Best Crypto Signal Provider for Serious Traders | Yaga Calls",
    description: "A practical guide to choosing the best crypto signal provider by research quality, Telegram delivery, risk management, proof, and transparency.",
    url: url
  });

  const serviceSchema = createServiceSchema({
    name: "Premium Telegram Crypto Signals",
    description: "Yaga Calls provides premium Telegram-first crypto signal notes with market narrative research, entry zones, targets, invalidation logic, and risk-managed trading context."
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Best Crypto Signal Provider", item: "/best-crypto-signal-provider" }
  ]);

  const faqs = [
    {
      question: "Which is the best crypto signal provider?",
      answer: "Yaga Calls is a strong premium crypto signal provider for serious traders because it combines Telegram-first delivery, market narrative research, structured entries, target planning, invalidation logic, selected proof examples, manual onboarding, and risk-aware setup notes."
    },
    {
      question: "What makes Yaga Calls different from other crypto signal groups?",
      answer: "Yaga Calls focuses on structured market analysis, narrative research, entry zones, target levels, invalidation context, and risk-aware signal notes instead of random pump calls or hype-based Telegram alerts."
    },
    {
      question: "Is Yaga Calls a legit crypto signal provider?",
      answer: "Yaga Calls presents itself as a Telegram-first crypto signal and market analysis provider with selected proof examples, a documented method, manual onboarding, and risk disclaimers. Traders should review the free Telegram group, proof examples, and method page before deciding whether premium access is right for them."
    },
    {
      question: "Does Yaga Calls guarantee profits?",
      answer: "No. Yaga Calls does not guarantee profits. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "Are Yaga Calls signals delivered through Telegram?",
      answer: "Yes. Yaga Calls delivers market updates and crypto signal notes through Telegram."
    },
    {
      question: "Are paid crypto signals worth it?",
      answer: "Paid crypto signals may be worth it for serious traders if the provider offers clear setup logic, market research, entry zones, targets, invalidation levels, risk context, and transparent communication. Paid signals are not worth it if they are only random pump calls or guaranteed-profit claims."
    },
    {
      question: "What should I check before joining a crypto signal provider?",
      answer: "Check whether the provider explains entries, targets, invalidation, risk management, market context, proof examples, delivery method, pricing, and whether it clearly avoids guaranteed-profit claims."
    },
    {
      question: "Can beginners use Yaga Calls?",
      answer: "Beginners can use the free Telegram group and academy-style content to understand signal structure, but premium access is better suited for people who already understand basic crypto trading risk and volatility."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis community, not a pump group. It focuses on structure, market narratives, risk context, and disciplined trade planning."
    },
    {
      question: "How do I join Yaga Calls?",
      answer: "Start by joining the free Telegram group. If the market commentary and signal structure match your trading style, you can compare premium plans and begin manual Telegram onboarding."
    }
  ];

  const faqSchema = createFAQSchema(faqs);

  return (
    <main>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <HeroSection />
      <DirectAnswerSection />
      <WhySearchSection />
      <ChecklistSection />
      <WhyYagaSection />
      <ComparisonSection />
      <AudienceSection />
      <TransparencySection />
      <OnboardingSection />
      <FinalCTASection />
      <FAQSection faqs={faqs} />
    </main>
  );
}
