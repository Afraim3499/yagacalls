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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-full overflow-x-clip",
      scrolled ? "bg-[#070605]/95 backdrop-blur-md border-b border-[rgba(243,208,129,0.08)]" : "bg-[#070605]/90"
    )}>
      <Ticker />
      <Container className={cn(
        "flex items-center justify-between transition-all duration-300 relative z-50 max-w-full",
        scrolled ? "py-1.5 sm:py-2" : "py-2 sm:py-2.5"
      )}>
        {/* HEADER LOGO: COMPACT & ELEGANT YAGACALLS TYPOGRAPHY */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-90 transition-all cursor-pointer group shrink-0" 
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/yagacalls-icon.jpg"
            alt="YAGACALLS Logo"
            width={28}
            height={28}
            className="w-7 h-7 rounded-lg object-cover border border-[#A38B5D]/40 group-hover:border-[#E2C896] transition-all shadow-[0_0_12px_rgba(226,200,150,0.20)] shrink-0"
            priority
          />
          <span className="whitespace-nowrap font-bold tracking-wider text-sm sm:text-base text-white group-hover:text-[#E2C896] transition-colors">
            YAGACALLS
          </span>
        </Link>

        {/* Desktop Nav - Consistent Plain Text Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 font-sans">
          <Link href="/crypto-signal-results" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Results</Link>
          <Link href="/yaga-calls-review" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Reviews</Link>
          <Link href="/pricing" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Pricing</Link>
          <Link href="/method" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Method</Link>
          <Link href="/proof" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Proof</Link>
          <Link href="/academy" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Academy</Link>
          <Link href="/blog" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Blog</Link>
          <Link href="/contact" className="text-[11.5px] font-medium uppercase tracking-wider text-[#A1A1AA] hover:text-[#E2C896] transition-colors">Contact</Link>
          
          {/* Subtle Ghost Border Button */}
          <Link
            href={BRAND_CONFIG.officialTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#A38B5D]/40 text-[#E2C896] hover:bg-[rgba(226,200,150,0.08)] hover:border-[#E2C896] px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap"
            onClick={() => trackTelegramClick("Header: Join Public Group", pathname)}
          >
            Join Public Group
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white p-1.5 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
        >
          {isOpen ? <X size={24} className="text-[#E2C896]" /> : <Menu size={24} />}
        </button>
      </Container>

      {/* 100% OPAQUE FULL-SCREEN MOBILE MENU OVERLAY */}
      {isOpen && (
        <div id="mobile-nav-menu" className="fixed inset-0 z-40 bg-[#070605] w-screen h-screen flex flex-col p-6 pt-24 gap-5 md:hidden overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 border-t border-[rgba(243,208,129,0.08)] pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-semibold uppercase tracking-tight py-2 border-b border-[rgba(243,208,129,0.06)] transition-colors flex items-center justify-between",
                  pathname === link.href ? "text-[#E2C896]" : "text-white hover:text-[#E2C896]"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                {pathname === link.href && <span className="text-xs bg-[rgba(226,200,150,0.12)] text-[#E2C896] px-2.5 py-0.5 rounded-full font-mono font-medium">Active</span>}
              </Link>
            ))}
          </div>

          <div className="pt-3 mt-auto">
            <Link
              href={BRAND_CONFIG.officialTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#09090B] w-full py-3 rounded-full text-center font-bold uppercase tracking-wider text-xs bg-[linear-gradient(135deg,#E2C896_0%,#CBB079_50%,#A38B5D_100%)] shadow-xl block border-none"
              onClick={() => {
                trackTelegramClick("Header (mobile): Join Public Telegram Group", pathname);
                setIsOpen(false);
              }}
            >
              💬 Join Public Telegram Group
            </Link>
            <p className="text-[10px] text-[#71717A] text-center font-mono mt-2.5 uppercase tracking-widest">
              Official Yaga Calls Channel • Verified Access
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
