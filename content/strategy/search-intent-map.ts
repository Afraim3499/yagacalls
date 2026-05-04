/**
 * Yaga Calls Search Intent Map (2026)
 * Maps user queries to funnel stages and target pages.
 */

export interface IntentEntry {
  stage: "Awareness" | "Evaluation" | "Transactional" | "Risk/Trust";
  userQueries: string[];
  intentDescription: string;
  bestPages: string[];
  cta: string;
}

export const searchIntentMap: IntentEntry[] = [
  {
    stage: "Awareness",
    userQueries: [
      "what are crypto signals",
      "how do crypto signals work",
      "are crypto signals worth it",
      "crypto signals for beginners",
      "benefits of crypto signals",
      "learning crypto market analysis"
    ],
    intentDescription: "User is researching the concept and looking for educational value.",
    bestPages: ["/academy", "/blog/crypto-signals-for-beginners", "/academy/how-crypto-signals-work"],
    cta: "Learn the Method"
  },
  {
    stage: "Evaluation",
    userQueries: [
      "best crypto signals group",
      "Telegram crypto signals trustworthy",
      "crypto signals with proof",
      "free vs paid crypto signals",
      "crypto signal provider reviews",
      "systematic crypto trading examples"
    ],
    intentDescription: "User is comparing providers and looking for evidence of reliability.",
    bestPages: ["/blog/best-crypto-signals-group", "/blog/telegram-crypto-signals-trustworthy", "/proof", "/method"],
    cta: "View Selected Examples"
  },
  {
    stage: "Transactional",
    userQueries: [
      "premium crypto signals",
      "crypto signals subscription",
      "paid crypto signals Telegram",
      "join crypto signals group",
      "Yaga Calls pricing",
      "how to buy crypto signals"
    ],
    intentDescription: "User is ready to purchase or join a premium service.",
    bestPages: ["/pricing", "/contact"],
    cta: "DM for Premium Access"
  },
  {
    stage: "Risk/Trust",
    userQueries: [
      "crypto signals with stop loss",
      "crypto signals with risk management",
      "crypto trading risk",
      "avoid crypto pump signal scams",
      "is Yaga Calls legit",
      "crypto trading disclaimer"
    ],
    intentDescription: "User is concerned about safety, scams, and risk mitigation.",
    bestPages: ["/method", "/risk-disclosure", "/academy/risk-management-crypto-signals", "/academy/avoid-pump-signal-scams"],
    cta: "Learn Risk Management"
  }
];
