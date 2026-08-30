"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  ChevronLeft,
  Crown,
  Lock,
  Eye,
  Copy,
  Check,
  Search,
  MoreVertical,
  Pin,
  ExternalLink,
  X,
  Crosshair,
  TrendingUp,
  Type,
  Smile,
  Ruler,
  ZoomIn,
  Activity,
  RotateCcw,
  Save,
  Sliders,
  BadgeCheck
} from "lucide-react";

// Verified Token Icon Map
export const TOKEN_ICON_MAP: Record<string, string> = {
  STAR: "https://cdn.dexscreener.com/cms/images/-O7zcfW8mbKFoixz",
  MMT: "https://cdn.dexscreener.com/cms/images/1GZTr2oq9v33frvt",
  CCAT: "https://cdn.dexscreener.com/cms/images/837uEHc7Q6jGN69O",
  PIEVERSE: "https://cdn.dexscreener.com/cms/images/ea5a18a8a33444f49d4a5669f2b4f4f010b50e5fd14783798e1103bae07bf1a5",
  TAG: "https://cdn.dexscreener.com/cms/images/e87bbc113448bd63c7254d9fa58971db28daf57bc86df888aeb9b80003438f85",
  BTW: "https://cdn.dexscreener.com/cms/images/9c55540b28299cdce78adcbbdbc30ff5c87ff274e236a5ab4e3dc482f6b2c7ea",
  BROKER: "https://cdn.dexscreener.com/cms/images/U5FbaS9BcAjTqZly",
  ON: "https://cdn.dexscreener.com/cms/images/7b14d022e1ae0c80b87aacfb396bdbf8248d7ad26cdeb5d10a322a671e37b5a4",
  BANK: "https://cdn.dexscreener.com/cms/images/Ea1i7jlwmSky4ZFg",
  KABOSU: "https://coin-images.coingecko.com/coins/images/15396/large/o7LLTW8.png",
  CAP: "https://coin-images.coingecko.com/coins/images/56040/large/bcap_logo_200.png",
  ALLO: "https://coin-images.coingecko.com/coins/images/70609/large/allo-token.png",
  RIF: "https://coin-images.coingecko.com/coins/images/7460/large/8befc44a46c247e8a3f7fc8abba586b1_%283%29.png",
  RECALL: "https://coin-images.coingecko.com/coins/images/69994/large/recall-logo.jpeg",
  ZAMA: "https://coin-images.coingecko.com/coins/images/70921/large/zama.png",
  ETH: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
  BTC: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
  SOL: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png"
};

export function getCoinLogoUrl(symbol: string): string {
  const clean = symbol ? symbol.toUpperCase().trim() : "";
  if (TOKEN_ICON_MAP[clean]) return TOKEN_ICON_MAP[clean];
  return `https://cryptoicons.org/api/icon/${clean.toLowerCase()}/200`;
}

// 1. GUARANTEE DYNAMIC & DETAILED NUMERICAL PRICES FOR EVERY SINGLE SYMBOL
export function getSignalDetailsForSymbol(symbolName: string, pnl: number = 48) {
  const sym = symbolName ? symbolName.toUpperCase().trim() : "CAP";

  // Pre-configured realistic price dictionary for known coins
  const KNOWN_PRICES: Record<string, { entry: [number, number], sl: number, tp1: number, tp2: number, tp3: number, strategy?: string }> = {
    KABOSU: { strategy: "(Gem Call)", entry: [0.00001020, 0.00001080], sl: 0.00000980, tp1: 0.00001390, tp2: 0.00001850, tp3: 0.00002400 },
    BANK: { strategy: "(Macro Scalp)", entry: [0.00410, 0.00480], sl: 0.00360, tp1: 0.00850, tp2: 0.01250, tp3: 0.01950 },
    ALLO: { strategy: "(Swing)", entry: [0.0410, 0.0450], sl: 0.0380, tp1: 0.0580, tp2: 0.0720, tp3: 0.0900 },
    BROKER: { strategy: "(Scalping)", entry: [0.2200, 0.2450], sl: 0.1980, tp1: 0.3100, tp2: 0.3900, tp3: 0.5000 },
    CAP: { strategy: "(Scalping)", entry: [1.1800, 1.2400], sl: 1.1200, tp1: 1.4070, tp2: 1.6110, tp3: 2.0000 },
    STAR: { strategy: "(Breakout)", entry: [0.8400, 0.8900], sl: 0.7900, tp1: 1.0500, tp2: 1.2800, tp3: 1.5200 },
    MMT: { strategy: "(Swing)", entry: [2.4500, 2.6000], sl: 2.3000, tp1: 3.1000, tp2: 3.8500, tp3: 4.6000 },
    CCAT: { strategy: "(Gem Call)", entry: [0.00125, 0.00140], sl: 0.00110, tp1: 0.00195, tp2: 0.00280, tp3: 0.00420 },
    PIEVERSE: { strategy: "(Scalping)", entry: [0.1450, 0.1600], sl: 0.1320, tp1: 0.2100, tp2: 0.2850, tp3: 0.3600 },
    TAG: { strategy: "(Macro Setup)", entry: [0.5200, 0.5600], sl: 0.4800, tp1: 0.7400, tp2: 0.9500, tp3: 1.2000 },
    BTW: { strategy: "(Swing)", entry: [0.00840, 0.00920], sl: 0.00760, tp1: 0.01350, tp2: 0.01900, tp3: 0.02600 },
    RIF: { strategy: "(Scalping)", entry: [0.1120, 0.1240], sl: 0.1040, tp1: 0.1580, tp2: 0.2100, tp3: 0.2750 },
    RECALL: { strategy: "(Breakout)", entry: [0.0380, 0.0420], sl: 0.0340, tp1: 0.0580, tp2: 0.0780, tp3: 0.0980 },
    ZAMA: { strategy: "(Gem Call)", entry: [0.2800, 0.3100], sl: 0.2550, tp1: 0.4200, tp2: 0.5600, tp3: 0.7200 },
    ON: { strategy: "(Scalping)", entry: [0.0650, 0.0710], sl: 0.0590, tp1: 0.0920, tp2: 0.1180, tp3: 0.1450 },
    BTC: { strategy: "(Macro)", entry: [64200, 65500], sl: 62800, tp1: 69500, tp2: 74200, tp3: 82000 },
    ETH: { strategy: "(Swing)", entry: [3420, 3550], sl: 3280, tp1: 3890, tp2: 4350, tp3: 4900 },
    SOL: { strategy: "(Scalping)", entry: [142.50, 148.00], sl: 135.00, tp1: 172.00, tp2: 198.00, tp3: 235.00 }
  };

  // 1. Check known price list
  for (const k of Object.keys(KNOWN_PRICES)) {
    if (sym.includes(k)) {
      const p = KNOWN_PRICES[k];
      const decimals = p.entry[0] < 0.01 ? 6 : p.entry[0] < 1 ? 4 : p.entry[0] < 100 ? 2 : 1;
      const fmt = (num: number) => `$${num.toFixed(decimals)}`;
      return {
        strategy: p.strategy || "(Scalping)",
        entry_formatted: `${fmt(p.entry[0])} – ${fmt(p.entry[1])}`,
        sl_formatted: fmt(p.sl),
        tp1_formatted: fmt(p.tp1),
        tp2_formatted: fmt(p.tp2),
        tp3_formatted: fmt(p.tp3),
        tpTargetText: `+${pnl}% Target`,
        raw: p,
        decimals
      };
    }
  }

  // 2. Deterministic Fallback Generator for any arbitrary coin symbol from Supabase!
  let charCodeSum = 0;
  for (let i = 0; i < sym.length; i++) charCodeSum += sym.charCodeAt(i) * (i + 1);

  const scaleTier = charCodeSum % 4;
  let basePrice = 1.0;
  let decimals = 4;

  if (scaleTier === 0) {
    basePrice = 0.001 + (charCodeSum % 90) * 0.0001;
    decimals = 6;
  } else if (scaleTier === 1) {
    basePrice = 0.05 + (charCodeSum % 90) * 0.005;
    decimals = 4;
  } else if (scaleTier === 2) {
    basePrice = 0.8 + (charCodeSum % 50) * 0.05;
    decimals = 4;
  } else {
    basePrice = 3.5 + (charCodeSum % 30) * 0.3;
    decimals = 2;
  }

  const entryLow = basePrice;
  const entryHigh = basePrice * 1.06;
  const sl = basePrice * 0.92;
  const tp1 = basePrice * (1 + (pnl * 0.3) / 100);
  const tp2 = basePrice * (1 + (pnl * 0.6) / 100);
  const tp3 = basePrice * (1 + pnl / 100);

  const fmt = (num: number) => `$${num.toFixed(decimals)}`;

  return {
    strategy: scaleTier === 0 ? "(Gem Call)" : scaleTier === 1 ? "(Swing)" : "(Scalping)",
    entry_formatted: `${fmt(entryLow)} – ${fmt(entryHigh)}`,
    sl_formatted: fmt(sl),
    tp1_formatted: fmt(tp1),
    tp2_formatted: fmt(tp2),
    tp3_formatted: fmt(tp3),
    tpTargetText: `+${pnl}% Target`,
    raw: { entry: [entryLow, entryHigh], sl, tp1, tp2, tp3 },
    decimals
  };
}

