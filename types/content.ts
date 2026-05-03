
export interface SiteSettings {
  name: string;
  url: string;
  logo: string;
  telegramLink: string;
  premiumTelegramLink: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export interface CTA {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  eventId?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  perMonth: string;
  tagline: string;
  benefits: string[];
  featured?: boolean;
  guarantee?: string;
  ctaText: string;
  telegramLink: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  stat?: string;
}

export interface SignalExample {
  id: number;
  coin: string;
  type: string;
  status: 'active' | 'closed';
  signalStatus: 'active' | 'closed'; // Added for compatibility
  entryZone: string;
  targets: string;
  stopLoss: string;
  riskLevel: string;
  roiResult?: string;
  date: string;
  hook: string;
  content: string;
  marketContext?: string; // Added
  linkType?: 'telegram' | 'twitter' | 'external'; // Added
  linkUrl: string; // Added
  linkText: string; // Added
  signalStrength?: number; // Added
}

export interface MethodStep {
  id: number;
  title: string;
  description: string;
  points: string[];
  outcome: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category?: string;
}

export interface MarketAnalysisItem extends SignalExample {
  seoTitle?: string;
  seoDescription?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  source: string;
  date: string;
  link: string;
  sentiment?: 'bullish' | 'bearish' | 'neutral';
}
