import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const ogImageUrl = "https://www.yagacalls.com/api/og?title=Risk%20Disclosure&subtitle=Crypto%20Market%20Volatility%2C%20Leverage%20Dangers%20%26%20Loss%20Awareness";

export const metadata = {
  title: "Crypto Trading Risk Disclosure",
  description: "Read important risk disclosures before using crypto trading signals. Yaga Calls does not provide financial advice or guaranteed results.",
  alternates: {
    canonical: "https://www.yagacalls.com/risk-disclosure",
  },
  openGraph: {
    locale: "en_US",
    title: "Crypto Trading Risk Disclosure — Yaga Calls",
    description: "Read important risk disclosures before using crypto trading signals. Yaga Calls does not provide financial advice or guaranteed results.",
    url: "https://www.yagacalls.com/risk-disclosure",
    siteName: "Yaga Calls",
    type: "website",
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Crypto Trading Risk Disclosure" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Yagacalls",
    creator: "@Yagacalls",
    title: "Crypto Trading Risk Disclosure — Yaga Calls",
    description: "Read important risk disclosures before using crypto trading signals. Yaga Calls does not provide financial advice or guaranteed results.",
    images: [ogImageUrl],
  },
};

export default function RiskDisclosurePage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-text-muted">
          <div className="p-6 bg-danger/10 border border-danger/30 rounded-xl text-danger font-bold text-lg mb-8">
            WARNING: TRADING CRYPTOCURRENCIES CARRIES A HIGH LEVEL OF RISK AND MAY NOT BE SUITABLE FOR ALL INVESTORS.
          </div>
          <p>
            Before deciding to trade cryptocurrencies, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">Market Volatility</h2>
          <p>
            Digital assets are subject to extreme market volatility. Prices can change rapidly and without warning, leading to significant losses in a short period.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">Liquidity Risk</h2>
          <p>
            Some cryptocurrencies may have low trading volume, making it difficult to enter or exit positions at desired prices.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">Regulatory Risk</h2>
          <p>
            The regulatory environment for cryptocurrencies is evolving. Changes in laws or regulations can impact the value and legality of digital assets.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">Technology Risk</h2>
          <p>
            Trading involves reliance on technology and internet connectivity. Issues such as server failures, software bugs, or network congestion can result in trading losses.
          </p>
          <p className="pt-8 text-xs italic">
            Last Updated: May 2026
          </p>
        </div>
      </Container>
    </Section>
  );
}
