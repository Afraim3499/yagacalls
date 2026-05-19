import React from "react";
import { ShieldCheck, ShieldAlert, AlertTriangle, AlertCircle, HelpCircle, PhoneCall, CheckCircle2, UserCheck, MessageSquare } from "lucide-react";

export default function TelegramCryptoSignalsTrustworthy() {
  return (
    <div className="space-y-16 text-sm text-text-muted">
      
      {/* 1. Executive Summary Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Operational Dilemma</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              The Double-Edged Sword of Telegram Alerts
            </h2>
          </div>
          <p className="leading-relaxed">
            Telegram is the undisputed epicenter of the global crypto trading community, favored for its near-zero information latency. But because launching a channel takes seconds, it is also highly saturated with copycat channels, automated checkout bots, and fabricated win-rate statistics. Protecting your trading capital requires moving past marketing hype to run a strict operational audit.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong className="text-text-high">The Trust Standard:</strong> Trust is not built on winning screenshots. It is built on unedited historical records, human-centered onboarding, and transparent analysis of stopped-out setups.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <UserCheck className="w-4 h-4" /> Trust Score Metrics
          </h3>
          <div className="space-y-3">
            {[
              "Zero edited tags on past trade setup messages",
              "Direct 1-on-1 human verification before onboarding",
              "Public documentation of stopped-out drawdowns",
              "Strict focus on highly liquid Layer-1/Major assets",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-line pt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted">
            <span>Audit Protocol</span>
            <span className="text-primary">E-E-A-T Audited</span>
          </div>
        </div>
      </section>

      {/* 2. The Scammer's Toolkit (Danger Grid) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-danger">Scam Prevention</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
            Exposing the Scammer's Telegram Toolkit
          </h2>
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            Scammers have developed highly sophisticated methods to fabricate authority. Protect your capital by spotting these 3 high-risk tricks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-deep border border-danger/20 rounded-2xl space-y-4 hover:border-danger/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-danger/40" />
            <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center text-danger group-hover:bg-danger group-hover:text-black transition-colors">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">The "Edited" Message Tag</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Admins post vague buy calls without stop-losses. Once the price moves, they edit the message parameters to fake absolute entries. Check for the small <strong className="text-danger font-mono">"edited"</strong> label next to their timestamps.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-danger/20 rounded-2xl space-y-4 hover:border-danger/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-danger/40" />
            <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center text-danger group-hover:bg-danger group-hover:text-black transition-colors">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Purging stopped out calls</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Low-quality channels delete losing calls to maintain a fabricated "perfect win rate." Track a channel's calls manually on a spreadsheet for 10 days to verify if stopped trades disappear.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-danger/20 rounded-2xl space-y-4 hover:border-danger/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-danger/40" />
            <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center text-danger group-hover:bg-danger group-hover:text-black transition-colors">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Clone Accounts & Bot DMs</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Scammers clone premium brand logos and profiles to scrape public group members, sending unsolicited direct messages (DMs) claiming discount access or private wallet addresses.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 5-Point Trust Audit Checklist */}
      <section className="p-6 md:p-8 bg-surface-deep border border-line rounded-[32px] space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Verification Checklist</span>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-text-high">
            The 5-Point Trust and Transparency Audit Protocol
          </h2>
          <p className="text-xs text-text-muted leading-relaxed">
            Do not deposit capital into any signal provider until you have verified their operation across these five institutional standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {[
            { num: "01", title: "Original Timeline", desc: "Setups must be shared before the breakouts happen, allowing you to set limit orders systematically." },
            { num: "02", title: "Loss Breakdown", desc: "Analysts openly document stopped-out trades and analyze the technical invalidation structures." },
            { num: "03", title: "Non-Custodial", desc: "No affiliate pressure. You must be able to execute trades on any liquid, secure exchange you choose." },
            { num: "04", title: "Liquid focus", desc: "Trades focus strictly on liquid L1s and majors. Avoid illiquid tokens used for pump-and-dump traps." },
            { num: "05", title: "Manual support", desc: "Onboarding is led by human analysts to verify risk limits, avoiding anonymous payment checkouts." },
          ].map((step, i) => (
            <div key={i} className="p-5 bg-background border border-line rounded-2xl space-y-3 relative flex flex-col justify-between group hover:border-primary/20 transition-all">
              <span className="text-lg font-black text-primary font-mono leading-none">{step.num}</span>
              <div className="space-y-1">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-tight">{step.title}</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Side-by-Side: Community Culture vs. Retail Casino */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="p-6 bg-surface-deep border border-danger/10 rounded-3xl space-y-4 flex flex-col justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-danger flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-danger" /> The Retail Casino Culture
          </h3>
          <div className="space-y-3">
            {[
              "Constant emotional noise screaming about 100x moonshots",
              "Screaming at the admins after a single managed stopped-out trade",
              "Exaggerated screenshots boasting fake leverage percentage gains",
              "Zero focus on the mathematical equations of capital drawdown",
            ].map((item, i) => (
              <div key={i} className="p-3 bg-background border border-line rounded-xl flex gap-3 items-center">
                <AlertCircle className="w-4 h-4 text-danger shrink-0" />
                <span className="text-xs text-text-muted leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-surface-deep border border-primary/10 rounded-3xl space-y-4 flex flex-col justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> The Yaga Research mastermind
          </h3>
          <div className="space-y-3">
            {[
              "Highly focused market updates scanning timezone liquidity bridge data",
              "Discipline-first mindset welcoming minor stopped trades as vital data",
              "Low leverage and spot metrics focused strictly on raw percentage gains",
              "Deep educational onboarding explaining the mechanics of risk rules",
            ].map((item, i) => (
              <div key={i} className="p-3 bg-background border border-line rounded-xl flex gap-3 items-center">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs text-text-muted leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Verification Protocol Callout (Gold-bordered) */}
      <section className="p-6 md:p-8 bg-surface-deep border border-primary/20 rounded-[40px] relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg md:text-2xl font-black uppercase tracking-tighter text-text-high">
              The Yaga Calls Human Onboarding Protocol
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We completely reject automated checkouts, billing bots, and direct marketing DMs. To join our premium research network, you must connect directly with our verified onboard handle. We analyze your trading background and verify you understand risk models before processing your membership.
            </p>
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-[10px] text-primary font-bold italic leading-relaxed">
                Security Alert: Our ONLY official onboarding Telegram contact is @yagacalls47. Any other account sending you unsolicited direct messages or asking for token transfers is an impersonator.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 bg-background border border-line rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-line pb-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Official Handle Verify</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] font-black uppercase tracking-widest text-text-muted">Username Onboarding</p>
                  <p className="text-xs font-bold text-text-high font-mono">@yagacalls47</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] font-black uppercase tracking-widest text-text-muted">Billing Standards</p>
                  <p className="text-xs font-bold text-text-high">Zero checkout bots. Manual only.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
