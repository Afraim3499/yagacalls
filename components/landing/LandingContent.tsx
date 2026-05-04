import React from 'react';

interface ContentSection {
  title: string;
  content: string;
}

interface LandingContentProps {
  sections: ContentSection[];
}

const LandingContent: React.FC<LandingContentProps> = ({ sections }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          {sections.map((section, idx) => (
            <div key={idx} className="group">
              <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter group-hover:text-amber-500 transition-colors">
                {section.title}
              </h2>
              <div className="text-lg md:text-xl text-gray-400 leading-relaxed space-y-4">
                {section.content.split('\n').map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingContent;
