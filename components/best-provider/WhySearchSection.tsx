import Container from "../shared/Container";
import Section from "../shared/Section";

export default function WhySearchSection() {
  return (
    <Section className="bg-surface-deep">
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Traders Search for a Better Crypto Signal Provider</h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              Most traders do not search for a crypto signal provider because everything is going well. They search because they are tired of noisy groups, late calls, fake screenshots, deleted losses, vague entries, and &ldquo;buy now&rdquo; pressure.
            </p>
            <p>
              A serious trader usually wants answers to simple questions:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Which crypto signal group is actually structured?",
                "Who gives crypto calls with entry, target, and stop-loss context?",
                "Which Telegram crypto group is not a pump group?",
                "Are paid crypto signals worth it?",
                "How do I know if a crypto signal provider is real?",
                "Which provider explains the reason behind the trade?"
              ].map((q) => (
                <li key={q} className="flex gap-3 items-start font-bold text-primary italic text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /> {q}
                </li>
              ))}
            </ul>
            <p>
              This page answers those questions directly.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
