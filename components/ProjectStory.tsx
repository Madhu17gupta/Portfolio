"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import {
  retailRocketsIntro,
  storyProjects,
  StoryProject,
} from "@/content/retail-rockets";
import retailRocketsShot from "@/public/projects/retailrockets-site.jpg";

/** Screenshots of the real sites, shown behind the live preview frame. */
const shots: Record<string, { src: StaticImageData; alt: string }> = {
  retailrockets: {
    src: retailRocketsShot,
    alt: "Home page of the live RETAIL ROCKETS website",
  },
};

/** LaunchPad is a desktop product, so there is no URL to preview. */
function LaunchPadVisual() {
  return (
    <div className="browser appshot">
      <div className="browser-bar">
        <i /><i /><i />
        <span className="browser-url">LaunchPad · Shelf label preview</span>
      </div>
      <div className="browser-frame">
        <div className="mock-label">
          <span className="mock-label-top">AISLE 04 · SHELF B</span>
          <strong>Basmati Rice 5 kg</strong>
          <div className="mock-price">
            <sup>₹</sup>649<sub>.00</sub>
          </div>
          <div className="mock-barcode" aria-hidden="true">
            {Array.from({ length: 34 }).map((_, i) => (
              <i key={i} style={{ width: `${(i % 4) + 1}px` }} />
            ))}
          </div>
          <span className="mock-sku">8901234 567890</span>
        </div>
      </div>
    </div>
  );
}

function VaultVisual() {
  return (
    <div className="browser appshot">
      <div className="browser-bar">
        <i /><i /><i />
        <span className="browser-url">BlackBox Vault · Credentials</span>
      </div>
      <div className="browser-frame mock-stack">
        <div className="mock-shield">
          <strong>AES-256</strong>
          <span>ENCRYPTED AT REST</span>
        </div>
        <ul className="mock-rows">
          <li><span>prod-db / admin</span><b>••••••••</b></li>
          <li><span>erp-server / root</span><b>••••••••</b></li>
          <li><span>smtp / mailer</span><b>••••••••</b></li>
        </ul>
        <div className="mock-audit">
          <span>AUDIT LOG</span>
          <p>credential updated · old → new captured · user · 14:06</p>
        </div>
      </div>
    </div>
  );
}

