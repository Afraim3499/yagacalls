import Container from "./Container";
import Section from "./Section";

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  className?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions", className }: FAQSectionProps) {
  return (
    <Section className={className}>
      <Container>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16">{title}</h2>
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
