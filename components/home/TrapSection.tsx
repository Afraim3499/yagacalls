import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import { AlertTriangle, Target } from "lucide-react";

export default function TrapSection() {
  return (
    <Section className="bg-primary/5">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Avoid the Signal Group Trap</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Many groups post calls after the move has already happened. Yaga Calls focuses on structure, narratives, and risk before the crowd gets loud.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <GlowCard className="p-8 border-danger/20 bg-danger/5">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-danger/20 flex items-center justify-center text-danger">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">The &ldquo;Hype&rdquo; Approach</h3>
            </div>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex gap-2">❌ <strong>Post-Move Signals:</strong> Calling coins after they&apos;ve already pumped 50%.</li>
              <li className="flex gap-2">❌ <strong>No Risk Context:</strong> Just a ticker name and a &ldquo;buy&rdquo; button.</li>
              <li className="flex gap-2">❌ <strong>Fake Urgency:</strong> &ldquo;Buy now or miss out!&rdquo; FOMO language.</li>
              <li className="flex gap-2">❌ <strong>Hidden Losses:</strong> Deleting bad calls and only showing wins.</li>
            </ul>
          </GlowCard>

          <GlowCard className="p-8 border-primary/20 bg-primary/5">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">The Yaga Calls Approach</h3>
            </div>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex gap-2">✅ <strong>Inflection Points:</strong> We enter before the breakout, not at the top.</li>
              <li className="flex gap-2">✅ <strong>Full Setup Logic:</strong> Every signal includes entry, targets, and invalidation.</li>
              <li className="flex gap-2">✅ <strong>Narrative Catalyst:</strong> We explain the &ldquo;Why&rdquo; behind every trade idea.</li>
              <li className="flex gap-2">✅ <strong>Transparent Tracking:</strong> We show historical examples, regardless of outcome.</li>
            </ul>
          </GlowCard>
        </div>
      </Container>
    </Section>
  );
}
