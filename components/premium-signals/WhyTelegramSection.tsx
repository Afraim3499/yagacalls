import Container from "../shared/Container";
import Section from "../shared/Section";
import { Zap, Smartphone, Send, Layout } from "lucide-react";

export default function WhyTelegramSection() {
  const benefits = [
    { icon: Zap, text: "Fast enough for volatile moves" },
    { icon: Smartphone, text: "Mobile-first setup alerts" },
    { icon: Send, text: "Simple delivery of market notes" },
    { icon: Layout, text: "Structured signal formatting" }
  ];

  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Crypto Moves Fast. Telegram Matches the Speed.</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                Crypto markets move quickly. Narratives rotate fast. Price levels can change in minutes. Traders need updates in a format that is fast, simple, and mobile-friendly.
              </p>
              <p>
                That is why Telegram remains one of the most practical channels for crypto signal communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-surface border border-line rounded-xl">
                    <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-tight">{b.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm border-t border-line pt-6">
                But speed alone is not enough. A fast signal without structure can be dangerous. A serious Telegram signal channel must combine speed with research, risk context, and clear communication.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-500" />
            <div className="relative bg-surface border border-line rounded-[40px] p-8 shadow-2xl overflow-hidden aspect-[4/5] flex flex-col">
              {/* Mock Telegram UI */}
              <div className="flex items-center gap-4 border-b border-line pb-6 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">YC</div>
                <div>
                  <div className="font-bold">Yaga Calls [Premium]</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-widest">3,500+ members</div>
                </div>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="p-4 bg-surface-deep border border-line rounded-2xl rounded-tl-none max-w-[85%] space-y-3">
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest">Signal Update</div>
                  <div className="font-bold text-xl tracking-tighter">BTC/USDT Long</div>
                  <div className="space-y-1 text-[11px] font-mono text-text-muted">
                    <div>ENTRY: $68,400 - $69,200</div>
                    <div>TARGET: $75,000</div>
                    <div>INVALIDATION: Below $66,000</div>
                  </div>
                  <div className="pt-2 text-[10px] text-text-muted italic leading-tight">
                    Rationale: Sector rotation into majors + technical breakout of HTF resistance...
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-line text-center">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Structured Signal Logic</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
