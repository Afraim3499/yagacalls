/**
 * Yaga Calls Internal Linking Plan (2026)
 * Strategic page-to-page linking for SEO and user flow.
 */

export interface InternalLinkEntry {
  sourcePage: string;
  anchorText: string;
  destinationPage: string;
  reason: string;
  priority: "P0" | "P1" | "P2";
}

export const internalLinkingPlan: InternalLinkEntry[] = [
  // --- Home Page Links ---
  {
    sourcePage: "/",
    anchorText: "systematic methodology",
    destinationPage: "/method",
    reason: "Introduce the strategy",
    priority: "P0"
  },
  {
    sourcePage: "/",
    anchorText: "selected examples",
    destinationPage: "/proof",
    reason: "Build trust through track record",
    priority: "P0"
  },
  {
    sourcePage: "/",
    anchorText: "premium plans",
    destinationPage: "/pricing",
    reason: "Direct to transaction",
    priority: "P0"
  },
  {
    sourcePage: "/",
    anchorText: "trading academy",
    destinationPage: "/academy",
    reason: "Educational top-of-funnel",
    priority: "P1"
  },
  {
    sourcePage: "/",
    anchorText: "risk disclosure",
    destinationPage: "/risk-disclosure",
    reason: "Compliance and transparency",
    priority: "P1"
  },

  // --- Method Page Links ---
  {
    sourcePage: "/method",
    anchorText: "historical performance",
    destinationPage: "/proof",
    reason: "Show evidence of method working",
    priority: "P0"
  },
  {
    sourcePage: "/method",
    anchorText: "premium signal access",
    destinationPage: "/pricing",
    reason: "Conversion link",
    priority: "P0"
  },
  {
    sourcePage: "/method",
    anchorText: "understanding trade risk",
    destinationPage: "/risk-disclosure",
    reason: "Contextual compliance",
    priority: "P1"
  },
  {
    sourcePage: "/method",
    anchorText: "risk management guide",
    destinationPage: "/academy/risk-management-crypto-signals",
    reason: "Deep dive education",
    priority: "P1"
  },

  // --- Proof Page Links ---
  {
    sourcePage: "/proof",
    anchorText: "how we find setups",
    destinationPage: "/method",
    reason: "Explain the research behind results",
    priority: "P1"
  },
  {
    sourcePage: "/proof",
    anchorText: "choose a premium plan",
    destinationPage: "/pricing",
    reason: "Trust-based conversion",
    priority: "P0"
  },
  {
    sourcePage: "/proof",
    anchorText: "full risk disclosure",
    destinationPage: "/risk-disclosure",
    reason: "Compliance link",
    priority: "P1"
  },

  // --- Pricing Page Links ---
  {
    sourcePage: "/pricing",
    anchorText: "message official contact",
    destinationPage: "/contact",
    reason: "Primary conversion path",
    priority: "P0"
  },
  {
    sourcePage: "/pricing",
    anchorText: "read risk disclosures",
    destinationPage: "/risk-disclosure",
    reason: "Transparency before buying",
    priority: "P1"
  },
  {
    sourcePage: "/pricing",
    anchorText: "our trading method",
    destinationPage: "/method",
    reason: "Reassurance on quality",
    priority: "P1"
  },

  // --- Blog & Academy Links ---
  {
    sourcePage: "/blog/*",
    anchorText: "systematic trading method",
    destinationPage: "/method",
    reason: "Contextual authority link",
    priority: "P1"
  },
  {
    sourcePage: "/blog/*",
    anchorText: "view proven results",
    destinationPage: "/proof",
    reason: "Social proof",
    priority: "P1"
  },
  {
    sourcePage: "/academy/*",
    anchorText: "join premium group",
    destinationPage: "/pricing",
    reason: "Convert students to members",
    priority: "P1"
  },
  {
    sourcePage: "/academy/*",
    anchorText: "professional signal methodology",
    destinationPage: "/method",
    reason: "Academic-to-Practical transition",
    priority: "P2"
  },

  // --- Contact & Compliance Links ---
  {
    sourcePage: "/contact",
    anchorText: "compare membership plans",
    destinationPage: "/pricing",
    reason: "Help user decide before DM",
    priority: "P2"
  },
  {
    sourcePage: "/contact",
    anchorText: "trading risk disclosure",
    destinationPage: "/risk-disclosure",
    reason: "Mandatory transparency",
    priority: "P1"
  }
];
