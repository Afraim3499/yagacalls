import React from "react";
import { ShieldCheck, Target, AlertTriangle, ArrowRight, Percent, CheckCircle2, DollarSign, Award, Eye } from "lucide-react";

export default function CryptoSignalsForBeginners() {
  return (
    <div className="space-y-16 text-sm text-text-muted">
      
      {/* 1. Executive Summary Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Beginner Syllabus</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              A Math-First Framework for New Market Entrants
            </h2>
          </div>
          <p className="leading-relaxed">
            Entering the 24/7 cryptocurrency market as a beginner can be overwhelming. A high-quality signal group serves as an educational shortcut, allowing you to observe how seasoned analysts identify setups and manage risk. But executing signals without a mechanical understanding of their parameters or ignoring position-sizing rules is a guaranteed way to lose capital.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong className="text-text-high">The Beginner Mandate:</strong> A signal is not a financial lottery tickets. It is a highly structured, probability-based trading blueprint with strict, pre-calculated boundaries.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 bg-surface-deep border border-line rounded-3xl space-y-4 flex flex-col justify-between">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <Award className="w-4 h-4" /> Beginner Safety checklist
          </h3>
          <div className="space-y-3">
            {[
              "Avoid leverage entirely until spot-consistent for 6 months",
              "Never allocate more than 1.5% portfolio risk per trade",
              "Execute entry parameters strictly via Limit Orders",
              "Spend first 10 days paper trading to practice executions",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-line pt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted">
            <span>Syllabus Level</span>
            <span className="text-primary">Lvl 1 - Foundation</span>
          </div>
        </div>
      </section>

      {/* 2. Decoding the Signal Parameters (Side-by-Side) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 p-6 md:p-8 bg-surface-deep border border-line rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <div className="flex justify-between items-center border-b border-line pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Sample Beginner Signal</span>
            <span className="text-[10px] text-text-muted uppercase font-bold">ETH/USDT (Spot Only)</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold uppercase tracking-tight text-text-high">#ETH / USDT</span>
              <span className="text-xs font-black bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded uppercase font-mono">SPOT LONG</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 border-b border-line pb-4">
              <div className="space-y-1">
                <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Entry Range (Accumulation)</p>
                <p className="text-xs font-bold text-text-high font-mono">$3,120 - $3,150</p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Invalidation Level</p>
                <p className="text-xs font-bold text-danger font-mono">$2,980 (Stop-Loss)</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Tiered Exit Targets</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 bg-background border border-line rounded text-center">
                  <p className="text-[7px] text-text-muted font-bold uppercase">TP1 (50%)</p>
                  <p className="text-xs font-mono font-bold text-primary">$3,400</p>
                </div>
                <div className="p-2 bg-background border border-line rounded text-center">
                  <p className="text-[7px] text-text-muted font-bold uppercase">TP2 (25%)</p>
                  <p className="text-xs font-mono font-bold text-primary">$3,600</p>
                </div>
                <div className="p-2 bg-background border border-line rounded text-center">
                  <p className="text-[7px] text-text-muted font-bold uppercase">TP3 (25%)</p>
                  <p className="text-xs font-mono font-bold text-primary">$3,800</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Parameter Anatomy</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high">
              How to Read and Execute the Setup
            </h2>
          </div>
          <div className="space-y-4 text-xs font-medium">
            <div className="p-4 bg-surface-deep border border-line rounded-2xl space-y-1.5">
              <h4 className="font-bold text-text-high uppercase tracking-wider text-[10px] text-primary flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> 1. The Entry range limit
              </h4>
              <p className="text-text-muted leading-relaxed">
                Never chase a signal if the price is already trading above the entry zone. Buying a pumped asset is called FOMO, which ruins your risk-to-reward ratio and exposes you to severe liquidations.
              </p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl space-y-1.5">
              <h4 className="font-bold text-text-high uppercase tracking-wider text-[10px] text-primary flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> 2. Non-negotiable Stop-Loss
              </h4>
              <p className="text-text-muted leading-relaxed">
                The stop-loss ($2,980) represents your portfolio insurance policy. If the asset falls to this level, your exchange sells it automatically to prevent irreversible, compounding capital losses.
              </p>
            </div>
            <div className="p-4 bg-surface-deep border border-line rounded-2xl space-y-1.5">
              <h4 className="font-bold text-text-high uppercase tracking-wider text-[10px] text-primary flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5" /> 3. Tiered Take-Profits
              </h4>
              <p className="text-text-muted leading-relaxed">
                Sell 50% of your position at TP1 and immediately adjust your stop-loss order to your entry price ($3,135). This locks in profit and creates a completely risk-free open position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Position Sizing Math Callout */}
      <section className="p-6 md:p-8 bg-surface-deep border border-primary/20 rounded-[32px] space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
        <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
          <Percent className="w-4 h-4" /> Position Sizing Calculator Walkthrough
        </h3>
        <p className="leading-relaxed">
          The absolute fastest way a beginner blows their trading account is by "over-allocating"—putting their entire account balance or using extreme leverage on a single trade. In crypto, you must mathematically calculate the size of every trade to protect your purchasing power.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          <div className="p-5 bg-background border border-line rounded-2xl space-y-2 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">1. Account Sizing</span>
            <p className="font-bold text-sm text-text-high uppercase">Define Portfolio Risk</p>
            <p className="text-xs text-text-muted leading-relaxed">If starting capital is $5,000, risking 1.5% limits your maximum allowed loss on a failed trade to exactly $75.</p>
          </div>
          <div className="p-5 bg-background border border-line rounded-2xl space-y-2 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">2. Chart Sizing</span>
            <p className="font-bold text-sm text-text-high uppercase">Measure Technical Distance</p>
            <p className="text-xs text-text-muted leading-relaxed">With an entry price at $1.00 and stop-loss set at $0.90, the technical invalidation distance is exactly 10%.</p>
          </div>
          <div className="p-5 bg-background border border-line rounded-2xl space-y-2 text-center border-primary/20 relative group-hover:border-primary/40 transition-colors">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">3. Math Execution</span>
            <p className="font-bold text-sm text-primary uppercase">Find Position Allocation</p>
            <p className="text-xs text-text-muted font-mono font-bold pt-1">$75 Dollar Risk / 10% Distance = $750 Size</p>
            <p className="text-[10px] text-text-muted leading-relaxed pt-1">Allocate $750 of capital to buy tokens. If stopped, you sell for $675, losing exactly $75 (1.5% account impact).</p>
          </div>
        </div>
      </section>

      {/* 4. Common Beginner Traps Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Psychological Pitfalls</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
            Three Critical Traps Beginners Must Avoid
          </h2>
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            Trading success is determined by emotional discipline, not just technical calculations. Auditing your behavior prevents these three common traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Moving the Stop-Loss Lower</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              When a trade moves negative, beginners panic and hope. They lower their stop-loss to "give it room." This emotional reactions is fatal, turning a pre-calculated minor loss into a catastrophic portfolio drawdown.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">Revenge Trading After Loss</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              After a trade hits stop-loss, beginners feel a strong desire to "make it back" immediately. They force new, uncalculated trades on high leverage. If a trade is stopped, close your app and wait for the next structural setup.
            </p>
          </div>

          <div className="p-6 bg-surface-deep border border-line rounded-2xl space-y-4 hover:border-primary/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-bold uppercase tracking-tight text-text-high text-sm">FOMO Peak Chasing</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              When an asset breaks out and green candles rally, beginners experience FOMO. They buy at peak prices. This is the exact moment professional swing traders scale out and take profits, leaving retail buyers holding the bag.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Actionable Onboarding Protocol */}
      <section className="p-6 bg-surface-deep border border-line rounded-3xl space-y-6">
        <h3 className="font-black uppercase tracking-widest text-xs text-primary">
          Your Onboarding Protocol: 4 Steps to Sustainable Execution
        </h3>
        <div className="space-y-4">
          {[
            { title: "Connect with our Human Support Desk", text: "To join our premium Telegram network, message our verified onboard handle (@yagacalls47). We verify your trading experience and exchange setups." },
            { title: "Review Position Sizing Spreadsheets", text: "We walk you through our risk-management templates to ensure you understand how to align stop-loss distance with portfolio balances." },
            { title: "Practice with Limit Orders Only", text: "Commit to using limit-order entries to accumulate positions systematically within designated ranges without chasing pumps." },
            { title: "Perform a 10-Day Paper Trading Audit", text: "Test the delivery speed, Practice calculating position sizing, and observe exiting timing using simulated trades before risking real capital." },
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
