"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  Lock, 
  Layers, 
  BarChart3, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw,
  Target,
  DollarSign,
  Activity,
  Zap
} from "lucide-react";

export default function CrvTradingCurvePriceUpdatesArticle() {
  return (
    <div className="space-y-12 text-text-muted">

      {/* AI Overview / Quick Take Box for AEO & GEO Search Engines */}
      <div className="border border-primary/30 bg-gradient-to-br from-surface-deep via-primary/5 to-surface-deep p-6 md:p-8 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-primary" /> Key Takeaways for CRV Traders
          </div>
          <span className="text-[10px] font-mono text-primary font-bold bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full uppercase">
            Updated August 2026
          </span>
        </div>
        <p className="text-xs md:text-sm leading-relaxed text-text-high font-medium">
          <strong>CRV Trading & Curve Price Updates:</strong> Curve Finance (CRV) has broken out of a multi-month accumulation range as market participation accelerates. Behind the price rally lies a structural transition: Curve has evolved from a specialized stablecoin DEX into an integrated DeFi machine powering isolated lending (<strong>LlamaLend V2</strong>), soft liquidations (<strong>crvUSD</strong>), and a tightening supply structure where <strong>55% of circulating CRV (~851M tokens) remains locked</strong>. However, protocol fees (~$1.43M monthly) still lag token emissions, making risk management essential when trading key price levels between <strong>$0.237 support</strong> and <strong>$0.33–$0.40 resistance targets</strong>.
        </p>
      </div>

      {/* Metric Highlights Banner */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 bg-surface-deep border border-line rounded-2xl space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Locked CRV Supply</span>
          <div className="text-xl md:text-2xl font-black text-primary font-mono">55% (~851M)</div>
          <p className="text-[11px] text-text-muted">Locked up to 4 yrs as veCRV</p>
        </div>
        <div className="p-5 bg-surface-deep border border-line rounded-2xl space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">LlamaLend TVL</span>
          <div className="text-xl md:text-2xl font-black text-text-high font-mono">$146M+</div>
          <p className="text-[11px] text-text-muted">Expanded across LlamaLend V2</p>
        </div>
        <div className="p-5 bg-surface-deep border border-line rounded-2xl space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">crvUSD Borrowed</span>
          <div className="text-xl md:text-2xl font-black text-text-high font-mono font-bold">$37.8M</div>
          <p className="text-[11px] text-text-muted">Backed by $70.5M collateral</p>
        </div>
        <div className="p-5 bg-surface-deep border border-line rounded-2xl space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Annual Emission Cut</span>
          <div className="text-xl md:text-2xl font-black text-emerald-400 font-mono font-bold">-15.9%</div>
          <p className="text-[11px] text-text-muted">Dropping to ~97M CRV/yr</p>
        </div>
      </section>

      {/* Section 1: Beyond Stablecoin Swaps */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">01. Market Paradigm Shift</span>
          <h2 id="beyond-stablecoin-swaps" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            The Curve Most Traders Remember Doesn&apos;t Exist Anymore
          </h2>
        </div>
        <p className="text-xs md:text-sm leading-relaxed">
          For years, CRV gave altcoin traders very little reason to pay attention. Following the multi-year crypto drawdown, founder leverage liquidations, and high-profile protocol exploits, CRV was grouped into the category of &ldquo;legacy DeFi tokens&rdquo; left behind by modern capital flows.
        </p>
        <p className="text-xs md:text-sm leading-relaxed">
          Ask the average crypto trader what Curve Finance does today, and you will almost certainly hear a single answer: <em>&ldquo;It&apos;s a stablecoin DEX for low-slippage swaps.&rdquo;</em> While that remains true, it is no longer the complete picture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 bg-surface-deep/60 border border-line rounded-2xl space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-text-muted" /> Legacy Curve Architecture
            </h3>
            <div className="p-3 bg-background rounded-xl font-mono text-xs text-text-muted border border-line/50">
              Provide Liquidity &rarr; Facilitate Swaps &rarr; Collect Fee Split &rarr; Distribute CRV Incentives
            </div>
            <p className="text-xs leading-relaxed text-text-muted">
              In earlier cycles, Curve functioned as a single-purpose liquidity machine, dependent entirely on high DEX swap volumes to maintain TVL and justify token emissions.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-primary/30 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" /> Emerging Curve Ecosystem Flywheel
            </h3>
            <div className="p-3 bg-background rounded-xl font-mono text-xs text-primary font-bold border border-primary/20">
              Trading &rarr; Pricing &rarr; LP Collateral &rarr; Borrowing &rarr; Soft-Liquidation &rarr; crvUSD Liquidity
            </div>
            <p className="text-xs leading-relaxed text-text-high">
              Curve has transformed into an interconnected infrastructure stack spanning DEX liquidity, isolated lending, overcollateralized stablecoins, savings products, and automated liquidation protection.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: LlamaLend V2 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">02. Protocol Infrastructure</span>
          <h2 id="llamalend-v2-expansion" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            LlamaLend V2: Turning DEX Liquidity into Productive Loan Collateral
          </h2>
        </div>
        <p className="text-xs md:text-sm leading-relaxed">
          The single most critical fundamental upgrade behind the recent CRV momentum is the expansion of <strong>LlamaLend V2</strong>. Curve already possessed a lending prototype, but V2 fundamentally changes how collateral and debt operate across DeFi.
        </p>
        
        <div className="p-6 bg-surface-deep border border-line rounded-3xl space-y-6">
          <h3 className="text-sm font-black uppercase tracking-wider text-text-high flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" /> Core Architectural Enhancements in LlamaLend V2
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background border border-line rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase text-primary tracking-wider">Isolated Risk Markets</span>
              <p className="text-xs text-text-muted leading-relaxed">
                Each lending pair operates with standalone collateral, borrowed assets, pricing oracles, interest rate curves, and custom debt limits, protecting the broader protocol from localized bad debt.
              </p>
            </div>
            <div className="p-4 bg-background border border-line rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase text-primary tracking-wider">Curve LP Tokens as Collateral</span>
              <p className="text-xs text-text-muted leading-relaxed">
                Traders no longer leave LP tokens idle. Yield-bearing Curve LP positions can be deposited directly as collateral to borrow stablecoins or blue-chip assets.
              </p>
            </div>
            <div className="p-4 bg-background border border-line rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase text-primary tracking-wider">Multi-Chain Deployment</span>
              <p className="text-xs text-text-muted leading-relaxed">
                After initial deployment on Optimism, LlamaLend V2 expanded to Ethereum mainnet, introducing specialized markets around yield-bearing assets such as sDOLA, sfrxUSD, and syrupUSDC.
              </p>
            </div>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-text-high uppercase">LlamaLend TVL Growth Trajectory:</span>
              <p className="text-xs text-text-muted">
                Reporting shows LlamaLend TVL scaling steadily from <strong>$125M &rarr; $132M &rarr; $146M+</strong>, with total collateral deposited reaching ~$131M and borrowed assets climbing to ~$86M.
              </p>
            </div>
            <span className="shrink-0 text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl uppercase">
              $146M Total TVL
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: crvUSD Stablecoin Engine */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">03. Stablecoin Flywheel</span>
          <h2 id="crvusd-soft-liquidation" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            crvUSD & The LLAMMA Soft-Liquidation Mechanism
          </h2>
        </div>
        <p className="text-xs md:text-sm leading-relaxed">
          Traditional crypto lending platforms (like Aave or Compound) rely on binary hard liquidations: if collateral drops below a precise health threshold, third-party searchers liquidate the entire position, slapping borrowers with heavy penalty fees and market slippage.
        </p>
        <p className="text-xs md:text-sm leading-relaxed">
          Curve&apos;s native dollar, <strong>crvUSD</strong>, uses an algorithmic soft-liquidation engine called <strong>LLAMMA</strong> (Lending-Liquidating AMM Algorithm). LLAMMA continuously converts collateral into crvUSD as prices fall, and back into collateral as prices recover, avoiding sudden liquidation cascades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-high flex items-center gap-2">
              <Coins className="w-4 h-4 text-primary" /> crvUSD Operating Statistics
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-line pb-2">
                <span className="text-text-muted">Total Borrowed crvUSD</span>
                <span className="font-bold text-text-high">$37.8 Million</span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span className="text-text-muted">Total Backing Collateral</span>
                <span className="font-bold text-text-high">$70.5 Million</span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span className="text-text-muted">Peg Stability Reserve</span>
                <span className="font-bold text-primary">$33.8 Million</span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span className="text-text-muted">Reference Dollar Price</span>
                <span className="font-bold text-emerald-400">$0.9993 USD</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Recent Expansion Trends
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                During recent monthly cycles, crvUSD borrowing expanded rapidly from <strong>$28.5M &rarr; $36.7M+</strong>, while total collateral backing positions grew from <strong>$49.4M &rarr; $70.5M</strong>.
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                Curve does not need crvUSD to surpass USDT or USDC in market cap. Its goal is internal capital efficiency: creating a closed-loop economy where borrowing fees, DEX swaps, and LP yields reinforce each other.
              </p>
            </div>
            <div className="p-3 bg-background border border-line rounded-xl text-[11px] text-text-muted font-mono">
              Peg Keepers regulate supply dynamically, arbitrating peg deviations to protect crvUSD stability.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CRV Supply Dynamics */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">04. Tokenomics & Supply Squeeze</span>
          <h2 id="crv-supply-squeeze" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            The Supply Equation: 55% of Circulating CRV is Locked
          </h2>
        </div>
        <p className="text-xs md:text-sm leading-relaxed">
          While traders often focus exclusively on price charts, the underlying supply dynamics of CRV have tightened significantly compared to previous cycle years.
        </p>

        <div className="p-6 md:p-8 bg-surface-deep border border-line rounded-3xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-lg font-black uppercase tracking-tight text-text-high flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" /> Circulating vs Locked Supply Breakdown
              </h3>
              <p className="text-xs leading-relaxed text-text-muted">
                Out of approximately <strong>1.55 billion circulating CRV</strong> tokens, roughly <strong>851 million CRV</strong> are locked in vote-escrowed veCRV contracts.
              </p>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center bg-background p-3 rounded-xl border border-line">
                  <span>Locked CRV Ratio</span>
                  <span className="font-bold text-primary font-sans text-sm">54.9% (~55%)</span>
                </div>
                <div className="flex justify-between items-center bg-background p-3 rounded-xl border border-line">
                  <span>Total veCRV Voting Power</span>
                  <span className="font-bold text-text-high">~783 Million veCRV</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background border border-line rounded-2xl space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Annual Emission Decay (-15.9%)</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                CRV token emissions decrease by <strong>15.9% annually</strong>. The current annual emission rate of approximately <strong>115.5 million CRV</strong> is approaching its next scheduled reduction toward <strong>~97 million CRV per year</strong>.
              </p>
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl text-[11px] text-primary font-mono">
                Key Insight: Over half of circulating CRV is locked for up to 4 years while new token creation drops steadily each year.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Convex CVX Relationship */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">05. Ecosystem Alliances</span>
          <h2 id="convex-cvx-relationship" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            The Convex (CVX) Multiplier: Why CRV Doesn&apos;t Trade Alone
          </h2>
        </div>
        <p className="text-xs md:text-sm leading-relaxed">
          One of the most common mistakes made by retail traders analyzing CRV is evaluating it in isolation without factoring in <strong>Convex Finance (CVX)</strong>.
        </p>
        <p className="text-xs md:text-sm leading-relaxed">
          Curve governance determines which liquidity pools receive CRV emissions. Because liquidity follows yields, controlling veCRV voting power holds immense economic value for protocols competing for deep liquidity. Convex built an entire aggregation layer to lock CRV (as cvxCRV) and optimize voting power on behalf of CVX holders.
        </p>

        <div className="p-6 bg-surface-deep border border-line rounded-2xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-text-high tracking-wider">
              Convex Controls ~50% of Total Curve Voting Power
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Because Convex controls roughly half of all veCRV voting influence, demand for Curve liquidity incentives directly impacts CVX lockups and vote-bribe marketplace revenues. When analyzing major CRV setups, traders should always monitor CVX accumulation as a leading momentum indicator.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Technical Analysis & Key Price Levels */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">06. Technical Chart Setup</span>
          <h2 id="crv-price-updates-levels" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            CRV Price Updates & Key Breakout Technical Levels
          </h2>
        </div>
        <p className="text-xs md:text-sm leading-relaxed">
          After spending months consolidated inside a low-$0.20 range, CRV initiated a multi-week breakout on surging derivatives volume. Here is the technical roadmap for CRV price updates:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Resistance Map */}
          <div className="lg:col-span-6 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                <Target className="w-4 h-4" /> Key Overhead Resistance Zones
              </span>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-background border border-line rounded-xl flex justify-between items-center">
                  <span className="text-text-muted">Immediate Breakout Target</span>
                  <span className="font-bold text-text-high">$0.262 – $0.266</span>
                </div>
                <div className="p-3 bg-background border border-line rounded-xl flex justify-between items-center">
                  <span className="text-text-muted">Secondary Supply Target</span>
                  <span className="font-bold text-text-high">$0.280 – $0.293</span>
                </div>
                <div className="p-3 bg-background border border-primary/30 rounded-xl flex justify-between items-center">
                  <span className="text-primary font-bold">Structural Recovery Trigger</span>
                  <span className="font-bold text-primary font-sans text-sm">$0.330</span>
                </div>
                <div className="p-3 bg-background border border-line rounded-xl flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">Macro Bullish Trend Shift</span>
                  <span className="font-bold text-emerald-400">$0.400+</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-text-muted leading-relaxed">
              Reclaiming $0.330 on the daily timeframe would signal a major structural shift out of the multi-year downtrend.
            </p>
          </div>

          {/* Right: Support & Invalidation */}
          <div className="lg:col-span-6 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-danger flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-danger" /> Downside Support & Invalidation
              </span>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-background border border-line rounded-xl flex justify-between items-center">
                  <span className="text-text-muted">Primary Retest Support</span>
                  <span className="font-bold text-text-high">$0.237 – $0.245</span>
                </div>
                <div className="p-3 bg-background border border-line rounded-xl flex justify-between items-center">
                  <span className="text-text-muted">Secondary Demand Floor</span>
                  <span className="font-bold text-text-high">$0.224 – $0.227</span>
                </div>
                <div className="p-3 bg-danger/10 border border-danger/30 rounded-xl flex justify-between items-center">
                  <span className="text-danger font-bold">Invalidation Level</span>
                  <span className="font-bold text-danger font-sans text-sm">&lt; $0.200</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-text-muted leading-relaxed">
              A daily close below $0.200 invalidates the immediate bullish breakout thesis and suggests returning to range consolidation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Protocol Financials vs Revenue Reality */}
      <section className="space-y-6 border-t border-line pt-8">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 font-mono">07. Risk Reality Check</span>
          <h2 id="revenue-disconnect-warning" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            The Revenue Disconnect: Protocol Financials vs Price Speculation
          </h2>
        </div>
        <p className="text-xs md:text-sm leading-relaxed">
          To maintain a disciplined, non-emotional trading framework, we must audit the numbers that keep CRV bull cases grounded.
        </p>

        <div className="p-6 bg-surface-deep border border-amber-500/30 rounded-3xl space-y-6">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <AlertTriangle className="w-4 h-4" /> Crucial Economic Metrics to Keep in Mind
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background border border-line rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase text-text-muted">DEX TVL Scaled Down</span>
              <div className="text-lg font-bold font-mono text-text-high">~$1.43B Current</div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Curve DEX TVL sits around $1.4B, down from average protocol TVL of ~$3.05B during 2025. Total liquidity scale remains below previous cycle peaks.
              </p>
            </div>
            <div className="p-4 bg-background border border-line rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase text-text-muted">Fee & Revenue Deficit</span>
              <div className="text-lg font-bold font-mono text-amber-400">$404K Revenue</div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                DefiLlama metrics show ~$1.43M in 30-day fees against ~$404K protocol revenue, while CRV token incentives ran ~$1.98M over the same window.
              </p>
            </div>
            <div className="p-4 bg-background border border-line rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase text-text-muted">LlamaLend Admin Fees</span>
              <div className="text-lg font-bold font-mono text-text-high">Early Stage</div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Despite impressive LlamaLend V2 TVL growth, recent reporting confirms V2 has not yet generated substantial admin-fee revenue for veCRV holders.
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-200 leading-relaxed">
            <strong>Conclusion:</strong> The market is repricing CRV in <em>anticipation</em> of LlamaLend V2 monetization, crvUSD growth, and supply contraction. Price action has moved ahead of protocol cash flow. If protocol revenue fails to catch up, the rally will remain vulnerable to macro market pullbacks.
          </div>
        </div>
      </section>

      {/* Section 8: 5 Metrics Scorecard Table */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">08. Trader Verification Ledger</span>
          <h2 id="metrics-scorecard" className="text-2xl md:text-3xl font-black uppercase text-text-high tracking-tight">
            5 Core Metrics to Track for CRV Trading Confirmation
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-surface-deep">
          <table className="w-full text-left text-xs">
            <thead className="bg-background border-b border-line text-[10px] uppercase tracking-wider text-primary font-mono">
              <tr>
                <th className="p-4">Metric Target</th>
                <th className="p-4">Current Benchmark</th>
                <th className="p-4">Bullish Continuation Criteria</th>
                <th className="p-4">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line font-mono text-[11px] text-text-muted">
              <tr>
                <td className="p-4 font-bold text-text-high">Curve DEX TVL</td>
                <td className="p-4">~$1.40 Billion</td>
                <td className="p-4 text-emerald-400">Sustained rise above $2.0B</td>
                <td className="p-4 font-sans text-xs">Validates capital returning to core DEX pools.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-text-high">LlamaLend TVL</td>
                <td className="p-4">~$146 Million</td>
                <td className="p-4 text-emerald-400">Breakout toward $250M+</td>
                <td className="p-4 font-sans text-xs">Confirms lending diversification success.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-text-high">crvUSD Borrowing</td>
                <td className="p-4">~$37.8 Million</td>
                <td className="p-4 text-emerald-400">Expansion above $50M+</td>
                <td className="p-4 font-sans text-xs">Powers internal interest yield & fee loop.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-text-high">Locked CRV Supply</td>
                <td className="p-4">~851M (55% locked)</td>
                <td className="p-4 text-emerald-400">Maintenance above 50%+</td>
                <td className="p-4 font-sans text-xs">Ensures float squeeze remains active.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-text-high">LlamaLend V2 Fees</td>
                <td className="p-4">Minimal Admin Revenue</td>
                <td className="p-4 text-emerald-400">Positive Cash Flow Spikes</td>
                <td className="p-4 font-sans text-xs">Proves real protocol monetization.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* YagaCalls Method Conversion Box */}
      <section className="p-6 md:p-8 bg-surface-deep border border-primary/30 rounded-3xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-mono">Execution Framework</span>
          <h3 className="text-xl md:text-2xl font-black uppercase text-text-high tracking-tight">
            How YagaCalls Trades CRV & Altcoin Breakouts
          </h3>
          <p className="text-xs text-text-muted leading-relaxed">
            We don&apos;t buy blindly into green candles or Twitter hype. At YagaCalls, every swing trade setup undergoes strict 4-tier verification before being issued to our telegram members:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-background border border-line rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-primary font-bold">STEP 1</span>
            <h4 className="text-xs font-bold uppercase text-text-high">Fundamental Audit</h4>
            <p className="text-[11px] text-text-muted">Analyze TVL, tokenomics & developer catalysts.</p>
          </div>
          <div className="p-4 bg-background border border-line rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-primary font-bold">STEP 2</span>
            <h4 className="text-xs font-bold uppercase text-text-high">Liquidity Timing</h4>
            <p className="text-[11px] text-text-muted">Identify high-volume regional session windows.</p>
          </div>
          <div className="p-4 bg-background border border-line rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-primary font-bold">STEP 3</span>
            <h4 className="text-xs font-bold uppercase text-text-high">Invalidation Anchor</h4>
            <p className="text-[11px] text-text-muted">Place strict stop loss below key support levels.</p>
          </div>
          <div className="p-4 bg-background border border-line rounded-xl space-y-1">
            <span className="text-[10px] font-mono text-primary font-bold">STEP 4</span>
            <h4 className="text-xs font-bold uppercase text-text-high">Scaled Profit Exit</h4>
            <p className="text-[11px] text-text-muted">Take TP1 profits and lock stops to breakeven.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-primary text-black font-bold text-xs uppercase px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors">
            View Premium Signal Plans <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/method" className="inline-flex items-center gap-2 border border-line text-text-high font-bold text-xs uppercase px-5 py-3 rounded-xl hover:text-primary hover:border-primary/40 transition-colors">
            Explore The Yaga Method <CheckCircle2 className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </section>

    </div>
  );
}
