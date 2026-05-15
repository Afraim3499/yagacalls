# Query-to-Page Mapping: Yaga Calls

This document defines the intended destination for specific search intents to avoid cannibalization.

| Search Intent | Target URL |
| :--- | :--- |
| **Brand (Official)** | `/` (Home) |
| **Brand (Entity/Alias)** | `/about-yaga-calls` |
| **Brand (Review/Proof)** | `/yaga-calls-review` or `/proof` |
| **Brand (Pricing)** | `/pricing` |
| **Trading Group (General)** | `/crypto-trading-group` |
| **Trading Group (Telegram)** | `/crypto-trading-telegram-group` |
| **Signals (Education)** | `/what-are-crypto-signals` |
| **Signals (Telegram)** | `/telegram-crypto-signals` |
| **Signals (Premium)** | `/premium-telegram-crypto-signals` |
| **Provider Comparison** | `/crypto-signal-provider-comparison` |
| **Provider Selection** | `/how-to-choose-a-crypto-signal-provider` |
| **Risk Management** | `/crypto-risk-management` |
| **Stop Loss Education** | `/how-to-set-stop-losses-in-crypto` |
| **Risk Tools** | `/position-sizing-calculator` |

## Cannibalization Response Rules
1.  **Conflict**: If `/telegram-crypto-signals` ranks for "crypto trading telegram group" instead of the dedicated pillar.
    *   **Fix**: Add a clear link from the signal page to the trading group page with the exact anchor text.
2.  **Conflict**: If the homepage outranks `/about-yaga-calls` for alias terms (Yagacall).
    *   **Fix**: This is acceptable, but ensure the homepage has a "Brand Alias" section linking to the About page.
3.  **Conflict**: If `/crypto-risk-management` ranks for the calculator.
    *   **Fix**: Embed a link/button "Go to Calculator" at the top of the risk page.
