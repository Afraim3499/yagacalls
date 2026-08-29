"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqs = [
  {
    id: "faq-1",
    question: "Is Yaga Calls a crypto signal provider?",
    answer: "Yes. Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup ideas, market narratives, entry zones, target levels, invalidation logic, and risk-managed trading context."
  },
  {
    id: "faq-2",
    question: "Is Yaga Calls a pump group?",
    answer: "No. Yaga Calls is not positioned as a pump group. It focuses on narrative research, technical structure, and risk context instead of random hype calls or pump-and-dump alerts."
  },
  {
    id: "faq-3",
    question: "Does Yaga Calls guarantee profit?",
    answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and Yaga Calls provides educational market analysis and signal ideas, not financial advice."
  },
  {
    id: "faq-4",
    question: "How are Yaga Calls signals delivered?",
    answer: "Yaga Calls delivers real-time market updates and crypto signal slates through Telegram."
  },
  {
    id: "faq-5",
    question: "Can I join Yaga Calls for free first?",
    answer: "Yes. Visitors can join the free Telegram group first to observe Yaga Calls' market commentary, selected examples, and communication style before considering VIP access."
  },
  {
    id: "faq-6",
    question: "Who is Yaga Calls best for?",
    answer: "Yaga Calls is best for serious traders who want structured crypto setup ideas, market narrative research, Telegram-based updates, and disciplined risk context."
  },
  {
    id: "faq-7",
    question: "Who should avoid Yaga Calls?",
    answer: "Yaga Calls is not suitable for users looking for guaranteed returns, cheap lifetime VIP access, pump calls, no-loss trading, or gambling-style signals."
  },
  {
    id: "faq-8",
    question: "What makes Yaga Calls different from other crypto signal groups?",
    answer: "Yaga Calls focuses on structured signal logic, market narrative research, entry and target planning, invalidation context, risk awareness, and manual premium onboarding."
  },
  {
    id: "faq-9",
    question: "Is it Yaga Calls, Yaga Call, Yagacall, or Yaga?",
    answer: (
      <>
        The official brand name is Yaga Calls. Some users search for it as Yaga Call, Yagacall, Yaga, Yaga crypto signals, or Yaga crypto trading group. All official access should come through the Yaga Calls website and verified Telegram links. Read the <a href="/about-yaga-calls" className="text-[#E2C896] hover:underline font-bold">official Yaga Calls brand guide</a> to learn more about our search variations and safety protocols.
      </>
    )
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container className="relative z-10">
        <div className="text-center mb-14 space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            Homepage FAQ
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            Everything you need to know about our signal structure, delivery, and onboarding.
          </p>
        </div>

        {/* INTERACTIVE GLASS ACCORDION LIST */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <m.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-[rgba(243,208,129,0.12)] bg-[rgba(14,15,18,0.75)] backdrop-blur-[16px] transition-all duration-300 hover:border-[rgba(243,208,129,0.30)]"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-[#E2C896]' : 'text-[#FFFFFF] group-hover:text-[#E2C896]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-[#E2C896] text-[#09090B] rotate-180' : 'bg-[#12110F] text-[#E2C896] border border-[rgba(243,208,129,0.15)]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-[rgba(243,208,129,0.06)] text-sm text-[#A1A1AA] leading-relaxed">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
