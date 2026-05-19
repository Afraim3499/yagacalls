import React from "react";
import { ShieldCheck, Target, AlertTriangle, ArrowRight, Percent, CheckCircle2, Layers, LineChart, Users } from "lucide-react";

export default function BestCryptoSignalsGroup() {
  return (
    <div className="space-y-16 text-sm text-text-muted">
      
      {/* 1. Executive Summary Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Core Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              Moving Past Retail Scams to Institutional Research
            </h2>
          </div>
          <p className="leading-relaxed">
            Finding the best crypto signals group requires moving beyond simple profit screenshots and guaranteed return claims. The digital asset market operates 24/7, making mechanical crossovers highly prone to fakeouts. A professional signal group functions as an active research partner, prioritizing capital preservation over high-frequency alert noise.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong className="text-text-high">The Professional Edge:</strong> Elite groups operate as structured intelligence networks, combining technical structures with narrative catalysts and timezone-specific liquidity audits.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <Target className="w-4 h-4" /> The 3-Second Audit
          </h3>
          <div className="space-y-3">
            {[
              "High-conviction swing setups over high-frequency alert noise",
              "100% unedited, transparent, and timestamped performance ledger",
              "Detailed narrative rationale included with every signal note",
              "Strict position sizing and non-negotiable stop-losses",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-line pt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted">
            <span>Audit Standard</span>
            <span className="text-primary">EEAT-Compliant</span>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Foundational Pillars</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
            What Separates Elite Research From Noise
          </h2>
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            Do not judge a provider by green screenshots. Audit their operations based on these three institutional pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Selectivity Over Volume</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Noisy channels blast 10-20 alerts daily to trigger affiliate commission trades. Elite desks execute extreme selectivity, sharing only 2-4 high-conviction swing setups per week.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <LineChart className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Narrative Integration</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Raw indicators are highly prone to fakeouts. High-probability setups merge daily accumulation ranges with physical catalysts like developer bridges and timezone capital inflows.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Human Onboarding</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Low-quality channels funnel retail accounts into automated payment checkouts. Legitimate networks onboard users 1-on-1 to verify risk limits and exchange setups.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Visual Anatomy of a Signal */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Signal Architecture</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              The Blueprint of a Structured Trade Setup
            </h2>
          </div>
          <p className="leading-relaxed">
            A professional trade signal is a comprehensive, actionable execution map. It should provide specific limit-order zones to accumulate positions systematically without chasing FOMO, accompanied by tiered exit levels and a mathematically-defined invalidation threshold.
          </p>
          <div className="space-y-3 font-medium">
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">1</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Entry Zone:</strong> Limits accumulation to logical retests, protecting capital from sudden range spikes.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">2</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Logical Invalidation:</strong> A protective stop-loss set just below major structures where the breakout thesis is invalidated.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">3</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Scaling Take-Profits:</strong> Secures partial gains incrementally while adjusting open stop-losses to completely eliminate risk.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 p-6 md:p-8 bg-surface-deep border border-line rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <div className="flex justify-between items-center border-b border-line pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Verified Premium Alert</span>
            <span className="text-[10px] text-text-muted uppercase font-bold">14:20 UTC</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold uppercase tracking-tight text-text-high">#SUI / USDT (Spot / 2x Leverage)</span>
              <span className="text-xs font-black bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded uppercase">LONG SWING</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed italic border-l-2 border-line pl-3">
              Rationale: Strong daily range breakout retest, high bridge bridges inflows during London session.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Accumulation Zone</p>
                <p className="text-xs font-bold text-text-high font-mono">$1.46 - $1.49</p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Invalidation Level</p>
                <p className="text-xs font-bold text-danger font-mono">$1.39 (Stop-Loss)</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Take-Profit Targets</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 bg-background border border-line rounded text-center">
                  <p className="text-[7px] text-text-muted font-bold uppercase">TP1 (50%)</p>
                  <p className="text-xs font-mono font-bold text-primary">$1.70</p>
                </div>
                <div className="p-2 bg-background border border-line rounded text-center">
                  <p className="text-[7px] text-text-muted font-bold uppercase">TP2 (25%)</p>
                  <p className="text-xs font-mono font-bold text-primary">$1.85</p>
                </div>
                <div className="p-2 bg-background border border-line rounded text-center">
                  <p className="text-[7px] text-text-muted font-bold uppercase">TP3 (25%)</p>
                  <p className="text-xs font-mono font-bold text-primary">$2.00</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-[10px] text-primary font-bold italic leading-relaxed">
                Risk Management Note: Maximum 1.5% portfolio risk. If SUI closes a 4-Hour candle below $1.39, the trade setup is invalid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Warnings vs. Quality Standards (Comparative Cards Grid) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Auditing Standards</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
            The Trap vs. The Professional Reality
          </h2>
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            Audit potential providers by evaluating their communication and operational standards against these parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column A: The Scams/Traps (Red styled) */}
          <div className="p-6 bg-surface-deep border border-danger/20 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-danger/50" />
            <h3 className="text-sm font-black uppercase tracking-widest text-danger flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Retail Scams & Traps
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">"99% Guaranteed Win Rates"</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Low-quality groups claim perfect track records to capture subscription sales, masking the statistical reality of drawdowns.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">"Edited" past messages</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Admins silently edit past trade setups after a pump, or completely delete stopped-out trades to fake perfect entries.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">High-leverage screenshots</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Showcasing massive percentage gains (e.g. +1000%) on unregulated 100x leverage without revealing actual dollar sizing.
                </p>
              </div>
            </div>
          </div>

          {/* Column B: Professional Standard (Gold styled) */}
          <div className="p-6 bg-surface-deep border border-primary/20 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/50" />
            <h3 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Institutional Standards
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Probabilistic Execution</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Elite analysts expect sustainable win-rates of 55%-70% and manage risk to let profits run while cutting losses early.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Unedited Ledger & Timestamps</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Maintain a public ledger of every trade called—both profitable targets and managed stopped setups—with unedited timestamps.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Spot and Low Leverage focus</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Prioritizing spot accumulation or low leverage (2x-5x) focused entirely on raw percentage gains and exact capital control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Position Sizing Math Card */}
      <section className="p-6 md:p-8 bg-surface-deep border border-line rounded-[32px] space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
        <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
          <Percent className="w-4 h-4" /> Position Sizing: The Core Math of Survival
        </h3>
        <p className="leading-relaxed">
          The ultimate variable of survival is position sizing. Even with an elite signal provider, a string of consecutive losses will occur. Risk management dictates that you must calculate the exact size of every trade to ensure your total loss never exceeds 1% to 1.5% of your portfolio value.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          <div className="p-5 bg-background border border-line rounded-2xl space-y-2 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Step 1: Portfolio Limits</span>
            <p className="font-bold text-sm text-text-high uppercase">Define Max Account Risk</p>
            <p className="text-xs text-text-muted leading-relaxed">If portfolio is $10,000, risking 1.5% means the absolute maximum loss allowed is exactly $150.</p>
          </div>
          <div className="p-5 bg-background border border-line rounded-2xl space-y-2 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Step 2: Measure Distance</span>
            <p className="font-bold text-sm text-text-high uppercase">Calculate Stop-Loss Distance</p>
            <p className="text-xs text-text-muted leading-relaxed">If entry price is $1.00 and stop-loss is set at $0.90, the technical invalidation distance is 10%.</p>
          </div>
          <div className="p-5 bg-background border border-line rounded-2xl space-y-2 text-center border-primary/20 relative group-hover:border-primary/40 transition-colors">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Step 3: Math Formula</span>
            <p className="font-bold text-sm text-primary uppercase">Find Position Allocation</p>
            <p className="text-xs text-text-muted font-mono font-bold pt-1">$150 Risk / 10% Distance = $1,500 Size</p>
            <p className="text-[10px] text-text-muted leading-relaxed pt-1">Allocate $1,500 of capital. If stopped out, you lose exactly $150 (1.5% account impact).</p>
          </div>
        </div>
      </section>

      {/* 6. Actionable Takeaways Checklist */}
      <section className="p-6 bg-surface-deep border border-line rounded-3xl space-y-6">
        <h3 className="font-black uppercase tracking-widest text-xs text-primary">
          Your Audit Protocol: 4 Steps Before Subscribing
        </h3>
        <div className="space-y-4">
          {[
            { title: "Review the Ledger history", text: "Do they maintain a complete, timestamped list of all past trades, or do they only pin green winners? Scroll back at least 6 months." },
            { title: "Test their Selectivity", text: "Avoid channels that spam dozens of calls daily. Look for selective swing trading desks sharing 2 to 4 premium setups weekly." },
            { title: "Verify Onboarding quality", text: "Look for high-touch human support that ensures you understand capital risk boundaries and sizing spreadsheets before trading." },
            { title: "Observe first in Stablecoins", text: "Spend your first 10 days observing the entry speed, execution timing, and risk updates without deploying real capital." },
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
