"use client";

import { EarlyAccess } from "@/components/landing/EarlyAccess";
import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { ProductHighlight } from "@/components/landing/ProductHighlight";
import { SocialProof } from "@/components/landing/SocialProof";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";
import { inter } from "@/components/landing/fonts";
import { useScrollReveal } from "@/components/landing/use-scroll-reveal";

export default function Page() {
  useScrollReveal();

  return (
    <div className={`flex min-h-screen flex-col text-foreground ${inter.className}`}>
      <Hero />
      <main className="flex-grow">
        <SocialProof />
        <ProductHighlight />
        <Steps />
        <FeaturesBento />
        <Testimonials />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
