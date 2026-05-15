import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactDirectAnswer from "@/components/contact/ContactDirectAnswer";
import BeforeYouMessage from "@/components/contact/BeforeYouMessage";
import ManualOnboardingSteps from "@/components/contact/ManualOnboardingSteps";
import ClaimDiscountSection from "@/components/contact/ClaimDiscountSection";
import FirstMessageTemplate from "@/components/contact/FirstMessageTemplate";
import SafetyWarningSection from "@/components/contact/SafetyWarningSection";
import FreeTelegramOption from "@/components/contact/FreeTelegramOption";
import PaymentClaritySection from "@/components/contact/PaymentClaritySection";
import WhoShouldContact from "@/components/contact/WhoShouldContact";
import FinalContactCTA from "@/components/contact/FinalContactCTA";
import ContactFAQ from "@/components/contact/ContactFAQ";
import JsonLd from "@/components/seo/JsonLd";
import { 
  createWebPageSchema, 
  createFAQSchema, 
  createBreadcrumbSchema 
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Yaga Calls | Join Premium Telegram Crypto Signals",
  description: "Contact Yaga Calls through Telegram for manual premium onboarding, discounted plan confirmation, crypto payment instructions, and private signal group access.",
  alternates: {
    canonical: "https://www.yagacalls.com/contact",
  },
  openGraph: {
    title: "Contact Yaga Calls — Manual Telegram Onboarding",
    description: "Start manual onboarding for Yaga Calls premium Telegram crypto signals. Confirm discounted pricing, payment instructions, and official access safely.",
    url: "https://www.yagacalls.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const url = "https://www.yagacalls.com/contact";
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contactpage`,
    "url": url,
    "name": "Contact Yaga Calls | Join Premium Telegram Crypto Signals",
    "description": "Contact Yaga Calls through Telegram for manual premium onboarding, discounted plan confirmation, crypto payment instructions, and private signal group access.",
    "isPartOf": {
      "@id": "https://www.yagacalls.com/#website"
    },
    "about": {
      "@id": "https://www.yagacalls.com/#organization"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    "name": "How to Join Yaga Calls Premium Through Telegram",
    "description": "Steps for joining Yaga Calls premium crypto signal access through manual Telegram onboarding.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Review the Plans",
        "text": "Check the pricing page and choose the Yaga Calls premium access period that fits your commitment."
      },
      {
        "@type": "HowToStep",
        "name": "Message the Official Telegram Contact",
        "text": "Use the official Telegram button from the Yaga Calls website and message the team manually."
      },
      {
        "@type": "HowToStep",
        "name": "Confirm the Current Price",
        "text": "Ask the team to confirm the current discounted onboarding price before payment."
      },
      {
        "@type": "HowToStep",
        "name": "Receive Payment Instructions",
        "text": "The team provides official payment instructions manually through Telegram."
      },
      {
        "@type": "HowToStep",
        "name": "Receive Premium Access",
        "text": "After payment confirmation, the user is manually added to the premium Telegram group."
      }
    ]
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" }
  ]);

  const faqs = [
    {
      question: "How do I contact Yaga Calls?",
      answer: "Use the official Telegram link from the Yaga Calls website. Premium onboarding is handled manually through Telegram so users can confirm the plan, current pricing, payment instructions, and access details safely."
    },
    {
      question: "How do I join Yaga Calls premium?",
      answer: "Choose your preferred plan, message the official Yaga Calls Telegram contact, confirm the current discounted onboarding price, receive payment instructions, complete payment, and receive premium Telegram access after verification."
    },
    {
      question: "Can I claim the discounted price through Telegram?",
      answer: "Yes. To claim the current discounted onboarding price, message the official Yaga Calls Telegram contact and ask the team to confirm the latest plan price before payment."
    },
    {
      question: "What should I send in my first Telegram message?",
      answer: "Send your preferred plan, region or timezone, trading experience level, and ask the team to confirm current pricing and payment instructions. Also confirm that you understand crypto trading involves risk."
    },
    {
      question: "Is Yaga Calls onboarding automated?",
      answer: "No. Premium onboarding is handled manually through Telegram to keep access clear, controlled, and safer for serious members."
    },
    {
      question: "Can I join the free Telegram group before premium?",
      answer: "Yes. Visitors can join the free Telegram group first to observe Yaga Calls’ market commentary, selected examples, and communication style before deciding whether premium access is right for them."
    },
    {
      question: "How do I avoid fake Yaga Calls Telegram accounts?",
      answer: "Use only official links from the Yaga Calls website. Avoid random DMs, duplicate groups, unofficial admins, and anyone promising guaranteed profits."
    },
    {
      question: "Does Yaga Calls guarantee profits?",
      answer: "No. Yaga Calls does not guarantee profits. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "What payment methods does Yaga Calls accept?",
      answer: "Yaga Calls handles payment instructions manually through Telegram. Users should confirm current accepted payment methods through the official Telegram contact before sending payment."
    },
    {
      question: "Who should contact Yaga Calls for premium access?",
      answer: "Serious traders who understand crypto risk, want structured Telegram signal notes, and can afford premium access responsibly can contact Yaga Calls for manual onboarding."
    },
    {
      question: "How do I know I am contacting the official Yaga Calls Telegram?",
      answer: "Use only links from the official Yaga Calls website. The official brand name is Yaga Calls, although some users search for it as Yagacall, Yaga Call, or Yaga. Avoid random Telegram DMs, copied logos, fake admins, unofficial payment requests, and anyone promising guaranteed profit."
    },
    {
      question: "Is Yagacall the same as Yaga Calls?",
      answer: "Yaga Calls is the official brand name. Yagacall and Yaga Call are common search variations. To avoid fake groups or impersonators, always use the official website and verified Telegram links. You can learn more in the official Yaga Calls brand guide (https://www.yagacalls.com/about-yaga-calls)."
    },
    {
      question: "Is Yaga a crypto trading Telegram group?",
      answer: "Yaga Calls is a Telegram-first crypto signal and market analysis provider. Some users may describe it as a crypto trading Telegram group, but the focus is structured setup notes, market research, entry zones, targets, invalidation, and risk-aware communication."
    }
  ];

  const faqSchema = createFAQSchema(faqs);

  return (
    <main>
      <JsonLd data={webPageSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <ContactHero />
      <ContactDirectAnswer />
      <BeforeYouMessage />
      <ManualOnboardingSteps />
      <ClaimDiscountSection />
      <FirstMessageTemplate />
      <SafetyWarningSection />
      <FreeTelegramOption />
      <PaymentClaritySection />
      <WhoShouldContact />
      <FinalContactCTA />
      <ContactFAQ faqs={faqs} />
    </main>
  );
}
