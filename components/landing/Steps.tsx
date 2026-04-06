"use client";

import Image from "next/image";
import { playfair } from "./fonts";

const STEPS = [
  {
    id: "step-1",
    n: 1,
    title: "Release",
    subtitle: "Ease the weight before you start",
    body: "Let go of the emotional weight that makes starting feel impossible. ReelFocus helps you pause, breathe, and unload self-doubt through gentle check-ins and reassuring prompts.",
    image: "/images/step-release.png",
    imageAlt: "How are you feeling now — check-in",
    tint: false,
    imageFirst: false,
  },
  {
    id: "step-2",
    n: 2,
    title: "Untangle",
    subtitle: "Turn overload into one next step",
    body: "Big tasks can feel overwhelming when they’re unclear. ReelFocus breaks assignments into small, manageable next steps so you always know exactly where to begin.",
    image: "/images/step-untangle.png",
    imageAlt: "New Task — break work into steps",
    tint: true,
    imageFirst: true,
  },
  {
    id: "step-3",
    n: 3,
    title: "Cast",
    subtitle: "Commit to a few focused minutes",
    body: "Once you have one simple step, it’s time to focus. With a calm timer and distraction-free space, ReelFocus helps you commit to just a few minutes of progress.",
    image: "/images/step-cast.png",
    imageAlt: "Focus timer — cast and concentrate",
    tint: false,
    imageFirst: false,
  },
  {
    id: "step-4",
    n: 4,
    title: "Reel In",
    subtitle: "Close the loop with recognition",
    body: "Every effort deserves recognition. ReelFocus rewards your progress with reflection, encouragement, and a sense of accomplishment, helping you build confidence, not pressure.",
    image: "/images/step-reel-in.png",
    imageAlt: "Reflect on your catch — celebrate progress",
    tint: true,
    imageFirst: true,
  },
] as const;

/** Steps 02 / 04 — soft wash + accent rail on the left */
const ACCENT_LEFT = {
  mint: [
    "relative py-10 md:py-12",
    "pl-5 md:pl-9",
    "bg-gradient-to-r from-emerald-50/65 via-teal-50/25 to-transparent",
    "dark:from-emerald-950/55 dark:via-emerald-950/20 dark:to-transparent",
    "before:pointer-events-none before:absolute before:left-0 before:top-[14%] before:bottom-[14%] before:w-1 before:rounded-full before:bg-gradient-to-b before:from-emerald-400 before:via-teal-500 before:to-cyan-400 before:content-[''] before:shadow-[0_0_14px_rgba(45,212,191,0.35)]",
  ].join(" "),
  dusk: [
    "relative py-10 md:py-12",
    "pl-5 md:pl-9",
    "bg-gradient-to-r from-violet-50/58 via-amber-50/30 to-transparent",
    "dark:from-violet-950/50 dark:via-violet-950/18 dark:to-transparent",
    "before:pointer-events-none before:absolute before:left-0 before:top-[14%] before:bottom-[14%] before:w-1 before:rounded-full before:bg-gradient-to-b before:from-violet-500 before:via-fuchsia-500 before:to-amber-500 before:content-[''] before:shadow-[0_0_14px_rgba(139,92,246,0.3)]",
  ].join(" "),
} as const;

