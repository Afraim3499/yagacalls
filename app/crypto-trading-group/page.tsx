import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import GlowCard from "@/components/shared/GlowCard";
import FAQSection from "@/components/shared/FAQSection";
import Link from "next/link";
import { 
  ShieldCheck, 
  Target, 
  AlertTriangle, 
  Zap, 
  CheckCircle2, 
  X, 
  ArrowRight,
  MessageSquare,
  Lock,
  Eye,
  Activity,
  UserCheck,
  FileText,
  Search,
  ShieldAlert,
  TrendingUp,
  Clock,
  Compass,
  Briefcase,
  PieChart,
  BarChart3,
  HelpCircle,
  Info,
  ShieldQuestion,
  Users,
  Lightbulb,
  GraduationCap
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { 
  createWebPageSchema, 
  createFAQSchema, 
  createBreadcrumbSchema,
  createOrganizationSchema,
  createArticleSchema
} from "@/lib/schema";
import { BRAND_CONFIG } from "@/lib/constants/brand";

const SITE_URL = BRAND_CONFIG.siteUrl;
const CANONICAL_URL = `${SITE_URL}/crypto-trading-group`;

export const metadata: Metadata = {
  title: "Crypto Trading Group | How to Choose a Serious Community",
  description: "Learn how to choose a crypto trading group with real structure, risk awareness, Telegram safety, entries, targets, invalidation and market context.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Crypto Trading Group Guide",
    description: "A serious guide to crypto trading groups: what to look for, what to avoid, Telegram safety, signal structure, risk management and Yaga Calls’ approach.",
    url: CANONICAL_URL,
    type: "article",
  },
};

