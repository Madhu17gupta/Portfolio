"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { retailRocketsIntro, storyProjects } from "@/content/retail-rockets";

export default function ProjectStory() {
  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      console.log("[story] useGSAP ran", typeof gsap, typeof ScrollTrigger);
      const mm = gsap.matchMedia();
      const total = storyProjects.length;

      const setHead = (progress: number) => {
        const active = Math.min(total, Math.floor(progress * total) + 1);
        if (counter.current) counter.current.textContent = String(active).padStart(2, "0");
        if (bar.current) gsap.set(bar.current, { scaleX: progress });
      };

      mm.add(
        {
          wide: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
          narrow: "(max-width: 1023px), (prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { wide } = context.conditions as { wide: boolean };
          console.log("[story] mm branch wide=", wide);
          const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

          if (!wide) {
            panels.forEach((panel) => {
              gsap.from(panel.querySelectorAll(".story-reveal"), {
                y: 40,
                autoAlpha: 0,
                duration: 0.7,
                stagger: 0.08,
                scrollTrigger: { trigger: panel, start: "top 78%" },
              });
            });
            return;
          }

          // Horizontal "storey" scroll: the sticky stage holds still while the
          // track slides sideways, one project per viewport of scrolling.
          const distance = () =>
            Math.max(0, (track.current?.scrollWidth ?? 0) - (stage.current?.clientWidth ?? 0));

          const slide = gsap.to(track.current, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: scroller.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
              onRefresh: (self) => {
                if (scroller.current) {
                  scroller.current.style.height = `${window.innerHeight + distance()}px`;
                }
                setHead(self.progress);
              },
              onUpdate: (self) => setHead(self.progress),
            },
          });

          panels.forEach((panel) => {
            gsap.from(panel.querySelectorAll(".story-reveal"), {
              y: 54,
              autoAlpha: 0,
              duration: 0.9,
              stagger: 0.07,
              scrollTrigger: {
                trigger: panel,
                containerAnimation: slide,
                start: "left 82%",
                toggleActions: "play none none reverse",
              },
            });

            gsap.fromTo(
              panel.querySelector(".story-ghost"),
              { xPercent: 18 },
              {
                xPercent: -18,
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: slide,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              }
            );
          });

          ScrollTrigger.refresh();

          return () => {
            if (scroller.current) scroller.current.style.height = "";
          };
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div className="story" ref={root}>
      <div className="story-intro">
        <span className="story-eyebrow">{retailRocketsIntro.company}</span>
        <h3>
          Products built at Retail Rockets.
          <em> {retailRocketsIntro.tagline}.</em>
        </h3>
        <p>{retailRocketsIntro.description}</p>
        <span className="story-hint" aria-hidden="true">
          SCROLL TO MOVE THROUGH THE WORK →
        </span>
      </div>

      <div className="story-scroll" ref={scroller}>
        <div className="story-stage" ref={stage}>
          <div className="story-head">
            <span className="story-count">
              <span ref={counter}>01</span>
              <i>/ {String(storyProjects.length).padStart(2, "0")}</i>
            </span>
            <span className="story-bar" aria-hidden="true">
              <span ref={bar} />
            </span>
            <span className="story-head-label">RETAIL ROCKETS · PRODUCT &amp; PROJECT PORTFOLIO</span>
          </div>

          <div className="story-track" ref={track}>
            {storyProjects.map((project) => (
              <article
                className={`story-panel tone-${project.tone}`}
                key={project.id}
                aria-labelledby={`story-${project.id}`}
              >
                <span className="story-ghost" aria-hidden="true">
                  {project.index}
                </span>

                <div className="story-copy">
                  <span className="story-kind story-reveal">
                    {project.index} — {project.kind}
                  </span>
                  <h4 id={`story-${project.id}`} className="story-reveal">
                    {project.name}
                  </h4>
                  <p className="story-subtitle story-reveal">{project.subtitle}</p>
                  <p className="story-overview story-reveal">{project.overview}</p>
                  <div className="story-stack story-reveal">
                    {project.stack.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <p className="story-role story-reveal">
                    <strong>Role</strong> {project.role}
                  </p>
                </div>

                <div className="story-screen story-reveal">
                  <div className="story-screen-top">
                    <i />
                    <i />
                    <i />
                    <strong>
                      {project.live ? project.live.label : `${project.id}.app`}
                    </strong>
                  </div>
                  <div className="story-screen-body">
                    <span className="story-screen-label">KEY FEATURES</span>
                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    {project.hosting && (
                      <p className="story-note">{project.hosting}</p>
                    )}
                    <div className="story-value">
                      <span className="story-screen-label">VALUE DELIVERED</span>
                      <p>{project.value}</p>
                    </div>
                    {project.live && (
                      <a
                        className="story-live"
                        href={project.live.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="story-live-dot" /> Visit {project.live.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
