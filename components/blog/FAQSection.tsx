"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16 pt-12 border-t border-line">
      <div className="flex items-center gap-2 mb-8">
        <HelpCircle className="w-6 h-6 text-primary" />
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={cn(
                "border border-line rounded-2xl overflow-hidden transition-all duration-300",
                isOpen ? "bg-surface-deep/30 border-primary/30" : "bg-surface-deep/10"
              )}
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-text-high hover:text-primary transition-colors focus:outline-none"
              >
                <span className="text-base uppercase tracking-tight leading-snug">{faq.question}</span>
                <span className="shrink-0 text-primary p-1 bg-surface rounded-lg border border-line">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <div
                className={cn(
                  "transition-all duration-300 overflow-hidden",
                  isOpen ? "max-h-[500px] border-t border-line" : "max-h-0"
                )}
              >
                <div 
                  className="px-6 py-5 text-sm text-text-muted leading-relaxed prose prose-invert prose-amber max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
