"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { techGroups, tickerTools } from "@/content/tech-stack";

export default function TechStack() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The track holds the tool list twice, so sliding it exactly half its
        // width loops seamlessly.
        const marquee = gsap.to(track.current, {
          xPercent: -50,
          duration: 34,
          ease: "none",
          repeat: -1,
        });

        const ticker = track.current?.parentElement;
        const slow = () => gsap.to(marquee, { timeScale: 0.25, duration: 0.5 });
        const resume = () => gsap.to(marquee, { timeScale: 1, duration: 0.5 });
        ticker?.addEventListener("pointerenter", slow);
        ticker?.addEventListener("pointerleave", resume);

        gsap.from(".tech-card", {
          y: 48,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: ".tech-grid", start: "top 82%" },
        });

        gsap.from(".tech-tool", {
          y: 14,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.015,
          ease: "power2.out",
          scrollTrigger: { trigger: ".tech-grid", start: "top 70%" },
        });

        return () => {
          ticker?.removeEventListener("pointerenter", slow);
          ticker?.removeEventListener("pointerleave", resume);
        };
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div className="tech" ref={root}>
      <div className="tech-ticker" aria-hidden="true">
        <div className="tech-ticker-track" ref={track}>
          {[0, 1].map((copy) => (
            <div className="tech-ticker-run" key={copy}>
              {tickerTools.map((tool) => (
                <span key={`${copy}-${tool}`}>
                  {tool}
                  <i>✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="tech-grid">
        {techGroups.map((group) => (
          <article
            className="tech-card"
            key={group.number}
            style={
              {
                "--tech-accent": group.accent,
                "--tech-span": group.span,
              } as React.CSSProperties
            }
          >
            <header className="tech-card-head">
              <span className="tech-number">{group.number}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <span className="tech-count">
                {group.tools.length}
                <i>tools</i>
              </span>
            </header>

            <ul className="tech-tools">
              {group.tools.map((tool) => (
                <li className="tech-tool" key={tool.name}>
                  <span className="tech-mark" aria-hidden="true">
                    {tool.mark}
                  </span>
                  {tool.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
