import Container from "../shared/Container";
import Section from "../shared/Section";

const badges = [
  "Telegram-first delivery",
  "Narrative-driven research",
  "Entry, target & invalidation context",
  "Manual premium onboarding",
  "Risk-managed setup notes"
];

export default function TrustStrip() {
  return (
    <Section className="py-8 bg-surface-deep border-y border-line">
      <Container>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-text-muted whitespace-nowrap">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
