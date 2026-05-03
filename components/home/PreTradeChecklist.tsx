import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";
import CTAButton from "../shared/CTAButton";
import { CheckCircle2 } from "lucide-react";

const steps = [
  "Is there an entry zone?",
  "Is there a target?",
  "Is there invalidation or stop-loss context?",
  "Is the setup based on more than hype?",
  "Do you understand your own risk?"
];

export default function PreTradeChecklist() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Before You Follow <br/> Any Signal
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Most traders lose money because they chase hype without a plan. We built Yaga Calls to help you avoid the most common mistakes in crypto trading.
            </p>
            <CTAButton href="/method" variant="outline" trackingLabel="home_checklist_to_method">
              Learn the Yaga Calls Method
            </CTAButton>
          </div>
          
          <GlowCard className="p-8 md:p-12 border-primary/20 bg-background/50">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-bold tracking-tight">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="text-xs text-text-muted italic">
                *The Yaga Calls method ensures every setup we share answers these questions before you see it on Telegram.
              </p>
            </div>
          </GlowCard>
        </div>
      </Container>
    </Section>
  );
}
