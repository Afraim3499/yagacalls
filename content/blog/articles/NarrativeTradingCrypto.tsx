import React from "react";
import { ShieldCheck, Target, AlertTriangle, ArrowRight, Percent, CheckCircle2, Cpu, Globe, Server, LineChart, Activity } from "lucide-react";

export default function NarrativeTradingCrypto() {
  return (
    <div className="space-y-16 text-sm text-text-muted">
      
      {/* 1. Executive Summary Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Narrative Velocity</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              Attention and Storytelling as Market Catalysts
            </h2>
          </div>
          <p className="leading-relaxed">
            Many retail traders draw daily trendlines and wait for mechanical indicator crossovers, convinced that altcoin rally breakouts are encoded entirely in historical price charts. But in digital assets, capital flows are driven by attention, ecosystem funding, and catalyst timelines. To capture high-probability setups consistently, you must master the mechanics of sector rotation—identifying which theme attracts capital early, measuring its velocity, and entering before the retail hype peaks.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong className="text-text-high">The Attention Factor:</strong> Because altcoins lack traditional equity valuations or corporate cash flows, their prices are driven entirely by attention metrics and timezone-specific bridge flows.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <Activity className="w-4 h-4" /> Narrative Indicators
          </h3>
          <div className="space-y-3">
            {[
              "Ecosystem bridging volume surges on-chain",
              "Spikes in GitHub development commits",
              "Synchronized social media mindshare increases",
              "Venture capital token-funding concentration blocks",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-line pt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted">
            <span>Research Cycle</span>
            <span className="text-primary">Velocity Audited</span>
          </div>
        </div>
      </section>

      {/* 2. Major Sector Catalysts (3-Card Grid) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Sector Rotations</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
            The Major Narrative Catalysts of 2026
          </h2>
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            Audit sector capital concentration across these three leading themes dominating institutional and venture capital allocations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">AI & Decentralized Compute</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              As technology giants invest heavily in AI, public computing demand is surging. Protocols crowd-sourcing processing grids or building AI agent layers attract massive speculative liquidity.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Real World Assets (RWA)</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Global institutions are migrating traditional financial assets—like Treasury bills, real estate, and commodities—onto blockchain networks, creating highly stable capital flows.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">DePIN Hardware Grids</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Decentralized Physical Infrastructure Networks reward hardware contributors, creating crowd-sourced networks for 5G wireless networks, database storage, and global navigation maps.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Life Cycle of a Market Narrative (Horizontal Timeline Grid) */}
      <section className="p-6 md:p-8 bg-surface-deep border border-line rounded-[32px] space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">Cycle Mechanics</span>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-text-high">
            The 4-Phase Life Cycle of a Market Narrative
          </h2>
          <p className="text-xs text-text-muted leading-relaxed">
            Recognizing which phase a narrative cycle occupies is the most critical variable for managing investment and entry risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { phase: "Phase 1", title: "Accumulation", desc: "Professional traders spot growing on-chain metrics, dev commits, and bridge flows. Price is consolidating. Highly optimal entry zone." },
            { phase: "Phase 2", title: "Validation", desc: "A catalyst occurs (exchange listing, protocol upgrade, venture funding). Technical breakout occurs on high volume, social discussions trend." },
            { phase: "Phase 3", title: "Peak Hype", desc: "Influencers post target predictions. Retail traders experience intense FOMO, buying peaks. Slabs of bridge liquidity reverse." },
            { phase: "Phase 4", title: "Exhaustion", desc: "The catalyst date passes (sell-the-news event). Smart money rotates profits out of the sector into the next consolidating theme." },
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

      {/* 4. Side-by-Side: Narrative Analytics Visualization */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Quantitative Auditing</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              How Yaga Calls Tracks Narrative Velocity
            </h2>
          </div>
          <p className="leading-relaxed font-sans">
            We reject the retail culture of subjective guessing or following Twitter threads. Our research desk scans bridges and blockchain liquidity databases to identify exactly where real capital is moving before the breakouts show up on retail scanners.
          </p>
          <div className="space-y-3 font-medium">
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">A</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Social Mindshare Auditing:</strong> Scanning platform mentions and dev boards to measure sudden synchronized spikes in social focus.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">B</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">On-Chain Bridge Inflows:</strong> Auditing multi-million stablecoin bridge transfers rotating into consolidating Layer-1 networks.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-0.5">C</div>
              <p className="text-xs text-text-muted"><strong className="text-text-high uppercase">Upgrade & Catalyst Calendars:</strong> Aligning strong technical charts with concrete protocol upgrades and mainnet launches.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 p-6 md:p-8 bg-surface-deep border border-line rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <div className="flex justify-between items-center border-b border-line pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Research Tracker Mockup</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">Sector Index</span>
                <span className="text-xs font-bold text-primary">#L1 Parallel Execution</span>
              </div>
              <div className="flex justify-between items-center border-t border-line/50 pt-2 font-mono text-xs">
                <span>On-Chain Bridge Inflow (24h)</span>
                <span className="text-emerald-500 font-bold">+$24.7M</span>
              </div>
            </div>

            <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">Social Index</span>
                <span className="text-xs font-bold text-primary">#AI Compute Networks</span>
              </div>
              <div className="flex justify-between items-center border-t border-line/50 pt-2 font-mono text-xs">
                <span>Mindshare Spikes (7d)</span>
                <span className="text-emerald-500 font-bold">+184%</span>
              </div>
            </div>

            <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">Ecosystem Index</span>
                <span className="text-xs font-bold text-primary">#RWA Tokenization</span>
              </div>
              <div className="flex justify-between items-center border-t border-line/50 pt-2 font-mono text-xs">
                <span>Institutional bridges TVL</span>
                <span className="text-emerald-500 font-bold">+$85.2M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Actionable Risk Management Checklist */}
      <section className="p-6 bg-surface-deep border border-line rounded-3xl space-y-6">
        <h3 className="font-black uppercase tracking-widest text-xs text-primary">
          The Golden Rules of Narrative Risk Management
        </h3>
        <div className="space-y-4">
          {[
            { title: "Never chase an asset that has rallied 50%+", text: "Wait for the narrative's secondary retest of range high support structures. Never buy peak breakouts driven by social FOMO." },
            { title: "Enforce strict position-sizing limits", text: "Narratives carry extreme sentiment volatility. Restrict portfolio risk limits to a maximum of 1-1.5% per trade." },
            { title: "Set non-negotiable stop-losses", text: "Place stop-losses just below logical range consolidation structures. Never adjust stops lower during volatility dips." },
            { title: "Take partial profits at TP1", text: "Exit 50% of your position once the trade hits your first target, immediately moving your open stop-loss to break-even." },
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
