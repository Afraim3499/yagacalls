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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">Why Serious Traders Follow Yaga Calls</h2>
            <div className="space-y-4 text-lg text-text-muted leading-relaxed">
              <p>
                Most crypto signal groups only tell people what to buy. That is not enough.
              </p>
              <p>
                A serious trader needs more context before entering a position. The important questions are:
              </p>
              <ul className="space-y-3">
                {[
                  "Why does this setup matter now?",
                  "What is the entry zone?",
                  "Where is the invalidation?",
                  "What are the target levels?",
                  "What market narrative supports the move?",
                  "What risk is being taken?",
                  "What happens if the setup fails?"
                ].map((q) => (
                  <li key={q} className="flex gap-3 items-center font-bold text-primary italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-text-muted leading-relaxed">
              Yaga Calls is built around that structure. The goal is not to flood members with random alerts. The goal is to help traders follow cleaner market ideas with stronger context and better discipline.
            </p>
            <div className="p-8 bg-surface border border-line rounded-3xl">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Structured for Discipline</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The <a href="/method" className="text-primary hover:underline font-bold">Yaga Calls method</a> ensures we identify the narrative first, then the technical structure, then the risk parameters. Only then is a signal shared on Telegram.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