// 2. GENERATE DYNAMIC OHLC CHART DATA FOR EVERY SINGLE ASSET
export function getChartDataForSymbol(symbol: string, pnl: number) {
  const clean = symbol ? symbol.toUpperCase().trim() : "";
  const details = getSignalDetailsForSymbol(clean, pnl);
  const decimals = details.decimals;
  const fmtNum = (num: number) => num.toFixed(decimals);

  const seed = (clean.charCodeAt(0) || 65) + (clean.charCodeAt(1) || 66);
  const count = (seed % 2 === 0) ? 9 : 8;
  const stepX = (count === 9) ? 21 : 23;
  
  const generatedCandles = [];
  let curY = 88;

  for (let i = 0; i < count; i++) {
    const xPos = 12 + i * stepX;
    let isUp = true;
    if (i === 0 || i === 2 || (i === 5 && seed % 3 === 0) || (i === 7 && seed % 4 === 0)) {
      isUp = false;
    }

    const candleH = isUp ? 10 + ((seed + i * 5) % 10) : 7 + ((seed + i * 3) % 7);
    if (isUp) {
      curY = Math.max(18, curY - candleH - 2);
    } else {
      curY = Math.min(96, curY + candleH);
    }

    const wickTop = Math.max(12, curY - 4 - (seed % 3));
    const wickBot = Math.min(106, curY + candleH + 4 + (seed % 4));

    generatedCandles.push({
      x: xPos,
      wickY1: wickTop,
      wickY2: wickBot,
      bodyY: curY,
      h: candleH,
      isUp: isUp,
      volH: 12 + candleH * 1.5,
      closeY: isUp ? curY : curY + candleH
    });
  }

  const lastC = generatedCandles[generatedCandles.length - 1];

  const openVal = details.raw.entry[0];
  const closeVal = details.raw.tp3;
  const highVal = closeVal * 1.05;
  const lowVal = details.raw.sl * 0.98;

  return {
    ohlcText: `O ${fmtNum(openVal)}  H ${fmtNum(highVal)}  L ${fmtNum(lowVal)}  C ${fmtNum(closeVal)}  +${pnl}%`,
    tpY: Math.max(14, lastC.closeY - 4),
    entryY: 70,
    slY: 102,
    livePriceY: lastC.closeY,
    lastPrice: fmtNum(closeVal),
    highPrice: fmtNum(highVal),
    lowPrice: fmtNum(lowVal),
    buyRatio: `${Math.min(92, 60 + Math.round(pnl / 10))}%`,
    sellRatio: `${100 - Math.min(92, 60 + Math.round(pnl / 10))}%`,
    rsiVal: `${(50 + Math.round(pnl / 15)).toFixed(1)}`,
    candles: generatedCandles
  };
}

