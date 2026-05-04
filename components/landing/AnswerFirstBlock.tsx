import React from 'react';

interface AnswerFirstBlockProps {
  content: string;
}

const AnswerFirstBlock: React.FC<AnswerFirstBlockProps> = ({ content }) => {
  return (
    <section className="py-12 bg-white/5 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 border border-amber-500/20 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
            <p className="text-xl md:text-3xl font-bold text-white leading-relaxed italic">
              &quot;{content}&quot;
            </p>
            <div className="mt-6 flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-widest">
              <span>Verified Methodology</span>
              <div className="w-12 h-[1px] bg-amber-500/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerFirstBlock;
