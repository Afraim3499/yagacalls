import Link from "next/link";
import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="bg-surface-deep border-t border-line py-12 md:py-20 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Yaga Calls</h3>
            <p className="text-text-muted text-sm max-w-xs">
              Yaga Calls — sometimes searched as Yagacall, Yaga Call, or Yaga crypto signals — provides Telegram-first crypto signals and market analysis. Educational content only.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://t.me/yagacalls" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300" title="Telegram Channel">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.94-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a href="https://x.com/Yagacalls" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300" title="Twitter / X">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.binance.com/en/square/profile/square-creator-c8c5892a6ad3" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300" title="Binance Square">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0L4.5 7.5L6.6 9.6L12 4.2L17.4 9.6L19.5 7.5L12 0ZM12 24L19.5 16.5L17.4 14.4L12 19.8L6.6 14.4L4.5 16.5L12 24ZM12 9.2L9.2 12L12 14.8L14.8 12L12 9.2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/yagacalls" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300" title="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary">Platform</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/method" className="hover:text-primary transition-colors">Our Method</Link></li>
              <li><Link href="/proof" className="hover:text-primary transition-colors">Selected Examples</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
              <li><Link href="/academy" className="hover:text-primary transition-colors">Trading Academy</Link></li>
              <li><Link href="/position-sizing-calculator" className="hover:text-primary transition-colors font-bold text-primary">Risk Calculator</Link></li>
              <li><Link href="/leverage-trading-calculator" className="hover:text-primary transition-colors font-bold text-primary underline">Leverage Calculator</Link></li>
              <li><Link href="/liquidation-price-calculator" className="hover:text-primary transition-colors font-bold text-primary">Liquidation Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Latest Analysis</Link></li>
              <li><Link href="/about-yaga-calls" className="hover:text-primary transition-colors font-bold text-primary">About Yaga Calls</Link></li>
              <li><Link href="/yaga-calls-review" className="hover:text-primary transition-colors font-bold text-primary">Yaga Calls Review</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary">Global Reach</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/regions/dubai" className="hover:text-primary transition-colors">Dubai / UAE</Link></li>
              <li><Link href="/regions/uk" className="hover:text-primary transition-colors">United Kingdom</Link></li>
              <li><Link href="/regions/usa" className="hover:text-primary transition-colors">United States</Link></li>
              <li><Link href="/regions/singapore" className="hover:text-primary transition-colors">Singapore</Link></li>
              <li><Link href="/regions" className="hover:text-primary transition-colors font-medium">All Regions →</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary">Top Guides</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/what-are-crypto-signals" className="hover:text-primary transition-colors font-bold text-text-high">What Are Crypto Signals?</Link></li>
              <li><Link href="/best-crypto-signal-groups-compared" className="hover:text-primary transition-colors font-bold text-text-high">Best Signal Groups Compared</Link></li>
              <li><Link href="/how-to-choose-a-crypto-signal-provider" className="hover:text-primary transition-colors font-bold text-text-high">How to Choose a Provider</Link></li>
              <li><Link href="/crypto-risk-management" className="hover:text-primary transition-colors font-bold text-text-high">Crypto Risk Management</Link></li>
              <li><Link href="/how-to-set-stop-losses-in-crypto" className="hover:text-primary transition-colors font-bold text-text-high">How to Set Stop-Losses</Link></li>
              <li><Link href="/position-sizing-calculator" className="hover:text-primary transition-colors font-bold text-text-high">Position Sizing Calculator</Link></li>
              <li><Link href="/leverage-trading-calculator" className="hover:text-primary transition-colors font-bold text-text-high">Leverage Trading Calculator</Link></li>
              <li><Link href="/liquidation-price-calculator" className="hover:text-primary transition-colors font-bold text-text-high">Liquidation Price Calculator</Link></li>
              <li><Link href="/telegram-crypto-signals" className="hover:text-primary transition-colors font-bold text-text-high">Telegram Crypto Signals</Link></li>
              <li><Link href="/crypto-trading-group" className="hover:text-primary transition-colors font-bold text-text-high">Crypto Trading Group</Link></li>
              <li><Link href="/crypto-trading-telegram-group" className="hover:text-primary transition-colors font-bold text-text-high">Telegram Trading Group</Link></li>
              <li><Link href="/best-crypto-signal-provider" className="hover:text-primary transition-colors">Best Signal Provider</Link></li>
              <li><Link href="/premium-telegram-crypto-signals" className="hover:text-primary transition-colors">Premium Telegram</Link></li>
              <li><Link href="/proof" className="hover:text-primary transition-colors">Verified Proof</Link></li>
              <li><Link href="/free-vs-paid-crypto-signals" className="hover:text-primary transition-colors font-bold text-text-high">Free vs Paid Signals</Link></li>
              <li><Link href="/verified-crypto-signal-provider" className="hover:text-primary transition-colors">Verified Provider</Link></li>
              <li><Link href="/crypto-signals-with-risk-management" className="hover:text-primary transition-colors">Risk Management</Link></li>
              <li><Link href="/narrative-trading-crypto-signals" className="hover:text-primary transition-colors">Narrative Trading</Link></li>
              <li><Link href="/crypto-signal-provider-comparison" className="hover:text-primary transition-colors">Provider Comparison</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary">Legal</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/risk-disclosure" className="hover:text-primary transition-colors">Risk Disclosure</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="https://t.me/yagacalls47" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line mt-12 pt-8 text-center text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Yaga Calls • Professional Crypto Signals • Educational content only</p>
          <p className="mt-4 max-w-2xl mx-auto">
            Trading cryptocurrencies involves significant risk. Past performance is not indicative of future results. All content is for educational purposes only and does not constitute financial advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
