'use client';

import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Classes from '@/components/home/Classes';
import Roadmap from '@/components/home/Roadmap';
import HowItWorks from '@/components/home/HowItWorks';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Classes />
        <HowItWorks />
        <Roadmap />
        <CTA />
      </main>
    </>
  );
}
