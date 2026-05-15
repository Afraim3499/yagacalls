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
  GraduationCap,
  Bell,
  Smartphone,
  CheckCircle,
  Shield
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
const CANONICAL_URL = `${SITE_URL}/crypto-trading-telegram-group`;

export const metadata: Metadata = {
  title: "Crypto Trading Telegram Group | Choose Safely Before Joining",
  description: "Learn how to choose a crypto trading Telegram group safely. Check signals, entries, targets, invalidation, risk, fake admins and official links.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Crypto Trading Telegram Group Guide",
    description: "A serious guide to crypto trading Telegram groups: signal structure, official links, fake admin safety, free vs premium access, and Yaga Calls’ approach.",
    url: CANONICAL_URL,
    type: "article",
  },
};

export default function CryptoTradingTelegramGroupPage() {
  const faqs = [
    {
      question: "What is a crypto trading Telegram group?",
      answer: "A crypto trading Telegram group is a Telegram-based channel, group, or private community where traders receive market updates, crypto signal notes, trading setup ideas, chart context, or educational discussion."
    },
    {
      question: "Are crypto trading Telegram groups safe?",
      answer: "Crypto trading Telegram groups are only as safe as their process and the trader’s own risk management. Users should avoid fake admins, random DMs, guaranteed-profit claims, and unofficial payment requests."
    },
    {
      question: "What should a serious crypto trading Telegram group include?",
      answer: "A serious crypto trading Telegram group should include official links, market context, entry zones, targets, invalidation, risk reminders, responsible proof, and safe onboarding."
    },
    {
      question: "What is the difference between a Telegram channel and group?",
      answer: "A Telegram channel is usually one-way broadcast communication, while a Telegram group allows member interaction. Private groups may control access for premium members."
    },
    {
      question: "Should I join a free Telegram group before premium?",
      answer: "Yes. Free Telegram access can help users observe communication style, market discipline, risk language, and whether the provider’s method fits before paying."
    },
    {
      question: "How do I avoid fake Telegram crypto groups?",
      answer: "Start from the official website, use verified Telegram links, avoid random DMs, confirm admin identity, and never send payment to unofficial accounts."
    },
    {
      question: "Is Yaga Calls a crypto trading Telegram group?",
      answer: "Some users may describe Yaga Calls as a crypto trading Telegram group because it uses Telegram for market updates and signal notes. More accurately, Yaga Calls is a Telegram-first crypto signal and market analysis provider."
    },
    {
      question: "Does Yaga Calls guarantee profit?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and all content is educational market analysis, not financial advice."
    },
    {
      question: "What should I check before acting on a Telegram signal?",
      answer: "Check the official source, asset, direction, market reason, entry zone, targets, invalidation, stop-loss context, position size, and whether price has already moved too far."
    },
    {
      question: "Who should avoid crypto trading Telegram groups?",
      answer: "Users should avoid crypto trading Telegram groups if they want guaranteed profit, no-loss trading, pump calls, random buy-now alerts, or someone else to take responsibility for their trades."
    }
  ];

  const webPageSchema = createWebPageSchema({
    title: "Crypto Trading Telegram Group | Choose Safely Before Joining",
    description: "Comprehensive guide on selecting and evaluating crypto trading groups on Telegram with a focus on safety and signal quality.",
    url: CANONICAL_URL,
    datePublished: "2024-05-16",
    dateModified: "2024-05-16"
  });

  const articleSchema = createArticleSchema({
    title: "Crypto Trading Telegram Group: How to Choose a Serious Signal Community Safely",
    description: "Learn how to choose a crypto trading Telegram group safely. Check signals, entries, targets, invalidation, risk, fake admins and official links.",
    url: CANONICAL_URL,
    datePublished: "2024-05-16",
    dateModified: "2024-05-16"
  });

  const organizationSchema = createOrganizationSchema();
  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Guides", item: "/academy" },
    { name: "Crypto Trading Telegram Group", item: "/crypto-trading-telegram-group" }
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
                  Telegram Trading Group Guide
                </span>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Crypto Trading <br />
                  <span className="text-primary">Telegram Group</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  A crypto trading Telegram group can deliver market updates quickly, but speed is only useful when the group is official, structured, risk-aware, and clear about entries, targets, invalidation, and safety.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed font-medium uppercase tracking-widest">
                  Yaga Calls uses Telegram for crypto signal notes and market analysis, but the Telegram app is only the delivery layer. The real standard is the method behind the signal.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href={BRAND_CONFIG.officialTelegram} 
                  target="_blank"
                  trackingLabel="hero_cttg_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_cttg_method"
                >
                  Read the Method
                </CTAButton>
                <CTAButton 
                  href="/contact" 
                  variant="secondary"
                  trackingLabel="hero_cttg_onboarding"
                  className="hidden sm:inline-flex"
                >
                  Check Official Onboarding
                </CTAButton>
              </div>

              <p className="text-[10px] text-text-muted/60 uppercase tracking-widest font-black max-w-md mx-auto lg:mx-0">
                Educational market analysis only. Crypto trading involves risk. No Telegram group or signal provider can guarantee profit.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/50 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between border-b border-line pb-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Telegram Group Safety Snapshot</h3>
                    <ShieldCheck className="text-primary" size={24} />
                  </div>

                  <div className="space-y-4">
                    {[
                      { l: "Official Source", v: "Use website links only", icon: <CheckCircle size={14} className="text-primary" /> },
                      { l: "Signal Structure", v: "Asset, entry, targets, invalidation", icon: <Target size={14} className="text-primary" /> },
                      { l: "Risk Context", v: "Position sizing and downside awareness", icon: <AlertTriangle size={14} className="text-warning" /> },
                      { l: "Admin Safety", v: "Avoid random DMs", icon: <X size={14} className="text-danger" /> },
                      { l: "Payment Safety", v: "Use official onboarding only", icon: <Lock size={14} className="text-primary" /> },
                      { l: "Group Standard", v: "Structure before urgency", icon: <Activity size={14} className="text-primary" /> },
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
                      Telegram is fast. Verification comes first.
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
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is a Crypto Trading Telegram Group?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    A crypto trading Telegram group is a Telegram-based community, channel, or private group where traders receive market updates, crypto signal notes, trading setup ideas, chart context, or educational discussion.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A serious crypto trading Telegram group should explain market reason, entry zone, target levels, invalidation, and risk before users act. Telegram makes delivery fast, but it does not guarantee quality or safety. To maintain a professional standard, a group must prioritize structured signal delivery and official access over community noise or urgency-driven hype.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Why Crypto Traders Use Telegram Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Why Crypto Traders Use <br /><span className="text-primary">Telegram Groups</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Telegram solves speed. It does not solve judgment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Fast Delivery", d: "Telegram can send market updates quickly when price moves, allowing traders to stay current in 24/7 markets.", i: <Zap size={24} className="text-primary" /> },
                { t: "Mobile Access", d: "Traders can receive alerts while away from charts, ensuring setup notes are available on any device.", i: <Smartphone size={24} className="text-primary" /> },
                { t: "Group Updates", d: "Providers can update, cancel, or clarify setup notes in one central hub as market conditions shift.", i: <Bell size={24} className="text-primary" /> },
                { t: "Private Access", d: "Premium groups can limit access and keep communication more focused on professional-grade setups.", i: <Lock size={24} className="text-primary" /> }
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
              <Link href="/telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the Telegram crypto signals guide →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — Telegram Channel vs Group vs Private Telegram Community */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text">Telegram Channel vs Group <br /><span className="text-primary">vs Private Community</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
                The Telegram format matters less than the process behind the message.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                A Telegram channel is usually a one-way broadcast feed. A Telegram group allows member discussion. A private Telegram community usually controls access for premium users or verified members. Each format can be useful, but safety and signal quality depend on the provider’s process, not the Telegram format alone.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Telegram Format</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">How It Works</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Best For</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Main Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Telegram Channel", h: "One-way posts from provider to audience.", b: "Clean signal delivery and public updates.", r: "Fake copied channels and limited interaction." },
                    { f: "Telegram Group", h: "Members can usually interact with posts and each other.", b: "Community discussion and group learning.", r: "Spam, noise, fake admins, emotional FOMO." },
                    { f: "Private Telegram Group", h: "Access is limited to approved or paid members.", b: "Focused premium signal delivery and privacy.", r: "Payment scams and fake VIP groups if unverified." },
                    { f: "Manual Onboarding Community", h: "Users are added through official verification routes.", b: "Reducing fake access and member control.", r: "Users must still verify the official website." },
                    { f: "Yaga Calls Telegram", h: "Telegram-first signals with free observation and manual premium onboarding.", b: "Serious traders who want structure and official access.", r: "Crypto trading still involves significant risk." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-[10px] font-black text-text border-r border-line/50 uppercase tracking-widest">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.h}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.b}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — What a Serious Crypto Trading Telegram Group Should Include */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">What a Serious Crypto Trading <br /><span className="text-primary">Telegram Group Should Include</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                A Telegram group should make the signal clearer, not make the trader more emotional.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                A serious crypto trading Telegram group should include official links, clear signal structure, market context, entry zones, target planning, invalidation, risk reminders, proof context, and safe onboarding. It should avoid guaranteed-profit claims, fake urgency, and payment requests through random DMs.
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
                    { f: "Official Links", w: "Protects users from fake groups and impersonators.", r: "Payment or access is pushed through random DMs." },
                    { f: "Market Context", w: "Explains why an asset or setup matters technically.", r: "Only coin names are posted with no reason." },
                    { f: "Entry Zone", w: "Helps users avoid chasing late moves at bad prices.", r: "The message only says “buy now” or “long now.”" },
                    { f: "Targets", w: "Gives planned review areas for profit management.", r: "Targets are exaggerated or technically unrealistic." },
                    { f: "Invalidation", w: "Shows exactly where the setup idea becomes wrong.", r: "No downside level or stop-loss is discussed." },
                    { f: "Risk Reminder", w: "Helps users think about sizing before acting.", r: "Only upside and profit potential are discussed." },
                    { f: "Follow-Up Logic", w: "Markets change; traders need update context.", r: "Old setups are ignored or deleted after failure." },
                    { f: "Proof Context", w: "Helps users evaluate historical process.", r: "Only winning screenshots are shown without context." }
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

      {/* SECTION 5 — Official Telegram Safety: Fake Admins, Copied Groups and DMs */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Official Telegram Safety <br /><span className="text-primary">for Trading Groups</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Telegram safety starts before the first message is trusted.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-text-muted text-center leading-relaxed">
              <p>
                Users should only join crypto trading Telegram groups through official website links or verified onboarding routes. Avoid random DMs, copied logos, fake admins, unofficial payment requests, “discount” messages, and anyone promising guaranteed profit.
              </p>
            </div>

            <div className="max-w-3xl mx-auto p-10 md:p-14 bg-danger/5 border border-danger/20 rounded-[48px] space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="flex items-center gap-3 text-danger mb-4 relative z-10">
                  <ShieldAlert size={24} />
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Official Safety Rule</h3>
               </div>
               <p className="text-xl text-text font-black uppercase tracking-tight relative z-10">
                 Use only official Yaga Calls links from the website. Do not trust random Telegram DMs, copied groups, fake admins, unofficial payment requests, or guaranteed-profit claims.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 relative z-10">
                 {[
                   "Start from the official website.",
                   "Use only verified Telegram links.",
                   "Confirm group or channel names.",
                   "Manual onboarding via official contact.",
                   "Avoid random DMs from 'Admins'.",
                   "Avoid copied logos and user IDs.",
                   "Never send payment to unknown IDs.",
                   "Ignore 'Limited Discount' offers.",
                   "Leave groups promising 100% profit.",
                   "Read risk disclosure before premium."
                 ].map((check, i) => (
                   <div key={i} className="flex gap-4 items-center text-[10px] font-black uppercase tracking-tight text-text">
                     <CheckCircle2 className="text-primary flex-shrink-0" size={14} /> {check}
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Use official Yaga Calls onboarding</Link>
              <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Read the full risk disclosure</Link>
              <Link href="/about-yaga-calls" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Verify the official Yaga Calls brand</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Free vs Premium Crypto Trading Telegram Groups */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text">Free vs Premium <br /><span className="text-primary">Telegram Trading Groups</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Start free if you are unsure. Premium should come after fit is clear.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                Free crypto trading Telegram groups are useful for observing communication style, market tone, and risk language. Premium Telegram groups may offer deeper setup notes, private delivery, and more focused updates. But payment does not guarantee profit, safety, or signal quality.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-background">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text">Free Telegram Group</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Premium Telegram Group</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Purpose", fr: "Observation, learning, public updates.", p: "Deeper setup notes, private access, focused updates." },
                    { f: "Cost", fr: "No payment required.", p: "Paid access or subscription fee." },
                    { f: "Signal Depth", fr: "Usually limited public analysis.", p: "Should be more structured if the provider is serious." },
                    { f: "Follow-Up", fr: "Often limited public updates.", p: "May include more focused setup management." },
                    { f: "Risk Context", fr: "Can vary based on public tone.", p: "Should include clearer risk framing and sizing." },
                    { f: "Best Use", fr: "Evaluate the provider logic before paying.", p: "Use only after method, proof, and fit are clear." },
                    { f: "Main Risk", fr: "Noise and limited signal depth.", p: "Fake VIP groups, payment pressure, and poor quality." }
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
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Understand premium Telegram signals</Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Compare Yaga Calls premium plans</Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Review selected proof examples</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Telegram Trading Group Signals: How to Read Before Acting */}
      <Section className="bg-background py-24 border-t border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text">How to Read Signals in a <br /><span className="text-primary">Telegram Trading Group</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
                A Telegram message is not a trading decision by itself.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted leading-relaxed">
              <p>
                Before acting on a Telegram group signal, check the official source, asset, direction, market reason, entry zone, targets, invalidation, stop-loss context, position size, and whether price has already moved too far. A Telegram signal can provide structure, but the trader still owns execution risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 pt-12">
               {[
                 { s: "Step 1", t: "Verify Source", q: "Official or fake?" },
                 { s: "Step 2", t: "Asset / Dir", q: "Long, short, spot?" },
                 { s: "Step 3", t: "Read Reason", q: "Why now?" },
                 { s: "Step 4", t: "Check Entry", q: "Price near zone?" },
                 { s: "Step 5", t: "Find Stop", q: "Invalidation level?" },
                 { s: "Step 6", t: "Calc Risk", q: "Personal sizing?" },
                 { s: "Step 7", t: "Decide", q: "No FOMO?" }
               ].map((step, i) => (
                 <div key={i} className="p-6 bg-surface-deep border border-line rounded-3xl space-y-2 text-center group hover:border-primary/40 transition-colors">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">{step.s}</span>
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-text leading-tight">{step.t}</h4>
                   <p className="text-[9px] text-text-muted font-bold italic">"{step.q}"</p>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/how-to-set-stop-losses-in-crypto" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Learn how to set stop-losses in crypto</Link>
              <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Use the position sizing calculator</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Crypto Trading Telegram Group Red Flags */}
      <Section className="bg-background py-24 border-y border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Telegram Trading Group <br /><span className="text-danger">Red Flags</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
                 The more a Telegram group sells certainty, the more carefully it should be questioned.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
              {[
                { f: "Guaranteed Profit", d: "Markets have no guarantees. Claims of certain profit are a major trap." },
                { f: "100% Accurate Signals", d: "No strategy wins every time. Serious providers explain risk, not certainty." },
                { f: "No-Loss Trading", d: "All trading involves loss risk. Promising no losses is a scam indicator." },
                { f: "Buy-Now Urgency", d: "Pushing users to act without an entry zone or market reason context." },
                { f: "No Entry Zone", d: "Failing to define where a setup makes technical sense for a trader." },
                { f: "No Invalidation", d: "Failing to explain where the trade idea becomes wrong and must be cut." },
                { f: "No Risk Note", d: "Ignoring downside risk and capital protection in signal communication." },
                { f: "Random Payment DMs", d: "Admins or strangers messaging first to ask for payment or VIP access." },
                { f: "Fake Admins", d: "Usernames that copy official logos but link to unofficial IDs." },
                { f: "Copied Logos", d: "Impersonator groups using the same branding to steal user funds." },
                { f: "Cheap Lifetime VIP", d: "Using 'one-time' low fees to create urgency before disappearing." },
                { f: "Only Winning Screens", d: "Hiding losing setups to create a fake impression of perfection." },
                { f: "Deleted Losing Calls", d: "Cleaning group history to hide failed trade ideas from new users." },
                { f: "No Official Website", d: "Groups that only exist on Telegram with no method or legal disclosure." },
                { f: "No Risk Disclosure", d: "Failing to warn users about the serious financial risks of crypto trading." }
              ].map((flag, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-3 hover:border-danger/40 transition-colors">
                  <div className="flex items-center gap-3 text-danger">
                    <ShieldAlert size={18} />
                    <h4 className="text-[10px] font-black uppercase tracking-widest">{flag.f}</h4>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{flag.d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/how-to-choose-a-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Use the crypto signal provider checklist</Link>
              <Link href="/crypto-signal-provider-comparison" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Compare crypto signal providers</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — How Yaga Calls Fits the Crypto Trading Telegram Group Search */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Is Yaga Calls a Crypto <br /><span className="text-primary">Trading Telegram Group?</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
                Yaga Calls is Telegram-first, not Telegram-only. The method matters more than the app.
              </p>
            </div>

            <div className="p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="prose prose-invert prose-lg max-w-none relative z-10 text-text-muted leading-relaxed text-center">
                <p>
                  Some users may describe Yaga Calls as a crypto trading Telegram group because it uses Telegram for crypto signal notes, market updates, free observation, and premium access. More accurately, Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup ideas, market narratives, entry zones, targets, invalidation, and risk-aware communication.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                "Telegram-first signal delivery layer",
                "Free Telegram group observation path",
                "Premium Telegram access for serious members",
                "Structured signal notes (entry/target/stop)",
                "Focus on narrative research + technicals",
                "Manual premium onboarding for safety",
                "Official brand verification standard",
                "Risk-aware communication in all groups",
                "Not positioned as a pump group"
              ].map((item, i) => (
                <div key={i} className="p-6 bg-surface-deep border border-line rounded-3xl flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-text leading-tight">{item}</span>
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

      {/* SECTION 10 — The Yaga Calls Telegram Group Standard */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">The Yaga Calls <br /><span className="text-primary">Telegram Group Standard</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
                The standard is simple: official access, structured signals, risk-aware delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
              {[
                { t: "Official Access", d: "Users must start from the official website and verified Telegram links to ensure security.", i: <CheckCircle /> },
                { t: "Narrative Research", d: "Yaga Calls studies market stories, sector rotation, catalysts, and attention shifts before signal notes.", i: <Search /> },
                { t: "Technical Structure", d: "A setup should have chart context and technical structure, not only social media excitement.", i: <Activity /> },
                { t: "Entry Zone", d: "The signal should clearly define where the setup starts making sense for a risk-aware trader.", i: <Target /> },
                { t: "Target Planning", d: "Targets should be treated as review areas for profit management, not guaranteed promises.", i: <TrendingUp /> },
                { t: "Invalidation", d: "The signal should explain where the setup idea becomes wrong and risk must be cut.", i: <ShieldAlert /> },
                { t: "Risk Context", d: "Downside and sizing must be discussed before upside is trusted in any Telegram note.", i: <AlertTriangle /> },
                { t: "Manual Onboarding", d: "Premium access should happen through verified manual onboarding routes, never via random DMs.", i: <Lock /> }
              ].map((card, i) => (
                <GlowCard key={i} className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-surface-deep rounded-2xl flex items-center justify-center text-primary">
                    {card.i}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-text leading-tight">{card.t}</h3>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </GlowCard>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Yaga Calls Method</Link>
              <Link href="/crypto-signals-with-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">See risk-managed crypto signals</Link>
              <Link href="/yaga-calls-review" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Read the Yaga Calls review</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Who Should Join a Crypto Trading Telegram Group? */}
      <Section className="bg-background py-24 border-t border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-center">Who Should Join <br /><span className="text-primary">a Telegram Trading Group?</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight text-center">
              Telegram can deliver information quickly. It cannot trade responsibly for the user.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8 shadow-2xl">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">A group may fit users who:</h3>
                <ul className="space-y-4">
                  {[
                    "want fast market updates and signal notes",
                    "prefer mobile-first Telegram delivery",
                    "want structured crypto signal setups",
                    "want to observe a provider first on Telegram",
                    "understand that all trading involves risk",
                    "can manage their own position sizing",
                    "check entries before acting on signal alerts",
                    "avoid fake Telegram admins and clone groups",
                    "prefer risk-aware, serious communication"
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
                    "want guaranteed profit from Telegram signals",
                    "want no-loss trading setups or alerts",
                    "blindly copy alerts without thinking",
                    "chase every message in the Telegram chat",
                    "use excessive leverage on every setup",
                    "trust random direct messages from 'admins'",
                    "cannot afford trading losses or volatility",
                    "want pump calls and quick excitement",
                    "expect someone else to be responsible for them"
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

      {/* SECTION 12 — Crypto Trading Telegram Group Checklist */}
      <Section className="bg-background py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Crypto Trading Telegram <br /><span className="text-primary">Group Checklist</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
               If the Telegram group cannot pass the checklist, do not rush into it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] text-left">
              {[
                "The group is linked from the official website.",
                "The admin route and ID are verified.",
                "The group does not promise guaranteed profit.",
                "The group explains market context for setups.",
                "Signal notes include entry price zones.",
                "Signal notes include target review areas.",
                "Signal notes include invalidation logic.",
                "Risk is discussed before upside potential.",
                "Historical proof is shown responsibly.",
                "Premium access paths are explained clearly.",
                "Payment requests are official and verified.",
                "Price has not already left the entry zone.",
                "Position size is calculated for the setup.",
                "Leverage risk is fully understood.",
                "The trader can afford the planned loss."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0 group">
                  <CheckCircle size={16} className="text-primary flex-shrink-0 group-hover:scale-125 transition-transform" /> {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Structure Over <br />
              <span className="text-primary">Speed Alone.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              A serious crypto trading Telegram group should help traders think more clearly before risk is taken. It should explain market context, entries, targets, invalidation, risk, official access, and what happens if a setup fails.
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
            <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-tight text-center">
              Yaga Calls provides educational crypto market analysis and signal ideas only. Crypto trading involves risk. Telegram groups and crypto signals do not guarantee profit, safety, execution quality, or loss prevention. Past performance does not guarantee future results. Every trader is responsible for their own decisions.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-surface-deep py-24 border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">Frequently Asked Questions <br /><span className="text-primary">About Telegram Trading Groups</span></h2>
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
