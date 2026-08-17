import { BRAND_CONFIG } from './constants/brand';

const SITE_URL = BRAND_CONFIG.siteUrl;

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND_CONFIG.brandName,
    alternateName: BRAND_CONFIG.brandAliases,
    url: SITE_URL,
    email: BRAND_CONFIG.officialEmail || 'partner@yagacalls.com',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/yaga_calls_logo.png`,
      width: '1200',
      height: '630'
    },
    description: BRAND_CONFIG.brandDescription,
    areaServed: 'Global',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'partner@yagacalls.com',
        contactType: 'customer service',
        availableLanguage: ['English']
      },
      {
        '@type': 'ContactPoint',
        email: 'partner@yagacalls.com',
        contactType: 'sales',
        availableLanguage: ['English']
      }
    ],
    sameAs: [
      BRAND_CONFIG.officialTelegramChannel,
      BRAND_CONFIG.officialX,
      BRAND_CONFIG.officialLinkedIn,
      BRAND_CONFIG.officialBinanceSquare
    ]
  };
}

export function createWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Yaga Calls',
    description: 'Professional-grade crypto signals and narrative-driven market research.',
    inLanguage: 'en'
  };
}

export function createWebPageSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorType?: "Person" | "Organization";
  authorJobTitle?: string;
  authorUrl?: string;
}) {
  const author = params.authorName
    ? {
        '@type': params.authorType || 'Organization',
        name: params.authorName,
        url: params.authorUrl || SITE_URL,
        ...(params.authorType === 'Person' && params.authorJobTitle ? { jobTitle: params.authorJobTitle } : {}),
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${params.url}/#webpage`,
    url: params.url,
    name: params.title,
    description: params.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    ...(author ? { author } : {}),
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished
  };
}

export function createAboutPageSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${params.url}/#aboutpage`,
    url: params.url,
    name: params.title,
    description: params.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished
  };
}

export function createBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'name': 'Breadcrumbs',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${SITE_URL}${item.item}`
    }))
  };
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'name': 'Frequently Asked Questions',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function createArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorType?: "Person" | "Organization";
  authorJobTitle?: string;
  authorUrl?: string;
  authorSameAs?: string;
  primaryEntity?: { name: string; sameAs?: string; description?: string };
  secondaryEntities?: { name: string; sameAs?: string }[];
}) {
  const authorType = params.authorType || "Organization";
  const authorObj = {
    '@type': authorType,
    name: params.authorName || 'Yaga Calls',
    url: params.authorUrl || SITE_URL,
    ...(authorType === 'Person' && params.authorJobTitle ? { jobTitle: params.authorJobTitle } : {}),
    ...(params.authorSameAs ? { sameAs: params.authorSameAs } : {})
  };

  const aboutSchema = params.primaryEntity
    ? {
        '@type': 'Thing',
        name: params.primaryEntity.name,
        ...(params.primaryEntity.sameAs ? { sameAs: params.primaryEntity.sameAs } : {}),
        ...(params.primaryEntity.description ? { description: params.primaryEntity.description } : {})
      }
    : undefined;

  const mentionsSchema = params.secondaryEntities && params.secondaryEntities.length > 0
    ? params.secondaryEntities.map((ent) => ({
        '@type': 'Thing',
        name: ent.name,
        ...(ent.sameAs ? { sameAs: ent.sameAs } : {})
      }))
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${params.url}/#article`,
    headline: params.title,
    description: params.description,
    image: params.image ? [params.image] : undefined,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: authorObj,
    publisher: {
      '@type': 'Organization',
      name: 'Yaga Calls',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/yaga_calls_logo.png`
      }
    },
    mainEntityOfPage: { '@id': `${params.url}/#webpage` },
    ...(aboutSchema ? { about: aboutSchema } : {}),
    ...(mentionsSchema ? { mentions: mentionsSchema } : {})
  };
}

export function createBlogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorType?: "Person" | "Organization";
  authorJobTitle?: string;
  authorUrl?: string;
  authorSameAs?: string;
  primaryEntity?: { name: string; sameAs?: string; description?: string };
  secondaryEntities?: { name: string; sameAs?: string }[];
}) {
  return {
    ...createArticleSchema(params),
    '@type': 'BlogPosting'
  };
}

export function createCourseSchema(params: {
  name: string;
  description: string;
  url: string;
  authorName?: string;
  authorType?: "Person" | "Organization";
  authorJobTitle?: string;
  authorUrl?: string;
}) {
  const author = params.authorName
    ? {
        '@type': params.authorType || 'Organization',
        name: params.authorName,
        url: params.authorUrl || SITE_URL,
        ...(params.authorType === 'Person' && params.authorJobTitle ? { jobTitle: params.authorJobTitle } : {}),
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: params.name,
    description: params.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    url: params.url,
    ...(author ? { author } : {}),
  };
}

export function createItemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function createServiceSchema(params: {
  name: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Global'
  };
}

export function createOfferSchema(params: {
  name: string;
  price: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: params.name,
    price: params.price,
    priceCurrency: 'USD',
    url: params.url.startsWith('http') ? params.url : `${SITE_URL}${params.url}`,
    availability: 'https://schema.org/InStock'
  };
}

export function createProfilePageSchema(params: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  nationality?: string;
  knowsAbout?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${params.url}/#profilepage`,
    name: `${params.name} — Yaga Calls`,
    url: params.url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'Person',
      '@id': `${params.url}/#person`,
      name: params.name,
      jobTitle: params.jobTitle,
      description: params.description,
      url: params.url,
      sameAs: params.url,
      ...(params.nationality ? { nationality: params.nationality } : {}),
      ...(params.knowsAbout ? { knowsAbout: params.knowsAbout } : {}),
      worksFor: { '@id': `${SITE_URL}/#organization` }
    }
  };
}

export function createImageObjectSchema(params: {
  url: string;
  caption: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: params.url,
    caption: params.caption,
    description: `${params.caption} - Selected historical example, past performance not guaranteed.`
  };
}
