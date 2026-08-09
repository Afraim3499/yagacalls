"use client";

import React from "react";
import Link from "next/link";
import { Compass, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function CryptoAdoptionFunnelsArticle() {
  return (
    <div className="space-y-8 text-text-muted">
      
      {/* Executive Overview Box */}
      <div className="border border-blue-500/30 bg-gradient-to-br from-surface-deep via-blue-500/5 to-surface-deep p-6 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4" /> AI Overview & Executive Takeaway
        </div>
        <p className="text-xs leading-relaxed text-text-high font-medium">
          Where a trader enters the cryptocurrency market dictates how they manage risk. Based on empirical Google Trends research across Canada, UAE, Nigeria, and Global markets, we map out the <strong>4 distinct crypto adoption funnels</strong> and explain how to avoid retail traps.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 id="funnel-framework" className="text-xl font-black uppercase text-text-high tracking-tight flex items-center gap-2">
          <Compass className="w-5 h-5 text-blue-400" /> The 4 Regional Adoption Funnel Models
        </h2>
        <p className="text-xs leading-relaxed">
          Search intent reflects regional financial infrastructure and economic motivation. Rather than treating all crypto queries as a single monolithic block, YagaCalls categorizes onboarding behavior into 4 regional funnels:
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h3 id="research-to-action" className="text-lg font-bold text-purple-400 uppercase tracking-wide">
          1. Canada: The Research-to-Action Funnel
        </h3>
        <p className="text-xs leading-relaxed">
          Spans the full multi-stage journey: basic definition (&ldquo;what is crypto&rdquo;) &rarr; legislative tracking (CLARITY Act) &rarr; exchange comparison &rarr; asset evaluation &rarr; self-custody cold wallets. Traders in this funnel tend to be risk-conscious but can suffer from analysis paralysis.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h3 id="infrastructure-to-execution" className="text-lg font-bold text-amber-400 uppercase tracking-wide">
          2. UAE: The Infrastructure-to-Execution Funnel
        </h3>
        <p className="text-xs leading-relaxed">
          Driven by Dubai&apos;s VARA regulatory framework: licensed exchange gateways (Binance 51%) &rarr; platform apps &rarr; narrative asset breakouts (POLYX). Traders in this funnel enjoy high liquidity access but must watch out for over-leveraging on exchange pairs.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-4">
        <h3 id="access-to-transaction" className="text-lg font-bold text-emerald-400 uppercase tracking-wide">
          3. Nigeria: The Access-to-Transaction Funnel
        </h3>
        <p className="text-xs leading-relaxed">
          Focuses on practical utility: P2P exchange access (Binance 89%) &rarr; USD currency hedging &rarr; rapid BTC-to-USD rate tracking. Traders in this funnel have high practical experience but must enforce strict position sizing math to protect capital during market drawdowns.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-4">
        <h3 id="market-monitoring" className="text-lg font-bold text-blue-400 uppercase tracking-wide">
          4. Worldwide: The Market-Monitoring Funnel
        </h3>
        <p className="text-xs leading-relaxed">
          Observation-first benchmark: real-time price monitoring (+40%) &rarr; market cap & news tracking &rarr; Bitcoin/Ethereum evaluation. Beginners in this funnel can easily fall into emotional FOMO during bull market headlines.
        </p>
      </section>

      {/* Section 6 & Conversion Callout */}
      <section className="space-y-4 border-t border-line pt-6">
        <h2 id="escaping-traps" className="text-xl font-black uppercase text-text-high tracking-tight">
          Transitioning from Funnel Curiosity to Systematic Trading
        </h2>
        <p className="text-xs leading-relaxed">
          Regardless of which funnel brought you into crypto, achieving consistent profitability requires transitioning from casual search interest to a systematic, risk-managed trading plan.
        </p>
        
        <div className="bg-surface-deep p-6 rounded-2xl border border-line space-y-4">
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> Start Systematic Trading with YagaCalls:
          </h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Verify our historical win rates, 1-on-1 human onboarding support, and transparent trade setup logs before risking real capital.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/proof" className="inline-flex items-center gap-2 bg-blue-500 text-background font-bold text-xs uppercase px-4 py-2 rounded-xl">
              View Verified Proof <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/blog/crypto-search-intent-across-markets" className="inline-flex items-center gap-2 border border-line text-text-high font-bold text-xs uppercase px-4 py-2 rounded-xl hover:text-blue-400">
              Read Flagship Benchmark Study <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
