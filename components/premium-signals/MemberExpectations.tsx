import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";

const expectations = [
  {
    title: "1. Clear Signal Structure",
    desc: "A premium signal should show the asset, entry zone, target levels, and invalidation context."
  },
  {
    title: "2. Market Reasoning",
    desc: "A signal should explain why the setup matters now. Is it a sector rotation? A catalyst? A technical breakout? A narrative shift?"
  },
  {
    title: "3. Risk Context",
    desc: "A signal should help traders think about downside. Without invalidation or risk context, a signal becomes a guess."
  },
  {
    title: "4. Follow-Up Updates",
    desc: "Crypto setups can change fast. Premium Telegram access should help users track major updates when market conditions change."
  },
  {
    title: "5. Cleaner Communication",
    desc: "Premium members should receive cleaner signal notes, not constant hype-based spam."
  },
  {
    title: "6. Manual Onboarding",
    desc: "Premium onboarding should be clear and controlled. Access is handled through plan confirmation and manual group entry."
  }
];

export default function MemberExpectations() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Serious Traders Should Expect</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A serious paid crypto signal service should not sell magic. It should provide structure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((ex, i) => (
            <GlowCard key={i} className="p-8 space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight">{ex.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{ex.desc}</p>
            </GlowCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
