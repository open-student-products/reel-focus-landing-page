"use client";

import Image from "next/image";
import { playfair } from "./fonts";

export function ProductHighlight() {
  return (
    <section
      id="product-highlight"
      className="landing-scroll-animation relative overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-cyan-50/60 px-6 pb-8 pt-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:pb-12 md:pt-16"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300/90">
            Inside the app
          </p>
          <h2
            className={`text-3xl font-medium text-neutral-900 dark:text-neutral-100 md:text-4xl ${playfair.className} text-balance`}
          >
            Your next step, always in view
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
            ReelFocus keeps the work small and the environment calm—so starting
            feels possible again.
          </p>
        </div>
        <div className="mx-auto flex max-w-lg justify-center md:max-w-xl">
          <div className="landing-device-frame w-full max-w-[320px] md:max-w-[340px]">
            <div className="landing-device-inner">
              <Image
                src="/images/step-untangle.png"
                alt="Break a task into clear next steps in ReelFocus"
                width={390}
                height={832}
                className="aspect-[9/19] w-full object-cover"
              />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-teal-900/60 dark:text-teal-300/70">
          Untangle big assignments into one obvious next action, then cast a
          short focus block.
        </p>
      </div>
    </section>
  );
}
