/**
 * Yaga Calls Keyword & Content Strategy Map (2026)
 * Maps user intent to specific routes for SEO and conversion.
 */

export interface KeywordStrategyEntry {
  route: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: "Discovery" | "Transactional" | "Educational" | "Transparency" | "Informational" | "Direct Action";
  targetPersona: "Beginner" | "Intermediate" | "Experienced" | "High-Intent Buyer";
  funnelStage: "TOFU" | "MOFU" | "BOFU";
  conversionGoal: string;
  recommendedCTA: string;
  internalLinks: string[];
}

export const KeywordMap: Record<string, KeywordStrategyEntry> = {
  home: {
    route: "/",
    primaryKeyword: "crypto signals",
    secondaryKeywords: ["crypto trading signals", "Telegram crypto signals", "crypto signals group", "premium crypto signals"],
    searchIntent: "Discovery",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "Join Free Telegram / View Pricing",
    recommendedCTA: "Join Free Telegram",
    internalLinks: ["/method", "/pricing", "/proof"]
  },
  pricing: {
    route: "/pricing",
    primaryKeyword: "premium crypto signals",
    secondaryKeywords: ["crypto signals pricing", "paid crypto signals Telegram", "crypto signals manual onboarding"],
    searchIntent: "Transactional",
    targetPersona: "High-Intent Buyer",
    funnelStage: "BOFU",
    conversionGoal: "Telegram DM for Manual Onboarding",
    recommendedCTA: "Choose Premium Plan",
    internalLinks: ["/method", "/contact", "/risk-disclosure"]
  },
  method: {
    route: "/method",
    primaryKeyword: "crypto signals with risk management",
    secondaryKeywords: ["crypto signals with stop loss", "narrative trading crypto", "risk-managed crypto setups"],
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "View Proof or Pricing",
    recommendedCTA: "Learn the Method",
    internalLinks: ["/proof", "/pricing", "/academy"]
  },
  proof: {
    route: "/proof",
    primaryKeyword: "crypto signals with proof",
    secondaryKeywords: ["crypto signal track record", "historical crypto trade examples", "Telegram crypto signals results"],
    searchIntent: "Transparency",
    targetPersona: "Experienced",
    funnelStage: "MOFU",
    conversionGoal: "Visit Pricing",
    recommendedCTA: "View Selected Examples",
    internalLinks: ["/pricing", "/method"]
  },
  academy: {
    route: "/academy",
    primaryKeyword: "learn crypto signals",
    secondaryKeywords: ["crypto trading signals for beginners", "how do crypto signals work", "risk management crypto trading"],
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "Move to Method/Pricing",
    recommendedCTA: "Start Academy",
    internalLinks: ["/method", "/pricing"]
  },
  blog: {
    route: "/blog",
    primaryKeyword: "crypto signals blog",
    secondaryKeywords: ["crypto market analysis", "Telegram crypto signals guide", "altcoin market analysis"],
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "Move to Academy/Method",
    recommendedCTA: "Read Insights",
    internalLinks: ["/academy", "/method"]
  },
  contact: {
    route: "/contact",
    primaryKeyword: "Telegram crypto signals contact",
    secondaryKeywords: ["Yaga Calls Telegram", "crypto signals manual onboarding"],
    searchIntent: "Direct Action",
    targetPersona: "High-Intent Buyer",
    funnelStage: "BOFU",
    conversionGoal: "Telegram DM",
    recommendedCTA: "Start Manual Onboarding",
    internalLinks: ["/pricing", "/risk-disclosure"]
  },
  riskDisclosure: {
    route: "/risk-disclosure",
    primaryKeyword: "crypto signal risk warning",
    secondaryKeywords: ["crypto trading disclaimer", "risk of loss crypto"],
    searchIntent: "Transparency",
    targetPersona: "Experienced",
    funnelStage: "MOFU",
    conversionGoal: "Understand Risk",
    recommendedCTA: "Read the Risk Disclosure",
    internalLinks: ["/method", "/pricing"]
  }
};

// Add important blog/academy slugs for tracking and SEO
export const ContentMap: Record<string, Partial<KeywordStrategyEntry>> = {
  "best-crypto-signals-group": {
    primaryKeyword: "best crypto signals group",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/pricing"
  },
  "telegram-crypto-signals-trustworthy": {
    primaryKeyword: "trustworthy Telegram crypto signals",
    searchIntent: "Discovery",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/method"
  },
  "crypto-signals-for-beginners": {
    primaryKeyword: "crypto signals for beginners",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/method"
  },
  "why-stop-loss-matters": {
    primaryKeyword: "stop loss in crypto signals",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/risk-disclosure"
  },
  "narrative-trading-crypto": {
    primaryKeyword: "narrative trading crypto",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/pricing"
  },
  "how-crypto-signals-work": {
    primaryKeyword: "how crypto signals work",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/method"
  },
  "free-vs-paid-crypto-signals": {
    primaryKeyword: "free vs paid crypto signals",
    searchIntent: "Transactional",
    targetPersona: "High-Intent Buyer",
    funnelStage: "MOFU",
    conversionGoal: "/pricing"
  },
  "entry-target-stop-loss": {
    primaryKeyword: "crypto signal entry and stop loss",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/method"
  },
  "choose-crypto-signals-provider": {
    primaryKeyword: "how to choose crypto signals",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/proof"
  },
  "avoid-pump-signal-scams": {
    primaryKeyword: "avoid pump and dump scams",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/risk-disclosure"
  },
  "risk-management-crypto-signals": {
    primaryKeyword: "risk management for crypto signals",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/method"
  }
};
