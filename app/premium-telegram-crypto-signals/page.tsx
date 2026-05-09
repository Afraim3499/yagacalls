import { Metadata } from "next";
import TelegramHero from "../../components/premium-signals/TelegramHero";
import DirectAnswerSection from "../../components/premium-signals/DirectAnswerSection";
import WhyTelegramSection from "../../components/premium-signals/WhyTelegramSection";
import ProblemSection from "../../components/premium-signals/ProblemSection";
import PremiumDefinitionSection from "../../components/premium-signals/PremiumDefinitionSection";
import MemberExpectations from "../../components/premium-signals/MemberExpectations";
import FreeVsPremiumTable from "../../components/premium-signals/FreeVsPremiumTable";
import OnboardingSteps from "../../components/premium-signals/OnboardingSteps";
import SafetyWarning from "../../components/premium-signals/SafetyWarning";
import FinalCTASection from "../../components/premium-signals/FinalCTASection";
import FAQSection from "../../components/premium-signals/FAQSection";
import JsonLd from "../../components/seo/JsonLd";
import { 
  createWebPageSchema, 
  createFAQSchema, 
  createServiceSchema, 
  createBreadcrumbSchema 
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Premium Telegram Crypto Signals for Serious Traders | Yaga Calls",
  description: "Yaga Calls delivers premium Telegram crypto signals with market narrative research, entry zones, targets, invalidation logic, and risk-managed setup notes.",
  alternates: {
    canonical: "https://www.yagacalls.com/premium-telegram-crypto-signals",
  },
  openGraph: {
    title: "Premium Telegram Crypto Signals — Yaga Calls",
    description: "Telegram-first crypto signal notes with market narrative research, clear entries, targets, invalidation logic, and risk-managed setup context.",
    url: "https://www.yagacalls.com/premium-telegram-crypto-signals",
    type: "website",
  },
};

export default function PremiumSignalsPage() {
  const url = "https://www.yagacalls.com/premium-telegram-crypto-signals";
  
  const webPageSchema = createWebPageSchema({
    title: "Premium Telegram Crypto Signals for Serious Traders | Yaga Calls",
    description: "Yaga Calls delivers premium Telegram crypto signals with market narrative research, entry zones, targets, invalidation logic, and risk-managed setup notes.",
    url: url
  });

  const serviceSchema = createServiceSchema({
    name: "Premium Telegram Crypto Signals",
    description: "Yaga Calls provides premium Telegram-first crypto signal notes with market narrative research, entry zones, targets, invalidation logic, and risk-managed trading context."
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Premium Telegram Crypto Signals", item: "/premium-telegram-crypto-signals" }
  ]);

  const faqs = [
    {
      question: "What are premium Telegram crypto signals?",
      answer: "Premium Telegram crypto signals are paid crypto trading setup notes delivered through Telegram. A serious signal should include the asset, entry zone, target levels, invalidation or stop-loss context, and market reasoning behind the setup."
    },
    {
      question: "Does Yaga Calls deliver signals through Telegram?",
      answer: "Yes. Yaga Calls delivers crypto signal notes and market updates through Telegram. The service is designed around Telegram-first delivery for fast market communication."
    },
    {
      question: "What makes Yaga Calls premium?",
      answer: "Yaga Calls is premium because it focuses on structured setup ideas, market narrative research, entry zones, target planning, invalidation logic, risk-managed signal notes, and manual premium onboarding."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider, not a pump group. It focuses on structure, timing, narratives, and risk context."
    },
    {
      question: "Can I join the free Telegram group before premium?",
      answer: "Yes. Visitors can join the free Telegram group first to understand Yaga Calls’ market commentary, selected examples, and communication style before considering premium access."
    },
    {
      question: "Are paid Telegram crypto signals worth it?",
      answer: "Paid Telegram crypto signals may be worth it if the provider offers clear setup logic, market research, entry zones, target levels, invalidation, risk context, and transparent communication. They are not worth it if they are only hype calls or guaranteed-profit claims."
    },
    {
      question: "Does Yaga Calls guarantee profits?",
      answer: "No. Yaga Calls does not guarantee profits. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "How do I join Yaga Calls premium Telegram access?",
      answer: "Choose a plan, message the official Yaga Calls Telegram contact, confirm payment instructions, complete payment, and receive manual access to the premium Telegram group after confirmation."
    },
    {
      question: "Who should use premium Telegram crypto signals?",
      answer: "Premium Telegram crypto signals are best suited for serious traders who understand crypto risk, want structured setup context, and can afford premium access responsibly."
    },
    {
      question: "How can I avoid fake crypto signal Telegram groups?",
      answer: "Use only official links from the provider’s website, avoid random DMs, reject guaranteed-profit claims, verify the admin account, and review the provider’s method, proof, and risk disclaimers before paying."
    }
  ];

  const faqSchema = createFAQSchema(faqs);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    "name": "How to Join Yaga Calls Premium Telegram Access",
    "description": "Steps for joining Yaga Calls premium Telegram crypto signal access through manual onboarding.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Your Plan",
        "text": "Review the available Yaga Calls premium plans and choose the access period that fits your commitment."
      },
      {
        "@type": "HowToStep",
        "name": "Message on Telegram",
        "text": "Use the official Telegram CTA from the Yaga Calls website and message the team."
      },
      {
        "@type": "HowToStep",
        "name": "Confirm Details",
        "text": "Confirm the selected plan, payment method, and access instructions with the Yaga Calls team."
      },
      {
        "@type": "HowToStep",
        "name": "Get Premium Access",
        "text": "After confirmation, the member is manually added to the premium Telegram group."
      }
    ]
  };

  return (
    <main>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />

      <TelegramHero />
      <DirectAnswerSection />
      <WhyTelegramSection />
      <ProblemSection />
      <PremiumDefinitionSection />
      <MemberExpectations />
      <FreeVsPremiumTable />
      <OnboardingSteps />
      <SafetyWarning />
      <FinalCTASection />
      <FAQSection faqs={faqs} />
    </main>
  );
}
