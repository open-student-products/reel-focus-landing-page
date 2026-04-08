"use client";

import { useEffect, useRef } from "react";

const SELECTORS = [".landing-scroll-animation", ".landing-step-block"];
const IN_CLASS = "landing-animate-in";

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle so animations run again when scrolling back into view (e.g. bottom → top).
          if (entry.isIntersecting) {
            entry.target.classList.add(IN_CLASS);
          } else {
            entry.target.classList.remove(IN_CLASS);
          }
        });
      },
      /* threshold 0 = fire as soon as any part enters/leaves the root; reliable replay on scroll direction changes */
      { threshold: 0, rootMargin: "0px" },
    );

    SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        observerRef.current?.observe(el);
      });
    });

    return () => observerRef.current?.disconnect();
  }, []);
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
