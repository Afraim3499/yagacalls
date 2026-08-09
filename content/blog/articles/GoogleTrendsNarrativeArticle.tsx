"use client";

import React from "react";
import Link from "next/link";
import { Search, Layers, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function GoogleTrendsNarrativeArticle() {
  return (
    <div className="space-y-8 text-text-muted">
      
      {/* Executive Overview Box */}
      <div className="border border-primary/30 bg-gradient-to-br from-surface-deep via-primary/5 to-surface-deep p-6 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4" /> AI Overview & Executive Takeaway
        </div>
        <p className="text-xs leading-relaxed text-text-high font-medium">
          Google Trends is an exceptional tool for identifying emerging digital asset narrative attention. However, buying an asset simply because its search volume is trending leads to severe late-cycle retail FOMO. Learn how YagaCalls separates the <strong>Attention Layer from the Signal Layer</strong>.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 id="attention-layer" className="text-xl font-black uppercase text-text-high tracking-tight flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" /> The Attention Layer vs The Signal Layer
        </h2>
        <p className="text-xs leading-relaxed">
          In financial markets, public search interest represents <strong>attention</strong>. Attention tells analysts what topics, tokens, or regulations the market is currently investigating.
        </p>
        <p className="text-xs leading-relaxed">
          However, attention is not confirmation. High search volume can indicate early organic narrative formation, breaking news, or late-stage retail panic and FOMO. Converting attention into an actionable trade requires passing through the <strong>Signal Layer</strong>: technical support/resistance levels, order flow volume, and strict stop-loss invalidation parameters.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h2 id="eight-categories" className="text-xl font-black uppercase text-text-high tracking-tight">
          Taxonomy: The 8 Search Intent Categories
        </h2>
        <p className="text-xs leading-relaxed">
          Our empirical research categorizes crypto Google search queries into 8 distinct intent categories:
        </p>
        <ol className="list-decimal pl-5 text-xs space-y-1 font-mono">
          <li>Education (&ldquo;what is crypto&rdquo;)</li>
          <li>Market Monitoring (&ldquo;crypto price&rdquo;)</li>
          <li>Asset Discovery (&ldquo;Bitcoin&rdquo;, &ldquo;POLYX&rdquo;)</li>
          <li>Exchange Access (&ldquo;Binance&rdquo;)</li>
          <li>Transactional Intent (&ldquo;buy crypto&rdquo;)</li>
          <li>Custody (&ldquo;cold wallet crypto&rdquo;)</li>
          <li>Regulation (&ldquo;CLARITY Act&rdquo;)</li>
          <li>Sentiment & Analytics (&ldquo;Fear and Greed Index&rdquo;)</li>
        </ol>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h2 id="fomo-traps" className="text-xl font-black uppercase text-text-high tracking-tight">
          Why Buying Trending Search Terms Causes Drawdowns
        </h2>
        <p className="text-xs leading-relaxed">
          By the time a retail search term reaches peak public trends volume, institutional smart money is often scaling out of positions into retail liquidity. Buying during search breakouts without technical invalidation leads to buying local tops.
        </p>
      </section>

      {/* Section 4 & Conversion Callout */}
      <section className="space-y-4 border-t border-line pt-6">
        <h2 id="yaga-matrix" className="text-xl font-black uppercase text-text-high tracking-tight">
          The 4-Step YagaCalls Attention-to-Execution Matrix
        </h2>
        <p className="text-xs leading-relaxed">
          YagaCalls converts raw narrative interest into high-probability swing setups using our disciplined 4-stage pipeline:
        </p>
        
        <div className="bg-surface-deep p-6 rounded-2xl border border-line space-y-4">
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" /> The YagaCalls Matrix:
          </h3>
          <p className="text-xs text-text-muted leading-relaxed">
            1. <strong>Attention Discovery</strong> (Google Trends & narrative monitoring) &rarr; 2. <strong>Fundamental Audit</strong> (upgrades, tokenomics, news) &rarr; 3. <strong>Technical Confirmation</strong> (range accumulation, volume) &rarr; 4. <strong>Risk Enforcement</strong> (stop-loss, position sizing).
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/method" className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase px-4 py-2 rounded-xl">
              Discover Our Trading Method <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/blog/crypto-search-intent-across-markets" className="inline-flex items-center gap-2 border border-line text-text-high font-bold text-xs uppercase px-4 py-2 rounded-xl hover:text-primary">
              Read Flagship Research Paper <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
