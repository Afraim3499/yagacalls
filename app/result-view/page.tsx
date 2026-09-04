"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickSeries,
  ColorType,
  LineStyle,
  CandlestickData,
  Time,
  AutoscaleInfo
} from "lightweight-charts";
import * as htmlToImage from "html-to-image";
import { captureCardWithChartScreenshot } from "@/lib/captureOptions";
import {
  ArrowLeft,
  BarChart2,
  Check,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  Moon,
  RefreshCw,
  Send,
  Share2,
  Sun,
  Target,
  TrendingDown,
  TrendingUp,
  Zap,
  ShieldCheck,
  Clock,
  Sparkles
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

function ResultViewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const codeParam = searchParams.get("code") || searchParams.get("id") || "";

  // ── States ──
  const [signals, setSignals] = useState<CryptoSignal[]>([]);
  const [selectedSignal, setSelectedSignal] = useState<CryptoSignal | null>(null);
  const [loading, setLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(true);
  const [cardTheme, setCardTheme] = useState<"DARK" | "LIGHT">("DARK");
  const [livePrice, setLivePrice] = useState<string | null>(null);
  
  // Action states
  const [sendingAlert, setSendingAlert] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadingImg, setDownloadingImg] = useState(false);

  // Refs
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const candlesRef = useRef<CandlestickData<Time>[]>([]);
  const numsRef = useRef<{ entry: number; stop: number; tp1: number; tp2: number; tp3: number }>({
    entry: 0, stop: 0, tp1: 0, tp2: 0, tp3: 0
  });

  // Overlay state for exact price level positioning & projection box
  const [overlay, setOverlay] = useState<{
    entryY: number | null;
    stopY: number | null;
    tp1Y: number | null;
    tp2Y: number | null;
    tp3Y: number | null;
    futureStartX: number | null;
    highestY: number | null;
    highestVal: number | null;
    lowestY: number | null;
    lowestVal: number | null;
    chartW: number;
    chartH: number;
  }>({
    entryY: null,
    stopY: null,
    tp1Y: null,
    tp2Y: null,
    tp3Y: null,
    futureStartX: null,
    highestY: null,
    highestVal: null,
    lowestY: null,
    lowestVal: null,
    chartW: 560,
    chartH: 520
  });

  // ── Fetch Signals Database ──
  useEffect(() => {
    const fetchSignalsList = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("crypto_signals")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        const list = (data as CryptoSignal[]) || [];
        setSignals(list);

        if (list.length > 0) {
          if (codeParam) {
            const cleanCode = codeParam.trim().toUpperCase().replace('#', '');
            const found = list.find(s =>
              (s.signal_code || '').toUpperCase().replace('#', '') === cleanCode ||
              s.id.toUpperCase() === cleanCode
            );
            setSelectedSignal(found || list[0]);
          } else {
            setSelectedSignal(list[0]);
          }
        }
      } catch (err) {
        console.error("Failed to load signals for result view", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSignalsList();
  }, [codeParam]);

  // ── Update URL when signal selection changes ──
  const handleSelectSignal = (sig: CryptoSignal) => {
    setSelectedSignal(sig);
    const cleanCode = (sig.signal_code || `#YG-${sig.id.slice(0, 4)}`).replace('#', '');
    router.push(`/result-view?code=${cleanCode}`);
  };

  // Sync numsRef whenever selectedSignal changes
  useEffect(() => {
    if (!selectedSignal) return;
    numsRef.current = {
      entry: selectedSignal.entry_price || 0,
      stop: selectedSignal.stop_loss || 0,
      tp1: selectedSignal.tp1 || 0,
      tp2: selectedSignal.tp2 || 0,
      tp3: selectedSignal.tp3 || 0
    };
  }, [selectedSignal]);

  // ── Calculate Hit Level & PnL ──
  const signalMeta = useMemo(() => {
    if (!selectedSignal) return null;
    const isLong = selectedSignal.direction === "LONG";
    const status = selectedSignal.status || "ACTIVE";

    let resultHitPrice = selectedSignal.entry_price;
    let hitBadge = "LIVE POSITION";
    let isHit = false;

    if (status === "HIT_TP1") {
      resultHitPrice = selectedSignal.tp1;
      hitBadge = "TARGET 1 HIT 🎯";
      isHit = true;
    } else if (status === "HIT_TP2") {
      resultHitPrice = selectedSignal.tp2;
      hitBadge = "TARGET 2 HIT 🎯🎯";
      isHit = true;
    } else if (status === "HIT_TP3") {
      resultHitPrice = selectedSignal.tp3;
      hitBadge = "TARGET 3 HIT 🚀";
      isHit = true;
    } else if (status === "HIT_SL") {
      resultHitPrice = selectedSignal.stop_loss;
      hitBadge = "STOP LOSS HIT 🛑";
      isHit = true;
    } else if (livePrice) {
      resultHitPrice = parseFloat(livePrice);
    }

    const priceDiff = isLong ? resultHitPrice - selectedSignal.entry_price : selectedSignal.entry_price - resultHitPrice;
    const pnlPct = selectedSignal.entry_price > 0 ? (priceDiff / selectedSignal.entry_price) * 100 : 0;

    // Calculate Duration
    const start = new Date(selectedSignal.created_at).getTime();
    const end = isHit && selectedSignal.updated_at ? new Date(selectedSignal.updated_at).getTime() : Date.now();
    const diffMs = Math.max(0, end - start);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const durationStr = diffDays >= 1 ? `${diffDays} Day${diffDays > 1 ? 's' : ''}` : `${Math.max(1, diffHours)} Hours`;

    return {
      isLong,
      status,
      resultHitPrice,
      hitBadge,
      isHit,
      pnlPct,
      durationStr
    };
  }, [selectedSignal, livePrice]);

  // ── Overlay Recalculation (Identical to Signal Studio) ──
  const recalcOverlay = useCallback(() => {
    if (!chartRef.current || !seriesRef.current || !selectedSignal) return;
    const chart = chartRef.current;
    const series = seriesRef.current;
    const n = numsRef.current;

    const entryY = n.entry > 0 ? series.priceToCoordinate(n.entry) : null;
    const stopY  = n.stop  > 0 ? series.priceToCoordinate(n.stop)  : null;
    const tp1Y   = n.tp1   > 0 ? series.priceToCoordinate(n.tp1)   : null;
    const tp2Y   = n.tp2   > 0 ? series.priceToCoordinate(n.tp2)   : null;
    const tp3Y   = n.tp3   > 0 ? series.priceToCoordinate(n.tp3)   : null;

    let futureStartX: number | null = null;
    if (candlesRef.current.length > 0) {
      const idx = Math.max(0, Math.floor(candlesRef.current.length * 0.75));
      const t = candlesRef.current[idx].time;
      futureStartX = chart.timeScale().timeToCoordinate(t);
    }

    const chartW = chartContainerRef.current?.clientWidth || 560;
    const chartH = chartContainerRef.current?.clientHeight || 520;

    let highestVal: number | null = null;
    let highestY: number | null = null;
    let lowestVal: number | null = null;
    let lowestY: number | null = null;

    if (candlesRef.current && candlesRef.current.length > 0) {
      let maxH = -Infinity;
      let minL = Infinity;
      candlesRef.current.forEach(c => {
        if (c.high > maxH) maxH = c.high;
        if (c.low < minL) minL = c.low;
      });
      if (maxH !== -Infinity) {
        highestVal = maxH;
        highestY = series.priceToCoordinate(maxH);
      }
      if (minL !== Infinity) {
        lowestVal = minL;
        lowestY = series.priceToCoordinate(minL);
      }
    }

    setOverlay({ entryY, stopY, tp1Y, tp2Y, tp3Y, futureStartX, highestY, highestVal, lowestY, lowestVal, chartW, chartH });
  }, [selectedSignal]);

  // ── TradingView Chart Initialization (Identical to Signal Studio) ──
  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el || !selectedSignal) return;

    setChartLoading(true);
    if (chartRef.current) {
      try {
        chartRef.current.remove();
      } catch (e) {}
      chartRef.current = null;
    }

    const isLight = cardTheme === "LIGHT";
    const chart = createChart(el, {
      width:  el.clientWidth,
      height: el.clientHeight,
      layout: {
        background: { type: ColorType.Solid, color: isLight ? "#FFFFFF" : "#0A0B0D" },
        textColor: isLight ? "#475569" : "#94A3B8",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: isLight ? "#F1F5F9" : "rgba(30,36,44,0.7)" },
        horzLines: { color: isLight ? "#F1F5F9" : "rgba(30,36,44,0.7)" },
      },
      crosshair: {
        vertLine: { color: "#E39E2E", labelBackgroundColor: "#E39E2E", style: LineStyle.Dashed },
        horzLine: { color: "#E39E2E", labelBackgroundColor: "#E39E2E", style: LineStyle.Dashed },
      },
      rightPriceScale: { 
        borderColor: isLight ? "#E2E8F0" : "#1E242C", 
        autoScale: true,
        scaleMargins: { top: 0.1, bottom: 0.15 }
      },
      timeScale: {
        borderColor: isLight ? "#E2E8F0" : "#1E242C",
        timeVisible: true,
        secondsVisible: false,
        rightOffset: 16,
        barSpacing: 15,
      },
      handleScroll: { mouseWheel: true, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: true },
      handleScale: { axisPressedMouseMove: { time: true, price: true }, mouseWheel: true, pinch: true },
    });

    chartRef.current = chart;

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a", downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a", wickDownColor: "#ef5350",
      autoscaleInfoProvider: (original: () => AutoscaleInfo | null) => {
        const res = original();
        if (res !== null && res.priceRange !== null) {
          const n = numsRef.current;
          const levels = [n.entry, n.stop, n.tp1, n.tp2, n.tp3].filter(x => x > 0);
          if (levels.length > 0) {
            const minLevel = Math.min(...levels);
            const maxLevel = Math.max(...levels);
            const rMin = Math.min(res.priceRange.minValue, minLevel);
            const rMax = Math.max(res.priceRange.maxValue, maxLevel);
            const buffer = (rMax - rMin) * 0.05;
            res.priceRange.minValue = rMin - buffer;
            res.priceRange.maxValue = rMax + buffer;
          }
        }
        return res;
      }
    });
    seriesRef.current = candleSeries;

    chart.timeScale().subscribeVisibleLogicalRangeChange(recalcOverlay);

    const pair = selectedSignal.pair || `${selectedSignal.symbol}USDT`;
    const timeframe = selectedSignal.timeframe || "5m";

    const processKlinesData = (data: any[]) => {
      if (!Array.isArray(data) || data.length === 0) return;

      const candles: CandlestickData<Time>[] = [];

      data.forEach(d => {
        const rawTime = Array.isArray(d) ? d[0] : (d.time || d[0]);
        // FIXED: convert timestamp in milliseconds to UTCTimestamp in seconds
        const time = (Math.floor(rawTime / (rawTime > 1e11 ? 1000 : 1))) as Time;
        const open  = parseFloat(Array.isArray(d) ? d[1] : d.open);
        const high  = parseFloat(Array.isArray(d) ? d[2] : d.high);
        const low   = parseFloat(Array.isArray(d) ? d[3] : d.low);
        const close = parseFloat(Array.isArray(d) ? d[4] : d.close);
        candles.push({ time, open, high, low, close });
      });

      candleSeries.setData(candles);
      candlesRef.current = candles;

      const last = candles[candles.length - 1];
      if (last) {
        const p = last.close;
        setLivePrice(p.toFixed(p < 1 ? 4 : 2));
      }

      chart.timeScale().fitContent();
      setChartLoading(false);
      setTimeout(recalcOverlay, 100);
    };

    fetch(`/api/klines?symbol=${pair}&interval=${timeframe}&limit=150&_t=${Date.now()}`, { cache: "no-store" })
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          processKlinesData(data);
        } else {
          return fetch(`https://api.binance.com/api/v3/klines?symbol=${pair}&interval=${timeframe}&limit=150`)
            .then(r => r.json())
            .then(directData => processKlinesData(directData));
        }
      })
      .catch(() => {
        fetch(`https://api.binance.com/api/v3/klines?symbol=${pair}&interval=${timeframe}&limit=150`)
          .then(r => r.json())
          .then(directData => processKlinesData(directData))
          .catch(e => console.error("Klines load error", e));
      });

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight
        });
        recalcOverlay();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartRef.current) {
        try {
          chartRef.current.remove();
        } catch (e) {}
        chartRef.current = null;
      }
    };
  }, [selectedSignal, cardTheme, recalcOverlay]);

  // ── Dispatch "Send Result View" to Telegram ──
  const handleSendResultView = async () => {
    if (!captureRef.current || !selectedSignal || !signalMeta) return;
    setSendingAlert(true);
    setSentSuccess(false);

    try {
      const dataUrl = await captureCardWithChartScreenshot(captureRef.current, chartRef.current, chartContainerRef.current, 'png');

      const blob = await (await fetch(dataUrl)).blob();
      const code = (selectedSignal.signal_code || `#YG-${selectedSignal.id.slice(0, 4)}`).replace('#', '');
      const onlineLink = `https://signal-studio.yagacalls.com/result-view?code=${code}`;

      let caption = `🎯 <b>RESULT VIEW ALERT — ${signalMeta.hitBadge}</b>\n\n`;
      caption += `<b>$${selectedSignal.symbol}</b> · <b>${selectedSignal.direction}</b> · <b>${selectedSignal.leverage}</b>\n`;
      caption += `⚡ Hit Price: <b>${signalMeta.resultHitPrice}</b> (${signalMeta.pnlPct >= 0 ? `+${signalMeta.pnlPct.toFixed(2)}%` : `${signalMeta.pnlPct.toFixed(2)}%`})\n\n`;
      caption += `📍 <b>Entry Price (≈):</b> ${selectedSignal.entry_price}\n`;
      caption += `🎯 <b>TP1:</b> ${selectedSignal.tp1}\n`;
      caption += `🎯 <b>TP2:</b> ${selectedSignal.tp2}\n`;
      caption += `🎯 <b>TP3:</b> ${selectedSignal.tp3}\n`;
      caption += `🛑 <b>Stop Loss:</b> ${selectedSignal.stop_loss}\n\n`;
      caption += `⏳ Total Duration: <b>${signalMeta.durationStr}</b>\n\n`;
      caption += `🔗 <b>View Result Online:</b> ${onlineLink}\n\n`;
      caption += `📌 <b>#YG-${code}</b>`;

      const formData = new FormData();
      formData.append("image", blob, "result_view.png");
      formData.append("text", caption);
      formData.append("signalId", selectedSignal.id);

      const res = await fetch("/api/notify-admin", {
        method: "POST",
        body: formData
      });

      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Failed to dispatch result view card");

      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 4000);
    } catch (err: any) {
      alert("Error sending Result View: " + err.message);
    } finally {
      setSendingAlert(false);
    }
  };

  // ── Copy Online Link ──
  const handleCopyLink = () => {
    if (!selectedSignal) return;
    const code = (selectedSignal.signal_code || `#YG-${selectedSignal.id.slice(0, 4)}`).replace('#', '');
    const url = `https://signal-studio.yagacalls.com/result-view?code=${code}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // ── Download PNG ──
  const handleDownloadPNG = async () => {
    if (!captureRef.current || !selectedSignal) return;
    setDownloadingImg(true);
    try {
      const dataUrl = await captureCardWithChartScreenshot(captureRef.current, chartRef.current, chartContainerRef.current, 'png');
      const a = document.createElement("a");
      const code = (selectedSignal.signal_code || `YG-${selectedSignal.id.slice(0, 4)}`).replace('#', '');
      a.href = dataUrl;
      a.download = `YagaCalls_Result_${selectedSignal.symbol}_YG-${code}.png`;
      a.click();
    } catch (e) {
      console.error("Failed to download image", e);
    } finally {
      setDownloadingImg(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07080A] text-slate-200 flex flex-col items-center justify-center p-6 font-mono">
        <RefreshCw className="w-10 h-10 text-[#CBB079] animate-spin mb-4" />
        <p className="text-sm font-bold text-slate-400">Loading Result View Visual desk...</p>
      </div>
    );
  }

  const isLong = selectedSignal?.direction === "LONG";
  const entry = selectedSignal?.entry_price || 0;
  const stopLoss = selectedSignal?.stop_loss || 0;
  const tp1 = selectedSignal?.tp1 || 0;
  const tp2 = selectedSignal?.tp2 || 0;
  const tp3 = selectedSignal?.tp3 || 0;
  const pair = selectedSignal?.pair || `${selectedSignal?.symbol}USDT`;
  const timeframe = selectedSignal?.timeframe || "5m";
  const symbol = selectedSignal?.symbol || "CRYPTO";
  const signalCode = selectedSignal?.signal_code || `#YG-${selectedSignal?.id.slice(0, 4)}`;

  // Projection box calculation
  const eY   = overlay.entryY;
  const sY   = overlay.stopY;
  const tp1Y = overlay.tp1Y;
  const tp2Y = overlay.tp2Y;
  const tp3Y = overlay.tp3Y;
  const futureStartX = overlay.futureStartX;
  const chartW = overlay.chartW;
  const chartH = overlay.chartH;

  let boxLeft = 0;
  let boxW = 0;
  if (futureStartX !== null) {
    boxLeft = futureStartX;
    boxW = (chartW - 75) - futureStartX;
    if (boxW < 60) boxW = 120;
  }

  const topTargetY = isLong ? tp3Y : tp1Y;
  const bottomTargetY = isLong ? tp1Y : tp3Y;

  let tgtTop = 0;
  let tgtH = 0;
  if (eY !== null && topTargetY !== null && bottomTargetY !== null) {
    tgtTop = Math.min(eY, topTargetY, bottomTargetY);
    tgtH   = Math.abs(Math.max(eY, topTargetY, bottomTargetY) - tgtTop);
  }

  let slTop = 0;
  let slH = 0;
  if (eY !== null && sY !== null) {
    slTop = Math.min(eY, sY);
    slH   = Math.abs(sY - eY);
  }

  return (
    <main className="min-h-screen bg-[#07080A] text-slate-200 font-sans p-4 md:p-8">
      <style jsx global>{`
        #tv-attr-logo, a[href*="tradingview.com"], .tv-lightweight-charts-watermark, div[class*="watermark"], td[id*="tv-attr"] { display: none !important; opacity: 0 !important; visibility: hidden !important; }
      `}</style>

      {/* ── Top Header Navigation Bar ── */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0D1016] border border-[#1E242C] p-4 px-6 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#CBB079] bg-black shrink-0">
              <Image src="/yaga_calls_logo.png" alt="YagaCalls" fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-wider text-white uppercase">SIGNAL RESULT VIEW</h1>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-gradient-to-r from-emerald-400 to-[#CBB079] text-black uppercase tracking-widest">
                  VERIFIED AUDIT
                </span>
              </div>
              <p className="text-xs font-bold text-[#CBB079] tracking-wider uppercase">Visual Position Performance Tracker</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/signal-studio/hub"
              className="flex items-center gap-2 px-4 py-2 bg-[#171C26] hover:bg-[#202736] text-white font-bold text-xs rounded-xl border border-[#263042] transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#E39E2E]" /> Return to Signal Hub
            </Link>

            {/* Theme Switcher Toggle */}
            <div className="flex items-center bg-[#12151C] border border-[#252D3D] p-1 rounded-xl">
              <button
                onClick={() => setCardTheme("DARK")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  cardTheme === "DARK" ? "bg-[#E39E2E] text-black shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                <Moon className="w-3.5 h-3.5" /> Dark
              </button>
              <button
                onClick={() => setCardTheme("LIGHT")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  cardTheme === "LIGHT" ? "bg-white text-slate-900 shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                <Sun className="w-3.5 h-3.5" /> Light
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Controls & Signal Selector Bar ── */}
      <div className="max-w-6xl mx-auto mb-6 bg-[#0D1016] border border-[#1E242C] p-4 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-4">
        {/* Signal Selector Dropdown */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="text-xs font-black text-slate-400 uppercase tracking-wider shrink-0">SELECT SIGNAL:</span>
          <select
            value={selectedSignal?.id || ""}
            onChange={e => {
              const s = signals.find(x => x.id === e.target.value);
              if (s) handleSelectSignal(s);
            }}
            className="bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-4 py-2 rounded-xl text-xs font-mono font-bold text-white focus:outline-none cursor-pointer min-w-[260px]"
          >
            {signals.map(s => {
              const code = s.signal_code || `#YG-${s.id.slice(0, 4)}`;
              return (
                <option key={s.id} value={s.id} className="bg-[#0F1217] text-white">
                  {code} · ${s.symbol} ({s.direction}) · {s.status || "ACTIVE"}
                </option>
              );
            })}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#171C26] hover:bg-[#202736] text-slate-200 font-bold text-xs rounded-xl border border-[#263042] transition-all"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedLink ? "Link Copied!" : "Copy Result Link"}
          </button>

          <button
            onClick={handleDownloadPNG}
            disabled={downloadingImg}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#171C26] hover:bg-[#202736] text-slate-200 font-bold text-xs rounded-xl border border-[#263042] transition-all disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" /> Download PNG
          </button>

          <button
            onClick={handleSendResultView}
            disabled={sendingAlert}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all disabled:opacity-50"
          >
            {sendingAlert ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {sentSuccess ? "✅ Sent to Telegram!" : "Send Result View"}
          </button>
        </div>
      </div>

      {/* ── Result View Capture Card Container (EXACT MATCH TO SIGNAL STUDIO CARD) ── */}
      <div className="flex justify-center w-full overflow-hidden px-4">
        <div 
          id="signal-capture-card" 
          ref={captureRef} 
          className={`w-full relative rounded-3xl overflow-hidden border-[6px] shadow-2xl flex flex-col transition-all max-w-[560px] h-[700px] ${
            cardTheme === "LIGHT" ? "bg-white border-[#E2E8F0] text-slate-900" : "bg-[#0A0B0D] border-[#181C24] text-white"
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F6E09E] to-transparent z-20" />
          
          {/* Outer Header Bar */}
          <div className={`flex items-center justify-between border-b z-10 shrink-0 p-3 px-4 ${
            cardTheme === "LIGHT" ? "border-[#E2E8F0] bg-[#F8FAFC]" : "border-[#1E242C]"
          }`}>
            <div className="flex items-center gap-3">
              <div className="relative rounded-xl overflow-hidden border-2 border-[#CBB079] bg-black shrink-0 w-10 h-10">
                <Image src="/yaga_calls_logo.png" alt="YagaCalls" fill sizes="40px" className="object-cover" />
              </div>
              <span className={`font-black tracking-[2px] uppercase text-base ${
                cardTheme === "LIGHT" ? "text-slate-900" : "text-white"
              }`}>YAGACALLS</span>
            </div>

            <div className="flex items-center gap-2.5 font-mono shrink-0">
              <span className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold border shadow-sm ${
                cardTheme === "LIGHT" ? "bg-slate-100 text-slate-900 border-slate-300" : "bg-[#141822] text-[#F6E09E] border-[#F6E09E]/25"
              }`}>{signalCode}</span>
              <span className={`font-bold text-sm ${cardTheme === "LIGHT" ? "text-slate-900" : "text-white"}`}>${symbol}</span>
              <span className={`px-2.5 py-1 rounded-xl font-extrabold text-[11px] uppercase border ${
                isLong ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" : "bg-red-500/10 text-red-600 border-red-500/30"
              }`}>
                {selectedSignal?.direction}
              </span>
            </div>
          </div>

          {/* Inner Chart Wrapper */}
          <div className="flex flex-1 min-h-0 relative p-3">
            <div className={`border rounded-2xl overflow-hidden flex flex-col shadow-inner w-full h-full relative ${
              cardTheme === "LIGHT" ? "bg-white border-[#E2E8F0]" : "bg-[#070809] border-[#1E242C]"
            }`}>
              {/* Inner Subheader Bar */}
              <div className={`px-4 py-2 border-b flex items-center justify-between text-xs font-mono shrink-0 ${
                cardTheme === "LIGHT" ? "bg-slate-100 border-[#E2E8F0] text-slate-800" : "bg-[#0F1217] border-[#1E242C] text-white"
              }`}>
                <div className="flex items-center gap-3">
                  <BarChart2 className="w-4 h-4 text-[#CBB079]" />
                  <span className={`font-bold ${cardTheme === "LIGHT" ? "text-slate-900" : "text-white"}`}>{pair}</span>
                  <span className="text-slate-400">|</span>
                  <span className={`font-bold ${cardTheme === "LIGHT" ? "text-slate-600" : "text-slate-400"}`}>{timeframe}</span>
                </div>

                {signalMeta && (
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded font-black text-[10px] border ${
                      signalMeta.pnlPct >= 0
                        ? cardTheme === "LIGHT" ? "bg-emerald-100 border-emerald-300 text-emerald-900" : "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                        : cardTheme === "LIGHT" ? "bg-red-100 border-red-300 text-red-900" : "bg-red-500/20 border-red-500/40 text-red-400"
                    }`}>
                      {signalMeta.pnlPct >= 0 ? `+${signalMeta.pnlPct.toFixed(2)}%` : `${signalMeta.pnlPct.toFixed(2)}%`}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">⏱️ {signalMeta.durationStr}</span>
                  </div>
                )}
              </div>

              {/* Chart Area */}
              <div className="relative flex-1">
                <div ref={chartContainerRef} className="absolute inset-0 cursor-crosshair active:cursor-grabbing" />
                
                {/* Timeframe Highest & Lowest Price Level Badges */}
                {overlay.highestY !== null && overlay.highestVal !== null && (
                  <>
                    <div 
                      className={`absolute left-0 right-0 border-t border-dashed z-10 pointer-events-none ${
                        cardTheme === "LIGHT" ? "border-amber-600/70" : "border-[#F6E09E]/35"
                      }`}
                      style={{ top: `${overlay.highestY}px` }}
                    />
                    <div 
                      className="absolute left-2.5 z-20 pointer-events-none"
                      style={{ top: `${Math.max(2, Math.min(chartH - 18, overlay.highestY - 9))}px` }}
                    >
                      <span className={`px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold shadow-sm flex items-center gap-1 border ${
                        cardTheme === "LIGHT"
                          ? "bg-amber-100/95 border-amber-300 text-amber-900"
                          : "bg-[#121008]/90 border-[#F6E09E]/50 text-[#F6E09E]"
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${cardTheme === "LIGHT" ? "bg-amber-600" : "bg-[#F6E09E]"}`} />
                        H: {overlay.highestVal.toFixed(overlay.highestVal < 1 ? 4 : 2)}
                      </span>
                    </div>
                  </>
                )}

                {overlay.lowestY !== null && overlay.lowestVal !== null && (
                  <>
                    <div 
                      className={`absolute left-0 right-0 border-t border-dashed z-10 pointer-events-none ${
                        cardTheme === "LIGHT" ? "border-rose-600/70" : "border-[#ef5350]/35"
                      }`}
                      style={{ top: `${overlay.lowestY}px` }}
                    />
                    <div 
                      className="absolute left-2.5 z-20 pointer-events-none"
                      style={{ top: `${Math.max(2, Math.min(chartH - 18, overlay.lowestY - 9))}px` }}
                    >
                      <span className={`px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold shadow-sm flex items-center gap-1 border ${
                        cardTheme === "LIGHT"
                          ? "bg-rose-100/95 border-rose-300 text-rose-900"
                          : "bg-[#140A0C]/90 border-[#ef5350]/50 text-[#ef5350]"
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${cardTheme === "LIGHT" ? "bg-rose-600" : "bg-[#ef5350]"}`} />
                        L: {overlay.lowestVal.toFixed(overlay.lowestVal < 1 ? 4 : 2)}
                      </span>
                    </div>
                  </>
                )}

                {/* Projection Box & Reference Lines */}
                {eY !== null && futureStartX !== null && (
                  <div 
                    className="absolute top-0 bottom-0 pointer-events-none z-10"
                    style={{ left: `${boxLeft}px`, width: `${boxW}px` }}
                  >
                    <div className="absolute top-0 bottom-0 left-0 border-l border-dashed border-[#26a69a]/30" />

                    {/* Target Area Shading (Green Gains) */}
                    {tgtH > 0 && (
                      <div
                        className="absolute left-0 right-0"
                        style={{
                          top: `${tgtTop}px`,
                          height: `${tgtH}px`,
                          background: cardTheme === "LIGHT" 
                            ? "linear-gradient(to bottom, rgba(5,150,105,0.18), rgba(5,150,105,0.03))" 
                            : "linear-gradient(to bottom, rgba(38,166,154,0.28), rgba(38,166,154,0.06))",
                          border: cardTheme === "LIGHT" ? "1px solid rgba(5,150,105,0.35)" : "1px solid rgba(38,166,154,0.45)",
                          borderLeft: cardTheme === "LIGHT" ? "1px dashed rgba(5,150,105,0.5)" : "1px dashed rgba(38,166,154,0.6)",
                        }}
                      />
                    )}

                    {/* Stop Loss Area Shading (Red) */}
                    {slH > 0 && (
                      <div
                        className="absolute left-0 right-0"
                        style={{
                          top: `${slTop}px`,
                          height: `${slH}px`,
                          background: cardTheme === "LIGHT"
                            ? "linear-gradient(to top, rgba(220,38,38,0.16), rgba(220,38,38,0.02))"
                            : "linear-gradient(to top, rgba(239,83,80,0.22), rgba(239,83,80,0.04))",
                          border: cardTheme === "LIGHT" ? "1px solid rgba(220,38,38,0.35)" : "1px solid rgba(239,83,80,0.45)",
                          borderLeft: cardTheme === "LIGHT" ? "1px dashed rgba(220,38,38,0.4)" : "1px dashed rgba(239,83,80,0.5)",
                        }}
                      />
                    )}

                    {/* Level Reference Lines */}
                    {tp3Y !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#059669]/70" : "border-[#26a69a]/70"}`} style={{ top: `${tp3Y}px` }} />}
                    {tp2Y !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#059669]/70" : "border-[#26a69a]/70"}`} style={{ top: `${tp2Y}px` }} />}
                    {tp1Y !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#059669]/70" : "border-[#26a69a]/70"}`} style={{ top: `${tp1Y}px` }} />}
                    {eY !== null && <div className={`absolute left-0 right-0 border-t-2 border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#0284C7] shadow-[0_0_6px_#0284C7]/30" : "border-[#00E5FF] shadow-[0_0_6px_#00E5FF]/30"}`} style={{ top: `${eY}px` }} />}
                    {sY !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-red-600/70" : "border-red-500/70"}`} style={{ top: `${sY}px` }} />}

                    {/* Unified 5-Level Smart Text Collision Resolver */}
                    {(() => {
                      const rawLevels = [
                        { id: "tp3", type: "tp", lbl: "TP3", p: tp3, y: tp3Y },
                        { id: "tp2", type: "tp", lbl: "TP2", p: tp2, y: tp2Y },
                        { id: "tp1", type: "tp", lbl: "TP1", p: tp1, y: tp1Y },
                        { id: "entry", type: "entry", lbl: "ENTRY", p: entry, y: eY },
                        { id: "stop", type: "stop", lbl: "STOP", p: stopLoss, y: sY },
                      ];

                      const levels = rawLevels
                        .filter(l => l.y !== null && !isNaN(Number(l.y)))
                        .map(l => ({ ...l, y: Number(l.y), labelY: Number(l.y) }))
                        .sort((a, b) => a.y - b.y);

                      for (let iter = 0; iter < 6; iter++) {
                        for (let i = 0; i < levels.length - 1; i++) {
                          const cur = levels[i];
                          const nxt = levels[i + 1];
                          const diff = nxt.labelY - cur.labelY;
                          if (diff < 16) {
                            const push = (16 - diff) / 2;
                            cur.labelY -= push;
                            nxt.labelY += push;
                          }
                        }
                      }

                      return levels.map(l => {
                        let textStyle = cardTheme === "LIGHT" ? "text-[#047857]" : "text-white";
                        if (l.type === "entry") textStyle = cardTheme === "LIGHT" ? "text-[#0284C7]" : "text-[#00E5FF]";
                        else if (l.type === "stop") textStyle = cardTheme === "LIGHT" ? "text-[#DC2626]" : "text-[#ef5350]";

                        const shadow = cardTheme === "LIGHT" 
                          ? "drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]" 
                          : "drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]";

                        return (
                          <div
                            key={l.id}
                            className={`absolute left-1 z-20 text-[11px] font-mono font-bold tracking-tight whitespace-nowrap transition-all ${textStyle} ${shadow}`}
                            style={{ top: `${l.labelY - 14}px` }}
                          >
                            {l.lbl}: {l.p}
                          </div>
                        );
                      });
                    })()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ResultViewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07080A] text-slate-200 flex items-center justify-center p-6 font-mono">
        <RefreshCw className="w-8 h-8 text-[#CBB079] animate-spin" />
      </div>
    }>
      <ResultViewContent />
    </Suspense>
  );
}
