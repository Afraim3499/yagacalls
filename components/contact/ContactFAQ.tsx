import Container from "../shared/Container";
import Section from "../shared/Section";

interface FAQ {
  question: string;
  answer: string;
}

export default function ContactFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <Section className="bg-surface-deep">
      <Container className="max-w-4xl">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-surface border border-line rounded-3xl overflow-hidden transition-all duration-300">
                <summary className="p-8 cursor-pointer font-black flex justify-between items-center group-open:text-primary transition-colors text-lg uppercase tracking-tighter">
                  {faq.question}
                  <span className="group-open:rotate-180 transition-transform duration-300 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary">
                    ↓
                  </span>
                </summary>
                <div className="px-8 pb-8 text-text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
