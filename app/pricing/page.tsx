import { Metadata } from "next";
import dynamic from "next/dynamic";
import PricingHero from "@/components/pricing/PricingHero";
import PricingDirectAnswer from "@/components/pricing/PricingDirectAnswer";

const PricingFitWarning = dynamic(() => import("@/components/pricing/PricingFitWarning.js").then(mod => mod.default));
const PricingCardsGrid = dynamic(() => import("@/components/pricing/PricingCardsGrid.js").then(mod => mod.default));
const PricingComparisonTable = dynamic(() => import("@/components/pricing/PricingComparisonTable.js").then(mod => mod.default));
const DiscountExplanation = dynamic(() => import("@/components/pricing/DiscountExplanation.js").then(mod => mod.default));
const ScarcitySection = dynamic(() => import("@/components/pricing/ScarcitySection.js").then(mod => mod.default));
const PricingSuitabilityChecker = dynamic(() => import("@/components/pricing/PricingSuitabilityChecker.js").then(mod => mod.default));
const ManualOnboardingSection = dynamic(() => import("@/components/pricing/ManualOnboardingSection.js").then(mod => mod.default));
const PaymentDetailsSection = dynamic(() => import("@/components/pricing/PaymentDetailsSection.js").then(mod => mod.default));
const FinalPricingCTA = dynamic(() => import("@/components/pricing/FinalPricingCTA.js").then(mod => mod.default));
const PricingFAQSection = dynamic<{ faqs: { question: string; answer: string }[] }>(() => import("@/components/pricing/PricingFAQSection.js").then(mod => mod.default));
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createFAQSchema,
  createBreadcrumbSchema
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Yaga Calls Pricing | Discounted Premium Crypto Signals Access",
  description: "Compare Yaga Calls discounted premium crypto signal plans with Telegram onboarding, market analysis, structured setup notes, and risk-managed trading context.",
  alternates: {
    canonical: "https://www.yagacalls.com/pricing",
  },
};

export default function PricingPage() {
  const url = "https://www.yagacalls.com/pricing";

  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls Pricing | Discounted Premium Crypto Signals Access",
    description: "Compare Yaga Calls discounted premium crypto signal plans with Telegram onboarding, market analysis, and risk-managed trading context.",
    url: url
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" }
  ]);

  const faqs = [
    {
      question: "Is Yaga Calls currently discounted?",
      answer: "Yes. Yaga Calls currently uses limited-time manual onboarding pricing for premium access. The discounted prices are designed for serious traders who want to join premium Telegram crypto signal access before future pricing updates."
    },
    {
      question: "What is the current discounted price for Yaga Calls?",
      answer: "The current discounted pricing is $200 for Quarterly Access, $300 for Half-Yearly Access, and $600 for Yearly Access. Users should confirm current pricing through the official Telegram onboarding process before payment."
    },
    {
      question: "What were the regular prices before the discount?",
      answer: "The regular pricing structure is $250 for Quarterly Access, $500 for Half-Yearly Access, and $1000 for Yearly Access. The current onboarding prices reduce those plans to $200, $300, and $600 respectively."
    },
    {
      question: "Why is Yaga Calls offering discounted pricing?",
      answer: "Yaga Calls is offering discounted onboarding pricing to give serious traders a lower entry point before future pricing updates. The discount is not a cheap lifetime VIP offer; it is a limited-time onboarding price for premium Telegram access."
    },
    {
      question: "Is the discounted price permanent?",
      answer: "No. The discounted price should be treated as limited-time onboarding pricing. Future pricing may change as Yaga Calls expands premium research, signal delivery, and member access."
    },
    {
      question: "Is Yaga Calls premium worth it at the discounted price?",
      answer: "Yaga Calls premium may be worth it for serious traders who want structured Telegram crypto signals, market narrative research, entry and target context, invalidation logic, and risk-managed setup notes. It is not suitable for users looking for guaranteed profits or cheap pump calls. If you are unsure, check our <a href='/verified-crypto-signal-provider' style='text-decoration: underline;'>Verified Provider Checklist</a> to understand our standards."
    },
    {
      question: "Does discounted pricing mean Yaga Calls is a cheap signal group?",
      answer: "No. The current discount is an onboarding offer. Yaga Calls is still positioned as a premium crypto signal and market analysis provider for serious traders, not a cheap pump-call group."
    },
    {
      question: "Can I join the free Telegram before using the discount?",
      answer: "Yes. Visitors can join the free Telegram group first to understand Yaga Calls’ market commentary, selected examples, and communication style before choosing a premium plan."
    },
    {
      question: "Does Yaga Calls guarantee profit with premium access?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
    },
    {
      question: "How do I join Yaga Calls premium Telegram access?",
      answer: "Choose a discounted plan, message the official Yaga Calls Telegram contact, confirm the current onboarding price and payment instructions, complete payment, and receive manual premium access after confirmation."
    }
  ];

  const faqSchema = createFAQSchema(faqs);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.yagacalls.com/pricing#premium-access",
    "name": "Yaga Calls Premium Crypto Signal Access",
    "image": "https://www.yagacalls.com/yaga_calls_logo.webp",
    "description": "Premium Telegram-first crypto signal access with market narrative research, structured setup notes, entry and target planning, invalidation logic, and risk-managed trading context.",
    "brand": {
      "@type": "Brand",
      "name": "Yaga Calls"
    },
    "sku": "YC-PREMIUM",
    "offers": [
      {
        "@type": "Offer",
        "name": "Quarterly Access",
        "price": "200",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.yagacalls.com/pricing",
        "description": "Discounted onboarding price reduced from $250 to $200 for 3 months of Yaga Calls premium access.",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": 0,
            "currency": "USD"
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "US",
          "returnPolicyCategory": "https://schema.org/NoReturns"
        }
      },
      {
        "@type": "Offer",
        "name": "Half-Yearly Access",
        "price": "300",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.yagacalls.com/pricing",
        "description": "Discounted onboarding price reduced from $500 to $300 for 6 months of Yaga Calls premium access.",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": 0,
            "currency": "USD"
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "US",
          "returnPolicyCategory": "https://schema.org/NoReturns"
        }
      },
      {
        "@type": "Offer",
        "name": "Yearly Access",
        "price": "600",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.yagacalls.com/pricing",
        "description": "Discounted onboarding price reduced from $1000 to $600 for 12 months of Yaga Calls premium access.",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": 0,
            "currency": "USD"
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "US",
          "returnPolicyCategory": "https://schema.org/NoReturns"
        }
      }
    ]
  };

  return (
    <main>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />

      <PricingHero />
      <PricingDirectAnswer />
      <PricingFitWarning />
      <PricingCardsGrid />
      <PricingComparisonTable />
      <DiscountExplanation />
      <ScarcitySection />
      <PricingSuitabilityChecker />
      <ManualOnboardingSection />
      <PaymentDetailsSection />
      <FinalPricingCTA />
      <PricingFAQSection faqs={faqs} />
    </main>
  );
}
