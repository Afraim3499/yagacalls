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
  Info
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { 
  createAboutPageSchema, 
  createFAQSchema, 
  createBreadcrumbSchema,
  createOrganizationSchema
} from "@/lib/schema";
import { BRAND_CONFIG } from "@/lib/constants/brand";

const SITE_URL = BRAND_CONFIG.siteUrl;
const CANONICAL_URL = `${SITE_URL}/about-yaga-calls`;

export const metadata: Metadata = {
  title: "About Yaga Calls | Official Crypto Signals & Telegram Guide",
  description: "Learn about Yaga Calls, also searched as Yagacall, Yaga Call or Yaga crypto signals. Official Telegram access, method, proof, pricing and risk guide.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "About Yaga Calls",
    description: "Official guide to Yaga Calls: crypto signals, Telegram access, brand search variations, method, proof, pricing, onboarding safety and risk disclaimers.",
    url: CANONICAL_URL,
    type: "website",
  },
};

export default function AboutYagaCallsPage() {
  const faqs = [
    {
      question: "What is Yaga Calls?",
      answer: "Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup notes, market narrative research, technical context, entry zones, targets, invalidation, risk-aware communication, selected proof examples, and manual premium onboarding."
    },
    {
      question: "Is Yagacall the same as Yaga Calls?",
      answer: "Yaga Calls is the official brand name. Yagacall is a common search variation or typo. Users should always use the official Yaga Calls website and verified Telegram links."
    },
    {
      question: "Is Yaga Call the same as Yaga Calls?",
      answer: "Yaga Call is a common singular variation. The official brand name is Yaga Calls."
    },
    {
      question: "Is Yaga the same as Yaga Calls?",
      answer: "Yaga may be used as shorthand by some users, but it can be ambiguous. For official access, use the Yaga Calls website and verified Telegram links."
    },
    {
      question: "Is Yaga Calls a crypto trading group?",
      answer: "Some users may describe Yaga Calls as a crypto trading group because it uses Telegram for market updates and signal delivery. More accurately, Yaga Calls is a Telegram-first crypto signal and market analysis provider. Read our full guide on what to look for in a serious <a href='/crypto-trading-group' class='text-primary hover:underline font-bold'>crypto trading group</a>."
    },
    {
      question: "Is Yaga Calls a Telegram crypto signals provider?",
      answer: "Yes. Yaga Calls uses Telegram for crypto signal delivery and market updates, with a focus on structured setup notes, entry zones, targets, invalidation, and risk-aware communication."
    },
    {
      question: "Does Yaga Calls guarantee profit?",
      answer: "No. Yaga Calls does not guarantee profit. Crypto trading involves risk, and all all content is educational market analysis, not financial advice."
    },
    {
      question: "How do I join the official Yaga Calls Telegram?",
      answer: "Use only official links from the Yaga Calls website or the official contact/onboarding page. Avoid random Telegram DMs, copied logos, fake admins, and unofficial payment requests."
    },
    {
      question: "How can I review Yaga Calls before premium?",
      answer: "Read the Yaga Calls method, review selected proof examples, join the free Telegram group, compare premium plans, and check the risk disclosure before deciding."
    },
    {
      question: "Who should avoid Yaga Calls?",
      answer: "Users should avoid Yaga Calls if they want guaranteed profit, no-loss trading, pump calls, random buy-now alerts, or someone else to take responsibility for trading decisions."
    }
  ];

  const aboutPageSchema = createAboutPageSchema({
    title: "About Yaga Calls | Official Crypto Signals & Telegram Guide",
    description: "Official brand guide for Yaga Calls, including brand search variations, Telegram access, method, proof, pricing, risk disclosure and safety guidance.",
    url: CANONICAL_URL
  });

  const organizationSchema = createOrganizationSchema();
  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About Yaga Calls", item: "/about-yaga-calls" }
  ]);

  return (
    <main className="bg-background text-text">
      <JsonLd data={aboutPageSchema} />
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
                  Official Brand Guide
                </span>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  About <br />
                  <span className="text-primary">Yaga Calls</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  {BRAND_CONFIG.brandName} is the official brand name for a Telegram-first crypto signal and market analysis provider focused on structured setup notes, market narrative research, entry zones, target planning, invalidation logic, and risk-aware communication.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed font-medium uppercase tracking-widest">
                  Some users search for the brand as Yagacall, Yaga Call, Yaga, Yaga crypto signals, or <Link href="/crypto-trading-telegram-group" className="text-primary hover:underline font-bold">crypto trading Telegram group</Link>. Official access should always come through the Yaga Calls website and verified Telegram links.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href={BRAND_CONFIG.officialTelegram} 
                  target="_blank"
                  trackingLabel="hero_about_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_about_method"
                >
                  Read the Method
                </CTAButton>
                <CTAButton 
                  href="/contact" 
                  variant="secondary"
                  trackingLabel="hero_about_contact"
                  className="hidden sm:inline-flex"
                >
                  Contact Support
                </CTAButton>
              </div>

              <p className="text-[10px] text-text-muted/60 uppercase tracking-widest font-black max-w-md mx-auto lg:mx-0">
                Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/50 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between border-b border-line pb-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Official Brand Snapshot</h3>
                    <ShieldCheck className="text-primary" size={24} />
                  </div>

                  <div className="space-y-4">
                    {[
                      { l: "Official Name", v: "Yaga Calls" },
                      { l: "Search Variations", v: "Yagacall, Yaga Call, Yaga" },
                      { l: "Category", v: "Telegram Crypto Signals" },
                      { l: "Focus", v: "Structured Setup Notes" },
                      { l: "Delivery", v: "Telegram-First" },
                      { l: "Risk Position", v: "Educational Only" },
                      { l: "Official Access", v: "Verified Links Only" },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-line/50 last:border-0 group">
                        <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.l}</span>
                        <span className="text-[10px] font-black uppercase tracking-tight text-text text-right">{row.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-tight text-center italic">
                      If a Telegram account contacts you first, verify it through the official website before trusting it.
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
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is Yaga Calls?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Yaga Calls is a Telegram-first crypto signal and market analysis provider for traders who want structured market setup notes instead of random pump alerts.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    The service focuses on market narrative research, technical setup context, entry zones, target planning, invalidation logic, risk-aware signal notes, selected proof examples, and manual premium Telegram onboarding. Yaga Calls provides the structure and context needed to evaluate market opportunities responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Official Brand Name and Search Variations */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Yaga Calls, Yagacall, <br /><span className="text-primary">Yaga Call and Yaga</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                The official brand name is Yaga Calls. Search variations help users find the official site.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                The official brand name is **Yaga Calls**. Some users search for the brand as Yagacall, Yaga Call, Yaga, Yaga crypto signals, or <Link href="/crypto-trading-telegram-group" className="text-primary hover:underline font-bold">crypto trading Telegram group</Link>. These search variations should lead users back to the official Yaga Calls website and verified Telegram links. The official brand remains Yaga Calls across all platforms.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-surface-deep shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-line bg-background">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Search Term</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Meaning</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Official Guidance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { t: "Yaga Calls", m: "Official brand name.", g: "Use this name for official references." },
                    { t: "Yagacall", m: "Common search variation or typo.", g: "Verify through the official website before joining any Telegram group." },
                    { t: "Yaga Call", m: "Singular variation of the brand name.", g: "The official brand is Yaga Calls." },
                    { t: "Yaga", m: "Short search variation that may be ambiguous.", g: "Search with crypto, signals, Telegram, or Yaga Calls for clearer results." },
                    { t: "Yaga crypto signals", m: "Brand + category search.", g: "Use official Yaga Calls website and verified Telegram links." },
                    { t: "Yaga crypto trading group", m: "User description of the Telegram/community context.", g: "Yaga Calls focuses on structured signal notes and market analysis, not pump calls." },
                    { t: "Yaga crypto Telegram group", m: "Search phrase for the Telegram delivery channel.", g: "Use official website links only and avoid random DMs." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.t}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.m}</td>
                      <td className="px-8 py-8 text-xs text-primary font-bold uppercase tracking-tight">{row.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center pt-8">
              <p className="text-[10px] text-text-muted/60 uppercase tracking-widest font-black">
                The official brand is Yaga Calls. The other terms are search variations, not separate brands.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — What Yaga Calls Does */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">What <br /><span className="text-primary">Yaga Calls Does</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Structure before action. Research before delivery.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                Yaga Calls helps serious crypto traders follow structured market ideas through Telegram. The service is built around a process that looks at market narratives, technical structure, entry zones, targets, invalidation, and risk context before signal notes are shared.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
              {[
                { t: "Market Narrative Research", d: "Yaga Calls studies the stories, catalysts, sector movements, and attention shifts that can influence crypto markets.", i: <Search /> },
                { t: "Technical Setup Context", d: "Signal ideas should have structure behind them, not only hype around a coin name.", i: <Activity /> },
                { t: "Entry Zone Planning", d: "A setup should explain where the trade starts making sense.", i: <Target /> },
                { t: "Target Mapping", d: "Targets should be treated as review areas, not guaranteed outcomes.", i: <TrendingUp /> },
                { t: "Invalidation Logic", d: "A serious setup should explain where the idea becomes wrong.", i: <ShieldAlert /> },
                { t: "Risk-Aware Notes", d: "Risk context helps traders think before acting.", i: <AlertTriangle /> },
                { t: "Telegram Delivery", d: "Telegram allows fast mobile-first delivery, but the method behind the signal matters more than the app.", i: <Zap /> }
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

            <div className="text-center pt-12">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the Yaga Calls Method →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — What Yaga Calls Does Not Do */}
      <Section className="bg-background py-24 border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">What Yaga Calls <br /><span className="text-danger">Does Not Do</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Honesty about limitations is essential for trust.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-center text-text-muted">
              <p>
                Yaga Calls is not positioned as a pump group, a guaranteed-profit system, or a no-loss trading product. Crypto trading involves risk, and every trader remains responsible for their own decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
              {[
                "Guarantee profit",
                "Promise fixed win rates",
                "Provide no-loss trading",
                "Sell pump-and-dump alerts",
                "Replace personal risk management",
                "Take responsibility for user trades",
                "Remove liquidation risk",
                "Make stop-losses risk-free",
                "Encourage random buy-now entries",
                "Ask users to trust unofficial Telegram DMs"
              ].map((item, i) => (
                <div key={i} className="p-6 bg-danger/5 border border-danger/10 rounded-2xl flex items-center gap-3">
                  <X className="text-danger flex-shrink-0" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-text font-bold italic">If a user wants certainty, Yaga Calls is not the right fit.</p>
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary">Risk Disclosure</Link>
                <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary">Risk Management</Link>
                <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary">Risk Calculator</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Is Yaga Calls a Crypto Trading Group? */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Is Yaga Calls a <br /><span className="text-primary">Crypto Trading Group?</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Addressing common user descriptions with specific brand context.
              </p>
            </div>

            <div className="p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="prose prose-invert prose-lg max-w-none relative z-10">
                <p className="text-text font-bold leading-relaxed">
                  Some users may describe Yaga Calls as a crypto trading group or crypto trading Telegram group because it uses Telegram for crypto signal delivery and market updates.
                </p>
                <p className="text-text-muted leading-relaxed">
                  More accurately, Yaga Calls is a Telegram-first crypto signal and market analysis provider focused on structured setup notes, market research, risk context, and official onboarding. While users may call it a crypto trading group, the actual positioning is more specific. The focus is structured signal notes and market analysis, not pump calls or random community noise.
                </p>
                <p className="text-text-muted leading-relaxed italic">
                  Yaga Calls can be searched as a crypto trading Telegram group, but the standard is structured market analysis and risk-aware signal delivery.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Telegram Signals Guide</Link>
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary">Premium Telegram Access</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Official Telegram Access and Safety */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Official Telegram <br /><span className="text-primary">Access and Safety</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Protecting users from fake groups and admins.
              </p>
            </div>

            <div className="p-10 md:p-14 bg-danger/5 border border-danger/20 rounded-[48px] space-y-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               
               <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 text-danger">
                  <ShieldAlert size={24} />
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">Official Safety Rule</h3>
                </div>
                <p className="text-xl text-text leading-tight font-bold uppercase tracking-tight">
                  Use only official Yaga Calls links from the website. Do not trust random Telegram DMs, copied groups, fake admins, unofficial payment requests, or guaranteed-profit claims.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {[
                  "Start from the official website.",
                  "Use the official free Telegram link.",
                  "Use the official contact/onboarding page for premium.",
                  "Avoid random DMs.",
                  "Avoid copied logos and similar names.",
                  "Do not send payment to unknown accounts.",
                  "Do not trust anyone promising guaranteed profit.",
                  "Confirm premium onboarding before joining private access."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text border-b border-line pb-4 last:border-0">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                  </div>
                ))}
              </div>

              <p className="text-center text-[10px] text-text-muted/60 uppercase tracking-widest font-black relative z-10">
                Telegram safety starts before you click join.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Official Support</Link>
              <Link href={BRAND_CONFIG.officialTelegram} className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary">Join Free Telegram</Link>
              <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary">Risk Disclosure</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — How to Evaluate Yaga Calls */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">How to Evaluate <br /><span className="text-primary">Yaga Calls Before Joining</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Observe, verify, then decide.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { s: "Step 1", t: "Read the Method", d: "Understand how Yaga Calls turns narratives, technical structure, entries, targets, and invalidation into signal notes.", l: "/method" },
                { s: "Step 2", t: "Review Proof Examples", d: "Treat selected proof examples as historical context, not future guarantees.", l: "/proof" },
                { s: "Step 3", t: "Join Free Telegram", d: "Observe the communication style and market tone before premium.", l: BRAND_CONFIG.officialTelegram },
                { s: "Step 4", t: "Compare Premium Plans", d: "Only review pricing after the method, proof, and risk position are clear.", l: "/pricing" },
                { s: "Step 5", t: "Use Official Onboarding", d: "Premium access should happen only through official contact or Telegram onboarding routes.", l: "/contact" },
                { s: "Step 6", t: "Manage Your Own Risk", d: "Every trader remains responsible for position sizing, stop-losses, leverage, and execution.", l: "/crypto-risk-management" }
              ].map((step, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] flex flex-col md:flex-row items-center gap-8 group hover:border-primary/40 transition-colors">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors leading-none shrink-0">{step.s}</span>
                  <div className="space-y-2 text-center md:text-left flex-grow">
                    <h4 className="text-sm font-black uppercase tracking-widest text-text">{step.t}</h4>
                    <p className="text-[11px] text-text-muted font-medium">{step.d}</p>
                  </div>
                  <Link href={step.l} className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 group-hover:underline">
                    View <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-[10px] text-text-muted/60 uppercase tracking-widest font-black pt-8">
              The correct path is observe, verify, then decide.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Who Yaga Calls Is For and Not For */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-center">Who Yaga Calls <br /><span className="text-primary">Is For</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8 shadow-2xl">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Yaga Calls may fit users who:</h3>
                <ul className="space-y-4">
                  {[
                    "want Telegram-first crypto signal notes",
                    "prefer structured market context",
                    "care about entries, targets, and invalidation",
                    "want to observe free access first",
                    "value method and proof over hype",
                    "understand trading risk",
                    "can manage position sizing independently",
                    "want serious market notes instead of pump alerts"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8 shadow-2xl opacity-80">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-text-muted">Yaga Calls is not for users who:</h3>
                <ul className="space-y-4">
                  {[
                    "want guaranteed monthly profit",
                    "want no-loss trading",
                    "want cheap pump calls",
                    "want random buy-now alerts",
                    "trust unofficial Telegram DMs",
                    "cannot afford trading losses",
                    "use leverage without risk control",
                    "want someone else to take responsibility"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X className="text-danger flex-shrink-0" size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-[10px] text-text-muted/60 uppercase tracking-widest font-black pt-8">
              Yaga Calls is built for traders who want structure before action.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Key Pages to Review */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">Key Yaga Calls <br /><span className="text-primary">Pages to Review</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Complete your research before joining premium.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Method", u: "/method", d: "Understand the Yaga Calls research and signal process." },
                { t: "Proof", u: "/proof", d: "Review selected historical proof examples with disclaimers." },
                { t: "Pricing", u: "/pricing", d: "Compare current premium access options." },
                { t: "Telegram Signals", u: "/telegram-crypto-signals", d: "Learn how Telegram signal delivery works." },
                { t: "Premium Telegram", u: "/premium-telegram-crypto-signals", d: "Understand private/premium Telegram access." },
                { t: "Risk Management", u: "/crypto-risk-management", d: "Learn account survival, sizing, and leverage risk." },
                { t: "Risk Calculator", u: "/position-sizing-calculator", d: "Estimate trade size based on risk and stop-loss." },
                { t: "Official Contact", u: "/contact", d: "Use official manual onboarding and support routes." },
                { t: "Risk Disclosure", u: "/risk-disclosure", d: "Read the full risk disclosure." }
              ].map((link, i) => (
                <Link key={i} href={link.u} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-all group">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-black uppercase tracking-widest text-text group-hover:text-primary transition-colors">{link.t}</h4>
                    <ArrowRight size={16} className="text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{link.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Official External Profiles */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Official <br /><span className="text-primary">External Profiles</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Yaga Calls uses official website and verified profile links to reduce impersonation risk.
              </p>
            </div>

            <div className="p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="prose prose-invert prose-lg max-w-none relative z-10 text-text-muted text-center italic">
                <p>
                  To protect our community from fake groups and impersonators, we are in the process of verifying and standardizing all official external profiles. Only trust profiles that are explicitly confirmed on this website.
                </p>
                <div className="mt-8 p-6 bg-background/50 border border-line rounded-2xl not-prose">
                  <p className="text-xs font-black uppercase tracking-widest text-primary">TODO: Add official external profiles after ownership and cleanup are confirmed.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                { t: "Official Website", d: "https://www.yagacalls.com", s: "Live" },
                { t: "Official Telegram", d: "t.me/yagacalls", s: "Live" },
                { t: "Binance Square", d: "TBD", s: "Pending Cleanup" },
                { t: "X (Twitter)", d: "TBD", s: "Pending Verification" },
                { t: "LinkedIn", d: "TBD", s: "Pending Verification" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-surface-deep border border-line rounded-3xl space-y-2 opacity-60">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-text">{item.t}</h4>
                  <p className="text-[10px] text-text-muted font-bold truncate">{item.d}</p>
                  <span className="text-[8px] font-black uppercase tracking-widest text-primary/40">{item.s}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Start With the <br />
              <span className="text-primary">Official Website.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              If you are searching for Yaga Calls, Yagacall, Yaga Call, Yaga crypto signals, or Yaga crypto trading group, start from the official Yaga Calls website. Review the method, proof, pricing, Telegram access, risk disclosure, and official contact routes before joining any premium group.
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
              Yaga Calls provides educational crypto market analysis and signal ideas only. Crypto trading involves risk. Telegram signals do not guarantee profit, safety, execution quality, or loss prevention. Past performance does not guarantee future results. Every trader is responsible for their own decisions.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-surface-deep py-24 border-t border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Frequently Asked <br /><span className="text-primary">Questions About Yaga Calls</span></h2>
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
