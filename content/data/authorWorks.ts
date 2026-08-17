/**
 * Registry of non-blog content each author has written: academy modules,
 * commercial landing pages, and standalone SEO guide pages. These don't
 * live in one shared, introspectable data source the way blog posts do
 * (content/blog/posts.ts) — academy modules are JSON, commercial pages are
 * a mix of a shared [slug] route and static folders, and the guide pages
 * are each their own bespoke page.tsx. This registry exists so author
 * profile pages can list everything a person has written in one place,
 * not just their blog posts.
 *
 * Keep this in sync with the authorSlug values actually set in:
 * - content/data/academy.json
 * - content/data/commercial.ts
 * - each standalone guide page's PAGE_AUTHOR_SLUG / inline JSON-LD author
 */

export interface AuthorWork {
  title: string;
  href: string;
  type: "Academy Module" | "Landing Page" | "Guide";
  authorSlug: string;
}

export const authorWorks: AuthorWork[] = [
  // Academy modules
  { title: "How Crypto Signals Work", href: "/academy/how-crypto-signals-work", type: "Academy Module", authorSlug: "chen-wei" },
  { title: "Free vs Paid Crypto Signals", href: "/academy/free-vs-paid-crypto-signals", type: "Academy Module", authorSlug: "chidi-okeke" },
  { title: "How to Read Entry, Target, and Stop Loss", href: "/academy/entry-target-stop-loss", type: "Academy Module", authorSlug: "dmitry-voronov" },
  { title: "How to Choose a Crypto Signals Provider", href: "/academy/choose-crypto-signals-provider", type: "Academy Module", authorSlug: "liam-gallagher-jones" },
  { title: "How to Avoid Pump Signal Scams", href: "/academy/avoid-pump-signal-scams", type: "Academy Module", authorSlug: "marcus-vance" },
  { title: "Risk Management for Crypto Signals", href: "/academy/risk-management-crypto-signals", type: "Academy Module", authorSlug: "dmitry-voronov" },
  { title: "ATR Stops (14)", href: "/academy/atr-stops", type: "Academy Module", authorSlug: "dmitry-voronov" },

  // Commercial / landing pages
  { title: "Best Crypto Signals Group", href: "/best-crypto-signals-group", type: "Landing Page", authorSlug: "liam-gallagher-jones" },
  { title: "Premium Crypto Signals Telegram", href: "/premium-crypto-signals-telegram", type: "Landing Page", authorSlug: "liam-gallagher-jones" },
  { title: "Crypto Signals With Proof", href: "/crypto-signals-with-proof", type: "Landing Page", authorSlug: "chen-wei" },
  { title: "Binance Affiliate vs Yaga Calls", href: "/binance-affiliate-vs-yaga-calls", type: "Landing Page", authorSlug: "aisha-al-mansoori" },
  { title: "Best Crypto Affiliate Programs Compared", href: "/crypto-affiliate-programs-compared", type: "Landing Page", authorSlug: "aisha-al-mansoori" },
  { title: "Free vs Paid Crypto Signals", href: "/free-vs-paid-crypto-signals", type: "Landing Page", authorSlug: "aisha-al-mansoori" },

  // Standalone SEO guide pages
  { title: "Crypto Risk Management", href: "/crypto-risk-management", type: "Guide", authorSlug: "dmitry-voronov" },
  { title: "Telegram Crypto Signals", href: "/telegram-crypto-signals", type: "Guide", authorSlug: "marcus-vance" },
  { title: "Crypto Position Sizing Calculator", href: "/position-sizing-calculator", type: "Guide", authorSlug: "dmitry-voronov" },
  { title: "How to Set Stop-Losses in Crypto", href: "/how-to-set-stop-losses-in-crypto", type: "Guide", authorSlug: "dmitry-voronov" },
  { title: "How to Choose a Crypto Signal Provider", href: "/how-to-choose-a-crypto-signal-provider", type: "Guide", authorSlug: "sarah-jenkins" },
  { title: "Best Crypto Signal Groups Compared", href: "/best-crypto-signal-groups-compared", type: "Guide", authorSlug: "chidi-okeke" },
  { title: "What Are Crypto Signals?", href: "/what-are-crypto-signals", type: "Guide", authorSlug: "sarah-jenkins" },
  { title: "Crypto Signal Provider Comparison", href: "/crypto-signal-provider-comparison", type: "Guide", authorSlug: "liam-gallagher-jones" },
  { title: "Narrative Trading Crypto Signals", href: "/narrative-trading-crypto-signals", type: "Guide", authorSlug: "elena-soto" },
  { title: "Crypto Signals With Risk Management", href: "/crypto-signals-with-risk-management", type: "Guide", authorSlug: "marcus-vance" },
  { title: "Verified Crypto Signal Provider", href: "/verified-crypto-signal-provider", type: "Guide", authorSlug: "dmitry-voronov" },
  { title: "Yaga Calls Member Reviews", href: "/yaga-calls-review", type: "Guide", authorSlug: "elena-soto" },
  { title: "Crypto Trading Group", href: "/crypto-trading-group", type: "Guide", authorSlug: "chen-wei" },
  { title: "Crypto Trading Telegram Group", href: "/crypto-trading-telegram-group", type: "Guide", authorSlug: "chidi-okeke" },
];

export function getWorksByAuthorSlug(slug: string): AuthorWork[] {
  return authorWorks.filter((w) => w.authorSlug === slug);
}
