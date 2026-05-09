import Container from "../shared/Container";
import Section from "../shared/Section";

export default function DiscountExplanation() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Is Yaga Calls Offering Discounted Onboarding Pricing?</h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              Yaga Calls is offering reduced onboarding pricing to allow serious traders to enter premium access at a lower commitment level before future pricing updates.
            </p>
            <p>
              This is not a cheap lifetime VIP offer. It is a controlled onboarding discount for traders who want to evaluate Yaga Calls&apos; premium Telegram structure, market narrative research, and risk-aware setup notes.
            </p>
            <div className="p-8 bg-surface-deep border border-line rounded-2xl">
              <p className="font-bold text-text italic">
                The discount is designed to reward early serious members while keeping the group focused and controlled.
              </p>
              <p className="mt-4 text-primary font-black uppercase tracking-widest text-sm">
                The price is discounted. The positioning is still premium.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
