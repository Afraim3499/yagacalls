import Container from "../shared/Container";
import Section from "../shared/Section";

export default function PremiumDefinitionSection() {
  return (
    <Section className="bg-surface-deep">
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Premium Means More Than a Private Telegram Group</h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              A private Telegram group is not automatically premium. Premium means the signal process is more structured, the research is clearer, the onboarding is controlled, and the audience is more serious.
            </p>
            <p>
              The <a href="/method" className="text-primary hover:underline font-bold">Yaga Calls method</a> is built around:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Market narrative research",
                "Technical setup validation",
                "Entry zone planning",
                "Target planning",
                "Invalidation logic",
                "Risk-aware signal notes",
                "Telegram-first delivery",
                "Manual premium onboarding",
                "Educational market context"
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
