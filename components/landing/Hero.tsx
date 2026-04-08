"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { OceanRipples } from "@/components/ocean-ripples";
import { playfair } from "./fonts";
import { scrollToSection } from "./use-scroll-reveal";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <OceanRipples />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-cyan-950/5 to-white/75 dark:to-slate-950/88" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_15%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(ellipse_70%_55%_at_90%_30%,rgba(129,140,248,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-teal-300/5 to-indigo-400/10" />

      <header className="relative z-10 flex items-center justify-between gap-4 border-b border-white/25 bg-white/10 px-4 py-4 backdrop-blur-sm dark:border-white/15 dark:bg-slate-950/25 sm:px-6">
        <Link
          href="/"
          className={`text-2xl font-medium text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:text-3xl ${playfair.className}`}
        >
          ReelFocus
        </Link>
        <ThemeToggle variant="hero" />
      </header>

      <section className="relative px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="landing-hero-glow" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_minmax(0,380px)] lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start">
              <Image
                src="/images/logo.png"
                alt="ReelFocus"
                width={144}
                height={144}
                className="h-28 w-28 rounded-2xl object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.25)] md:h-36 md:w-36"
                priority
              />
            </div>
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] landing-fade-in ${playfair.className}`}
            >
              Beta · Anti-procrastination
            </p>
            <div
              className={`landing-glimmer-badge landing-fade-in landing-delay-1 mx-auto mb-6 inline-flex items-center rounded-2xl border border-white/60 bg-white/80 px-5 py-2.5 text-sm font-semibold text-sky-950 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm dark:border-cyan-500/35 dark:bg-slate-900/75 dark:text-cyan-100 lg:mx-0 md:px-6 md:py-3 md:text-base`}
            >
              <span className={playfair.className}>
                An Anti-Procrastination App
              </span>
            </div>
            <h1
              className={`landing-fade-in landing-delay-1 mb-4 text-4xl font-medium leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)] md:text-5xl lg:text-[3.25rem] ${playfair.className} text-balance`}
            >
              Catch your momentum,
              <br className="hidden sm:block" /> not just your goals
            </h1>
            <p className="landing-fade-in landing-delay-2 mx-auto mb-2 max-w-xl text-lg text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] lg:mx-0 text-balance">
              A calm four-step flow to start, focus, and feel progress; without
              the guilt spiral.
            </p>
            <p className="landing-fade-in landing-delay-2 mx-auto mb-8 max-w-xl text-base text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] lg:mx-0">
              Join our beta and help shape ReelFocus, early supporters get
              exclusive rewards.
            </p>
            <div className="landing-fade-in landing-delay-3 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-12 rounded-2xl border border-teal-200/70 bg-white px-8 text-sm font-semibold tracking-tight text-teal-900 shadow-[0_10px_40px_-8px_rgba(15,118,110,0.35),0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50/90 hover:shadow-[0_14px_44px_-8px_rgba(15,118,110,0.4)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-700/30"
                onClick={() =>
                  document.getElementById("early-access-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
              >
                Get Early Access
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border border-white/35 bg-slate-950/45 px-8 text-sm font-semibold tracking-tight text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_rgba(15,23,42,0.35)] backdrop-blur-md transition-all duration-200 hover:border-white/50 hover:bg-slate-950/60 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900/50"
                onClick={() => scrollToSection("product-highlight")}
              >
                See Flow
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm justify-center lg:mx-0 lg:max-w-none lg:justify-end">
            <div className="relative w-full max-w-[280px] rotate-[-4deg] md:max-w-[300px]">
              <div className="landing-device-frame">
                <div className="landing-device-inner">
                  <Image
                    src="/images/step-cast.png"
                    alt="Focus timer in ReelFocus"
                    width={390}
                    height={832}
                    className="aspect-[9/19] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute -right-4 top-8 hidden w-[55%] max-w-[200px] rotate-[6deg] md:block lg:-right-8"
              aria-hidden
            >
              <div className="landing-device-frame scale-90 opacity-95">
                <div className="landing-device-inner">
                  <Image
                    src="/images/step-release.png"
                    alt=""
                    width={390}
                    height={832}
                    className="aspect-[9/19] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
