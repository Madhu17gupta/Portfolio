"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";

const CINEMATIC =
  "(min-width: 1024px) and (min-height: 460px) and (prefers-reduced-motion: no-preference)";

type Row = { label: string; value: string; ok: boolean | null; hint?: string };

export default function Diagnostics() {
  const [rows, setRows] = useState<Row[]>([]);
  const [tick, setTick] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const scrubBar = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const read = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cinematic = window.matchMedia(CINEMATIC).matches;
      const w = window.innerWidth;
      const h = window.innerHeight;

      setRows([
        {
          label: "Viewport (CSS pixels)",
          value: `${w} × ${h}`,
          ok: w >= 1024 && h >= 460,
          hint:
            w < 1024
              ? "Narrower than 1024px — the stacked card layout is used by design."
              : h < 460
                ? "Shorter than 460px — too short for the pinned scene, stacked cards are used."
                : "Big enough for the cinematic scene.",
        },
        {
          label: "Screen / device pixel ratio",
          value: `${window.screen.width} × ${window.screen.height} @ ${window.devicePixelRatio}×`,
          ok: null,
          hint:
            window.devicePixelRatio > 1
              ? "Display scaling is on — Windows scaling shrinks the CSS viewport above."
              : "No display scaling.",
        },
        {
          label: "prefers-reduced-motion",
          value: reduce ? "REDUCE — animation is switched off" : "no-preference",
          ok: !reduce,
          hint: reduce
            ? "This device asks for no animation, so every animation on the site is disabled on purpose. Windows: Settings → Accessibility → Visual effects → Animation effects → On."
            : "This device accepts animation.",
        },
        {
          label: "Cinematic project scene",
          value: cinematic ? "ACTIVE" : "falls back to stacked cards",
          ok: cinematic,
          hint: CINEMATIC,
        },
        {
          label: "GSAP loaded",
          value: gsap?.version ? `yes — v${gsap.version}` : "NO",
          ok: Boolean(gsap?.version),
        },
        {
          label: "ScrollTrigger registered",
          value: ScrollTrigger ? `yes — ${ScrollTrigger.getAll().length} trigger(s)` : "NO",
          ok: Boolean(ScrollTrigger),
        },
        {
          label: "Smooth scrolling (Lenis)",
          value: getLenis() ? "running" : "not running",
          ok: Boolean(getLenis()),
          hint: getLenis()
            ? undefined
            : "Off under reduced motion, which is expected if the row above says REDUCE.",
        },
        {
          label: "JavaScript hydration",
          value: "running (you are reading rendered state)",
          ok: true,
        },
      ]);
    };

    read();
    window.addEventListener("resize", read);
    const id = window.setInterval(read, 1500);
    return () => {
      window.removeEventListener("resize", read);
      window.clearInterval(id);
    };
  }, [tick]);

  useGSAP(
    () => {
      gsap.to(box.current, {
        x: 180,
        rotation: 360,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(scrubBar.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <main className="diag" ref={root}>
      <h1>Animation diagnostics</h1>
      <p className="diag-lead">
        Open this page on the device where animation is not working. Every row
        below is read live from this browser.
      </p>

      <ol className="diag-rows">
        {rows.map((row) => (
          <li key={row.label} data-state={row.ok === null ? "info" : row.ok ? "ok" : "bad"}>
            <span className="diag-label">{row.label}</span>
            <strong>{row.value}</strong>
            {row.hint && <em>{row.hint}</em>}
          </li>
        ))}
      </ol>

      <section className="diag-test">
        <h2>1. Does GSAP animate at all?</h2>
        <p>The square below should slide and spin non-stop.</p>
        <div className="diag-track">
          <div className="diag-box" ref={box} />
        </div>
      </section>

      <section className="diag-test">
        <h2>2. Does scroll-driven animation work?</h2>
        <p>This bar should fill as you scroll down this page.</p>
        <div className="diag-bar">
          <div ref={scrubBar} />
        </div>
      </section>

      <button className="diag-refresh" onClick={() => setTick((t) => t + 1)}>
        Re-read values
      </button>

      <div className="diag-spacer" />
      <p className="diag-foot">
        Keep scrolling — the bar above should be full by the time you reach the
        bottom of this page.
      </p>
    </main>
  );
}
