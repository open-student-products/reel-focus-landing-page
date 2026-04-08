"use client";

import Image from "next/image";
import { Fish, Flame, Sparkles, Timer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { playfair } from "./fonts";

const TAG_CLASS =
  "rounded-md border border-cyan-200/70 bg-gradient-to-br from-white/95 to-cyan-50/70 px-2 py-0.5 text-[11px] font-medium text-teal-900/75 shadow-sm shadow-cyan-900/5 dark:border-cyan-700/50 dark:from-slate-800 dark:to-cyan-950/40 dark:text-teal-100/85 dark:shadow-black/25";

export function FeaturesBento() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/95 via-indigo-50/35 to-cyan-50/50 px-6 pb-12 pt-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:pb-16 md:pt-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="landing-scroll-animation mb-4 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-900/80 dark:text-indigo-300/90">
            Features
          </p>
          <h2 className={`text-3xl font-medium text-neutral-900 dark:text-neutral-100 md:text-4xl ${playfair.className}`}>
            Play together. Stay motivated.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Social presence and gentle accountability—without turning focus into a competition.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          <Card className="landing-scroll-animation landing-scroll-delay-1 md:row-span-2 border-cyan-200/60 bg-gradient-to-br from-white/95 via-sky-50/40 to-cyan-50/30 shadow-md shadow-cyan-900/10 dark:border-cyan-800/40 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950/40 dark:shadow-black/30">
            <CardHeader className="pb-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                  <Fish className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <CardTitle className={`text-2xl ${playfair.className}`}>Fish together</CardTitle>
                  <CardDescription>Co-focus sessions that feel supportive, not noisy.</CardDescription>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={TAG_CLASS}>Co-focus</span>
                <span className={TAG_CLASS}>Real-time</span>
                <span className={TAG_CLASS}>Friends</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 md:flex-row md:items-center">
              <p className="flex-1 text-neutral-600 leading-relaxed dark:text-neutral-300">
                Team up with friends and fish side-by-side in real time. Seeing others stay active creates shared
                momentum—so you mirror productive behavior instead of stalling.
              </p>
              <div className="mx-auto w-full max-w-[220px] shrink-0 md:mx-0">
                <div className="landing-device-frame scale-95 md:scale-100">
                  <div className="landing-device-inner">
                    <Image
                      src="/images/fish-together-hero.png"
                      alt="Add your tasks to start fishing with friends"
                      width={390}
                      height={832}
                      className="aspect-[9/19] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="landing-scroll-animation landing-scroll-delay-2 border-emerald-200/60 bg-gradient-to-br from-white to-emerald-50/50 shadow-sm transition-colors hover:border-emerald-400/50 hover:shadow-emerald-900/10 dark:border-emerald-800/45 dark:from-slate-900 dark:to-emerald-950/35 dark:hover:border-emerald-600/50">
            <CardHeader>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Flame className="h-5 w-5" strokeWidth={2} />
              </div>
              <CardTitle className={playfair.className}>Streaks</CardTitle>
              <CardDescription>Show up daily; watch consistency compound.</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className={TAG_CLASS}>Habits</span>
                <span className={TAG_CLASS}>Accountability</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 leading-relaxed dark:text-neutral-300">
                Build daily streaks by checking in and completing small blocks. Visual progress keeps you honest—without
                shame if you miss a day.
              </p>
            </CardContent>
          </Card>

          <Card className="landing-scroll-animation landing-scroll-delay-3 border-violet-200/60 bg-gradient-to-br from-white to-violet-50/45 shadow-sm transition-colors hover:border-violet-400/45 hover:shadow-violet-900/10 dark:border-violet-800/45 dark:from-slate-900 dark:to-violet-950/35">
            <CardHeader>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                <Sparkles className="h-5 w-5" strokeWidth={2} />
              </div>
              <CardTitle className={playfair.className}>Gentle check-ins</CardTitle>
              <CardDescription>Mood-aware prompts that lower activation energy.</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className={TAG_CLASS}>Release</span>
                <span className={TAG_CLASS}>Self-compassion</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 leading-relaxed dark:text-neutral-300">
                Quick emotional check-ins help you name what’s blocking you—so starting feels safer than avoiding.
              </p>
            </CardContent>
          </Card>

          <Card className="landing-scroll-animation border-amber-200/60 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/40 shadow-sm transition-colors hover:border-amber-400/45 hover:shadow-amber-900/10 dark:border-amber-800/45 dark:from-slate-900 dark:via-amber-950/25 dark:to-orange-950/30 md:col-span-2">
            <CardHeader>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <Timer className="h-5 w-5" strokeWidth={2} />
              </div>
              <CardTitle className={playfair.className}>Calm focus timer</CardTitle>
              <CardDescription>Short casts that respect your attention.</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className={TAG_CLASS}>Focus</span>
                <span className={TAG_CLASS}>No guilt</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 leading-relaxed dark:text-neutral-300">
                Commit to a tiny time box, minimize distractions, and stop with clarity—not burnout.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
