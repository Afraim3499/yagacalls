import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers & Affiliate Partner Positions",
  description: "Explore remote Web3 career opportunities and partner roles at Yaga Calls. Join our high-ticket 15%–25% recurring rev-share program with daily settlements.",
  alternates: {
    canonical: "https://www.yagacalls.com/careers",
  },
  openGraph: {
    title: "Yaga Calls Careers & Affiliate Partner Positions",
    description: "Explore remote Web3 career opportunities and partner roles at Yaga Calls. Join our high-ticket 15%–25% recurring rev-share program with daily settlements.",
    url: "https://www.yagacalls.com/careers",
    type: "website",
    siteName: "Yaga Calls",
    locale: "en_US",
    images: [
      {
        url: "https://www.yagacalls.com/api/og?title=Careers%20%26%20Partner%20Jobs&subtitle=High-ticket%20recurring%20rev-share%20%26%20daily%20payouts",
        width: 1200,
        height: 630,
        alt: "Yaga Calls Careers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaga Calls Careers & Affiliate Partner Positions",
    description: "Explore remote Web3 career opportunities and partner roles at Yaga Calls. Join our high-ticket 15%–25% recurring rev-share program with daily settlements.",
    site: "@yagacalls",
    creator: "@yagacalls",
    images: ["https://www.yagacalls.com/api/og?title=Careers%20%26%20Partner%20Jobs&subtitle=High-ticket%20recurring%20rev-share%20%26%20daily%20payouts"],
  }
};

export default function CareersPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Careers", item: "/careers" }
  ]);

  // Schema.org JobPosting for Google Jobs indexing
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Remote Affiliate Marketer / Crypto Partner",
    "description": "Join Yaga Calls as an Affiliate Partner. Earn 15% to 25% recurring monthly commissions on high-ticket tiers. Net payouts per sale: $45.00 to $175.00+ USD. Daily crypto settlements within 9–12 hours. Database-level Telegram tracking ensures 0% cookie loss. Promote verified setups, trading academy modules, and risk calculators to your audience.",
    "datePosted": "2026-08-14",
    "validThrough": "2027-08-14",
    "employmentType": "CONTRACTOR",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Yaga Calls",
      "sameAs": "https://www.yagacalls.com",
      "logo": "https://www.yagacalls.com/yaga_calls_logo.png"
    },
    "jobLocationType": "TELECOMMUTE",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 600,
        "maxValue": 15000,
        "unitText": "MONTH"
      }
    }
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={jobPostingSchema} />

      {/* HERO SECTION */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(227,158,46,0.06)_0%,transparent_70%)] pointer-events-none" />
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full inline-block">
              Web3 Growth Opportunities
            </span>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              Build The Future of <br />
              <span className="text-primary">Crypto Intelligence</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto font-medium uppercase tracking-wide leading-relaxed">
              We are building the most transparent signal ecosystem in Web3. Join as an affiliate partner or core contractor and claim your share of the growth.
            </p>
          </div>
        </Container>
      </Section>

      {/* WHY WORK WITH US */}
      <Section className="py-16 md:py-24 border-b border-line bg-background">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Why Join the Yaga Team?
            </h2>
            <p className="text-text-muted text-sm font-medium">
              We replace standard employment traps with uncapped profit shares and dynamic, autonomous contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <GlowCard className="p-8 space-y-4 border border-line bg-surface-deep/40">
              <div className="text-3xl">💰</div>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">Uncapped Rev-Share</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Earn 15% to 25% recurring lifetime commissions. When the company wins, you win directly in proportion to your volume.
              </p>
            </GlowCard>

            <GlowCard className="p-8 space-y-4 border border-line bg-surface-deep/40">
              <div className="text-3xl">⚡</div>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">Daily Crypto Settlements</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Get settled within 9–12 hours of client payments. Direct wallet transfers in USDT, USDC, BTC, or SOL. No waiting periods.
              </p>
            </GlowCard>

            <GlowCard className="p-8 space-y-4 border border-line bg-surface-deep/40">
              <div className="text-3xl">🌐</div>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">100% Remote & Autonomous</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Work from anywhere in the world. Plan your content, choose your audience, and build your growth funnel on your own schedule.
              </p>
            </GlowCard>
          </div>
        </Container>
      </Section>

      {/* ACTIVE OPENINGS SECTION */}
      <Section className="py-16 md:py-24 bg-surface-deep/20">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                  Active Openings
                </h2>
                <p className="text-text-muted text-sm font-medium">
                  Select a role below to review criteria, expectations, and compensation models.
                </p>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                🟢 Hiring Urgently
              </span>
            </div>

            {/* JOB 1 CARD */}
            <div className="bg-surface-deep border border-line rounded-3xl overflow-hidden shadow-2xl p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                {/* Left Column: Square Flyer (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="w-full aspect-square relative rounded-2xl overflow-hidden border border-line bg-black shadow-lg">
                    <Image
                      src="/images/pb8ql.jpg"
                      alt="Remote Affiliate Marketer / Crypto Partner Job Opening Flyer"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  {/* Sticky tips under image */}
                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl hidden lg:block">
                    <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-2">⚡ Application Fast-Track</h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      All applications are reviewed within 12 hours. Ensure your social channels, audience metrics, and Telegram handle are clearly listed.
                    </p>
                  </div>
                </div>

                {/* Right Column: Job Details (lg:col-span-7) */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 inline-block">
                      100% Commission-Based Contract
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">
                      Remote Affiliate Marketer / Crypto Partner
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                      <span>📍 Remote (Worldwide)</span>
                      <span>•</span>
                      <span>💰 15%–25% Recurring Rev-Share</span>
                      <span>•</span>
                      <span>💼 Partnership / Contract</span>
                    </div>
                  </div>

                  <hr className="border-line" />

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary">Role Overview</h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        Yaga Calls is looking for Affiliate Partners, Crypto Influencers, Community Owners, and Web3 Growth Marketers to monetize their audiences through our high-converting subscription signals and trading tools. Drive high-quality traffic to our channel and keep a massive slice of the recurring revenue.
                      </p>
                    </div>

                    <div className="space-y-4 bg-background/60 p-6 rounded-2xl border border-line">
                      <h4 className="text-sm font-black uppercase tracking-widest text-white">💰 Earning Potential &amp; Commission Structure</h4>
                      <ul className="space-y-2 text-sm text-text-muted">
                        <li className="flex items-center gap-2">
                          <span className="text-primary">•</span> <strong>15% to 25% Recurring Commissions</strong> on all premium tiers ($250 to $700 plans).
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary">•</span> <strong>Net Payout per Sale</strong>: $45.00 to $175.00+ USD per subscriber.
                        </li>
                      </ul>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-line/60 mt-4 text-center">
                        <div className="p-3 bg-surface rounded-xl border border-line">
                          <p className="text-[10px] text-text-muted uppercase font-bold">10 Subs</p>
                          <p className="text-xs font-black text-white">~$600–1.2k/mo</p>
                        </div>
                        <div className="p-3 bg-surface rounded-xl border border-line">
                          <p className="text-[10px] text-text-muted uppercase font-bold">25 Subs</p>
                          <p className="text-xs font-black text-white">~$1.5k–3.5k/mo</p>
                        </div>
                        <div className="p-3 bg-surface rounded-xl border border-line">
                          <p className="text-[10px] text-text-muted uppercase font-bold">50 Subs</p>
                          <p className="text-xs font-black text-white">~$3k–7.5k/mo</p>
                        </div>
                        <div className="p-3 bg-surface rounded-xl border border-line">
                          <p className="text-[10px] text-text-muted uppercase font-bold">100+ Subs</p>
                          <p className="text-xs font-black text-white">~$6k–15k+/mo</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2 text-xs text-text-muted border-t border-line/40 pt-3">
                        <p>⚡ <strong>Daily Settlements</strong>: Paid within 9–12 hours of payments in USDT, USDC, BTC, or SOL.</p>
                        <p>🛡️ <strong>0% Tracking Loss</strong>: Database-level Telegram ID tracking bypasses cookie-blockers.</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary">🎯 What You Will Do</h4>
                      <ul className="space-y-2 text-sm text-text-muted">
                        <li className="flex gap-2"><span className="text-primary">•</span> Promote Yaga Calls’ verified setups, academy modules, and risk calculators to your audience.</li>
                        <li className="flex gap-2"><span className="text-primary">•</span> Drive targeted traffic via YouTube, X (Twitter), Telegram channels, Discord groups, newsletters, or paid media.</li>
                        <li className="flex gap-2"><span className="text-primary">•</span> Maintain brand integrity—strictly anti-spam, education-first, and zero fake-profit hype.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary">👤 Who We Are Looking For</h4>
                      <ul className="space-y-2 text-sm text-text-muted">
                        <li className="flex gap-2"><span className="text-primary">•</span> Owners of active crypto/trading channels, communities, or newsletters.</li>
                        <li className="flex gap-2"><span className="text-primary">•</span> Web3 performance marketers, media buyers, and affiliate growth specialists.</li>
                        <li className="flex gap-2"><span className="text-primary">•</span> Partners who value audience trust, high retention, and transparent market analysis.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Call-to-action Block */}
                  <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl space-y-4">
                    <h4 className="text-lg font-black uppercase tracking-tight text-white">📬 How to Apply</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Please send an application email directly to our partnerships inbox or message our team handle on Telegram.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <a
                        href="mailto:partner@yagacalls.com"
                        className="flex flex-col p-4 bg-surface border border-line rounded-xl hover:border-primary/40 transition-colors"
                      >
                        <span className="text-[10px] text-text-muted uppercase font-bold">Apply via Email</span>
                        <span className="text-sm font-black text-primary">partner@yagacalls.com</span>
                      </a>
                      <a
                        href="https://t.me/yagacalls47"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-4 bg-surface border border-line rounded-xl hover:border-primary/40 transition-colors"
                      >
                        <span className="text-[10px] text-text-muted uppercase font-bold">Apply via Telegram</span>
                        <span className="text-sm font-black text-primary">@yagacalls47</span>
                      </a>
                    </div>
                    <div className="text-[10px] text-text-muted uppercase font-bold tracking-widest pt-2">
                      ⚠️ Please include: Links to your channels, estimated reach/traffic volume, and your Telegram handle.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
