import { blogPostsMetadata, BlogPostMetadata } from "@/content/blog/posts";

export interface AuthorProfile {
  slug: string;
  name: string;
  jobTitle: string;
  experienceYears: number;
  activeSince: number;
  specialty: string;
  country: string;
  countryFlag: string;
  bio: string;
  mission: string;
  philosophy: string;
}

export const authors: AuthorProfile[] = [
  {
    slug: "dmitry-voronov",
    name: "Dmitry Voronov",
    jobTitle: "Senior On-Chain & Data Analyst",
    experienceYears: 9,
    activeSince: 2017,
    specialty: "Quantitative wallet tracking, liquidity pool flow analysis, smart money cluster tracing.",
    country: "Russia",
    countryFlag: "🇷🇺",
    bio: "Dmitry started his career as a quantitative data modeler for traditional commodities desks in Moscow. In late 2016, he began investigating Bitcoin's public ledger and realized that the ultimate trading alpha lay in analyzing on-chain wallet clustering rather than off-chain order books. He began writing analysis pieces in 2017 to demystify complex blockchain transactions for retail investors.",
    mission: "Dmitry focuses on bridging the gap between raw blockchain data and actionable trading strategies. His articles translate complex queries and whale wallet movements into simple warnings or accumulation signals, helping retail traders protect their capital by identifying institutional footprints before market movements happen.",
    philosophy: "The blockchain never lies; human order books do. Follow the transaction hash, and the market's next step becomes visible.",
  },
  {
    slug: "aisha-al-mansoori",
    name: "Aisha Al-Mansoori",
    jobTitle: "Macroeconomic & Regulatory Researcher",
    experienceYears: 8,
    activeSince: 2018,
    specialty: "Global liquidity models, central bank policies, Middle East/European crypto compliance (VARA, MiCA).",
    country: "United Arab Emirates",
    countryFlag: "🇦🇪",
    bio: "Aisha graduated with honors in International Finance from Zayed University and spent her early career analyzing sovereign capital flows in Dubai's financial free zones. Recognizing the shift toward digital assets, she pivoted to researching crypto regulatory frameworks and capital migration in 2018. She started writing to help institutional players and high-net-worth investors navigate the emerging regulatory landscape.",
    mission: "Aisha's writing breaks down how global monetary decisions (like interest rate cuts or central bank balance sheets) affect digital asset liquidity. Her work has guided thousands of readers in understanding how international compliance structures create safe entry gates for institutional capital, removing the fear of regulatory clampdowns.",
    philosophy: "Crypto does not exist in a vacuum. It is steered by the tides of global liquidity and the fences built by regulators.",
  },
  {
    slug: "chen-wei",
    name: "Chen \"Leo\" Wei",
    jobTitle: "Market Narrative Writer & Alpha Finder",
    experienceYears: 7,
    activeSince: 2019,
    specialty: "East Asian Web3 ecosystems, layer-2 infrastructure trends, developer activity tracking.",
    country: "China",
    countryFlag: "🇨🇳",
    bio: "Chen (known to his readers as Leo) began his journey as a product manager in Shenzhen's tech sector. Fascinated by decentralized protocols, he spent his nights scanning local developer channels and WeChat mining groups. He realized that East Asian developer trends and regional market cycles were often weeks ahead of Western media coverage. He began writing in 2019 to bridge this narrative gap.",
    mission: "Leo has a reputation for uncovering early-stage project codebases, emerging layer-2 protocols, and hardware innovations before they gain mainstream traction. His alerts have helped retail communities recognize shifts in network ecosystems early, allowing them to participate in protocols during their initial launch phases.",
    philosophy: "Real value is created in developer repositories long before it is discussed on social media.",
  },
  {
    slug: "chidi-okeke",
    name: "Chidi Okeke",
    jobTitle: "DeFi Researcher & Yield Strategist",
    experienceYears: 8,
    activeSince: 2018,
    specialty: "Decentralized exchange (DEX) mechanics, lending protocol risk modeling, yield farming architectures.",
    country: "Nigeria",
    countryFlag: "🇳🇬",
    bio: "Living in Lagos, Chidi experienced the challenges of currency inflation firsthand, which led him to study decentralized hedge instruments and stablecoin lending in 2018. Finding early DeFi guides to be overly academic and risky, he began writing step-by-step yield strategies and protocol audits to help others preserve their purchasing power safely.",
    mission: "Chidi's research focuses on protocol security, smart contract audits, and sustainable yield generation. By exposing inflationary token structures and high-risk lending loops, his writing has saved thousands of everyday users from protocol hacks and unsustainable yield traps.",
    philosophy: "Yield is meaningless if the principal is at risk. Treat every smart contract as a system that must be audited before it is trusted.",
  },
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    jobTitle: "Lead Technical & Creative Writer",
    experienceYears: 10,
    activeSince: 2016,
    specialty: "Translating consensus mechanisms, cryptography, and complex protocol documentation into high-empathy education guides.",
    country: "Canada",
    countryFlag: "🇨🇦",
    bio: "Sarah began her career as a back-end software developer in Toronto. In 2016, she realized that many brilliant blockchain protocols failed simply because their technical documentation was incomprehensible to the average user. Blending her technical programming background with a passion for creative storytelling, she transitioned to full-time technical writing to make Web3 accessible to everyone.",
    mission: "Sarah designs educational guides that break down concepts like zero-knowledge proofs, sharding, and liquidity provisioning into engaging stories and visual metaphors. Her educational work has helped onboard over 50,000 retail traders and developers into the decentralized economy.",
    philosophy: "If you cannot explain a smart contract to a non-technical trader, you do not understand the protocol's real utility.",
  },
  {
    slug: "marcus-vance",
    name: "Marcus Vance",
    jobTitle: "Senior Derivatives & Technical Analyst",
    experienceYears: 11,
    activeSince: 2015,
    specialty: "Options flow, futures market leverage tracking, liquidation cluster mapping.",
    country: "United States",
    countryFlag: "🇺🇸",
    bio: "Marcus spent his early years on Chicago trading desks, analyzing traditional grain and index options. He transitioned to crypto derivatives in 2015 after seeing the inefficiencies in early Bitcoin futures contracts. He began writing market breakdowns to educate retail traders on options pricing and institutional-grade risk management.",
    mission: "Marcus's technical analysis strips away the noise of short-term charts to focus on open interest, funding rates, and liquidation zones. His regular market updates provide readers with concrete risk boundaries, warning them away from high-leverage traps during periods of market manipulation.",
    philosophy: "Surviving the market is about managing risk, not predicting price. The trader who controls their downside will inevitably capture the upside.",
  },
  {
    slug: "liam-gallagher-jones",
    name: "Liam Gallagher-Jones",
    jobTitle: "Tokenomics & Governance Researcher",
    experienceYears: 7,
    activeSince: 2019,
    specialty: "Token utility analysis, DAO governance frameworks, game theory modeling.",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    bio: "Liam studied economic design at the London School of Economics before pivoting to decentralized governance models in 2019. He found that most token distributions were heavily weighted against retail participants. He began publishing tokenomics breakdowns to audit project distribution schedules, unlock periods, and voting mechanics.",
    mission: "Liam's deep-dives analyze whether a project's token actually has long-term utility or if it exists solely to enrich early venture capital backers. His reports help investors make informed decisions based on token emission rates, helping them avoid projects with hidden dilution risks.",
    philosophy: "A token is a micro-economy. If the economic incentives are poorly aligned, the protocol will fail regardless of its technology.",
  },
  {
    slug: "elena-soto",
    name: "Elena Soto",
    jobTitle: "Market Sentiment & Narrative Analyst",
    experienceYears: 9,
    activeSince: 2017,
    specialty: "Market cycle psychology, social sentiment trends, developer migration tracking.",
    country: "Spain",
    countryFlag: "🇪🇸",
    bio: "Elena worked in Madrid as a behavioral psychologist before applying her understanding of human behavior to digital asset markets during the 2017 cycle. Observing that crypto markets are heavily driven by rapid shifts in collective psychology, she began writing on market sentiment, crowd behavior, and narrative lifecycle phases.",
    mission: "Elena helps traders navigate the emotional highs and lows of market cycles. By analyzing social trends and developer migrations, her articles teach readers how to identify signs of market exhaustion during peaks of excitement, and locate accumulation phases when fear is at its highest.",
    philosophy: "Markets are composed of people, not charts. Understand the psychology of the crowd, and you will understand the cycle.",
  },
];

export function getAuthorBySlug(slug: string | undefined): AuthorProfile | undefined {
  if (!slug) return undefined;
  return authors.find((a) => a.slug === slug);
}

/** All published posts written by a given author, newest first. */
export function getPostsByAuthorSlug(slug: string): BlogPostMetadata[] {
  return blogPostsMetadata
    .filter((post) => post.authorSlug === slug)
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}
