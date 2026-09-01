import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const ogImageUrl = "https://www.yagacalls.com/api/og?title=Terms%20of%20Service&subtitle=User%20Agreement%2C%20Service%20Rules%20%26%20Liability%20Disclaimers";

export const metadata = {
  title: "Terms of Service",
  description: "Read the official Terms of Service for Yaga Calls. Learn about our educational content disclaimer, community safety rules, and subscription terms.",
  alternates: {
    canonical: "https://www.yagacalls.com/terms",
  },
  openGraph: {
    locale: "en_US",
    title: "Terms of Service — Yaga Calls",
    description: "Read the official Terms of Service for Yaga Calls. Learn about our educational content disclaimer, community safety rules, and subscription terms.",
    url: "https://www.yagacalls.com/terms",
    siteName: "Yaga Calls",
    type: "website",
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Terms of Service — Yaga Calls" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Yagacalls",
    creator: "@Yagacalls",
    title: "Terms of Service — Yaga Calls",
    description: "Read the official Terms of Service for Yaga Calls. Learn about our educational content disclaimer, community safety rules, and subscription terms.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-text-muted">
          <p>
            Welcome to Yaga Calls. By accessing our website, joining our Telegram channels (free or premium), or using our services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-text-high text-xl font-bold pt-4">1. Educational and Informational Purpose Only</h2>
          <p>
            All content, signal notes, research, narratives, trade setups, calculations, and analysis provided by Yaga Calls are for **educational and informational purposes only**. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not provide investment, financial, tax, or legal advice.</li>
            <li>No signal note or trade setup should be interpreted as a recommendation or guarantee to buy, sell, or hold any cryptocurrency or financial instrument.</li>
            <li>Cryptocurrency trading involves high market volatility and significant risk of capital loss. You must trade at your own risk and exercise personal responsibility.</li>
          </ul>

          <h2 className="text-text-high text-xl font-bold pt-4">2. Subscription and Manual Onboarding</h2>
          <p>
            Access to our premium signal channel requires a paid subscription.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscriptions are processed via our official manual onboarding on Telegram via verified handles only (e.g., @yagacalls47).</li>
            <li>Subscription plans are active for fixed durations (Quarterly, Half-Yearly, Yearly) as described on our pricing page.</li>
            <li>We do not offer refunds or partial refunds for active billing periods once service access has been granted.</li>
          </ul>

          <h2 className="text-text-high text-xl font-bold pt-4">3. Code of Conduct and Safety</h2>
          <p>
            As a user or member of our communities, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Not share, copy, resell, distribute, or publish our premium signals, analysis, or content to third parties without express written consent.</li>
            <li>Maintain respectful communication when interacting with our support team and other community members.</li>
            <li>Protect yourself from impersonators by only using official links from the Yaga Calls website. We will never send you unsolicited private messages or request payments via unverified channels.</li>
          </ul>

          <h2 className="text-text-high text-xl font-bold pt-4">4. Limitation of Liability</h2>
          <p>
            Yaga Calls, its founders, and contributors shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to trading losses, liquidations, market slippage, or technical delays in message delivery.
          </p>

          <h2 className="text-text-high text-xl font-bold pt-4">5. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-text-high text-xl font-bold pt-4 text-primary">6. Affiliate Program &amp; Partner Transparency Agreement</h2>
          <p>
            Participants in the Yaga Calls Affiliate &amp; Partner Program operate as independent performance marketers under the following terms:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>100% Performance-Based Earning</strong>: Partners earn purely on verified subscription enrollments (15% to 25% depending on tier). No fixed salary, monthly retainer, or employment relationship is established.</li>
            <li><strong>Tracking Mechanism</strong>: Tracking is automated via native Telegram Bot Chat Invite Links issued by <code className="text-primary font-mono">@yaga_partner_program_bot</code>. Prospects joining the Yaga Calls Free Group via an affiliate link are permanently tagged to that partner account.</li>
            <li><strong>Payout Terms &amp; Settlements</strong>: Commissions are calculated on net received subscription revenue and settled in USDT, USDC, SOL, or BTC. Minimum payout threshold is $50 USD, executed weekly every Friday. A 14-day clearance hold applies to new conversions to protect against refund or payment dispute fraud.</li>
            <li><strong>Prohibited Conduct &amp; Immediate Termination</strong>: Partners must not engage in unsolicited spamming, false profit or win-rate guarantees, unauthorized brand impersonation, or self-referral accounts created for discount farming. Violation results in instant account termination and forfeiture of unpaid balances.</li>
          </ul>

          <p className="pt-8 text-xs italic">
            Last Updated: August 2026
          </p>
        </div>
      </Container>
    </Section>
  );
}
