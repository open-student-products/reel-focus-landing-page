"use client";

import { Card, CardContent } from "@/components/ui/card";
import { playfair } from "./fonts";

const QUOTES = [
  {
    initials: "AR",
    name: "Beta reader",
    role: "Productivity nerd",
    quote:
      "“I’m trying every beta that respects my brain. ReelFocus is the first flow that felt kind before it felt productive.”",
  },
  {
    initials: "M",
    name: "Early design partner",
    role: "Student",
    quote:
      "“The four-step framing finally gave me language for why I freeze on big assignments. Untangle → Cast is my new ritual.”",
  },
  {
    initials: "K",
    name: "Community tester",
    role: "Remote engineer",
    quote:
      "“Fishing with a friend removed the shame spiral. We didn’t chat—we just worked in parallel. Game changer.”",
  },
];

export function Testimonials() {
  return (
    <section
      className="border-t border-teal-200/40 bg-gradient-to-b from-teal-50/50 via-cyan-50/40 to-sky-50/60 px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-teal-800/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2
          id="testimonials-heading"
          className={`landing-scroll-animation mb-2 text-center text-3xl font-medium text-neutral-900 dark:text-neutral-100 md:text-4xl ${playfair.className}`}
        >
          What early testers are saying
        </h2>
        <p className="landing-scroll-animation landing-scroll-delay-1 mx-auto mb-10 max-w-2xl text-center text-sm text-teal-900/65 dark:text-teal-200/75">
          Quotes from design partners and beta readers—placeholder names until you ship real endorsements.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Card
              key={t.initials + i}
              className={`landing-scroll-animation border-cyan-200/55 bg-gradient-to-br from-white/98 to-cyan-50/50 shadow-md shadow-cyan-900/5 dark:border-cyan-800/45 dark:from-slate-900 dark:to-cyan-950/35 dark:shadow-black/25 ${
                i === 1 ? "landing-scroll-delay-1" : i === 2 ? "landing-scroll-delay-2" : ""
              }`}
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white shadow-inner ${
                      i === 0
                        ? "bg-gradient-to-br from-sky-500 to-cyan-600"
                        : i === 1
                          ? "bg-gradient-to-br from-teal-500 to-emerald-600"
                          : "bg-gradient-to-br from-indigo-500 to-violet-600"
                    }`}
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-neutral-900 dark:text-neutral-100 ${playfair.className}`}>
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{t.quote}</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
