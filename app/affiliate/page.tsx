import Metadata from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import AffiliateEarningsCalculator from "@/components/affiliate/AffiliateEarningsCalculator";

export const metadata = {
  title: "Yaga Calls Partner Program: Earn 15% to 25% Crypto Commissions",
  description: "Join the official Yaga Calls Affiliate & Partner Program. Earn 15% to 25% recurring commissions per VIP subscriber enrollment via native Telegram Bot tracking. 100% transparent, weekly crypto payouts.",
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
    title: "Yaga Calls Partner Program: Earn 15% to 25% Crypto Commissions",
    description: "Earn 15% to 25% recurring commissions on every VIP subscription. Native Telegram bot tracking & weekly USDT payouts.",
    url: "https://www.yagacalls.com/affiliate",
    type: "website",
  }
};

export default function AffiliatePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <Section className="pt-28 pb-16 bg-surface-deep/30">
        <Container className="max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            100% Performance-Based • Zero Salary Burn
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-text-high max-w-4xl mx-auto leading-tight">
            Earn <span className="text-primary">15% to 25%</span> Recurring Commissions As a Yaga Partner
          </h1>

          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
            Turn your crypto audience, trading network, or social channels into consistent revenue. Onboard seamlessly via our dedicated Telegram Partner Bot with real-time joinee alerts and automated tracking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://t.me/yagaaffiliatebot"
              target="_blank"
              rel="noopener noreferrer"
              className="grad-button text-background px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 transition-transform flex items-center gap-3"
            >
              <span>🤖 Join Partner Bot on Telegram</span>
            </a>
            <a
              href="#handbook"
              className="px-6 py-4 rounded-2xl bg-surface-deep border border-line text-text-high hover:border-primary text-xs font-bold uppercase tracking-widest transition-colors"
            >
              📘 Read Partner Handbook
            </a>
          </div>

          {/* Key Value Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-line/60">
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Commission Rate</span>
              <div className="text-xl md:text-2xl font-black text-primary font-mono">15% – 25%</div>
              <p className="text-[10px] text-text-muted">Tiered commission ladder</p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Tracking System</span>
              <div className="text-xl md:text-2xl font-black text-text-high font-mono">Native Telegram</div>
              <p className="text-[10px] text-text-muted">Zero cookie drop-offs</p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Real-Time Alerts</span>
              <div className="text-xl md:text-2xl font-black text-emerald-400 font-mono">Instant Bot Push</div>
              <p className="text-[10px] text-text-muted">Alerts on joins &amp; sales</p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl text-left space-y-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Crypto Payouts</span>
              <div className="text-xl md:text-2xl font-black text-text-high font-mono">USDT / USDC</div>
              <p className="text-[10px] text-text-muted">Weekly crypto settlements</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* INTERACTIVE CALCULATOR SECTION */}
      <Section className="py-16">
        <Container className="max-w-5xl">
          <AffiliateEarningsCalculator />
        </Container>
      </Section>

      {/* 4-STEP HOW IT WORKS SECTION */}
      <Section className="py-16 bg-surface-deep/20">
        <Container className="max-w-5xl space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              4-Step Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-text-high">
              How The Yaga Partner Engine Works
            </h2>
            <p className="text-xs text-text-muted max-w-xl mx-auto">
              No complicated websites or manual approval waiting times. Everything is managed directly inside Telegram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative">
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                Step 01
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Start The Bot</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Open <a href="https://t.me/yagaaffiliatebot" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">@yagaaffiliatebot</a> on Telegram and tap <code className="text-primary font-mono">/start</code> to initialize your profile.
              </p>
            </div>

            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative">
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                Step 02
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Get Your Link</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Set your crypto payout wallet address and tap <strong>Get My Referral Link</strong>. The bot generates a unique Telegram invite link tagged to your ID.
              </p>
            </div>

            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative">
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                Step 03
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Share &amp; Promote</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Share your link across Twitter/X, YouTube, Telegram channels, or trading communities. When members join our free group, you get instant alerts.
              </p>
            </div>

            <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-3 relative">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                Step 04
              </span>
              <h3 className="text-base font-bold text-text-high uppercase tracking-wider">Earn &amp; Get Paid</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                When referred free members purchase a Premium VIP plan, you get an instant 15%–25% commission alert. Payouts cleared weekly in USDT/USDC.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* AFFILIATE HANDBOOK & TRANSPARENCY GUIDE SECTION */}
      <Section id="handbook" className="py-16">
        <Container className="max-w-4xl space-y-8">
          <div className="border border-primary/30 bg-gradient-to-br from-surface-deep via-primary/5 to-surface-deep p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
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
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">1. 100% Automated Native Telegram Tracking</h3>
                <p>
                  Unlike web affiliates that rely on browser cookies that get wiped by ad-blockers, Yaga Calls uses <strong>native Telegram Chat Invite Links</strong>. When a prospect joins the Yaga Calls Free Group using your link, Telegram's servers permanently record their Telegram ID under your Partner Account.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">2. Transparent Commission Tier Structure</h3>
                <p>
                  Commissions are calculated as a percentage of the gross subscription price:
                </p>
                <ul className="list-disc pl-6 space-y-1 font-mono text-[11px]">
                  <li><strong>Tier 1 (Standard Partner)</strong>: 15% commission ($44.85 on Quarterly, $74.85 on Half-Yearly, $119.85 on Yearly).</li>
                  <li><strong>Tier 2 (Pro Creator - 10+ sales/mo)</strong>: 20% commission ($59.80 on Quarterly, $99.80 on Half-Yearly, $159.80 on Yearly).</li>
                  <li><strong>Tier 3 (VIP Institutional - 25+ sales/mo)</strong>: 25% commission ($74.75 on Quarterly, $124.75 on Half-Yearly, $199.75 on Yearly).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">3. Ethical Promotion Code of Conduct</h3>
                <p>
                  To maintain the institutional reputation of Yaga Calls, affiliates must adhere to strict ethical standards:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-3 bg-background rounded-xl border border-line">
                    <span className="text-emerald-400 font-bold block mb-1">✅ Approved Promotional Methods:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[11px]">
                      <li>Technical chart setup breakdowns</li>
                      <li>Educational trading risk guides</li>
                      <li>Twitter/X threads &amp; YouTube reviews</li>
                      <li>Personal trading results &amp; testimonials</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-background rounded-xl border border-line">
                    <span className="text-rose-400 font-bold block mb-1">❌ Strictly Prohibited Tactics:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[11px]">
                      <li>Spamming unsolicited direct messages</li>
                      <li>Making false profit guarantees (e.g. "100% win rate")</li>
                      <li>Unauthorized brand impersonation</li>
                      <li>Self-referral accounts for discount farming</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase text-primary tracking-wider">4. Payout Schedule &amp; Verification</h3>
                <p>
                  Commissions are settled in <strong>USDT (TRC20/ERC20), USDC, Solana (SOL), or Bitcoin (BTC)</strong>. Payouts are executed weekly every Friday for all balances exceeding the minimum payout threshold of <strong>$50 USDT</strong>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CALL TO ACTION */}
      <Section className="py-20 bg-surface-deep/40 border-t border-line">
        <Container className="max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-text-high">
            Ready to Start Earning 15%–25% Commissions?
          </h2>
          <p className="text-xs md:text-sm text-text-muted max-w-lg mx-auto">
            Open our Telegram Partner Bot right now, set your payout wallet, and get your exclusive referral link in less than 60 seconds.
          </p>
          <div className="pt-2">
            <a
              href="https://t.me/yagaaffiliatebot"
              target="_blank"
              rel="noopener noreferrer"
              className="grad-button text-background px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl inline-block hover:scale-105 transition-transform"
            >
              🤖 Launch Telegram Partner Bot (@yagaaffiliatebot)
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
