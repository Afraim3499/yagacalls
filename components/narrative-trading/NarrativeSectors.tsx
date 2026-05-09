import Container from "../shared/Container";
import Section from "../shared/Section";
import { Cpu, Globe, Zap, Coins, Layers, Layout, Gamepad2, Landmark, Bitcoin, TrendingUp } from "lucide-react";

export default function NarrativeSectors() {
  const sectors = [
    { name: "AI Tokens", icon: <Cpu className="w-5 h-5" />, desc: "Infrastructure, compute, and AI agents." },
    { name: "Solana Ecosystem", icon: <Zap className="w-5 h-5" />, desc: "High-velocity memes, DeFi, and apps." },
    { name: "RWA", icon: <Landmark className="w-5 h-5" />, desc: "Tokenized treasuries and institutional assets." },
    { name: "Layer 1s", icon: <Globe className="w-5 h-5" />, desc: "Emerging L1s with growing user liquidity." },
    { name: "ETH L2s", icon: <Layers className="w-5 h-5" />, desc: "Scaling solutions, rollups, and DeFi hubs." },
    { name: "Meme Coins", icon: <TrendingUp className="w-5 h-5" />, desc: "Attention-driven social velocity plays." },
    { name: "DeFi", icon: <Layout className="w-5 h-5" />, desc: "Yield, lending, and DEX innovation." },
    { name: "Gaming / Metaverse", icon: <Gamepad2 className="w-5 h-5" />, desc: "Web3 games and virtual ecosystem growth." },
    { name: "Bitcoin Ecosystem", icon: <Bitcoin className="w-5 h-5" />, desc: "L2s, Ordinals, and institutional BTC flow." },
    { name: "Exchange Listings", icon: <Coins className="w-5 h-5" />, desc: "Strategic listing catalysts and momentum." },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Narratives We Track
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Crypto narratives change over time. Yaga Calls identifies where attention is forming before a setup becomes obvious to the wider market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectors.map((sector, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-deep border border-line hover:border-primary/40 transition-all space-y-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  {sector.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold uppercase tracking-tight text-xs">{sector.name}</h3>
                  <p className="text-[10px] text-text-muted leading-relaxed">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12 bg-primary/5 border border-primary/20 rounded-[40px] text-center space-y-6">
            <p className="text-sm font-black uppercase tracking-widest text-primary">Narrative strength does not guarantee price movement.</p>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed italic">
              "A strong narrative tells us what to watch. Technical structure, entry zones, and invalidation tell us whether to act. Yaga Calls never relies on a story alone."
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
