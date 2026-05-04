/**
 * Yaga Calls Keyword & Content Strategy Map (2026)
 * Maps user intent to specific routes for SEO and conversion.
 * Updated for Global High-Purchase-Power Strategy.
 */

export interface KeywordStrategyEntry {
  route: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  regionKeywords: string[];
  searchIntent: "Discovery" | "Transactional" | "Educational" | "Transparency" | "Informational" | "Direct Action" | "Trust/Risk";
  funnelStage: "TOFU" | "MOFU" | "BOFU";
  targetPersona: "Beginner" | "Intermediate" | "Experienced" | "High-Intent Buyer";
  targetRegion: string;
  conversionGoal: string;
  recommendedCTA: string;
  internalLinks: string[];
  schemaTypeRecommendation: string[];
  aeoQuestions: string[];
}

export const KeywordMap: Record<string, KeywordStrategyEntry> = {
  home: {
    route: "/",
    primaryKeyword: "crypto signals",
    secondaryKeywords: ["crypto trading signals", "Telegram crypto signals", "crypto signals group", "premium crypto signals"],
    longTailKeywords: ["best crypto signals for professional traders", "reliable Telegram crypto signal group", "real-time crypto market analysis"],
    regionKeywords: ["crypto signals UAE", "crypto signals Europe", "crypto signals USA", "crypto signals UK"],
    searchIntent: "Discovery",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Join Free Telegram / View Pricing",
    recommendedCTA: "Join Free Telegram",
    internalLinks: ["/method", "/pricing", "/proof", "/academy", "/risk-disclosure"],
    schemaTypeRecommendation: ["Organization", "WebSite", "FAQPage"],
    aeoQuestions: ["What are crypto signals?", "How do crypto signals work?", "Are crypto signals worth it?"]
  },
  pricing: {
    route: "/pricing",
    primaryKeyword: "premium crypto signals",
    secondaryKeywords: ["crypto signals pricing", "paid crypto signals Telegram", "crypto signals manual onboarding"],
    longTailKeywords: ["best paid crypto signals Telegram", "premium crypto signals with risk management", "how to join premium crypto group"],
    regionKeywords: ["premium crypto signals Dubai", "paid crypto signals UK", "premium crypto signals Singapore"],
    searchIntent: "Transactional",
    targetPersona: "High-Intent Buyer",
    funnelStage: "BOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Telegram DM for Manual Onboarding",
    recommendedCTA: "Choose Premium Plan",
    internalLinks: ["/method", "/contact", "/risk-disclosure", "/proof"],
    schemaTypeRecommendation: ["Product", "Offer", "FAQPage"],
    aeoQuestions: ["How much do premium crypto signals cost?", "What is included in paid crypto signals?", "How does manual Telegram onboarding work?"]
  },
  method: {
    route: "/method",
    primaryKeyword: "crypto signals with risk management",
    secondaryKeywords: ["crypto signals with stop loss", "narrative trading crypto", "risk-managed crypto setups"],
    longTailKeywords: ["how to manage risk with crypto signals", "importance of stop loss in trading", "narrative-based crypto analysis"],
    regionKeywords: ["crypto signals with risk management Europe", "systematic crypto trading USA"],
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "View Proof or Pricing",
    recommendedCTA: "Learn the Method",
    internalLinks: ["/proof", "/pricing", "/academy", "/risk-disclosure"],
    schemaTypeRecommendation: ["Article", "HowTo", "FAQPage"],
    aeoQuestions: ["What is risk management in crypto signals?", "Should a crypto signal include stop loss?", "What is narrative trading?"]
  },
  proof: {
    route: "/proof",
    primaryKeyword: "crypto signals with proof",
    secondaryKeywords: ["crypto signal track record", "historical crypto trade examples", "Telegram crypto signals results"],
    longTailKeywords: ["real examples of crypto signals", "crypto signal performance transparency", "verified crypto signal results"],
    regionKeywords: ["crypto signals track record Global", "crypto signal proof Dubai"],
    searchIntent: "Transparency",
    targetPersona: "Experienced",
    funnelStage: "MOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Visit Pricing",
    recommendedCTA: "View Selected Examples",
    internalLinks: ["/pricing", "/method", "/risk-disclosure"],
    schemaTypeRecommendation: ["Article", "ImageObject", "FAQPage"],
    aeoQuestions: ["How can I verify crypto signal results?", "What makes a crypto signal group trustworthy?", "Where can I see past signal examples?"]
  },
  academy: {
    route: "/academy",
    primaryKeyword: "learn crypto signals",
    secondaryKeywords: ["crypto trading signals for beginners", "how do crypto signals work", "risk management crypto trading"],
    longTailKeywords: ["crypto signal guide for new traders", "basics of reading crypto signals", "educational crypto signal platform"],
    regionKeywords: ["learn crypto signals Europe", "crypto trading education Singapore"],
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Move to Method/Pricing",
    recommendedCTA: "Start Academy",
    internalLinks: ["/method", "/pricing", "/proof", "/risk-disclosure"],
    schemaTypeRecommendation: ["Course", "ItemList", "FAQPage"],
    aeoQuestions: ["How do I read a crypto signal?", "What is position sizing?", "How much should I risk per trade?"]
  },
  blog: {
    route: "/blog",
    primaryKeyword: "crypto signals blog",
    secondaryKeywords: ["crypto market analysis", "Telegram crypto signals guide", "altcoin market analysis"],
    longTailKeywords: ["latest crypto signal insights", "deep dive market narratives", "expert crypto trading guides"],
    regionKeywords: ["crypto market analysis UAE", "crypto trading blog UK"],
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Move to Academy/Method",
    recommendedCTA: "Read Insights",
    internalLinks: ["/academy", "/method", "/pricing", "/proof", "/risk-disclosure"],
    schemaTypeRecommendation: ["Blog", "BlogPosting", "BreadcrumbList"],
    aeoQuestions: ["What are the latest crypto trends?", "How to find the best crypto signal group?", "Why do most crypto traders fail?"]
  },
  contact: {
    route: "/contact",
    primaryKeyword: "Telegram crypto signals contact",
    secondaryKeywords: ["Yaga Calls Telegram", "crypto signals manual onboarding"],
    longTailKeywords: ["how to contact Yaga Calls Telegram", "direct message for premium signals", "manual support for crypto signals"],
    regionKeywords: ["Telegram crypto signals Dubai", "crypto signal support Global"],
    searchIntent: "Direct Action",
    targetPersona: "High-Intent Buyer",
    funnelStage: "BOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Telegram DM",
    recommendedCTA: "Start Manual Onboarding",
    internalLinks: ["/pricing", "/risk-disclosure"],
    schemaTypeRecommendation: ["ContactPage", "Organization", "ContactPoint"],
    aeoQuestions: ["How do I join Yaga Calls?", "Is there a Telegram bot for support?", "How long does onboarding take?"]
  },
  riskDisclosure: {
    route: "/risk-disclosure",
    primaryKeyword: "crypto signal risk warning",
    secondaryKeywords: ["crypto trading disclaimer", "risk of loss crypto"],
    longTailKeywords: ["importance of risk disclosure in trading", "legal disclaimer for crypto signals", "understanding market volatility"],
    regionKeywords: ["crypto risk disclosure Global", "trading disclaimer UK/USA"],
    searchIntent: "Trust/Risk",
    targetPersona: "Experienced",
    funnelStage: "MOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Understand Risk",
    recommendedCTA: "Read the Risk Disclosure",
    internalLinks: ["/method", "/pricing", "/contact"],
    schemaTypeRecommendation: ["WebPage", "FAQPage"],
    aeoQuestions: ["Is crypto trading risky?", "Can I lose all my money in crypto?", "Does Yaga Calls guarantee results?"]
  },
  terms: {
    route: "/terms",
    primaryKeyword: "Yaga Calls terms of service",
    secondaryKeywords: ["trading signals terms", "subscription rules"],
    longTailKeywords: ["terms and conditions for crypto signals", "user agreement for Yaga Calls"],
    regionKeywords: ["global terms of service", "crypto signal terms Europe"],
    searchIntent: "Transparency",
    targetPersona: "Experienced",
    funnelStage: "MOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Compliance",
    recommendedCTA: "Read Terms",
    internalLinks: ["/privacy", "/risk-disclosure"],
    schemaTypeRecommendation: ["WebPage"],
    aeoQuestions: ["What are the rules for using Yaga Calls?", "Can I share the signals with others?"]
  },
  privacy: {
    route: "/privacy",
    primaryKeyword: "Yaga Calls privacy policy",
    secondaryKeywords: ["data protection crypto", "Telegram privacy"],
    longTailKeywords: ["how Yaga Calls handles your data", "privacy policy for crypto signals"],
    regionKeywords: ["GDPR compliant crypto signals", "global privacy standards"],
    searchIntent: "Transparency",
    targetPersona: "Experienced",
    funnelStage: "MOFU",
    targetRegion: "Global High-Income",
    conversionGoal: "Compliance",
    recommendedCTA: "Read Privacy Policy",
    internalLinks: ["/terms", "/risk-disclosure"],
    schemaTypeRecommendation: ["WebPage"],
    aeoQuestions: ["Is my data safe with Yaga Calls?", "Do you collect personal information?"]
  }
};

