"use client";

import { useState, useEffect, useMemo } from "react";
import Container from "@/components/shared/Container";
import GlowCard from "@/components/shared/GlowCard";
import CTAButton from "@/components/shared/CTAButton";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Search,
  Award,
  Flame,
  CheckCircle2,
  Loader2,
  ExternalLink,
  ShieldCheck,
  X
} from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import { getCoinLogoUrl } from "@/components/home/HeroDynamicPipeline";

export default function LiveSignalResultsDesk() {
  const [signals, setSignals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeframe, setTimeframe] = useState("ALL"); // ALL | THIS_WEEK | THIS_MONTH
  const [selectedAudience, setSelectedAudience] = useState("ALL"); // ALL | HIGH_TABLE_VIP_ONLY | FREE_AND_VIP
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSignalResults() {
      setLoading(true);
      try {
        const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4";
        const res = await fetch("https://ghwvwtwktnveqdqivxmy.supabase.co/rest/v1/trade_signals_log?select=*&order=created_at.desc", {
          headers: { "apikey": apiKey }
        });
        const data = await res.json();
        if (Array.isArray(data)) setSignals(data);
      } catch (e) {
        console.error("Error fetching live signal results:", e);
      } finally {
        setLoading(false);
      }
    }

    fetchSignalResults();
  }, []);

  // Filter Logic
  const filteredSignals = useMemo(() => {
    const now = new Date();
    return signals.filter(s => {
      const search = searchTerm.toLowerCase().trim();
      const matchesSearch = !search ||
        (s.symbol && s.symbol.toLowerCase().includes(search)) ||
        (s.custom_notes && s.custom_notes.toLowerCase().includes(search));

      const matchesAudience = selectedAudience === "ALL" || s.target_audience === selectedAudience;

      let matchesTimeframe = true;
      if (timeframe !== "ALL") {
        const createdAt = new Date(s.created_at);
        const diffDays = (now.getTime() - createdAt.getTime()) / (1000 * 3600 * 24);
        if (timeframe === "THIS_WEEK") matchesTimeframe = diffDays <= 7;
        else if (timeframe === "THIS_MONTH") matchesTimeframe = diffDays <= 30;
      }

      return matchesSearch && matchesAudience && matchesTimeframe;
    });
  }, [signals, searchTerm, timeframe, selectedAudience]);

  // Overall Live Stats Calculation
  const stats = useMemo(() => {
    let totalCalls = filteredSignals.length;
    let winningCalls = 0;
    let losingCalls = 0;
    let totalPnl = 0;
    let bestWin = 0;

    filteredSignals.forEach(s => {
      const pnl = Number(s.pnl_percentage || 0);
      totalPnl += pnl;
      if (pnl > 0) {
        winningCalls++;
        if (pnl > bestWin) bestWin = pnl;
      } else if (pnl < 0) {
        losingCalls++;
      }
    });

    const winRate = totalCalls > 0 ? Number(((winningCalls / totalCalls) * 100).toFixed(1)) : 100;

    return {
      totalCalls,
      winningCalls,
      losingCalls,
      winRate,
      totalPnl: Number(totalPnl.toFixed(2)),
      bestWin
    };
  }, [filteredSignals]);

  return (
    <div className="space-y-12">
      {/* Real-Time Calculated Performance Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface-deep border border-primary/30 p-6 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between text-text-muted mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest">Verified Win Rate</span>
            <Award className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            {stats.winRate}%
          </div>
          <div className="text-[11px] text-text-muted font-medium mt-1">
            {stats.winningCalls} Wins / {stats.losingCalls} Losses ({stats.totalCalls} Calls)
          </div>
        </div>

        <div className="bg-surface-deep border border-primary/30 p-6 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between text-text-muted mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest">Cumulative Net Return</span>
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            +{stats.totalPnl}%
          </div>
          <div className="text-[11px] text-text-muted font-medium mt-1">
            Real Calculated Net Gains
          </div>
        </div>

        <div className="bg-surface-deep border border-line p-6 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between text-text-muted mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest">Completed Trades</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl md:text-4xl font-black text-text tracking-tight">
            {stats.totalCalls} <span className="text-sm font-bold text-text-muted">Calls</span>
          </div>
          <div className="text-[11px] text-text-muted font-medium mt-1">
            Best Trade: +{stats.bestWin}%
          </div>
        </div>

        <div className="bg-surface-deep border border-primary/30 p-6 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between text-text-muted mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest">Risk & Leverage Policy</span>
            <ShieldCheck className="w-4 h-4 text-primary" />
          </div>
          <div className="text-xl font-black text-primary tracking-tight uppercase">
            Spot (0x Leverage)
          </div>
          <div className="text-[11px] text-text-muted font-medium mt-1">
            100% Spot Gains • 0 Leverage Risk
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-surface-deep border border-line p-4 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search coin symbol e.g. $BANK, $KABOSU, $ON..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-background border border-line focus:border-primary text-text text-xs pl-11 pr-4 py-3 rounded-2xl focus:outline-none placeholder:text-text-muted uppercase font-bold"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-background border border-line text-text text-xs font-bold px-4 py-3 rounded-2xl focus:outline-none focus:border-primary"
          >
            <option value="ALL">All Recorded Calls</option>
            <option value="THIS_WEEK">📅 Last 7 Days</option>
            <option value="THIS_MONTH">📅 Last 30 Days</option>
          </select>

          <select
            value={selectedAudience}
            onChange={(e) => setSelectedAudience(e.target.value)}
            className="bg-background border border-line text-text text-xs font-bold px-4 py-3 rounded-2xl focus:outline-none focus:border-primary"
          >
            <option value="ALL">All Signal Channels</option>
            <option value="HIGH_TABLE_VIP_ONLY">👑 High Table VIP Only</option>
            <option value="FREE_AND_VIP">📢 Free Channel & VIP</option>
          </select>
        </div>
      </div>

      {/* Main Signal Results Cards Grid */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3 text-text-muted">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest">Loading Live Trade Results...</span>
        </div>
      ) : filteredSignals.length === 0 ? (
        <div className="py-16 text-center text-text-muted space-y-3 bg-surface-deep border border-line rounded-3xl">
          <BarChart3 className="w-10 h-10 text-text-muted mx-auto stroke-[1.5]" />
          <div className="text-base font-bold text-text">No Results Found</div>
          <p className="text-xs text-text-muted">Try clearing your search terms or timeframe filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSignals.map((s) => {
            const pnl = Number(s.pnl_percentage || 0);
            const isWin = pnl > 0;
            const pnlFormatted = pnl > 0 ? `+${pnl.toFixed(0)}%` : `${pnl.toFixed(0)}%`;

            return (
              <GlowCard key={s.id} className="p-7 space-y-5 border-line relative overflow-hidden group">
                {/* Top Badge: Trade Result Outcome FIRST */}
                <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">
                      Trade Call Result
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xl md:text-2xl font-black uppercase tracking-tight ${
                        isWin ? 'text-primary' : 'text-red-400'
                      }`}>
                        {isWin ? '🚀' : '🛑'} {s.pnl_summary_text || `TP SMASHED (${pnlFormatted})`}
                      </span>
                    </div>
                  </div>

                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shrink-0 ${
                    s.target_audience === 'FREE_AND_VIP'
                      ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {s.target_audience === 'FREE_AND_VIP' ? '📢 Free & VIP' : '👑 High Table VIP'}
                  </span>
                </div>

                {/* Coin Symbol & Leverage Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={getCoinLogoUrl(s.symbol)} 
                      alt={s.symbol}
                      className="w-12 h-12 rounded-2xl border border-primary/40 object-cover bg-background shrink-0"
                    />
                    <div>
                      <div className="text-xl font-black text-text tracking-tight uppercase flex items-center gap-2">
                        <span>${s.symbol}</span>
                        <span className="text-xs font-bold text-text-muted bg-surface-deep px-2 py-0.5 rounded-md border border-line">
                          {s.leverage || 'Spot (0x)'}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-text-muted">
                        Closed: {new Date(s.closed_at || s.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted block">Spot Gain</span>
                    <span className="text-2xl font-black text-primary tracking-tight">{pnlFormatted}</span>
                  </div>
                </div>

                {/* Setup Entry & Targets Detail */}
                <div className="bg-background border border-line p-4 rounded-2xl space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">📍 Entry Zone:</span>
                    <span className="text-text font-bold">{s.entry_range || 'Market Entry'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary">🎯 Target Hit:</span>
                    <span className="text-primary font-bold">{s.take_profit_targets || pnlFormatted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-red-400">🛑 Invalidation (SL):</span>
                    <span className="text-red-400 font-bold">{s.stop_loss || 'Strict SL'}</span>
                  </div>
                </div>

                {/* Custom Setup Notes / Commentary */}
                {s.custom_notes && (
                  <p className="text-xs text-text-muted leading-relaxed font-medium italic border-l-2 border-primary/40 pl-3">
                    "{s.custom_notes}"
                  </p>
                )}

                {/* Expandable Chart Screenshot Link */}
                {s.chart_image_url && (
                  <button
                    onClick={() => setPreviewImage(s.chart_image_url)}
                    className="w-full py-2.5 bg-surface-deep hover:bg-surface-deep/80 border border-line hover:border-primary/40 rounded-xl text-xs font-bold text-text-muted hover:text-primary transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Setup Chart Screenshot</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </GlowCard>
            );
          })}
        </div>
      )}

      {/* Expandable Image Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-fade-in" onClick={() => setPreviewImage(null)}>
          <div className="relative max-w-4xl w-full bg-surface-deep border border-line rounded-3xl overflow-hidden p-2 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setPreviewImage(null)} className="absolute top-4 right-4 z-10 p-2 bg-background/80 text-text rounded-full border border-line hover:bg-background">
              <X className="w-5 h-5" />
            </button>
            <img src={previewImage} alt="Trade Chart Setup" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
          </div>
        </div>
      )}

      {/* Conversion CTA Block */}
      <div className="p-10 md:p-14 bg-gradient-to-r from-emerald-950/40 via-surface-deep to-slate-950 border border-primary/30 rounded-[40px] shadow-2xl text-center space-y-6">
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full inline-block">
            Start Trading With Structure
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text">
            Ready To Receive Our <br /><span className="text-primary">Next Signal Call?</span>
          </h2>
          <p className="text-xs md:text-sm text-text-muted font-medium uppercase tracking-wide leading-relaxed">
            Join the free Telegram channel to observe daily setup updates, or upgrade to High Table VIP for exclusive premium signal calls.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <CTAButton 
            href={BRAND_CONFIG.officialTelegram} 
            target="_blank"
            trackingLabel="results_join_free"
          >
            Join Free Telegram Channel
          </CTAButton>
          <CTAButton 
            href="/pricing" 
            variant="secondary"
            className="px-10"
            trackingLabel="results_view_pricing"
          >
            Compare VIP Access Plans
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
