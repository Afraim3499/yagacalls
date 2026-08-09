"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BarChart3, 
  Globe2, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Layers, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Cpu, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

export default function CryptoSearchIntentResearch() {
  const [activeTab, setActiveTab] = useState<"canada" | "uae" | "nigeria" | "worldwide">("canada");
  const [activeCategory, setActiveCategory] = useState<number>(0);

  // Dataset statistics for Interactive Charts
  const concentrationData = [
    { country: "Nigeria", binanceShare: 89, color: "bg-emerald-500", highlight: "Access & P2P Liquidity" },
    { country: "UAE", binanceShare: 51, color: "bg-amber-500", highlight: "Licensed Infrastructure (VARA)" },
    { country: "Worldwide", binanceShare: 5, color: "bg-blue-500", highlight: "Market Price Monitoring" },
    { country: "Canada", binanceShare: 4, color: "bg-purple-500", highlight: "Broad Research-to-Action" },
  ];

  const intentCategories = [
    { title: "1. Education", label: "What is crypto?", example: "what is crypto, cryptocurrency", focus: "Beginner conceptual discovery" },
    { title: "2. Market Monitoring", label: "What is happening now?", example: "crypto price, bitcoin price, crypto news", focus: "Real-time price & volume monitoring" },
    { title: "3. Asset Discovery", label: "Which asset to watch?", example: "Bitcoin, Ethereum, XRP, POLYX, Solana", focus: "Targeted token research" },
    { title: "4. Exchange Access", label: "Where do I trade?", example: "Binance, Coinbase, Kraken, Gate", focus: "Market gateway selection" },
    { title: "5. Transactional Intent", label: "How do I buy?", example: "buy crypto, buy Bitcoin Binance, BTC to USD", focus: "Active execution intent" },
    { title: "6. Custody & Wallets", label: "How do I store it?", example: "crypto wallet, cold wallet, Phantom", focus: "Asset security & self-custody" },
    { title: "7. Regulation & Rules", label: "What are the legal rules?", example: "CLARITY Act, SEC rules, VARA license", focus: "Legal risk assessment" },
    { title: "8. Sentiment & Analytics", label: "What is market mood?", example: "Fear and Greed Index, crypto bubbles", focus: "Trader sentiment interpretation" },
  ];

  // Dataset schemas
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Global Cryptocurrency Search Intent Dataset (2026)",
    "description": "Comparative analysis of Google Trends search data across Canada, UAE, Nigeria, and Global markets detailing cryptocurrency onboarding funnels and search intent categories.",
    "url": "https://www.yagacalls.com/blog/crypto-search-intent-across-markets",
    "sameAs": "https://www.yagacalls.com/blog/crypto-search-intent-across-markets",
    "keywords": ["Crypto search intent", "Google Trends crypto", "Canada crypto regulation", "UAE VARA Binance", "Nigeria crypto access"],
    "creator": {
      "@type": "Organization",
      "name": "YagaCalls Research",
      "url": "https://www.yagacalls.com"
    },
    "spatialCoverage": [
      { "@type": "Place", "name": "Canada" },
      { "@type": "Place", "name": "United Arab Emirates" },
      { "@type": "Place", "name": "Nigeria" },
      { "@type": "Place", "name": "Global" }
    ],
    "temporalCoverage": "2026-08-02/2026-08-09"
  };

  const reportSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    "name": "Crypto Search Intent Across Markets: What Canada, the UAE and Nigeria Reveal About How People Enter Crypto",
    "headline": "Crypto Search Intent Benchmark: Canada, UAE, Nigeria and Global Markets",
    "description": "Empirical study evaluating Google Trends query structures across four distinct economic zones to model digital asset market adoption funnels.",
    "datePublished": "2026-08-09",
    "dateModified": "2026-08-09",
    "author": {
      "@type": "Organization",
      "name": "YagaCalls Research",
      "url": "https://www.yagacalls.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yaga Calls",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.yagacalls.com/yaga_calls_logo.webp"
      }
    }
  };

  return (
    <>
      <JsonLd data={datasetSchema} />
      <JsonLd data={reportSchema} />

      <div className="space-y-12 text-text-muted">

        {/* 1. AI ANSWER ENGINE OPTIMIZATION (AEO / AIO) SUMMARY BOX */}
        <div className="border border-primary/30 bg-gradient-to-br from-surface-deep via-primary/5 to-surface-deep p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              AI Overview & Search Takeaways
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-black uppercase text-text-high tracking-tight mb-4">
            Key Findings: Global Crypto Entry Funnels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-background/60 p-4 rounded-xl border border-line/60 space-y-1">
              <span className="font-bold text-primary block uppercase tracking-wider">🇨🇦 Canada (Research-to-Action)</span>
              <p className="text-text-muted leading-relaxed">
                Broad multi-stage funnel spanning basic education (&ldquo;what is crypto&rdquo;), regulatory tracking (U.S. CLARITY Act), exchange evaluation, asset discovery, and cold wallet custody.
              </p>
            </div>
            
            <div className="bg-background/60 p-4 rounded-xl border border-line/60 space-y-1">
              <span className="font-bold text-amber-400 block uppercase tracking-wider">🇦🇪 UAE (Infrastructure & Execution)</span>
              <p className="text-text-muted leading-relaxed">
                Platform-first funnel dominated by exchange infrastructure (Binance = 51% export score) under VARA&apos;s formal licensing framework, asset catalysts (POLYX +5,000% Breakout), and trading apps.
              </p>
            </div>

            <div className="bg-background/60 p-4 rounded-xl border border-line/60 space-y-1">
              <span className="font-bold text-emerald-400 block uppercase tracking-wider">🇳🇬 Nigeria (Access & Conversion)</span>
              <p className="text-text-muted leading-relaxed">
                Transaction-focused funnel with Binance searches accounting for 89% of observed export scores, driven by USD hedging, P2P liquidity, and BTC-to-USD conversion needs.
              </p>
            </div>

            <div className="bg-background/60 p-4 rounded-xl border border-line/60 space-y-1">
              <span className="font-bold text-blue-400 block uppercase tracking-wider">🌐 Worldwide (Market Monitoring)</span>
              <p className="text-text-muted leading-relaxed">
                Observation-focused benchmark where searches for basic definitions (&ldquo;what is crypto&rdquo;) dropped -50% while price, news, Bitcoin (+40%), and exchange monitoring surged.
              </p>
            </div>
          </div>
        </div>

        {/* 2. EXECUTIVE SUMMARY & INTENT MATRIX */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-black uppercase text-text-high tracking-tight">
              Executive Summary: Different Doors Into the Market
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-text-muted">
            Crypto is a global market, but people do not enter it through the same door. An analysis of Google Trends search data across <strong className="text-text-high">Canada, the United Arab Emirates, Nigeria, and the worldwide benchmark</strong> reveals strikingly different patterns of attention.
          </p>

          <p className="text-sm leading-relaxed text-text-muted">
            Worldwide search behavior was centered on market price action and exchange status. Canada displayed a comprehensive research-to-action funnel asking everything from basic definitions to legislative regulatory rules. In contrast, the UAE and Nigeria showed sharp concentrations around exchange infrastructure—particularly Binance—driven by local licensing structures in Dubai and peer-to-peer liquidity demand in West Africa.
          </p>
        </section>

        {/* 3. INTERACTIVE REGIONAL FUNNEL EXPLORER */}
        <section className="border border-line bg-surface-deep/30 p-6 rounded-3xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-4">
            <div>
              <span className="text-xs font-black uppercase text-primary tracking-widest">Interactive Dataset Explorer</span>
              <h3 className="text-lg font-black uppercase text-text-high tracking-tight">
                Compare Regional Crypto Intent Funnels
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["canada", "uae", "nigeria", "worldwide"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? "bg-primary text-background shadow-lg scale-105"
                      : "bg-surface border border-line text-text-muted hover:text-text-high"
                  }`}
                >
                  {tab === "canada" && "🇨🇦 Canada"}
                  {tab === "uae" && "🇦🇪 UAE"}
                  {tab === "nigeria" && "🇳🇬 Nigeria"}
                  {tab === "worldwide" && "🌐 Worldwide"}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              {activeTab === "canada" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-block bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-md text-purple-400 text-xs font-bold uppercase tracking-wider">
                    Model: Research-to-Action Funnel
                  </div>
                  <h4 className="text-xl font-bold text-text-high">Canada: Broad Multi-Stage Participation</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Canada exhibits the most complete funnel in the dataset. Users ask foundational questions (&ldquo;what is crypto&rdquo; score 100), investigate U.S. Senate legislation (CLARITY Act), compare local exchanges like Wealthsimple and Kraken, and research custody solutions like cold storage and Phantom wallet.
                  </p>
                  <div className="bg-background/80 p-4 rounded-2xl border border-line space-y-2 text-xs">
                    <span className="font-bold text-text-high block">Top Query Interest Scores (Canada Sample):</span>
                    <div className="grid grid-cols-2 gap-2 text-text-muted font-mono">
                      <div>1. what is crypto: <span className="text-primary font-bold">100</span></div>
                      <div>2. crypto price: <span className="text-text-high font-bold">63</span></div>
                      <div>3. crypto wallet: <span className="text-text-high font-bold">62</span></div>
                      <div>4. CLARITY Act: <span className="text-amber-400 font-bold">32</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "uae" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-block bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Model: Infrastructure-to-Execution Funnel
                  </div>
                  <h4 className="text-xl font-bold text-text-high">UAE: Exchange-First & Regulatory Infrastructure</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    UAE search intent skips basic definitions and focuses heavily on platform gateways. Backed by Dubai&apos;s VARA licensing framework, Binance commands 51% of export scores. The dataset also features asset-specific breakouts like POLYX (+5,000%) following protocol upgrades.
                  </p>
                  <div className="bg-background/80 p-4 rounded-2xl border border-line space-y-2 text-xs">
                    <span className="font-bold text-text-high block">Top Query Interest Scores (UAE Sample):</span>
                    <div className="grid grid-cols-2 gap-2 text-text-muted font-mono">
                      <div>1. Binance: <span className="text-primary font-bold">100</span></div>
                      <div>2. crypto exchange Binance: <span className="text-text-high font-bold">75</span></div>
                      <div>3. POLYX crypto: <span className="text-amber-400 font-bold">37</span></div>
                      <div>4. buy Ethereum Binance: <span className="text-text-high font-bold">25</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "nigeria" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    Model: Access-to-Transaction Funnel
                  </div>
                  <h4 className="text-xl font-bold text-text-high">Nigeria: P2P Liquidity & Currency Conversion</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Nigeria presents an intense focus on practical access. Binance queries represent 89% of export scores, alongside heavy search volumes for BTC-to-USD conversion and buying Bitcoin/Ethereum. News queries scored just 2, highlighting a transaction-first mindset.
                  </p>
                  <div className="bg-background/80 p-4 rounded-2xl border border-line space-y-2 text-xs">
                    <span className="font-bold text-text-high block">Top Query Interest Scores (Nigeria Sample):</span>
                    <div className="grid grid-cols-2 gap-2 text-text-muted font-mono">
                      <div>1. Binance: <span className="text-primary font-bold">100</span></div>
                      <div>2. crypto exchange Binance: <span className="text-text-high font-bold">98</span></div>
                      <div>3. BTC to USD Binance: <span className="text-emerald-400 font-bold">18</span></div>
                      <div>4. crypto news: <span className="text-text-muted">2</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "worldwide" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md text-blue-400 text-xs font-bold uppercase tracking-wider">
                    Model: Market-Monitoring Funnel
                  </div>
                  <h4 className="text-xl font-bold text-text-high">Worldwide: Price Action & News Tracking</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    The worldwide baseline shows market attention moving downstream. Basic definition searches fell by -50%, while price tracking (+40%), market conditions (+20%), and Bitcoin research (+40%) dominated public interest.
                  </p>
                  <div className="bg-background/80 p-4 rounded-2xl border border-line space-y-2 text-xs">
                    <span className="font-bold text-text-high block">Top Query Interest Scores (Worldwide Sample):</span>
                    <div className="grid grid-cols-2 gap-2 text-text-muted font-mono">
                      <div>1. crypto price: <span className="text-primary font-bold">100 (+40%)</span></div>
                      <div>2. crypto market: <span className="text-text-high font-bold">73 (+20%)</span></div>
                      <div>3. Bitcoin: <span className="text-text-high font-bold">66 (+40%)</span></div>
                      <div>4. what is crypto: <span className="text-red-400 font-bold">53 (-50%)</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Visual Funnel Step Card */}
            <div className="lg:col-span-5 border border-line bg-background/60 p-6 rounded-2xl space-y-4">
              <h5 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                <Compass className="w-4 h-4" /> Funnel Sequence Breakdown
              </h5>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-surface/50 border border-line/40">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono font-bold flex items-center justify-center text-[10px]">1</span>
                  <span className="font-bold text-text-high">Attention Trigger</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-surface/50 border border-line/40">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono font-bold flex items-center justify-center text-[10px]">2</span>
                  <span className="font-bold text-text-high">Information Evaluation</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-surface/50 border border-line/40">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono font-bold flex items-center justify-center text-[10px]">3</span>
                  <span className="font-bold text-text-high">Platform Selection</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-surface/50 border border-line/40">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono font-bold flex items-center justify-center text-[10px]">4</span>
                  <span className="font-bold text-text-high">Custody & Execution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VISUAL DATA CHART: BINANCE CONCENTRATION */}
        <section className="border border-line bg-surface-deep/40 p-6 md:p-8 rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div>
              <span className="text-xs font-black uppercase text-primary tracking-widest">Data Visualization</span>
              <h3 className="text-xl font-black uppercase text-text-high tracking-tight">
                Binance Query Concentration Share by Export
              </h3>
            </div>
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>

          <p className="text-xs text-text-muted leading-relaxed">
            Summing the relative search interest scores for explicit &ldquo;Binance&rdquo; queries within each market export illustrates how single-brand infrastructure dominates emerging and middle-eastern search datasets compared to Western and global benchmarks.
          </p>

          {/* Interactive Custom SVG/CSS Bar Chart */}
          <div className="space-y-4 pt-2">
            {concentrationData.map((item) => (
              <div key={item.country} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-text-high flex items-center gap-2">
                    {item.country} <span className="text-[10px] text-text-muted font-normal">({item.highlight})</span>
                  </span>
                  <span className="font-mono text-primary">{item.binanceShare}% of export score</span>
                </div>
                <div className="w-full h-4 bg-background/80 rounded-full overflow-hidden border border-line/60 p-0.5">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${item.color}`}
                    style={{ width: `${item.binanceShare}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-background/40 rounded-xl border border-line/50 text-[11px] text-text-muted leading-relaxed">
            <strong className="text-text-high">Methodology Note:</strong> These percentages reflect the proportion of interest scores allocated to Binance-related queries within each qualitative Google Trends export sample. They represent relative brand concentration within the exported search set rather than absolute national search volume.
          </div>
        </section>

        {/* 5. EDITORIAL SPOTLIGHT: CANADA & REGULATION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-line pt-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-primary tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Regulatory Spillover Analysis
            </div>
            <h3 className="text-2xl font-black uppercase text-text-high tracking-tight">
              Why the U.S. CLARITY Act Spiked in Canadian Searches
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Canadian search exports prominently featured multiple iterations of the <strong className="text-text-high">&ldquo;CLARITY Act&rdquo;</strong> (Digital Asset Market CLARITY Act). In early August 2026, U.S. Senate Majority Leader John Thune advanced the legislative process prior to recess.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Because Canadian financial liquidity and exchange offerings are deeply connected with North American market structure, American legislative updates generate immediate international narrative spillovers across Canadian search queries.
            </p>
            <div className="bg-surface-deep/40 p-4 rounded-xl border border-line text-xs space-y-1">
              <span className="font-bold text-text-high block">Bank of Canada Context:</span>
              <p className="text-text-muted">
                Official Bank of Canada research indicates Bitcoin ownership remained stable near ~10% in 2023, primarily utilized as an investment asset rather than a medium of exchange.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-line shadow-xl bg-surface-deep/30">
            <Image
              src="/images/research-canada-funnel.png"
              alt="Canadian regulatory digital asset legislation and financial analytics desk"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* 6. EDITORIAL SPOTLIGHT: UAE & POLYX CASE STUDY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-line pt-10">
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-line shadow-xl bg-surface-deep/30 order-2 lg:order-1">
            <Image
              src="/images/research-uae-infrastructure.png"
              alt="Dubai International Financial Centre DIFC licensed digital asset exchange infrastructure"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
              <Cpu className="w-4 h-4" /> Narrative Anomaly Breakdown
            </div>
            <h3 className="text-2xl font-black uppercase text-text-high tracking-tight">
              UAE Exchange Dominance & The POLYX Narrative Spike
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Dubai&apos;s Virtual Assets Regulatory Authority (VARA) maintains a public register of licensed providers, where Binance FZE operates as a fully licensed Virtual Asset Service Provider.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Simultaneously, <strong className="text-amber-400">POLYX (Polymesh)</strong> registered a +5,000% &ldquo;Breakout&rdquo; search spike in the UAE. This coincided with Polymesh&apos;s major v8 mainnet upgrade launched on July 22, 2026, which overhauled asset onboarding and smart contract capabilities for Real-World Assets (RWA).
            </p>
            
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs space-y-2">
              <span className="font-bold text-amber-400 block uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> YagaCalls Research Insight:
              </span>
              <p className="text-text-muted">
                A search breakout is an inquiry signal, not an automatic buy trigger. While Google Trends identifies rising RWA narrative interest in POLYX, market structure and order flow must confirm the setup before risk is deployed.
              </p>
            </div>
          </div>
        </section>

        {/* 7. EDITORIAL SPOTLIGHT: NIGERIA P2P ACCESS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-line pt-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-emerald-400 tracking-wider">
              <Globe2 className="w-4 h-4" /> Grassroots Adoption & Access
            </div>
            <h3 className="text-2xl font-black uppercase text-text-high tracking-tight">
              Nigeria: Practical Access & The Binance Paradox
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Nigeria ranked 6th globally in Chainalysis&apos;s 2025 Global Crypto Adoption Index. Despite regulatory tension between authorities and centralized platforms, public demand for P2P transaction gateways remains dominant.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Queries explicitly containing &ldquo;Binance&rdquo; represented 89% of total export interest scores. Users primarily seek access to dollar-pegged assets, BTC-to-USD conversion rates, and mobile trading infrastructure to hedge currency volatility.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-line shadow-xl bg-surface-deep/30">
            <Image
              src="/images/research-nigeria-access.png"
              alt="African mobile fintech developer conducting peer-to-peer crypto transactions in Lagos"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* 8. INTERACTIVE QUERY CATEGORY MATRIX */}
        <section className="border border-line bg-surface-deep/20 p-6 md:p-8 rounded-3xl space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-xs font-black uppercase text-primary tracking-widest">Taxonomy Framework</span>
            <h3 className="text-xl font-black uppercase text-text-high tracking-tight">
              The 8 Intent Categories of Crypto Search
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {intentCategories.map((cat, idx) => (
              <div 
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeCategory === idx 
                    ? "bg-surface border-primary shadow-lg scale-105" 
                    : "bg-background/60 border-line/60 hover:border-line"
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-primary block uppercase mb-1">{cat.label}</span>
                <h4 className="text-sm font-bold text-text-high mb-2">{cat.title}</h4>
                <p className="text-[11px] text-text-muted mb-3 italic">&ldquo;{cat.example}&rdquo;</p>
                <div className="text-[10px] bg-surface-deep p-2 rounded-lg border border-line/40 text-text-muted">
                  {cat.focus}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. YAGACALLS ATTENTION-TO-EXECUTION FRAMEWORK */}
        <section className="border border-primary/30 bg-gradient-to-r from-surface-deep via-background to-surface-deep p-6 md:p-8 rounded-3xl space-y-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-black uppercase text-text-high tracking-tight">
              YagaCalls Framework: Attention is Information, Not Confirmation
            </h3>
          </div>

          <p className="text-xs text-text-muted leading-relaxed">
            Search trends function as narrative discovery infrastructure. They reveal where public attention is congregating. However, turning attention into an actionable trade setup requires disciplined multi-stage verification:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs">
            <div className="p-4 bg-background/80 rounded-xl border border-line space-y-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-mono font-bold flex items-center justify-center">1</div>
              <h4 className="font-bold text-text-high uppercase">Attention</h4>
              <p className="text-[11px] text-text-muted">Google Trends identifies rising asset or sector narrative curiosity.</p>
            </div>

            <div className="p-4 bg-background/80 rounded-xl border border-line space-y-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-mono font-bold flex items-center justify-center">2</div>
              <h4 className="font-bold text-text-high uppercase">Research</h4>
              <p className="text-[11px] text-text-muted">Fundamental catalysts, protocol upgrades, and regulatory context evaluated.</p>
            </div>

            <div className="p-4 bg-background/80 rounded-xl border border-line space-y-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-mono font-bold flex items-center justify-center">3</div>
              <h4 className="font-bold text-text-high uppercase">Structure</h4>
              <p className="text-[11px] text-text-muted">Technical range breakouts, timezone volume, and order flow confirmed.</p>
            </div>

            <div className="p-4 bg-background/80 rounded-xl border border-line space-y-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-mono font-bold flex items-center justify-center">4</div>
              <h4 className="font-bold text-text-high uppercase">Execution</h4>
              <p className="text-[11px] text-text-muted">Strict invalidation level, position sizing, and stop-loss enforced.</p>
            </div>
          </div>
        </section>

        {/* 10. CONCLUSION & RESEARCH CITATIONS */}
        <section className="border-t border-line pt-8 space-y-4 text-xs text-text-muted">
          <h4 className="font-bold text-text-high uppercase tracking-wider text-sm">
            Research Citations & Data Sources
          </h4>
          <ol className="list-decimal pl-5 space-y-1 font-mono text-[11px]">
            <li>Google Trends Search Normalization Methodology (2026).</li>
            <li>Google Trends Breakout Query Definitions (&gt;5,000% relative surge).</li>
            <li>Reuters Report: U.S. Senate Advancement of Digital Asset Market CLARITY Act (August 2026).</li>
            <li>Bank of Canada Bitcoin Ownership & Usage Survey Results.</li>
            <li>FINTRAC Canada Administrative Ruling on Binance Holdings Limited (2024–2026).</li>
            <li>Dubai Virtual Assets Regulatory Authority (VARA) Public Register of Licensed VASPs.</li>
            <li>Chainalysis 2025 Geography of Cryptocurrency Report (MENA & UAE Value Flows).</li>
            <li>Polymesh Protocol v8 Mainnet Upgrade Announcement (July 2026).</li>
            <li>Chainalysis 2025 Global Crypto Adoption Index (Nigeria Ranking #6).</li>
            <li>Nigeria Securities and Exchange Commission (SEC) Regulatory Framework for Digital Assets.</li>
          </ol>
        </section>

      </div>
    </>
  );
}
