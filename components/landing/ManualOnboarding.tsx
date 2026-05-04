import React from 'react';
import Link from 'next/link';

interface ManualOnboardingProps {
  content: string;
}

const ManualOnboarding: React.FC<ManualOnboardingProps> = ({ content }) => {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-amber-500/10 text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-amber-500/20">
            Exclusive Access
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
            Manual Telegram Onboarding
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            {content}
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <span className="w-8 h-[1px] bg-white/10" />
              How it works
              <span className="w-8 h-[1px] bg-white/10" />
            </div>
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                { step: "01", title: "Choose Plan", desc: "Select your preferred premium duration." },
                { step: "02", title: "Message Us", desc: "Send a direct message to our official Telegram contact." },
                { step: "03", title: "Instant Access", desc: "Get added manually after verification." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/5">
                  <div className="text-2xl font-black text-amber-500/50 mb-2">{item.step}</div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualOnboarding;
