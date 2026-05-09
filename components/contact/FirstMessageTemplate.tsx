"use client";

import Container from "../shared/Container";
import Section from "../shared/Section";

export default function FirstMessageTemplate() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Should I Send First?</h2>
            <p className="text-lg text-text-muted leading-relaxed">
              To make onboarding faster, send a clear message instead of only saying "hi." A clear first message helps the team understand your intent, confirm the correct plan, and avoid unnecessary back-and-forth.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-3xl border border-line space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />
            <h3 className="text-sm font-black uppercase tracking-widest text-primary">Recommended Template</h3>
            <div className="space-y-4 font-mono text-sm leading-relaxed">
              <p>Hi Yaga Calls team, I want to start onboarding.</p>
              <p>Plan: [Quarterly / Half-Yearly / Yearly]</p>
              <p>Region/timezone: [Your region]</p>
              <p>Trading experience: [Beginner / Intermediate / Advanced]</p>
              <p>I understand crypto trading involves risk.</p>
              <p>Please confirm current pricing and payment instructions.</p>
            </div>
            <button 
              onClick={() => navigator.clipboard.writeText(`Hi Yaga Calls team, I want to start onboarding.\nPlan: [Quarterly / Half-Yearly / Yearly]\nRegion/timezone: [Your region]\nTrading experience: [Beginner / Intermediate / Advanced]\nI understand crypto trading involves risk.\nPlease confirm current pricing and payment instructions.`)}
              className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
