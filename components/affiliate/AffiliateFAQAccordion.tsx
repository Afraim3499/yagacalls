"use client";

import { useState } from "react";
import { affiliateFaqs } from "@/content/data/affiliateFaqs";

export default function AffiliateFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {affiliateFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-surface-deep border-primary/40 shadow-lg shadow-primary/5"
                : "bg-surface-deep/40 border-line hover:border-line/80"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-bold text-text-high leading-snug">
                {faq.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full border border-line flex items-center justify-center shrink-0 font-mono text-sm transition-transform duration-200 ${
                  isOpen ? "bg-primary text-background font-bold rotate-180" : "text-text-muted"
                }`}
              >
                ↓
              </span>
            </button>

            {isOpen && (
              <div className="px-5 md:px-6 pb-6 pt-2 text-xs md:text-sm text-text-muted leading-relaxed border-t border-line/40">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
