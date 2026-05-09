import Container from "../shared/Container";
import Section from "../shared/Section";
import { Search, BarChart3, Droplets, Target, ShieldX, Map, ShieldCheck, Send } from "lucide-react";

export default function MethodFramework() {
  const steps = [
    { title: "Narrative Scan", desc: "Identifying the 'Why' behind the move (catalysts, sector rotation).", icon: <Search className="w-5 h-5" /> },
    { title: "Technical Structure", desc: "Validating the 'What' through trend, support, and volume.", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Liquidity Context", desc: "Checking market-wide risk appetite and BTC/ETH direction.", icon: <Droplets className="w-5 h-5" /> },
    { title: "Entry Zone", desc: "Defining the precise area where the setup becomes interesting.", icon: <Target className="w-5 h-5" /> },
    { title: "Invalidation", desc: "The point where the original setup idea no longer makes sense.", icon: <ShieldX className="w-5 h-5" /> },
    { title: "Target Planning", desc: "Mapping exit areas to reduce emotional reactions to volatility.", icon: <Map className="w-5 h-5" /> },
    { title: "Risk Context", desc: "Position sizing and survival planning come before upside.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Telegram Delivery", desc: "Fast, structured delivery of signal notes and follow-ups.", icon: <Send className="w-5 h-5" /> },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              The Yaga Calls Signal Framework
            </h2>
            <p className="text-text-muted leading-relaxed">
              Yaga Calls uses a structured research-to-delivery framework before a setup becomes a signal note. Each step exists to reduce random decision-making and ensure a disciplined approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-surface-deep border border-line hover:border-primary/40 transition-all space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-primary/40">STEP {i + 1}</span>
                    <h3 className="font-bold uppercase tracking-tight text-sm">{step.title}</h3>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
