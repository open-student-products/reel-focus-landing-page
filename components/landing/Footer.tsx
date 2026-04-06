"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { playfair } from "./fonts";
import { scrollToSection } from "./use-scroll-reveal";

function FooterLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="text-left text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      href={href}
      className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="landing-scroll-animation border-t border-cyan-200/50 bg-gradient-to-b from-cyan-50/40 via-slate-50/90 to-slate-100/95 px-6 py-12 dark:border-cyan-800/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className={`text-lg font-medium text-neutral-900 dark:text-neutral-100 ${playfair.className}`}>ReelFocus</p>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
              Catch your momentum with a four-step flow: release, untangle, cast, reel in.
            </p>
          </div>
          <div>
            <p className={`mb-3 text-xs font-semibold uppercase tracking-wider text-teal-800/70 dark:text-teal-300/80`}>
              Product
            </p>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#" onClick={() => scrollToSection("product-highlight")}>
                  Highlights
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" onClick={() => scrollToSection("how-it-works")}>
                  How it works
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" onClick={() => document.getElementById("early-access-form")?.scrollIntoView({ behavior: "smooth", block: "center" })}>
                  Early access
                </FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <p className={`mb-3 text-xs font-semibold uppercase tracking-wider text-teal-800/70 dark:text-teal-300/80`}>
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#">Privacy</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Terms</FooterLink>
              </li>
            </ul>
            <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">Replace # with real pages when available.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-cyan-200/40 pt-8 dark:border-cyan-800/35 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">© 2026 ReelFocus. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-teal-800/60 transition-colors hover:text-teal-950 dark:text-teal-300/70 dark:hover:text-teal-100"
              aria-label="Twitter (add URL)"
              title="Add your Twitter URL"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-teal-800/60 transition-colors hover:text-teal-950 dark:text-teal-300/70 dark:hover:text-teal-100"
              aria-label="GitHub (add URL)"
              title="Add your GitHub URL"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="#"
              className="text-teal-800/60 transition-colors hover:text-teal-950 dark:text-teal-300/70 dark:hover:text-teal-100"
              aria-label="Discord (add URL)"
              title="Add your Discord URL"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6h0a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v0" />
                <path d="M6 18v-7a3 3 0 0 1 3-3h7" />
                <circle cx="8" cy="12" r="1" />
                <circle cx="16" cy="12" r="1" />
              </svg>
            </a>
            <a
              href="#"
              className="text-teal-800/60 transition-colors hover:text-teal-950 dark:text-teal-300/70 dark:hover:text-teal-100"
              aria-label="LinkedIn (add URL)"
              title="Add your LinkedIn URL"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
