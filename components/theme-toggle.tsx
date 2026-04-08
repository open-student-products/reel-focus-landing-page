"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { THEME_STORAGE_KEY, type ThemePreference } from "@/lib/theme-storage";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  /** Hero header: light icon on glass. Inner sections: use default. */
  variant?: "hero" | "default";
};

function subscribeDark(onChange: () => void) {
  const el = document.documentElement;
  const observer = new MutationObserver(onChange);
  observer.observe(el, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getDarkSnapshot() {
  return document.documentElement.classList.contains("dark");
}

/** Matches server `<html className="dark">` + theme script default. */
function getServerDarkSnapshot() {
  return true;
}

export function ThemeToggle({ variant = "default" }: ThemeToggleProps) {
  const dark = useSyncExternalStore(subscribeDark, getDarkSnapshot, getServerDarkSnapshot);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      const pref: ThemePreference = next ? "dark" : "light";
      localStorage.setItem(THEME_STORAGE_KEY, pref);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      suppressHydrationWarning
      className={cn(
        "rounded-xl border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "hero"
          ? "h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 sm:h-12 sm:w-12 sm:min-h-[48px] sm:min-w-[48px] mr-1.5 sm:mr-3 border-white/35 bg-white/10 text-white hover:bg-white/20 hover:text-white focus-visible:ring-white/70 focus-visible:ring-offset-transparent dark:border-white/25 dark:bg-slate-950/35"
          : "border-border bg-muted/40 text-foreground hover:bg-muted focus-visible:ring-ring",
      )}
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
    >
      {dark ? (
        <Sun
          className={variant === "hero" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-[1.125rem] w-[1.125rem]"}
          strokeWidth={2}
          aria-hidden
        />
      ) : (
        <Moon
          className={variant === "hero" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-[1.125rem] w-[1.125rem]"}
          strokeWidth={2}
          aria-hidden
        />
      )}
    </Button>
  );
}
