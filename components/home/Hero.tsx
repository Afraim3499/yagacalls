"use client";

import { m } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

export default function Hero() {
  return (
    <Section className="pt-8 md:pt-16 overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Professional Crypto Signals Built Around <span className="text-primary">Risk, Timing & Market Narratives</span>
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-text-muted max-w-xl leading-relaxed">
              Yaga Calls gives serious crypto traders structured setup ideas, market narrative analysis, and risk-aware signal notes through Telegram — with clear entries, targets, invalidation levels, and context behind every major call.
            </p>
            <div className="border-l-4 border-primary pl-4 py-1">
              <p className="text-sm font-bold text-primary uppercase tracking-widest">
                Not a pump group. Not random buy alerts. Not guaranteed-profit noise.
              </p>
              <p className="text-xs text-text-muted/80 uppercase tracking-widest font-medium mt-1">
                Yaga Calls is built for traders who want structure before action.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton 
              href="https://t.me/+JFf8kBf01mg3OTg1" 
              target="_blank"
              trackingLabel="hero_join_free"
            >
              Join Free Telegram
            </CTAButton>
            <CTAButton href="/pricing" variant="secondary" className="px-10" trackingLabel="hero_view_pricing">
              Compare Premium Plans
            </CTAButton>
          </div>

          <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
            Educational market analysis only. Crypto trading involves risk. No signal provider can guarantee profit.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-line shadow-2xl"
        >
          <Image
            src="/yaga_calls_hero.webp"
            alt="Yaga Calls Premium Crypto Dashboard"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </m.div>
      </Container>
    </Section>
  );
}
