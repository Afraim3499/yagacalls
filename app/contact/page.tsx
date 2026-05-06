import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import CTAButton from "@/components/shared/CTAButton";
import { ShieldCheck, CreditCard } from "lucide-react";

export const metadata = {
  title: "Contact Yaga Calls | Telegram Onboarding",
  description: "Contact Yaga Calls through Telegram for manual onboarding, plan questions, and premium crypto signal access.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-surface/30 pt-16 md:pt-24">
        <Container className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Get in Touch</h1>
          <p className="text-lg text-text-muted leading-relaxed">
            We prioritize high-quality communication. Whether you have a question about our methodology or need help with premium access, our team is available manually via Telegram.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto mb-20">
            <GlowCard className="p-8 md:p-12 bg-surface/50">
              <h2 className="text-2xl font-black mb-8 text-center uppercase tracking-tighter">How Onboarding Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Open Telegram", desc: "Click any CTA to open the official Yaga Calls contact." },
                  { step: "02", title: "Send Plan", desc: "Message us with your preferred subscription plan." },
                  { step: "03", title: "Confirm", desc: "We provide payment instructions and confirm availability." },
                  { step: "04", title: "Access", desc: "You are added to the VIP groups manually after verification." }
                ].map((item) => (
                  <div key={item.step} className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black mx-auto mb-4 text-xl">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <CTAButton href="https://t.me/yagacalls47" target="_blank" className="px-12 py-4" trackingLabel="contact_onboarding_start">
                  Start Manual Onboarding
                </CTAButton>
              </div>
            </GlowCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-surface p-6 rounded-2xl border border-line text-center">
              <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Availability</h4>
              <p className="text-xs text-text-muted">24/7 via Telegram</p>
            </div>
            <div className="bg-surface p-6 rounded-2xl border border-line text-center">
              <CreditCard className="w-6 h-6 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Payments</h4>
              <p className="text-xs text-text-muted">Crypto only (USDT/BTC/ETH)</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-10 text-center uppercase tracking-tighter">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Is onboarding automated?", a: "No. Premium onboarding is currently handled manually through Telegram. Message us with your preferred plan to begin." },
                { q: "Do I need a Telegram bot?", a: "No. You only need to message the official Yaga Calls Telegram contact. We do not use automated bots for signal delivery or support." },
                { q: "Is this financial advice?", a: "No. Yaga Calls shares educational market analysis and signal ideas. Crypto trading involves significant risk of loss." },
                { q: "How do I subscribe to premium signals?", a: "Simply DM us at @yagacalls47 on Telegram. We'll provide payment details and add you to the premium group manually after verification." },
                { q: "What payment methods do you accept?", a: "We strictly accept cryptocurrency payments (USDT, BTC, ETH, and SOL) to ensure fast and secure global onboarding." }
              ].map((faq, i) => (
                <details key={i} className="group bg-surface-deep border border-line rounded-xl overflow-hidden transition-all">
                  <summary className="p-6 cursor-pointer font-bold flex justify-between items-center group-open:text-primary transition-colors">
                    {faq.q}
                    <span className="group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