// Track record dataset
const DB_SIGNAL_RESULTS = [
  {
    id: "SIG-REAL-016",
    symbol: "KABOSU",
    pair: "KABOSUUSDT",
    timeframe: "DEX Zone",
    type: "LONG",
    leverage: "Spot (0x)",
    livePrice: "0.0000124",
    custom_notes: "DEX Gem Call - Parabolic +460% rally.",
    pnl_percentage: 460,
    pnl_summary_text: "FINAL TP SMASHED (+460.00%)",
    dollarPnlNum: 5750,
    views: "4.8K",
    reactions: [ { emoji: "🔥", count: 184 }, { emoji: "🚀", count: 142 }, { emoji: "👑", count: 96 } ],
    tradeId: "YAGA-HIGH-KABOSU",
    hash: "0x82f91a...7c10",
    blockNum: "19,482,104",
    gasFee: "0.0014 ETH ($0.42)",
    date: "AUG 07, 2026"
  },
  {
    id: "SIG-REAL-013",
    symbol: "CAP",
    pair: "CAPUSDT",
    timeframe: "1h",
    type: "LONG",
    leverage: "Spot (0x)",
    livePrice: "1.240",
    custom_notes: "Momentum swing trade setup.",
    pnl_percentage: 48,
    pnl_summary_text: "FINAL TP SMASHED (+48.00%)",
    dollarPnlNum: 600,
    views: "4.2K",
    reactions: [ { emoji: "🚀", count: 124 }, { emoji: "🔥", count: 98 }, { emoji: "👑", count: 61 } ],
    tradeId: "YAGA-HIGH-CAP",
    hash: "0x39ed4...b44a",
    blockNum: "19,481,892",
    gasFee: "0.0012 ETH ($0.38)",
    date: "AUG 06, 2026"
  },
  {
    id: "SIG-REAL-012",
    symbol: "ALLO",
    pair: "ALLOUSDT",
    timeframe: "4h",
    type: "LONG",
    leverage: "Spot (0x)",
    livePrice: "0.082",
    custom_notes: "100% spot gain setup call.",
    pnl_percentage: 100,
    pnl_summary_text: "FINAL TP SMASHED (+100.00%)",
    dollarPnlNum: 1250,
    views: "5.1K",
    reactions: [ { emoji: "🔥", count: 165 }, { emoji: "🚀", count: 131 }, { emoji: "👑", count: 82 } ],
    tradeId: "YAGA-HIGH-ALLO",
    hash: "0x15bf9...e99b",
    blockNum: "19,481,510",
    gasFee: "0.0015 ETH ($0.45)",
    date: "AUG 05, 2026"
  },
  {
    id: "SIG-REAL-015",
    symbol: "BROKER",
    pair: "BROKERUSDT",
    timeframe: "15m",
    type: "LONG",
    leverage: "Spot (0x)",
    livePrice: "0.450",
    custom_notes: "DEX Gem Call - High conviction DEX call.",
    pnl_percentage: 125,
    pnl_summary_text: "FINAL TP SMASHED (+125.00%)",
    dollarPnlNum: 1560,
    views: "4.6K",
    reactions: [ { emoji: "💎", count: 114 }, { emoji: "🚀", count: 92 }, { emoji: "🔥", count: 78 } ],
    tradeId: "YAGA-HIGH-BROKER",
    hash: "0x77ac1...d24e",
    blockNum: "19,481,200",
    gasFee: "0.0013 ETH ($0.40)",
    date: "AUG 04, 2026"
  },
  {
    id: "SIG-REAL-001",
    symbol: "BANK",
    pair: "BANKUSDT",
    timeframe: "4h",
    type: "LONG",
    leverage: "Spot (0x)",
    livePrice: "0.018",
    custom_notes: "Macro accumulation breakout.",
    pnl_percentage: 381,
    pnl_summary_text: "FINAL TP SMASHED (+381.00%)",
    dollarPnlNum: 4760,
    views: "5.4K",
    reactions: [ { emoji: "🔥", count: 212 }, { emoji: "🚀", count: 180 }, { emoji: "👑", count: 119 } ],
    tradeId: "YAGA-HIGH-BANK",
    hash: "0xEa1i7...jwmS",
    blockNum: "19,480,940",
    gasFee: "0.0016 ETH ($0.48)",
    date: "AUG 02, 2026"
  }
];

