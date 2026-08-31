import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";
import GlowCard from "@/components/shared/GlowCard";
import Link from "next/link";
import AuthorByline from "@/components/blog/AuthorByline";
import { 
  ShieldCheck, 
  Target, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Search, 
  Lock,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import CommunityReviewsSection from "@/components/reviews/CommunityReviewsSection";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import { createWebPageSchema, createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Yaga Calls Member Reviews & Community Feedback | Official Hub",
  description: "Read verified member reviews, signal feedback, and community ratings for Yaga Calls crypto signals, market narrative research, and risk management.",
  alternates: {
    canonical: "https://www.yagacalls.com/yaga-calls-review",
  },
  openGraph: {
    title: "Yaga Calls Community Reviews",
    description: "Authentic member feedback, trade setup notes reviews, and risk-management ratings from active Yaga Calls Telegram subscribers.",
    type: "article",
    url: "https://www.yagacalls.com/yaga-calls-review",
    images: [{ url: "https://www.yagacalls.com/api/og?title=Yaga%20Calls%20Community%20Reviews&subtitle=Member%20Feedback%20%26%20Risk-Management%20Ratings", width: 1200, height: 630, alt: "Yaga Calls Community Reviews" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaga Calls Community Reviews",
    description: "Authentic member feedback, trade setup notes reviews, and risk-management ratings from active Yaga Calls Telegram subscribers.",
    images: ["https://www.yagacalls.com/api/og?title=Yaga%20Calls%20Community%20Reviews&subtitle=Member%20Feedback%20%26%20Risk-Management%20Ratings"],
  }
};

export default function YagaCallsReviewPage() {
  const faqs = [
    {
      question: "How are Yaga Calls member reviews verified?",
      answer: "All reviews are submitted by active Telegram community members and VIP subscribers. Our moderation team verifies member status before feedback is published to protect community integrity."
    },
    {
      question: "What makes Yaga Calls different from typical signal channels?",
      answer: "Yaga Calls focuses on structured setup notes, market narrative research, technical context, entry zones, targets, stop-loss invalidation, and transparent risk management instead of hype or fake win-rate guarantees."
    },
    {
      question: "Can I try Yaga Calls before upgrading to VIP access?",
      answer: "Yes! You can join the free Telegram channel first to observe communication style, market research notes, and signal structure before choosing a premium plan."
    },
    {
      question: "How do I safely join Yaga Calls premium?",
      answer: "Use only official links from the Yaga Calls website. Always verify official Telegram handles and avoid random direct messages or unofficial payment requests."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...createWebPageSchema({
          title: "Yaga Calls Member Reviews & Community Feedback",
          description: "Verified member reviews and community ratings for Yaga Calls crypto signals and research.",
          url: "https://www.yagacalls.com/yaga-calls-review",
          authorName: "Elena Soto",
          authorType: "Person",
          authorJobTitle: "Market Sentiment & Narrative Analyst",
          authorUrl: "https://www.yagacalls.com/authors/elena-soto"
        }),
        "@context": undefined
      },
      {
        ...createBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Community Reviews", item: "/yaga-calls-review" }
        ]),
        "@context": undefined
      }
    ]
  };

  return (
    <main className="bg-background text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION — COMMUNITY REVIEW HUB */}
      <Section className="pt-32 pb-20 md:pt-44 md:pb-24 bg-surface-deep overflow-hidden relative border-b border-line">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,183,141,0.06)_0%,transparent_70%)] pointer-events-none" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full inline-block">
                Community Feedback Portal
              </span>
              <h1 className="text-2xl sm:text-[30px] lg:text-[34px] font-black uppercase tracking-tighter leading-tight">
                Yaga Calls <br />
                <span className="text-primary">Member Reviews</span>
              </h1>
              <AuthorByline authorSlug="elena-soto" className="mt-4 justify-center" />
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-text leading-snug font-bold uppercase tracking-tight">
                Authentic feedback, trade setup notes reviews, and risk-management ratings from active Telegram subscribers.
              </p>
              <p className="text-xs text-text-muted leading-relaxed font-medium uppercase tracking-widest">
                Evaluate signal structure, narrative depth, and community experiences before joining premium access.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <a 
                href="#community-reviews" 
                className="px-6 py-4 bg-primary text-background font-black text-xs uppercase tracking-widest rounded-2xl hover:brightness-110 shadow-xl inline-flex items-center gap-2"
              >
                <MessageSquare size={16} /> Read & Submit Reviews
              </a>
              <CTAButton 
                href={BRAND_CONFIG.officialTelegram} 
                target="_blank"
                variant="secondary"
                trackingLabel="hero_review_free"
              >
                Join Free Telegram
              </CTAButton>
            </div>

            <p className="text-[10px] text-text-muted/60 uppercase tracking-widest font-black pt-2">
              Educational market analysis only. Yaga Calls does not guarantee future trading profits.
            </p>
          </div>
        </Container>
      </Section>

      {/* DYNAMIC COMMUNITY REVIEWS ENGINE */}
      <CommunityReviewsSection />

      {/* SECTION 2 — WHY MEMBERS VALUE YAGA CALLS */}
      <Section className="bg-surface-deep py-24 border-b border-line">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-[28px] md:text-[30px] font-black uppercase tracking-tighter">Why Members Value <br /><span className="text-primary">The Yaga Method</span></h2>
              <p className="text-sm text-text-muted max-w-2xl mx-auto font-bold uppercase tracking-wide">
                Built for serious traders who prioritize risk management and structured setup logic over hype.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Structured Setup Notes", 
                  desc: "Every signal note provides clear market context, technical validation, entry zones, target mapping, and invalidation levels.",
                  icon: <FileText className="w-6 h-6 text-primary" />
                },
                { 
                  title: "Market Narrative Research", 
                  desc: "Identifies high-momentum sector rotations and macroeconomic catalysts before technical chart breakouts occur.",
                  icon: <Search className="w-6 h-6 text-primary" />
                },
                { 
                  title: "Defined Invalidation & Risk", 
                  desc: "Clear stop-loss logic ensures every member understands exactly where a trade setup becomes invalid before taking positions.",
                  icon: <Target className="w-6 h-6 text-primary" />
                }
              ].map((card, i) => (
                <GlowCard key={i} className="p-8 space-y-4 border-line">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-line flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-text">{card.title}</h3>
                  <p className="text-xs text-text-muted font-medium leading-relaxed">{card.desc}</p>
                </GlowCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center pt-4">
              <Link href="/method" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline flex items-center gap-1">
                Read Full Method Guide <ArrowRight size={14} />
              </Link>
              <Link href="/pricing" className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-colors">
                Compare Premium Plans
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — TELEGRAM SAFETY & OFFICIAL ONBOARDING */}
      <Section className="bg-background py-24 border-b border-line">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-14 bg-surface-deep border border-primary/20 rounded-[48px] space-y-8 relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-black text-primary uppercase tracking-widest">
                  <Lock size={14} /> Member Security Guidance
                </div>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Official Telegram Onboarding Safety</h2>
                <p className="text-xs text-text-muted leading-relaxed font-medium">
                  Telegram is our fast signal delivery layer, but scam impersonators exist. Protect yourself by confirming official channels only.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Never reply to random direct messages claiming to be Yaga Calls admins",
                  "Verify official links directly from yagacalls.com before payment",
                  "Official onboarding is manual — no automated recurring credit card traps",
                  "Report any suspicious accounts or direct payment requests to support"
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-background border border-line rounded-2xl flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-text leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — FREQUENTLY ASKED QUESTIONS */}
      <Section className="bg-surface-deep py-24">
        <Container className="max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Clear answers about community reviews and member onboarding</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-background border border-line rounded-3xl space-y-3">
                <h3 className="text-lg font-black uppercase tracking-tight text-text">{faq.question}</h3>
                <p className="text-xs text-text-muted leading-relaxed font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
