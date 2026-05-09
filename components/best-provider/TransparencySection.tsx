import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import CTAButton from "../shared/CTAButton";

const examples = [
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
    asset: "SOL/USDT",
    date: "2024-10-24",
    type: "Breakout Setup",
    entry: "$158 - $162",
    target: "$180",
    invalidation: "Below $150",
    status: "Completed"
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

export default function TransparencySection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Look for Proof, but Understand What Proof Means</h2>
          <div className="space-y-4 text-text-muted max-w-3xl mx-auto">
            <p>
              Proof matters, but it must be understood correctly. A serious crypto signal provider should show selected examples, timestamps, setup logic, entry and target context, and honest risk disclaimers.
            </p>
            <p>
              Proof should help users evaluate the provider&rsquo;s process, not create the illusion of guaranteed future profits. Yaga Calls publishes <a href="/proof" className="text-primary hover:underline">selected proof examples</a> and clearly states that they are educational snapshots, not guarantees of future results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {examples.map((ex, i) => (
            <GlowCard key={i} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl font-black tracking-tighter text-primary">{ex.asset}</span>
                  <span className="text-[10px] bg-surface-deep px-2 py-1 rounded font-bold uppercase tracking-widest text-text-muted">{ex.date}</span>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-text-muted uppercase tracking-widest text-[10px]">Type</span>
                    <span className="font-bold">{ex.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-text-muted uppercase tracking-widest text-[10px]">Entry Zone</span>
                    <span className="font-bold text-success">{ex.entry}</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-text-muted uppercase tracking-widest text-[10px]">Target Area</span>
                    <span className="font-bold text-primary">{ex.target}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted uppercase tracking-widest text-[10px]">Invalidation</span>
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

        <div className="text-center">
          <CTAButton href="/proof" variant="secondary" trackingLabel="best_provider_transparency_all">
            View Selected Proof Examples
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}
