import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function ManualOnboardingSteps() {
  const steps = [
    {
      title: "Step 1 — Review the Plans",
      content: "Check the pricing page and choose the access period that fits your commitment. Quarterly, Half-Yearly, or Yearly."
    },
    {
      title: "Step 2 — Message Telegram",
      content: "Use the official Telegram button from the Yaga Calls website. Do not trust random Telegram DMs or unofficial admins."
    },
    {
      title: "Step 3 — Confirm the Price",
      content: "Ask the team to confirm the current discounted onboarding price before payment."
    },
    {
      title: "Step 4 — Payment Instructions",
      content: "The team provides official payment instructions manually through Telegram."
    },
    {
      title: "Step 5 — Complete Payment",
      content: "Complete payment only after confirming the official details manually."
    },
    {
      title: "Step 6 — Receive Access",
      content: "After confirmation, you are manually added to the premium Telegram group."
    }
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How Manual Onboarding Works</h2>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold uppercase tracking-tight">{step.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <CTAButton href="https://t.me/yagacalls47" target="_blank" trackingLabel="contact_steps_start">
              Start Manual Onboarding
            </CTAButton>
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-line shadow-2xl bg-[#0a0a0a]">
            <Image 
              src="/onboarding-steps-v2.webp" 
              alt="Yaga Calls premium access onboarding steps through Telegram" 
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
