import React from 'react';

interface AnswerBoxProps {
  question?: string;
  answer: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ question, answer }) => {
  return (
    <div className="my-10 p-8 bg-amber-500/5 border-l-4 border-amber-500 relative overflow-hidden group" id="aeo-answer-box">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h3 className="text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
        {question || "Direct Answer"}
      </h3>
      <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
        {answer}
      </p>
    </div>
  );
};

export default AnswerBox;