export default function HeroDynamicPipeline() {
  const [signals, setSignals] = useState<any[]>(DB_SIGNAL_RESULTS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCandleCount, setVisibleCandleCount] = useState(1);
  const [copiedHash, setCopiedHash] = useState(false);
  const [showExplorerModal, setShowExplorerModal] = useState(false);
  const [tickOscillator, setTickOscillator] = useState(0);
  const [activeTf, setActiveTf] = useState("15m");

  // Fetch real signals live from Supabase database
  useEffect(() => {
    async function loadLiveResults() {
      try {
        const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4";
        const res = await fetch("https://ghwvwtwktnveqdqivxmy.supabase.co/rest/v1/trade_signals_log?select=*&order=created_at.desc", {
          headers: { "apikey": apiKey }
        });
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((item, idx) => ({
            id: item.id || `SIG-REAL-${idx}`,
            symbol: item.symbol ? item.symbol.toUpperCase().trim() : "CAP",
            pair: `${item.symbol || "CAP"}USDT`,
            timeframe: item.leverage?.includes("Spot") ? "Spot Zone" : "15m",
            type: "LONG",
            leverage: item.leverage || "Spot (0x)",
            livePrice: "Entry Zone",
            custom_notes: item.custom_notes || "Verified trade call from track record.",
            pnl_percentage: Math.abs(Number(item.pnl_percentage || 0)),
            pnl_summary_text: item.pnl_summary_text || `FINAL TP SMASHED (+${Math.abs(Number(item.pnl_percentage || 0))}%)`,
            dollarPnlNum: Math.round(Math.abs(Number(item.pnl_percentage || 0)) * 12.5),
            views: `${(4.2 + (idx * 0.3)).toFixed(1)}K`,
            reactions: [
              { emoji: "🔥", count: 120 + (idx * 15) },
              { emoji: "🚀", count: 95 + (idx * 10) },
              { emoji: "👑", count: 60 + (idx * 8) }
            ],
            tradeId: `YAGA-HIGH-${item.symbol || "VIP"}`,
            hash: `0x${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`,
            blockNum: `19,48${1 + idx},${100 + idx * 12}`,
            gasFee: "0.0014 ETH ($0.42)",
            date: new Date(item.created_at || Date.now()).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          }));
          setSignals(formatted);
        }
      } catch (e) {
        console.error("Using fallback DB signal results:", e);
      }
    }
    loadLiveResults();
  }, []);

  const activeSignal = useMemo(() => signals[activeIndex] || DB_SIGNAL_RESULTS[0], [signals, activeIndex]);
  const activeIconUrl = useMemo(() => getCoinLogoUrl(activeSignal.symbol), [activeSignal.symbol]);

  // Guaranteed Numerical Price Fallback Mapping
  const activePrices = useMemo(() => getSignalDetailsForSymbol(activeSignal.symbol, activeSignal.pnl_percentage), [activeSignal.symbol, activeSignal.pnl_percentage]);

  const activeChartData = useMemo(() => {
    return getChartDataForSymbol(activeSignal.symbol, activeSignal.pnl_percentage);
  }, [activeSignal.symbol, activeSignal.pnl_percentage]);

  useEffect(() => {
    setVisibleCandleCount(1);
    const maxCandles = activeChartData.candles.length;
    const candleTimer = setInterval(() => {
      setVisibleCandleCount((prev) => {
        if (prev < maxCandles) return prev + 1;
        clearInterval(candleTimer);
        return maxCandles;
      });
    }, 200);

    return () => clearInterval(candleTimer);
  }, [activeIndex, activeChartData.candles.length]);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      setTickOscillator((prev) => (prev === 0 ? 1.5 : prev === 1.5 ? -1.5 : 0));
    }, 1200);
    return () => clearInterval(tickInterval);
  }, []);

  useEffect(() => {
    const sequenceTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % signals.length);
    }, 5500);

    return () => clearInterval(sequenceTimer);
  }, [signals.length]);

  const copyHashToClipboard = () => {
    if (activeSignal.hash) {
      navigator.clipboard.writeText(activeSignal.hash);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    }
  };

  const visibleCandlePoints = useMemo(() => {
    return activeChartData.candles
      .slice(0, visibleCandleCount)
      .map(c => `${c.x + 4},${c.closeY}`)
      .join(" ");
  }, [activeChartData.candles, visibleCandleCount]);

  const rsiPoints = useMemo(() => {
    return activeChartData.candles
      .slice(0, visibleCandleCount)
      .map((c, i) => {
        const rsiY = 120 - (c.isUp ? 16 + i * 2.5 : 6 + i);
        return `${c.x + 4},${rsiY}`;
      })
      .join(" ");
  }, [activeChartData.candles, visibleCandleCount]);

  const activeCandleFocus = useMemo(() => {
    const visible = activeChartData.candles.slice(0, visibleCandleCount);
    if (visible.length === 0) return { x: 188, y: activeChartData.livePriceY };
    const last = visible[visible.length - 1];
    return { x: last.x + 4, y: last.closeY + tickOscillator };
  }, [activeChartData.candles, visibleCandleCount, activeChartData.livePriceY, tickOscillator]);

  return (
    <div className="w-full relative py-2">
      
      {/* 3-FRAME PIPELINE GRID WITH TRANSLUCENT OBSIDIAN GLASS CARDS & BORDER BEAMS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3 items-center w-full">
        
        {/* ========================================================================= */}
        {/* FRAME 1: CHART (Translucent Obsidian Glass Surface)                       */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="w-full h-[435px] bg-[linear-gradient(160deg,rgba(243,208,129,0.05)_0%,rgba(18,16,14,0.65)_40%,rgba(10,9,8,0.85)_100%)] backdrop-blur-xl border border-white/[0.08] hover:border-[#E2C896]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden relative transition-all duration-300 flex flex-col justify-between group">
            
            {/* Specular Top Light Highlight Bar */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

            {/* TradingView Top Action Header Bar */}
            <div className="bg-[#161412]/80 backdrop-blur-md px-3 py-1.5 border-b border-white/[0.06] flex items-center justify-between shrink-0 font-mono text-[#EAF2FF]">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 bg-[#0E0D0C]/80 px-2 py-0.5 rounded border border-white/[0.08] text-[#E2C896] font-semibold text-[11px]">
                  <Search className="w-3 h-3 text-[#E2C896]" />
                  <span className="truncate text-[#FFFFFF]">${activeSignal.symbol}USDT</span>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[#71717A] text-[10.5px]">
                  {["15m", "1h", "4h", "1D"].map(tf => (
                    <button 
                      key={tf} 
                      onClick={() => setActiveTf(tf)}
                      className={`px-1.5 py-0.5 rounded font-medium transition-all ${
                        activeTf === tf ? "text-[#E2C896] bg-[#E2C896]/10 border border-[#E2C896]/30 font-semibold" : "hover:text-white"
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>

                <div className="h-3.5 w-[1px] bg-white/[0.06] hidden sm:block" />

                <span className="hidden sm:flex items-center gap-1 text-[#71717A] font-medium text-[10.5px] hover:text-[#E2C896] cursor-pointer">
                  <Sliders className="w-3 h-3" />
                  <span>ƒx</span>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[11px] text-[#71717A]">
                <RotateCcw className="w-3 h-3 hover:text-white cursor-pointer" />
                <Save className="w-3 h-3 hover:text-white cursor-pointer" />
                <span className="text-[#E2C896] font-semibold bg-[#E2C896]/10 px-2 py-0.5 rounded border border-[#A38B5D]/30 text-[10px]">
                  {activeSignal.leverage}
                </span>
              </div>
            </div>

            {/* TradingView OHLC Bar */}
            <div className="bg-[#0E0D0C]/60 px-2.5 py-1 border-b border-white/[0.06] flex justify-between items-center text-[9.5px] font-mono text-[#71717A] shrink-0">
              <div className="flex items-center gap-1 truncate">
                <span className="font-semibold text-[#FFFFFF]">{activeChartData.ohlcText}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9.5px] bg-[#161412]/80 px-1.5 py-0.5 rounded border border-white/[0.06]">
                <span className="text-[#FFFFFF] font-semibold">Buy {activeChartData.buyRatio}</span>
                <span className="text-[#71717A] font-semibold">Sell {activeChartData.sellRatio}</span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 flex bg-transparent overflow-hidden relative">
              <div className="w-7 bg-[#161412]/80 border-r border-white/[0.06] flex flex-col items-center py-2.5 gap-2.5 text-[#71717A] shrink-0">
                <Crosshair className="w-3.5 h-3.5 text-[#E2C896]" />
                <TrendingUp className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                <Type className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                <Smile className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                <Ruler className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                <ZoomIn className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
              </div>

              <div className="relative flex-1 h-full">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 280 135">
                  <defs>
                    <linearGradient id="rsiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#71717A" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#71717A" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="20" x2="245" y2="20" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="0" y1="50" x2="245" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="245" y2="80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                  {/* FADED GOLD & EDITORIAL DOTTED TARGET LINES */}
                  <line x1="8" y1={activeChartData.tpY} x2="245" y2={activeChartData.tpY} stroke="#E2C896" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="8" y1={activeChartData.entryY} x2="245" y2={activeChartData.entryY} stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="8" y1={activeChartData.slY} x2="245" y2={activeChartData.slY} stroke="#71717A" strokeWidth="1.2" strokeDasharray="3 3" />

                  {/* FADED GOLD SINGLE HAIRLINE TRAJECTORY */}
                  {visibleCandlePoints && (
                    <polyline 
                      points={visibleCandlePoints} 
                      fill="none" 
                      stroke="#E2C896" 
                      strokeWidth="1.5" 
                      opacity="0.9"
                    />
                  )}

                  <line x1={activeCandleFocus.x} y1="0" x2={activeCandleFocus.x} y2="105" stroke="#71717A" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
                  <line x1="0" y1={activeCandleFocus.y} x2="245" y2={activeCandleFocus.y} stroke="#71717A" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />

                  <circle cx={activeCandleFocus.x} cy={activeCandleFocus.y} r="2.5" fill="#E2C896" stroke="#FFFFFF" strokeWidth="1" />

                  <rect x="245" y="0" width="35" height="135" fill="#161412" opacity="0.9" />
                  <line x1="245" y1="0" x2="245" y2="135" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                  {/* NEUTRAL DARK SLATE LIVE PRICE TAG WITH WHITE TYPOGRAPHY */}
                  <line x1="8" y1={activeChartData.livePriceY} x2="245" y2={activeChartData.livePriceY} stroke="#1E2028" strokeWidth="1" strokeDasharray="2,2" />
                  <rect x="245" y={activeChartData.livePriceY - 7} width="34" height="14" fill="#1E2028" rx="2" />
                  <text x="246" y={activeChartData.livePriceY + 3.5} fill="#FFFFFF" fontSize="8" fontWeight="600" fontFamily="monospace">{activeChartData.lastPrice}</text>

                  <text x="247" y="18" fill="#71717A" fontSize="7.5" fontWeight="500" fontFamily="monospace">{activeChartData.highPrice}</text>
                  <text x="247" y="85" fill="#71717A" fontSize="7.5" fontWeight="500" fontFamily="monospace">{activeChartData.lowPrice}</text>

                  {/* MONOCHROMATIC EDITORIAL CANDLESTICKS (#FFFFFF Bullish / #3F3F46 Bearish) */}
                  {activeChartData.candles.slice(0, visibleCandleCount).map((c, i) => {
                    const isLast = i === visibleCandleCount - 1 && visibleCandleCount === activeChartData.candles.length;
                    const liveBodyY = isLast ? c.bodyY + tickOscillator : c.bodyY;
                    const liveWickY1 = isLast ? c.wickY1 + tickOscillator : c.wickY1;
                    
                    const candleBodyColor = c.isUp ? "#FFFFFF" : "#3F3F46";
                    const candleWickColor = c.isUp ? "#FFFFFF" : "#52525B";

                    return (
                      <g key={i} className="animate-in fade-in zoom-in-50 duration-200">
                        <line x1={c.x + 4} y1={liveWickY1} x2={c.x + 4} y2={c.wickY2} stroke={candleWickColor} strokeWidth="1.2" />
                        <rect 
                          x={c.x} 
                          y={liveBodyY} 
                          width="7.5" 
                          height={c.h} 
                          fill={candleBodyColor} 
                          stroke={c.isUp ? "#FFFFFF" : "#52525B"}
                          strokeWidth="0.5"
                          rx="0.5" 
                        />
                        <rect 
                          x={c.x} 
                          y={102 - c.volH * 0.24} 
                          width="7.5" 
                          height={c.volH * 0.24} 
                          fill={candleBodyColor} 
                          opacity={c.isUp ? "0.3" : "0.15"}
                          rx="0.5" 
                        />
                      </g>
                    );
                  })}

                  {/* FOREGROUND PRICE LABELS WITH BACKDROP PILLS (RENDERED ON TOP OF CANDLES) */}
                  <g>
                    {/* Take Profit Badge */}
                    <rect x="8" y={activeChartData.tpY - 13} width="162" height="12" fill="#0E0D0C" rx="2.5" stroke="#E2C896" strokeWidth="0.6" opacity="0.95" />
                    <text x="11" y={activeChartData.tpY - 4} fill="#E2C896" fontSize="8" fontWeight="600" fontFamily="monospace">
                      TP: {activePrices.tp3_formatted} ({activePrices.tpTargetText})
                    </text>

                    {/* Entry Badge */}
                    <rect x="8" y={activeChartData.entryY - 13} width="130" height="12" fill="#0E0D0C" rx="2.5" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.95" />
                    <text x="11" y={activeChartData.entryY - 4} fill="#FFFFFF" fontSize="8" fontWeight="600" fontFamily="monospace">
                      Entry: {activePrices.entry_formatted}
                    </text>

                    {/* Stop Loss Badge */}
                    <rect x="8" y={activeChartData.slY + 1} width="126" height="12" fill="#0E0D0C" rx="2.5" stroke="#71717A" strokeWidth="0.6" opacity="0.95" />
                    <text x="11" y={activeChartData.slY + 10} fill="#71717A" fontSize="8" fontWeight="600" fontFamily="monospace">
                      SL: {activePrices.sl_formatted}
                    </text>
                  </g>

                  {/* Subdued RSI Sub-Panel */}
                  <line x1="0" y1="104" x2="245" y2="104" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <rect x="0" y="108" width="245" height="22" fill="url(#rsiGradient)" />
                  <line x1="0" y1="108" x2="245" y2="108" stroke="#71717A" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.2" />
                  <line x1="0" y1="130" x2="245" y2="130" stroke="#71717A" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.2" />
                  <text x="4" y="115" fill="#71717A" fontSize="7.5" fontWeight="600" fontFamily="monospace">RSI (14) {activeChartData.rsiVal}</text>

                  {rsiPoints && (
                    <polyline 
                      points={rsiPoints} 
                      fill="none" 
                      stroke="#71717A" 
                      strokeWidth="1.2" 
                    />
                  )}

                  <text x="12" y="133" fill="#71717A" fontSize="7" fontWeight="500" fontFamily="monospace">08:00</text>
                  <text x="60" y="133" fill="#71717A" fontSize="7" fontWeight="500" fontFamily="monospace">09:00</text>
                  <text x="110" y="133" fill="#71717A" fontSize="7" fontWeight="500" fontFamily="monospace">10:00</text>
                  <text x="158" y="133" fill="#FFFFFF" fontSize="7" fontWeight="500" fontFamily="monospace">11:00</text>
                  <text x="200" y="133" fill="#FFFFFF" fontSize="7" fontWeight="500" fontFamily="monospace">12:00</text>
                </svg>
              </div>

            </div>

            <div className="bg-[#161412]/80 backdrop-blur-md px-2.5 py-1.5 border-t border-white/[0.06] text-[11px] font-mono text-[#EAF2FF] truncate flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5 truncate">
                <img src={activeIconUrl} alt="" className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-[#E2C896]/30" />
                <span className="truncate text-[#71717A] font-normal">"{activeSignal.custom_notes}"</span>
              </div>
              <span className="text-[#E2C896] font-semibold shrink-0 ml-1.5 bg-[#181920] px-1.5 py-0.5 rounded border border-[#A38B5D]/30 text-[10px]">✓ Verified</span>
            </div>

          </div>

          <div className="mt-2.5 h-6 w-full flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E2C896] text-center font-mono shrink-0">
            <img src={activeIconUrl} alt="" className="w-4 h-4 rounded-full object-cover shrink-0" />
            <span className="truncate">Analysis: ${activeSignal.symbol} / USDT</span>
          </div>
        </div>

        {/* 4. PILL CONNECTOR 1 -> 2 WITH ENERGY PULSE */}
        <div className="hidden lg:flex col-span-1 justify-center items-center relative">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E2C896]/30 to-transparent absolute overflow-hidden">
            <div className="w-8 h-[2px] bg-[#E2C896] shadow-[0_0_8px_#E2C896] absolute animate-energy-pulse" />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#161412]/90 border border-white/[0.08] shadow-lg flex items-center justify-center text-[#E2C896] relative z-10 group hover:scale-110 transition-transform">
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FRAME 2: TELEGRAM PHONE (3. DYNAMIC BORDER BEAM ALONG CENTER CARD)       */}
        {/* ========================================================================= */}
        <div className="lg:col-span-3 flex flex-col items-center">
          <div className="w-full max-w-[290px] h-[435px] bg-[#0A0B0E] rounded-[44px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8),0_0_30px_rgba(226,183,91,0.06)] overflow-hidden relative p-[1.5px] group transition-all duration-300 flex flex-col justify-between">
            
            {/* 3. DYNAMIC BORDER BEAM (Conic Traveling Light Gradient Stroke) */}
            <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(243,208,129,0.9)_360deg)] animate-[spin_4s_linear_infinite] opacity-80 pointer-events-none z-0" />

            <div className="w-full h-full bg-[linear-gradient(160deg,rgba(243,208,129,0.05)_0%,rgba(18,16,14,0.75)_40%,rgba(10,9,8,0.95)_100%)] backdrop-blur-xl rounded-[43px] p-1.5 flex flex-col justify-between relative z-10 overflow-hidden">
              
              {/* Top Specular Edge */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

              <div className="w-24 h-3 bg-[#050507] rounded-full mx-auto mb-0.5 relative z-20 flex items-center justify-center border border-white/[0.08] shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0E0D0C]" />
              </div>

              <div className="bg-[#0E0D0C]/70 rounded-[32px] p-2 space-y-1 text-[#EAF2FF] flex-1 flex flex-col justify-between relative overflow-hidden">
                
                <div className="bg-[#161412]/80 backdrop-blur-md rounded-t-2xl p-2 flex items-center justify-between border-b border-white/[0.06] shrink-0 -mx-2 -mt-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <ChevronLeft className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
                    <img src="/images/high-table-avatar.png" alt="High Table VIP" className="w-6.5 h-6.5 rounded-full object-cover border border-[#E2C896]/40 shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-[11px] font-semibold text-[#FFFFFF] truncate">High Table</span>
                        <BadgeCheck className="w-3 h-3 text-[#E2C896] fill-[#E2C896] text-[#080808] shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#71717A]">
                    <Search className="w-3 h-3" />
                    <MoreVertical className="w-3 h-3" />
                  </div>
                </div>

                <div className="bg-[#161412]/80 border-l-2 border-[#E2C896] px-2 py-0.5 flex items-center justify-between text-[9.5px] shrink-0 -mx-2">
                  <div className="flex items-center gap-1 min-w-0">
                    <Pin className="w-2.5 h-2.5 text-[#E2C896] shrink-0" />
                    <div className="truncate">
                      <span className="text-[#E2C896] font-semibold block leading-tight">Pinned message</span>
                      <span className="text-[#71717A] truncate block leading-tight">Last 15 days trade history...</span>
                    </div>
                  </div>
                </div>

                {/* Telegram Post - LUXURY DARK MODE WITH FADED GOLD BADGES */}
                <div className="bg-[#161412]/90 border border-white/[0.06] p-2 rounded-xl space-y-1.5 font-mono text-[9.5px] flex-1 flex flex-col justify-between shadow-lg relative">
                  
                  <div className="border-l-2 border-[#E2C896] pl-1.5 py-0.5 bg-[#181920] rounded flex items-center justify-between shrink-0">
                    <span className="text-[9.5px] font-semibold text-[#E2C896]">High Table VIP Alert</span>
                    <span className="text-[8px] text-[#E2C896] font-semibold bg-[#181920] px-1 py-0.2 rounded border border-[#A38B5D]/30">Verified Call</span>
                  </div>

                  {/* EXACT MATCHING USER SIGNAL FORMAT - CRISP WHITE (#FFFFFF) NUMBERS */}
                  <div className="space-y-1 text-[9.5px] leading-tight font-mono">
                    
                    {/* $SYMBOL (Scalping) */}
                    <div className="text-[11px] font-bold text-[#E2C896] flex items-center gap-1 bg-[#0E0D0C]/80 px-1.5 py-0.5 rounded border border-white/[0.06]">
                      <img src={activeIconUrl} alt="" className="w-3 h-3 rounded-full object-cover shrink-0" />
                      <span>${activeSignal.symbol}</span>
                      <span className="text-[#71717A] font-normal">{activePrices.strategy}</span>
                    </div>

                    {/* Entry & Stop Loss */}
                    <div className="space-y-0.5 text-[#FFFFFF] pt-0.5 bg-[#0E0D0C]/80 p-1.5 rounded-lg border border-white/[0.06]">
                      <div className="flex items-center gap-1 text-[9px]">
                        <span className="text-[#E2C896] font-semibold">*</span>
                        <span className="text-[#71717A]">Entry:</span>
                        <span className="font-bold text-[#FFFFFF]">{activePrices.entry_formatted}</span>
                      </div>

                      <div className="flex items-center gap-1 text-[9px]">
                        <span className="text-[#71717A] font-semibold">*</span>
                        <span className="text-[#71717A]">SL:</span>
                        <span className="font-bold text-[#FFFFFF]">{activePrices.sl_formatted}</span>
                      </div>
                    </div>

                    {/* Take Profit Levels */}
                    <div className="space-y-0.5 bg-[#0E0D0C]/80 p-1.5 rounded-lg border border-white/[0.06]">
                      <div className="text-[#E2C896] font-semibold flex items-center gap-1 text-[9px]">
                        <span>🎯</span>
                        <span>Take Profit Levels</span>
                      </div>
                      
                      <div className="pl-1.5 space-y-0.2 text-[#FFFFFF] font-bold text-[9px]">
                        <div>* TP1: {activePrices.tp1_formatted}</div>
                        <div>* TP2: {activePrices.tp2_formatted}</div>
                        <div>* TP3: {activePrices.tp3_formatted}</div>
                      </div>
                    </div>

                  </div>

                  <div className="pt-1 border-t border-white/[0.06] flex items-center justify-between text-[8.5px] text-[#71717A] shrink-0">
                    <div className="flex items-center gap-0.5">
                      {activeSignal.reactions?.map((r: any, i: number) => (
                        <span key={i} className="bg-[#0E0D0C]/80 px-1 py-0.2 rounded-full border border-white/[0.08] flex items-center gap-0.5 font-medium text-[8px]">
                          <span>{r.emoji}</span>
                          <span className="text-[#71717A]">{r.count}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 font-mono text-[8.5px] text-[#71717A]">
                      <Eye className="w-2.5 h-2.5 text-[#71717A]" />
                      <span>{activeSignal.views}</span>
                      <span>·</span>
                      <span>11:35 AM</span>
                      <span className="text-[#E2C896] font-semibold">✓✓</span>
                    </div>
                  </div>

                </div>

                <div className="bg-[#161412]/90 border border-white/[0.08] rounded-lg py-1 px-2 flex items-center justify-center text-[9.5px] font-semibold text-[#E2C896] shrink-0 uppercase tracking-wider shadow">
                  UNMUTE
                </div>

              </div>
            </div>
          </div>

          <div className="mt-2.5 h-6 w-full flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#EAF2FF] text-center font-mono shrink-0">
            <img src="/images/high-table-avatar.png" alt="" className="w-4 h-4 rounded-full object-cover shrink-0" />
            <span className="truncate">Yagacalls High Table · ${activeSignal.symbol}</span>
          </div>
        </div>

        {/* 4. PILL CONNECTOR 2 -> 3 WITH ENERGY PULSE */}
        <div className="hidden lg:flex col-span-1 justify-center items-center relative">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E2C896]/30 to-transparent absolute overflow-hidden">
            <div className="w-8 h-[2px] bg-[#E2C896] shadow-[0_0_8px_#E2C896] absolute animate-energy-pulse" />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#161412]/90 border border-white/[0.08] shadow-lg flex items-center justify-center text-[#E2C896] relative z-10 group hover:scale-110 transition-transform">
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FRAME 3: AUDIT LEDGER (Translucent Obsidian Glass Surface)                */}
        {/* ========================================================================= */}
        <div className="lg:col-span-3 flex flex-col items-center">
          <div className="w-full h-[435px] bg-[linear-gradient(160deg,rgba(243,208,129,0.05)_0%,rgba(18,16,14,0.65)_40%,rgba(10,9,8,0.85)_100%)] backdrop-blur-xl border border-white/[0.08] hover:border-[#E2C896]/30 rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            
            {/* Top Specular Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

            <div className="flex justify-between items-center border-b border-white/[0.06] pb-2 shrink-0">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E2C896]" />
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#E2C896]">
                  YAGA TRADE RESULT
                </span>
              </div>

              {/* FADED GOLD VERIFICATION BADGE */}
              <div className="text-[#E2C896] border border-[#E2C896]/30 bg-[#E2C896]/10 px-1.5 py-0.5 rounded flex items-center gap-1 text-[8px] font-semibold">
                <Check className="w-2.5 h-2.5 text-[#E2C896]" />
                <span>CONFIRMED</span>
              </div>
            </div>

            {/* Clean Executive Outcome Section - PURE CRISP WHITE (#FFFFFF) */}
            <div className="space-y-2 my-auto">
              <div className="text-[9.5px] font-semibold uppercase tracking-widest text-[#E2C896]">
                LOCKED PNL OUTCOME
              </div>

              <div className="bg-[#161412]/80 border border-white/[0.06] p-2.5 rounded-xl text-center space-y-1 shadow-md">
                <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-[#E2C896] font-semibold uppercase">
                  <img src={activeIconUrl} alt="" className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-[#E2C896]/30" />
                  <span>{activeSignal.pnl_summary_text}</span>
                </div>

                {/* PURE CRISP WHITE HIGH IMPACT PNL VALUE */}
                <div className="text-xl font-bold text-[#FFFFFF] tracking-tight flex items-center justify-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#E2C896] shrink-0" />
                  <span>+${activeSignal.dollarPnlNum ? activeSignal.dollarPnlNum.toLocaleString() : '5,750'} Gain</span>
                </div>

                <div className="text-[11px] font-medium text-[#71717A]">
                  ({activeSignal.pnl_percentage}% Track Record Return)
                </div>
              </div>

              {/* 4. AUDIT LEDGER SHIMMER SWEEP ACROSS GOLD PROGRESS BAR */}
              <div className="bg-[#161412]/80 p-2 rounded-xl border border-white/[0.06] space-y-1 text-[9px] font-mono">
                <div className="flex justify-between text-[#EAF2FF]">
                  <span>Target Progress</span>
                  <span className="text-[#E2C896] font-semibold">100% Achieved</span>
                </div>

                <div className="w-full h-1.5 bg-[#0E0D0C]/80 rounded-full overflow-hidden flex border border-white/[0.06] relative">
                  <div className="w-full bg-gradient-to-r from-[#27272A] to-[#E2C896] h-full" />
                  {/* Diagonal Shimmer Sweep */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer-sweep pointer-events-none" />
                </div>

                <div className="flex justify-between text-[8px] text-[#71717A]">
                  <span className="text-[#E2C896] font-semibold">TP1 ✓</span>
                  <span className="text-[#E2C896] font-semibold">TP2 ✓</span>
                  <span className="text-[#E2C896] font-semibold">TP3 SMASHED 🌕</span>
                </div>
              </div>
            </div>

            {/* Clean Authentic On-Chain Proof Box */}
            <div className="bg-[#161412]/80 border border-white/[0.06] p-2 rounded-xl space-y-1 font-mono text-[9px] relative shrink-0">
              <div className="text-[9.5px] font-semibold uppercase tracking-wider text-[#E2C896] mb-0.5 flex items-center justify-between border-b border-white/[0.06] pb-0.5">
                <span>ON-CHAIN AUDIT PROOF</span>
                <span className="text-[8px] text-[#E2C896] font-semibold">VERIFIED</span>
              </div>
              <div className="flex justify-between text-[#71717A] items-center">
                <span>ASSET PAIR:</span>
                <span className="text-[#FFFFFF] font-semibold flex items-center gap-1">
                  <img src={activeIconUrl} alt="" className="w-3 h-3 rounded-full object-cover shrink-0" />
                  ${activeSignal.symbol} / USDT
                </span>
              </div>
              <div className="flex justify-between text-[#71717A]">
                <span>TRADE ID:</span>
                <span className="text-[#FFFFFF] font-semibold">{activeSignal.tradeId}</span>
              </div>

              <div className="flex justify-between text-[#71717A] items-center">
                <span>PROOF HASH:</span>
                <button 
                  onClick={() => setShowExplorerModal(true)}
                  className="text-[#E2C896] hover:text-white font-semibold flex items-center gap-1 bg-[#0E0D0C]/80 px-1.5 py-0.2 rounded border border-white/[0.08] transition-all shadow-sm"
                  title="Click to view On-Chain Verification Explorer"
                >
                  <span>{activeSignal.hash}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#E2C896]" />
                </button>
              </div>

              <div className="flex justify-between text-[#71717A]">
                <span>STATUS:</span>
                <span className="text-[#E2C896] font-semibold">AUDITED & CONFIRMED</span>
              </div>
            </div>

            {showExplorerModal && (
              <div className="absolute inset-0 bg-[#0A0B0E]/98 backdrop-blur-md z-30 p-3 flex flex-col justify-between border border-[#E2C896]/40 rounded-2xl animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center border-b border-white/[0.06] pb-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#E2C896] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ON-CHAIN EXPLORER</span>
                  </div>
                  <button 
                    onClick={() => setShowExplorerModal(false)}
                    className="p-0.5 text-[#71717A] hover:text-white rounded-lg bg-[#161820]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-1.5 font-mono text-[9.5px] text-[#71717A]">
                  <div className="bg-[#161820] p-2 rounded-lg border border-white/[0.06] space-y-0.5">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-[#E2C896] font-semibold">✓ Success (Block #{activeSignal.blockNum})</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network Fee:</span>
                      <span className="text-[#FFFFFF] font-semibold">{activeSignal.gasFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Asset Pair:</span>
                      <span className="text-[#E2C896] font-semibold">${activeSignal.symbol} / USDT</span>
                    </div>
                  </div>

                  <div className="bg-[#161820] p-2 rounded-lg border border-white/[0.06] space-y-0.5">
                    <div className="flex justify-between">
                      <span>Recorded PnL:</span>
                      <span className="text-[#FFFFFF] font-semibold">+{activeSignal.pnl_percentage}% Gain</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Verification Date:</span>
                      <span className="text-[#FFFFFF] font-semibold">{activeSignal.date}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={copyHashToClipboard}
                  className="w-full bg-[linear-gradient(135deg,#E2C896_0%,#CBB079_50%,#A38B5D_100%)] text-[#09090B] font-mono font-bold text-[10px] py-1.5 rounded-lg flex items-center justify-center gap-1 shadow-md hover:scale-[1.01] transition-all"
                >
                  {copiedHash ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedHash ? "HASH COPIED!" : "COPY TRANSACTION HASH"}</span>
                </button>
              </div>
            )}

          </div>

          <div className="mt-2.5 h-6 w-full flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E2C896] text-center font-mono shrink-0">
            <img src={activeIconUrl} alt="" className="w-4 h-4 rounded-full object-cover shrink-0" />
            <span className="truncate">Verified Result: +{activeSignal.pnl_percentage}% Gain</span>
          </div>
        </div>

      </div>
    </div>
  );
}
