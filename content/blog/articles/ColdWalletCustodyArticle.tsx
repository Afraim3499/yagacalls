"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function ColdWalletCustodyArticle() {
  return (
    <div className="space-y-8 text-text-muted">
      
      {/* Executive Overview Box */}
      <div className="border border-purple-500/30 bg-gradient-to-br from-surface-deep via-purple-500/5 to-surface-deep p-6 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4" /> AI Overview & Executive Takeaway
        </div>
        <p className="text-xs leading-relaxed text-text-high font-medium">
          Search queries for <strong>cold wallet custody (+1,650% surge)</strong> and self-custody solutions like Phantom hardware integration highlight a growing focus on asset security. Learn how active traders balance exchange liquidity with hardware cold storage to eliminate counterparty risk.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 id="custody-surge" className="text-xl font-black uppercase text-text-high tracking-tight flex items-center gap-2">
          <Lock className="w-5 h-5 text-purple-400" /> Why Cold Wallet Searches Surged +1,650%
        </h2>
        <p className="text-xs leading-relaxed">
          In our regional search dataset, queries like &ldquo;Binance crypto wallet&rdquo; (+1,650%) and &ldquo;cold wallet crypto&rdquo; experienced rapid growth. As traders gain experience, their attention shifts downstream from simple price monitoring toward securing digital assets against exchange outages, hacks, and regulatory freezes.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h2 id="self-custody-vs-exchange" className="text-xl font-black uppercase text-text-high tracking-tight">
          Self-Custody vs Exchange Account Balancing
        </h2>
        <p className="text-xs leading-relaxed">
          Professional capital management requires separating long-term investment assets from active trading capital:
        </p>
        <ul className="list-disc pl-5 text-xs space-y-2">
          <li><strong>Cold Storage (Offline Hardware):</strong> 80–90% of total portfolio capital held in self-custody hardware wallets (Ledger, Trezor).</li>
          <li><strong>Active Exchange Margin:</strong> 10–20% of trading capital deployed on reputable licensed exchanges for active signal execution.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h2 id="phantom-hardware" className="text-xl font-black uppercase text-text-high tracking-tight">
          Hardware Wallets vs Web3 Mobile Wallets
        </h2>
        <p className="text-xs leading-relaxed">
          While Web3 wallets like Phantom offer convenient mobile access to Solana and Ethereum dApps, connecting active trading wallets directly to unknown smart contracts poses risk. Pairing software wallets with hardware security keys provides a essential layer of protection.
        </p>
      </section>

      {/* Section 4 & Conversion Callout */}
      <section className="space-y-4 border-t border-line pt-6">
        <h2 id="yaga-security-rules" className="text-xl font-black uppercase text-text-high tracking-tight">
          YagaCalls Capital Preservation Philosophy
        </h2>
        <p className="text-xs leading-relaxed">
          At YagaCalls, capital preservation is non-negotiable. Our signals focus heavily on spot trading and conservative position sizing, ensuring traders never risk their core portfolio balance on high-leverage exchange liquidation traps.
        </p>
        
        <div className="bg-surface-deep p-6 rounded-2xl border border-line space-y-4">
          <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" /> Capital Preservation First:
          </h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Read our full legal risk disclosure and capital protection framework to understand how YagaCalls structures spot setups with mandatory stop-loss parameters.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/risk-disclosure" className="inline-flex items-center gap-2 bg-purple-500 text-background font-bold text-xs uppercase px-4 py-2 rounded-xl">
              Read Risk Disclosure <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/blog/crypto-search-intent-across-markets" className="inline-flex items-center gap-2 border border-line text-text-high font-bold text-xs uppercase px-4 py-2 rounded-xl hover:text-purple-400">
              Read Flagship Research Paper <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
