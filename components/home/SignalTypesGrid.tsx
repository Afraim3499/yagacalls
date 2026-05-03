"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";

const signalTypes = [
  { symbol: "SHORT", period: "Days-Weeks", title: "Short-Term Setups", desc: "Volatility-focused setups identifying breakouts with precise technical entry/exit zones." },
  { symbol: "TREND", period: "Entry/Exit", title: "Trend Following", desc: "Complete setups with defined structural levels for assets showing strong narrative momentum." },
  { symbol: "INV", period: "6-12 Months", title: "Investment Ideas", desc: "Strategic long-term positions based on fundamental research and ecosystem growth catalysts." },
  { symbol: "GEM", period: "High Impact", title: "Asset Discoveries", desc: "Early-stage projects identified through deep on-chain research and fundamental analysis." },
  { symbol: "SAFE", period: "Growth", title: "Conservative Analysis", desc: "Lower-volatility plays in established assets with stable trend characteristics." },
  { symbol: "RISK", period: "1-2%", title: "Risk Frameworks", desc: "Strict position sizing and invalidation guidance to protect capital and ensure longevity." },
  { symbol: "MOM", period: "Momentum", title: "Momentum Plays", desc: "High-velocity patterns optimized for trending regimes and narrative expansion." },
  { symbol: "REV", period: "Reversal", title: "Reversal Analysis", desc: "Identifying oversold opportunities and inflection points during market corrections." },
];

export default function SignalTypesGrid() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight">Everything You Need to Know</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signalTypes.map((type, i) => (
            <motion.div
              key={type.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowCard className="h-full flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-line flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
                  <span className="text-primary font-black text-xs">{type.symbol}</span>
                </div>
                <div className="text-xs font-bold text-text-muted mb-1 uppercase tracking-widest">{type.period}</div>
                <h3 className="text-lg font-bold mb-3">{type.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {type.desc}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
