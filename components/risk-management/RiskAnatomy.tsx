import Container from "../shared/Container";
import Section from "../shared/Section";
import { CheckCircle2, Target, ShieldAlert, Zap, Info, BarChart3, AlertTriangle } from "lucide-react";

export default function RiskAnatomy() {
  const parts = [
    { title: "Asset / Pair", desc: "Clear identification of the asset and trading pair.", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Market Reason", desc: "The narrative, catalyst, or technical reason behind the setup.", icon: <Info className="w-5 h-5" /> },
    { title: "Entry Zone", desc: "Where the setup makes sense, avoiding 'buy now' FOMO.", icon: <Target className="w-5 h-5" /> },
    { title: "Target Levels", desc: "Reaction zones for profit-taking or setup reassessment.", icon: <Zap className="w-5 h-5" /> },
    { title: "Invalidation", desc: "Where the original thesis is no longer valid.", icon: <ShieldAlert className="w-5 h-5" /> },
    { title: "Risk Note", desc: "Context on position sizing and market volatility.", icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              The Anatomy of a Risk-Managed Signal
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              A crypto signal without risk context is not a complete setup. Yaga Calls includes these core elements in every premium signal note.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parts.map((part, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-surface-deep border border-line hover:border-primary/40 transition-all space-y-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  {part.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold uppercase tracking-tight text-lg">{part.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{part.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12 bg-surface-deep border border-line rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Entry, Target, and Invalidation</h3>
                <p className="text-text-muted leading-relaxed">
                  These three markers form the skeleton of any serious signal. Entry shows where the trade starts. Targets show where it may be reviewed. Invalidation shows where discipline matters.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">1</div>
                    <p className="text-sm text-text-muted"><strong className="text-text">Entry Zone:</strong> Prevents chasing aggressive moves after the opportunity has passed.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">2</div>
                    <p className="text-sm text-text-muted"><strong className="text-text">Target Areas:</strong> Defined levels for partial profit-taking to secure gains.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">3</div>
                    <p className="text-sm text-text-muted"><strong className="text-text">Invalidation Point:</strong> The "exit door" where the trading idea is objectively wrong.</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-background border border-line rounded-3xl space-y-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-line pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Sample Signal Note</span>
                  <span className="text-[10px] text-text-muted uppercase font-bold">12:30 PM</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold uppercase text-text">#SOL / USDT</span>
                    <span className="text-xs font-bold text-primary uppercase">Long</span>
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed italic border-l border-line pl-3">
                    Narrative: Ecosystem Growth + Key Support Retest
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                      <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Entry Zone</p>
                      <p className="text-xs font-bold text-text">142.50 - 144.20</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Invalidation</p>
                      <p className="text-xs font-bold text-danger">138.80</p>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <p className="text-[8px] font-black uppercase tracking-widest text-text-muted">Targets</p>
                    <p className="text-xs font-bold text-primary">152.00 / 165.00 / 180.00+</p>
                  </div>
                  <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-[9px] text-primary font-bold italic">Note: High volatility expected around news release. Position size: 1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
