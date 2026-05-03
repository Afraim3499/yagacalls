---
name: Complete SEO 4 Layers Implementation Plan
overview: ""
todos:
  - id: 55c7cb4c-9be1-49cd-91ee-629b235ef964
    content: Implement scroll depth and dwell time tracking system with engagement-tracker.js and update analytics.php
    status: pending
  - id: b4ceffc1-c2e8-4254-8dfb-0e196f152597
    content: Create A/B testing framework with ab-testing.js and CMS interface in ab-tests.php
    status: pending
  - id: 3edf9c22-84bc-4fdd-9fb2-7537290410f0
    content: Enhance AI audits in ml-enhance.php with readability scoring, keyword analysis, and quality scoring
    status: pending
  - id: 8ad89d87-8364-46d4-b26d-f68e9de5b0d7
    content: Implement LLM citation hooks system with citation-hooks.php and add citation markers to regenerate.php
    status: pending
  - id: af09e0a6-10ab-4d9c-8a96-71fd861730a5
    content: Create prompt matching optimization system with prompt-matching.php and integrate into CMS
    status: pending
  - id: c2dd79e0-6f21-4185-9734-32449953f61b
    content: Build content comparison generator with comparison-generator.php and create comparison blog posts
    status: pending
  - id: 2e4a2c77-f10f-4121-9fb8-59ae77d1616b
    content: Add research study content template and ResearchStudy schema markup to CMS
    status: pending
  - id: 3e529517-7f5b-4f6a-b274-41013d7b1209
    content: Structure content for AI retrieval with pre-validated ideas format in regenerate.php
    status: pending
  - id: 2f81fb6d-e4b9-496a-b546-050f5833dced
    content: Enhance entity markup with Person, Currency, FinancialProduct schemas in regenerate.php
    status: pending
  - id: 50ab4ac7-4ae3-4a09-9c09-e0993b060efa
    content: Expand Quick Summary box and create comprehensive instant answer system
    status: pending
  - id: e6e15745-a0df-4777-960f-3c527db8a0b5
    content: Implement People Also Ask generator with paa-generator.php and add PAA section to analysis cards
    status: pending
  - id: 7d6c9d6a-28c8-4bb0-aae4-b0c26671c523
    content: Optimize for NIP visibility and zero-click traffic with enhanced summaries and rich snippets
    status: pending
  - id: 93cc0a87-adcc-4898-bfbd-b6441604f916
    content: Create performance monitoring system for Core Web Vitals tracking
    status: pending
  - id: f3de85af-dda4-4bbe-9c92-eb8ba429dca6
    content: Add ARIA labels, keyboard navigation, and WCAG AA compliance across all pages
    status: pending
---

# Complete SEO 4 Layers Implementation Plan

## Phase 1: SXO Layer Completion (75% → 100%)

### 1.1 Scroll Depth & Dwell Time Tracking

**Files to create/modify:**

- `assets/js/lib/engagement-tracker.js` (new) - Core tracking library
- `assets/js/pages/analysis.js` - Add tracking to analysis page
- `cms/analytics.php` - Update to store scroll/dwell data
- `analysis.html` - Add tracking script reference

**Implementation:**

- Track scroll depth milestones (25%, 50%, 75%, 100%) using IntersectionObserver
- Measure dwell time (time on page before leaving)
- Send data to analytics endpoint via fetch API
- Store in `data/analytics.json` with structure: `{id: {views, clicks, scroll_depth: {25: count, 50: count, 75: count, 100: count}, dwell_time: seconds, avg_dwell: seconds}}`
- Display scroll depth metrics in CMS Analytics tab

### 1.2 A/B Testing Framework

**Files to create/modify:**

- `assets/js/lib/ab-testing.js` (new) - A/B testing system
- `cms/ab-tests.php` (new) - CMS interface for managing tests
- `cms/admin.php` - Add A/B testing tab

**Implementation:**

- Create lightweight A/B testing system for headlines, CTAs, layouts
- Store test variants in `data/ab-tests.json`
- Track conversions per variant
- Display results in CMS with statistical significance
- Support for headline variations, CTA text, button colors

---

## Phase 2: AIO Layer Completion (90% → 100%)

### 2.1 Enhanced AI Audits

**Files to modify:**

