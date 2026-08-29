import Link from "next/link";
import Image from "next/image";
import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="bg-[#070605] border-t border-[rgba(243,208,129,0.08)] py-12 md:py-20 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="space-y-4">
            
            {/* BRAND LOGO: ICON + YAGACALLS NAME */}
            <Link href="/" className="inline-flex items-center gap-2.5 text-white font-bold hover:opacity-90 transition-all cursor-pointer group">
              <Image
                src="/yagacalls-icon.jpg"
                alt="YAGACALLS Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-cover border border-[#A38B5D]/40 group-hover:border-[#E2C896] transition-all shadow-[0_0_15px_rgba(226,200,150,0.20)] shrink-0"
              />
              <span className="whitespace-nowrap font-black tracking-wider text-lg text-white group-hover:text-[#E2C896] transition-colors">
                YAGACALLS
              </span>
            </Link>

            <p className="text-[#A1A1AA] text-xs max-w-xs leading-relaxed font-normal">
              Yaga Calls — providing Telegram-first crypto signals and institutional market research. Educational content only.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://t.me/yagacalls" target="_blank" rel="noopener noreferrer" aria-label="Yaga Calls on Telegram" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-[#E2C896] hover:border-[#E2C896] hover:text-black transition-all duration-300" title="Telegram Channel">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.94-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a href="https://x.com/Yagacalls" target="_blank" rel="noopener noreferrer" aria-label="Yaga Calls on X (Twitter)" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-[#E2C896] hover:border-[#E2C896] hover:text-black transition-all duration-300" title="Twitter / X">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.binance.com/en/square/profile/square-creator-c8c5892a6ad3" target="_blank" rel="noopener noreferrer" aria-label="Yaga Calls on Binance Square" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-[#E2C896] hover:border-[#E2C896] hover:text-black transition-all duration-300" title="Binance Square">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0L4.5 7.5L6.6 9.6L12 4.2L17.4 9.6L19.5 7.5L12 0ZM12 24L19.5 16.5L17.4 14.4L12 19.8L6.6 14.4L4.5 16.5L12 24ZM12 9.2L9.2 12L12 14.8L14.8 12L12 9.2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/yagacalls" target="_blank" rel="noopener noreferrer" aria-label="Yaga Calls on LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-[#E2C896] hover:border-[#E2C896] hover:text-black transition-all duration-300" title="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#E2C896]">Platform</h4>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li><Link href="/crypto-signal-results" className="hover:text-[#E2C896] transition-colors font-black text-[#E2C896]">Live Signal Results</Link></li>
              <li><Link href="/yaga-calls-review" className="hover:text-[#E2C896] transition-colors font-bold text-[#E2C896]">Yaga Calls Review</Link></li>
              <li><Link href="/method" className="hover:text-[#E2C896] transition-colors">Our Method</Link></li>
              <li><Link href="/proof" className="hover:text-[#E2C896] transition-colors">Selected Examples</Link></li>
              <li><Link href="/pricing" className="hover:text-[#E2C896] transition-colors">Pricing Plans</Link></li>
              <li><Link href="/careers" className="hover:text-[#E2C896] transition-colors font-black text-[#E2C896]">Careers &amp; Partner Jobs</Link></li>
              <li><Link href="/about-yaga-calls" className="hover:text-[#E2C896] transition-colors font-bold text-[#E2C896]">About Yaga Calls</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#E2C896]">Partners &amp; Regions</h4>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li><Link href="/affiliate" className="hover:text-[#E2C896] transition-colors font-black text-[#E2C896]">Partner Program (15%+)</Link></li>
              <li><Link href="/binance-affiliate-vs-yaga-calls" className="hover:text-[#E2C896] transition-colors text-[11px] pl-2 text-[#71717A]">• Binance vs Yaga Calls</Link></li>
              <li><Link href="/crypto-affiliate-programs-compared" className="hover:text-[#E2C896] transition-colors text-[11px] pl-2 text-[#71717A]">• Affiliates Compared</Link></li>
              <li className="pt-2"><Link href="/academy" className="hover:text-[#E2C896] transition-colors">Trading Academy</Link></li>
              <li><Link href="/blog" className="hover:text-[#E2C896] transition-colors font-bold text-[#E2C896]">Blog &amp; Market Analysis</Link></li>
              <li><Link href="/authors" className="hover:text-[#E2C896] transition-colors">Our Analysts &amp; Writers</Link></li>
              <li><Link href="/news" className="hover:text-[#E2C896] transition-colors">News</Link></li>
              <li><Link href="/analysis" className="hover:text-[#E2C896] transition-colors">Analysis</Link></li>
              <li><Link href="/contact" className="hover:text-[#E2C896] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#E2C896]">Top Guides</h4>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li><Link href="/best-crypto-signals-group" className="hover:text-[#E2C896] transition-colors font-bold text-white">Best Crypto Signals Group</Link></li>
              <li><Link href="/premium-crypto-signals-telegram" className="hover:text-[#E2C896] transition-colors font-bold text-white">Premium Signals Telegram</Link></li>
              <li><Link href="/crypto-signals-with-proof" className="hover:text-[#E2C896] transition-colors font-bold text-white">Signals With Proof</Link></li>
              <li><Link href="/what-are-crypto-signals" className="hover:text-[#E2C896] transition-colors">What Are Crypto Signals?</Link></li>
              <li><Link href="/how-to-choose-a-crypto-signal-provider" className="hover:text-[#E2C896] transition-colors">How to Choose a Provider</Link></li>
              <li><Link href="/crypto-risk-management" className="hover:text-[#E2C896] transition-colors">Crypto Risk Management</Link></li>
              <li><Link href="/how-to-set-stop-losses-in-crypto" className="hover:text-[#E2C896] transition-colors">How to Set Stop-Losses</Link></li>
              <li><Link href="/free-vs-paid-crypto-signals" className="hover:text-[#E2C896] transition-colors">Free vs Paid Signals</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#E2C896]">Calculators &amp; Legal</h4>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li><Link href="/position-sizing-calculator" className="hover:text-[#E2C896] transition-colors font-bold text-[#E2C896]">Risk Calculator</Link></li>
              <li><Link href="/leverage-trading-calculator" className="hover:text-[#E2C896] transition-colors font-bold text-[#E2C896] underline">Leverage Calculator</Link></li>
              <li><Link href="/liquidation-price-calculator" className="hover:text-[#E2C896] transition-colors font-bold text-[#E2C896]">Liquidation Calculator</Link></li>
              <li className="pt-2 font-semibold text-xs uppercase tracking-wider text-[#E2C896]">Legal Links</li>
              <li><Link href="/risk-disclosure" className="hover:text-[#E2C896] transition-colors">Risk Disclosure</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[#E2C896] transition-colors">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-[#E2C896] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#E2C896] transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:partner@yagacalls.com" className="hover:text-[#E2C896] transition-colors font-bold text-[#E2C896]">partner@yagacalls.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(243,208,129,0.08)] mt-12 pt-8 text-center text-xs text-[#71717A]">
          <p>© {new Date().getFullYear()} Yaga Calls • Professional Crypto Signals • Educational content only</p>
          <p className="mt-4 max-w-2xl mx-auto">
            Trading cryptocurrencies involves significant risk. Past performance is not indicative of future results. All content is for educational purposes only and does not constitute financial advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
