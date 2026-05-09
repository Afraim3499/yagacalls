import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import CTAButton from "../shared/CTAButton";

const examples = [
  {
    asset: "SOL/USDT",
    date: "2024-10-24",
    type: "Breakout Setup",
    entry: "$158 - $162",
    target: "$180",
    invalidation: "Below $150",
    status: "Completed"
  },
  {
    asset: "BTC/USDT",
    date: "2024-11-05",
    type: "Narrative Long",
    entry: "$68,500",
    target: "$75,000+",
    invalidation: "Below $66,000",
    status: "Active"
  },
  {
    asset: "ETH/USDT",
    date: "2024-10-15",
    type: "Trend Reversal",
    entry: "$2,400",
    target: "$2,850",
    invalidation: "Below $2,250",
    status: "Completed"
  }
];

export default function ProofPreview() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Selected Signal Examples & Market Notes</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Yaga Calls publishes selected historical examples and educational snapshots to show how setups are structured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {examples.map((ex, i) => (
            <GlowCard key={i} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl font-black tracking-tighter text-primary">{ex.asset}</span>
                  <span className="text-[10px] bg-surface-deep px-2 py-1 rounded font-bold uppercase tracking-widest text-text-muted">{ex.date}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-xs border-b border-line pb-2">
                    <span className="text-text-muted uppercase tracking-widest">Type</span>
                    <span className="font-bold">{ex.type}</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-line pb-2">
                    <span className="text-text-muted uppercase tracking-widest">Entry Zone</span>
                    <span className="font-bold text-success">{ex.entry}</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-line pb-2">
                    <span className="text-text-muted uppercase tracking-widest">Target Area</span>
                    <span className="font-bold text-primary">{ex.target}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-muted uppercase tracking-widest">Invalidation</span>
                    <span className="font-bold text-danger">{ex.invalidation}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-line">
                <span className={`text-[10px] font-black uppercase tracking-widest ${ex.status === 'Completed' ? 'text-success' : 'text-primary'}`}>
                  {ex.status}
                </span>
                <a href="/proof" className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors underline">View Setup logic →</a>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="text-center space-y-8">
          <p className="text-xs text-text-muted italic max-w-2xl mx-auto leading-relaxed">
            These examples are not guarantees of future performance. They are used to show signal logic, market reasoning, and trade-planning structure. Past performance does not guarantee future results.
          </p>
          <CTAButton href="/proof" variant="secondary" trackingLabel="home_proof_preview_all">
            View Selected Signal Examples
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
