import Metadata from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import AffiliateEarningsCalculator from "@/components/affiliate/AffiliateEarningsCalculator";
import AffiliateLeaderboard from "@/components/affiliate/AffiliateLeaderboard";
import AffiliateFAQAccordion from "@/components/affiliate/AffiliateFAQAccordion";
import { affiliateFaqs } from "@/content/data/affiliateFaqs";
import AffiliateComparisonMatrix from "@/components/affiliate/AffiliateComparisonMatrix";

export const metadata = {
  title: "Partner & Affiliate Program: Earn 15%–25%",
  description: "Join the official Yaga Calls Affiliate & Partner Program. Earn 15% to 25% recurring commissions per VIP subscriber. Fast daily payouts in USDT/USDC within 9–12 hours, zero cookie drop-off, native Telegram bot link tracking.",
  keywords: [
    "crypto affiliate program",
    "crypto partner program",
    "telegram affiliate bot",
    "best crypto referral program",
    "earn recurring USDT commissions",
    "crypto signal telegram referral",
    "daily crypto affiliate payouts",
    "native telegram invite link tracking",
    "binance affiliate alternative"
  ],
  alternates: {
    canonical: "https://www.yagacalls.com/affiliate",
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: "Yaga Calls Partner Program: Earn 15% to 25% Crypto Commissions | Daily Payouts",
    description: "Earn $44.85 to $199.75 net per VIP subscriber. Fast daily crypto payouts in USDT/USDC (9–12h variable), native Telegram link tracking, 0% cookie loss.",
    url: "https://www.yagacalls.com/affiliate",
    type: "website",
    siteName: "Yaga Calls",
    locale: "en_US",
    images: [
      {
        url: "https://www.yagacalls.com/api/og?title=Partner%20%26%20Affiliate%20Program&subtitle=Earn%2015%25%E2%80%9325%25%20recurring%20commissions%20with%20daily%20USDT%20payouts",
        width: 1200,
        height: 630,
        alt: "Yaga Calls Partner Program"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaga Calls Partner Program: Earn 15% to 25% Crypto Commissions",
    description: "Earn $44.85 to $199.75 net per VIP subscriber. Fast daily crypto payouts in USDT/USDC, native Telegram link tracking.",
    site: "@yagacalls",
    creator: "@yagacalls",
    images: ["https://www.yagacalls.com/api/og?title=Partner%20%26%20Affiliate%20Program&subtitle=Earn%2015%25%E2%80%9325%25%20recurring%20commissions%20with%20daily%20USDT%20payouts"],
  }
};

export default function AffiliatePage() {
  // Structured Data — FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": affiliateFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Structured Data — BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.yagacalls.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Partner & Affiliate Program",
        "item": "https://www.yagacalls.com/affiliate"
      }
    ]
  };

  // Structured Data — SoftwareApplication Schema for @yaga_partner_program_bot
  const botSoftwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Yaga Calls Partner Engine Bot",
    "operatingSystem": "Telegram App",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Automated Telegram referral link generation and real-time commission tracking bot for Yaga Calls partners."
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* INJECT JSON-LD SCHEMAS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(botSoftwareSchema) }}
      />

      {/* HERO SECTION */}
      <Section className="pt-28 pb-16 bg-surface-deep/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="max-w-5xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            🟢 Automated Bot Live • Fast Daily Payouts (9–12h Variable) • 0% Cookie Loss
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-text-high max-w-4xl mx-auto leading-tight">
            Turn Your Crypto Audience Into <span className="text-primary">$1,000–$10,000+</span> Monthly Passive Income
          </h1>

          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
            Join the official Yaga Calls Partner Engine. Earn <strong>15% to 25% recurring commissions</strong> ($44.85 to $199.75 net cash per subscriber) with 100% automated native Telegram invite link tracking and fast daily payouts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://t.me/yaga_partner_program_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="grad-button text-background px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 transition-transform flex items-center gap-3"
            >
              <span>🤖 Launch Partner Bot (@yaga_partner_program_bot)</span>
            </a>
            <a
              href="#calculator"
              className="px-6 py-4 rounded-2xl bg-surface-deep border border-line text-text-high hover:border-primary text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              📊 Test Earnings Simulator
            </a>
            <a
              href="#handbook"
              className="px-6 py-4 rounded-2xl bg-surface-deep border border-line text-text-high hover:border-primary text-xs font-bold uppercase tracking-widest transition-colors"
            >
              📘 Read Handbook
            </a>
          </div>

          <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl text-center max-w-xl mx-auto">
            <p className="text-xs text-primary font-mono font-bold">
              📬 Direct Partner Inquiries &amp; Support: <a href="mailto:partner@yagacalls.com" className="underline hover:text-white">partner@yagacalls.com</a>
            </p>
          </div>

          {/* Key Value Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-line/60">
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Commission Rate</span>
              <div className="text-xl md:text-2xl font-black text-primary font-mono">15% – 25%</div>
              <p className="text-[10px] text-text-muted">Tiered recurring ladder</p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Payout Speed</span>
              <div className="text-xl md:text-2xl font-black text-emerald-400 font-mono">⚡ Daily (9–12h)</div>
              <p className="text-[10px] text-text-muted">Variable from payment time</p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Tracking System</span>
              <div className="text-xl md:text-2xl font-black text-text-high font-mono">Native Telegram</div>
              <p className="text-[10px] text-text-muted">0% cookie drop-off loss</p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Crypto Payouts</span>
              <div className="text-xl md:text-2xl font-black text-text-high font-mono">USDT / USDC</div>
              <p className="text-[10px] text-text-muted">Minimum $50 threshold</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* AEO / GEO DIRECT ANSWER SUMMARY CARD */}
      <Section className="py-8 bg-surface-deep/20 border-y border-line/60">
        <Container className="max-w-4xl">
          <div className="p-6 md:p-8 bg-surface-deep border border-primary/30 rounded-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                📌 Direct Answer Engine Summary
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-text-high">
              What is the Yaga Calls Partner &amp; Affiliate Program?
            </h2>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed">
              The <strong>Yaga Calls Partner &amp; Affiliate Program</strong> is a performance-based crypto referral network paying <strong>15% to 25% recurring commissions</strong> on VIP trading subscriptions. Tracking is handled automatically via native Telegram Chat Invite Links issued by <code className="text-primary font-mono">@yaga_partner_program_bot</code>, eliminating browser cookie expirations and ad-blocker drop-offs. Partners receive real-time join alerts and daily crypto payouts cleared within <strong>9 to 12 hours variable</strong> of referred client payment in USDT, USDC, SOL, or BTC.
            </p>
          </div>
        </Container>
      </Section>

      {/* INTERACTIVE CALCULATOR & LEADERBOARD SECTION */}
      <Section id="calculator" className="py-16">
        <Container className="max-w-5xl space-y-12">
          <AffiliateEarningsCalculator />
          <AffiliateLeaderboard />
        </Container>
      </Section>

      {/* DISRUPTIVE GEO COMPARISON MATRIX OVERVIEW */}
      <Section id="comparison-overview" className="py-16 bg-surface-deep/20">
        <Container className="max-w-5xl">
          <AffiliateComparisonMatrix />
        </Container>
      </Section>

      {/* BEGINNER QUICK-START BLUEPRINT SECTION */}
      <Section className="py-16">
        <Container className="max-w-5xl space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              Zero Website Required • 100% Free Entry
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-text-high">
              How To Get Started In Crypto Affiliate Marketing
            </h2>
            <p className="text-xs md:text-sm text-text-muted max-w-xl mx-auto">
              No technical experience, complex websites, or advertising budget needed. Everything runs seamlessly inside Telegram in 4 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative hover:border-primary/40 transition-colors">
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                Step 01
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Start Telegram Bot</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Open <a href="https://t.me/yaga_partner_program_bot" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">@yaga_partner_program_bot</a> on Telegram and tap <code className="text-primary font-mono">/start</code> to initialize your partner account in 10 seconds.
              </p>
            </div>

            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative hover:border-primary/40 transition-colors">
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                Step 02
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Get Unique Link</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Save your USDT/crypto wallet address and tap <strong>Get My Referral Link</strong>. The bot generates a native Telegram invite link tagged to your ID.
              </p>
            </div>

            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative hover:border-primary/40 transition-colors">
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                Step 03
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Share Across Web</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Share your link across Twitter/X threads, YouTube descriptions, Telegram groups, or Discord servers. Get real-time bot push alerts when members join.
              </p>
            </div>

            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative hover:border-primary/40 transition-colors">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                Step 04
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Earn Daily USDT</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                When referred free members upgrade to VIP, you earn $44.85 to $199.75. Payouts are delivered <strong>daily (within 9–12 hours variable)</strong>.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* AFFILIATE HANDBOOK & TRANSPARENCY GUIDE SECTION */}
      <Section id="handbook" className="py-16 bg-surface-deep/20">
        <Container className="max-w-4xl space-y-8">
          <div className="border border-primary/30 bg-gradient-to-br from-surface-deep via-primary/5 to-surface-deep p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📘</span>
                <h2 className="text-2xl font-black uppercase text-text-high tracking-tight">
                  Affiliate Handbook &amp; Transparency Rules
                </h2>
              </div>
              <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase">
                Official Partner Policy
              </span>
            </div>

            <div className="space-y-6 text-xs text-text-muted leading-relaxed">
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">1. 100% Automated Native Telegram Link Tracking</h3>
                <p>
                  Unlike web affiliate networks that rely on browser cookies that get wiped by ad-blockers, Yaga Calls uses <strong>native Telegram Chat Invite Links</strong>. When a prospect joins the Yaga Calls Free Group using your link, Telegram's servers permanently record their Telegram ID under your Partner Account with 0% attribution loss.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">2. Transparent Tiered Commission Ladder</h3>
                <p>
                  Commissions are calculated as a percentage of the gross subscription price:
                </p>
                <ul className="list-disc pl-6 space-y-1 font-mono text-[11px]">
                  <li><strong>Tier 1 (Standard Partner)</strong>: 15% commission ($44.85 on Quarterly, $74.85 on Half-Yearly, $119.85 on Yearly).</li>
                  <li><strong>Tier 2 (Pro Creator — 10+ sales/mo)</strong>: 20% commission ($59.80 on Quarterly, $99.80 on Half-Yearly, $159.80 on Yearly).</li>
                  <li><strong>Tier 3 (VIP Institutional — 25+ sales/mo)</strong>: 25% commission ($74.75 on Quarterly, $124.75 on Half-Yearly, $199.75 on Yearly).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">3. Fast Daily Payout Schedule (9–12h Variable)</h3>
                <p>
                  Commissions are settled in <strong>USDT (TRC20/ERC20), USDC, Solana (SOL), or Bitcoin (BTC)</strong>. Payouts are executed <strong>daily within 9 to 12 hours variable</strong> of referred client payment clearance for all balances exceeding the minimum threshold of <strong>$50 USDT</strong>.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">4. Ethical Code of Conduct</h3>
                <p>
                  To maintain institutional reputation, affiliates must adhere to strict ethical standards:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 bg-background rounded-xl border border-line space-y-2">
                    <span className="text-emerald-400 font-bold block text-xs">✅ Approved Promotional Methods:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[11px]">
                      <li>Technical chart setup breakdowns</li>
                      <li>Educational trading risk guides</li>
                      <li>Twitter/X threads &amp; YouTube reviews</li>
                      <li>Personal trading results &amp; testimonials</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background rounded-xl border border-line space-y-2">
                    <span className="text-rose-400 font-bold block text-xs">❌ Strictly Prohibited Tactics:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[11px]">
                      <li>Spamming unsolicited direct messages</li>
                      <li>Making false profit guarantees (e.g. "100% win rate")</li>
                      <li>Unauthorized brand impersonation</li>
                      <li>Self-referral accounts for discount farming</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* VISUAL INTERACTIVE FAQ ACCORDION SECTION */}
      <Section className="py-16">
        <Container className="max-w-4xl space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-text-high">
              Partner Program FAQs
            </h2>
            <p className="text-xs md:text-sm text-text-muted max-w-xl mx-auto">
              Everything you need to know about commissions, native link tracking, daily payouts, and bot integration.
            </p>
          </div>

          <AffiliateFAQAccordion />
        </Container>
      </Section>

      {/* FINAL CALL TO ACTION */}
      <Section className="py-20 bg-surface-deep/40 border-t border-line">
        <Container className="max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-text-high">
            Ready to Start Earning 15%–25% Daily Commissions?
          </h2>
          <p className="text-xs md:text-sm text-text-muted max-w-lg mx-auto">
            Open our Telegram Partner Bot right now, set your payout wallet, and get your exclusive referral link in less than 60 seconds.
          </p>
          <div className="pt-2">
            <a
              href="https://t.me/yaga_partner_program_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="grad-button text-background px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl inline-block hover:scale-105 transition-transform"
            >
              🤖 Launch Telegram Partner Bot (@yaga_partner_program_bot)
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