// Content/Slug level strategies
export const ContentMap: Record<string, Partial<KeywordStrategyEntry>> = {
  "best-crypto-signals-group": {
    primaryKeyword: "best crypto signals group",
    regionKeywords: ["best crypto signals UAE", "best crypto signals UK"],
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/pricing",
    aeoQuestions: ["Which crypto signal group is best?", "What to look for in a crypto signal group?"]
  },
  "telegram-crypto-signals-trustworthy": {
    primaryKeyword: "trustworthy Telegram crypto signals",
    regionKeywords: ["reliable crypto signals Europe", "trusted signals USA"],
    searchIntent: "Discovery",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/method",
    aeoQuestions: ["Are Telegram crypto signals trustworthy?", "How to spot fake crypto signals?"]
  },
  "crypto-signals-for-beginners": {
    primaryKeyword: "crypto signals for beginners",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/method",
    aeoQuestions: ["Are crypto signals good for beginners?", "How to start with crypto signals?"]
  },
  "why-stop-loss-matters": {
    primaryKeyword: "stop loss in crypto signals",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/risk-disclosure",
    aeoQuestions: ["Why is stop loss important?", "How to set a stop loss?"]
  },
  "narrative-trading-crypto": {
    primaryKeyword: "narrative trading crypto",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/pricing",
    aeoQuestions: ["What is crypto narrative trading?", "How to trade market narratives?"]
  },
  "how-crypto-signals-work": {
    primaryKeyword: "how crypto signals work",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/method",
    aeoQuestions: ["What is the process of a crypto signal?", "Who generates crypto signals?"]
  },
  "free-vs-paid-crypto-signals": {
    primaryKeyword: "free vs paid crypto signals",
    searchIntent: "Transactional",
    targetPersona: "High-Intent Buyer",
    funnelStage: "MOFU",
    conversionGoal: "/pricing",
    aeoQuestions: ["Is it worth paying for crypto signals?", "Difference between free and premium signals?"]
  },
  "entry-target-stop-loss": {
    primaryKeyword: "crypto signal entry and stop loss",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/method",
    aeoQuestions: ["What are entries and targets in a signal?", "How to read a signal setup?"]
  },
  "choose-crypto-signals-provider": {
    primaryKeyword: "how to choose crypto signals",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/proof",
    aeoQuestions: ["What are the criteria for choosing a signal provider?"]
  },
  "avoid-pump-signal-scams": {
    primaryKeyword: "avoid pump and dump scams",
    searchIntent: "Informational",
    targetPersona: "Beginner",
    funnelStage: "TOFU",
    conversionGoal: "/risk-disclosure",
    aeoQuestions: ["What is a pump and dump scam?", "How to avoid crypto scams?"]
  },
  "risk-management-crypto-signals": {
    primaryKeyword: "risk management for crypto signals",
    searchIntent: "Educational",
    targetPersona: "Intermediate",
    funnelStage: "MOFU",
    conversionGoal: "/method",
    aeoQuestions: ["How to manage risk in crypto?", "What is the 2% rule?"]
  }
};
