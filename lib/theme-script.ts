import { THEME_STORAGE_KEY } from "@/lib/theme-storage";

/** Inline before React: default dark on first visit; respect localStorage only when set to "light" or "dark". */
export function getThemeInitScript(): string {
  const key = THEME_STORAGE_KEY;
  return `(function(){try{var k=${JSON.stringify(key)};var t=localStorage.getItem(k);var d=t!=="light";document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;
}
