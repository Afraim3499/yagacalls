import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";

const reasons = [
  {
    title: "Clear Signal Structure",
    desc: "Setups are organized with entry logic, target zones, and risk context — not random hype posts."
  },
  {
    title: "Market Narrative Research",
    desc: "We track the stories, sectors, and catalysts moving crypto markets before they become obvious."
  },
  {
    title: "Risk-First Planning",
    desc: "Every serious setup needs invalidation, position sizing, and a plan for being wrong."
  },
  {
    title: "Telegram-First Delivery",
    desc: "Signals and updates are built for fast mobile reading inside Telegram."
  },
  {
    title: "Beginner-Friendly Education",
    desc: "Academy content helps newer traders understand entries, targets, stop loss, and risk."
  },
  {
    title: "Manual Premium Onboarding",
    desc: "Premium access is handled manually through Telegram so plan questions and payment instructions stay clear."
  }
];

export default function WhyJoin() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why traders join Yaga Calls</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We focus on professional-grade transparency, systematic research, and capital preservation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <GlowCard key={reason.title} className="p-8">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{reason.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{reason.desc}</p>
            </GlowCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
