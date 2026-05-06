Yaga Calls — Website Documentation

Overview
- Purpose: ultra-fast, static, no-database site that tells our story and funnels visitors to Telegram.
- Primary CTAs:
  - Join Public Group → https://t.me/+Q6lroKWufsU3M2E1
  - DM Yaga Calls → https://t.me/+Q6lroKWufsU3M2E1
- Visual style: dark, neon-accented, kinetic but performance-first.
- Hosting: shared hosting, pure HTML/CSS/vanilla JS (no frameworks, no PHP app required).

References (futuristic and crypto design inspiration)
- Awwwards — curated cutting-edge web design (motion, gradients, micro-interactions).
- Arounda agency crypto design practices — clarity borrowed from Coinbase/Kraken while retaining our distinct neon motif. https://arounda.agency/blog/crypto-web-design-main-elements-best-practices-and-real-world-examples?utm_source=openai
- Gapsy studio on crypto web designs — dashboard/market visualization cues inspired by Bitfinex. https://gapsystudio.com/blog/crypto-website-design/?utm_source=openai
- Telegram links (for funnel targets):
  - Group: https://t.me/Imtiazzavi_Binanceinsider
  - Direct DM: https://t.me/Imtiazzavi

Information Architecture (pages)
- Home (/)
- About KalababaS (/about)
- Proof & Results (/proof)
- Method: Narrative Killer (/method)
- Pricing & Access (/pricing)
- Live Market Radar (/market)
- Regions (/regions)
  - Middle East (/regions/middle-east)
  - Europe (/regions/europe)
  - USA (/regions/usa)
- Blog & News (/blog)
- Academy (/academy) — course-style knowledge base: tools, tactics, money management, and tricks & tips; Top traded coins by year (2020–2025, CoinMarketCap)
- Resources: Playbooks & Guides (/resources)
- Press & Media Kit (/press)
- Contact (/contact)
- Legal: Disclaimer (/disclaimer), Terms (/terms), Privacy (/privacy)
- System:
  - Quick Actions hub (/go) — linktree-style CTA hub
  - 404 (/404)

Page Blueprints (visuals + UX)
- Home
  - Hero: cinematic dark gradient with neon glow CTAs (Join Group, DM KalababaS).
  - Credibility tiles: stat bands (e.g., 430% combined spot gains in 30 days) with footnotes.
  - Philosophy: 3-step “Narrative Killer” icons.
  - Proof reel: compact cards linking to public group for full proof.
  - Final split CTA: Group + DM.
- About
  - Timeline storytelling; portraits with neon edge glow; values chips.
- Proof & Results
  - Grid cards: coin, date, thesis, outcome band. Each links to group for details.
- Method
  - Visual explainer panels transitioning from “noise → signal.” Three pillars: Data, Timing, Risk.
- Pricing & Access
  - Three tier cards (Quarterly, Half-yearly, Yearly), compliance note, CTA to DM only.
- Live Market Radar
  - Header ticker; central carousel of curated coins; tabs for “Top Gainers.” Performance-first charts.
- Regions
  - Local hours and tailored CTA per region. Subtle map silhouette.
- Blog & News
  - Editorial grid with categories: Insights, Narratives, Education, News. Clean reading layout.
- Resources
  - Evergreen guides and playbooks with teasers; CTA to join group.
- Press & Media Kit
  - Logos (PNG/SVG), boilerplate, brand colors, short founder bio, DM contact.
- Contact
  - Two oversized cards: Join Public Group, DM KalababaS.
- Legal
  - Long-form, high-contrast, sticky in-page TOC.

Content Guidance (per page)
- Home: headline, subhead (educational only), proof tiles, philosophy, final CTA.
- About: origin story, definition of “narrative killer,” why Telegram-first.
- Proof: 8–12 cases, before/after narrative; outcomes with method notes.
- Method: playbook summary, constraints, timelines, risk framing.
- Pricing: feature bullets (Premium, Scalping, Gem Book); “crypto payments only” note; DM CTA.
- Market: “Today’s Pulse” summary; short hints on reading tiles.
- Blog: evergreen (method, spot vs day trade, portfolio sizing) + news recaps.
- Resources: checklists, narrative spotting, psychology guardrails.
- Press: boilerplate, media contact.
- Contact: direct CTAs; office hours by region.
- Legal: disclaimers; privacy; terms.

Live Crypto Prices — Strategy (no backend)
- Placement
  - Global header: thin ticker with 4–6 curated coins.
  - Home: “Today’s Pulse” with 3 tiles (Top gainer, Narrative pick, Breadth).
  - /market: primary destination with mini-charts.
- Data sources
  - Client-side polling via CoinGecko Simple Price API (30–60s). https://www.coingecko.com/en/api/documentation
  - Optional widgets (balanced for performance) for richer visuals. https://quantifycrypto.com/blog/the-easy-way-to-add-live-crypto-prices-to-your-website?utm_source=openai
- Performance rules
  - Defer and lazy-load scripts; respect prefers-reduced-motion; hydrate fully only on /market.

Performance, Accessibility, SEO
- Performance
  - CSS ≤ 100KB total; inline critical CSS for hero; defer the rest.
  - JS ≤ 150KB total; tree-shaken and code-split by page; lazy-load charts.
  - Images WebP/AVIF; srcset; lazy below the fold.
- Accessibility
  - 4.5:1 contrast; visible focus; reduced-motion variants.
- SEO
  - Titles/meta per page; OG/Twitter cards; JSON-LD (Organization, WebSite, Product); sitemap + robots.

