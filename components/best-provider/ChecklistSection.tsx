import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import { 
  Target, 
  ShieldAlert, 
  TrendingUp, 
  Zap, 
  Search, 
  BarChart3, 
  Send, 
  CheckCircle2, 
  XCircle 
} from "lucide-react";

export default function ChecklistSection() {
  const points = [
    {
      title: "1. Clear Entry Zones",
      desc: "A serious signal should not say only “buy this coin.” It should explain the entry zone or price area where the idea makes sense.",
      icon: Target
    },
    {
      title: "2. Target Planning",
      desc: "Traders need to know where a setup may take profit, reduce exposure, or reassess the idea.",
      icon: TrendingUp
    },
    {
      title: "3. Invalidation Logic",
      desc: "Every serious setup needs a point where the idea becomes wrong. Without invalidation, the signal becomes hope.",
      icon: ShieldAlert
    },
    {
      title: "4. Risk Context",
      desc: (
        <>
          A provider should help traders think about risk before upside. This involves position sizing and <a href='/crypto-signals-with-risk-management' className='text-primary hover:underline font-bold'>risk-managed crypto signals</a> planning.
        </>
      ),
      icon: BarChart3
    },
    {
      title: "5. Market Narrative Research",
      desc: "Crypto does not move on catalysts: sector rotation, ecosystem catalysts, whale behavior, listings, and liquidity shifts matter more than charts alone.",
      icon: Search
    },
    {
      title: "6. Technical Validation",
      desc: "Serious signal providers use technical structure, support/resistance, and liquidity zones to validate narrative ideas.",
      icon: Zap
    },
    {
      title: "7. Telegram Speed",
      desc: "Crypto markets move fast. Telegram is the most practical delivery channel for real-time signal notes and updates.",
      icon: Send
    },
    {
      title: "8. Transparent Examples",
      desc: "A provider should show selected examples and explain that past performance does not guarantee future results.",
      icon: CheckCircle2
    },
    {
      title: "9. No Guaranteed Profits",
      desc: "Any provider promising guaranteed profits should be treated carefully. Serious providers talk about risk and losses.",
      icon: XCircle
    }
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">9 Things the Best Crypto Signal Provider Should Have</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A crypto signal is not useful just because it names a coin. A useful signal gives traders enough context to understand the setup before they decide what to do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <GlowCard key={point.title} className="p-8 space-y-4">
              <point.icon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold uppercase tracking-tight">{point.title}</h3>
              <div className="text-sm text-text-muted leading-relaxed">{point.desc}</div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
