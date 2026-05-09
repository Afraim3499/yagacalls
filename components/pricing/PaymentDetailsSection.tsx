import Container from "../shared/Container";
import Section from "../shared/Section";

export default function PaymentDetailsSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tighter">Payment and Access</h3>
            <ul className="space-y-3 text-sm text-text-muted font-bold list-disc pl-4">
              <li>Current prices are discounted onboarding prices.</li>
              <li>Pricing may change in the future.</li>
              <li>Payment instructions provided manually.</li>
              <li>Major Crypto payments are accepted.</li>
              <li>Access provided after confirmation.</li>
              <li>No automated recurring billing.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tighter text-danger">Refund Policy</h3>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <p>
                Because premium access includes digital information, private signal notes, and Telegram-based analysis, refunds are not offered after access is provided.
              </p>
              <p className="font-bold text-text">
                Start free if unsure. Use the discounted premium price only when you are confident the Yaga Calls structure fits your trading style.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tighter">Important Risk Notice</h3>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <p>
                Yaga Calls provides educational market analysis and signal ideas. It does not provide financial advice or guaranteed profit.
              </p>
              <p>
                Crypto trading involves significant risk. Discounted pricing does not reduce trading risk. Every trader remains responsible for their own decisions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
