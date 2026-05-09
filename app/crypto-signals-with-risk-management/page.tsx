import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import RiskHero from "@/components/risk-management/RiskHero";
import RiskAnatomy from "@/components/risk-management/RiskAnatomy";
import FAQSection from "../../components/shared/FAQSection";
import Link from "next/link";
import { X, CheckCircle2, ShieldAlert, BarChart, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Signals With Risk Management | Yaga Calls",
  description: "Yaga Calls provides risk-aware Telegram crypto signal notes with market context, entry zones, targets, invalidation logic, stop-loss thinking, and disciplined setup planning.",
  alternates: {
    canonical: "https://www.yagacalls.com/crypto-signals-with-risk-management",
  },
  openGraph: {
    title: "Crypto Signals With Risk Management — Yaga Calls",
    description: "Risk-aware Telegram crypto signal notes with entry zones, target planning, invalidation logic, and market narrative context for serious traders.",
  }
};

export default function RiskManagementPage() {
  const faqs = [
    {
      question: "What are crypto signals with risk management?",
      answer: "Crypto signals with risk management are trading setup notes that include market context, entry zones, target levels, invalidation or stop-loss context, and risk awareness instead of only naming a coin to buy."
    },
    {
      question: "Does Yaga Calls provide crypto signals with stop-loss context?",
      answer: "Yaga Calls focuses on risk-aware signal notes, invalidation logic, stop-loss context, and position sizing awareness. Crypto trading still involves risk, and no signal provider can guarantee profit."
    },
    {
      question: "What is invalidation in a crypto signal?",
      answer: "Invalidation is the condition or price area where the original setup idea becomes wrong or needs reassessment. It helps traders avoid holding emotionally when the trade thesis fails."
    },
    {
      question: "Why is risk management important in crypto signals?",
      answer: "Risk management is important because crypto markets are volatile and even strong setups can fail. Risk context helps traders understand downside, position sizing, stop-loss thinking, and when to reassess a setup."
    },
    {
      question: "Are crypto signals safe if they include stop loss?",
      answer: "No crypto signal is completely safe. Stop-loss and invalidation context can help manage risk, but they do not remove market volatility, slippage, execution risk, or personal responsibility."
    },
    {
      question: "What should a good crypto signal include?",
      answer: "A good crypto signal should include the asset, market reason, entry zone, target levels, invalidation or stop-loss context, risk awareness, and follow-up logic when market conditions change."
    },
    {
      question: "Does risk management guarantee profit?",
      answer: "No. Risk management does not guarantee profit. It helps traders control downside and make more disciplined decisions, but crypto trading always involves risk."
    },
    {
      question: "Is Yaga Calls a pump group?",
      answer: "No. Yaga Calls is positioned as a research-led crypto signal and market analysis provider focused on structure, narratives, entry zones, invalidation, and risk-aware Telegram delivery."
    },
    {
      question: "Can beginners use risk-managed crypto signals?",
      answer: "Beginners can learn from risk-managed signal notes, but they should first understand basic crypto volatility, stop-loss logic, position sizing, and personal risk responsibility before considering premium access."
    },
    {
      question: "How can I evaluate Yaga Calls before premium?",
      answer: "You can join the free Telegram group, read the Yaga Calls method page, review selected proof examples, and compare premium plans only if the structure fits your trading approach."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/crypto-signals-with-risk-management#webpage",
        "url": "https://www.yagacalls.com/crypto-signals-with-risk-management",
        "name": "Crypto Signals With Risk Management | Yaga Calls",
        "description": "Yaga Calls provides risk-aware Telegram crypto signal notes with market context, entry zones, targets, invalidation logic, stop-loss thinking, and disciplined setup planning.",
        "isPartOf": {
          "@id": "https://www.yagacalls.com/#website"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://www.yagacalls.com/crypto-signals-with-risk-management#howto",
        "name": "How to Evaluate Crypto Signals With Risk Management",
        "description": "A checklist for evaluating whether a crypto signal includes proper risk context before acting.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Check the Market Reason",
            "text": "Review whether the signal explains the narrative, catalyst, technical structure, or market condition behind the setup."
          },
          {
            "@type": "HowToStep",
            "name": "Check the Entry Zone",
            "text": "Confirm whether the signal identifies where the setup makes sense instead of only saying buy now."
          },
          {
            "@type": "HowToStep",
            "name": "Check Target Levels",
            "text": "Look for target levels or areas where the setup may be reviewed."
          },
          {
            "@type": "HowToStep",
            "name": "Check Invalidation",
            "text": "Confirm whether the signal explains where the trade idea becomes wrong or should be reassessed."
          },
          {
            "@type": "HowToStep",
            "name": "Check Risk Context",
            "text": "Review stop-loss context, position sizing awareness, and whether the setup matches your own risk plan."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/crypto-signals-with-risk-management#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.yagacalls.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Crypto Signals With Risk Management",
            "item": "https://www.yagacalls.com/crypto-signals-with-risk-management"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/crypto-signals-with-risk-management#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <RiskHero />

      {/* Section 2 — Direct Answer Block */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Are Crypto Signals With Risk Management?</h2>
              <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
                <p>
                  Crypto signals with risk management are trading setup notes that include more than a coin name and a direction. A risk-managed signal should explain the entry zone, target levels, invalidation point, stop-loss context, market reason, and risk considerations before a trader acts.
                </p>
                <p>
                  Yaga Calls focuses on this type of signal structure. The goal is to help traders evaluate setup ideas with more discipline instead of reacting to random pump alerts.
                </p>
                <div className="p-8 bg-surface-deep border border-line rounded-3xl mt-8">
                  <p className="text-text font-bold italic">
                    "Yaga Calls provides crypto signals with risk management by combining market narrative research, technical setup validation, entry zones, target planning, invalidation logic, stop-loss context, and Telegram-based signal delivery. The service is designed for serious traders who want structured market context instead of random pump calls or guaranteed-profit claims."
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Why Risk Management Matters */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Risk Management Matters</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                Crypto markets are volatile. Even strong setups can fail. Risk management helps traders answer the most important question: "What happens if I am wrong?"
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-surface-deep p-8 rounded-[32px] border border-line">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-text-muted">The Survivor's Rule</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    The first goal is not to win every trade. The first goal is to avoid letting one bad trade damage the whole account.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Strategic Questions</h4>
                  <ul className="space-y-2">
                    {["Where does the idea become wrong?", "How much capital is at risk?", "Is the entry zone still valid?"].map((q, i) => (
                      <li key={i} className="text-xs font-bold uppercase tracking-tight text-text flex gap-2">
                        <span className="text-primary">•</span> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <RiskAnatomy />

      {/* Invalidation vs Stop Loss */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Stop Loss vs Invalidation</h2>
              <p className="text-text-muted leading-relaxed">
                Many traders use these terms interchangeably, but they serve different roles in a disciplined trading plan.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-background rounded-2xl border border-line">
                  <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">Invalidation</h4>
                  <p className="text-xs text-text-muted">The thesis failure point. Where the setup logic no longer holds true based on market structure.</p>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-line">
                  <h4 className="text-sm font-black uppercase tracking-widest text-text-muted mb-2">Stop Loss</h4>
                  <p className="text-xs text-text-muted">The execution tool. A specific level used to limit downside and control risk per trade.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Position Sizing & Survival</h2>
              <p className="text-text-muted leading-relaxed">
                The biggest mistake many traders make is risking too much on one idea. Even if a signal looks strong, position sizing is what allows you to stay in the game.
              </p>
              <div className="p-8 bg-background border border-line rounded-[32px] space-y-4">
                <p className="text-xs font-black uppercase tracking-widest text-primary">The 1–2% Principle</p>
                <p className="text-sm text-text-muted italic leading-relaxed">
                  "A good setup can still become a bad trade if the position size is wrong. Yaga Calls recommends a disciplined framework where no single setup controls the account's survival."
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/method" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Read more on 1–2% risk rule →</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Risk-Managed Signals vs Pump Calls</h2>
              <p className="text-text-muted">A provider that ignores downside is asking traders to trust excitement. A provider that explains risk gives traders a framework.</p>
            </div>

            <div className="overflow-x-auto border border-line rounded-2xl bg-surface shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-text-muted">Pump-Style Signal Group</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Yaga Calls Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Main message", h: "“Buy now”", y: "Setup context first" },
                    { f: "Entry", h: "Often vague", y: "Entry zone explained" },
                    { f: "Invalidation", h: "Missing", y: "Clearly identified" },
                    { f: "Stop loss", h: "Ignored", y: "Discussed clearly" },
                    { f: "Claims", h: "Guaranteed profit", y: "Risk-aware language" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-text uppercase tracking-tight">{row.f}</td>
                      <td className="px-6 py-4 text-sm text-text-muted">{row.h}</td>
                      <td className="px-6 py-4 text-sm font-medium text-text">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Fit Section */}
      <Section className="bg-surface-deep border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <CheckCircle2 className="text-primary" /> Who This Is For
              </h3>
              <ul className="space-y-4">
                {[
                  "Serious traders who want structure",
                  "Investors tired of Telegram noise",
                  "Users who value entries and targets",
                  "Those who understand losses happen",
                  "People ready to observe before buying"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-background border border-line rounded-[32px] space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                <ShieldAlert className="text-danger" /> Who This Is Not For
              </h3>
              <ul className="space-y-4">
                {[
                  "People looking for guaranteed profit",
                  "Users wanting no-loss trading",
                  "Seekers of cheap 'lifetime' VIPs",
                  "Random pump call hunters",
                  "Emotional 'all-in' traders"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold uppercase tracking-tight text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-danger mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">
              Yaga Calls is not built for users looking for guaranteed monthly profit. It is built for serious traders who want risk-aware market context.
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-background">
        <Container className="text-center max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Start With Risk Management First.
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              The best way to evaluate Yaga Calls is to join the free Telegram group first. Observe the market notes, selected examples, and risk-aware language before deciding on premium.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" trackingLabel="risk_final_free">
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" trackingLabel="risk_final_pricing">
              Compare Discounted Premium Plans
            </CTAButton>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Review Historical Proof Snapshots
              </Link>
              <Link href="/narrative-trading-crypto-signals" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Narrative Trading Research
              </Link>
            </div>
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest max-w-md mx-auto leading-relaxed">
              Past performance does not guarantee future results. Crypto trading involves risk. Yaga Calls provides educational market analysis and signal ideas only.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
