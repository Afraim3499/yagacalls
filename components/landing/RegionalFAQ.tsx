import React from 'react';
import { FAQItem } from '@/types/content';

interface RegionalFAQProps {
  faqs: FAQItem[];
  regionName?: string;
}

const RegionalFAQ: React.FC<RegionalFAQProps> = ({ faqs, regionName }) => {
  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter text-center">
            {regionName ? `${regionName} Trading FAQs` : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-black/40 border border-white/5 p-6 md:p-8 hover:border-amber-500/20 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 flex gap-4">
                  <span className="text-amber-500">Q:</span>
                  {faq.question}
                </h3>
                <div className="text-gray-400 leading-relaxed flex gap-4">
                  <span className="text-amber-500/50 font-bold">A:</span>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalFAQ;
