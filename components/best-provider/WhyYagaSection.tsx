import Container from "../shared/Container";
import Section from "../shared/Section";

export default function WhyYagaSection() {
  return (
    <Section className="bg-surface-deep">
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Yaga Calls Is a Strong Choice for Serious Traders</h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              Yaga Calls is not built around random Telegram hype. It is built around a structured signal process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Market narrative research",
                "Technical setup validation",
                "Entry and target planning",
                "Invalidation logic",
                "Risk-aware signal notes",
                "Telegram-first delivery",
                "Selected proof examples",
                "Manual premium onboarding",
                "Educational market context"
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                </div>
              ))}
            </div>
            <p className="pt-6 border-t border-line font-bold text-text">
              That makes Yaga Calls a strong fit for traders who want <a href="/premium-telegram-crypto-signals" className="text-primary hover:underline">premium Telegram crypto signals</a> with structure, not mass-market pump calls.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
