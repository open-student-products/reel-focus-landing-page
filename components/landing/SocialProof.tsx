"use client";

import { playfair } from "./fonts";

const BADGES: { label: string; className: string }[] = [
  {
    label: "Study groups",
    className:
      "border-cyan-700/20 bg-cyan-600 text-white shadow-sm shadow-cyan-900/20 dark:border-cyan-400/30 dark:bg-cyan-500 dark:text-white dark:shadow-cyan-950/40",
  },
  {
    label: "Indie hackers",
    className:
      "border-teal-800/25 bg-teal-600 text-white shadow-sm shadow-teal-900/25 dark:border-teal-400/25 dark:bg-teal-500 dark:text-white dark:shadow-teal-950/35",
  },
  {
    label: "ADHD-friendly",
    className:
      "border-indigo-800/25 bg-indigo-600 text-white shadow-sm shadow-indigo-900/25 dark:border-indigo-400/30 dark:bg-indigo-500 dark:text-white dark:shadow-indigo-950/40",
  },
  {
    label: "Remote teams",
    className:
      "border-sky-800/25 bg-sky-600 text-white shadow-sm shadow-sky-900/20 dark:border-sky-400/30 dark:bg-sky-500 dark:text-white dark:shadow-sky-950/35",
  },
];

export function SocialProof() {
  return (
    <section
      className="landing-scroll-animation border-y border-cyan-200/40 bg-gradient-to-r from-cyan-50/95 via-sky-50/90 to-teal-50/95 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-cyan-800/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
      aria-label="Who ReelFocus is for"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={`mb-6 text-center text-sm font-medium text-teal-900/70 dark:text-teal-200/85 ${playfair.className}`}>
          Built for anyone who wants momentum without the shame cycle
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
          {BADGES.map(({ label, className }) => (
            <span
              key={label}
              className={`rounded-md border px-3.5 py-1.5 text-xs font-semibold tracking-tight md:px-4 md:py-2 md:text-sm ${className}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
