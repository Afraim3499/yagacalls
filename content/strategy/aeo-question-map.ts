/**
 * Yaga Calls AEO (Answer Engine Optimization) Question Map (2026)
 * Targeted questions and compliance-safe answers for AI results and featured snippets.
 */

export interface AEOQuestion {
  question: string;
  shortAnswer: string;
  targetPage: string;
  suggestedSchema: string;
  internalLinks: string[];
  cta: string;
}

export const aeoQuestionMap: AEOQuestion[] = [
  // --- General & Awareness ---
  {
    question: "What are crypto signals?",
    shortAnswer: "Crypto signals are research-backed trade ideas or market analysis shared by experienced analysts. They typically include entry points, targets, and stop-loss levels to help traders navigate the market.",
    targetPage: "/academy",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Learn the Method"
  },
  {
    question: "How do crypto signals work?",
    shortAnswer: "Crypto signals work by providing specific data points for a potential trade setup. Analysts use technical and fundamental research to identify opportunities and share them via platforms like Telegram.",
    targetPage: "/academy/how-crypto-signals-work",
    suggestedSchema: "HowTo",
    internalLinks: ["/academy"],
    cta: "View Process"
  },
  {
    question: "Are crypto signals worth it?",
    shortAnswer: "Crypto signals can be valuable for traders looking for systematic research and narrative analysis. However, they should always be used as educational tools and part of a broader risk management strategy.",
    targetPage: "/blog/are-crypto-signals-worth-it",
    suggestedSchema: "FAQPage",
    internalLinks: ["/proof"],
    cta: "See Our Track Record"
  },
  {
    question: "What should a crypto signal include?",
    shortAnswer: "A professional crypto signal should include the asset name, entry range, multiple profit targets, and a clear stop-loss or invalidation point to manage risk effectively.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/academy"],
    cta: "See Signal Format"
  },
  {
    question: "What is a Telegram crypto signals group?",
    shortAnswer: "A Telegram crypto signals group is a private or public community where market analysts share real-time trade ideas, charts, and market updates directly to members' mobile or desktop devices.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "Join Free Telegram"
  },

  // --- Trust & Reliability ---
  {
    question: "How do I know if a crypto signals group is trustworthy?",
    shortAnswer: "Trustworthy groups provide historical proof, emphasize risk management, avoid guaranteed profit claims, and offer transparent communication without using high-pressure sales tactics.",
    targetPage: "/blog/telegram-crypto-signals-trustworthy",
    suggestedSchema: "FAQPage",
    internalLinks: ["/proof"],
    cta: "Check Our Proof"
  },
  {
    question: "What makes a crypto signal provider reliable?",
    shortAnswer: "Reliability comes from consistent research, a systematic approach to market narratives, and a focus on long-term sustainability rather than short-term hype.",
    targetPage: "/proof",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "View Our Methodology"
  },
  {
    question: "How can I avoid crypto pump signal scams?",
    shortAnswer: "Avoid groups that promise 'guaranteed' 1000% gains, use anonymous coins with low liquidity, or pressure you to buy immediately. Stick to providers who focus on liquid, major assets.",
    targetPage: "/academy/avoid-pump-signal-scams",
    suggestedSchema: "FAQPage",
    internalLinks: ["/risk-disclosure"],
    cta: "Stay Safe"
  },
  {
    question: "Should a crypto signal include stop loss?",
    shortAnswer: "Yes. Every professional crypto signal must include a stop-loss level. Trading without a stop-loss is high-risk and is not a recommended practice in systematic trading.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/risk-disclosure"],
    cta: "Learn Risk Management"
  },
  {
    question: "Do crypto signals guarantee profit?",
    shortAnswer: "No. No signal provider can guarantee profits. Crypto markets are volatile, and trading involves a significant risk of loss. Signals are educational ideas, not financial advice.",
    targetPage: "/risk-disclosure",
    suggestedSchema: "FAQPage",
    internalLinks: ["/terms"],
    cta: "Read Risk Warning"
  },

  // --- Premium & Service ---
  {
    question: "What is the difference between free and paid crypto signals?",
    shortAnswer: "Paid or premium signals usually offer deeper research, more frequent updates, specific entry/exit guidance, and access to a private community compared to limited free versions.",
    targetPage: "/blog/free-vs-paid-crypto-signals",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "Compare Plans"
  },
  {
    question: "Are premium crypto signals worth it?",
    shortAnswer: "Premium signals are often worth it for traders who value expert research time-savings and want a more structured, risk-managed approach to their market activity.",
    targetPage: "/pricing",
    suggestedSchema: "FAQPage",
    internalLinks: ["/proof"],
    cta: "See Premium Benefits"
  },
  {
    question: "How do I join a premium crypto signals group?",
    shortAnswer: "Most premium groups, including Yaga Calls, use a manual onboarding process via Telegram to ensure direct communication and personalized support for new members.",
    targetPage: "/contact",
    suggestedSchema: "HowTo",
    internalLinks: ["/pricing"],
    cta: "Message Us"
  },
  {
    question: "How does manual Telegram onboarding work?",
    shortAnswer: "Manual onboarding involves messaging the provider directly on Telegram, choosing a plan, and being manually added to the private channel after verification.",
    targetPage: "/contact",
    suggestedSchema: "HowTo",
    internalLinks: ["/pricing"],
    cta: "Start Onboarding"
  },

  // --- Regional Focused ---
  {
    question: "What are the best crypto signals for UAE traders?",
    shortAnswer: "Traders in the UAE look for premium, research-backed Telegram signals that align with global market hours and focus on high-liquidity assets.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "Global Access"
  },
  {
    question: "Are there Telegram crypto signals for European traders?",
    shortAnswer: "Yes, many European traders use global Telegram signal services like Yaga Calls that provide systematic market analysis and risk-managed setup ideas.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Join Community"
  },
  {
    question: "Can US traders use Telegram crypto signals?",
    shortAnswer: "US traders can use Telegram signals for educational market analysis and research. It is important to ensure the provider focuses on educational content and not financial advice.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/risk-disclosure"],
    cta: "Educational Analysis"
  },
  {
    question: "Are crypto signals useful for Australian traders?",
    shortAnswer: "Crypto signals are highly useful for Australian traders looking to follow global market narratives and systematic trading setups without 24/7 monitoring.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/proof"],
    cta: "View Signals"
  },
  {
    question: "What should Middle East traders look for in a crypto signals provider?",
    shortAnswer: "Middle East traders should prioritize providers with a global reputation, transparent track records, and a strong emphasis on risk management.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "Premium Access"
  },

  // --- Risk Management ---
  {
    question: "How much should I risk per crypto trade?",
    shortAnswer: "A common rule in risk management is to risk no more than 1% to 2% of your total trading capital on any single setup.",
    targetPage: "/academy/risk-management-crypto-signals",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Learn Risk Rules"
  },
  {
    question: "What is stop loss in crypto signals?",
    shortAnswer: "A stop-loss is a predetermined price level where a trade is automatically closed to prevent further losses if the market moves against the expected direction.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/academy"],
    cta: "See Example"
  },
  {
    question: "What is position sizing?",
    shortAnswer: "Position sizing is the process of determining how much of an asset to buy based on your total capital and the distance to your stop-loss level.",
    targetPage: "/academy",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Learn Sizing"
  },
  {
    question: "What is invalidation in a trading setup?",
    shortAnswer: "Invalidation is the point where the original reason for taking a trade is no longer valid, usually marked by the price hitting a specific level or a change in narrative.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/proof"],
    cta: "Study Setups"
  },
  {
    question: "Why is risk management important in crypto signals?",
    shortAnswer: "Risk management is essential because crypto markets are highly volatile. It ensures that no single losing trade significantly impacts your overall portfolio.",
    targetPage: "/risk-disclosure",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Protect Your Capital"
  },

  // --- Technical & Methodology ---
  {
    question: "What is narrative trading in crypto?",
    shortAnswer: "Narrative trading involves identifying the 'stories' or trends driving capital flow in the market, such as AI, DePIN, or RWA, and taking trades aligned with those themes.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/blog/narrative-trading-crypto"],
    cta: "Learn Narratives"
  },
  {
    question: "What is the 'Narrative Killer' method?",
    shortAnswer: "Yaga Calls uses the 'Narrative Killer' method to filter out noise and focus on high-conviction setups driven by fundamental market shifts and technical validation.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "See Our Method"
  },
  {
    question: "How are Yaga Calls signals generated?",
    shortAnswer: "Signals are generated through a combination of manual technical analysis, deep narrative research, and strict risk-reward filtering.",
    targetPage: "/method",
    suggestedSchema: "HowTo",
    internalLinks: ["/proof"],
    cta: "Our Research"
  },
  {
    question: "Does Yaga Calls use bots for signals?",
    shortAnswer: "No. Yaga Calls focuses on manual analysis and human-delivered insights to ensure quality and context that automated bots often miss.",
    targetPage: "/contact",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "Human Analysis"
  },
  {
    question: "What timeframe are the signals for?",
    shortAnswer: "Yaga Calls typically focuses on swing trading and mid-term setups, ranging from a few days to several weeks, depending on the market narrative.",
    targetPage: "/proof",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "See Timeframes"
  },

  // --- Trust & Compliance ---
  {
    question: "Is Yaga Calls a licensed financial advisor?",
    shortAnswer: "No. Yaga Calls is an educational platform providing market analysis and signal ideas. We are not licensed financial advisors and do not provide personalized advice.",
    targetPage: "/risk-disclosure",
    suggestedSchema: "FAQPage",
    internalLinks: ["/terms"],
    cta: "Disclaimer"
  },
  {
    question: "Can I get a refund for premium signals?",
    shortAnswer: "Please refer to our Terms of Service for our policy on subscriptions. We emphasize manual onboarding to ensure all members understand the service before joining.",
    targetPage: "/terms",
    suggestedSchema: "FAQPage",
    internalLinks: ["/contact"],
    cta: "Read Terms"
  },
  {
    question: "How do I report a scammer impersonating Yaga Calls?",
    shortAnswer: "Always ensure you are communicating with the official Yaga Calls account. You can verify our official links on our website and report impersonators to Telegram.",
    targetPage: "/contact",
    suggestedSchema: "FAQPage",
    internalLinks: ["/"],
    cta: "Official Contact"
  },
  {
    question: "Does Yaga Calls offer investment management?",
    shortAnswer: "No. We never ask for your funds to trade on your behalf. We only provide educational signals and analysis for you to use at your own discretion.",
    targetPage: "/risk-disclosure",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "Read Disclaimer"
  },
  {
    question: "Where is Yaga Calls based?",
    shortAnswer: "Yaga Calls is a global crypto community and market analysis provider serving traders across international markets via Telegram.",
    targetPage: "/contact",
    suggestedSchema: "FAQPage",
    internalLinks: ["/"],
    cta: "Global Reach"
  },

  // --- Practical Questions ---
  {
    question: "Which crypto exchange should I use?",
    shortAnswer: "Our signals focus on liquid assets available on major global exchanges like Binance, ByBit, OKX, and Coinbase.",
    targetPage: "/pricing",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Start Trading"
  },
  {
    question: "How many signals do you provide per week?",
    shortAnswer: "The number of signals varies based on market conditions. We prioritize quality over quantity, sharing only high-conviction setups that meet our criteria.",
    targetPage: "/pricing",
    suggestedSchema: "FAQPage",
    internalLinks: ["/proof"],
    cta: "View Frequency"
  },
  {
    question: "Do you provide signals for altcoins?",
    shortAnswer: "Yes, we provide analysis and signals for Bitcoin, Ethereum, and a wide range of liquid altcoins that align with current market narratives.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/blog"],
    cta: "Altcoin Insights"
  },
  {
    question: "Can I use these signals for spot trading?",
    shortAnswer: "Yes, our signal ideas can be applied to both spot and futures trading, depending on your individual risk tolerance and trading strategy.",
    targetPage: "/academy",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Spot vs Futures"
  },
  {
    question: "What is an entry range?",
    shortAnswer: "An entry range is the price zone where we believe a trade setup has the best risk-to-reward ratio for initiation.",
    targetPage: "/method",
    suggestedSchema: "FAQPage",
    internalLinks: ["/academy"],
    cta: "Study Entries"
  },

  // --- Advanced & Strategy ---
  {
    question: "What is DePIN in crypto?",
    shortAnswer: "DePIN stands for Decentralized Physical Infrastructure Networks, a major narrative focusing on using blockchain to manage real-world infrastructure like Wi-Fi or storage.",
    targetPage: "/blog/narrative-trading-crypto",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Explore DePIN"
  },
  {
    question: "How to trade RWA (Real World Assets) signals?",
    shortAnswer: "Trading RWA signals involves identifying tokens that represent fractional ownership of real-world assets like real estate or gold, often driven by institutional adoption narratives.",
    targetPage: "/blog",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "RWA Insights"
  },
  {
    question: "What are the risks of using crypto signals?",
    shortAnswer: "Risks include market volatility, unexpected news events, and the potential for capital loss. Signals should never be followed blindly without individual risk assessment.",
    targetPage: "/risk-disclosure",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Understand Risks"
  },
  {
    question: "How to manage a winning trade?",
    shortAnswer: "Managing a winning trade involves taking partial profits at targets, trailing your stop-loss to break even or into profit, and staying aligned with the original narrative.",
    targetPage: "/academy/risk-management-crypto-signals",
    suggestedSchema: "FAQPage",
    internalLinks: ["/method"],
    cta: "Learn Management"
  },
  {
    question: "What is 'FOMO' in crypto trading?",
    shortAnswer: "FOMO, or Fear Of Missing Out, is the emotional urge to enter a trade because the price is rising rapidly, often leading to poor entries and higher risk.",
    targetPage: "/academy",
    suggestedSchema: "FAQPage",
    internalLinks: ["/risk-disclosure"],
    cta: "Avoid FOMO"
  },

  // --- Final Trust Push ---
  {
    question: "Why choose Yaga Calls over other groups?",
    shortAnswer: "Yaga Calls focuses on deep narrative research, manual analysis, and a strict 'risk-first' methodology, avoiding the hype often found in other signal groups.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/proof", "/method"],
    cta: "See the Difference"
  },
  {
    question: "Is there a free trial for premium signals?",
    shortAnswer: "We offer a free Telegram channel where we share select analysis and results, allowing you to evaluate our quality before committing to a premium plan.",
    targetPage: "/",
    suggestedSchema: "FAQPage",
    internalLinks: ["/pricing"],
    cta: "Join Free Channel"
  },
  {
    question: "How long has Yaga Calls been active?",
    shortAnswer: "Yaga Calls has been providing market analysis and signals across multiple market cycles, building a community of over 3,500 traders.",
    targetPage: "/proof",
    suggestedSchema: "FAQPage",
    internalLinks: ["/"],
    cta: "Our History"
  },
  {
    question: "Do you offer 1-on-1 coaching?",
    shortAnswer: "Currently, we focus on providing high-quality group signals and educational academy content. You can always ask questions via our official contact channel.",
    targetPage: "/contact",
    suggestedSchema: "FAQPage",
    internalLinks: ["/academy"],
    cta: "Contact Support"
  },
  {
    question: "What is the success rate of Yaga Calls signals?",
    shortAnswer: "While we have a strong historical track record, we do not claim a 'win rate' as market conditions change. We focus on risk-reward ratios that aim for long-term sustainability.",
    targetPage: "/proof",
    suggestedSchema: "FAQPage",
    internalLinks: ["/risk-disclosure"],
    cta: "View Examples"
  },
  {
    question: "How to start with Yaga Calls today?",
    shortAnswer: "The best way to start is by joining our free Telegram channel or messaging our official contact to learn about our premium onboarding process.",
    targetPage: "/contact",
    suggestedSchema: "HowTo",
    internalLinks: ["/"],
    cta: "Get Started"
  }
];
