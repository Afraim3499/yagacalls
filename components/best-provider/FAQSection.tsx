import Container from "../shared/Container";
import Section from "../shared/Section";

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16">Guide FAQ</h2>
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
