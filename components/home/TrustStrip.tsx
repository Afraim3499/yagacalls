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
    <Section className="py-7 bg-[#0C0B09] border-y border-[rgba(243,208,129,0.08)] relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 bg-[#070605] px-3 py-1.5 rounded-full border border-[rgba(243,208,129,0.06)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2C896] animate-pulse" />
              <span className="text-[10px] md:text-xs font-black font-mono uppercase tracking-widest text-[#A1A1AA] whitespace-nowrap">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
