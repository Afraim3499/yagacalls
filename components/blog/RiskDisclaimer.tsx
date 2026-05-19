import React from "react";
import { AlertTriangle } from "lucide-react";

export default function RiskDisclaimer() {
  return (
    <div className="mt-12 p-6 bg-surface-deep/30 border border-line rounded-2xl flex flex-col md:flex-row gap-4 items-start shadow-inner">
      <div className="bg-primary/10 text-primary p-3 rounded-xl font-black text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5 border border-primary/20">
        <AlertTriangle className="w-3.5 h-3.5" /> Disclaimer
      </div>
      <div className="text-xs text-text-muted leading-relaxed space-y-2">
        <p className="font-bold text-text-high uppercase tracking-tight">Educational & Informational Content Only</p>
        <p>
          All cryptocurrency signal recommendations, narrative analysis studies, timezone liquidity reports, stop-loss calculations, and market structure commentary published by Yaga Calls are intended strictly for educational and informational purposes only. This content does not under any circumstances constitute financial, investment, legal, or tax advice.
        </p>
        <p>
          Cryptocurrency asset markets are highly speculative, unregulated in many jurisdictions, and carry an extreme risk of financial loss, high volatility, and exchange-side liquidation. Past performance case studies (such as our historical SUI breakout setups) do not under any circumstances guarantee or predict future market results. Always implement proper position-sizing limits, never average down on a failing position, and never trade with capital you cannot afford to lose.
        </p>
      </div>
    </div>
  );
}
