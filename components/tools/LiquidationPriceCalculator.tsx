"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Calculator, 
  RefreshCcw, 
  Copy, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  PieChart, 
  HelpCircle,
  TrendingUp,
  TrendingDown,
  Target,
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import GlowCard from "../shared/GlowCard";

interface CalcResults {
  notionalValue: number;
  assetQuantity: number;
  initialMargin: number;
  totalMargin: number;
  liquidationPrice: number | null;
  distanceFromEntry: number | null;
  distanceFromEntryPct: number | null;
  stopLossComparison: "before" | "after" | null;
}

export default function LiquidationPriceCalculator() {
  // Inputs
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [sizeType, setSizeType] = useState<"quantity" | "notional">("notional");
  const [assetQuantity, setAssetQuantity] = useState<number>(10);
  const [notionalInput, setNotionalInput] = useState<number>(1000);
  const [leverage, setLeverage] = useState<number>(10);
  const [maintMarginRate, setMaintMarginRate] = useState<number>(0.5);
  const [additionalMargin, setAdditionalMargin] = useState<number>(0);
  const [stopLoss, setStopLoss] = useState<number>(0);
  const [feeBuffer, setFeeBuffer] = useState<number>(0);

  // Error/Warning States
  const [warnings, setWarnings] = useState<string[]>([]);

  const results = useMemo((): CalcResults | null => {
    // Basic validation
    if (entryPrice <= 0 || leverage < 1 || maintMarginRate < 0 || maintMarginRate >= 100) return null;
    
    let currentNotional = 0;
    let currentQuantity = 0;

    if (sizeType === "quantity") {
      if (assetQuantity <= 0) return null;
      currentQuantity = assetQuantity;
      currentNotional = assetQuantity * entryPrice;
    } else {
      if (notionalInput <= 0) return null;
      currentNotional = notionalInput;
      currentQuantity = notionalInput / entryPrice;
    }

    const initialMargin = currentNotional / leverage;
    const totalMargin = initialMargin + additionalMargin;
    const mmr = maintMarginRate / 100;

    // Simplified isolated liquidation-risk reference formulas
    // Long: (Entry * Qty - TotalMargin) / (Qty * (1 - MMR))
    // Short: (Entry * Qty + TotalMargin) / (Qty * (1 + MMR))
    let liqPrice: number | null = null;
    if (direction === "long") {
      liqPrice = (entryPrice * currentQuantity - totalMargin) / (currentQuantity * (1 - mmr));
    } else {
      liqPrice = (entryPrice * currentQuantity + totalMargin) / (currentQuantity * (1 + mmr));
    }

    // Sanity check for invalid/unrealistic values
    if (liqPrice <= 0 || isNaN(liqPrice) || !isFinite(liqPrice)) {
      liqPrice = null;
    }

    let dist = null;
    let distPct = null;
    if (liqPrice !== null) {
      dist = direction === "long" ? entryPrice - liqPrice : liqPrice - entryPrice;
      distPct = (dist / entryPrice) * 100;
    }

    let slComp: "before" | "after" | null = null;
    if (stopLoss > 0 && liqPrice !== null) {
      if (direction === "long") {
        slComp = stopLoss > liqPrice ? "before" : "after";
      } else {
        slComp = stopLoss < liqPrice ? "before" : "after";
      }
    }

    return {
      notionalValue: currentNotional,
      assetQuantity: currentQuantity,
      initialMargin,
      totalMargin,
      liquidationPrice: liqPrice,
      distanceFromEntry: dist,
      distanceFromEntryPct: distPct,
      stopLossComparison: slComp
    };
  }, [direction, entryPrice, sizeType, assetQuantity, notionalInput, leverage, maintMarginRate, additionalMargin, stopLoss]);

  // Contextual Warnings
  useEffect(() => {
    const newWarnings: string[] = [];
    
    if (leverage > 5 && leverage <= 10) {
      newWarnings.push("Leverage warning: higher leverage reduces room for error and can magnify losses quickly.");
    } else if (leverage > 10 && leverage <= 20) {
      newWarnings.push("High leverage warning: small price moves can create large account impact. Liquidation risk should be checked carefully.");
    } else if (leverage > 20) {
      newWarnings.push("Severe leverage warning: very high leverage can liquidate accounts quickly during normal crypto volatility.");
    }

    if (!stopLoss || stopLoss <= 0) {
      newWarnings.push("No stop-loss entered. Liquidation should not be treated as a stop-loss.");
    }

    if (results) {
      if (results.liquidationPrice === null) {
        newWarnings.push("Inputs create an unrealistic liquidation estimate. Check entry, leverage, position size, maintenance margin, and additional margin.");
      } else {
        if (results.distanceFromEntryPct !== null) {
          if (results.distanceFromEntryPct < 2) {
            newWarnings.push("Severe liquidation-risk warning: this setup has very little room before liquidation-risk area.");
          } else if (results.distanceFromEntryPct < 5) {
            newWarnings.push("High liquidation-risk warning: normal crypto volatility may approach the estimated liquidation-risk area.");
          }
        }

        if (results.stopLossComparison === "after") {
          newWarnings.push("Stop-loss warning: your stop-loss may be too close to or beyond the estimated liquidation-risk area. Exchange liquidation may occur before planned exit.");
        }
      }
    }

    setWarnings(newWarnings);
  }, [results, leverage, stopLoss]);

  const handleReset = () => {
    setDirection("long");
    setEntryPrice(100);
    setSizeType("notional");
    setNotionalInput(1000);
    setAssetQuantity(10);
    setLeverage(10);
    setMaintMarginRate(0.5);
    setAdditionalMargin(0);
    setStopLoss(0);
    setFeeBuffer(0);
  };

  const copyResults = () => {
    if (!results) return;
    const text = `
Yaga Calls Liquidation Risk Estimate:
- Direction: ${direction.toUpperCase()}
- Entry Price: $${entryPrice}
- Leverage: ${leverage}x
- Maint. Margin: ${maintMarginRate}%
- Total Margin: $${results.totalMargin.toFixed(2)}
---
- Approx. Liq Reference: $${results.liquidationPrice?.toFixed(2) || "N/A"}
- Distance from Entry: $${results.distanceFromEntry?.toFixed(2) || "N/A"} (${results.distanceFromEntryPct?.toFixed(2) || "N/A"}%)
- Stop-Loss: ${stopLoss > 0 ? '$' + stopLoss : 'Not Set'}
- Risk Note: Educational estimate only. Real exchange liquidation varies.
    `;
    navigator.clipboard.writeText(text.trim());
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* INPUT PANEL */}
      <div className="lg:col-span-7 space-y-6">
        <GlowCard className="p-6 md:p-8 border-line bg-background/50 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Core Parameters */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-line pb-4">
                <Zap className="text-primary" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest text-text">Trade Parameters</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Direction</label>
                  <div className="flex bg-surface-deep p-1 rounded-xl border border-line">
                    <button 
                      onClick={() => setDirection("long")}
                      className={`flex-1 py-2 text-[10px] font-black uppercase tracking-tight rounded-lg transition-all flex items-center justify-center gap-2 ${direction === 'long' ? 'bg-primary text-background' : 'text-text-muted hover:text-text'}`}
                    >
                      <TrendingUp size={12} /> LONG
                    </button>
                    <button 
                      onClick={() => setDirection("short")}
                      className={`flex-1 py-2 text-[10px] font-black uppercase tracking-tight rounded-lg transition-all flex items-center justify-center gap-2 ${direction === 'short' ? 'bg-danger text-white' : 'text-text-muted hover:text-text'}`}
                    >
                      <TrendingDown size={12} /> SHORT
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Entry Price ($)</label>
                  <input 
                    type="number" 
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                  <p className="text-[9px] text-text-muted/60 uppercase font-bold">Planned or actual entry.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Leverage (x)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={leverage}
                      onChange={(e) => setLeverage(Number(e.target.value))}
                      className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                    />
                    <Zap className="absolute right-4 top-1/2 -translate-y-1/2 text-primary opacity-50" size={16} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Maint. Margin Rate (%)</label>
                  <input 
                    type="number" 
                    value={maintMarginRate}
                    onChange={(e) => setMaintMarginRate(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                  <p className="text-[9px] text-text-muted/60 uppercase font-bold">Simplified MMR (default 0.5%).</p>
                </div>
              </div>
            </div>

            {/* Size Configuration */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-line pb-4">
                <PieChart className="text-primary" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest text-text">Position Sizing</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Size Type</label>
                  <div className="flex bg-surface-deep p-1 rounded-xl border border-line">
                    <button 
                      onClick={() => setSizeType("quantity")}
                      className={`flex-1 py-2 text-[10px] font-black uppercase tracking-tight rounded-lg transition-all ${sizeType === 'quantity' ? 'bg-primary text-background' : 'text-text-muted hover:text-text'}`}
                    >
                      Quantity
                    </button>
                    <button 
                      onClick={() => setSizeType("notional")}
                      className={`flex-1 py-2 text-[10px] font-black uppercase tracking-tight rounded-lg transition-all ${sizeType === 'notional' ? 'bg-primary text-background' : 'text-text-muted hover:text-text'}`}
                    >
                      Notional $
                    </button>
                  </div>
                </div>

                {sizeType === 'quantity' ? (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Asset Quantity</label>
                    <input 
                      type="number" 
                      value={assetQuantity}
                      onChange={(e) => setAssetQuantity(Number(e.target.value))}
                      className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Notional Value ($)</label>
                    <input 
                      type="number" 
                      value={notionalInput}
                      onChange={(e) => setNotionalInput(Number(e.target.value))}
                      className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Optional Margin & Stop */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-line pb-4">
                <ShieldAlert className="text-primary" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest text-text">Risk Modifiers</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Additional Margin ($)</label>
                  <input 
                    type="number" 
                    value={additionalMargin}
                    onChange={(e) => setAdditionalMargin(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                  <p className="text-[9px] text-text-muted/60 uppercase font-bold">Optional extra isolated margin.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Stop-Loss Price ($)</label>
                  <input 
                    type="number" 
                    value={stopLoss}
                    onChange={(e) => setStopLoss(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                  <p className="text-[9px] text-text-muted/60 uppercase font-bold italic">Optional comparison link.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Fee Buffer (%)</label>
                  <input 
                    type="number" 
                    value={feeBuffer}
                    onChange={(e) => setFeeBuffer(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-surface-deep border border-line rounded-xl text-[10px] font-black uppercase tracking-widest text-text hover:bg-line transition-colors"
              >
                <RefreshCcw size={14} /> Reset
              </button>
              {results && (
                <button 
                  onClick={copyResults}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  <Copy size={14} /> Copy Results
                </button>
              )}
            </div>
          </div>
        </GlowCard>

        {/* Warnings Area */}
        {warnings.length > 0 && (
          <div className="space-y-2">
            {warnings.map((w, i) => (
              <div key={i} className="p-4 bg-warning/5 border border-warning/20 rounded-2xl flex gap-3 items-start">
                <AlertTriangle className="text-warning shrink-0" size={16} />
                <p className="text-[11px] text-text-muted font-bold leading-tight">{w}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RESULT PANEL */}
      <div className="lg:col-span-5 sticky top-24">
        <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="space-y-8 relative z-10">
            <h3 className="text-xl font-black uppercase tracking-tighter border-b border-line pb-6 text-center">Risk Estimate</h3>
            
            {!results ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-surface-deep rounded-full flex items-center justify-center mx-auto">
                  <HelpCircle className="text-text-muted" size={24} />
                </div>
                <p className="text-xs text-text-muted font-black uppercase tracking-widest">Awaiting valid inputs...</p>
                <p className="text-[10px] text-text-muted/60 uppercase tracking-tight">Check entry, leverage, and size.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { l: "Notional Position Value", v: `$${results.notionalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: `${results.assetQuantity.toFixed(4)} total units controlled`, icon: <ArrowRight className="text-primary" /> },
                    { l: "Leverage", v: `${leverage}x`, sub: `Position multiplier`, icon: <Zap className="text-primary" /> },
                    { l: "Initial Margin Estimate", v: `$${results.initialMargin.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: `Base margin at ${leverage}x`, icon: <PieChart className="text-primary" /> },
                    { l: "Additional Margin", v: `$${additionalMargin.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: `Optional isolated margin buffer`, icon: <ShieldAlert className="text-primary" /> },
                    { l: "Total Margin Estimate", v: `$${results.totalMargin.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: `Combined position collateral`, icon: <Calculator className="text-primary" /> },
                    { l: "Maint. Margin Rate", v: `${maintMarginRate}%`, sub: `Minimum buffer required`, icon: <ShieldCheck className="text-primary" /> },
                  ].map((row, i) => (
                    <div key={i} className="p-4 rounded-2xl border border-line bg-surface-deep/30 space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="opacity-50">{row.icon}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.l}</span>
                        </div>
                        <span className="text-sm font-black text-text">{row.v}</span>
                      </div>
                      <p className="text-[10px] text-text-muted font-medium opacity-60 pl-6">{row.sub}</p>
                    </div>
                  ))}

                  <div className="p-6 rounded-2xl border border-warning/20 bg-warning/5 space-y-2 shadow-lg shadow-warning/5">
                    <div className="flex justify-between items-center border-b border-warning/10 pb-4">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="text-warning opacity-80" size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Approx. Liquidation Reference</span>
                      </div>
                      <span className="text-lg font-black text-warning">
                        {results.liquidationPrice ? `$${results.liquidationPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "N/A"}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase text-text-muted tracking-widest">Dist. from Entry</p>
                        <p className="text-xs font-black text-text">
                          {results.distanceFromEntry ? `$${results.distanceFromEntry.toFixed(2)}` : "N/A"}
                        </p>
                      </div>
                      <div className="space-y-1 text-right">
                        <p className="text-[9px] font-black uppercase text-text-muted tracking-widest">Move % to Liq</p>
                        <p className="text-xs font-black text-text">
                          {results.distanceFromEntryPct ? `${results.distanceFromEntryPct.toFixed(2)}%` : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {stopLoss > 0 && (
                    <div className={`p-5 rounded-2xl border ${results.stopLossComparison === "before" ? 'bg-primary/5 border-primary/20' : 'bg-danger/5 border-danger/20'} space-y-1`}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Target className={results.stopLossComparison === "before" ? 'text-primary' : 'text-danger'} size={16} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Stop-Loss Analysis</span>
                        </div>
                        <span className={`text-xs font-black ${results.stopLossComparison === "before" ? 'text-primary' : 'text-danger'}`}>
                          {results.stopLossComparison === "before" ? "Safe Placement" : "High Risk"}
                        </span>
                      </div>
                      <p className="text-[10px] text-text-muted font-medium leading-tight">
                        {results.stopLossComparison === "before" 
                          ? "Stop-loss appears before estimated liquidation-risk area." 
                          : "Warning: liquidation-risk area may be reached before planned stop."}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-background border border-line rounded-2xl">
                  <p className="text-[9px] text-text-muted leading-relaxed italic uppercase tracking-tight text-center">
                    "This estimate shows the approximate liquidation-risk area using a simplified isolated-margin model. If the liquidation-risk reference is close to your entry or stop-loss, the trade may be using too much leverage or too little margin for the volatility of the market."
                  </p>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted/40 leading-relaxed">
                    Estimates only. Real liquidation price can differ by exchange, margin mode, fees, funding, mark price, collateral, and risk-tier rules.
                  </p>
                </div>

                <div className="pt-4 border-t border-line text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">
                    Liquidation should not be used as your risk plan.
                  </p>
                </div>
              </div>
            )}
          </div>
        </GlowCard>
      </div>
    </div>
  );
}
