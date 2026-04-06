"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { playfair } from "./fonts";

const BENEFITS = [
  "Priority invites as we open new beta slots",
  "Occasional product updates—no daily spam",
  "Shape features like co-focus and streaks",
];

export function EarlyAccess() {
  const [signupStatus, setSignupStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [signupMessage, setSignupMessage] = useState<string>("");

  const handleEarlyAccessSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupStatus("loading");
    setSignupMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        const msg =
          body && typeof body === "object" && "error" in body && typeof (body as { error?: string }).error === "string"
            ? (body as { error: string }).error
            : "Sign up failed. Please try again.";
        setSignupStatus("error");
        setSignupMessage(msg);
        return;
      }

      form.reset();
      setSignupStatus("success");
      setSignupMessage("You’re in! We’ll email you soon.");
    } catch {
      setSignupStatus("error");
      setSignupMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      id="early-access-form"
      className="relative overflow-hidden bg-gradient-to-br from-sky-100/95 via-cyan-50/90 to-teal-100/85 px-6 py-14 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 md:py-20"
    >
      <div
        className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[120%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-200/15 via-transparent to-cyan-200/20 dark:from-indigo-950/40 dark:via-transparent dark:to-slate-900/50"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-10 md:mb-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:gap-3.5">
            <h2
              className={`landing-scroll-animation text-3xl font-medium leading-snug text-neutral-900 dark:text-neutral-100 md:text-4xl ${playfair.className}`}
            >
              Ready to catch your next win?
            </h2>
            <p className="landing-scroll-animation landing-scroll-delay-1 max-w-2xl text-pretty text-neutral-600 dark:text-neutral-400">
              Join the ReelFocus Early Access list. Beta invites only—we’ll never sell your email.
            </p>
          </div>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div className="landing-scroll-animation landing-scroll-delay-2 space-y-6">
            <h3 className={`text-xl font-medium text-neutral-900 dark:text-neutral-100 md:text-2xl ${playfair.className}`}>
              What you get
            </h3>
            <ul className="space-y-4 text-neutral-600 dark:text-neutral-300">
              {BENEFITS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 shadow-sm shadow-teal-600/40"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              No credit card. Unsubscribe anytime from the first email. We use your details only for beta access and
              product news.
            </p>
          </div>

          <Card className="landing-scroll-animation landing-scroll-delay-3 relative z-10 overflow-hidden rounded-2xl border border-cyan-200/50 bg-gradient-to-br from-white via-white to-cyan-50/50 shadow-lg shadow-cyan-900/12 ring-1 ring-white/70 dark:border-cyan-400/20 dark:from-slate-800 dark:via-slate-800/98 dark:to-slate-900 dark:shadow-[inset_0_1px_0_0_rgba(45,212,191,0.14),0_25px_50px_-12px_rgba(0,0,0,0.45)] dark:ring-1 dark:ring-cyan-400/12">
            <div
              className="pointer-events-none h-px w-full shrink-0 bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent dark:via-white/12 dark:to-transparent"
              aria-hidden
            />
            <CardHeader className="pt-6">
              <CardTitle className={`text-xl tracking-tight md:text-2xl ${playfair.className}`}>
                Get Early Access
              </CardTitle>
              <CardDescription className="dark:text-neutral-300">
                We’ll reach out when your invite is ready.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleEarlyAccessSubmit}>
                <div>
                  <label htmlFor="early-name" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Name
                  </label>
                  <input
                    id="early-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-cyan-800/60 dark:bg-slate-950/90 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-cyan-500/50 dark:focus:ring-cyan-500/25"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="early-email" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    id="early-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-cyan-800/60 dark:bg-slate-950/90 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-cyan-500/50 dark:focus:ring-cyan-500/25"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl font-semibold tracking-tight"
                  disabled={signupStatus === "loading"}
                >
                  {signupStatus === "loading" ? "Signing up…" : "Get Invite"}
                </Button>
                {signupMessage ? (
                  <p
                    className={
                      signupStatus === "success"
                        ? "text-sm text-emerald-700 dark:text-emerald-400"
                        : signupStatus === "error"
                          ? "text-sm text-red-700 dark:text-red-400"
                          : "text-sm text-neutral-600 dark:text-neutral-400"
                    }
                  >
                    {signupMessage}
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
