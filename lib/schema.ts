const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yagacalls.com';

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Yaga Calls',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`, // Placeholder - update with real logo if available
      width: '180',
      height: '60'
    },
    description: 'Premium crypto market analysis and educational signal ideas delivered through Telegram.',
    areaServed: 'Global',
    sameAs: [
      'https://t.me/+Q6lroKWufsU3M2E1'
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${params.url}/#webpage`,
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${params.url}/#article`,
    headline: params.title,
    description: params.description,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      '@type': 'Organization',
      name: params.authorName || 'Yaga Calls Editorial Team',
      url: SITE_URL
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@id': `${params.url}/#webpage` }
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: params.name,
    description: params.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    url: params.url
  };
}

export function createItemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
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
