import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Explore Yaga Calls' crypto signal research, methodology, and regional coverage instead.",
  robots: {
    index: false,
    follow: true,
  },
};

const popularLinks = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Our Method" },
  { href: "/proof", label: "Selected Examples" },
  { href: "/pricing", label: "Pricing Plans" },
  { href: "/regions", label: "All Regions" },
  { href: "/blog", label: "Blog & Market Analysis" },
  { href: "/academy", label: "Trading Academy" },
  { href: "/what-are-crypto-signals", label: "What Are Crypto Signals?" },
];

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">404</p>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-text-high">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-xl text-text-muted">
          The link you followed may be broken, or the page may have moved. Here&apos;s where you
          can pick back up:
        </p>

        <div className="mt-8">
          <CTAButton href="/">Back to Home</CTAButton>
        </div>

        <div className="mt-12 w-full max-w-2xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Popular Pages
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {popularLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-xl border border-line bg-surface-deep text-text-muted hover:text-primary hover:border-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
