"use client";

import { m } from "framer-motion";
import Container from "../shared/Container";
import Section from "../shared/Section";
import GlowCard from "../shared/GlowCard";

export default function WhatYouGet() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight uppercase tracking-tighter">What You Get Inside Yaga Calls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "1. Market Narrative Research", 
              desc: "Yaga Calls tracks the stories, catalysts, sector rotations, whale behavior, liquidity shifts, and market attention cycles that can move crypto assets before the crowd fully reacts." 
            },
            { 
              title: "2. Structured Signal Notes", 
              desc: "A serious setup needs more than a ticker. Yaga Calls focuses on entry zones, target levels, invalidation logic, and risk context so traders understand the idea behind the call." 
            },
            { 
              title: "3. Telegram-First Delivery", 
              desc: "Crypto moves quickly. Yaga Calls delivers market notes and signal updates through Telegram so members can follow market movement in a fast, mobile-first environment." 
            },
            { 
              title: "4. Risk-Aware Planning", 
              desc: (
                <>
                  Every setup needs a plan for being wrong. Yaga Calls emphasizes <a href="/crypto-signals-with-risk-management" className="text-primary hover:underline font-bold">risk-managed crypto signals</a>, position sizing awareness, stop-loss thinking, and capital preservation.
                </>
              )
            },
            { 
              title: "5. Free Community Access", 
              desc: "The free Telegram group gives selected market notes, educational ideas, and public updates so visitors can understand the Yaga Calls style before considering premium access." 
            },
            { 
              title: "6. Premium Access for Serious Members", 
              desc: "Premium access gives deeper setup notes, private Telegram delivery, priority market watchlists, and manual onboarding (@yagacalls47) for members who want more complete signal context." 
            },
          ].map((type, i) => (
            <m.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowCard className="h-full p-8 group cursor-default">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{type.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {type.desc}
                </p>
              </GlowCard>
            </m.div>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto text-center border-t border-line pt-12">
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl mx-auto">
            Some traders may describe Yaga Calls as a <a href="/crypto-trading-group" className="text-primary hover:underline font-bold">crypto trading group</a> or <a href="/crypto-trading-telegram-group" className="text-primary hover:underline font-bold">crypto trading Telegram group</a>, but the standard is more specific: Yaga Calls focuses on structured crypto signal notes, market narrative research, entry zones, target planning, invalidation, and risk-aware Telegram delivery.
          </p>
        </div>
      </Container>
    </Section>
  );
}
