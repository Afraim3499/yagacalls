"use client";

import { useState, useMemo } from "react";
import GlowCard from "@/components/shared/GlowCard";
import { formatCurrency } from "@/lib/utils";

export default function ScenarioCalculator() {
  const [portfolio, setPortfolio] = useState(5000);
  const [positionSizePercent, setPositionSizePercent] = useState(2);

  const results = useMemo(() => {
    // Model assumptions (softened for compliance)
    const positionSize = (portfolio * positionSizePercent) / 100;
    
    // Performance modeling (using hypothetical baseline)
    const monthlySignals = 15; 
    const hypotheticalAvgReturn = 0.50; // 50% across setups (model only)
    
    const estimatedMonthlyGain = monthlySignals * positionSize * hypotheticalAvgReturn;
    const subscriptionCost = 200; 
    
    const recoveryDays = Math.round((subscriptionCost / (estimatedMonthlyGain || 1)) * 30);

    return {
      positionSize,
      estimatedMonthlyGain,
      recoveryDays
    };
  }, [portfolio, positionSizePercent]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <GlowCard className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-6">Scenario Modeling</h3>
          <p className="text-sm text-text-muted mb-8 leading-relaxed">
            Use this tool to estimate possible outcomes based on your own assumptions. It is not a prediction, guarantee, or financial advice.
          </p>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-bold text-sm uppercase tracking-wider text-text-muted">Trading Portfolio</label>
                <span className="text-primary font-black text-xl">{formatCurrency(portfolio)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={portfolio}
                onChange={(e) => setPortfolio(parseInt(e.target.value))}
                className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-text-muted uppercase font-bold">
                <span>$500</span>
                <span>$50,000</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-bold text-sm uppercase tracking-wider text-text-muted">Risk per Setup (%)</label>
                <span className="text-primary font-black text-xl">{positionSizePercent}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={positionSizePercent}
                onChange={(e) => setPositionSizePercent(parseFloat(e.target.value))}
                className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-text-muted uppercase font-bold">
                <span>0.5% (Safe)</span>
                <span>5% (Aggressive)</span>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>

      <div className="space-y-6">
        <GlowCard className="bg-primary/5 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Scenario Impact</div>
              <div className="text-2xl font-black text-primary">{formatCurrency(results.estimatedMonthlyGain)}</div>
              <div className="text-[10px] text-text-muted uppercase italic">Per Month (Hypothetical)</div>
            </div>
            <div className="md:border-l md:border-line md:pl-6">
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Fee Offset Estimate</div>
              <div className="text-2xl font-black text-text-high">{results.recoveryDays > 30 ? '> 30' : results.recoveryDays} Days</div>
              <div className="text-[10px] text-text-muted uppercase italic">Based on assumptions</div>
            </div>
          </div>
        </GlowCard>

        <div className="bg-surface-deep border border-line rounded-2xl p-6 space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider">Modeling Breakdown</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-text-muted">Portfolio Size</span>
              <span className="font-bold">{formatCurrency(portfolio)}</span>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-text-muted">Position Size</span>
              <span className="font-bold">{positionSizePercent}% ({formatCurrency(results.positionSize)})</span>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-text-muted">Model Signal Frequency</span>
              <span className="font-bold">~15 Setups / Month</span>
            </div>
            <div className="flex justify-between font-bold text-primary pt-2">
              <span>Total Hypothetical Scenario</span>
              <span>{formatCurrency(results.estimatedMonthlyGain)} / mo</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-surface border border-line rounded-xl text-[10px] text-text-muted leading-relaxed italic">
          <strong className="text-primary uppercase tracking-widest">Compliance Notice:</strong> This tool is for educational simulation only. Your actual trading results will differ based on market conditions, slippage, and execution. We do not guarantee profits. Past performance is not indicative of future results.
        </div>
      </div>
    </div>
  );
}
