import React from "react";
import { ShieldCheck, Target, AlertTriangle, ArrowRight, Percent, CheckCircle2, TrendingUp, Clock, Compass } from "lucide-react";

export default function SuiRallyCaseStudy() {
  return (
    <div className="space-y-16 text-sm text-text-muted">
      
      {/* 1. Executive Summary Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Case Study Audit</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              Dissecting a 47% Spot Breakout Execution
            </h2>
          </div>
          <p className="leading-relaxed">
            To achieve long-term, sustainable success as a swing trader, you must transition from theoretical analysis to studying real-world historical executions. This educational case study performs a rigorous, step-by-step audit of our SUI breakout rally trade setup. This trade was not the result of a lucky guess, but the precise confluence of growing developer mindshare, technical consolidation retests, bridge bridge capital flows, and timezone session timing.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong className="text-text-high">The Verification Standard:</strong> All trade case studies are backed by historical, unedited timestamps posted inside our premium Telegram research feed before price breakouts occurred.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl pointer-events-none" />
          <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Performance Scorecard
          </h3>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-text-muted">Asset Ticker</span>
              <span className="font-bold text-text-high">#SUI / USDT</span>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-text-muted">Setup Profit (Spot)</span>
              <span className="font-bold text-primary">+$47.2% Spot</span>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-text-muted">Maximum Dollar Risk</span>
              <span className="font-bold text-danger">1.5% Max Portfolio</span>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-text-muted">Execution Period</span>
              <span className="font-bold text-text-high">8 Hold Days</span>
            </div>
          </div>
          <div className="border-t border-line pt-3 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted">
            <span>Audit Level</span>
            <span className="text-primary font-bold">100% Verified</span>
          </div>
        </div>
      </section>

      {/* 2. Technical Confluence Grid (3-Card Grid) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Technical Analysis</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
            The Confluence Checklist Behind the Setup
          </h2>
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            A premium setup requires a confluence of multiple technical and fundamental factors before allocating capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">On-Chain TVL Surges</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Scan tools flagged multi-million bridges rotating capital into SUI. On-chain Total Value Locked (TVL) hit daily highs, confirming developer and bridge activity spikes.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">30-Day Range Retest</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              SUI broke out of a tight range consolidation between $1.35 and $1.45 on high volume. We waited for a low-volume retest of range high support at $1.48 to enter.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Timezone Liquidity</h3>
            <p className="text-xs text-text-muted leading-relaxed">
               central order books revealed that SUI experienced massive buy volume surges during late European/early Middle Eastern sessions, prompting us to time entries perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Execution Timeline */}
      <section className="p-6 md:p-8 bg-surface-deep border border-line rounded-[32px] space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">Execution Log</span>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-text-high">
            Step-by-Step Trade Execution Timeline
          </h2>
          <p className="text-xs text-text-muted leading-relaxed">
            Audit the exact parameters and management timeline we executed over the 8-day swing duration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { phase: "Day 1", title: "Range Breakout Confirm", desc: "SUI closes a daily candle above $1.45 range high on 2x average volume, validating buy pressure." },
            { phase: "Day 2", title: "Limit Order Entry Zone", desc: "We place limit orders in our private channel within the $1.46-$1.49 zone. Order fills at $1.48, stop set at $1.39." },
            { phase: "Day 5", title: "TP1 Target Scale-Out", desc: "SUI hits TP1 at $1.70. We close 50% position to lock in gains, immediately adjusting open stops to entry ($1.48)." },
            { phase: "Day 8", title: "Final Target Completion", desc: "Price surges through TP2 ($1.85) and hits final targets at $2.00, completing the 47% run with zero portfolio risk." },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-background border border-line rounded-2xl space-y-3 flex flex-col justify-between hover:border-primary/20 transition-all group">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black text-primary font-mono">{item.phase}</span>
                <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-tight">{item.title}</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Side-by-Side: Timezone Session Analysis */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Timezone Session Analysis</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              How Timezone Liquidity Shifts Altcoin Prices
            </h2>
          </div>
          <p className="leading-relaxed">
            The cryptocurrency market is open 24/7, but transaction volume is heavily concentrated by geographic region. Altcoins are extremely sensitive to regional shifts. Recommending a trade during low-volume sessions often leads to choppy, unpredictable price action. We timed our SUI setup entry specifically during the early European session to front-run regional liquidity waves.
          </p>
          <div className="space-y-3 font-medium">
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">1</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Identify Regional Session:</strong> Scan decentralized order books to isolate which geographical timezones are actively trading the asset.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">2</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Accumulate Early:</strong> Publish trade limits right before high-volume sessions arrive to capture breakouts instantly.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">3</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Mitigate Chop Risk:</strong> Avoid open limit fills during illiquid overnight US/Asian overlaps which are highly prone to fakeouts.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 p-6 md:p-8 bg-surface-deep border border-line rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <div className="flex justify-between items-center border-b border-line pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Timezone Session Ledger</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">08:00 - 12:00 UTC</span>
                <span className="text-xs font-bold text-text-high">Asian / European Overlap</span>
              </div>
              <div className="flex justify-between items-center border-t border-line/50 pt-2 font-mono text-xs">
                <span>Trading Volume State</span>
                <span className="text-text-muted font-bold">Standard Inflows</span>
              </div>
            </div>

            <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary">12:00 - 16:00 UTC</span>
                <span className="text-xs font-bold text-primary">Late European / Middle East</span>
              </div>
              <div className="flex justify-between items-center border-t border-line/50 pt-2 font-mono text-xs">
                <span>Trading Volume State</span>
                <span className="text-emerald-500 font-bold uppercase font-sans text-[10px] bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">Breakout Surge Inflow</span>
              </div>
            </div>

            <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">16:00 - 20:00 UTC</span>
                <span className="text-xs font-bold text-text-high">US Session Open</span>
              </div>
              <div className="flex justify-between items-center border-t border-line/50 pt-2 font-mono text-xs">
                <span>Trading Volume State</span>
                <span className="text-text-muted font-bold">Consolidation / Chop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lessons Learned Checklist */}
      <section className="p-6 bg-surface-deep border border-line rounded-3xl space-y-6">
        <h3 className="font-black uppercase tracking-widest text-xs text-primary">
          Key Case Study Lessons to Apply to Your Swing Systems
        </h3>
        <div className="space-y-4">
          {[
            { title: "Selectivity over constant high-frequency alerts", text: "Wait patiently for broader market index consolidations to isolate relative strength altcoins with massive TVL surges." },
            { title: "Time session liquidity bridging", text: "Only execute during geographical sessions that show high volume peaks, preventing range chop and overnight fakeouts." },
            { title: "Place stops strictly on logical technical invalidation", text: "Avoid arbitrary percentage stops. Place protective levels just below range lows where the daily breakout thesis is wrong." },
            { title: "Scale out incrementally and adjust stops", text: "Secure 50% profits at target 1 (TP1) and adjust stops to entry, completely eliminating portfolio risk early." },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text-high uppercase tracking-tight text-xs">{step.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
