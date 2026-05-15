import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import FAQSection from "@/components/shared/FAQSection";
import GlowCard from "@/components/shared/GlowCard";
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
  Navigation,
  Compass,
  Briefcase,
  TrendingUp,
  Search,
  ShieldAlert,
  Clock,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Telegram Crypto Signals | How to Read & Verify Groups",
  description: "Learn how Telegram crypto signals work, how to read entries, targets and stop-losses, avoid fake groups, and compare free vs premium signal access.",
  alternates: {
    canonical: "https://www.yagacalls.com/telegram-crypto-signals",
  },
  openGraph: {
    title: "Telegram Crypto Signals Guide",
    description: "A serious guide to Telegram crypto signals: signal structure, free vs paid groups, fake admin safety, and risk checks.",
    type: "article",
    url: "https://www.yagacalls.com/telegram-crypto-signals",
  }
};

export default function TelegramCryptoSignalsPage() {
  const faqs = [
    {
      question: "What are Telegram crypto signals?",
      answer: "Telegram crypto signals are trading setup notes or market alerts delivered through Telegram channels, groups, or private communities. A serious signal should include asset, market reason, entry zone, targets, invalidation, and risk context."
    },
    {
      question: "Are Telegram crypto signals safe?",
      answer: "Telegram crypto signals are only as safe as the provider's process and the trader's risk management. Users should verify official links, avoid fake admins, check entries, and never trust guaranteed-profit claims."
    },
    {
      question: "Why are crypto signals sent on Telegram?",
      answer: "Telegram is popular for crypto signals because it is fast, mobile-first, and useful for group or private community delivery. But speed does not guarantee signal quality."
    },
    {
      question: "What should a Telegram crypto signal include?",
      answer: "A serious Telegram crypto signal should include the asset or pair, setup direction, market reason, entry zone, targets, stop-loss or invalidation, risk note, and follow-up logic."
    },
    {
      question: "Are free Telegram crypto signals useful?",
      answer: "Free Telegram crypto signals can help users observe a provider's communication style, risk language, and signal structure before paying. They may be limited compared with premium access."
    },
    {
      question: "Are premium Telegram crypto signals better?",
      answer: "Premium Telegram crypto signals may offer deeper structure, private access, and more focused updates. But payment does not guarantee profit. Users should review method, proof, and risk language first."
    },
    {
      question: "How do I avoid fake Telegram crypto signal groups?",
      answer: "Use only official links from the provider's website, avoid random DMs, confirm group names and admins, and never send payment to unofficial accounts or unknown contacts."
    },
    {
      question: "Should I follow a Telegram signal if the entry zone already passed?",
      answer: "Traders should be careful if the entry zone has already passed. Entering late can change stop distance, position sizing, risk-to-reward, and the quality of the setup."
    },
    {
      question: "How does Yaga Calls use Telegram?",
      answer: "Yaga Calls uses Telegram for fast delivery of structured crypto signal notes built around market narrative research, technical structure, entry zones, targets, invalidation, and risk context."
    },
    {
      question: "Does Yaga Calls guarantee Telegram signal results?",
      answer: "No. Yaga Calls does not guarantee results. Crypto trading involves risk, and all Yaga Calls content is educational market analysis, not financial advice."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yagacalls.com/telegram-crypto-signals#webpage",
        "url": "https://www.yagacalls.com/telegram-crypto-signals",
        "name": "Telegram Crypto Signals | How to Read & Verify Groups",
        "description": "Educational guide on how to read, verify, and use Telegram crypto signal groups safely.",
        "isPartOf": { "@id": "https://www.yagacalls.com/#website" }
      },
      {
        "@type": "Article",
        "@id": "https://www.yagacalls.com/telegram-crypto-signals#article",
        "headline": "Telegram Crypto Signals: How to Read, Verify and Use Signal Groups Safely",
        "description": "Learn the structure of serious Telegram crypto signals, how to identify fake admins, and how to manage risk when following Telegram signal groups.",
        "author": { "@type": "Organization", "name": "Yaga Calls" },
        "publisher": { "@id": "https://www.yagacalls.com/#organization" },
        "image": "https://www.yagacalls.com/og-telegram-signals.jpg",
        "datePublished": "2024-05-15",
        "dateModified": "2024-05-15"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yagacalls.com/telegram-crypto-signals#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yagacalls.com/" },
          { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.yagacalls.com/academy" },
          { "@type": "ListItem", "position": 3, "name": "Telegram Crypto Signals", "item": "https://www.yagacalls.com/telegram-crypto-signals" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yagacalls.com/telegram-crypto-signals#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }
    ]
  };

  return (
    <main className="bg-background text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 0 — HERO */}
      <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 relative z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full inline-block">
                  Telegram Signal Guide
                </span>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Telegram <br />
                  <span className="text-primary">Crypto Signals</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl md:text-2xl text-text leading-tight font-bold uppercase tracking-tight">
                  Telegram crypto signals are market setup notes delivered through Telegram. A serious signal must explain the asset, market reason, entry zone, and risk before a trader acts.
                </p>
                <p className="text-sm text-text-muted/80 leading-relaxed font-medium uppercase tracking-widest">
                  Telegram is fast. Speed only helps when the signal is structured, official, and risk-aware.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="hero_telegram_free"
                >
                  Join Free Telegram
                </CTAButton>
                <CTAButton 
                  href="/method" 
                  variant="secondary"
                  trackingLabel="hero_telegram_method"
                >
                  The Yaga Method
                </CTAButton>
                <CTAButton 
                  href="/premium-telegram-crypto-signals" 
                  variant="secondary"
                  trackingLabel="hero_telegram_premium"
                  className="hidden sm:inline-flex"
                >
                  Compare Premium
                </CTAButton>
              </div>

              <p className="text-[10px] text-text-muted/60 uppercase tracking-widest font-black max-w-md mx-auto lg:mx-0">
                Educational market analysis only. Telegram signals do not guarantee profit, safety, or execution quality.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <GlowCard className="p-8 md:p-10 border-primary/20 bg-background/50 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between border-b border-line pb-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Signal Snapshot</h3>
                    <MessageSquare className="text-primary" size={24} />
                  </div>

                  <div className="space-y-4">
                    {[
                      { l: "Asset", v: "BTC / ETH / Altcoin Pair" },
                      { l: "Market Reason", v: "Why the setup matters", icon: <Search size={14} className="text-primary" /> },
                      { l: "Entry Zone", v: "Where the setup makes sense", icon: <Target size={14} className="text-primary" /> },
                      { l: "Targets", v: "Where to review the trade", icon: <TrendingUp size={14} className="text-primary" /> },
                      { l: "Invalidation", v: "Where the idea becomes wrong", icon: <ShieldAlert size={14} className="text-danger" /> },
                      { l: "Risk Note", v: "What can go wrong", icon: <AlertTriangle size={14} className="text-warning" /> },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-line/50 last:border-0 group">
                        <div className="flex items-center gap-2">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">{row.icon}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{row.l}</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-tight text-text text-right">{row.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest text-center">
                        Official Source: verified yaga links only
                      </p>
                    </div>
                    <p className="text-[10px] text-text-muted/60 leading-relaxed font-bold uppercase tracking-tight text-center italic">
                      "Fast delivery is useful only when the setup is clear."
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
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">What Are Telegram Crypto Signals?</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-text font-bold leading-relaxed">
                    Telegram crypto signals are trading setup notes or market alerts shared through Telegram channels, groups, or private communities.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    A serious Telegram crypto signal should include the asset, market reason, entry zone, target levels, invalidation or stop-loss context, and risk note. Telegram makes delivery fast, but fast delivery does not guarantee quality, profit, or safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — Why Telegram? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">Why Telegram Is <br /><span className="text-primary">Used for Crypto</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Telegram solves delivery speed. It does not solve signal quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Speed", d: "Telegram can deliver signal notes quickly in fast-moving markets.", icon: <Clock size={24} className="text-primary" /> },
                { t: "Mobile Access", d: "Users can receive alerts and check setups while away from charts.", icon: <Compass size={24} className="text-primary" /> },
                { t: "Group Delivery", d: "Communities can organize signal communication in one central hub.", icon: <MessageSquare size={24} className="text-primary" /> },
                { t: "Fast Updates", d: "Providers can update, cancel, or clarify setups quickly when conditions change.", icon: <Zap size={24} className="text-primary" /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center">
                    {card.icon}
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

      {/* SECTION 3 — Format Comparison */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Channel, Group <br /><span className="text-primary">or Community?</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold">
                The platform is not the edge. The process is the edge.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Telegram Format</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">How It Works</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Best For</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-danger">Main Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Public Channel", w: "One-way broadcast from provider to audience.", b: "Public updates and free observation.", r: "Limited interaction and copied channels." },
                    { f: "Public Group", w: "Members can interact with posts and each other.", b: "Community discussion and beginner chat.", r: "Spam, fake admins, and noisy FOMO." },
                    { f: "Private Signal Group", w: "Access limited to approved or paid members.", b: "Controlled signal delivery and updates.", r: "Quality still depends on provider method." },
                    { f: "Yaga Calls", w: "Telegram-first structured signal delivery.", b: "Serious traders who want deep context.", r: "Trading still involves risk and no guarantee." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-sm font-black text-text border-r border-line/50 uppercase tracking-tight">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-text-muted leading-relaxed font-medium">{row.w}</td>
                      <td className="px-8 py-8 text-xs text-text font-bold uppercase tracking-tight">{row.b}</td>
                      <td className="px-8 py-8 text-xs text-danger font-bold uppercase tracking-tight">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center pt-8">
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Understand premium Telegram crypto signals →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — Signal Structure */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What a Serious <br /><span className="text-primary">Signal Includes</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                A Telegram signal without invalidation is not complete.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { e: "Market Reason", m: "The technical structure or narrative catalyst.", w: "Shows why the setup deserves attention." },
                { e: "Entry Zone", m: "The price area where the idea makes sense.", w: "Helps avoid chasing late entries." },
                { e: "Invalidation", m: "Where the idea becomes wrong.", w: "Defines risk and controls downside." },
                { e: "Risk Note", m: "A reminder about sizing and volatility.", w: "Prevents blind copying of alerts." }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary leading-tight">{card.e}</h4>
                  <p className="text-sm font-black text-text uppercase tracking-tight leading-tight">{card.m}</p>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-tight">{card.w}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center pt-8 border-t border-line">
              <Link href="/how-to-set-stop-losses-in-crypto" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Stop-Loss Guide</Link>
              <Link href="/position-sizing-calculator" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Risk Calculator</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — Reading Framework */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How to Read a <br /><span className="text-primary">Telegram Signal</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold">
                The signal is not the decision. The signal is information for a decision.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { s: "1", t: "Confirm the Source", q: "Is this from the official provider channel or a fake account?" },
                { s: "2", t: "Check Entry Validity", q: "Is price still near the intended zone, or has the move already happened?" },
                { s: "3", t: "Find Invalidation", q: "Where does the idea become wrong if downside hits?" },
                { s: "4", t: "Calculate Personal Risk", q: "Does this setup fit your account size and risk tolerance?" },
                { s: "5", t: "Decide Calmly", q: "Are you following a plan or reacting to urgency/FOMO?" }
              ].map((step, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] flex items-center gap-8 group hover:border-primary/40 transition-colors">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors leading-none">{step.s}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black uppercase tracking-widest text-text">{step.t}</h4>
                    <p className="text-xs text-text-muted font-bold italic">"{step.q}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — Free Signals */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Free Telegram <br /><span className="text-primary">Crypto Signals</span></h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-text font-bold">Observe the provider first. Trust comes after evidence.</p>
                <p className="text-text-muted leading-relaxed">
                  Free signals help users observe communication style and market discipline before paying. They are useful for evaluation, but they usually lack the depth and focused updates of premium access.
                </p>
              </div>
              <div className="pt-4">
                <CTAButton 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank"
                  trackingLabel="sec_telegram_free"
                >
                  Join Free Telegram
                </CTAButton>
              </div>
            </div>

            <div className="p-10 bg-background border border-line rounded-[48px] space-y-6 shadow-2xl">
              <h4 className="text-xs font-black uppercase tracking-widest text-primary text-center">Free Signal Observation</h4>
              <ul className="space-y-4">
                {[
                  "Observe communication tone",
                  "Check if risk is mentioned",
                  "See if entries are clear",
                  "Watch for 'Pumps' vs 'Analysis'",
                  "Judge provider professionalism"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-[10px] font-black uppercase tracking-widest text-text">
                    <CheckCircle2 size={16} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — Premium Signals */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Premium Telegram <br /><span className="text-primary">Signals</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Premium should mean more structure, not more noise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <p className="text-text font-bold">Deeper setup notes and focused updates.</p>
                <p className="text-text-muted leading-relaxed">
                  Premium access offers structured signal delivery, private communities, and manual onboarding to reduce noise. However, payment does not guarantee results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton 
                    href="/pricing" 
                    trackingLabel="sec_telegram_pricing"
                  >
                    Compare Plans
                  </CTAButton>
                  <CTAButton 
                    href="/contact" 
                    variant="secondary"
                    trackingLabel="sec_telegram_contact"
                  >
                    Contact Support
                  </CTAButton>
                </div>
              </div>

              <div className="p-8 bg-surface-deep border border-line rounded-[40px] space-y-6">
                {[
                  { l: "Private Signal Group", v: "Controlled delivery" },
                  { l: "Manual Onboarding", v: "Official verification" },
                  { l: "Signal Depth", v: "Deep market context" },
                  { l: "Focused Updates", v: "Less group noise" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-line/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{item.l}</span>
                    <span className="text-xs font-black text-primary uppercase">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — Safety Section */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-danger/5 border border-danger/20 rounded-[48px] space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-danger/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 text-danger">
                  <ShieldAlert size={24} />
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">Telegram <br />Signal Safety</h2>
                </div>
                <p className="text-xl text-text leading-tight font-bold">Safety starts before you click join.</p>
                <p className="text-text-muted leading-relaxed max-w-2xl">
                  Only use official Yaga Calls links from the website. Do not trust random Telegram DMs, copied logos, fake admins, or unofficial payment requests.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {[
                  "No trust for random DMs",
                  "Verify Group / Admin identity",
                  "Never send unofficial payments",
                  "Official links from website only",
                  "Ask support via official route",
                  "Leave 'Guaranteed Profit' groups"
                ].map((check, i) => (
                  <div key={i} className="p-4 bg-background border border-danger/10 rounded-2xl flex items-center gap-3">
                    <X size={16} className="text-danger" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-text">{check}</span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4 relative z-10">
                <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-danger hover:underline">
                  Check official Telegram onboarding instructions →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 — Red Flags */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-center">Telegram Signal <br /><span className="text-danger">Red Flags</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { f: "Guaranteed Profit", d: "Markets have no guarantees. Claims of certain profit are a major trap." },
                { f: "100% Accurate", d: "No strategy wins every time. Honest providers explain risk, not certainty." },
                { f: "Buy-Now Urgency", d: "Pushing users to act without an entry zone or market reason." },
                { f: "No Stop-Loss", d: "Signals that ignore downside risk and capital protection." },
                { f: "Fake Admin DMs", d: "Strangers messaging you 'discounts' or 'VIP access' out of nowhere." },
                { f: "No Website", d: "Groups that only exist on Telegram with no method, proof or disclosure." }
              ].map((mistake, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-3 group hover:border-danger/30 transition-colors">
                  <div className="flex gap-3 items-center text-danger">
                    <ShieldAlert size={18} />
                    <h4 className="text-xs font-black uppercase tracking-widest">{mistake.f}</h4>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{mistake.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/how-to-choose-a-crypto-signal-provider" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Use the signal provider checklist →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — Risk Management */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Risk Management <br /><span className="text-primary">On Telegram</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                A fast signal can be a bad trade if the size is wrong.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  "Check entry zone validity",
                  "Confirm invalidation level",
                  "Calculate position sizing",
                  "Avoid excessive leverage",
                  "Accept that trades can fail"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text">
                    <CheckCircle2 size={18} className="text-primary" /> {item}
                  </div>
                ))}
              </div>
              <div className="p-10 bg-background border border-line rounded-[48px] space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-text text-center">Safety Formula</h4>
                <div className="p-6 bg-surface-deep rounded-2xl border border-primary/20 text-center">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-black mb-2">Planned Risk</p>
                  <p className="text-lg font-black text-primary uppercase">Risk = Account x Risk %</p>
                </div>
                <div className="flex flex-col gap-4">
                  <CTAButton href="/crypto-risk-management" variant="secondary" className="w-full text-xs">Risk Guide</CTAButton>
                  <CTAButton href="/position-sizing-calculator" variant="secondary" className="w-full text-xs">Size Calculator</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — Yaga Structure */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-primary">The Yaga <br /><span className="text-text">Telegram Standard</span></h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Telegram-first, but not Telegram-only.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Narrative Scan", d: "Market-wide sentiment research.", icon: <Search /> },
                { t: "Technical Setup", d: "Validating price action structure.", icon: <Activity /> },
                { t: "Entry Zone", d: "Planning for realistic entry levels.", icon: <Target /> },
                { t: "Invalidation", d: "Defining the logic failure point.", icon: <ShieldAlert /> },
                { t: "Target Mapping", d: "Mapping potential review levels.", icon: <TrendingUp /> },
                { t: "Risk Context", d: "Adding specific volatility notes.", icon: <AlertTriangle /> },
                { t: "Fast Delivery", d: "Clean, fast Telegram signal notes.", icon: <Zap /> },
                { t: "Manual Onboarding", d: "Official verification process.", icon: <Lock /> }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-surface-deep border border-line rounded-[32px] space-y-4 group hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                    {card.icon}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-text leading-tight">{card.t}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">{card.d}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">
                Read the Yaga Calls Method →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — Access Comparison */}
      <Section className="bg-surface-deep py-24 border-y border-line">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Free vs <br /><span className="text-primary">Premium Access</span></h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-tight">
                Start free if you are unsure.
              </p>
            </div>

            <div className="overflow-x-auto border border-line rounded-[40px] bg-background shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-line bg-surface-deep">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Feature</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-text-muted">Free Telegram</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">Premium Telegram</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { f: "Purpose", fr: "Observe style and discipline.", pr: "Access structured signal delivery." },
                    { f: "Signal Depth", fr: "Limited public-facing notes.", pr: "Structured, risk-aware setup notes." },
                    { f: "Follow-up", fr: "Limited or public updates.", pr: "Focused private updates." },
                    { f: "Onboarding", fr: "Join through official link.", pr: "Official manual verification." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-8 py-8 text-[10px] font-black text-text-muted border-r border-line/50 uppercase tracking-widest">{row.f}</td>
                      <td className="px-8 py-8 text-xs text-text font-medium">{row.fr}</td>
                      <td className="px-8 py-8 text-xs text-primary font-black uppercase tracking-tight">{row.pr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center gap-8">
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline">Compare Plans</Link>
              <Link href="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">Start Manual Onboarding</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — Who Is It For? */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Fits Users Who</h3>
              <ul className="space-y-4">
                {[
                  "Need fast market updates",
                  "Want mobile-first delivery",
                  "Understand trades can fail",
                  "Check entries before acting",
                  "Avoid emotional FOMO"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-surface-deep border border-line rounded-[40px] space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-text-muted">Not For Users Who</h3>
              <ul className="space-y-4">
                {[
                  "Want guaranteed profit",
                  "Blindly copy alerts",
                  "Use excessive leverage",
                  "Trust random DMs",
                  "Want pump-style calls"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-text-muted">
                    <X className="text-danger flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 14 — Signal Checklist */}
      <Section className="bg-background py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Telegram Signal <br /><span className="text-primary">Checklist</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 p-10 md:p-14 bg-surface-deep border border-line rounded-[48px]">
              {[
                "Source is the official channel.",
                "Asset and direction are clear.",
                "Market reason is understandable.",
                "Entry zone is still valid.",
                "Price has not moved too far.",
                "Invalidation is clearly defined.",
                "Stop-loss context is understood.",
                "Position size is calculated.",
                "Leverage is within risk limits.",
                "Trader is calm and not chasing.",
                "No 'Guaranteed Profit' claims.",
                "Onboarding was official route."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-xs font-black uppercase tracking-tight text-text border-b border-line pb-4 last:border-0">
                  <span className="text-primary font-black">{i + 1}.</span> {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 15 — Final CTA */}
      <Section className="bg-background py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,183,141,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="text-center max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Use Structure, <br />
              <span className="text-primary">Not Blind Trust.</span>
            </h2>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              Telegram is only the delivery layer. Join the free Telegram to observe the structured research behind every Yaga signal.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="final_telegram_free"
              className="px-10 py-5 text-base"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton 
              href="/method" 
              variant="secondary"
              trackingLabel="final_telegram_method"
              className="px-10 py-5 text-base"
            >
              Read the Method
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-line">
            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center items-center">
              <Link href="/premium-telegram-crypto-signals" className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Compare Premium
              </Link>
              <Link href="/proof" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Review Proof
              </Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                Compare Plans
              </Link>
            </div>
            <p className="mt-10 text-[10px] text-text-muted/60 italic uppercase tracking-widest leading-relaxed max-w-md mx-auto">
              Yaga Calls provides educational market analysis and signal ideas only. Crypto trading involves risk. Telegram signals do not guarantee profit or safety.
            </p>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
