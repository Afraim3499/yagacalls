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
  ArrowRight
} from "lucide-react";
import GlowCard from "../shared/GlowCard";

interface CalcResults {
  notionalValue: number;
  assetQuantity: number;
  marginRequired: number;
  targetProfit: number | null;
  stopLossEstimate: number | null;
  romTarget: number | null;
  romStop: number | null;
  accountRisk: number | null;
  riskToReward: string | null;
  liquidationPrice: number | null;
}

export default function LeverageTradingCalculator() {
  // Inputs
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [accountSize, setAccountSize] = useState<number>(1000);
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [sizeType, setSizeType] = useState<"quantity" | "notional">("notional");
  const [assetQuantity, setAssetQuantity] = useState<number>(10);
  const [notionalInput, setNotionalInput] = useState<number>(1000);
  const [leverage, setLeverage] = useState<number>(5);
  const [stopLoss, setStopLoss] = useState<number>(95);
  const [targetPrice, setTargetPrice] = useState<number>(115);
  const [feeBuffer, setFeeBuffer] = useState<number>(0);
  const [maintenanceBuffer, setMaintenanceBuffer] = useState<number>(0.5);

  // Error/Warning States
  const [warnings, setWarnings] = useState<string[]>([]);

  const results = useMemo((): CalcResults | null => {
    // Basic validation
    if (accountSize <= 0 || entryPrice <= 0 || leverage < 1) return null;
    
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

    // Directional validation for stop/target
    if (stopLoss > 0) {
      if (direction === "long" && stopLoss >= entryPrice) return null;
      if (direction === "short" && stopLoss <= entryPrice) return null;
    }

    const margin = currentNotional / leverage;
    
    let profit: number | null = null;
    let loss: number | null = null;
    let romT: number | null = null;
    let romS: number | null = null;
    let riskPct: number | null = null;
    let rr: string | null = null;

    // Potential PnL
    if (targetPrice > 0) {
      const targetValid = direction === "long" ? targetPrice > entryPrice : targetPrice < entryPrice;
      if (targetValid) {
        profit = direction === "long" 
          ? (targetPrice - entryPrice) * currentQuantity
          : (entryPrice - targetPrice) * currentQuantity;
        romT = (profit / margin) * 100;
      }
    }

    if (stopLoss > 0) {
      loss = direction === "long"
        ? (entryPrice - stopLoss) * currentQuantity
        : (stopLoss - entryPrice) * currentQuantity;
      romS = (loss / margin) * 100;
      riskPct = (loss / accountSize) * 100;
    }

    if (profit !== null && loss !== null && loss !== 0) {
      rr = (profit / loss).toFixed(2);
    }

    // Simplified Liquidation Price Reference
    // Long: Entry * (1 - (1/Lev) + MaintBuffer/100)
    // Short: Entry * (1 + (1/Lev) - MaintBuffer/100)
    const liqPrice = direction === "long"
      ? entryPrice * (1 - (1 / leverage) + (maintenanceBuffer / 100))
      : entryPrice * (1 + (1 / leverage) - (maintenanceBuffer / 100));

    return {
      notionalValue: currentNotional,
      assetQuantity: currentQuantity,
      marginRequired: margin,
      targetProfit: profit,
      stopLossEstimate: loss,
      romTarget: romT,
      romStop: romS,
      accountRisk: riskPct,
      riskToReward: rr,
      liquidationPrice: liqPrice
    };
  }, [direction, accountSize, entryPrice, sizeType, assetQuantity, notionalInput, leverage, stopLoss, targetPrice, maintenanceBuffer]);

  // Contextual Warnings
  useEffect(() => {
    const newWarnings: string[] = [];
    
    if (leverage > 5 && leverage <= 10) {
      newWarnings.push("Leverage warning: higher leverage reduces room for error and can magnify losses quickly.");
    } else if (leverage > 10 && leverage <= 20) {
      newWarnings.push("High leverage warning: small price moves can create large account impact. Check liquidation risk carefully.");
    } else if (leverage > 20) {
      newWarnings.push("Severe leverage warning: very high leverage can liquidate accounts quickly during normal crypto volatility.");
    }

    if (results) {
      if (results.marginRequired > accountSize) {
        newWarnings.push("Margin warning: estimated margin required is larger than the account size entered.");
      }

      if (results.accountRisk) {
        if (results.accountRisk > 2 && results.accountRisk <= 5) {
          newWarnings.push("Risk warning: this stop-loss loss estimate is above 2% of account size.");
        } else if (results.accountRisk > 5) {
          newWarnings.push("Severe risk warning: this stop-loss loss estimate could create serious account drawdown.");
        }
      }

      if (!stopLoss || stopLoss <= 0) {
        newWarnings.push("No stop-loss entered. Without a stop-loss or invalidation plan, leverage risk is harder to control.");
      }

      if (results.liquidationPrice && stopLoss > 0) {
        const isLiqNearStop = direction === "long" 
          ? results.liquidationPrice >= stopLoss 
          : results.liquidationPrice <= stopLoss;
        
        if (isLiqNearStop) {
          newWarnings.push("Liquidation-risk warning: the simplified estimated liquidation area may be close to or before your planned stop. Exchange-specific rules may differ.");
        }
      }
    }

    setWarnings(newWarnings);
  }, [results, leverage, accountSize, stopLoss, direction]);

  const handleReset = () => {
    setDirection("long");
    setAccountSize(1000);
    setEntryPrice(100);
    setSizeType("notional");
    setNotionalInput(1000);
    setAssetQuantity(10);
    setLeverage(5);
    setStopLoss(95);
    setTargetPrice(115);
    setFeeBuffer(0);
    setMaintenanceBuffer(0.5);
  };

  const copyResults = () => {
    if (!results) return;
    const text = `
Yaga Calls Leverage Trade Estimate:
- Direction: ${direction.toUpperCase()}
- Account: $${accountSize}
- Entry: $${entryPrice}
- Leverage: ${leverage}x
- Stop-Loss: $${stopLoss || 'N/A'}
- Target: $${targetPrice || 'N/A'}
---
- Notional Value: $${results.notionalValue.toFixed(2)}
- Est. Margin Required: $${results.marginRequired.toFixed(2)}
- Stop-Loss Loss: ${results.stopLossEstimate ? '$' + results.stopLossEstimate.toFixed(2) : 'N/A'}
- Target Profit: ${results.targetProfit ? '$' + results.targetProfit.toFixed(2) : 'N/A'}
- Account Risk: ${results.accountRisk ? results.accountRisk.toFixed(2) + '%' : 'N/A'}
- R:R Ratio: ${results.riskToReward ? '1:' + results.riskToReward : 'N/A'}
- Approx. Liq Reference: $${results.liquidationPrice?.toFixed(2)}
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
                <h3 className="text-sm font-black uppercase tracking-widest text-text">Leverage Parameters</h3>
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Account Size ($)</label>
                  <input 
                    type="number" 
                    value={accountSize}
                    onChange={(e) => setAccountSize(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                  <p className="text-[9px] text-text-muted/60 uppercase font-bold">Total trading balance.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Entry Price ($)</label>
                  <input 
                    type="number" 
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
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
                  <p className="text-[9px] text-text-muted/60 uppercase font-bold">Multiplier (e.g. 5 means 5x leverage).</p>
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
                    <p className="text-[9px] text-text-muted/60 uppercase font-bold">Number of coins/units.</p>
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
                    <p className="text-[9px] text-text-muted/60 uppercase font-bold">Total trade exposure.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Optional Targets */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-line pb-4">
                <Target className="text-primary" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest text-text">Risk & Targets</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Stop-Loss Price ($)</label>
                  <input 
                    type="number" 
                    value={stopLoss}
                    onChange={(e) => setStopLoss(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Target Price ($)</label>
                  <input 
                    type="number" 
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Maint. Margin Buffer (%)</label>
                  <input 
                    type="number" 
                    value={maintenanceBuffer}
                    onChange={(e) => setMaintenanceBuffer(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                  <p className="text-[9px] text-text-muted/60 uppercase font-bold italic">Approx. liquidation awareness buffer.</p>
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
            <h3 className="text-xl font-black uppercase tracking-tighter border-b border-line pb-6 text-center">Trade Result</h3>
            
            {!results ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-surface-deep rounded-full flex items-center justify-center mx-auto">
                  <HelpCircle className="text-text-muted" size={24} />
                </div>
                <p className="text-xs text-text-muted font-black uppercase tracking-widest">Awaiting valid inputs...</p>
                <p className="text-[10px] text-text-muted/60 uppercase tracking-tight">Check entry, leverage, and direction.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { l: "Notional Value", v: `$${results.notionalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: `${results.assetQuantity.toFixed(4)} units total exposure`, icon: <ArrowRight className="text-primary" /> },
                    { l: "Margin Required", v: `$${results.marginRequired.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: `Capital locked at ${leverage}x leverage`, highlight: true, icon: <PieChart className="text-primary" /> },
                    { 
                      l: "Target Profit", 
                      v: results.targetProfit ? `$${results.targetProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "N/A", 
                      sub: results.romTarget ? `${results.romTarget.toFixed(2)}% return on margin` : "Target price not set",
                      icon: <TrendingUp className="text-primary" /> 
                    },
                    { 
                      l: "Stop-Loss Loss", 
                      v: results.stopLossEstimate ? `-$${results.stopLossEstimate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "N/A", 
                      sub: results.accountRisk ? `${results.accountRisk.toFixed(2)}% of total account` : "Stop-loss not set",
                      icon: <TrendingDown className="text-danger" /> 
                    },
                  ].map((row, i) => (
                    <div key={i} className={`p-5 rounded-2xl border ${row.highlight ? 'bg-primary/5 border-primary/20 shadow-lg shadow-primary/5' : 'bg-surface-deep/30 border-line'} space-y-1`}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="opacity-50">{row.icon}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.l}</span>
                        </div>
                        <span className={`text-sm font-black ${row.highlight ? 'text-primary' : 'text-text'}`}>{row.v}</span>
                      </div>
                      <p className="text-[10px] text-text-muted font-medium opacity-60 pl-6">{row.sub}</p>
                    </div>
                  ))}

                  <div className="p-5 rounded-2xl border border-warning/20 bg-warning/5 space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="text-warning opacity-50" size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Approx. Liq Reference</span>
                      </div>
                      <span className="text-sm font-black text-warning">${results.liquidationPrice?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <p className="text-[9px] text-text-muted font-medium opacity-60 leading-tight">
                      Simplified estimate only. Actual liquidation depends on exchange maintenance margin, fees, and funding.
                    </p>
                  </div>
                </div>

                {results.riskToReward && (
                  <div className="p-6 bg-primary text-background rounded-3xl space-y-4 shadow-xl shadow-primary/10">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest">Risk-to-Reward</span>
                      <span className="text-2xl font-black">1 : {results.riskToReward}</span>
                    </div>
                  </div>
                )}

                <div className="pt-4 space-y-4">
                  <div className="p-4 bg-background border border-line rounded-2xl">
                    <p className="text-[10px] text-text-muted leading-relaxed italic uppercase tracking-tight text-center">
                      "A ${results.notionalValue.toFixed(0)} notional position at {leverage}x leverage requires about ${results.marginRequired.toFixed(0)} margin before fees and exchange rules."
                    </p>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted/50 text-center leading-relaxed">
                    Estimates only. Leverage can magnify both gains and losses. Results do not guarantee execution, profit, or liquidation protection.
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
