"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Calculator, 
  ArrowRight, 
  RefreshCcw, 
  Copy, 
  AlertTriangle, 
  ShieldCheck, 
  Info,
  TrendingUp,
  TrendingDown,
  Zap,
  PieChart,
  HelpCircle
} from "lucide-react";
import GlowCard from "../shared/GlowCard";

interface CalcResults {
  riskAmount: number;
  stopDistance: number;
  stopDistancePercent: number;
  positionSize: number;
  notionalValue: number;
  marginRequired: number;
  rewardPerUnit: number;
  potentialReward: number;
  riskToReward: string;
}

export default function PositionSizingCalculator() {
  // Inputs
  const [accountSize, setAccountSize] = useState<number>(1000);
  const [riskType, setRiskType] = useState<"percent" | "fixed">("percent");
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [riskFixed, setRiskFixed] = useState<number>(10);
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [stopLoss, setStopLoss] = useState<number>(95);
  const [targetPrice, setTargetPrice] = useState<number>(115);
  const [leverage, setLeverage] = useState<number>(1);
  const [buffer, setBuffer] = useState<number>(0);

  // Error/Warning States
  const [error, setError] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

  const results = useMemo((): CalcResults | null => {
    // Basic validation
    if (accountSize <= 0 || entryPrice <= 0 || stopLoss <= 0 || leverage <= 0) return null;
    
    // Directional validation
    if (direction === "long" && stopLoss >= entryPrice) return null;
    if (direction === "short" && stopLoss <= entryPrice) return null;

    const actualRiskAmount = riskType === "percent" 
      ? (accountSize * riskPercent) / 100 
      : riskFixed;

    if (actualRiskAmount > accountSize) return null;

    const stopDist = Math.abs(entryPrice - stopLoss);
    const stopDistPct = (stopDist / entryPrice) * 100;
    
    const posSize = actualRiskAmount / stopDist;
    const notional = posSize * entryPrice;
    const margin = notional / leverage;

    let rewardUnit = 0;
    let potReward = 0;
    let rrRatio = "0.00";

    if (targetPrice > 0) {
      const targetValid = direction === "long" 
        ? targetPrice > entryPrice 
        : targetPrice < entryPrice;

      if (targetValid) {
        rewardUnit = Math.abs(targetPrice - entryPrice);
        potReward = rewardUnit * posSize;
        rrRatio = (potReward / actualRiskAmount).toFixed(2);
      }
    }

    return {
      riskAmount: actualRiskAmount,
      stopDistance: stopDist,
      stopDistancePercent: stopDistPct,
      positionSize: posSize,
      notionalValue: notional,
      marginRequired: margin,
      rewardPerUnit: rewardUnit,
      potentialReward: potReward,
      riskToReward: rrRatio
    };
  }, [accountSize, riskType, riskPercent, riskFixed, direction, entryPrice, stopLoss, targetPrice, leverage]);

  // Contextual Warnings
  useEffect(() => {
    const newWarnings: string[] = [];
    
    if (riskType === "percent") {
      if (riskPercent > 2 && riskPercent <= 5) {
        newWarnings.push("High risk warning: Many disciplined traders study small fixed risk limits (0.5% - 2%).");
      } else if (riskPercent > 5) {
        newWarnings.push("Severe risk warning: This risk level can damage an account quickly during losing streaks.");
      }
    } else {
      const calculatedPct = (riskFixed / accountSize) * 100;
      if (calculatedPct > 5) newWarnings.push("Severe risk warning: Risking >5% of account per trade is extremely aggressive.");
    }

    if (results && results.stopDistancePercent < 0.5) {
      newWarnings.push("Very tight stop warning: Tight stops may be hit by normal crypto volatility.");
    }

    if (results && results.notionalValue > accountSize * 5) {
      newWarnings.push("Exposure warning: Notional position size is significantly larger than account size. Check liquidation risk.");
    }

    setWarnings(newWarnings);
  }, [results, riskType, riskPercent, riskFixed, accountSize]);

  const handleReset = () => {
    setAccountSize(1000);
    setRiskType("percent");
    setRiskPercent(1);
    setRiskFixed(10);
    setDirection("long");
    setEntryPrice(100);
    setStopLoss(95);
    setTargetPrice(115);
    setLeverage(1);
    setBuffer(0);
  };

  const copyToClipboard = () => {
    if (!results) return;
    const text = `
Yaga Calls Position Size Estimate:
- Account: $${accountSize}
- Risk: ${riskType === 'percent' ? riskPercent + '%' : '$' + riskFixed}
- Direction: ${direction.toUpperCase()}
- Entry: $${entryPrice}
- Stop-Loss: $${stopLoss}
- Target: $${targetPrice || 'N/A'}
---
- Est. Position Size: ${results.positionSize.toFixed(4)} units
- Notional Value: $${results.notionalValue.toFixed(2)}
- Risk Amount: $${results.riskAmount.toFixed(2)}
- R:R Ratio: 1:${results.riskToReward}
    `;
    navigator.clipboard.writeText(text.trim());
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* INPUT PANEL */}
      <div className="lg:col-span-7 space-y-6">
        <GlowCard className="p-6 md:p-8 border-line bg-background/50 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Account & Risk Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-line pb-4">
                <PieChart className="text-primary" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest text-text">Account & Risk</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Account Size ($)</label>
                  <input 
                    type="number" 
                    value={accountSize}
                    onChange={(e) => setAccountSize(Number(e.target.value))}
                    className="w-full bg-surface-deep border border-line rounded-xl px-4 py-3 text-sm font-bold focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Risk Type</label>
                  <div className="flex bg-surface-deep p-1 rounded-xl border border-line">
                    <button 
                      onClick={() => setRiskType("percent")}
                      className={`flex-1 py-2 text-[10px] font-black uppercase tracking-tight rounded-lg transition-all ${riskType === 'percent' ? 'bg-primary text-background' : 'text-text-muted hover:text-text'}`}
                    >
                      Percent
                    </button>
                    <button 
                      onClick={() => setRiskType("fixed")}
                      className={`flex-1 py-2 text-[10px] font-black uppercase tracking-tight rounded-lg transition-all ${riskType === 'fixed' ? 'bg-primary text-background' : 'text-text-muted hover:text-text'}`}
                    >
                      Fixed $
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                    {riskType === 'percent' ? 'Risk Per Trade (%)' : 'Fixed Risk Amount ($)'}
                  </label>
                  <input 
                    type="number" 
                    value={riskType === 'percent' ? riskPercent : riskFixed}
                    onChange={(e) => riskType === 'percent' ? setRiskPercent(Number(e.target.value)) : setRiskFixed(Number(e.target.value))}
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
                </div>
              </div>
            </div>

            {/* Trade Parameters Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-line pb-4">
                <Calculator className="text-primary" size={20} />
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
                </div>

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
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Target Price ($) — Optional</label>
                  <input 
                    type="number" 
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(Number(e.target.value))}
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
                  onClick={copyToClipboard}
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
            <h3 className="text-xl font-black uppercase tracking-tighter border-b border-line pb-6 text-center">Result Summary</h3>
            
            {!results ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-surface-deep rounded-full flex items-center justify-center mx-auto">
                  <HelpCircle className="text-text-muted" size={24} />
                </div>
                <p className="text-xs text-text-muted font-black uppercase tracking-widest">Awaiting valid inputs...</p>
                <p className="text-[10px] text-text-muted/60 uppercase tracking-tight">Check entry, stop-loss, and direction.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { l: "Risk Amount", v: `$${results.riskAmount.toFixed(2)}`, sub: `${riskType === 'percent' ? riskPercent : ((riskFixed / accountSize) * 100).toFixed(1)}% of account`, icon: <ShieldCheck className="text-primary" /> },
                    { l: "Stop Distance", v: `$${results.stopDistance.toFixed(2)}`, sub: `${results.stopDistancePercent.toFixed(2)}% move from entry`, icon: <TrendingDown className="text-danger" /> },
                    { l: "Est. Position Size", v: `${results.positionSize.toFixed(4)} Units`, sub: "Units of asset to buy/sell", highlight: true, icon: <Calculator className="text-primary" /> },
                    { l: "Notional Value", v: `$${results.notionalValue.toFixed(2)}`, sub: `Est. trade size with ${leverage}x leverage`, icon: <Zap className="text-warning" /> },
                    { l: "Margin Required", v: `$${results.marginRequired.toFixed(2)}`, sub: `Capital locked at ${leverage}x`, icon: <PieChart className="text-text-muted" /> },
                  ].map((row, i) => (
                    <div key={i} className={`p-5 rounded-2xl border ${row.highlight ? 'bg-primary/5 border-primary/20' : 'bg-surface-deep/30 border-line'} space-y-1 group`}>
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
                </div>

                {targetPrice > 0 && results.riskToReward !== "0.00" && (
                  <div className="p-6 bg-primary text-background rounded-3xl space-y-4 shadow-xl shadow-primary/10">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest">Risk-to-Reward</span>
                      <span className="text-2xl font-black">1 : {results.riskToReward}</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-background/20 pt-4">
                      <span className="text-[10px] font-black uppercase tracking-widest">Est. Potential Reward</span>
                      <span className="text-lg font-black">${results.potentialReward.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                <div className="pt-4 space-y-4">
                  <div className="p-4 bg-background border border-line rounded-2xl">
                    <p className="text-[10px] text-text-muted leading-relaxed italic uppercase tracking-tight text-center">
                      "With a ${accountSize} account and {results.riskAmount.toFixed(0)} risk, an entry at ${entryPrice} with a ${stopLoss} stop-loss requires an estimated {results.positionSize.toFixed(2)} units."
                    </p>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted/50 text-center">
                    Estimates only. Slippage, fees, and market gaps apply.
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
