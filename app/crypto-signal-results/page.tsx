import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import LiveSignalResultsDesk from "@/components/results/LiveSignalResultsDesk";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema, createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Verified Signal Results & Performance Ledger",
  description: "Explore authentic verified trade results, PnL performance reports, and spot setup outcomes from Yaga Calls Telegram signals. Updated automatically.",
  alternates: {
    canonical: "https://www.yagacalls.com/crypto-signal-results",
  },
  openGraph: {
    title: "Yaga Calls Verified Signal Results & Performance Ledger",
    description: "Real-time trade performance logs, spot setup gains, and verified win rates from Yaga Calls crypto signal notes.",
    type: "article",
    url: "https://www.yagacalls.com/crypto-signal-results",
    siteName: "Yaga Calls",
    locale: "en_US",
    images: [
      {
        url: "https://www.yagacalls.com/api/og?title=Verified%20Signal%20Results&subtitle=Real-time%20trade%20performance%20logs%20%26%20verified%20win%20rates",
        width: 1200,
        height: 630,
        alt: "Yaga Calls Verified Signal Results & Performance Ledger"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Yagacalls",
    creator: "@Yagacalls",
    title: "Yaga Calls Verified Signal Results & Performance Ledger",
    description: "Real-time trade performance logs, spot setup gains, and verified win rates from Yaga Calls crypto signal notes.",
    images: ["https://www.yagacalls.com/api/og?title=Verified%20Signal%20Results&subtitle=Real-time%20trade%20performance%20logs%20%26%20verified%20win%20rates"],
  }
};

export default function CryptoSignalResultsPage() {
  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls Live Trade Signal Results & Verified Performance",
    description: "Explore authentic verified trade results, PnL performance reports, and spot setup outcomes from Yaga Calls Telegram signals.",
    url: "https://www.yagacalls.com/crypto-signal-results"
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Live Signal Results", item: "/crypto-signal-results" }
  ]);

  return (
    <main className="bg-background text-text">
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* HERO SECTION — LIVE SIGNAL RESULTS & PERFORMANCE */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.08)_0%,transparent_70%)] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full inline-block">
              Transparent Performance Portal
            </span>

            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95]">
              Verified Trade Call <br />
              <span className="text-primary">Results & Outcomes</span>
            </h1>

            <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto font-medium uppercase tracking-wide leading-relaxed">
              Every signal result is automatically logged and updated live when published. Review spot gains, win rates, and setup details below.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-line text-[11px] font-bold text-text-muted uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Auto-Updated Live From Telegram & Database</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* DYNAMIC REAL-TIME RESULTS ENGINE */}
      <Section className="py-16 md:py-24">
        <Container>
          <LiveSignalResultsDesk />
        </Container>
      </Section>
    </main>
  );
}
