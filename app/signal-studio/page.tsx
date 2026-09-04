"use client";

import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  createChart,
  ColorType,
  IChartApi,
  CandlestickData,
  Time,
  LineStyle,
  CandlestickSeries,
  ISeriesApi,
  AutoscaleInfo
} from "lightweight-charts";
import {
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
  Monitor,
  Moon,
  Sun,
  Search,
  X,
  ChevronDown
} from "lucide-react";
import * as htmlToImage from "html-to-image";
import { supabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";
import { captureCardWithChartScreenshot } from "@/lib/captureOptions";

// ─── Types ────────────────────────────────────────────────────────────────────
interface OverlayCoords {
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
}

function pct(part: number, whole: number, lev: number) {
  if (whole <= 0) return "0.00";
  return ((Math.abs(part) / whole) * 100 * lev).toFixed(2);
}

function getPctRange(diff: number, entryPrice: number, leverageStr: string): string {
  if (entryPrice <= 0) return "0.00%";
  const rawPct = (Math.abs(diff) / entryPrice) * 100;
  const nums = (leverageStr.match(/\d+(\.\d+)?/g) || []).map(Number).filter(n => n > 0);

  if (nums.length === 0) {
    return `${rawPct.toFixed(2)}%`;
  }

  if (nums.length === 1) {
    const lev = nums[0];
    return `${(rawPct * lev).toFixed(2)}%`;
  }

  const minLev = Math.min(...nums);
  const maxLev = Math.max(...nums);
  const minPct = (rawPct * minLev).toFixed(2);
  const maxPct = (rawPct * maxLev).toFixed(2);

  if (minPct === maxPct) return `${minPct}%`;
  return `${minPct}% to ${maxPct}%`;
}

function rr(tpDiff: number, slDiff: number) {
  if (slDiff <= 0) return "0.00";
  return (tpDiff / slDiff).toFixed(2);
}

const POPULAR_PAIRS = [
  "BTCUSDT", "ETHUSDT", "SOLUSDT", "BNBUSDT", "XRPUSDT", "ADAUSDT", "DOGEUSDT", "AVAXUSDT", "LINKUSDT", "NEARUSDT", 
  "INJUSDT", "APTUSDT", "SUIUSDT", "PEPEUSDT", "WIFUSDT", "RENDERUSDT", "FETUSDT", "TIAUSDT", "OPUSDT", "ARBUSDT", 
  "STXUSDT", "FILUSDT", "ATOMUSDT", "KASUSDT", "ICPUSDT", "SEIUSDT", "ORDIUSDT", "BONKUSDT", "FLOKIUSDT", "JUPUSDT", 
  "TONUSDT", "BOMEUSDT", "WLDUSDT", "RUNEUSDT", "SHIBUSDT", "LTCUSDT", "UNIUSDT", "ETCUSDT", "XMRUSDT", "BCHUSDT", 
  "DOTUSDT", "TRXUSDT", "GALAUSDT", "SANDUSDT", "MANAUSDT", "ALGOUSDT", "FTMUSDT", "DYDXUSDT", "IMXUSDT", "GRTUSDT", 
  "CHZUSDT", "CRVUSDT", "LDOUSDT", "GMTUSDT", "ENSUSDT", "FLOWUSDT", "QNTUSDT", "THETAUSDT", "AXSUSDT", "EGLDUSDT", 
  "KAVAUSDT", "AAVEUSDT", "EOSUSDT", "SNXUSDT", "MINAUSDT", "GMXUSDT", "CFXUSDT", "COMPUSDT", "NEOUSDT", "1INCHUSDT", 
  "WAVESUSDT", "WOOUSDT", "TWTUSDT", "MASKUSDT", "ROSEUSDT", "ZECUSDT", "DASHUSDT", "ONEUSDT", "IOTAUSDT", "JSTUSDT", 
  "BATUSDT", "ZILUSDT", "HOTUSDT", "ANKRUSDT", "ENJUSDT", "AUDIOUSDT", "RVNUSDT", "SUPERUSDT", "CELOUSDT", "YFIUSDT", 
  "UMAUSDT", "SKLUSDT", "API3USDT", "SPELLUSDT", "PEOPLEUSDT", "HIGHUSDT", "GTCUSDT", "IDUSDT", "EDUUSDT", "CYBERUSDT", 
  "ARKMUSDT", "MAVUSDT", "PENDLEUSDT", "BIGTIMEUSDT", "MEMEUSDT", "PYTHUSDT", "BLURUSDT", "JTOUSDT", "ACEUSDT", "NFPUSDT", 
  "AIUSDT", "XAIUSDT", "MANTAUSDT", "ALTUSDT", "ZETAUSDT", "DYMUSDT", "STRKUSDT", "PORTALUSDT", "AXLUSDT", "AEVOUSDT", 
  "ETHFIUSDT", "ENAUSDT", "WUSDT", "TNSRUSDT", "SAGAUSDT", "OMNIUSDT", "REZUSDT", "BBUSDT", "NOTUSDT", "IOUSDT", 
  "ZKUSDT", "ZROUSDT", "BANANAUSDT", "RAREUSDT", "SYSUSDT", "DOGSUSDT", "MBOXUSDT", "CATIUSDT", "HMSTRUSDT", "EIGENUSDT", 
  "NEIROUSDT", "TURBOUSDT", "PNUTUSDT", "ACTUSDT", "PENGUUSDT", "TRUMPUSDT", "BERAUSDT", "SONICUSDT", "ANIMEUSDT"
];

function SignalStudioContent() {
  const searchParams = useSearchParams();
  const hideButtons = searchParams.get("hideButtons") === "true";

  // ── Signal inputs ──
  const [symbol, setSymbol] = useState(searchParams.get("symbol") || "ETH");
  const [pair, setPair] = useState(searchParams.get("pair") || "ETHUSDT");
  const [direction, setDirection] = useState<"LONG" | "SHORT">((searchParams.get("dir") as "LONG" | "SHORT") || "LONG");
  const [leverage, setLeverage] = useState(searchParams.get("lev") || "1X-3X");
  const [timeframe, setTimeframe] = useState("5m");
  const [entry, setEntry] = useState(searchParams.get("e") || "2393.09");
  const [stopLoss, setStopLoss] = useState(searchParams.get("sl") || "2369.32");
  const [tp1, setTp1] = useState(searchParams.get("tp1") || "2440.92");
  const [tp2, setTp2] = useState(searchParams.get("tp2") || "2460.75");
  const [tp3, setTp3] = useState(searchParams.get("tp3") || "2490.52");
  const [disclaimer, setDisclaimer] = useState(searchParams.get("disclaimer") || searchParams.get("note") || "");
  const [strategyNote, setStrategyNote] = useState(searchParams.get("strategyNote") || "");
  const [signalCode, setSignalCode] = useState(() => {
    const raw = searchParams.get("code");
    if (raw) {
      const cleanNum = raw.replace(/[^0-9]/g, "").padStart(4, "0").slice(-4);
      return `#YG-${cleanNum}`;
    }
    return "#YG-0101";
  });

  useEffect(() => {
    if (searchParams.get("code")) return;

    const fetchNextCode = async () => {
      try {
        const { count } = await supabase
          .from('crypto_signals')
          .select('*', { count: 'exact', head: true });
        
        const nextIndex = (count || 0) + 1;
        const series = Math.floor((nextIndex - 1) / 99) + 1;
        const item = ((nextIndex - 1) % 99) + 1;
        
        const seriesStr = series.toString().padStart(2, '0');
        const itemStr = item.toString().padStart(2, '0');
        
        setSignalCode(`#YG-${seriesStr}${itemStr}`);
      } catch {
        setSignalCode('#YG-0101');
      }
    };

    fetchNextCode();
  }, [searchParams]);

  const [layoutMode, setLayoutMode] = useState<"MOBILE" | "DESKTOP">((searchParams.get("layout") as "MOBILE" | "DESKTOP") || "MOBILE");
  const [cardTheme, setCardTheme] = useState<"DARK" | "LIGHT">((searchParams.get("theme") as "DARK" | "LIGHT") || "DARK");

  // ── Searchable 100+ Pairs Modal state ──
  const [isPairModalOpen, setIsPairModalOpen] = useState(false);
  const [pairSearchQuery, setPairSearchQuery] = useState("");
  const [fetchedPairs, setFetchedPairs] = useState<string[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("https://fapi.binance.com/fapi/v1/ticker/price").then(r => r.json().catch(() => [])),
      fetch("https://api.binance.com/api/v3/ticker/price").then(r => r.json().catch(() => []))
    ])
      .then(([futuresData, spotData]) => {
        const allSymbols = new Set<string>();
        
        if (Array.isArray(futuresData)) {
          futuresData.forEach((d: any) => allSymbols.add(d.symbol));
        }
        if (Array.isArray(spotData)) {
          spotData.forEach((d: any) => allSymbols.add(d.symbol));
        }

        const usdtPairs = Array.from(allSymbols)
          .filter((s: string) => s.endsWith("USDT") && !s.includes("_") && !s.includes("UP") && !s.includes("DOWN") && !s.includes("BEAR") && !s.includes("BULL"))
          .sort();
          
        if (usdtPairs.length > 50) setFetchedPairs(usdtPairs);
      })
      .catch(console.error);
  }, []);

  const allPairsList = fetchedPairs.length > 0 ? fetchedPairs : POPULAR_PAIRS;
  const filteredPairsList = pairSearchQuery
    ? allPairsList.filter(p => p.includes(pairSearchQuery.toUpperCase()))
    : allPairsList;

  // ── UI state ──
  const [livePrice, setLivePrice] = useState("—");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [overlay, setOverlay] = useState<OverlayCoords>({
    entryY: null, stopY: null, tp1Y: null, tp2Y: null, tp3Y: null,
    futureStartX: null, highestY: null, highestVal: null, lowestY: null, lowestVal: null,
    chartW: 800, chartH: 420,
  });

  // ── Refs ──
  const captureRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const latestTimeRef = useRef<Time | null>(null);
  const candlesRef = useRef<CandlestickData<Time>[]>([]);
  
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

  const stopPctStr = getPctRange(slDiff,  entryNum, leverage);
  const tp1PctStr  = getPctRange(tp1Diff, entryNum, leverage);
  const tp2PctStr  = getPctRange(tp2Diff, entryNum, leverage);
  const tp3PctStr  = getPctRange(tp3Diff, entryNum, leverage);
  const rr1        = rr(tp1Diff, slDiff);
  const rr2        = rr(tp2Diff, slDiff);
  const rr3        = rr(tp3Diff, slDiff);

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
  }, []);

  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el) return;

    let reconnectTimer: any = null;
    setLoading(true);
    if (chartRef.current) { chartRef.current.remove(); chartRef.current = null; }

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

    let isLive = true;
    let ws: WebSocket | null = null;

    const initWs = () => {
      if (!isLive) return;
      try {
        ws = new WebSocket(`wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@kline_${timeframe}`);
        ws.onmessage = ev => {
          if (!isLive) return;
          try {
            const msg = JSON.parse(ev.data);
            if (msg.e !== "kline") return;
            const k    = msg.k;
            const time = (k.t / 1000) as Time;
            const open  = parseFloat(k.o);
            const high  = parseFloat(k.h);
            const low   = parseFloat(k.l);
            const close = parseFloat(k.c);
            latestTimeRef.current = time;
            candleSeries.update({ time, open, high, low, close });
            setLivePrice(close.toFixed(close < 1 ? 4 : 2));
            recalcOverlay();
          } catch {}
        };
        ws.onclose = () => {
          if (isLive) reconnectTimer = setTimeout(initWs, 3000);
        };
        ws.onerror = () => {
          try { ws?.close(); } catch {}
        };
      } catch {
        if (isLive) reconnectTimer = setTimeout(initWs, 3000);
      }
    };

    const processKlinesData = (data: any[]) => {
      if (!isLive || !Array.isArray(data) || data.length === 0) return;

      const candles: CandlestickData<Time>[] = [];

      data.forEach(d => {
        const time  = (d[0] / 1000) as Time;
        const open  = parseFloat(d[1]);
        const high  = parseFloat(d[2]);
        const low   = parseFloat(d[3]);
        const close = parseFloat(d[4]);
        candles.push({ time, open, high, low, close });
      });

      candleSeries.setData(candles);
      candlesRef.current = candles;

      const last = candles[candles.length - 1];
      latestTimeRef.current = last.time;
      const p = last.close;
      setLivePrice(p.toFixed(p < 1 ? 4 : 2));

      // Auto-sync Entry and TP/SL levels if entry was set for another coin
      const currentEntry = parseFloat(entry);
      if (isNaN(currentEntry) || currentEntry <= 0 || Math.abs(currentEntry - p) / p > 0.4) {
        setEntry(p.toString());
        const isL = direction === "LONG";
        const mult = isL ? 1 : -1;
        setStopLoss((p * (1 - 0.01 * mult)).toFixed(p < 1 ? 4 : 2));
        setTp1((p * (1 + 0.008 * mult)).toFixed(p < 1 ? 4 : 2));
        setTp2((p * (1 + 0.018 * mult)).toFixed(p < 1 ? 4 : 2));
        setTp3((p * (1 + 0.030 * mult)).toFixed(p < 1 ? 4 : 2));
      }

      const fromParam = searchParams.get("from");
      const toParam = searchParams.get("to");
      if (fromParam && toParam && !isNaN(Number(fromParam)) && !isNaN(Number(toParam))) {
        chart.timeScale().setVisibleLogicalRange({ from: parseFloat(fromParam), to: parseFloat(toParam) });
      } else {
        chart.timeScale().fitContent();
      }
      setLoading(false);
      setTimeout(recalcOverlay, 100);
    };

    fetch(`/api/klines?symbol=${pair}&interval=${timeframe}&limit=150&_t=${Date.now()}`, { cache: "no-store" })
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          processKlinesData(data);
        } else {
          // Direct fallback to Binance API if proxy returned non-array
          return fetch(`https://api.binance.com/api/v3/klines?symbol=${pair}&interval=${timeframe}&limit=150`)
            .then(r => r.json())
            .then(directData => processKlinesData(directData));
        }
      })
      .catch(() => {
        // Direct fallback on network failure
        fetch(`https://api.binance.com/api/v3/klines?symbol=${pair}&interval=${timeframe}&limit=150`)
          .then(r => r.json())
          .then(directData => processKlinesData(directData))
          .catch(() => setLoading(false));
      })
      .finally(() => {
        initWs();
      });

    const ro = new ResizeObserver(() => {
      if (chartRef.current && el) {
        chartRef.current.applyOptions({ width: el.clientWidth, height: el.clientHeight });
        recalcOverlay();
      }
    });
    ro.observe(el);

    return () => {
      isLive = false;
      if (reconnectTimer) clearTimeout(reconnectTimer);
      if (ws) {
        ws.onopen = null;
        ws.onmessage = null;
        ws.onerror = null;
        ws.onclose = null;
        if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
          try { ws.close(); } catch {}
        }
      }
      ro.disconnect();
      chartRef.current?.remove();
      chartRef.current = null;
    };
  }, [pair, timeframe, cardTheme]);

  useEffect(() => { setTimeout(recalcOverlay, 80); }, [entryNum, stopNum, tp1Num, tp2Num, tp3Num, recalcOverlay]);

  const { entryY, stopY, tp1Y, tp2Y, tp3Y, futureStartX, chartW, chartH } = overlay;
  const priceScaleW = 60; 
  
  const eY  = entryY;
  const sY  = stopY;
  const tps = [tp1Y, tp2Y, tp3Y].filter(y => y !== null) as number[];
  const maxTpY = tps.length > 0 ? (isLong ? Math.min(...tps) : Math.max(...tps)) : eY;

  const boxLeftRaw = futureStartX !== null ? Math.max(10, futureStartX) : chartW * 0.7;
  const maxLeft = Math.max(10, chartW - priceScaleW - 20);
  const boxLeft = Math.min(boxLeftRaw, maxLeft);

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
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-tr from-[#E39E2E] to-[#F5C26B] rounded-xl text-black shadow-lg shadow-[#E39E2E]/20 shrink-0">
                  <Sparkles className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-black tracking-wide text-white uppercase leading-none">
                    YAGA CALLS SIGNAL STUDIO
                  </h1>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-[#E39E2E]" />
                    Official Signal Generator · Internal Team Tool
                  </p>
                </div>
              </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href="/hub"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#121620] hover:bg-[#1C2230] text-[#F6E09E] border border-[#CBB079]/40 font-extrabold text-xs rounded-xl shadow-lg transition-all"
                  >
                    <BarChart2 className="w-4 h-4 text-[#E39E2E]" /> 📊 Signal Tracking Hub
                  </Link>

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
                          signal_code: signalCode,
                          status: 'ACTIVE'
                        }).select();
                        
                        if (error) throw error;
                        const signalId = data[0].id;

                        const txt = `<b>$${symbol}</b> · <b>${direction}</b> · <b>${leverage}</b>
⚡ Live Price <b>${livePrice}</b>

📍 <b>Entry Price (≈):</b> ${entry}
🎯 <b>TP1:</b> ${tp1}
🎯 <b>TP2:</b> ${tp2}
🎯 <b>TP3:</b> ${tp3}
🛑 <b>Stop Loss:</b> ${stopLoss}

📌 <b>${signalCode}</b>${strategyNote ? '\n\n' + strategyNote : ''}${disclaimer ? '\n\n' + disclaimer : ''}`;

                        const range = chartRef.current?.timeScale().getVisibleLogicalRange();
                        const chartParams = {
                          symbol, pair, dir: direction, lev: leverage, 
                          e: entry, sl: stopLoss, tp1, tp2, tp3, 
                          code: signalCode, layout: layoutMode, theme: cardTheme,
                          disclaimer, strategyNote,
                          from: range ? range.from.toString() : "",
                          to: range ? range.to.toString() : ""
                        };

                        const payload = {
                          ...chartParams,
                          text: txt,
                          signalId
                        };

                        const res = await fetch('/api/notify-admin', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(payload)
                        });
                        const responseText = await res.text();
                        let resData: any = {};
                        try {
                          resData = JSON.parse(responseText);
                        } catch {
                          resData = { success: false, error: responseText.slice(0, 200) };
                        }
                        
                        if (!res.ok || !resData.success) {
                          alert("Signal saved to Database, but Telegram dispatch failed: " + (resData.error || "Server error"));
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
                      try {
                        const range = chartRef.current?.timeScale().getVisibleLogicalRange();
                        const chartParams = {
                          symbol, pair, dir: direction, lev: leverage, 
                          e: entry, sl: stopLoss, tp1, tp2, tp3, 
                          code: signalCode, layout: layoutMode, theme: cardTheme,
                          disclaimer, strategyNote,
                          from: range ? range.from.toString() : "",
                          to: range ? range.to.toString() : ""
                        };
                        const res = await fetch('/api/screenshot', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(chartParams)
                        });
                        if (!res.ok) {
                          const errText = await res.text();
                          throw new Error(errText || "Failed to generate on server");
                        }
                        const blob = await res.blob();
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement("a");
                        link.download = `yagacalls-${symbol}-${direction}-${Date.now()}.png`;
                        link.href = url;
                        link.click();
                        URL.revokeObjectURL(url);
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
                      const txt = `$${symbol} · ${direction} · ${leverage}\n⚡ Live Price ${livePrice}\n\n📍 Entry Price (≈): ${entry}\n🎯 TP1: ${tp1}\n🎯 TP2: ${tp2}\n🎯 TP3: ${tp3}\n🛑 Stop Loss: ${stopLoss}\n\n📌 ${signalCode}${strategyNote ? '\n\n' + strategyNote : ''}${disclaimer ? '\n\n' + disclaimer : ''}`;
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
              <div className="col-span-2 sm:col-span-4 lg:col-span-10 flex flex-wrap items-center gap-1.5 pb-2.5 mb-1 border-b border-[#1C222E]">
                <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider mr-1 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#E39E2E]" /> Quick Assets:
                </span>
                {["BTC", "ETH", "SOL", "BNB", "XRP", "AVAX", "DOGE", "LINK", "SUI", "PEPE"].map(coin => (
                  <button
                    key={coin}
                    type="button"
                    onClick={() => {
                      setSymbol(coin);
                      setPair(`${coin}USDT`);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-black transition-all ${
                      symbol === coin 
                        ? "bg-[#E39E2E] text-black shadow-md shadow-[#E39E2E]/20" 
                        : "bg-[#12151C] text-slate-300 hover:bg-[#1C222E] hover:text-white border border-[#252D3D]"
                    }`}
                  >
                    ${coin}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const p = parseFloat(livePrice);
                    if (p > 0) {
                      setEntry(p.toString());
                      const isL = direction === "LONG";
                      const mult = isL ? 1 : -1;
                      setStopLoss((p * (1 - 0.008 * mult)).toFixed(p < 1 ? 4 : 2));
                      setTp1((p * (1 + 0.005 * mult)).toFixed(p < 1 ? 4 : 2));
                      setTp2((p * (1 + 0.010 * mult)).toFixed(p < 1 ? 4 : 2));
                      setTp3((p * (1 + 0.018 * mult)).toFixed(p < 1 ? 4 : 2));
                    }
                  }}
                  className="ml-auto px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-[#26a69a]/20 text-[#26a69a] border border-[#26a69a]/40 hover:bg-[#26a69a]/30 transition-all flex items-center gap-1"
                >
                  ⚡ Sync Entry to Live Price ({livePrice})
                </button>
              </div>

              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">Asset</label>
                <input 
                  type="text" 
                  value={symbol} 
                  onChange={e => setSymbol(e.target.value.toUpperCase())} 
                  className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs" 
                />
              </div>

              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">
                  Pair ({allPairsList.length})
                </label>
                <button
                  type="button"
                  onClick={() => setIsPairModalOpen(true)}
                  className="w-full bg-[#12151C] border border-[#252D3D] hover:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white text-xs flex items-center justify-between transition-all group"
                >
                  <span className="flex items-center gap-1.5 text-ellipsis overflow-hidden">
                    <Search className="w-3 h-3 text-[#E39E2E] group-hover:scale-110 transition-transform" />
                    <span>{pair}</span>
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </button>
              </div>

              {[
                { label: "Leverage", val: leverage, set: setLeverage,    type: "text" },
                { label: "Entry",    val: entry,    set: setEntry,       type: "number" },
                { label: "Stop Loss",val: stopLoss, set: setStopLoss,    type: "number" },
                { label: "TP 1",     val: tp1,      set: setTp1,         type: "number" },
                { label: "TP 2",     val: tp2,      set: setTp2,         type: "number" },
                { label: "TP 3",     val: tp3,      set: setTp3,         type: "number" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">{f.label}</label>
                  <input 
                    type={f.type} 
                    value={f.val} 
                    onChange={e => f.set(e.target.value)} 
                    className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs" 
                  />
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
              <div className="col-span-2 sm:col-span-4 lg:col-span-10 mt-1 grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#1C222E]">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1 uppercase tracking-wide text-[10px] flex items-center justify-between">
                    <span>Trade Management Strategy Note</span>
                    <span className="text-[#E39E2E] font-normal normal-case">Appears right above disclaimer</span>
                  </label>
                  <textarea 
                    rows={2} 
                    value={strategyNote} 
                    onChange={e => setStrategyNote(e.target.value)} 
                    placeholder="e.g. Close 40-50% of your trade when we hit TP1..." 
                    className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-3 py-1.5 rounded-lg font-medium text-white focus:outline-none text-xs leading-relaxed resize-y" 
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1 uppercase tracking-wide text-[10px] flex items-center justify-between">
                    <span>Custom Disclaimer / Caption Note</span>
                    <span className="text-[#E39E2E] font-normal normal-case">Updates chart card badge & Telegram post</span>
                  </label>
                  <textarea 
                    rows={2} 
                    value={disclaimer} 
                    onChange={e => setDisclaimer(e.target.value)} 
                    placeholder="e.g. Not financial advice. DYOR." 
                    className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-3 py-1.5 rounded-lg font-medium text-white focus:outline-none text-xs leading-relaxed resize-y" 
                  />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-4 lg:col-span-10 flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-[#1C222E]">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1 uppercase tracking-wide text-[10px]">
                    Card Theme
                  </label>
                  <div className="flex bg-[#12151C] p-1 border border-[#252D3D] rounded-xl gap-1">
                    <button
                      type="button"
                      onClick={() => setCardTheme("DARK")}
                      className={`px-3 py-1 rounded-lg font-extrabold text-xs transition-all flex items-center gap-1.5 ${cardTheme === "DARK" ? "bg-gradient-to-r from-[#F6E09E] to-[#CBB079] text-black shadow-md" : "text-slate-400 hover:text-white"}`}
                    >
                      <Moon className="w-3.5 h-3.5" /> Dark Mode
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardTheme("LIGHT")}
                      className={`px-3 py-1 rounded-lg font-extrabold text-xs transition-all flex items-center gap-1.5 ${cardTheme === "LIGHT" ? "bg-gradient-to-r from-[#F6E09E] to-[#CBB079] text-black shadow-md" : "text-slate-400 hover:text-white"}`}
                    >
                      <Sun className="w-3.5 h-3.5" /> Light Mode
                    </button>
                  </div>
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
          className={`w-full relative rounded-3xl overflow-hidden border-[6px] shadow-2xl flex flex-col transition-all ${
            cardTheme === "LIGHT" ? "bg-white border-[#E2E8F0] text-slate-900" : "bg-[#0A0B0D] border-[#181C24] text-white"
          } ${
            layoutMode === "MOBILE" ? "max-w-[560px] h-[700px]" : "max-w-6xl h-[650px]"
          }`}
        >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F6E09E] to-transparent z-20" />
            
            <div className={`flex items-center justify-between border-b z-10 shrink-0 ${
              cardTheme === "LIGHT" ? "border-[#E2E8F0] bg-[#F8FAFC]" : "border-[#1E242C]"
            } ${
              layoutMode === "MOBILE" ? "p-3 px-4" : "p-4 px-6"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`relative rounded-xl overflow-hidden border-2 border-[#CBB079] bg-black shrink-0 ${
                  layoutMode === "MOBILE" ? "w-10 h-10" : "w-11 h-11"
                }`}>
                  <Image src="/yaga_calls_logo.png" alt="YagaCalls" fill sizes="44px" className="object-cover" />
                </div>
                <span className={`font-black tracking-[3px] uppercase ${
                  cardTheme === "LIGHT" ? "text-slate-900" : "text-white"
                } ${
                  layoutMode === "MOBILE" ? "text-base tracking-[2px]" : "text-xl tracking-[3px]"
                }`}>YAGACALLS</span>
              </div>

              <div className="flex items-center gap-2.5 font-mono shrink-0">
                <span className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold border shadow-sm ${
                  cardTheme === "LIGHT" ? "bg-slate-100 text-slate-900 border-slate-300" : "bg-[#141822] text-[#F6E09E] border-[#F6E09E]/25"
                }`}>{signalCode}</span>
                <span className={`font-bold ${cardTheme === "LIGHT" ? "text-slate-900" : "text-white"} ${layoutMode === "MOBILE" ? "text-sm" : "text-base"}`}>${symbol}</span>
                <span className={`px-2.5 py-1 rounded-xl font-extrabold text-[11px] uppercase border ${
                  isLong ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" : "bg-red-500/10 text-red-600 border-red-500/30"
                }`}>
                  {direction}
                </span>
              </div>
            </div>

            <div className={`flex flex-1 min-h-0 relative ${
              layoutMode === "MOBILE" ? "p-3" : "p-4"
            }`}>
              <div className={`border rounded-2xl overflow-hidden flex flex-col shadow-inner w-full h-full relative ${
                cardTheme === "LIGHT" ? "bg-white border-[#E2E8F0]" : "bg-[#070809] border-[#1E242C]"
              }`}>
                <div className={`px-4 py-2 border-b flex items-center justify-between text-xs font-mono shrink-0 ${
                  cardTheme === "LIGHT" ? "bg-slate-100 border-[#E2E8F0] text-slate-800" : "bg-[#0F1217] border-[#1E242C] text-white"
                }`}>
                  <div className="flex items-center gap-3">
                    <BarChart2 className="w-4 h-4 text-[#CBB079]" />
                    <span className={`font-bold ${cardTheme === "LIGHT" ? "text-slate-900" : "text-white"}`}>{pair}</span>
                    <span className="text-slate-400">|</span>
                    <span className={`font-bold ${cardTheme === "LIGHT" ? "text-slate-600" : "text-slate-400"}`}>{timeframe}</span>
                  </div>
                  {loading && <RefreshCw className="w-3.5 h-3.5 text-[#CBB079] animate-spin" />}
                </div>

                <div className="relative flex-1">
                  <div ref={chartContainerRef} className="absolute inset-0 cursor-crosshair active:cursor-grabbing" />
                  
                  {/* Timeframe Highest & Lowest Price Level Badges with Reference Lines */}
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

                  {eY !== null && futureStartX !== null && (
                    <div 
                      className="absolute top-0 bottom-0 pointer-events-none z-10"
                      style={{ left: `${boxLeft}px`, right: `${priceScaleW}px` }}
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

                      {/* Level Reference Lines across Projection Box */}
                      {tp3Y !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#059669]/70" : "border-[#26a69a]/70"}`} style={{ top: `${tp3Y}px` }} />}
                      {tp2Y !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#059669]/70" : "border-[#26a69a]/70"}`} style={{ top: `${tp2Y}px` }} />}
                      {tp1Y !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#059669]/70" : "border-[#26a69a]/70"}`} style={{ top: `${tp1Y}px` }} />}
                      {eY !== null && <div className={`absolute left-0 right-0 border-t-2 border-dashed z-10 ${cardTheme === "LIGHT" ? "border-[#0284C7] shadow-[0_0_6px_#0284C7]/30" : "border-[#00E5FF] shadow-[0_0_6px_#00E5FF]/30"}`} style={{ top: `${eY}px` }} />}
                      {sY !== null && <div className={`absolute left-0 right-0 border-t border-dashed z-10 ${cardTheme === "LIGHT" ? "border-red-600/70" : "border-red-500/70"}`} style={{ top: `${sY}px` }} />}

                      {/* Unified 5-Level Smart Text Collision Resolver (No BG Box, Clean 11px Text) */}
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

      {/* ── Searchable 100+ Crypto Pairs Selector Modal ── */}
      {isPairModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#12151C] border border-[#252D3D] rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-[#1C222E] flex items-center justify-between bg-[#161B26]">
              <div>
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#E39E2E]" /> Select Crypto Trading Pair
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Select from {allPairsList.length} live Binance pairs with real-time WebSocket chart streaming
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPairModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-[#252D3D] rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-3.5 border-b border-[#1C222E] bg-[#0E1017]">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={pairSearchQuery}
                  onChange={e => setPairSearchQuery(e.target.value.toUpperCase())}
                  placeholder="Search 150+ crypto pairs (e.g. INJ, NEAR, WIF, RENDER, SUI, APT)..."
                  className="w-full bg-[#161B26] border border-[#252D3D] focus:border-[#E39E2E] pl-9 pr-14 py-2 rounded-xl text-xs font-bold text-white placeholder:text-slate-500 focus:outline-none"
                  autoFocus
                />
                {pairSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setPairSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Pairs Grid */}
            <div className="p-4 overflow-y-auto flex-1 max-h-[55vh] custom-scrollbar">
              {filteredPairsList.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs">
                  No matching crypto pairs found for "{pairSearchQuery}"
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {filteredPairsList.map(p => {
                    const coinSym = p.replace("USDT", "");
                    const isSelected = pair === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setPair(p);
                          setSymbol(coinSym);
                          setIsPairModalOpen(false);
                          setPairSearchQuery("");
                        }}
                        className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#E39E2E]/15 border-[#E39E2E] text-white shadow-md shadow-[#E39E2E]/10"
                            : "bg-[#161B26] border-[#252D3D] hover:border-slate-500 text-slate-300 hover:text-white hover:bg-[#1C222E]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-black text-xs text-white">${coinSym}</span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E39E2E]" />}
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 mt-1">{p}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-[#0E1017] border-t border-[#1C222E] flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Showing {filteredPairsList.length} of {allPairsList.length} pairs</span>
              <span className="text-[#E39E2E] font-bold">⚡ Live Binance Price Sync</span>
            </div>

          </div>
        </div>
      )}
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
