"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  BarChart2,
  Check,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  Filter,
  Layers,
  RefreshCw,
  Search,
  Sparkles,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  Zap,
  ShieldAlert,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";
import { supabase } from "@/lib/supabase";

interface CryptoSignal {
  id: string;
  signal_code: string | null;
  symbol: string;
  pair: string;
  direction: "LONG" | "SHORT";
  leverage: string;
  timeframe: string;
  entry_price: number;
  stop_loss: number;
  tp1: number;
  tp2: number;
  tp3: number;
  status: string;
  created_at: string;
  updated_at?: string;
}

export default function SignalTrackingHubPage() {
  const [signals, setSignals] = useState<CryptoSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [prices, setPrices] = useState<Record<string, number>>({});
  
  // ── Filters & Search ──
  const [searchQuery, setSearchQuery] = useState("");
  const [directionFilter, setDirectionFilter] = useState<"ALL" | "LONG" | "SHORT">("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [dateFilter, setDateFilter] = useState<"ALL" | "TODAY" | "7DAYS" | "30DAYS">("ALL");
  const [sortBy, setSortBy] = useState<"NEWEST" | "OLDEST" | "SYMBOL">("NEWEST");

  // ── Actions State ──
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ── Fetch Signals from Supabase ──
  const fetchSignals = async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const { data, error } = await supabase
        .from("crypto_signals")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSignals((data as CryptoSignal[]) || []);
    } catch (err: any) {
      console.error("Failed to fetch signals", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchSignals();
  }, []);

  // ── Fetch Live Binance Prices ──
  useEffect(() => {
    const fetchLivePrices = async () => {
      try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/price");
        const data = await res.json();
        if (Array.isArray(data)) {
          const priceMap: Record<string, number> = {};
          data.forEach((item: { symbol: string; price: string }) => {
            priceMap[item.symbol] = parseFloat(item.price);
          });
          setPrices(priceMap);
        }
      } catch (e) {
        console.error("Live price fetch failed", e);
      }
    };

    fetchLivePrices();
    const interval = setInterval(fetchLivePrices, 10000);
    return () => clearInterval(interval);
  }, []);

  // ── Update Status Handler ──
  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const { error } = await supabase
        .from("crypto_signals")
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (error) throw error;
      setSignals(prev =>
        prev.map(s => (s.id === id ? { ...s, status: newStatus } : s))
      );
    } catch (err: any) {
      alert("Failed to update status: " + err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  // ── Delete Handler ──
  const handleDeleteSignal = async (id: string) => {
    if (!confirm("Are you sure you want to delete this signal record permanently?")) return;
    setDeletingId(id);
    try {
      const { error } = await supabase.from("crypto_signals").delete().eq("id", id);
      if (error) throw error;
      setSignals(prev => prev.filter(s => s.id !== id));
    } catch (err: any) {
      alert("Failed to delete signal: " + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  // ── Filtered & Sorted Signals ──
  const filteredSignals = useMemo(() => {
    return signals.filter(sig => {
      // Search
      const codeStr = sig.signal_code || "";
      const query = searchQuery.trim().toUpperCase();
      if (query) {
        const matchesQuery =
          codeStr.toUpperCase().includes(query) ||
          sig.symbol.toUpperCase().includes(query) ||
          sig.pair.toUpperCase().includes(query);
        if (!matchesQuery) return false;
      }

      // Direction
      if (directionFilter !== "ALL" && sig.direction !== directionFilter) return false;

      // Status
      if (statusFilter !== "ALL" && sig.status !== statusFilter) return false;

      // Date
      if (dateFilter !== "ALL") {
        const created = new Date(sig.created_at).getTime();
        const now = new Date().getTime();
        const diffHours = (now - created) / (1000 * 3600);
        if (dateFilter === "TODAY" && diffHours > 24) return false;
        if (dateFilter === "7DAYS" && diffHours > 24 * 7) return false;
        if (dateFilter === "30DAYS" && diffHours > 24 * 30) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "NEWEST") return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      if (sortBy === "OLDEST") return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      if (sortBy === "SYMBOL") return a.symbol.localeCompare(b.symbol);
      return 0;
    });
  }, [signals, searchQuery, directionFilter, statusFilter, dateFilter, sortBy]);

  // ── Stats Calculations ──
  const stats = useMemo(() => {
    const total = signals.length;
    const active = signals.filter(s => s.status === "ACTIVE" || !s.status).length;
    const tpHits = signals.filter(s => s.status?.startsWith("HIT_TP") || s.status === "TP_HIT").length;
    const slHits = signals.filter(s => s.status === "HIT_SL" || s.status === "SL_HIT").length;
    const closed = signals.filter(s => s.status === "CLOSED").length;
    const winRate = tpHits + slHits > 0 ? ((tpHits / (tpHits + slHits)) * 100).toFixed(1) : "100.0";

    return { total, active, tpHits, slHits, closed, winRate };
  }, [signals]);

  // ── Helper to format telegram text copy ──
  const copyTelegramText = (sig: CryptoSignal) => {
    const code = sig.signal_code || `#YG-${sig.id.slice(0, 4)}`;
    const liveP = prices[sig.pair] ? prices[sig.pair].toString() : sig.entry_price.toString();
    const txt = `Signal Alert!\n\n🪙 $${sig.symbol} · ${sig.pair} · ${sig.direction} · ${sig.leverage}\n⚡ Live Price ${liveP}\n\n📍 Entry Price (≈): ${sig.entry_price}\n🎯 TP1: ${sig.tp1}\n🎯 TP2: ${sig.tp2}\n🎯 TP3: ${sig.tp3}\n🛑 Stop Loss: ${sig.stop_loss}\n\n🆔 ${code}\n\nNot financial advice. DYOR.`;
    navigator.clipboard.writeText(txt);
    setCopiedId(sig.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen bg-[#07080A] text-slate-200 font-sans p-4 md:p-8">
      {/* ── Top Header Navigation Bar ── */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0D1016] border border-[#1E242C] p-4 px-6 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#CBB079] bg-black shrink-0">
              <Image src="/yaga_calls_logo.png" alt="YagaCalls" fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-wider text-white uppercase">YAGACALLS SIGNAL HUB</h1>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-gradient-to-r from-[#F6E09E] to-[#CBB079] text-black uppercase tracking-widest">PERFORMANCE AUDIT</span>
              </div>
              <p className="text-xs font-bold text-[#CBB079] tracking-wider uppercase">Quantitative Position Tracking & Management Desk</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/signal-studio"
              className="flex items-center gap-2 px-4 py-2 bg-[#171C26] hover:bg-[#202736] text-white font-bold text-xs rounded-xl border border-[#263042] transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#E39E2E]" /> ⚡ Return to Signal Studio
            </Link>
            <button
              onClick={() => fetchSignals(true)}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 bg-[#E39E2E] hover:bg-[#d49025] text-black font-extrabold text-xs rounded-xl shadow-lg transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} /> Refresh
            </button>
          </div>
        </div>
      </div>

      {/* ── Summary Stats Cards ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#0D1016] border border-[#1E242C] p-5 rounded-2xl shadow-xl flex items-center justify-between">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Total Signals Logged</div>
            <div className="text-2xl font-black text-white">{stats.total}</div>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#F6E09E]">
            <BarChart2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#0D1016] border border-[#1E242C] p-5 rounded-2xl shadow-xl flex items-center justify-between">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Active Positions</div>
            <div className="text-2xl font-black text-cyan-400">{stats.active}</div>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div className="bg-[#0D1016] border border-[#1E242C] p-5 rounded-2xl shadow-xl flex items-center justify-between">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Target Hits (TP)</div>
            <div className="text-2xl font-black text-emerald-400">{stats.tpHits}</div>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Target className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#0D1016] border border-[#1E242C] p-5 rounded-2xl shadow-xl flex items-center justify-between">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Win Rate %</div>
            <div className="text-2xl font-black text-[#F6E09E]">{stats.winRate}%</div>
          </div>
          <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-[#F6E09E]">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* ── Filters & Search Controls Suite ── */}
      <div className="max-w-7xl mx-auto mb-6 bg-[#0D1016] border border-[#1E242C] p-4 rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search #YG-ID, Pair, Asset..."
            className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] pl-9 pr-3 py-2 rounded-xl text-xs font-bold text-white focus:outline-none"
          />
        </div>

        {/* Direction Filter */}
        <div>
          <select
            value={directionFilter}
            onChange={e => setDirectionFilter(e.target.value as any)}
            className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-3 py-2 rounded-xl text-xs font-bold text-white focus:outline-none"
          >
            <option value="ALL">Direction: All</option>
            <option value="LONG">🟢 LONG Only</option>
            <option value="SHORT">🔴 SHORT Only</option>
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-3 py-2 rounded-xl text-xs font-bold text-white focus:outline-none"
          >
            <option value="ALL">Status: All</option>
            <option value="ACTIVE">⚡ ACTIVE</option>
            <option value="HIT_TP1">🎯 HIT TP1</option>
            <option value="HIT_TP2">🎯 HIT TP2</option>
            <option value="HIT_TP3">🚀 HIT TP3</option>
            <option value="HIT_SL">🛑 HIT SL</option>
            <option value="CLOSED">🔒 CLOSED</option>
          </select>
        </div>

        {/* Date Filter */}
        <div>
          <select
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value as any)}
            className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-3 py-2 rounded-xl text-xs font-bold text-white focus:outline-none"
          >
            <option value="ALL">Date: All Time</option>
            <option value="TODAY">📅 Last 24 Hours</option>
            <option value="7DAYS">📅 Last 7 Days</option>
            <option value="30DAYS">📅 Last 30 Days</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-3 py-2 rounded-xl text-xs font-bold text-white focus:outline-none"
          >
            <option value="NEWEST">Sort: Newest First</option>
            <option value="OLDEST">Sort: Oldest First</option>
            <option value="SYMBOL">Sort: Symbol (A-Z)</option>
          </select>
        </div>
      </div>

      {/* ── Signal List / Data Table ── */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="bg-[#0D1016] border border-[#1E242C] rounded-2xl p-16 text-center shadow-xl">
            <RefreshCw className="w-8 h-8 text-[#E39E2E] animate-spin mx-auto mb-4" />
            <p className="text-sm font-bold text-slate-400">Loading Signal Database Records...</p>
          </div>
        ) : filteredSignals.length === 0 ? (
          <div className="bg-[#0D1016] border border-[#1E242C] rounded-2xl p-16 text-center shadow-xl">
            <ShieldAlert className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-base font-extrabold text-white mb-1">No Matching Signals Found</h3>
            <p className="text-xs font-medium text-slate-500">Try clearing or adjusting your search filters above.</p>
          </div>
        ) : (
          <div className="bg-[#0D1016] border border-[#1E242C] rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-mono text-xs">
                <thead>
                  <tr className="bg-[#121620] border-b border-[#1E242C] text-slate-400 text-[10px] font-black uppercase tracking-wider">
                    <th className="p-4">Signal ID</th>
                    <th className="p-4">Asset / Pair</th>
                    <th className="p-4">Side & Lev</th>
                    <th className="p-4">Entry</th>
                    <th className="p-4">Targets (TP1 / TP2 / TP3)</th>
                    <th className="p-4">Stop Loss</th>
                    <th className="p-4">Live Price & PnL</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C222E]">
                  {filteredSignals.map(sig => {
                    const isLong = sig.direction === "LONG";
                    const currentPrice = prices[sig.pair] || sig.entry_price;
                    const priceDiff = isLong ? currentPrice - sig.entry_price : sig.entry_price - currentPrice;
                    const rawPnL = sig.entry_price > 0 ? (priceDiff / sig.entry_price) * 100 : 0;
                    
                    const code = sig.signal_code || `#YG-${sig.id.slice(0, 4)}`;

                    let statusBadgeClass = "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
                    let statusLabel = sig.status || "ACTIVE";
                    if (sig.status === "HIT_TP1") { statusBadgeClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"; statusLabel = "HIT TP1 🎯"; }
                    else if (sig.status === "HIT_TP2") { statusBadgeClass = "bg-emerald-500/15 text-emerald-300 border-emerald-500/50 font-black"; statusLabel = "HIT TP2 🎯🎯"; }
                    else if (sig.status === "HIT_TP3") { statusBadgeClass = "bg-gradient-to-r from-amber-500/20 to-emerald-500/20 text-[#F6E09E] border-[#F6E09E]/50 font-black"; statusLabel = "HIT TP3 🚀"; }
                    else if (sig.status === "HIT_SL") { statusBadgeClass = "bg-red-500/10 text-red-400 border-red-500/30"; statusLabel = "HIT SL 🛑"; }
                    else if (sig.status === "CLOSED") { statusBadgeClass = "bg-slate-500/10 text-slate-400 border-slate-500/30"; statusLabel = "CLOSED 🔒"; }

                    return (
                      <tr key={sig.id} className="hover:bg-[#121620]/60 transition-all">
                        {/* Signal ID */}
                        <td className="p-4 font-black text-amber-400 whitespace-nowrap">
                          {code}
                        </td>

                        {/* Symbol & Pair */}
                        <td className="p-4 whitespace-nowrap">
                          <div className="font-extrabold text-white">${sig.symbol}</div>
                          <div className="text-[10px] text-slate-500">{sig.pair} · {sig.timeframe}</div>
                        </td>

                        {/* Direction & Leverage */}
                        <td className="p-4 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded font-black text-[10px] uppercase border ${
                            isLong ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-red-500/10 text-red-400 border-red-500/30"
                          }`}>
                            {sig.direction} · {sig.leverage}
                          </span>
                        </td>

                        {/* Entry */}
                        <td className="p-4 font-bold text-cyan-400 whitespace-nowrap">
                          {sig.entry_price}
                        </td>

                        {/* Targets */}
                        <td className="p-4 whitespace-nowrap">
                          <div className="text-[11px] font-bold text-[#CBB079]">TP1: {sig.tp1}</div>
                          <div className="text-[10px] text-[#CBB079]/80">TP2: {sig.tp2} | TP3: {sig.tp3}</div>
                        </td>

                        {/* Stop Loss */}
                        <td className="p-4 font-bold text-red-400 whitespace-nowrap">
                          {sig.stop_loss}
                        </td>

                        {/* Live Price & PnL */}
                        <td className="p-4 whitespace-nowrap">
                          <div className="font-bold text-white">{currentPrice}</div>
                          <div className={`text-[10px] font-extrabold ${rawPnL >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                            {rawPnL >= 0 ? `+${rawPnL.toFixed(2)}%` : `${rawPnL.toFixed(2)}%`}
                          </div>
                        </td>

                        {/* Status */}
                        <td className="p-4 whitespace-nowrap">
                          <select
                            value={sig.status || "ACTIVE"}
                            disabled={updatingId === sig.id}
                            onChange={e => handleUpdateStatus(sig.id, e.target.value)}
                            className={`px-2 py-1 rounded text-[10px] font-black border cursor-pointer focus:outline-none ${statusBadgeClass}`}
                          >
                            <option value="ACTIVE" className="bg-[#0F1217] text-cyan-400">⚡ ACTIVE</option>
                            <option value="HIT_TP1" className="bg-[#0F1217] text-emerald-400">🎯 HIT TP1</option>
                            <option value="HIT_TP2" className="bg-[#0F1217] text-emerald-300">🎯 HIT TP2</option>
                            <option value="HIT_TP3" className="bg-[#0F1217] text-amber-300">🚀 HIT TP3</option>
                            <option value="HIT_SL" className="bg-[#0F1217] text-red-400">🛑 HIT SL</option>
                            <option value="CLOSED" className="bg-[#0F1217] text-slate-400">🔒 CLOSED</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => copyTelegramText(sig)}
                              title="Copy Telegram Signal Text"
                              className="p-1.5 bg-[#1A202C] hover:bg-[#252D3D] text-slate-300 rounded-lg border border-[#2B3547] transition-all"
                            >
                              {copiedId === sig.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              onClick={() => handleDeleteSignal(sig.id)}
                              disabled={deletingId === sig.id}
                              title="Delete Signal Record"
                              className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 transition-all disabled:opacity-50"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
