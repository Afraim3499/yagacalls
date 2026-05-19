import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CTA } from '@/types/content';

interface LandingHeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: CTA;
  ctaSecondary: CTA;
  heroImage?: string;
  imageAlt?: string;
}

const LandingHero: React.FC<LandingHeroProps> = ({ title, subtitle, ctaPrimary, ctaSecondary, heroImage, imageAlt }) => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className={heroImage ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" : "max-w-4xl"}>
          <div className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-medium leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={ctaPrimary.href}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-widest text-sm transition-all text-center rounded-xl"
              >
                {ctaPrimary.label}
              </Link>
              <Link 
                href={ctaSecondary.href}
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-amber-500/50 text-white font-bold uppercase tracking-widest text-sm transition-all text-center rounded-xl"
              >
                {ctaSecondary.label}
              </Link>
            </div>
          </div>
  
          {heroImage && (
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src={heroImage} 
                alt={imageAlt || title} 
                fill 
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default LandingHero;
