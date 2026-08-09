"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Scale, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function CanadaClarityActArticle() {
  return (
    <div className="space-y-8 text-text-muted">
      
      {/* Executive Overview Box */}
      <div className="border border-primary/30 bg-gradient-to-br from-surface-deep via-primary/5 to-surface-deep p-6 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4" /> AI Overview & Executive Takeaway
        </div>
        <p className="text-xs leading-relaxed text-text-high font-medium">
          Canadian crypto search intent during August 2026 was uniquely dominated by queries surrounding the <strong>U.S. Digital Asset Market CLARITY Act</strong>. Because North American capital markets are deeply linked, legislative developments in Washington generate immediate market sentiment and liquidity spillovers across Canadian trading desks.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 id="clarity-act-overview" className="text-xl font-black uppercase text-text-high tracking-tight flex items-center gap-2">
          <Scale className="w-5 h-5 text-primary" /> What is the Digital Asset Market CLARITY Act?
        </h2>
        <p className="text-xs leading-relaxed">
          The U.S. Digital Asset Market CLARITY Act represents one of the most comprehensive legislative attempts to establish federal regulatory jurisdiction over digital assets. Passed by the House in 2025, the bill entered a crucial procedural window in August 2026 when U.S. Senate Majority Leader John Thune advanced the legislative timeline prior to the congressional recess.
        </p>
        <p className="text-xs leading-relaxed">
          The legislation defines jurisdictional boundaries between federal regulatory agencies, provides explicit token classification guidelines, and outlines registration pathways for Virtual Asset Service Providers (VASPs).
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h2 id="canadian-spillover" className="text-xl font-black uppercase text-text-high tracking-tight">
          Why Canadian Investors Track U.S. Legislation
        </h2>
        <p className="text-xs leading-relaxed">
          Crypto liquidity knows no geographical borders, but regulatory arbitrage does. Canadian traders closely monitor American legislative events for three critical reasons:
        </p>
        <ul className="list-disc pl-5 text-xs space-y-2">
          <li><strong>Exchange Operation Strategy:</strong> Major North American exchanges adjust asset listings and staking parameters based on U.S. legal clarity.</li>
          <li><strong>Institutional Capital Flows:</strong> Canadian ETF providers and institutional desks rely on cross-border clearing mechanisms affected by U.S. federal laws.</li>
          <li><strong>Regulatory Alignment:</strong> Canadian authorities often coordinate policy frameworks with American federal counterparts.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h2 id="bank-of-canada-baseline" className="text-xl font-black uppercase text-text-high tracking-tight">
          Bank of Canada Bitcoin Ownership Baseline
        </h2>
        <p className="text-xs leading-relaxed">
          Comprehensive research published by the <strong>Bank of Canada</strong> shows that Canadian Bitcoin ownership stabilized at approximately <strong>10% in 2023</strong>. Crucially, the survey revealed that Canadians view digital assets primarily as an investment vehicle rather than a transactional medium.
        </p>
        <p className="text-xs leading-relaxed">
          This investor mindset explains why Canadian search queries span the full spectrum from foundational research (&ldquo;what is crypto&rdquo;) to cold storage custody (&ldquo;Phantom wallet&rdquo;, &ldquo;cold wallet crypto&rdquo;).
        </p>
      </section>

      {/* Section 4 & Conversion Callout */}
      <section className="space-y-4 border-t border-line pt-6">
        <h2 id="regulatory-risk-framework" className="text-xl font-black uppercase text-text-high tracking-tight">
          Filtering Legislative News into Systematic Trade Rules
        </h2>
        <p className="text-xs leading-relaxed">
          At YagaCalls, regulatory headlines are treated as volatility drivers, not instant buy signals. When major legislative news breaks, retail traders often panic buy or sell, creating severe price whipsaws.
        </p>
        
        <div className="bg-surface-deep p-6 rounded-2xl border border-line space-y-4">
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest">
            The YagaCalls Regulatory Risk Rule:
          </h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Never trade on news momentum alone. Wait for the initial knee-jerk reaction to clear, identify technical support/resistance levels, and calculate invalidation parameters before entering a position.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/risk-disclosure" className="inline-flex items-center gap-2 bg-primary text-background font-bold text-xs uppercase px-4 py-2 rounded-xl">
              Read Risk Disclosure <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/blog/crypto-search-intent-across-markets" className="inline-flex items-center gap-2 border border-line text-text-high font-bold text-xs uppercase px-4 py-2 rounded-xl hover:text-primary">
              View Flagship Benchmark Study <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
