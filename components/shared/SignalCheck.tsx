import GlowCard from "../shared/GlowCard";
import { CheckCircle2 } from "lucide-react";

export default function SignalCheck() {
  const items = [
    { title: "Entry Zone", desc: "Is there a specific price range or just a 'buy' command?" },
    { title: "Target Zone", desc: "Is there a clear plan for where to take profits?" },
    { title: "Invalidation", desc: "Is there a stop-loss point where the trade is proven wrong?" },
    { title: "Risk Context", desc: "Do you know how much of your account is at risk?" },
    { title: "Narrative Reason", desc: "Is there a catalyst or just 'trust me' hype?" },
    { title: "Market Condition", desc: "Does the setup match the current market regime?" }
  ];

  return (
    <GlowCard className="p-8 md:p-12 border-primary/20 bg-background/50">
      <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">The 5-Minute Signal Check</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-tight mb-1">{item.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </GlowCard>
  );
}
