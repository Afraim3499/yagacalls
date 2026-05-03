import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";

const metrics = [
  {
    label: "Active Community",
    value: "3,500+",
    description: "Traders following our public and premium market notes"
  },
  {
    label: "Market Analysis",
    value: "Narrative Driven",
    description: "Deep-dives into catalysts, whales, and trend sectors"
  },
  {
    label: "Signal Delivery",
    value: "Real-Time",
    description: "Manual alerts with context shared directly on Telegram"
  }
];

export default function TrustMetrics() {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why 3,500+ Investors Trust Our Signals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <GlowCard key={metric.label} className="text-center space-y-3">
              <div className="text-3xl font-black text-primary uppercase tracking-tighter">
                {metric.value}
              </div>
              <h3 className="text-lg font-bold">{metric.label}</h3>
              <p className="text-sm text-text-muted">
                {metric.description}
              </p>
            </GlowCard>
          ))}
        </div>
        <p className="text-[10px] text-text-muted mt-6 text-center uppercase tracking-widest opacity-50">
          Manual onboarding · Not financial advice · Crypto trading involves risk
        </p>
      </Container>
    </Section>
  );
}