JavaScript Architecture (mother file + page modules)
- Goals: keep the mother file tiny, load page-specific code only where needed.
- Structure
  - /assets/js/
    - app.js               ← mother file (boot + router + tiny utilities)
    - pages/
      - home.js
      - about.js
      - proof.js
      - method.js
      - pricing.js
      - market.js
      - regions-middle-east.js
      - regions-europe.js
      - regions-usa.js
      - blog.js
      - resources.js
      - press.js
      - contact.js
      - legal.js
    - lib/
      - dom.js            (qs/qsa helpers, class toggles)
      - ticker.js         (lightweight price ticker; only used where needed)
      - charts.js         (lazy-loaded mini charts on /market)
      - analytics.js      (tiny outbound click tracking)
- Loading strategy
  - app.js runs first, detects page via body[data-page] or pathname, and dynamically imports only the relevant module (e.g., pages/market.js).
  - Shared utilities are tiny and tree-shaken; heavy libs (charts) are imported inside page modules (on-demand) and only on /market.
  - Use requestIdleCallback for non-critical hydration and IntersectionObserver for lazy sections.

CSS Architecture
- /assets/css/
  - base.css (reset, variables, typography)
  - layout.css (grid, spacing, containers)
  - components.css (cards, buttons, tickers)
  - pages/*.css for large page-specific styles if needed
  - Critical CSS for hero inlined per page; rest deferred.

Navigation & CTAs
- Primary nav: Home, Method, Proof, Market, Blog, Pricing, Contact. Academy linked in footer and burger menu.
- Persistent CTAs:
  - Join Public Group → https://t.me/Imtiazzavi_Binanceinsider
  - DM KalababaS → https://t.me/Imtiazzavi

Deployment (shared hosting)
- Upload /public (HTML), /assets (CSS/JS/img) to hosting root.
- Ensure gzip/brotli and far-future caching for static assets; set proper cache headers.
- Provide sitemap.xml and robots.txt.

Timeline
- Week 1: brand/look, hero animation brief, copy outline, home wireframe.
- Week 2: build static pages, visuals, performance/SEO tuning.
- Week 3: load proof content, legal pages, analytics, QA, launch.

Success Metrics
- CTR to public group and DM; time on page; scroll completion; LCP/CLS scores.



Brand Color Palette and Design Tokens
- Palette (Hex / HSL)
  - Primary Neon (Electric Cyan): #00E5FF / hsl(188 100% 50%)
  - Accent Neon (Acid Green): #7CFF6B / hsl(111 100% 71%)
  - Secondary Neon (Magenta): #FF3CF7 / hsl(304 100% 61%)
  - Emphasis (Amber): #FFC107 / hsl(45 100% 50%)
  - Background Black: #0A0B0D / hsl(220 20% 5%)
  - Surface Deep: #0F1217 / hsl(215 20% 8%)
  - Surface: #151A21 / hsl(214 19% 10%)
  - Line/Subtle: #1E242C / hsl(213 18% 15%)
  - Text High: #EAF2FF / hsl(215 100% 95%)
  - Text Muted: #A7B0C0 / hsl(215 16% 70%)
  - Success: #22C55E / hsl(142 72% 45%)
  - Warning: #F59E0B / hsl(38 92% 50%)
  - Danger: #EF4444 / hsl(0 84% 60%)

- CSS Variables (define in :root)
  - Colors
    - --color-primary: #00E5FF;
    - --color-accent: #7CFF6B;
    - --color-secondary: #FF3CF7;
    - --color-amber: #FFC107;
    - --color-bg: #0A0B0D;
    - --color-surface-deep: #0F1217;
    - --color-surface: #151A21;
    - --color-line: #1E242C;
    - --color-text-high: #EAF2FF;
    - --color-text-muted: #A7B0C0;
    - --color-success: #22C55E;
    - --color-warning: #F59E0B;
    - --color-danger: #EF4444;
  - Effects
    - --glow-primary: 0 0 24px rgba(0,229,255,0.35), 0 0 48px rgba(0,229,255,0.2);
    - --glow-accent: 0 0 20px rgba(124,255,107,0.30), 0 0 40px rgba(124,255,107,0.18);
  - Radii and Space
    - --radius-card: 16px;
    - --radius-pill: 999px;
    - --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px; --space-8: 32px; --space-12: 48px;

- Gradients
  - --grad-hero: radial-gradient(1200px 600px at 80% -10%, rgba(255,60,247,0.28) 0%, rgba(10,11,13,0) 60%), radial-gradient(1200px 600px at 20% 0%, rgba(0,229,255,0.25) 0%, rgba(10,11,13,0) 60%), linear-gradient(180deg, #0A0B0D 0%, #0F1217 60%, #0A0B0D 100%);
  - --grad-button: linear-gradient(90deg, #00E5FF 0%, #7CFF6B 100%);
  - --grad-card: linear-gradient(180deg, rgba(255,60,247,0.08) 0%, rgba(21,26,33,0.9) 20%);

- Component Usage Conventions
  - Primary button
    - Background: var(--grad-button)
    - Text: #001014 (dark) or var(--color-bg) when needed
    - Hover: increase glow to var(--glow-primary)
  - Secondary button
    - Background: var(--color-surface)
    - Border: 1px solid var(--color-line)
    - Text: var(--color-text-high)
  - Cards
    - Background: var(--grad-card) over var(--color-surface-deep)
    - Border: 1px solid var(--color-line)
    - Shadow: var(--glow-accent) on hover (reduced on prefers-reduced-motion)
  - Page background
    - Background: var(--grad-hero) with solid fallback var(--color-bg)

- Token Adoption Rules
  - Do not hardcode hex values in components. Always use CSS variables.
  - Keep contrast ≥ 4.5:1 for text against surfaces.
  - Animation glow should be disabled or reduced when prefers-reduced-motion is set.

