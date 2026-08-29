import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";

const reasons = [
  {
    title: "Clear Signal Structure",
    desc: "Setups are organized with entry logic, target zones, and risk context — not random hype posts."
  },
  {
    title: "Market Narrative Research",
    desc: "We track the stories, catalysts, and market attention cycles that move crypto assets before they become obvious."
  },
  {
    title: "Risk-First Planning",
    desc: "Every serious setup needs invalidation, position sizing, and a plan for being wrong."
  },
  {
    title: "Telegram-First Delivery",
    desc: "Signals and updates are built for fast mobile reading inside Telegram."
  },
  {
    title: "Beginner-Friendly Education",
    desc: "Academy content helps newer traders understand entries, targets, stop loss, and risk."
  },
  {
    title: "Manual Premium Onboarding",
    desc: "Premium access is handled manually through Telegram so plan questions and payment instructions stay clear."
  }
];

export default function WhyJoin() {
  return (
    <Section className="bg-transparent relative z-10 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* Section heading: pure crisp white */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-[#FFFFFF]">Why Serious Traders Follow Yaga Calls</h2>
            <div className="space-y-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              <p>
                Most crypto signal groups only tell people what to buy. That is not enough.
              </p>
              <p>
                A serious trader needs more context before entering a position. The important questions are:
              </p>
              {/* Question bullets: Clean White text (#F4F4F5) + Champagne Gold bullet dots (#E2C896) */}
              <ul className="space-y-3 pt-2">
                {[
                  "Why does this setup matter now?",
                  "What is the entry zone?",
                  "Where is the invalidation?",
                  "What are the target levels?",
                  "What market narrative supports the move?",
                  "What risk is being taken?",
                  "What happens if the setup fails?"
                ].map((q) => (
                  <li key={q} className="flex gap-3 items-center font-bold text-[#F4F4F5] text-sm sm:text-base">
                    <div className="w-2 h-2 rounded-full bg-[#E2C896] shrink-0" /> {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Yaga Calls is built around that structure. The goal is not to flood members with random alerts. The goal is to help traders follow cleaner market ideas with stronger context and better discipline.
            </p>
            {/* "Structured for Discipline" inset card: Obsidian Glass with warm border + champagne gold header */}
            <div className="p-6 sm:p-8 bg-[rgba(14,15,18,0.75)] backdrop-blur-[16px] border border-[rgba(243,208,129,0.15)] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-[#E2C896]">Structured for Discipline</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                The <a href="/method" className="text-[#E2C896] hover:underline font-bold">Yaga Calls method</a> ensures we identify the narrative first, then the technical structure, then the risk parameters. Only then is a signal shared on Telegram.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
