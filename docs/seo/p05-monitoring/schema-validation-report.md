# Schema Validation Report: Yaga Calls

This report tracks the status of structured data across all implemented P0/P0.5 pages.

| Page | Schema Type(s) | alternateName Included? | FAQ Detected? | Breadcrumb Detected? | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` (Home) | Organization, WebSite | Yes | Yes | No | Valid |
| `/about-yaga-calls` | AboutPage, Organization | Yes | Yes | Yes | Valid |
| `/crypto-trading-group` | Article, WebPage | N/A | Yes | Yes | Valid |
| `/crypto-trading-telegram-group` | Article, WebPage | N/A | Yes | Yes | Valid |
| `/yaga-calls-review` | Article, WebPage | N/A | Yes | Yes | Valid |
| `/position-sizing-calculator` | WebPage | N/A | Yes | Yes | Valid |
| `/telegram-crypto-signals` | Article, WebPage | N/A | Yes | Yes | Valid |

---

## Validation Policy
1.  **Organization**: Must include `alternateName` for brand aliases.
2.  **FAQ**: Question/Answer text must match the visible content 1:1.
3.  **Breadcrumb**: Must use absolute URLs (https://www.yagacalls.com).
4.  **No Fake Reviews**: `AggregateRating` or `Review` schema is only allowed if verified third-party reviews are visible on the page.
