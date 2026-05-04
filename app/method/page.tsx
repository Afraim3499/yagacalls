import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import CTAButton from "@/components/shared/CTAButton";
import SignalCheck from "@/components/shared/SignalCheck";
import { ShieldCheck, BarChart3, Search, Zap, TrendingUp, X } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema, createBreadcrumbSchema } from "@/lib/schema";
import AnswerBox from "@/components/seo/AnswerBox";
import KeyTakeaways from "@/components/seo/KeyTakeaways";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata = {
  title: "Yaga Calls Method | Crypto Signals With Risk Management",
  description: "Learn how Yaga Calls approaches crypto market narratives, entries, targets, stop loss planning, and risk-managed signal ideas.",
  alternates: {
    canonical: "/method",
  },
};


export default function MethodPage() {
  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls Method | Crypto Signals With Risk Management",
    description: "Learn how Yaga Calls approaches crypto market narratives, entries, targets, and risk-managed signal ideas.",
    url: "https://www.yagacalls.com/method"
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Methodology', item: '/method' }
  ]);

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Section className="bg-surface/30 pt-16 md:pt-24">
        <Container className="text-center max-w-4xl">
          <Breadcrumbs items={[{ label: 'Methodology', href: '/method' }]} />
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
            The Yaga Calls Method: <span className="text-primary">Narrative, Timing, and Risk</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-3xl mx-auto">
            We do not chase random pumps. Our process looks for market narratives, technical structure, liquidity behavior, and risk-managed entries before sharing a setup.
          </p>

          <AnswerBox answer="The Yaga Calls method, or 'Narrative Killer,' is a systematic approach to crypto signals that combines deep narrative research with technical validation and strict 1-2% position sizing to ensure sustainable trading." />
          
          <KeyTakeaways items={[
            'Sector and catalyst-driven market scanning',
            'Precise entry, target, and invalidation parameters',
            'Mandatory 1-2% risk per setup rule',
            'Continuous monitoring and Telegram updates'
          ]} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Market Narrative Scan", desc: "We look for sectors, catalysts, token-specific stories, and market attention shifts before they hit the mainstream.", icon: <Search className="w-6 h-6" /> },
              { id: "02", title: "Technical Structure", desc: "We study trend structure, support/resistance, volume behavior, and key liquidity zones on multiple timeframes.", icon: <BarChart3 className="w-6 h-6" /> },
              { id: "03", title: "Entry and Invalidation", desc: "A setup is not complete without knowing where the idea becomes wrong. We define precise invalidation points.", icon: <ShieldCheck className="w-6 h-6" /> },
              { id: "04", title: "Target Planning", desc: "Targets help traders plan exits instead of reacting emotionally to short-term market volatility.", icon: <Zap className="w-6 h-6" /> },
              { id: "05", title: "Risk Management", desc: "Position sizing, stop-loss context, and volatility awareness (ATR) matter more than chasing every move.", icon: <TrendingUp className="w-6 h-6" /> },
              { id: "06", title: "Telegram Delivery", desc: "Updates are written for fast Telegram reading with enough context to understand the core thesis behind the idea.", icon: <Zap className="w-6 h-6" /> }
            ].map((stage) => (
              <GlowCard key={stage.id} className="relative group p-8">
                <div className="text-primary/10 text-7xl font-black absolute top-4 right-4 transition-colors">
                  {stage.id}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8">
                  {stage.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{stage.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{stage.desc}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-deep">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">What We Avoid</h2>
              <div className="space-y-6">
                {[
                  { title: "Blind Pump Calls", desc: "We never chase 100% moves after they happen. We enter at the inflection point." },
                  { title: "No-Stop-Loss Setups", desc: "Every signal we share has a mathematical invalidation point. No exceptions." },
                  { title: "Emotional FOMO Trades", desc: "If the narrative doesn't match the data, we wait. Patience is our edge." },
                  { title: "Guaranteed-Profit Language", desc: "We avoid hype and fake promises. Trading involves risk and results vary." },
                  { title: "Unclear Targets", desc: "A setup without a plan for exit is just a gamble. We define targets upfront." }
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1"><X className="text-danger w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-lg uppercase tracking-tight">{item.title}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <GlowCard className="bg-background p-10 border-primary/10">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Survival First</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Most traders fail because they risk too much on a single idea. Our 1-2% rule ensures you stay in the game long enough for the big trends to work.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Target Risk per Setup</span>
                  <span className="text-primary font-black text-xl">1.0% - 2.0%</span>
                </div>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Stop Loss Method</span>
                  <span className="text-primary font-bold">Volatility Adjusted</span>
                </div>
              </div>
            </GlowCard>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-deep">
        <Container>
          <SignalCheck />
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Ready to Trade with Discipline?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/proof" className="px-10" trackingLabel="method_to_proof">See Proof Examples</CTAButton>
            <CTAButton href="/pricing" variant="secondary" className="px-10" trackingLabel="method_to_pricing">View Premium Plans</CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