/** Steps 01 / 03 — same language, rail on the right */
const ACCENT_RIGHT = {
  release: [
    "relative py-10 md:py-12",
    "pr-5 md:pr-9",
    "bg-gradient-to-l from-cyan-50/62 via-sky-50/28 to-transparent",
    "dark:from-cyan-950/48 dark:via-slate-900/35 dark:to-transparent",
    "after:pointer-events-none after:absolute after:right-0 after:top-[14%] after:bottom-[14%] after:w-1 after:rounded-full after:bg-gradient-to-b after:from-sky-400 after:via-cyan-500 after:to-teal-500 after:content-[''] after:shadow-[0_0_14px_rgba(14,165,233,0.32)]",
  ].join(" "),
  cast: [
    "relative py-10 md:py-12",
    "pr-5 md:pr-9",
    "bg-gradient-to-l from-teal-50/55 via-cyan-50/22 to-transparent",
    "dark:from-teal-950/48 dark:via-slate-900/32 dark:to-transparent",
    "after:pointer-events-none after:absolute after:right-0 after:top-[14%] after:bottom-[14%] after:w-1 after:rounded-full after:bg-gradient-to-b after:from-teal-500 after:via-cyan-500 after:to-sky-500 after:content-[''] after:shadow-[0_0_14px_rgba(20,184,166,0.32)]",
  ].join(" "),
} as const;

export function Steps() {
  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-cyan-50/35 via-white to-slate-50/90 px-6 pb-4 pt-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:pb-8 md:pt-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2
          className={`landing-scroll-animation mb-2 text-center text-3xl font-medium text-neutral-900 dark:text-neutral-100 md:text-4xl ${playfair.className}`}
        >
          Reduce procrastination in four steps
        </h2>
        <p className="landing-scroll-animation landing-scroll-delay-1 mx-auto mb-12 max-w-2xl text-center text-neutral-600 dark:text-neutral-400 md:mb-14">
          A single loop you can repeat: release pressure, clarify the task, focus briefly, then reel in the win.
        </p>

        <div className="relative space-y-12 md:space-y-16">
          {STEPS.map((step) => {
            const slideDir = step.n % 2 === 1 ? "landing-step-from-left" : "landing-step-from-right";

            const kickerClass =
              step.n === 2
                ? "text-emerald-900/85 dark:text-emerald-300/95"
                : step.n === 4
                  ? "text-violet-900/85 dark:text-violet-300/95"
                  : "text-teal-800 dark:text-teal-300/90";

            const subtitleGradient =
              step.n === 2
                ? "from-emerald-800/90 to-teal-800/80 dark:from-emerald-300/95 dark:to-teal-200/90"
                : step.n === 4
                  ? "from-violet-800/90 to-amber-900/78 dark:from-violet-300/95 dark:to-amber-200/85"
                  : "from-teal-800/90 to-cyan-800/80 dark:from-teal-300/95 dark:to-cyan-200/88";

            const accentClass =
              step.n === 1
                ? ACCENT_RIGHT.release
                : step.n === 2
                  ? ACCENT_LEFT.mint
                  : step.n === 3
                    ? ACCENT_RIGHT.cast
                    : ACCENT_LEFT.dusk;

            const content = (
              <div className="landing-step-text flex w-full flex-col justify-center lg:w-1/2">
                <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${kickerClass}`}>
                  Step {String(step.n).padStart(2, "0")} / 04
                </p>
                <h3 className={`mb-2 text-3xl font-medium leading-tight text-neutral-900 dark:text-neutral-100 md:text-4xl ${playfair.className}`}>
                  {step.title}
                </h3>
                <p
                  className={`mb-4 text-lg bg-gradient-to-r ${subtitleGradient} bg-clip-text text-transparent ${playfair.className}`}
                >
                  {step.subtitle}
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-300">{step.body}</p>
              </div>
            );

            const visual = (
              <div className="landing-step-media flex w-full justify-center lg:w-1/2">
                <div className="relative w-full max-w-[280px] md:max-w-[300px]">
                  <div className="landing-device-frame">
                    <div className="landing-device-inner">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        width={390}
                        height={832}
                        className="aspect-[9/19] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <div
                key={step.id}
                className={`landing-step-block ${slideDir} flex flex-col gap-10 md:gap-16 lg:flex-row lg:items-center ${
                  step.imageFirst ? "lg:flex-row-reverse" : ""
                } ${accentClass}`}
              >
                {step.imageFirst ? (
                  <>
                    {visual}
                    {content}
                  </>
                ) : (
                  <>
                    {content}
                    {visual}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
