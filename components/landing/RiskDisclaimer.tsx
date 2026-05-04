import React from 'react';

interface RiskDisclaimerProps {
  content: string;
}

const RiskDisclaimer: React.FC<RiskDisclaimerProps> = ({ content }) => {
  return (
    <section className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 border border-red-900/20 bg-red-950/5">
            <h4 className="text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-3">
              Mandatory Risk Disclosure
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed italic">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskDisclaimer;
