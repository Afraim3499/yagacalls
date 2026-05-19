import React from "react";
import { ShieldCheck, Target, AlertTriangle, ArrowRight, Percent, CheckCircle2, TrendingDown, BookOpen, Scale } from "lucide-react";

export default function WhyStopLossMatters() {
  return (
    <div className="space-y-16 text-sm text-text-muted">
      
      {/* 1. Executive Summary Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Survival Mandate</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              Capital Preservation as a Non-Negotiable Strategy
            </h2>
          </div>
          <p className="leading-relaxed">
            In the high-energy world of cryptocurrency swing trading, retail participants focus almost entirely on one variable: potential profit. But professional market participants understand a harder truth: survival is the first and most critical step to profitability. In a 24/7 market that operates without traditional exchange-side trading halts, a protective, non-negotiable stop-loss is your only defense against sudden market liquidations.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong className="text-text-high">The Protective Rule:</strong> A stop-loss completely removes human emotion, hope, and hesitation from the exit execution process, automating your downside parameters.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <TrendingDown className="w-4 h-4" /> Drawdown Protection Check
          </h3>
          <div className="space-y-3">
            {[
              "Automated execution to completely bypass human hope",
              "Protection against flash-crash timezone liquidations",
              "Pre-calculated dollar loss boundaries for every setup",
              "Strict mathematical containment of drawdown percentages",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-line pt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted">
            <span>Risk Framework</span>
            <span className="text-primary">Capital Shield</span>
          </div>
        </div>
      </section>

      {/* 2. Exponential Recovery Ledger (Beautiful Dashboard Table) */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Portfolio Mathematics</span>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-text-high font-sans">
            The Exponential Recovery Math Matrix
          </h2>
          <p className="text-xs text-text-muted leading-relaxed">
            When you lose capital, the percentage gain required to recover to your original starting balance does not increase linearly—it increases <strong>exponentially</strong>. Look at the stark mathematical reality:
          </p>
        </div>

        <div className="border border-line rounded-2xl overflow-hidden bg-surface-deep/30 shadow-xl">
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full text-xs text-text-muted">
              <thead>
                <tr className="bg-surface-deep border-b border-line">
                  <th className="px-5 py-4 text-left text-primary font-black uppercase tracking-wider">Account Drawdown</th>
                  <th className="px-5 py-4 text-left text-primary font-black uppercase tracking-wider">Gain Required to Break Even</th>
                  <th className="px-5 py-4 text-left text-primary font-black uppercase tracking-wider">The Professional Assessment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line hover:bg-surface-deep/10 transition-colors">
                  <td className="px-5 py-4 font-bold text-text-high font-mono">5% Loss</td>
                  <td className="px-5 py-4 font-mono font-bold text-primary">5.3% Gain</td>
                  <td className="px-5 py-4 leading-relaxed">Negligible impact. Easily recovered in a single standard swing setup.</td>
                </tr>
                <tr className="border-b border-line bg-surface-deep/30 hover:bg-surface-deep/10 transition-colors">
                  <td className="px-5 py-4 font-bold text-text-high font-mono">10% Loss</td>
                  <td className="px-5 py-4 font-mono font-bold text-primary">11.1% Gain</td>
                  <td className="px-5 py-4 leading-relaxed">Standard operational drawdown. Fully recovered within 1 to 2 clean trades.</td>
                </tr>
                <tr className="border-b border-line hover:bg-surface-deep/10 transition-colors">
                  <td className="px-5 py-4 font-bold text-text-high font-mono">20% Loss</td>
                  <td className="px-5 py-4 font-mono font-bold text-primary">25% Gain</td>
                  <td className="px-5 py-4 leading-relaxed">Requires a significant string of high-conviction setups to rebuild balance.</td>
                </tr>
                <tr className="border-b border-line bg-surface-deep/30 hover:bg-surface-deep/10 transition-colors">
                  <td className="px-5 py-4 font-bold text-text-high font-mono">50% Loss</td>
                  <td className="px-5 py-4 font-mono font-bold text-danger">100% Gain</td>
                  <td className="px-5 py-4 leading-relaxed">Extreme damage. Requires doubling your remaining portfolio just to get back to zero.</td>
                </tr>
                <tr className="hover:bg-surface-deep/10 transition-colors">
                  <td className="px-5 py-4 font-bold text-danger font-mono">80% Loss</td>
                  <td className="px-5 py-4 font-mono font-bold text-danger">400% Gain</td>
                  <td className="px-5 py-4 leading-relaxed">Catastrophic ruin. Mathematically impossible to recover under standard risk rules.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs leading-relaxed italic text-text-muted">
          As this table clearly demonstrates, if you use a strict stop-loss and limit your trade risk to 1.5%, a string of three consecutive stopped-out trades only draws down your account by 4.5%. Rebounds to break-even require a minor 4.7% gain. But if you ignore your stop-loss and allow a single bad trade to run until your account is down 50%, you now require a massive 100% gain just to get back to your starting point.
        </p>
      </section>

      {/* 3. Whipsaw vs. Invalidation (Comparative Cards Grid) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Stop-Loss Strategy</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
            Whipsaw vs. Logical Technical Invalidation
          </h2>
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            Setting stop-losses requires understanding technical invalidation zones rather than using random dollar figures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column A: Panic/Arbitrary (Red styled) */}
          <div className="p-6 bg-surface-deep border border-danger/20 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-danger/50" />
            <h3 className="text-sm font-black uppercase tracking-widest text-danger flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Whipsaw & Panic Selling
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Arbitrary Percentages</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Placing a stop-loss at a random level (e.g. exactly 2% below your entry) without looking at structural support blocks.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Sweeping Liquidity pools</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Admins placing stop-losses inside active consolidation ranges where market makers sweep orders before major runs.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Arbitrary Exit Panic</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Selling manually in a panic during a standard volatility dip, right before the price rebounds back to targets.
                </p>
              </div>
            </div>
          </div>

          {/* Column B: Invalidation/Logical (Gold styled) */}
          <div className="p-6 bg-surface-deep border border-primary/20 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/50" />
            <h3 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Logical Invalidation
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Structural Boundaries</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Placing stop-losses just below the key structural support levels or range low boundaries where the trade thesis is invalid.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Breakout Support Tests</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Validating that the former resistance successfully retests as new support, defining the strict invalidation boundary.
                </p>
              </div>
              <div className="p-4 bg-background border border-line rounded-2xl space-y-2">
                <h4 className="font-bold text-text-high text-xs uppercase tracking-wider">Disciplined System exit</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Letting the exchange automatically execute the stop-loss order to guarantee disciplined capital protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Actionable Capital Preservation Checklist */}
      <section className="p-6 bg-surface-deep border border-line rounded-3xl space-y-6">
        <h3 className="font-black uppercase tracking-widest text-xs text-primary">
          Your Preservation Protocol: 4 Steps to Risk Containment
        </h3>
        <div className="space-y-4">
          {[
            { title: "Define the logical structural boundaries", text: "Before entering any trade, identify the precise range high or support level where your breakout thesis is mathematically false." },
            { title: "Set limit orders inside entry zones", text: "Avoid chasing breakout peaks. Set limit orders systematically within designated ranges to maintain tight stop-loss distances." },
            { title: "Calculate the exact Position sizing", text: "Ensure the distance to your stop-loss matches your allowed dollar risk, keeping portfolio exposure restricted to 1-1.5% per trade." },
            { title: "Adjust stop-losses to break-even", text: "Once the price reaches your first take-profit target, sell 50% of your position and move your stop-loss order to your entry price." },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text-high uppercase tracking-tight text-xs">{step.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
