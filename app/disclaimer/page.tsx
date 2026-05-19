import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export const metadata = {
  title: "Disclaimer & Risk Disclosure | Yaga Calls",
  description: "Important educational-only disclaimer and risk disclosure regarding crypto signals and market analysis from Yaga Calls.",
  alternates: {
    canonical: "https://www.yagacalls.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-black mb-10 uppercase tracking-tighter">Disclaimer</h1>
        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-text-muted">
          <p className="text-text-high font-bold p-6 bg-surface rounded-xl border border-line">
            Yaga Calls provides educational content only. Nothing on this website, our Telegram groups, or any communication from our team constitutes financial, investment, or trading advice.
          </p>
          <p>
            The information provided is for general educational purposes only. Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor. The valuation of cryptocurrencies may fluctuate, and as a result, clients may lose more than their original investment.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">No Guarantees</h2>
          <p>
            Past performance is not indicative of future results. Any testimonials or results shown are not representative of all members and do not guarantee future success. You are solely responsible for your own trading decisions and capital.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">Risk Disclosure</h2>
          <p>
            Trading involves the risk of losing your entire capital. Never trade with money you cannot afford to lose. We strongly recommend consulting with a certified financial advisor before making any investment decisions.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">Third-Party Content</h2>
          <p>
            Our website and signals may contain links to third-party websites or services. We do not endorse or assume responsibility for any third-party content or actions.
          </p>
          <p className="pt-8 text-xs italic">
            Last Updated: May 2026
          </p>
        </div>
      </Container>
    </Section>
  );
}