- `cms/ml-enhance.php` - Expand `enhanceContent()` function
- `cms/admin.php` - Display comprehensive audit results

**Implementation:**

- Add readability scoring (Flesch-Kincaid)
- Check for keyword density and distribution
- Analyze content structure (headings, paragraphs, lists)
- Suggest optimal content length based on topic
- Check for semantic keyword variations
- Validate internal linking opportunities
- Score content quality (0-100) with improvement suggestions
- Display audit report in CMS with color-coded indicators

---

## Phase 3: GEO Layer Completion (60% → 100%)

### 3.1 LLM Citation Hooks

**Files to create/modify:**

- `cms/citation-hooks.php` (new) - Generate citation-ready content
- `cms/regenerate.php` - Add citation markers to content
- `analysis.html` - Display citations in structured format

**Implementation:**

- Add `<cite>` tags around key statistics and claims
- Create citation-ready sections with source attribution
- Generate structured citation data in JSON-LD format
- Add "Sources" section to analysis cards
- Format: `According to [source], [claim]` with proper attribution

### 3.2 Prompt Matching Optimization

**Files to create/modify:**

- `cms/prompt-matching.php` (new) - Analyze and optimize for AI queries
- `cms/ml-enhance.php` - Add prompt matching suggestions
- `cms/admin.php` - Show prompt matching score

**Implementation:**

- Detect common AI query patterns (What, How, Why, When, Where, Compare, Best)
- Suggest content modifications to match prompts
- Add FAQ-style sections that answer common AI queries
- Optimize headlines for prompt matching
- Score content on prompt alignment (0-100)

### 3.3 Content Comparisons

**Files to create/modify:**

- `cms/comparison-generator.php` (new) - Generate comparison content
- `cms/admin.php` - Add comparison template option
- `blog/` - Create comparison blog posts (e.g., "BTC vs ETH Analysis")

**Implementation:**

- Create comparison template: "X vs Y: [Comparison Points]"
- Generate structured comparison tables
- Add Comparison schema markup
- Examples: "Spot Trading vs Day Trading", "BTC vs ETH Analysis", "Technical vs Fundamental Analysis"

### 3.4 Citation Hooks Enhancement

**Files to modify:**

- `cms/regenerate.php` - Add citation-ready formatting
- `analysis.html` - Display citation markers visually

**Implementation:**

- Mark key statistics with citation numbers [1], [2]
- Create "References" section at bottom of analysis cards
- Link citations to sources
- Use proper citation format for LLM retrieval

### 3.5 Industry Studies/Research Content

**Files to create/modify:**

- `blog/` - Create research study posts
- `cms/regenerate.php` - Add ResearchStudy schema markup
- `cms/admin.php` - Add "Research Study" content type

**Implementation:**

- Create template for research/study content
- Add ResearchStudy schema with methodology, findings, conclusions
- Format: "Study: [Topic] - [Findings]"
- Include data visualizations, statistics, charts
- Add "Key Findings" summary box

### 3.6 Pre-Validated Ideas Structure

**Files to create/modify:**

- `cms/regenerate.php` - Structure content for AI retrieval
- `cms/ml-enhance.php` - Add pre-validation checks

**Implementation:**

- Structure content with clear sections: Problem, Solution, Evidence, Conclusion
- Add "Key Takeaways" boxes at top of content
- Use numbered lists for step-by-step processes
- Mark validated claims with checkmarks/icons
- Format content for easy AI extraction

---

## Phase 4: AEO Layer Completion (70% → 100%)

### 4.1 Enhanced Entity Clarity

**Files to modify:**

- `cms/regenerate.php` - Enhance Article schema with detailed entities
- `analysis.html` - Add more entity markup
- All HTML files - Add Person, Organization, Currency entities

**Implementation:**

- Add detailed Person schema for authors
- Add Currency schema for crypto mentions (BTC, ETH, etc.)
- Add FinancialProduct schema for trading signals
- Link entities with `sameAs` properties
- Add entity relationships (author writes, organization publishes)

### 4.2 Enhanced Instant Answers

**Files to modify:**

- `analysis.html` - Expand Quick Summary box
- `cms/regenerate.php` - Generate comprehensive instant answers
- `cms/ml-enhance.php` - Auto-generate instant answer content

**Implementation:**

