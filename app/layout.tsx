import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalAtmosphericShell from "@/components/layout/GlobalAtmosphericShell";
import { LazyMotion, domMax } from "framer-motion";

const GTM_CONTAINER_ID = "GTM-M824DP22";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport = {
  themeColor: "#070605",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yagacalls.com"),
  title: {
    default: "Yaga Calls | Professional Crypto Signals & Market Analysis",
    template: "%s | Yaga Calls",
  },
  description: "Yaga Calls — also searched as Yagacall or Yaga Call — provides systematic crypto signals and narrative-driven market analysis for serious traders.",
  keywords: ["Yaga Calls", "Yagacall", "Yaga Call", "Yaga Crypto", "crypto signals", "crypto trading group", "crypto trading Telegram group", "market analysis"],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yagacalls.com",
    siteName: "Yaga Calls",
    images: [{ url: "/yaga_calls_logo.png", width: 1200, height: 630, alt: "Yaga Calls" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Yagacalls",
    creator: "@Yagacalls",
    title: "Yaga Calls | Professional Crypto Signals",
    description: "Systematic crypto signals and deep market analysis.",
    images: ["/yaga_calls_logo.png"],
  },
  icons: {
    icon: [
      { url: "/yaga_calls_favicon.webp" },
      { url: "/yaga_calls_favicon.webp", sizes: "32x32", type: "image/webp" }
    ],
    apple: "/yaga_calls_favicon.webp",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "https://www.yagacalls.com/feed.xml", title: "Yaga Calls RSS Feed" }
      ]
    }
  },
  verification: {
    yandex: "6b3ffe14a8810583",
  },
  other: {
    "og:logo": "https://www.yagacalls.com/yaga_calls_logo.png",
  },
};

import JsonLd from "@/components/seo/JsonLd";
import { createOrganizationSchema, createWebsiteSchema } from "@/lib/schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebsiteSchema();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta property="og:logo" content="https://www.yagacalls.com/yaga_calls_logo.png" />
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-[#070605] text-[#FFFFFF] relative`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {/* GLOBAL ATMOSPHERIC LIGHTING SHELL (100% route coverage) */}
        <GlobalAtmosphericShell />

        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#E2C896] focus:text-[#09090B] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <Header />
        <LazyMotion features={domMax}>
          <main id="main-content" className="flex-grow pt-[80px] relative z-10">
            {children}
          </main>
        </LazyMotion>
        <Footer />
      </body>
    </html>
  );
}
