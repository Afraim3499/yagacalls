import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";

export default function FinalContactCTA() {
  return (
    <Section className="py-24 bg-surface">
      <Container className="max-w-4xl text-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Ready to Start?</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              If you are serious about premium access, message the official Telegram contact and mention your preferred plan.
            </p>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              If you are still evaluating Yaga Calls, join the free Telegram group first and observe the market notes, <a href="/proof" className="text-primary hover:underline font-bold">selected proof examples</a>, and communication style.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="contact_final_start">
              Start Manual Onboarding
            </CTAButton>
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" variant="secondary" target="_blank" trackingLabel="contact_final_free">
              Join Free Telegram First
            </CTAButton>
          </div>
          <p className="text-sm">
            <a href="/pricing" className="text-text-muted hover:text-primary transition-colors uppercase tracking-widest font-black">
              Compare Premium Plans
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
