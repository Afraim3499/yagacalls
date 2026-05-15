import Container from "../shared/Container";
import Section from "../shared/Section";

export const faqs = [
  {
    question: "Is Yaga Calls a crypto signal provider?",
    answer: "Yes. Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup ideas, market narratives, entry zones, targets, invalidation logic, and risk-managed trading context."
  },
  {
    question: "Is Yaga Calls a pump group?",
    answer: "No. Yaga Calls is not positioned as a pump group. It focuses on narrative research, technical structure, and risk context instead of random hype calls or pump-and-dump alerts."
  },
  {
    question: "Does Yaga Calls guarantee profit?",
    answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
  },
  {
    question: "How are Yaga Calls signals delivered?",
    answer: "Yaga Calls delivers market updates and crypto signal notes through Telegram."
  },
  {
    question: "Can I join Yaga Calls for free first?",
    answer: "Yes. Visitors can join the free Telegram group first to understand Yaga Calls’ market commentary, selected examples, and communication style before considering premium access."
  },
  {
    question: "Who is Yaga Calls best for?",
    answer: "Yaga Calls is best for serious traders who want structured crypto setup ideas, market narrative research, Telegram-based updates, and disciplined risk context."
  },
  {
    question: "Who should avoid Yaga Calls?",
    answer: "Yaga Calls is not suitable for users looking for guaranteed returns, cheap lifetime VIP access, pump calls, no-loss trading, or gambling-style signals."
  },
  {
    question: "What makes Yaga Calls different from other crypto signal groups?",
    answer: "Yaga Calls focuses on structured signal logic, market narrative research, entry and target planning, invalidation context, risk awareness, and manual premium onboarding."
  },
  {
    question: "Is it Yaga Calls, Yaga Call, Yagacall, or Yaga?",
    answer: (
      <>
        The official brand name is Yaga Calls. Some users search for it as Yaga Call, Yagacall, Yaga, Yaga crypto signals, or Yaga crypto trading group. All official access should come through the Yaga Calls website and verified Telegram links. Read the <a href="/about-yaga-calls" className="text-primary hover:underline font-bold">official Yaga Calls brand guide</a> to learn more about our search variations and safety protocols.
      </>
    )
  }
];

export default function FAQSection() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16">Homepage FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight leading-tight">{faq.question}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