function ReviewVisual() {
  return (
    <div className="browser appshot">
      <div className="browser-bar">
        <i /><i /><i />
        <span className="browser-url">ServiceRR · Store feedback</span>
      </div>
      <div className="browser-frame mock-review">
        <div className="mock-qr" aria-hidden="true">
          {Array.from({ length: 49 }).map((_, i) => (
            <i key={i} data-on={(i * 7 + (i % 5)) % 3 === 0 ? "1" : "0"} />
          ))}
        </div>
        <div className="mock-review-side">
          <span className="mock-stars">★★★★★</span>
          <strong>4.6 / 5</strong>
          <span className="mock-sub">VERIFIED STORE REVIEWS</span>
          <div className="mock-bars" aria-hidden="true">
            {[92, 74, 58, 31].map((w) => (
              <i key={w}><b style={{ width: `${w}%` }} /></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LivePreview({ project }: { project: StoryProject }) {
  if (project.visual === "launchpad") return <LaunchPadVisual />;
  if (project.visual === "vault") return <VaultVisual />;
  if (project.visual === "review") return <ReviewVisual />;
  if (!project.live) return <LaunchPadVisual />;

  const shot = shots[project.id];

  return (
    <a
      className="browser"
      href={project.live.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open the live ${project.name} site at ${project.live.label}`}
    >
      <div className="browser-bar">
        <i /><i /><i />
        <span className="browser-url">{project.live.url}</span>
      </div>
      <div className="browser-frame">
        {shot ? (
          <Image src={shot.src} alt={shot.alt} sizes="(max-width: 1023px) 92vw, 46vw" />
        ) : (
          <span className="browser-loading" aria-hidden="true">
            {project.live.label.toUpperCase()}
          </span>
        )}
        {/* Only framed where the site allows it — retailrockets.in sends
            X-Frame-Options: DENY, so that one shows its screenshot instead. */}
        {project.visual === "iframe" && (
          <iframe
            src={project.live.url}
            title={`Live preview of ${project.name}`}
            loading="lazy"
            tabIndex={-1}
            scrolling="no"
          />
        )}
        <span className="browser-open" aria-hidden="true">
          Open live site ↗
        </span>
      </div>
    </a>
  );
}

export default function ProjectStory() {
  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const total = storyProjects.length;
      const panels = gsap.utils.toArray<HTMLElement>(".cine-panel");
      if (!panels.length) return;

      const setHead = (progress: number) => {
        const active = Math.min(total - 1, Math.floor(progress * total));
        if (counter.current) counter.current.textContent = storyProjects[active].index;
        if (label.current) label.current.textContent = storyProjects[active].name;
        if (bar.current) gsap.set(bar.current, { scaleX: progress });
      };

      const mm = gsap.matchMedia();

      mm.add(
        {
          // Must mirror the cinematic media query in globals.css.
          cinematic:
            "(min-width: 1024px) and (min-height: 460px) and (prefers-reduced-motion: no-preference)",
          plain:
            "(max-width: 1023px), (max-height: 459px), (prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { cinematic } = context.conditions as { cinematic: boolean };

          if (!cinematic) {
            root.current?.classList.remove("cine-armed");
            panels.forEach((panel) => {
              gsap.from(panel.querySelectorAll(".cine-reveal"), {
                y: 44,
                autoAlpha: 0,
                duration: 0.7,
                stagger: 0.07,
                scrollTrigger: { trigger: panel, start: "top 80%" },
              });
            });
            return;
          }

          // Switch the layout to the pinned cinema only now that GSAP is live,
          // so the section stays readable if the script never arrives.
          root.current?.classList.add("cine-armed");

          // One scrubbed timeline cuts between the projects: each one flies in
          // from its own side and angle while the backdrop takes its colour.
          // Every project owns STEP units: it flies in over [at, at+1], then
          // rests over [at+1, at+2] until the next one pushes it out. The snap
          // stops sit at the start of each rest, so a scroll always parks on a
          // fully arrived project and nothing drifts away on its own.
          const STEP = 2;
          const stops = storyProjects
            .map((_, i) => (i * STEP + 1) / (total * STEP))
            .concat(1);

          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: scroller.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
              invalidateOnRefresh: true,
              // One scroll gesture settles on the next project rather than
              // drifting between two of them.
              snap: {
                snapTo: stops,
                duration: { min: 0.6, max: 1.5 },
                delay: 0.06,
                ease: "power2.inOut",
                directional: true,
                onStart: () => getLenis()?.stop(),
                onComplete: () => getLenis()?.start(),
                onInterrupt: () => getLenis()?.start(),
              },
              onUpdate: (self) => setHead(self.progress),
              onRefresh: (self) => setHead(self.progress),
            },
          });

          // Hold the timeline's length at total * STEP so the stops above stay
          // exact no matter what the per-panel tweens add up to.
          tl.to({}, { duration: 0.01 }, total * STEP - 0.01);

          panels.forEach((panel, i) => {
            const project = storyProjects[i];
            const copy = panel.querySelector(".cine-copy");
            const art = panel.querySelector(".cine-visual");
            const at = i * STEP;

            tl.to(
              bg.current,
              { backgroundColor: project.backdrop, duration: 1 },
              Math.max(0, at - 0.5)
            );

            if (i === 0) {
              tl.set(panel, { autoAlpha: 1 }, 0);
            } else {
              tl.fromTo(
                panel,
                {
                  autoAlpha: 0,
                  xPercent: project.enter.x,
                  yPercent: project.enter.y,
                  rotation: project.enter.rotate,
                  scale: project.enter.scale,
                },
                {
                  autoAlpha: 1,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  scale: 1,
                  duration: 1,
                  ease: "power3.out",
                },
                at
              );
              // Copy and artwork arrive from opposite directions for depth.
              tl.from(
                copy,
                { xPercent: project.enter.x > 0 ? 24 : -24, autoAlpha: 0, duration: 0.9 },
                at + 0.1
              );
              tl.from(
                art,
                {
                  xPercent: project.enter.x > 0 ? -20 : 20,
                  rotation: -project.enter.rotate,
                  autoAlpha: 0,
                  duration: 0.9,
                },
                at + 0.15
              );
            }

            // Keep the scene alive between cuts: the artwork and the ghost
            // numeral drift at different rates for the whole time on screen.
            tl.to(art, { yPercent: -7, duration: 2, ease: "none" }, at);
            tl.to(
              panel.querySelector(".cine-ghost"),
              { xPercent: i % 2 ? 14 : -14, yPercent: -5, duration: 2, ease: "none" },
              at
            );

            if (i < total - 1) {
              tl.to(
                panel,
                {
                  autoAlpha: 0,
                  xPercent: project.exit.x,
                  yPercent: project.exit.y,
                  rotation: project.exit.rotate,
                  scale: project.exit.scale,
                  duration: 1,
                  ease: "power3.in",
                },
                // Leaves exactly as the next project arrives, never before.
                at + STEP
              );
            }
          });

          // Parked on a project, nothing is scrub-driven any more, so each
          // panel keeps a slow ambient loop of its own: the preview window
          // floats and the numeral breathes until the next scroll.
          const idle = panels.flatMap((panel, i) => [
            gsap.to(panel.querySelector(".browser"), {
              y: -12,
              duration: 3.4,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: i * 0.18,
            }),
            gsap.to(panel.querySelector(".cine-ghost"), {
              opacity: 0.17,
              duration: 4.2,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: i * 0.22,
            }),
          ]);

          // Only loop while the section is on screen.
          ScrollTrigger.create({
            trigger: scroller.current,
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) =>
              idle.forEach((tween) => (self.isActive ? tween.resume() : tween.pause())),
          });

          ScrollTrigger.refresh();
        }
      );

      return () => {
        root.current?.classList.remove("cine-armed");
        mm.revert();
      };
    },
    { scope: root }
  );

  return (
    <div className="cine" ref={root}>
      <div className="cine-intro section-container">
        <span className="cine-eyebrow">{retailRocketsIntro.company}</span>
        <h3>
          Products built at Retail Rockets.
          <em> {retailRocketsIntro.tagline}.</em>
        </h3>
        <p>{retailRocketsIntro.description}</p>
      </div>

      <div className="cine-scroll" ref={scroller}>
        <div className="cine-stage">
          <div className="cine-bg" ref={bg} />
          <div className="cine-noise" aria-hidden="true" />

          <div className="cine-head">
            <span className="cine-count">
              <span ref={counter}>01</span>
              <i>/ {String(storyProjects.length).padStart(2, "0")}</i>
            </span>
            <span className="cine-bar" aria-hidden="true">
              <span ref={bar} />
            </span>
            <span className="cine-now" ref={label}>
              {storyProjects[0].name}
            </span>
          </div>

          <div className="cine-panels">
            {storyProjects.map((project, i) => (
              <article
                className="cine-panel"
                key={project.id}
                style={
                  {
                    "--accent": project.accent,
                    "--glow": project.glow,
                    "--backdrop": project.backdrop,
                    zIndex: i + 1,
                  } as React.CSSProperties
                }
                aria-labelledby={`cine-${project.id}`}
              >
                <span className="cine-ghost" aria-hidden="true">
                  {project.index}
                </span>

                <div className="cine-copy">
                  <span className="cine-kind cine-reveal">
                    {project.index} — {project.kind}
                  </span>
                  <h4 id={`cine-${project.id}`} className="cine-reveal">
                    {project.name}
                  </h4>
                  <p className="cine-subtitle cine-reveal">{project.subtitle}</p>
                  <p className="cine-overview cine-reveal">{project.overview}</p>

                  <ul className="cine-features cine-reveal">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="cine-stack cine-reveal">
                    {project.stack.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <p className="cine-value cine-reveal">{project.value}</p>
                  {project.note && <p className="cine-note cine-reveal">{project.note}</p>}

                  <div className="cine-foot cine-reveal">
                    <span className="cine-role">
                      <b>Role</b> {project.role}
                    </span>
                    {project.live && (
                      <a
                        className="cine-live"
                        href={project.live.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="cine-live-dot" /> {project.live.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="cine-visual">
                  <LivePreview project={project} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
