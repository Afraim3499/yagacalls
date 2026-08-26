"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/shared/Container";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Ticker from "./Ticker";
import { BRAND_CONFIG } from "@/lib/constants/brand";
import { trackTelegramClick } from "@/lib/trackTelegramClick";

const navLinks = [
  { label: "Results", href: "/crypto-signal-results" },
  { label: "Reviews", href: "/yaga-calls-review" },
  { label: "Pricing", href: "/pricing" },
  { label: "Method", href: "/method" },
  { label: "Proof", href: "/proof" },
  { label: "Academy", href: "/academy" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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

  // Lock body scroll when mobile menu is open to prevent page bleeding behind
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/90 backdrop-blur-md border-b border-line" : "bg-background/80"
    )}>
      <Ticker />
      <Container className={cn(
        "flex items-center justify-between transition-all duration-300 relative z-50",
        scrolled ? "py-3" : "py-4"
      )}>
        <Link href="/" className="relative w-32 h-10 transition-transform hover:scale-105" onClick={() => setIsOpen(false)}>
          <Image
            src="/yaga_calls_logo.webp"
            alt="Yaga Calls"
            fill
            sizes="128px"
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link href="/crypto-signal-results" className="text-xs font-black uppercase tracking-widest text-primary hover:brightness-110 transition-all bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20">Results</Link>
          <Link href="/yaga-calls-review" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Reviews</Link>
          <Link href="/pricing" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Pricing</Link>
          <Link href="/method" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Method</Link>
          <Link href="/proof" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Proof</Link>
          <Link href="/academy" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Academy</Link>
          <Link href="/blog" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Contact</Link>
          <Link
            href={BRAND_CONFIG.officialTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="grad-button text-background px-4 lg:px-5 py-2 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(227,158,46,0.3)] hover:shadow-[0_0_25px_rgba(227,158,46,0.5)] transition-all whitespace-nowrap"
            onClick={() => trackTelegramClick("Header: Join Public Group", pathname)}
          >
            Join Public Group
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-text p-2 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
        >
          {isOpen ? <X size={28} className="text-primary" /> : <Menu size={28} />}
        </button>
      </Container>

      {/* 100% OPAQUE FULL-SCREEN MOBILE MENU OVERLAY */}
      {isOpen && (
        <div id="mobile-nav-menu" className="fixed inset-0 z-40 bg-[#080a0f] w-screen h-screen flex flex-col p-6 pt-28 gap-6 md:hidden overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 border-t border-line/50 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-black uppercase tracking-tight py-2 border-b border-line/30 transition-colors flex items-center justify-between",
                  pathname === link.href ? "text-primary" : "text-text hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                {pathname === link.href && <span className="text-xs bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-mono">Active</span>}
              </Link>
            ))}
          </div>

          <div className="pt-4 mt-auto">
            <Link
              href={BRAND_CONFIG.officialTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="grad-button text-background w-full py-4 rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-xl block"
              onClick={() => {
                trackTelegramClick("Header (mobile): Join Public Telegram Group", pathname);
                setIsOpen(false);
              }}
            >
              💬 Join Public Telegram Group
            </Link>
            <p className="text-[10px] text-text-muted text-center font-mono mt-3 uppercase tracking-widest">
              Official Yaga Calls Channel • Verified Access
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
