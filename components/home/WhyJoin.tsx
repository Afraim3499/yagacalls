import Container from "../shared/Container";
import Section from "../shared/Section";
import { TrendingUp, ShieldCheck, Send } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: TrendingUp,
    title: "We Find Where Big Money Is Moving",
    desc: "We track what the whales and major players are buying before the crowd notices. No hype, just real momentum."
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "We Build a Safe Plan First",
    desc: "Every setup has an exact buy price, profit targets, and a clear safety exit (stop-loss) so you never hold a heavy bag."
  },
  {
    step: "03",
    icon: Send,
    title: "You Get the Direct Telegram Alert",
    desc: "Copy the entry, set your targets, and trade with confidence straight from your phone."
  }
];

export default function WhyJoin() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(226,200,150,0.06)] border border-[#A38B5D]/30 text-[#E2C896] text-xs font-black uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-[#E2C896]" />
            <span>HOW WE TRADE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF]">
            No Guessing. Just Clear Trades You Can Actually Follow.
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Most groups spam random coins and leave you hanging. Here is exactly what happens before you get a notification on your phone:
          </p>
        </div>

        {/* 3-STEP PIPELINE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.step}
                className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-[rgba(14,15,18,0.80)] backdrop-blur-[20px] border border-[rgba(243,208,129,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#E2C896]/40 transition-all duration-300"
              >
                {/* Specular Light Reflection */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C896]/40 to-transparent" />

                <div>
                  {/* STEP BADGE & ICON ROW */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C896] bg-[rgba(226,200,150,0.10)] px-3 py-1 rounded-full border border-[#A38B5D]/30 shadow-inner">
                      STEP {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[rgba(226,200,150,0.08)] border border-[#A38B5D]/30 flex items-center justify-center text-[#E2C896] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#FFFFFF] mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* BOTTOM STEP INDICATOR */}
                <div className="mt-8 pt-4 border-t border-[rgba(243,208,129,0.08)] flex items-center justify-between text-xs font-mono text-[#E2C896]">
                  <span className="uppercase tracking-widest font-semibold">Phase {index + 1} of 3</span>
                  <span className="font-bold">✓ Systematic</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
