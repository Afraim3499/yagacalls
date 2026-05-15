import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import { 
  CheckCircle2, 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  FileText, 
  TrendingUp, 
  PieChart, 
  Target, 
  ArrowRight,
  Search,
  Activity,
  Lock,
  Eye,
  HelpCircle,
  ShieldAlert,
  Clock,
  Briefcase
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { 
  createWebPageSchema, 
  createFAQSchema, 
  createBreadcrumbSchema,
  createOrganizationSchema
} from "@/lib/schema";
import { BRAND_CONFIG } from "@/lib/constants/brand";

const SITE_URL = BRAND_CONFIG.siteUrl;
const CANONICAL_URL = `${SITE_URL}/free-vs-paid-crypto-signals`;

export const metadata: Metadata = {
  title: "Free vs Paid Crypto Signals | What Premium Actually Adds",
  description: "Compare free vs paid crypto signals. Learn what free groups are good for, what premium may add, red flags, risk checks and when paid access makes sense.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Free vs Paid Crypto Signals",
    description: "A serious comparison of free and paid crypto signals: Telegram groups, premium access, proof, pricing, risk management, red flags and Yaga Calls’ approach.",
    url: CANONICAL_URL,
    type: "website",
  }
};

export default function FreeVsPaidCryptoSignalsPage() {
  const faqs = [
    {
      question: "What is the difference between free and paid crypto signals?",
      answer: "Free crypto signals are usually public alerts, sample setups, or limited market notes. Paid crypto signals may offer private access, deeper setup notes, more focused updates, and premium Telegram delivery. Paid does not guarantee profit or quality."
    },
    {
      question: "Are paid crypto signals worth it?",
      answer: "Paid crypto signals may be worth evaluating if they add clearer structure, market context, risk language, official access, and transparent pricing. They are not worth it if they only add hype, pressure, or fake certainty."
    },
    {
      question: "Are free crypto signals useful?",
      answer: "Yes. Free crypto signals can help users observe a provider’s communication style, signal structure, risk language, and Telegram delivery before considering premium access."
    },
    {
      question: "Do paid crypto signals guarantee profit?",
      answer: "No. Paid crypto signals do not guarantee profit. Crypto trading involves risk, and every trader remains responsible for position sizing, stop-losses, leverage, and execution."
    },
    {
      question: "What should paid crypto signals include?",
      answer: "Paid crypto signals should ideally include clear entry zones, target planning, invalidation, market context, risk notes, official onboarding, and more focused follow-up."
    },
    {
      question: "What are red flags in paid crypto signals?",
      answer: "Red flags include guaranteed-profit claims, 100% accuracy promises, no-loss trading, random payment DMs, fake Telegram admins, no invalidation, only winning screenshots, and cheap lifetime VIP pressure."
    },
    {
      question: "Should I join a free Telegram group before paying?",
      answer: "Yes. A free Telegram group can help users observe provider quality, communication style, risk language, and whether premium access fits their trading style."
    },
    {
      question: "How does Yaga Calls handle free vs premium access?",
      answer: "Yaga Calls encourages users to observe free Telegram first, read the method, review selected proof examples, compare premium plans, and use official onboarding only if the structure fits their risk tolerance."
    },
    {
      question: "Who should stay with free crypto signals?",
      answer: "Users should stay free if they are still learning, cannot manage risk, do not understand stop-losses, cannot afford premium comfortably, or expect guaranteed profit."
    },
    {
      question: "Who may consider paid crypto signals?",
      answer: "Paid access may fit users who understand trading risk, can evaluate method and proof, know basic risk management, and want deeper structured signal access through official routes."
    }
  ];

  const webPageSchema = createWebPageSchema({
    title: "Free vs Paid Crypto Signals | What Premium Actually Adds",
    description: "Compare free vs paid crypto signals. Learn what free groups are good for, what premium may add, red flags, risk checks and when paid access makes sense.",
    url: CANONICAL_URL,
    datePublished: "2024-05-16",
    dateModified: "2024-05-16"
  });

  const organizationSchema = createOrganizationSchema();
  const faqSchema = createFAQSchema(faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Guides", item: "/academy" },
    { name: "Free vs Paid Crypto Signals", item: "/free-vs-paid-crypto-signals" }
  ]);

  return (
    <main className="bg-background text-text">
      <JsonLd data={webPageSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* SECTION 0 — HERO */}
      <Section className="pt-32 pb-20 md:pt-48 md:pb-24 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Crypto Signal Comparison Guide
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Free vs Paid <br />
                  <span className="text-primary">Crypto Signals</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-lg md:text-xl text-text leading-tight font-bold uppercase tracking-tight">
                  Free crypto signals can help traders observe a provider’s communication style. Paid crypto signals may offer deeper structure, private access, and more focused updates. Neither free nor paid signals can guarantee profit.
                </p>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  Before paying for any crypto signal provider, review the method, proof context, risk language, Telegram safety, pricing clarity, and whether premium access fits your trading style.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href={BRAND_CONFIG.officialTelegram}
                  target="_blank"
                  trackingLabel="hero_free_vs_paid_join_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/pricing" 
                  variant="secondary"
                  trackingLabel="hero_free_vs_paid_pricing"
                >
                  Compare Premium Plans
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  className="hidden sm:inline-flex"
                >
                  Read the Method
                </CTAButton>
              </div>

              <div className="pt-8 p-6 bg-background/40 border border-line rounded-3xl backdrop-blur-sm inline-block w-full max-w-xl">
                <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-widest">
                  Educational market analysis only. Crypto trading involves risk. Free or paid crypto signals do not guarantee profit, safety, execution quality, or loss prevention.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/80 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="space-y-8 relative z-10">
                  <h3 className="text-xl font-black uppercase tracking-tighter border-b border-line pb-6">Free vs Paid Snapshot</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-text">Free Signals</p>
                      </div>
                      <p className="text-xs text-text-muted font-medium pl-6">Best for observation and basic learning.</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-primary" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-text">Paid Signals</p>
                      </div>
                      <p className="text-xs text-text-muted font-medium pl-6">May offer deeper structure and private access.</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <HelpCircle size={16} className="text-primary" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-text">Main Question</p>
                      </div>
                      <p className="text-xs text-text-muted font-medium pl-6">Does premium add process, or just more noise?</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ShieldAlert size={16} className="text-danger" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-text">Risk Rule</p>
                      </div>
                      <p className="text-xs text-text-muted font-medium pl-6">Payment does not remove trading risk.</p>
                    </div>

                    <div className="pt-6 border-t border-line space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-text leading-tight">Yaga Standard:</p>
                      <p className="text-[11px] text-text-muted font-medium leading-relaxed italic">
                        Observe free first, then review method, proof, pricing and risk.
                      </p>
                    </div>

                    <div className="pt-2 text-center">
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest">
                        Premium should mean more structure, not more hype.
                      </p>
                    </div>
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
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] relative overflow-hidden text-center md:text-left">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Is the Difference Between Free and Paid Crypto Signals?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Free crypto signals are usually public market alerts, basic setup notes, or limited signal examples shared without payment. Paid crypto signals usually offer private access, deeper setup notes, more frequent updates, premium Telegram delivery, or more structured follow-up. 
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Paid does not automatically mean better. A serious trader should compare method, proof context, risk language, entries, targets, invalidation, Telegram safety, and pricing before paying. The transition from free to paid should only happen after a trader understands the provider's process and confirms that the added structure fits their trading style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — What Are Free Crypto Signals? */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Are <br /><span className="text-primary">Free Crypto Signals?</span></h2>
              <p className="text-xl text-text font-bold leading-relaxed">
                Free crypto signals are trading setup notes, market alerts, or public signal examples shared without payment. They are useful for observing a provider’s style, risk language, entry clarity, and communication quality before deciding whether premium access is worth considering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="prose prose-invert prose-lg text-text-muted">
                  <p>
                    Free signals may include public Telegram alerts, sample setup notes, basic market updates, or educational examples. They act as a public window into the provider's tone and analytical depth.
                  </p>
                </div>
                
                <GlowCard className="p-8 space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Free signals are good for:</h4>
                  <ul className="space-y-4">
                    {[
                      "Evaluating the provider's tone",
                      "Learning signal structure",
                      "Checking whether risk is mentioned",
                      "Seeing if the provider uses hype",
                      "Observing community behavior",
                      "Testing Telegram delivery fit"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-tight text-text">
                        <CheckCircle2 size={16} className="text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </div>

              <div className="space-y-8">
                <GlowCard className="p-8 space-y-6 border-danger/20">
                  <h4 className="text-xs font-black uppercase tracking-widest text-danger">Free signals limitations:</h4>
                  <ul className="space-y-4">
                    {[
                      "Limited signal depth",
                      "Fewer follow-up updates",
                      "Delayed access vs premium",
                      "Less private market context",
                      "Public channel noise",
                      "Promotional pressure from weak providers"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                        <X size={16} className="text-danger shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>

                <div className="p-6 bg-surface-deep border border-line rounded-3xl text-center">
                  <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-4">
                    Free signals are useful for evaluation. They are not a substitute for risk management.
                  </p>
                  <Link href="/telegram-crypto-signals" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                    Learn how Telegram crypto signals work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — What Are Paid Crypto Signals? */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-right md:text-left">What Are <br /><span className="text-primary">Paid Crypto Signals?</span></h2>
              <p className="text-xl text-text font-bold leading-relaxed text-right md:text-left">
                Paid crypto signals are signal notes, market updates, or private trading setup alerts provided through a paid plan, subscription, or premium group. Paid access may include deeper research, more structured notes, private Telegram delivery, and more focused updates. But payment does not guarantee profit or quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1 space-y-8">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Paid signals should add:</h4>
                <ul className="space-y-4">
                  {[
                    "More structured setup notes",
                    "Deeper market narrative context",
                    "Clearer risk framing",
                    "Focused follow-up comments",
                    "Official manual onboarding",
                    "Transparent pricing clarity"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 size={16} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>

                <div className="p-6 bg-surface-deep border border-line rounded-3xl text-center">
                  <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-4">
                    Paid access should unlock more process, not more noise.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/premium-telegram-crypto-signals" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                      Understand premium Telegram →
                    </Link>
                    <Link href="/pricing" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                      Compare current plans →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-8">
                <div className="prose prose-invert prose-lg text-text-muted">
                  <p>
                    Premium access usually targets traders who have already observed a provider's free output and decided that deeper structure or private access supports their workflow. Paid signals should not be an emotional purchase triggered by FOMO.
                  </p>
                </div>
                
                <h4 className="text-xs font-black uppercase tracking-widest text-danger">Paid signals should NOT add:</h4>
                <ul className="space-y-4">
                  {[
                    "Fake market certainty",
                    "Aggressive profit promises",
                    "Random pump-and-dump calls",
                    "Hidden payment pressure",
                    "Fake result screenshots",
                    "No-loss claims"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X size={16} className="text-danger shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Comparison Table */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Free vs Paid <br /><span className="text-primary">Crypto Signals Compared</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                The question is not "free or paid?" The question is "does the provider show enough process to earn trust?"
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Factor</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Free Crypto Signals</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Paid Crypto Signals</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">What to Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Cost", fr: "Free: No payment required.", p: "Paid: Subscription or premium fee.", c: "Can you evaluate before paying?" },
                    { f: "Signal Depth", fr: "Usually limited or sample-level.", p: "May offer deeper structure.", c: "Does premium add method and context?" },
                    { f: "Telegram Access", fr: "Public group or channel.", p: "Private group or manual onboarding.", c: "Are official links clear?" },
                    { f: "Entry Zones", fr: "May be limited or inconsistent.", p: "Should be clearer and more structured.", c: "Are entries specific to avoid chasing?" },
                    { f: "Targets", fr: "May be basic.", p: "Should include planned review areas.", c: "Are targets realistic, not hype?" },
                    { f: "Invalidation", fr: "Often missing in weak groups.", p: "Should include invalidation/stop-loss.", c: "Does the provider explain where it's wrong?" },
                    { f: "Risk Notes", fr: "May be light.", p: "Should be visible and consistent.", c: "Is risk discussed before upside?" },
                    { f: "Follow-Up", fr: "Usually limited.", p: "May include more focused updates.", c: "Does the provider update ideas responsibly?" },
                    { f: "Proof", fr: "May show selected examples.", p: "May show deeper historical examples.", c: "Is proof contextual or just screenshots?" },
                    { f: "Best Use", fr: "Observation and basic learning.", p: "Structured access after evaluation.", c: "Do you understand the method first?" },
                    { f: "Main Risk", fr: "Noise, limited depth, sales pressure.", p: "Payment pressure, fake groups, poor quality.", c: "Does provider avoid guaranteed-profit?" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.fr}</td>
                      <td className="px-8 py-8 text-xs text-text font-bold uppercase tracking-tight">{row.p}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Are Paid Signals Worth It? */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Are Paid Crypto <br /><span className="text-primary">Signals Worth It?</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Premium access should be a considered decision, not an emotional reaction to FOMO.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                Paid crypto signals may be worth evaluating if they provide clearer structure, stronger market context, official access, risk-aware communication, and transparent pricing. They are not worth it if they only add hype, more frequent noise, fake profit screenshots, or pressure to pay quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-primary">Paid May Make Sense When:</h3>
                <ul className="space-y-6">
                  {[
                    "The free group shows discipline",
                    "The provider explains its method",
                    "Entries and invalidation are clear",
                    "Proof is reviewed responsibly",
                    "Pricing is transparent",
                    "User understands market risk"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-xs font-bold uppercase tracking-tight text-text">
                      <CheckCircle2 size={16} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-danger">Paid DOES NOT Sense When:</h3>
                <ul className="space-y-6">
                  {[
                    "User wants guaranteed income",
                    "User cannot afford trading losses",
                    "Provider pressures for payment",
                    "No visible method exists",
                    "Proof is only screenshots",
                    "User plans to blindly copy"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-xs font-bold uppercase tracking-tight text-text-muted">
                      <X size={16} className="text-danger shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/how-to-choose-a-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Use the provider selection checklist</Link>
              <Link href="/yaga-calls-review" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Read the Yaga Calls review</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — What Free Signals Are Best For */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What Free Crypto <br /><span className="text-primary">Signals Are Best For</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                A serious provider should not fear free observation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Observing Tone", d: "Free access lets users see whether the provider communicates calmly or uses pressure.", i: <Eye /> },
                { t: "Checking Structure", d: "Users can review whether signals include entries, targets, invalidation, and risk notes.", i: <FileText /> },
                { t: "Testing Delivery", d: "Free groups show whether Telegram delivery fits the user's routine.", i: <Clock /> },
                { t: "Learning Format", d: "Beginners can learn how signal notes are built before paying for access.", i: <Target /> },
                { t: "Spotting Red Flags", d: "Free access helps users notice hype, fake urgency, or weak risk language.", i: <ShieldAlert /> },
                { t: "Deciding Fit", d: "Observation helps users decide whether deeper access is worth considering.", i: <Briefcase /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 group hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {card.i}
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text leading-tight">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — What Paid Signals Should Add */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">What Paid Crypto <br /><span className="text-primary">Signals Should Add</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Paid signals should add more structure, not just more alerts.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                Premium access should ideally provide clearer entry logic, target planning, invalidation, market context, risk notes, official onboarding, and more focused updates. If paid access only means more random calls, it is not a serious premium product.
              </p>
            </div>

            <div className="p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  "Clearer setup structure",
                  "More complete market reasoning",
                  "Better entry zone planning",
                  "More defined target mapping",
                  "Invalidation or stop-loss context",
                  "More consistent risk reminders",
                  "Cleaner Telegram delivery",
                  "Better follow-up logic",
                  "Official premium onboarding",
                  "Transparent plan details",
                  "Responsible proof examples",
                  "Less noise, not more chaos"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0 md:last:border-b group">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 group-hover:rotate-12 transition-transform" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Red Flags */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Red Flags <br /><span className="text-danger">in Crypto Signals</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                If a provider sells certainty, question everything else.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                Avoid free or paid crypto signals that promise guaranteed profit, claim 100% accuracy, hide risk, pressure users into payment, show only winning screenshots, or provide no invalidation logic. 
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { r: "Guaranteed Profit", d: "Trading involves risk; certainty is a major deception." },
                { r: "100% Accuracy", d: "No trader wins every trade; fake accuracy hides reality." },
                { r: "No-Loss Trading", d: "Losses are part of professional trading; anyone saying otherwise is lying." },
                { r: "Buy-Now Urgency", d: "Fake scarcity is used to force emotional, non-logical decisions." },
                { r: "No Invalidation", d: "Every trade idea must have a price level where it is proven wrong." },
                { r: "Only Winning Screens", d: "Real trading includes losses; cherry-picked wins are misleading." },
                { r: "Random Payment DMs", d: "Official providers use verified routes, not random Telegram messages." },
                { r: "Cheap Lifetime VIP", d: "Quality research has costs; 'lifetime' offers often lead to abandonment." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-3 group hover:border-danger/30 transition-colors">
                  <div className="flex gap-3 items-center text-danger">
                    <X size={18} />
                    <h4 className="text-xs font-black uppercase tracking-widest leading-tight">{item.r}</h4>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-12">
              <Link href="/crypto-signal-provider-comparison" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Compare crypto signal providers</Link>
              <Link href="/risk-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Read the risk disclosure</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Telegram Specifics */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Free vs Paid <br /><span className="text-primary">Telegram Crypto Signals</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Telegram speed is useful only when the source is official.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-text">Free Telegram</h3>
                <ul className="space-y-4">
                  {[
                    "Public channel access",
                    "Sample signal notes",
                    "Basic market commentary",
                    "Observation of tone",
                    "Higher noise-to-signal ratio"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                      <CheckCircle2 size={16} className="text-primary shrink-0 opacity-50" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-primary">Paid Telegram</h3>
                <ul className="space-y-4">
                  {[
                    "Private channel access",
                    "Deeper structured signal notes",
                    "Focused private updates",
                    "Manual onboarding path",
                    "Cleaner signal delivery"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                      <Zap size={16} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-10 bg-danger/5 border border-danger/20 rounded-[48px] text-center space-y-4">
              <h4 className="text-lg font-black uppercase tracking-tighter text-danger">Official Telegram Safety Rule:</h4>
              <p className="text-text font-bold leading-relaxed max-w-2xl mx-auto">
                Use only official provider links from the website. Avoid copied groups, fake admins, random DMs, unofficial payment requests, and guaranteed-profit claims.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Telegram guide</Link>
              <Link href="/crypto-trading-telegram-group" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Choose groups safely</Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Use official onboarding</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Yaga Approach */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-text">How Yaga Calls Handles <br /><span className="text-primary">Free vs Paid Access</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Yaga Calls does not ask users to trust blindly. The correct path is observe, verify, then decide.
              </p>
            </div>

            <div className="prose prose-invert prose-lg text-text-muted text-center max-w-3xl mx-auto">
              <p>
                Yaga Calls encourages users to evaluate the brand before premium. Users can start with free Telegram access, read the method, review selected proof examples, compare premium plans, and use official onboarding only if the structure fits their trading style and risk tolerance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { t: "1. Observe Free", d: "Start by observing the public channel tone and basic setup examples." },
                { t: "2. Review Method", d: "Read the method to understand technical structure and risk logic." },
                { t: "3. Review Proof", d: "Inspect selected historical examples as context, not guarantees." },
                { t: "4. Compare Plans", d: "Review the pricing page for quarterly, semi-annual or annual access." },
                { t: "5. Official Onboarding", d: "Join premium only through official website links and manual Telegram routes." },
                { t: "6. Manage Risk", d: "Stay responsible for your own position sizing, leverage, and stop-losses." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">{item.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read the Method</Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Review Proof Examples</Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Compare Premium Plans</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Yaga Free vs Premium Table */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Yaga Calls <br /><span className="text-primary">Free vs Premium Access</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                Free is for observation. Premium is for users who already understand the risk.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl mt-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Feature</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Free Telegram</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Premium Telegram</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">What to Know</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Purpose", fr: "Observe style and market tone.", p: "Deeper structured signal delivery.", k: "Start free if unsure." },
                    { f: "Cost", fr: "Free.", p: "Paid plan (Quarterly/Yearly).", k: "Check current pricing page." },
                    { f: "Signal Depth", fr: "Limited public-facing notes.", p: "More structured private setup notes.", k: "Premium adds structure." },
                    { f: "Follow-Up", fr: "Limited.", p: "Focused private updates where applicable.", k: "Follow-up doesn't guarantee outcomes." },
                    { f: "Risk Context", fr: "Educational public context.", p: "Risk-aware signal structure.", k: "Risk remains user responsibility." },
                    { f: "Onboarding", fr: "Official free Telegram route.", p: "Manual premium onboarding path.", k: "Avoid random DMs." },
                    { f: "Best Fit", fr: "Users evaluating Yaga Calls.", p: "Users who understand method and risk.", k: "Not for guaranteed-profit seekers." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-text-muted font-medium">{row.fr}</td>
                      <td className="px-8 py-8 text-xs text-text font-bold uppercase tracking-tight">{row.p}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.k}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Who Should Stay Free? */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Who Should Stay With <br /><span className="text-primary">Free Crypto Signals?</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] text-left">
              {[
                "Still learning basic signal structure",
                "Do not understand stop-losses",
                "Do not know position sizing",
                "Have not reviewed the provider's method",
                "Have not checked proof responsibly",
                "Cannot afford premium comfortably",
                "Expect guaranteed profit",
                "Trading with money needed for expenses",
                "Trying to recover losses emotionally",
                "Cannot manage risk independently"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text-muted border-b border-line/50 pb-4 last:border-0 group">
                  <X size={16} className="text-danger flex-shrink-0 group-hover:rotate-12 transition-transform" /> {item}
                </div>
              ))}
            </div>
            
            <div className="text-center pt-8 space-y-8">
              <p className="text-xl text-text font-black uppercase tracking-tight">
                "Staying free is better than paying before you understand what you are buying."
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <Link href="/crypto-risk-management" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Read risk management guide</Link>
                <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Use position sizing tool</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Who May Consider Paid? */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-right md:text-left">Who May Consider <br /><span className="text-primary">Paid Crypto Signals?</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-surface-deep border border-line rounded-[48px] text-left">
              {[
                "Understand that losses can happen",
                "Can evaluate method and proof context",
                "Know basic risk management rules",
                "Can calculate position size manually",
                "Can use stop-losses independently",
                "Can afford premium without pressure",
                "Want deeper structured signal notes",
                "Prefer Telegram-first market updates",
                "Use official onboarding routes only",
                "Do not expect guaranteed profit"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line/50 pb-4 last:border-0 group">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0 group-hover:rotate-12 transition-transform" /> {item}
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-xl text-text font-black uppercase tracking-tight">
                "Paid access may support a process. It cannot replace judgment."
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — Decision Framework */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Free vs Paid Signals: <br /><span className="text-primary">Decision Framework</span></h2>
              <p className="text-xl text-text-muted font-bold uppercase tracking-tight">
                If the decision feels urgent, wait.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { s: "Step 1", t: "Observe Free", d: "Join the free group and study communication quality, signal structure, risk language, and provider behavior." },
                { s: "Step 2", t: "Verify Process", d: "Read the method, review proof examples, check pricing, and confirm official Telegram onboarding routes." },
                { s: "Step 3", t: "Decide Calmly", d: "Only consider paid access if the structure fits your trading style, budget, and personal risk tolerance." }
              ].map((step, i) => (
                <div key={i} className="p-10 bg-surface-deep border border-line rounded-[48px] space-y-4 relative overflow-hidden group">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{step.s}</span>
                  <h4 className="text-xl font-black uppercase tracking-tighter text-text">{step.t}</h4>
                  <p className="text-[13px] text-text-muted leading-relaxed font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 15 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,183,141,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Start Free, Verify, <br />
              <span className="text-primary">Then Decide.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              The real difference between free and paid crypto signals is not just price. The real difference should be structure, context, risk language, official access, and follow-up quality.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href={BRAND_CONFIG.officialTelegram} 
              target="_blank"
              trackingLabel="final_free_paid_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/pricing" 
              variant="secondary"
              trackingLabel="final_free_paid_pricing"
              className="px-10 py-5 text-base"
            >
              Compare Premium Plans
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/method" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Read the Method
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Review Proof Examples
              </Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Official Onboarding
              </Link>
            </div>
            <p className="mt-10 text-[10px] text-text-muted/60 italic uppercase tracking-widest leading-relaxed max-w-md mx-auto">
              Yaga Calls provides educational crypto market analysis and signal ideas only. Crypto trading involves risk. Free or paid crypto signals do not guarantee profit, safety, execution quality, or loss prevention.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
