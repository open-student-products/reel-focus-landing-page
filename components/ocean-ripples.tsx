"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  speed: number;
  width: number;
};

function readDarkMode(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function OceanRipples() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastSpawnRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const isDarkRef = useRef(false);

  useEffect(() => {
    isDarkRef.current = readDarkMode();
    const mo = new MutationObserver(() => {
      isDarkRef.current = readDarkMode();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const canvas = canvasRef.current;
    if (!canvas) {
      return () => mo.disconnect();
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return () => mo.disconnect();
    }

    const getSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return { w: 0, h: 0, rect: null as DOMRect | null };
      const rect = parent.getBoundingClientRect();
      return { w: rect.width, h: rect.height, rect };
    };

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const { w, h } = getSize();
      const width = Math.max(1, Math.floor(w * dpr));
      const height = Math.max(1, Math.floor(h * dpr));
      if (canvas.width !== width) canvas.width = width;
      if (canvas.height !== height) canvas.height = height;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(() => resize());
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();

    const spawn = (clientX: number, clientY: number, boost = 0) => {
      const { rect } = getSize();
      if (!rect) return;
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        return;
      }

      const now = performance.now();
      const minInterval = 45;
      if (boost === 0 && now - lastSpawnRef.current < minInterval) return;
      lastSpawnRef.current = now;

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      ripplesRef.current.push({
        x,
        y,
        r: 6 + boost * 8,
        alpha: 0.28 + boost * 0.1,
        speed: 1.25 + boost * 0.35,
        width: 1.25 + boost * 0.5,
      });

      if (ripplesRef.current.length > 40) {
        ripplesRef.current.splice(0, ripplesRef.current.length - 40);
      }
    };

    const onMove = (e: PointerEvent) => spawn(e.clientX, e.clientY, 0);
    const onDown = (e: PointerEvent) => spawn(e.clientX, e.clientY, 1);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    const drawWaves = (t: number, w: number, h: number, isDark: boolean) => {
      const time = t * 0.00035;
      ctx.globalAlpha = isDark ? 0.12 : 0.18;

      for (let i = 0; i < 3; i++) {
        const yBase = h * (0.28 + i * 0.18);
        const amp = 10 + i * 6;
        const freq = 0.012 + i * 0.004;
        const phase = time * (1.4 + i * 0.45);

        ctx.beginPath();
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= w; x += 12) {
          const y = yBase + Math.sin(x * freq + phase) * amp;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = isDark ? "rgba(165, 243, 252, 0.22)" : "rgba(255, 255, 255, 0.28)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    };

    const tick = (t: number) => {
      const { w, h } = getSize();
      if (!w || !h) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const isDark = isDarkRef.current;

      ctx.clearRect(0, 0, w, h);
      const g = ctx.createLinearGradient(0, 0, 0, h);
      if (isDark) {
        g.addColorStop(0, "#155e75");
        g.addColorStop(0.42, "#0e7490");
        g.addColorStop(0.78, "#0f766e");
        g.addColorStop(1, "#042f2e");
      } else {
        g.addColorStop(0, "#38bdf8");
        g.addColorStop(0.45, "#0ea5e9");
        g.addColorStop(1, "#0369a1");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const v = ctx.createRadialGradient(w * 0.5, h * 0.1, 0, w * 0.5, h * 0.45, Math.max(w, h));
      if (isDark) {
        v.addColorStop(0, "rgba(56, 189, 248, 0.1)");
        v.addColorStop(0.45, "rgba(15, 23, 42, 0.28)");
        v.addColorStop(1, "rgba(2, 6, 23, 0.72)");
      } else {
        v.addColorStop(0, "rgba(255,255,255,0.14)");
        v.addColorStop(0.55, "rgba(255,255,255,0.02)");
        v.addColorStop(1, "rgba(0,0,0,0.18)");
      }
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);

      drawWaves(t, w, h, isDark);

      const ripples = ripplesRef.current;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += r.speed;
        r.alpha *= 0.985;

        const rippleA = isDark ? r.alpha * 0.75 : r.alpha;
        const rim = isDark ? "165, 243, 252" : "255, 255, 255";

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rim}, ${rippleA})`;
        ctx.lineWidth = r.width;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r * 0.62, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rim}, ${rippleA * 0.45})`;
        ctx.lineWidth = Math.max(1, r.width - 0.4);
        ctx.stroke();

        if (r.alpha < 0.02 || r.r > Math.max(w, h) * 0.9) {
          ripples.splice(i, 1);
        }
      }
      ctx.restore();

      ctx.fillStyle = isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)";
      ctx.fillRect(0, 0, w, h);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      mo.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