- Expand Quick Summary to 5-7 questions
- Add "Key Facts" box with bullet points
- Create "At a Glance" section with stats
- Format answers for zero-click results
- Add Answer schema markup

### 4.3 People Also Ask (PAA) Content

**Files to create/modify:**

- `cms/paa-generator.php` (new) - Generate PAA content
- `cms/regenerate.php` - Add PAA section to analysis cards
- `analysis.html` - Display PAA section

**Implementation:**

- Generate 3-5 related questions based on content
- Create expandable PAA section in analysis cards
- Use FAQPage schema for PAA questions
- Link PAA questions to relevant content sections
- Auto-generate based on content keywords and topics

### 4.4 NIP Visibility Optimization

**Files to modify:**

- `cms/regenerate.php` - Optimize for no-click intent
- `analysis.html` - Add comprehensive summary sections

**Implementation:**

- Create comprehensive "Executive Summary" at top
- Add "Quick Stats" box with key numbers
- Format content for immediate consumption
- Add "TL;DR" sections for quick readers
- Optimize meta descriptions for zero-click display

### 4.5 Zero-Click Traffic Optimization

**Files to modify:**

- All HTML files - Enhance meta descriptions
- `cms/regenerate.php` - Generate zero-click optimized summaries
- `analysis.html` - Add rich snippets content

**Implementation:**

- Create 150-160 character summaries for featured snippets
- Add structured data for rich results
- Format lists and tables for snippet display
- Add "Quick Answer" boxes optimized for snippets
- Test with Google's Rich Results Test

---

## Phase 5: UX Enhancements

### 5.1 Performance Monitoring

**Files to create/modify:**

- `assets/js/lib/performance-monitor.js` (new) - Track Core Web Vitals
- `cms/analytics.php` - Store performance metrics

**Implementation:**

- Track LCP (Largest Contentful Paint)
- Track FID (First Input Delay)
- Track CLS (Cumulative Layout Shift)
- Display in CMS Analytics dashboard
- Alert on performance degradation

### 5.2 User Experience Improvements

**Files to modify:**

- `assets/js/pages/analysis.js` - Add smooth interactions
- `analysis.html` - Improve visual hierarchy
- CSS files - Add micro-interactions

**Implementation:**

- Add loading states for content
- Implement smooth scroll to sections
- Add "Back to top" button
- Improve mobile touch interactions
- Add hover states and transitions
- Implement progressive image loading

### 5.3 Accessibility Enhancements

**Files to modify:**

- All HTML files - Add ARIA labels
- CSS files - Ensure color contrast
- `assets/js/` - Add keyboard navigation

**Implementation:**

- Add ARIA labels to interactive elements
- Ensure WCAG AA color contrast
- Add skip navigation links
- Implement keyboard navigation
- Add focus indicators
- Test with screen readers

---

## Implementation Order

1. **Week 1**: SXO tracking (scroll depth, dwell time) + UX improvements
2. **Week 2**: GEO citations and prompt matching
3. **Week 3**: AEO enhancements (PAA, instant answers, entity clarity)
4. **Week 4**: GEO comparisons and research content + AIO audits
5. **Week 5**: A/B testing framework + final optimizations

---

## Success Metrics

- SXO: 100% (scroll depth, dwell time, A/B testing implemented)
- AIO: 100% (enhanced AI audits implemented)
- GEO: 100% (citations, comparisons, research content implemented)
- AEO: 100% (PAA, entity clarity, zero-click optimization implemented)
- UX: Enhanced with performance monitoring and accessibility

---

## Files Summary

**New files to create:**

- `assets/js/lib/engagement-tracker.js`
- `assets/js/lib/ab-testing.js`
- `assets/js/lib/performance-monitor.js`
- `cms/citation-hooks.php`
- `cms/prompt-matching.php`
- `cms/comparison-generator.php`
- `cms/paa-generator.php`
- `cms/ab-tests.php`

**Files to modify:**

- `cms/analytics.php` - Add scroll/dwell tracking
- `cms/ml-enhance.php` - Enhanced audits, prompt matching
- `cms/regenerate.php` - Citations, PAA, entity markup
- `cms/admin.php` - New tabs and features
- `assets/js/pages/analysis.js` - Tracking integration
- `analysis.html` - PAA section, enhanced summaries
- All HTML files - Entity markup, accessibility