"use client";

import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import Image from "next/image";
import {
  createChart,
  ColorType,
  IChartApi,
  CandlestickData,
  Time,
  LineStyle,
  CandlestickSeries,
  HistogramSeries,
  ISeriesApi,
  AutoscaleInfo
} from "lightweight-charts";
import {
  ShieldAlert,
  Sparkles,
  Activity,
  Copy,
  Check,
  RefreshCw,
  Zap,
  Target,
  BarChart2,
  Move,
  Download,
  Upload,
  Send,
  Smartphone,
  Monitor
} from "lucide-react";
import * as htmlToImage from "html-to-image";
import { supabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────
interface OverlayCoords {
  entryY: number | null;
  stopY: number | null;
  tp1Y: number | null;
  tp2Y: number | null;
  tp3Y: number | null;
  futureStartX: number | null;
  chartW: number;
  chartH: number;
}

function pct(part: number, whole: number, lev: number) {
  if (whole <= 0) return "0.00";
  return ((Math.abs(part) / whole) * 100 * lev).toFixed(2);
}

function rr(tpDiff: number, slDiff: number) {
  if (slDiff <= 0) return "0.00";
  return (tpDiff / slDiff).toFixed(2);
}

function SignalStudioContent() {
  const searchParams = useSearchParams();
  const hideButtons = searchParams.get("hideButtons") === "true";

  // ── Signal inputs ──
  const [symbol, setSymbol] = useState(searchParams.get("symbol") || "ETH");
  const [pair, setPair] = useState(searchParams.get("pair") || "ETHUSDT");
  const [direction, setDirection] = useState<"LONG" | "SHORT">((searchParams.get("dir") as "LONG" | "SHORT") || "LONG");
  const [leverage, setLeverage] = useState(searchParams.get("lev") || "10x");
  const [timeframe, setTimeframe] = useState("5m");
  const [entry, setEntry] = useState(searchParams.get("e") || "2393.09");
  const [stopLoss, setStopLoss] = useState(searchParams.get("sl") || "2369.32");
  const [tp1, setTp1] = useState(searchParams.get("tp1") || "2440.92");
  const [tp2, setTp2] = useState(searchParams.get("tp2") || "2460.75");
  const [tp3, setTp3] = useState(searchParams.get("tp3") || "2490.52");
  const [disclaimer, setDisclaimer] = useState(searchParams.get("disclaimer") || searchParams.get("note") || "Not financial advice. DYOR.");
  const [layoutMode, setLayoutMode] = useState<"MOBILE" | "DESKTOP">((searchParams.get("layout") as "MOBILE" | "DESKTOP") || "MOBILE");

  // ── UI state ──
  const [livePrice, setLivePrice] = useState("—");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [overlay, setOverlay] = useState<OverlayCoords>({
    entryY: null, stopY: null, tp1Y: null, tp2Y: null, tp3Y: null,
    futureStartX: null, chartW: 800, chartH: 420,
  });

  // ── Refs ──
  const captureRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const latestTimeRef = useRef<Time | null>(null);
  
  const numsRef = useRef({
    entry: 0, stop: 0, tp1: 0, tp2: 0, tp3: 0, lev: 10,
  });

  const entryNum = parseFloat(entry) || 0;
  const stopNum  = parseFloat(stopLoss) || 0;
  const tp1Num   = parseFloat(tp1) || 0;
  const tp2Num   = parseFloat(tp2) || 0;
  const tp3Num   = parseFloat(tp3) || 0;
  const levNum   = parseFloat(leverage.replace(/[^0-9.]/g, "")) || 1;

  useEffect(() => {
    numsRef.current = { entry: entryNum, stop: stopNum, tp1: tp1Num, tp2: tp2Num, tp3: tp3Num, lev: levNum };
    if (chartRef.current) {
      chartRef.current.priceScale("right").applyOptions({ autoScale: false });
      chartRef.current.priceScale("right").applyOptions({ autoScale: true });
    }
  }, [entryNum, stopNum, tp1Num, tp2Num, tp3Num, levNum]);

  const isLong = direction === "LONG";

  const slDiff   = Math.abs(entryNum - stopNum);
  const tp1Diff  = Math.abs(tp1Num - entryNum);
  const tp2Diff  = Math.abs(tp2Num - entryNum);
  const tp3Diff  = Math.abs(tp3Num - entryNum);

  const stopPct  = pct(slDiff,   entryNum, levNum);
  const tp1Pct   = pct(tp1Diff,  entryNum, levNum);
  const tp2Pct   = pct(tp2Diff,  entryNum, levNum);
  const tp3Pct   = pct(tp3Diff,  entryNum, levNum);
  const rr1      = rr(tp1Diff, slDiff);
  const rr2      = rr(tp2Diff, slDiff);
  const rr3      = rr(tp3Diff, slDiff);

  const stopSign  = isLong ? "-" : "+";
  const tpSign    = isLong ? "+" : "-";

  const recalcOverlay = useCallback(() => {
    const chart  = chartRef.current;
    const series = seriesRef.current;
    const el     = chartContainerRef.current;
    if (!chart || !series || !el) return;

    const n = numsRef.current;
    const chartW = el.clientWidth;
    const chartH = el.clientHeight;

    const entryY = n.entry > 0 ? series.priceToCoordinate(n.entry) : null;
    const stopY  = n.stop  > 0 ? series.priceToCoordinate(n.stop)  : null;
    const tp1Y   = n.tp1   > 0 ? series.priceToCoordinate(n.tp1)   : null;
    const tp2Y   = n.tp2   > 0 ? series.priceToCoordinate(n.tp2)   : null;
    const tp3Y   = n.tp3   > 0 ? series.priceToCoordinate(n.tp3)   : null;

    let futureStartX: number | null = null;
    if (latestTimeRef.current !== null) {
      const barCenterX = chart.timeScale().timeToCoordinate(latestTimeRef.current);
      if (barCenterX !== null) {
        futureStartX = barCenterX + 7.5;
      }
    }

    setOverlay({ entryY, stopY, tp1Y, tp2Y, tp3Y, futureStartX, chartW, chartH });
  }, []);

  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el) return;

    setLoading(true);
    if (chartRef.current) { chartRef.current.remove(); chartRef.current = null; }

    const chart = createChart(el, {
      width:  el.clientWidth,
      height: el.clientHeight,
      layout: {
        background: { type: ColorType.Solid, color: "#0A0B0D" },
        textColor: "#94A3B8",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: "rgba(30,36,44,0.7)" },
        horzLines: { color: "rgba(30,36,44,0.7)" },
      },
      crosshair: {
        vertLine: { color: "#E39E2E", labelBackgroundColor: "#E39E2E", style: LineStyle.Dashed },
        horzLine: { color: "#E39E2E", labelBackgroundColor: "#E39E2E", style: LineStyle.Dashed },
      },
      rightPriceScale: { 
        borderColor: "#1E242C", 
        autoScale: true,
        scaleMargins: { top: 0.1, bottom: 0.25 }
      },
      timeScale: {
        borderColor: "#1E242C",
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

    const volSeries = chart.addSeries(HistogramSeries, {
      color: "#26a69a",
      priceFormat: { type: "volume" },
      priceScaleId: "",
    });
    chart.priceScale("").applyOptions({ scaleMargins: { top: 0.8, bottom: 0 } });

    chart.timeScale().subscribeVisibleLogicalRangeChange(recalcOverlay);

    let isLive = true;
    let ws: WebSocket | null = null;

    fetch(`/api/klines?symbol=${pair}&interval=${timeframe}&limit=60`)
      .then(r => r.json())
      .then((data: any[]) => {
        if (!isLive || !Array.isArray(data)) return;

        const candles: CandlestickData<Time>[] = [];
        const vols: any[] = [];

        data.forEach(d => {
          const time  = (d[0] / 1000) as Time;
          const open  = parseFloat(d[1]);
          const high  = parseFloat(d[2]);
          const low   = parseFloat(d[3]);
          const close = parseFloat(d[4]);
          const vol   = parseFloat(d[5]);
          candles.push({ time, open, high, low, close });
          vols.push({ time, value: vol, color: close >= open ? "rgba(38,166,154,0.35)" : "rgba(239,83,80,0.35)" });
        });

        candleSeries.setData(candles);
        volSeries.setData(vols);

        if (candles.length > 0) {
          const last = candles[candles.length - 1];
          latestTimeRef.current = last.time;
          setLivePrice(last.close.toFixed(2));
        }

        chart.timeScale().fitContent();
        setLoading(false);
        setTimeout(recalcOverlay, 100);

        try {
          ws = new WebSocket(`wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@kline_${timeframe}`);
          ws.onmessage = ev => {
            if (!isLive) return;
            const msg = JSON.parse(ev.data);
            if (msg.e !== "kline") return;
            const k    = msg.k;
            const time = (k.t / 1000) as Time;
            const open  = parseFloat(k.o);
            const high  = parseFloat(k.h);
            const low   = parseFloat(k.l);
            const close = parseFloat(k.c);
            const vol   = parseFloat(k.v);
            latestTimeRef.current = time;
            candleSeries.update({ time, open, high, low, close });
            volSeries.update({ time, value: vol, color: close >= open ? "rgba(38,166,154,0.35)" : "rgba(239,83,80,0.35)" });
            setLivePrice(close.toFixed(2));
            recalcOverlay();
          };
        } catch { /* ignore WS err */ }
      })
      .catch(() => setLoading(false));

    const ro = new ResizeObserver(() => {
      if (chartRef.current && el) {
        chartRef.current.applyOptions({ width: el.clientWidth, height: el.clientHeight });
        recalcOverlay();
      }
    });
    ro.observe(el);

    return () => {
      isLive = false;
      ws?.close();
      ro.disconnect();
      chartRef.current?.remove();
      chartRef.current = null;
    };
  }, [pair, timeframe]);

  useEffect(() => { setTimeout(recalcOverlay, 80); }, [entryNum, stopNum, tp1Num, tp2Num, tp3Num, recalcOverlay]);

  const { entryY, stopY, tp1Y, tp2Y, tp3Y, futureStartX, chartW, chartH } = overlay;
  const priceScaleW = 60; 
  
  const eY  = entryY;
  const sY  = stopY;
  const tps = [tp1Y, tp2Y, tp3Y].filter(y => y !== null) as number[];
  const maxTpY = tps.length > 0 ? (isLong ? Math.min(...tps) : Math.max(...tps)) : eY;

  const boxLeft = futureStartX !== null ? Math.max(10, futureStartX) : chartW * 0.7;
  const boxW = Math.max(120, chartW - boxLeft - priceScaleW);

  let tgtTop = 0, tgtH = 0, slTop = 0, slH = 0;

  if (eY !== null && maxTpY !== null && sY !== null) {
    if (isLong) {
      tgtTop = Math.min(eY, maxTpY);
      tgtH   = Math.abs(eY - maxTpY);
      slTop  = eY;
      slH    = Math.abs(sY - eY);
    } else {
      tgtTop = Math.min(eY, maxTpY);
      tgtH   = Math.abs(eY - maxTpY);
      slTop  = Math.min(eY, sY);
      slH    = Math.abs(sY - eY);
    }
  }

  return (
    <div className="min-h-screen bg-[#07080A] text-slate-100 font-sans pb-20">
      <style dangerouslySetInnerHTML={{ __html: `
        #tv-attr-logo, a[href*="tradingview.com"], .tv-lightweight-charts-watermark, div[class*="watermark"] { display: none !important; opacity: 0 !important; visibility: hidden !important; }
      `}} />

      {!hideButtons && (
        <div className="border-b border-[#1A1F29] bg-[#0B0D11] mb-8">
          <div className="max-w-screen-2xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-tr from-[#E39E2E] to-[#F5C26B] rounded-xl text-black shadow-lg shadow-[#E39E2E]/20">
                  <Sparkles className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h1 className="text-lg font-black tracking-wide text-white uppercase leading-none">
                    YAGA CALLS SIGNAL STUDIO
                  </h1>
                  <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-[#E39E2E]" />
                    Official Signal Generator · signal-studio.yagacalls.com
                  </p>
                </div>
              </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      setIsFinalizing(true);
                      try {
                        if (!captureRef.current) throw new Error("Chart container not found");
                        
                        const { data, error } = await supabase.from('crypto_signals').insert({
                          symbol,
                          pair,
                          direction,
                          leverage,
                          timeframe,
                          entry_price: entryNum,
                          stop_loss: stopNum,
                          tp1: tp1Num,
                          tp2: tp2Num,
                          tp3: tp3Num,
                          status: 'ACTIVE'
                        }).select();
                        
                        if (error) throw error;
                        const signalId = data[0].id;

                        await new Promise(r => setTimeout(r, 100));
                        const blob = await htmlToImage.toBlob(captureRef.current, { pixelRatio: 3, cacheBust: true });
                        if (!blob) throw new Error("Failed to generate image blob");

                        const txt = `<b>YAGACALLS SIGNAL</b>
<b>BEING ROYAL</b>

<b>$${symbol}</b> · <code>${pair}</code> · <b>${direction}</b> · <b>${leverage}</b> · <b>${timeframe}</b>
Live <code>${livePrice}</code>

<pre>
Entry   ${entry}
Stop    ${stopLoss}   (${stopSign}${stopPct}%)
TP1     ${tp1}   (${tpSign}${tp1Pct}%)
TP2     ${tp2}   (${tpSign}${tp2Pct}%)
TP3     ${tp3}   (${tpSign}${tp3Pct}%)

R:R to TP1   1 : ${rr1}
R:R to TP2   1 : ${rr2}
R:R to TP3   1 : ${rr3}
</pre>

<i>${disclaimer}</i>`;

                        const formData = new FormData();
                        formData.append('image', blob, 'signal.png');
                        formData.append('text', txt);
                        formData.append('signalId', signalId);

                        const res = await fetch('/api/notify-admin', {
                          method: 'POST',
                          body: formData
                        });
                        const resData = await res.json();
                        
                        if (!resData.success) {
                          alert("Signal saved to Database, but Telegram dispatch failed: " + (resData.error || "Unknown error"));
                        } else if (resData.warnings) {
                          alert("Signal Saved! Sent to Admin Bot, with warnings: " + resData.warnings.join(", "));
                        } else {
                          alert("Signal Finalized and Saved to Database! Sent to Admin Bot for approval.");
                        }
                      } catch (err: any) {
                        console.error("Failed to finalize", err);
                        alert("Error: " + err.message);
                      } finally {
                        setIsFinalizing(false);
                      }
                    }}
                    disabled={isFinalizing}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#26a69a] hover:bg-[#1f8b80] disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-[#26a69a]/20 transition-all"
                  >
                    <Send className="w-4 h-4" /> {isFinalizing ? "Saving..." : "Finalize Signal"}
                  </button>

                  <button
                    onClick={async () => {
                      if (!captureRef.current) return;
                      try {
                        await new Promise(r => setTimeout(r, 100));
                        const dataUrl = await htmlToImage.toPng(captureRef.current, { pixelRatio: 3, cacheBust: true });
                        const link = document.createElement("a");
                        link.download = `yagacalls-${symbol}-${direction}-${Date.now()}.png`;
                        link.href = dataUrl;
                        link.click();
                      } catch (err) {
                        console.error("Failed to capture image", err);
                        alert("Failed to capture image");
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#252D3D] hover:bg-[#343F54] text-white font-bold text-xs rounded-xl shadow transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Image
                  </button>

                  <button
                    onClick={() => {
                      const txt = `YAGACALLS SIGNAL\nBEING ROYAL\n\n${symbol} · ${pair} · ${direction} · ${leverage} · ${timeframe}\nLive ${livePrice}\n\nEntry   ${entry}\nStop    ${stopLoss}   (${stopSign}${stopPct}%)\nTP1     ${tp1}   (${tpSign}${tp1Pct}%)\nTP2     ${tp2}   (${tpSign}${tp2Pct}%)\nTP3     ${tp3}   (${tpSign}${tp3Pct}%)\n\nR:R to TP1   1 : ${rr1}\nR:R to TP2   1 : ${rr2}\nR:R to TP3   1 : ${rr3}\n\n${disclaimer}`;
                      navigator.clipboard.writeText(txt);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#E39E2E] hover:bg-[#d49025] active:scale-95 text-black font-extrabold text-xs rounded-xl shadow-lg transition-all"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied!" : "Copy Signal Text"}
                  </button>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-2.5 text-xs">
              {[
                { label: "Asset",    val: symbol,   set: (v: string) => setSymbol(v.toUpperCase()),   type: "text" },
                { label: "Pair",     val: pair,     set: (v: string) => setPair(v.toUpperCase()),     type: "text" },
                { label: "Leverage", val: leverage, set: setLeverage,    type: "text" },
                { label: "Entry",    val: entry,    set: setEntry,       type: "number" },
                { label: "Stop Loss",val: stopLoss, set: setStopLoss,    type: "number" },
                { label: "TP 1",     val: tp1,      set: setTp1,         type: "number" },
                { label: "TP 2",     val: tp2,      set: setTp2,         type: "number" },
                { label: "TP 3",     val: tp3,      set: setTp3,         type: "number" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">{f.label}</label>
                  <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs" />
                </div>
              ))}
              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">TF</label>
                <select value={timeframe} onChange={e => setTimeframe(e.target.value)} className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs">
                  <option value="5m">5m</option>
                  <option value="15m">15m</option>
                  <option value="1h">1H</option>
                  <option value="6h">6H</option>
                  <option value="12h">12H</option>
                  <option value="1d">24H</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">Direction</label>
                <select value={direction} onChange={e => setDirection(e.target.value as "LONG" | "SHORT")} className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs">
                  <option value="LONG">🟢 LONG</option>
                  <option value="SHORT">🔴 SHORT</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-4 lg:col-span-10 mt-1 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1C222E]">
                <div className="flex-1 min-w-[280px]">
                  <label className="block text-slate-400 font-semibold mb-1 uppercase tracking-wide text-[10px] flex items-center justify-between">
                    <span>Custom Disclaimer / Caption Note</span>
                    <span className="text-[#E39E2E] font-normal normal-case">Updates chart card badge & Telegram post text</span>
                  </label>
                  <input 
                    type="text" 
                    value={disclaimer} 
                    onChange={e => setDisclaimer(e.target.value)} 
                    placeholder="e.g. Not financial advice. DYOR." 
                    className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-3 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs" 
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1 uppercase tracking-wide text-[10px]">
                    Telegram Layout Format
                  </label>
                  <div className="flex bg-[#12151C] p-1 border border-[#252D3D] rounded-xl gap-1">
                    <button
                      type="button"
                      onClick={() => setLayoutMode("MOBILE")}
                      className={`px-3 py-1 rounded-lg font-extrabold text-xs transition-all flex items-center gap-1.5 ${layoutMode === "MOBILE" ? "bg-gradient-to-r from-[#F6E09E] to-[#CBB079] text-black shadow-md" : "text-slate-400 hover:text-white"}`}
                    >
                      <Smartphone className="w-3.5 h-3.5" /> Mobile Feed (4:5)
                    </button>
                    <button
                      type="button"
                      onClick={() => setLayoutMode("DESKTOP")}
                      className={`px-3 py-1 rounded-lg font-extrabold text-xs transition-all flex items-center gap-1.5 ${layoutMode === "DESKTOP" ? "bg-gradient-to-r from-[#F6E09E] to-[#CBB079] text-black shadow-md" : "text-slate-400 hover:text-white"}`}
                    >
                      <Monitor className="w-3.5 h-3.5" /> Widescreen (16:9)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center w-full overflow-hidden px-4">
        <div 
          id="signal-capture-card" 
          ref={captureRef} 
          className={`w-full relative rounded-3xl overflow-hidden border-[6px] border-[#181C24] shadow-2xl flex flex-col bg-[#0A0B0D] transition-all ${
            layoutMode === "MOBILE" ? "max-w-[560px] min-h-[820px]" : "max-w-6xl h-[650px]"
          }`}
        >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F6E09E] to-transparent z-20" />
            
            <div className={`flex items-center justify-between border-b border-[#1E242C] z-10 shrink-0 ${
              layoutMode === "MOBILE" ? "p-4 px-5" : "p-6 px-8"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`relative rounded-xl overflow-hidden border-2 border-[#CBB079] bg-black shrink-0 ${
                  layoutMode === "MOBILE" ? "w-11 h-11" : "w-14 h-14"
                }`}>
                  <Image src="/yaga_calls_logo.png" alt="YagaCalls" fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`font-black tracking-[3px] text-white uppercase ${
                      layoutMode === "MOBILE" ? "text-base tracking-[2px]" : "text-[22px] tracking-[4px]"
                    }`}>YAGACALLS SIGNAL</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black bg-gradient-to-r from-[#F6E09E] to-[#CBB079] text-black uppercase tracking-wider">BEING ROYAL</span>
                  </div>
                  <div className="text-[10px] font-bold text-[#CBB079] tracking-[0.15em] uppercase flex items-center gap-1.5 mt-0.5">
                    QUANTITATIVE POSITION FORECAST
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className={`bg-[#11141B] border border-[#1E2533] rounded-2xl flex items-center font-mono shadow-xl shrink-0 ${
                layoutMode === "MOBILE" ? "px-3 py-1.5 gap-2 text-xs" : "px-5 py-2.5 gap-4"
              }`}>
                <span className={`font-black text-white ${layoutMode === "MOBILE" ? "text-base" : "text-xl"}`}>${symbol}</span>
                <span className={`px-2 py-0.5 rounded font-black uppercase border ${
                  layoutMode === "MOBILE" ? "text-[10px]" : "text-xs"
                } ${isLong ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40" : "bg-red-500/15 text-red-400 border-red-500/40"}`}>
                  {direction} · {leverage}
                </span>
                <span className={`font-black bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text text-transparent ${
                  layoutMode === "MOBILE" ? "text-xs" : "text-base"
                }`}>Live {livePrice}</span>
              </div>
            </div>

            <div className={`flex flex-1 min-h-0 relative ${
              layoutMode === "MOBILE" ? "flex-col p-4 pt-3 gap-3" : "p-8 pt-6 gap-8"
            }`}>
              <div className={`bg-[#070809] border border-[#1E242C] rounded-2xl overflow-hidden flex flex-col shadow-inner ${
                layoutMode === "MOBILE" ? "w-full h-[390px] min-h-[390px] shrink-0 relative" : "flex-1 min-w-0"
              }`}>
                <div className="bg-[#0F1217] px-4 py-2 border-b border-[#1E242C] flex items-center justify-between text-xs font-mono shrink-0">
                  <div className="flex items-center gap-3">
                    <BarChart2 className="w-4 h-4 text-[#CBB079]" />
                    <span className="font-bold text-white">{pair}</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-slate-400 font-bold">{timeframe}</span>
                  </div>
                  {loading && <RefreshCw className="w-3.5 h-3.5 text-[#CBB079] animate-spin" />}
                </div>

                <div className="relative flex-1">
                  <div ref={chartContainerRef} className="absolute inset-0 cursor-crosshair active:cursor-grabbing" />
                  
                  {eY !== null && futureStartX !== null && (
                    <div 
                      className="absolute top-0 bottom-0 pointer-events-none z-10"
                      style={{ left: `${boxLeft}px`, width: `${boxW}px` }}
                    >
                      <div className="absolute top-0 bottom-0 left-0 border-l border-dashed border-[#CBB079]/40" />

                      {/* Target Area Shading (Gold) */}
                      {tgtH > 0 && (
                        <div
                          className="absolute left-0 right-0"
                          style={{
                            top: `${tgtTop}px`,
                            height: `${tgtH}px`,
                            background: "linear-gradient(to bottom, rgba(246,224,158,0.14), rgba(203,176,121,0.03))",
                            border: "1px solid rgba(203,176,121,0.5)",
                            borderLeft: "2px solid #F6E09E",
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
                            background: "linear-gradient(to top, rgba(239,83,80,0.14), rgba(239,83,80,0.03))",
                            border: "1px solid rgba(239,83,80,0.4)",
                            borderLeft: "2px solid #ef5350",
                          }}
                        />
                      )}

                      {/* Level Reference Lines across Projection Box */}
                      {tp3Y !== null && <div className="absolute left-0 right-0 border-t border-dashed border-[#F6E09E]/70 z-10" style={{ top: `${tp3Y}px` }} />}
                      {tp2Y !== null && <div className="absolute left-0 right-0 border-t border-dashed border-[#CBB079]/70 z-10" style={{ top: `${tp2Y}px` }} />}
                      {tp1Y !== null && <div className="absolute left-0 right-0 border-t border-dashed border-[#CBB079]/70 z-10" style={{ top: `${tp1Y}px` }} />}
                      {eY !== null && <div className="absolute left-0 right-0 border-t-2 border-[#00E5FF] z-10 shadow-[0_0_8px_#00E5FF]/40" style={{ top: `${eY}px` }} />}
                      {sY !== null && <div className="absolute left-0 right-0 border-t border-dashed border-red-500/80 z-10" style={{ top: `${sY}px` }} />}

                      {/* R:R Badge on Top Right of Entry Line */}
                      {eY !== null && (
                        <div className="absolute right-1.5 z-20" style={{ top: `${eY - 11}px` }}>
                          <span className="bg-[#041C24]/90 border border-[#00E5FF]/60 px-1.5 py-0.5 rounded text-[9px] font-mono font-black text-[#00E5FF] shadow-sm">
                            R:R 1 : {rr3}
                          </span>
                        </div>
                      )}

                      {/* Unified 5-Level Smart Badge Collision Resolver (Left-Anchored) */}
                      {(() => {
                        const rawLevels = [
                          { id: "tp3", type: "tp", lbl: "TP3", p: tp3, pct: tp3Pct, y: tp3Y, highlight: true },
                          { id: "tp2", type: "tp", lbl: "TP2", p: tp2, pct: tp2Pct, y: tp2Y, highlight: false },
                          { id: "tp1", type: "tp", lbl: "TP1", p: tp1, pct: tp1Pct, y: tp1Y, highlight: false },
                          { id: "entry", type: "entry", lbl: "ENTRY", p: entry, pct: null, y: eY, highlight: true },
                          { id: "stop", type: "stop", lbl: "STOP", p: stopLoss, pct: stopPct, y: sY, highlight: true },
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
                            if (diff < 24) {
                              const push = (24 - diff) / 2;
                              cur.labelY -= push;
                              nxt.labelY += push;
                            }
                          }
                        }

                        return levels.map(l => {
                          let badgeStyle = "bg-[#0F1217]/95 border border-[#CBB079]/70 text-[#F6E09E]";
                          let labelText = `${l.lbl}: ${l.p} (${tpSign}${l.pct}%)`;

                          if (l.type === "entry") {
                            badgeStyle = "bg-[#041C24]/95 border border-[#00E5FF] text-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.2)]";
                            labelText = `ENTRY: ${l.p}`;
                          } else if (l.type === "stop") {
                            badgeStyle = "bg-[#180A0A]/95 border border-red-500/70 text-red-400";
                            labelText = `STOP: ${l.p} (${stopSign}${l.pct}%)`;
                          } else if (l.highlight) {
                            badgeStyle = "bg-[#141720]/95 border border-[#F6E09E] text-transparent bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text font-black";
                          }

                          return (
                            <div
                              key={l.id}
                              className={`absolute left-1.5 z-20 px-2 py-0.5 rounded text-[10px] font-mono font-black shadow-md flex items-center gap-1 whitespace-nowrap transition-all ${badgeStyle}`}
                              style={{ top: `${l.labelY - 10}px` }}
                            >
                              {labelText}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  )}
                </div>
              </div>

              <div className={`flex shrink-0 ${
                layoutMode === "MOBILE" ? "grid grid-cols-2 gap-3 w-full" : "w-[320px] flex-col gap-6"
              }`}>
                <div className={`bg-[#0D1016] border border-[#1C222E] rounded-2xl shadow-2xl font-mono text-xs flex flex-col justify-between ${
                  layoutMode === "MOBILE" ? "p-3.5" : "p-5 flex-1"
                }`}>
                  <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#1A202C]">
                    <div className="flex items-center gap-1.5 text-[10px] font-black bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text text-transparent uppercase tracking-widest">
                      <Zap className="w-3.5 h-3.5 text-[#F6E09E]" /> Signal Levels
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#CBB079]/10 text-[#F6E09E] border border-[#CBB079]/20">
                      {leverage}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {[
                      { lbl: "Entry", val: entry,    c: "text-[#00E5FF]", b: null },
                      { lbl: "Stop",  val: stopLoss, c: "text-red-400",   b: `${stopSign}${stopPct}%`, bc: "text-red-400 bg-red-500/10" },
                      { lbl: "TP1",   val: tp1,      c: "text-[#CBB079]", b: `${tpSign}${tp1Pct}%`,    bc: "text-[#CBB079] bg-[#CBB079]/10" },
                      { lbl: "TP2",   val: tp2,      c: "text-[#CBB079]", b: `${tpSign}${tp2Pct}%`,    bc: "text-[#CBB079] bg-[#CBB079]/10" },
                      { lbl: "TP3",   val: tp3,      c: "text-[#F6E09E]", b: `${tpSign}${tp3Pct}%`,    bc: "text-[#F6E09E] bg-[#F6E09E]/10" },
                    ].map((r, i) => (
                      <div key={r.lbl} className={`flex justify-between items-center py-1.5 ${i < 4 ? "border-b border-[#1A202C]/60" : ""}`}>
                        <span className="text-slate-400 font-bold text-[11px]">{r.lbl}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`font-black text-[12px] ${r.c}`}>{r.val}</span>
                          {r.b && <span className={`text-[8px] font-bold px-1 py-0.5 rounded ${r.bc}`}>{r.b}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className={`bg-[#0D1016] border border-[#1C222E] rounded-2xl shadow-2xl font-mono text-xs flex-1 ${
                    layoutMode === "MOBILE" ? "p-3.5" : "p-5"
                  }`}>
                    <div className="flex items-center gap-1.5 pb-2.5 mb-2 border-b border-[#1A202C] text-[10px] font-black bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text text-transparent uppercase tracking-widest">
                      <Target className="w-3.5 h-3.5 text-[#F6E09E]" /> Risk-to-Reward
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { lbl: "R:R → TP1", val: rr1 },
                        { lbl: "R:R → TP2", val: rr2 },
                        { lbl: "R:R → TP3", val: rr3, isGold: true },
                      ].map(r => (
                        <div key={r.lbl} className="flex justify-between items-center bg-[#080A0E] px-2.5 py-1.5 rounded-xl border border-[#1A202C]">
                          <span className="text-slate-500 font-bold text-[10px]">{r.lbl}</span>
                          <span className={`font-black text-[12px] ${r.isGold ? 'bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text text-transparent' : 'text-[#CBB079]'}`}>
                            1 : {r.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 uppercase tracking-wider px-1">
                    <div className="flex items-center gap-1 text-slate-400 font-semibold">
                      <ShieldAlert className="w-3 h-3 text-[#ef5350] shrink-0" />
                      <span className="truncate max-w-[160px]" title={disclaimer}>{disclaimer}</span>
                    </div>
                    <span className="bg-gradient-to-r from-[#F6E09E] to-[#CBB079] bg-clip-text text-transparent font-black">
                      BEING ROYAL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default function SignalStudioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07080A] text-white flex items-center justify-center font-mono">
        Loading Signal Studio...
      </div>
    }>
      <SignalStudioContent />
    </Suspense>
  );
}
