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
              Professional crypto signals and market analysis. Educational content only. Join 3,500+ investors who trust our systematic approach.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary">Platform</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/method" className="hover:text-primary transition-colors">Our Method</Link></li>
              <li><Link href="/proof" className="hover:text-primary transition-colors">Selected Examples</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
              <li><Link href="/academy" className="hover:text-primary transition-colors">Trading Academy</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Latest Analysis</Link></li>
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
              <li><Link href="/best-crypto-signals-group" className="hover:text-primary transition-colors">Best Signal Group</Link></li>
              <li><Link href="/premium-crypto-signals-telegram" className="hover:text-primary transition-colors">Premium Telegram</Link></li>
              <li><Link href="/crypto-signals-with-proof" className="hover:text-primary transition-colors">Verified Proof</Link></li>
              <li><Link href="/free-vs-paid-crypto-signals" className="hover:text-primary transition-colors">Free vs Paid</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-primary">Legal</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/risk-disclosure" className="hover:text-primary transition-colors">Risk Disclosure</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="https://t.me/+Q6lroKWufsU3M2E1" target="_blank" className="hover:text-primary transition-colors">Contact Support</Link></li>
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
