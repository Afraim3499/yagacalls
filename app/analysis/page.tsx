import fs from "fs";
import path from "path";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import AnalysisFeed from "@/components/market/AnalysisFeed";
import { MarketAnalysisItem } from "@/types/content";
import CTAButton from "@/components/shared/CTAButton";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema, createBreadcrumbSchema } from "@/lib/schema";
import { BRAND_CONFIG } from "@/lib/constants/brand";

const ogImageUrl = "https://www.yagacalls.com/api/og?title=Latest%20Crypto%20Market%20Analysis&subtitle=Real-time%20market%20insights%2C%20price%20analysis%2C%20and%20trading%20updates";

export const metadata = {
  title: "Latest Crypto Market Analysis",
  description: "Real-time market insights, price analysis, and trading updates from the Yaga Calls research team.",
  alternates: {
    canonical: "https://www.yagacalls.com/analysis",
  },
  openGraph: {
    locale: "en_US",
    title: "Latest Crypto Market Analysis — Yaga Calls",
    description: "Real-time market insights, price analysis, and trading updates from the Yaga Calls research team.",
    url: "https://www.yagacalls.com/analysis",
    siteName: "Yaga Calls",
    type: "website",
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Latest Crypto Market Analysis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Yagacalls",
    creator: "@Yagacalls",
    title: "Latest Crypto Market Analysis — Yaga Calls",
    description: "Real-time market insights, price analysis, and trading updates from the Yaga Calls research team.",
    images: [ogImageUrl],
  },
};

async function getAnalysisData(): Promise<MarketAnalysisItem[]> {
  const filePath = path.join(process.cwd(), "content/data/analysis.json");
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading analysis.json:", error);
    return [];
  }
}

export default async function AnalysisPage() {
  const data = await getAnalysisData();
  const url = "https://www.yagacalls.com/analysis";

  const webPageSchema = createWebPageSchema({
    title: "Latest Crypto Market Analysis | Yaga Calls",
    description: "Real-time market insights, price analysis, and trading updates from the Yaga Calls research team.",
    url: url
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Analysis", item: "/analysis" }
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    "url": url,
    "name": "Crypto Market Analysis Feed",
    "description": "Professional-grade crypto market analysis and structured setup notes.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": data.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": `${item.coin}: ${item.hook}`,
        "url": item.linkUrl
      }))
    }
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      
      <Section className="bg-surface/30">
        <Container className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Market Analysis</h1>
          <p className="text-lg text-text-muted">
            Real-time market insights, price analysis, and trading updates directly from our research team.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <AnalysisFeed data={data} />
        </Container>
      </Section>

      <Section className="bg-primary/5">
        <Container className="text-center">
          <h2 className="text-2xl font-bold mb-6">🚀 Get Real-Time Analysis First</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Join our Telegram group for instant updates, exclusive calls, and deeper analysis before it hits the website.
          </p>
          <div className="flex justify-center">
            <CTAButton href={BRAND_CONFIG.officialTelegram} target="_blank" className="px-10">
              Join Telegram Group →
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
