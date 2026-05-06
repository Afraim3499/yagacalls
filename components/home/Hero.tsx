"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function Hero() {
  return (
    <Section className="pt-8 md:pt-16 overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Professional Crypto Signals Built Around <span className="text-primary">Risk, Timing & Market Narratives</span>
          </h1>
          <p className="text-lg text-text-muted max-w-xl leading-relaxed">
            Yaga Calls gives traders curated setup ideas, market narrative analysis, and risk-aware signal notes through Telegram — with clear entries, targets, and context.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton 
              href="https://t.me/+Q6lroKWufsU3M2E1" 
              target="_blank"
              trackingLabel="hero_join_free"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" className="px-10" trackingLabel="hero_view_pricing">
              Compare Premium Plans
            </CTAButton>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Manual Onboarding", "Risk-Managed Setups", "Market Narrative Research", "Selected Examples"].map((chip) => (
              <span key={chip} className="px-3 py-1 bg-surface-deep border border-line rounded-full text-[10px] uppercase tracking-wider font-bold text-text-muted">
                {chip}
              </span>
            ))}
          </div>
          
          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
            Manual premium onboarding · Not financial advice · Crypto trading involves risk
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-line shadow-2xl"
        >
          <Image
            src="/yaga_calls_hero.jpg"
            alt="Yaga Calls Crypto Trading Analysis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </motion.div>
      </Container>
    </Section>
  );
}
