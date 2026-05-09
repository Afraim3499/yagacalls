"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/shared/Container";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Ticker from "./Ticker";

const navLinks = [
  { label: "Method", href: "/method" },
  { label: "Proof", href: "/proof" },
  { label: "Pricing", href: "/pricing" },
  { label: "Analysis", href: "/analysis" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-line" : "bg-transparent"
    )}>
      <Ticker />
      <Container className={cn(
        "flex items-center justify-between transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}>
        <Link href="/" className="relative w-32 h-10 transition-transform hover:scale-105">
          <Image
            src="/yaga_calls_logo.png"
            alt="Yaga Calls"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/method" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Method</Link>
          <Link href="/proof" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Proof</Link>
          <Link href="/pricing" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Pricing</Link>
          <Link href="/academy" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Academy</Link>
          <Link href="/blog" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Contact</Link>
          <Link
            href="https://t.me/+JFf8kBf01mg3OTg1"
            target="_blank"
            className="grad-button text-background px-5 py-2 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(227,158,46,0.3)] hover:shadow-[0_0_25px_rgba(227,158,46,0.5)] transition-all"
          >
            Join Public Group
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-high p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[70px] bg-background/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 flex flex-col p-6 gap-6",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-xl font-bold transition-colors",
              pathname === link.href ? "text-primary" : "text-text-high"
            )}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://t.me/+JFf8kBf01mg3OTg1"
          target="_blank"
          className="grad-button text-background px-6 py-4 rounded-2xl text-center font-bold"
          onClick={() => setIsOpen(false)}
        >
          Join Public Group
        </Link>
      </div>
    </header>
  );
}