export default function CryptoTradingGroupPage() {
  const faqs = [
    {
      question: "What is a crypto trading group?",
      answer: "A crypto trading group is a community, channel, or private group where traders share market ideas, trading setups, crypto signals, chart analysis, news reactions, or educational discussions."
    },
    {
      question: "Are crypto trading groups safe?",
      answer: "Crypto trading groups are only as safe as their process and the trader’s own risk management. Users should avoid groups that promise guaranteed profit, hide risk, use fake urgency, or ask for payment through random DMs."
    },
    {
      question: "What should a serious crypto trading group include?",
      answer: "A serious crypto trading group should include market context, entry zones, targets, invalidation, risk reminders, proof context, official links, and educational communication."
    },
    {
      question: "Is a crypto trading group the same as a signal group?",
      answer: "Not always. A crypto trading group may include discussion, education, updates, and signals. A crypto signal group focuses more directly on market setup notes or trade alerts."
    },
    {
      question: "Are Telegram crypto trading groups useful?",
      answer: "Telegram crypto trading groups can be useful because they deliver updates quickly. But Telegram also creates risks such as fake admins, copied groups, random DMs, and late entries."
    },
    {
      question: "Should I join a free crypto trading group first?",
      answer: "Free access can help users observe communication style, market discipline, risk language, and whether the group is worth deeper evaluation before paying."
    },
    {
      question: "Is Yaga Calls a crypto trading group?",
      answer: "Some users may describe Yaga Calls as a crypto trading group because it uses Telegram for market updates and signal notes. More accurately, Yaga Calls is a Telegram-first crypto signal and market analysis provider."
    },
    {
      question: "Does Yaga Calls guarantee profit?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and all content is educational market analysis, not financial advice."
    },
    {
      question: "How do I avoid fake crypto trading groups?",
      answer: "Use official website links, avoid random DMs, verify Telegram admins, reject guaranteed-profit claims, and never send payment to unofficial accounts."
    },
    {
      question: "Who should avoid crypto trading groups?",
      answer: "Users should avoid crypto trading groups if they want guaranteed profit, no-loss trading, pump calls, or someone else to take responsibility for their trades."
    }
  ];

  const webPageSchema = createWebPageSchema({
    title: "Crypto Trading Group | How to Choose a Serious Community",
    description: "Educational guide on evaluating crypto trading groups, focusing on risk awareness, signal structure, and Telegram safety.",
    url: CANONICAL_URL,
    datePublished: "2024-05-16",
    dateModified: "2024-05-16"
  });

  const articleSchema = createArticleSchema({
    title: "Crypto Trading Group: How to Choose a Serious Risk-Aware Trading Community",
    description: "Learn how to choose a crypto trading group with real structure, risk awareness, Telegram safety, and market context.",
    url: CANONICAL_URL,
    datePublished: "2024-05-16",
    dateModified: "2024-05-16"
  });

  const organizationSchema = createOrganizationSchema();
  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Guides", item: "/academy" },
    { name: "Crypto Trading Group", item: "/crypto-trading-group" }
  ]);

  return (
    <main className="bg-background text-text">
      <JsonLd data={webPageSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* SECTION 0 — HERO */}
      <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 relative z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Crypto Trading Community Guide
                </span>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Crypto <br />
                  <span className="text-primary">Trading Group</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  A serious crypto trading group should not only tell people what to buy. It should help traders understand market context, entry zones, target planning, invalidation, risk, and when not to trade.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed font-medium uppercase tracking-widest">
                  Some users describe Yaga Calls as a crypto trading group because it uses Telegram for market updates and signal notes. More accurately, Yaga Calls is a Telegram-first crypto signal and market analysis provider built around structured setup ideas and risk-aware communication.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href={BRAND_CONFIG.officialTelegram} 
                  target="_blank"
                  trackingLabel="hero_ctg_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_ctg_method"
                >
                  Read the Method
                </CTAButton>
                <CTAButton 
                  href="/pricing" 
                  variant="secondary"
                  trackingLabel="hero_ctg_pricing"
                  className="hidden sm:inline-flex"
                >
                  Compare Premium Plans
                </CTAButton>
              </div>

              <p className="text-[10px] text-text-muted/60 uppercase tracking-widest font-black max-w-md mx-auto lg:mx-0">
                Educational market analysis only. Crypto trading involves risk. No trading group or signal provider can guarantee profit.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/50 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between border-b border-line pb-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Trading Group Quality Snapshot</h3>
                    <ShieldCheck className="text-primary" size={24} />
                  </div>

                  <div className="space-y-4">
                    {[
                      { l: "Market Context", v: "Does the group explain why a setup matters?", icon: <Search size={14} className="text-primary" /> },
                      { l: "Entry Zone", v: "Does it define where the trade starts making sense?", icon: <Target size={14} className="text-primary" /> },
                      { l: "Targets", v: "Does it map review areas?", icon: <TrendingUp size={14} className="text-primary" /> },
                      { l: "Invalidation", v: "Does it explain where the idea becomes wrong?", icon: <ShieldAlert size={14} className="text-danger" /> },
                      { l: "Risk", v: "Does it discuss downside before upside?", icon: <AlertTriangle size={14} className="text-warning" /> },
                      { l: "Telegram Safety", v: "Are official links and admins clear?", icon: <Lock size={14} className="text-primary" /> },
                      { l: "Group Standard", v: "Structure before hype", icon: <CheckCircle2 size={14} className="text-primary" /> },
                    ].map((row, i) => (
                      <div key={i} className="flex flex-col py-3 border-b border-line/50 last:border-0 group">
                        <div className="flex items-center gap-2 mb-1">
                          {row.icon}
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.l}</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-tight text-text">{row.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-tight text-center italic">
                      A group should improve judgment, not replace it.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — Direct Answer Block */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is a Crypto Trading Group?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    A crypto trading group is a community, channel, or private group where traders share market ideas, trading setups, crypto signals, chart analysis, news reactions, or educational discussions.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A serious crypto trading group should provide structure, not hype. It should help users understand the market reason, entry zone, target areas, invalidation point, and risk before acting. Whether the community exists on Telegram, Discord, or a private forum, the standard remains the same: context before signals, and risk before profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Why Traders Join Crypto Trading Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Why Traders Join <br /><span className="text-primary">Crypto Trading Groups</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                A trading group can help traders see more information. It cannot remove responsibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Market Speed", d: "Crypto moves 24/7, and traders often use groups to keep up with changing setups across hundreds of assets.", i: <Clock size={24} className="text-primary" /> },
                { t: "Shared Context", d: "A good group explains what the market is reacting to instead of only posting coin names or buy-now alerts.", i: <Users size={24} className="text-primary" /> },
                { t: "Learning Support", d: "Beginners can learn how entry zones, target levels, invalidation logic, and risk language work in real time.", i: <GraduationCap size={24} className="text-primary" /> },
                { t: "Signal Discovery", d: "Signal notes can help busy traders find setups, but each setup still needs a personal risk review before action.", i: <Zap size={24} className="text-primary" /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-colors group">
                  <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.i}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-text leading-tight">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/what-are-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Learn what crypto signals should include →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — Good Crypto Trading Group vs Pump Group */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Good Crypto Trading Group <br /><span className="text-primary">vs Pump Group</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                A serious group explains context. A pump group creates urgency.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                A good crypto trading group explains market context, entry zones, target planning, invalidation, and risk. A pump group usually uses urgency, crowd pressure, and exaggerated claims to push users into trades without enough structure. The difference is not whether the group uses Telegram; the difference is whether the group has a risk-aware process.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Serious Crypto Trading Group</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Pump-Style Group</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Main Message", s: "Understand the setup before acting.", p: "Buy now before it explodes." },
                    { f: "Market Reason", s: "Explains narrative, chart structure, or catalyst.", p: "Often vague or missing." },
                    { f: "Entry", s: "Uses entry zones or planned price areas.", p: "Often late, chasing, or unclear." },
                    { f: "Targets", s: "Uses review areas and trade management logic.", p: "Uses extreme targets to create excitement." },
                    { f: "Invalidation", s: "Explains where the idea becomes wrong.", p: "Usually missing." },
                    { f: "Risk Language", s: "Discusses downside, position sizing, and uncertainty.", p: "Ignores risk or hides it." },
                    { f: "Telegram Behavior", s: "Uses official links and clear communication.", p: "Uses spam, random DMs, or fake urgency." },
                    { f: "Best Fit", s: "Traders who value process and discipline.", p: "Users chasing fast excitement and hype." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-[10px] font-black text-text-muted border-r border-line/50 uppercase tracking-widest">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.s}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/best-crypto-signal-groups-compared" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Compare crypto signal groups</Link>
              <Link href="/how-to-choose-a-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Use the provider selection checklist</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — What a Serious Crypto Trading Group Should Include */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">What a Serious Crypto <br /><span className="text-primary">Trading Group Should Include</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                A useful group should make the trader more disciplined, not more emotional.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                A serious crypto trading group should include market context, structured setup notes, entry zones, target levels, invalidation logic, risk reminders, Telegram safety, educational explanations, and transparent expectations. It should avoid guaranteed-profit claims and no-loss promises.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-background">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Group Feature</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Why It Matters</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Red Flag If Missing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Market Context", w: "Explains why traders are watching an asset or sector.", r: "Only coin names are posted without reasoning." },
                    { f: "Entry Zone", w: "Helps users avoid chasing late moves after price runs.", r: "The group says “buy now” without price logic." },
                    { f: "Targets", w: "Gives review areas for trade planning and profit management.", r: "Targets are exaggerated without technical reasoning." },
                    { f: "Invalidation", w: "Shows exactly where the trade idea becomes wrong.", r: "No downside level or stop-loss is discussed." },
                    { f: "Risk Reminder", w: "Keeps users aware that even good setups can fail.", r: "The group talks only about upside and profit." },
                    { f: "Proof Context", w: "Helps users evaluate process through historical examples.", r: "Only winning screenshots are shown with no context." },
                    { f: "Official Links", w: "Reduces fake admin and clone-group scam risk.", r: "Users are asked to pay through random direct messages." },
                    { f: "Educational Tone", w: "Builds trader judgment and independent thinking.", r: "The group creates dependency, urgency, and panic." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-[10px] font-black text-text border-r border-line/50 uppercase tracking-widest">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.w}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Telegram Crypto Trading Groups */}
      <Section className="bg-background py-24 border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Crypto Trading Groups <br /><span className="text-primary">on Telegram</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Telegram is a delivery tool. It is not a trust signal by itself.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
              <p>
                Telegram is popular for crypto trading groups because it is fast, mobile-first, and easy to use for group updates. But Telegram also creates risks: fake admins, copied groups, random DMs, payment scams, noisy chats, and late entries. For a deeper look at specific safety protocols, read our guide on how to choose a <Link href="/crypto-trading-telegram-group" className="text-primary hover:underline font-bold">crypto trading Telegram group</Link> safely. Users should verify official links before joining or paying.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 not-prose">
                <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-primary">Why Telegram Works</h3>
                  <ul className="space-y-4">
                    {[
                      "Fast delivery of signal notes",
                      "Mobile notifications for quick reaction",
                      "Private and public community options",
                      "Easy updates if a setup changes",
                      "Global access for 24/7 markets",
                      "Manual premium onboarding possible"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                        <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-danger">Telegram Risks</h3>
                  <ul className="space-y-4">
                    {[
                      "Fake admins messaging first",
                      "Clone groups with copied logos",
                      "Random payment requests in DMs",
                      "Spam and phishing links",
                      "Emotional crowd behavior (FOMO)",
                      "Late entries after moves happen",
                      "Blind copying without risk review",
                      "Unofficial and fake VIP offers"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                        <X className="text-danger flex-shrink-0" size={16} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto p-10 md:p-14 bg-danger/5 border border-danger/20 rounded-[48px] space-y-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="flex items-center gap-3 text-danger mb-4 relative z-10">
                  <ShieldAlert size={24} />
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Official Telegram Safety Rule</h3>
               </div>
               <p className="text-xl text-text font-black uppercase tracking-tight relative z-10">
                 Use only official links from the provider’s website. Avoid random DMs, fake admins, copied logos, unofficial payment requests, and guaranteed-profit claims.
               </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Telegram crypto signals guide</Link>
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Understand premium Telegram signal access</Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Use official Yaga Calls onboarding</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Free vs Paid Crypto Trading Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text">Free vs Paid <br /><span className="text-primary">Crypto Trading Groups</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Premium should mean more structure, not more noise.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                Free crypto trading groups are useful for observation and learning. Paid groups may offer deeper signal notes, private access, and more structured updates. But payment does not guarantee quality, profit, or safety. Users should review method, proof, risk language, and official onboarding before paying.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-background">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text">Free Crypto Trading Group</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Paid Crypto Trading Group</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Purpose", fr: "Observation, learning, public updates.", p: "Deeper access, private notes, structured follow-up." },
                    { f: "Cost", fr: "No payment required.", p: "Subscription, plan, or private access fee." },
                    { f: "Depth", fr: "Usually limited public market notes.", p: "May be deeper if the provider is serious." },
                    { f: "Risk Context", fr: "Often inconsistent or missing.", p: "Should be stronger, but not guaranteed." },
                    { f: "Best Use", fr: "Evaluate the group logic before paying.", p: "Join only after method, proof, and fit are clear." },
                    { f: "Main Risk", fr: "Noise, weak structure, limited follow-up.", p: "Payment pressure, fake VIP groups, poor quality." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-[10px] font-black text-text-muted border-r border-line/50 uppercase tracking-widest">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-text font-medium">{row.fr}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Compare Yaga Calls premium plans</Link>
              <Link href="/yaga-calls-review" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Read the Yaga Calls review</Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Review selected proof examples</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Is Yaga Calls a Crypto Trading Group? */}
      <Section className="bg-background py-24 border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Is Yaga Calls a <br /><span className="text-primary">Crypto Trading Group?</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Yaga Calls is not trying to be the loudest group. It is built to be the clearer one.
              </p>
            </div>

            <div className="p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="prose prose-invert prose-lg max-w-none relative z-10">
                <p className="text-text font-bold leading-relaxed">
                  Some users may describe Yaga Calls as a crypto trading group because it uses Telegram for market updates, signal notes, and community-style access.
                </p>
                <p className="text-text-muted leading-relaxed">
                  More accurately, Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup ideas, market narrative research, entry zones, targets, invalidation, and risk-aware communication. It fits the search intent of a crypto trading group because it uses Telegram for delivery and provides actionable market notes, but it is not positioned as a generic hype community or pump room.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                { t: "Telegram Delivery", d: "Uses Telegram for fast mobile signal delivery." },
                { t: "Serious Focus", d: "Built for traders who value research over hype." },
                { t: "Structured Notes", d: "Entries, targets, and invalidation in every setup." },
                { t: "Observation Path", d: "Join the free Telegram to observe tone first." },
                { t: "Manual Onboarding", d: "Premium access via verified official routes." },
                { t: "Not a Pump Room", d: "Zero tolerance for fake urgency or pump calls." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-surface-deep border border-line rounded-3xl space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">{item.t}</h4>
                  <p className="text-[10px] text-text-muted font-bold">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <CTAButton href={BRAND_CONFIG.officialTelegram} target="_blank">Join Free Telegram</CTAButton>
              <CTAButton href="/method" variant="secondary">Read the Method</CTAButton>
              <CTAButton href="/proof" variant="secondary">Review Proof</CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Yaga Calls Trading Group Standard */}
      <Section className="bg-background py-24 border-y border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">The Yaga Calls <br /><span className="text-primary">Trading Group Standard</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
                The standard is simple: structure before action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
              {[
                { t: "Narrative Research", d: "Yaga Calls studies market stories, sector rotation, catalysts, and attention shifts before treating a setup as serious.", i: <Search /> },
                { t: "Technical Structure", d: "A setup should have chart context and technical validation, not only social media excitement.", i: <Activity /> },
                { t: "Entry Zone", d: "The signal should identify price areas where the setup starts making sense for a risk-aware trader.", i: <Target /> },
                { t: "Target Planning", d: "Targets should be treated as review areas for trade management, not as guaranteed price promises.", i: <TrendingUp /> },
                { t: "Invalidation Logic", d: "The signal should explain where the market idea becomes wrong and risk must be cut.", i: <ShieldAlert /> },
                { t: "Risk Context", d: "Downside must be discussed before upside is trusted. Sizing and volatility matter.", i: <AlertTriangle /> },
                { t: "Telegram Delivery", d: "Telegram is used for fast communication, but the method matters more than the app or channel.", i: <Zap /> },
                { t: "Manual Onboarding", d: "Premium access should happen through official, verified routes only, never via random DMs.", i: <Lock /> }
              ].map((card, i) => (
                <GlowCard key={i} className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-surface-deep rounded-2xl flex items-center justify-center text-primary">
                    {card.i}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-text">{card.t}</h3>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </GlowCard>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Yaga Calls Method</Link>
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">See risk-managed crypto signals</Link>
              <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Use the position sizing calculator</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — How to Evaluate a Crypto Trading Group Before Joining */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">How to Evaluate a Crypto <br /><span className="text-primary">Trading Group Before Joining</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
                The best group for you is not always the most active group. It is the group you can evaluate clearly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               {[
                 "Does the group explain its method?",
                 "Does it show market reasoning?",
                 "Does it define entries clearly?",
                 "Does it explain targets as review areas?",
                 "Does it include invalidation logic?",
                 "Does it discuss trade risk?",
                 "Does it avoid guaranteed-profit claims?",
                 "Does it show proof responsibly?",
                 "Does it use official website links?",
                 "Does it avoid random direct messages?",
                 "Does it allow free observation first?",
                 "Does it fit your trading style?",
                 "Can you afford the subscription risk?",
                 "Are you still responsible for your sizing?"
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0 relative z-10 group">
                   <span className="text-primary font-black group-hover:scale-125 transition-transform">{i + 1}.</span> {item}
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/how-to-choose-a-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Use the signal provider checklist</Link>
              <Link href="/crypto-signal-provider-comparison" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Compare crypto signal providers</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Who Should Join a Crypto Trading Group? */}
      <Section className="bg-background py-24 border-t border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-center">Who Should Join <br /><span className="text-primary">a Crypto Trading Group?</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
              A trading group can support decision-making. It cannot make decisions for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8 shadow-2xl">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">A group may fit users who:</h3>
                <ul className="space-y-4">
                  {[
                    "want faster market updates on Telegram",
                    "want structured crypto signal notes",
                    "want to learn from market context",
                    "understand that trading involves risk",
                    "can manage their own position sizing",
                    "check entries before acting on alerts",
                    "avoid fake Telegram admins and scammers",
                    "prefer risk-aware, serious communication",
                    "want to observe free access before paying"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8 shadow-2xl opacity-80">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-text-muted">A group is not for users who:</h3>
                <ul className="space-y-4">
                  {[
                    "want guaranteed monthly profit",
                    "want no-loss signals or trade alerts",
                    "blindly copy alerts without thinking",
                    "chase every message in the chat",
                    "use excessive leverage on every trade",
                    "trust random direct messages on Telegram",
                    "cannot afford trading losses",
                    "want pump calls and quick excitement",
                    "expect others to take responsibility"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X className="text-danger flex-shrink-0" size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Crypto Trading Group Safety Checklist */}
      <Section className="bg-background py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Crypto Trading Group <br /><span className="text-primary">Safety Checklist</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
               If the group cannot explain risk, do not trust its upside.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] text-left">
              {[
                "Start from the official provider website.",
                "Check the provider’s trading method.",
                "Review proof examples with healthy skepticism.",
                "Confirm official Telegram links only.",
                "Avoid random Telegram direct messages.",
                "Avoid guaranteed-profit or 100% win claims.",
                "Check whether trade risk is discussed openly.",
                "Check whether stop-loss or invalidation is included.",
                "Avoid cheap lifetime VIP or urgency pressure.",
                "Avoid groups that delete their losing calls.",
                "Never send payment to unknown accounts.",
                "Read the provider’s risk disclosure page.",
                "Observe free access first if it is available.",
                "Do not risk money needed for personal expenses."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0 group">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0 group-hover:rotate-12 transition-transform" /> {item}
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the risk disclosure</Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Contact official support</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Choose a Group by <br />
              <span className="text-primary">Process, Not Hype.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              A serious crypto trading group should help traders think more clearly before risk is taken. It should explain market context, entries, targets, invalidation, risk, official access, and what happens if the setup fails.
            </p>
            <p className="text-lg text-text font-bold uppercase tracking-tight">
              Yaga Calls is built for traders who want Telegram-first market updates, structured crypto signal notes, selected proof examples, manual onboarding, and risk-aware communication.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href={BRAND_CONFIG.officialTelegram} target="_blank">Join Free Telegram</CTAButton>
            <CTAButton href="/method" variant="secondary">Read the Method</CTAButton>
            <CTAButton href="/proof" variant="secondary">Review Proof</CTAButton>
            <CTAButton href="/pricing" variant="secondary">Compare Plans</CTAButton>
            <CTAButton href="/contact" variant="secondary">Contact Support</CTAButton>
          </div>

          <div className="pt-12 max-w-3xl mx-auto">
            <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-tight">
              Yaga Calls provides educational crypto market analysis and signal ideas only. Crypto trading involves risk. Trading groups and Telegram signals do not guarantee profit, safety, execution quality, or loss prevention. Past performance does not guarantee future results. Every trader is responsible for their own decisions.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-surface-deep py-24 border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Frequently Asked Questions <br /><span className="text-primary">About Crypto Trading Groups</span></h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq, i) => (
                <GlowCard key={i} className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="text-primary shrink-0 mt-1" size={20} />
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold tracking-tight text-text leading-tight">{faq.question}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
