import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LazyMotion, domMax } from "framer-motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yagacalls.com",
    siteName: "Yaga Calls",
    images: [{ url: "/yaga_calls_logo.png", width: 1200, height: 630, alt: "Yaga Calls" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaga Calls | Professional Crypto Signals",
    description: "Systematic crypto signals and deep market analysis.",
    images: ["/yaga_calls_logo.png"],
  },
  icons: {
    icon: "/yaga_calls_favicon.webp",
    apple: "/yaga_calls_favicon.webp",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    yandex: "6b3ffe14a8810583",
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
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <LazyMotion features={domMax}>
          <main className="flex-grow pt-[80px]">
            {children}
          </main>
        </LazyMotion>
        <Footer />
      </body>
    </html>
  );
}
