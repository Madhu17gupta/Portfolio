# ARCHITECTURE.md — Technical Architecture of "The [YOUR NAME] Daily"

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (latest stable, App Router)** | Server Components, file routing, API routes, image/font optimisation |
| Language | **TypeScript (strict)** | Safety for content + components |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` config) | Design tokens in CSS, fast iteration |
| Animation | **GSAP 3.13+** + **@gsap/react** | All plugins (SplitText, ScrollTrigger, Flip, DrawSVG, ScrambleText, CustomEase) are free and included in the `gsap` npm package |
| Smooth scroll | **Lenis** (synced to GSAP ticker) | Smooth, ScrollTrigger-friendly scrolling |
| Content | Typed TS files + **MDX** (`@next/mdx` or `next-mdx-remote`) | Easy editing, case studies as MDX |
| Chatbot | **Vercel AI SDK** (`ai`, `@ai-sdk/react`) + any LLM provider (Gemini / Groq free tier, Anthropic, OpenAI) | Streaming responses with minimal code |
| Contact email | **Resend** + **React Email** | Free tier, reliable delivery |
| Validation | **Zod** | Validate contact + chat inputs |
| Rate limiting | **Upstash Redis** + `@upstash/ratelimit` | Protect chat + contact APIs from abuse |
| PDF viewer | Native `<iframe>` / `<object>` (optionally `react-pdf`) | Inline resume view |
| Analytics | **Vercel Analytics** + Speed Insights | Track resume downloads & performance |
| Hosting | **Vercel** | Zero-config Next.js deploys |
| Fonts | `next/font/google`: **Fraunces**, **Newsreader**, **JetBrains Mono** | Self-hosted, no layout shift |

### Approved dependency list
```
next react react-dom typescript
tailwindcss @tailwindcss/postcss
gsap @gsap/react lenis
ai @ai-sdk/react @ai-sdk/google (or @ai-sdk/groq / @ai-sdk/anthropic / @ai-sdk/openai)
resend @react-email/components
zod @upstash/ratelimit @upstash/redis
@next/mdx @mdx-js/react (or next-mdx-remote)
clsx tailwind-merge
@vercel/analytics @vercel/speed-insights
```

---

## 2. Folder Structure

```
the-daily/
├─ app/
│  ├─ layout.tsx                # fonts, theme, Lenis, cursor, chatbot, analytics
│  ├─ template.tsx              # page-enter transition (GSAP)
│  ├─ page.tsx                  # Front Page (all main sections)
│  ├─ globals.css               # Tailwind v4 @theme tokens + base styles
│  ├─ projects/
│  │  └─ [slug]/page.tsx        # Feature Story (case study) from MDX
│  ├─ resume/page.tsx           # The Print Edition (view + download)
│  ├─ api/
│  │  ├─ chat/route.ts          # Interview Desk chatbot (streaming)
│  │  └─ contact/route.ts       # Letters to the Editor (Resend)
│  ├─ opengraph-image.tsx       # dynamic OG image (newspaper front page)
│  ├─ sitemap.ts
│  ├─ robots.ts
│  └─ not-found.tsx             # "Page 404: This story was never printed"
│
├─ components/
│  ├─ layout/
│  │  ├─ Masthead.tsx           # newspaper title, date, vol/issue, nav
│  │  ├─ NewsTicker.tsx         # breaking-news marquee
│  │  ├─ Footer.tsx             # colophon + socials
│  │  ├─ ThemeToggle.tsx        # Morning / Night Edition
│  │  └─ SectionHeader.tsx      # kicker + headline + drawn rule
│  ├─ sections/
│  │  ├─ Hero.tsx
│  │  ├─ TechStack.tsx          # The Classifieds
│  │  ├─ Projects.tsx           # Feature Stories (pinned horizontal)
│  │  ├─ Experience.tsx         # The Archives (DrawSVG timeline)
│  │  ├─ Education.tsx          # Back Issues
│  │  ├─ Certifications.tsx     # Credentials (stamps)
│  │  ├─ Now.tsx                # "Currently" column
│  │  ├─ Testimonials.tsx       # Reader Letters
│  │  └─ Contact.tsx            # Letters to the Editor
│  ├─ motion/
│  │  ├─ Preloader.tsx          # printing-press intro
│  │  ├─ SplitReveal.tsx        # SplitText line/char reveal wrapper
│  │  ├─ InkReveal.tsx          # clip-path image reveal
│  │  ├─ DrawRule.tsx           # horizontal rule draw on scroll
│  │  ├─ Scramble.tsx           # ScrambleText for mono labels
│  │  ├─ Magnetic.tsx           # magnetic hover for buttons
│  │  ├─ InkCursor.tsx          # custom cursor
│  │  ├─ PageTransition.tsx     # page-turn overlay
│  │  └─ SmoothScroll.tsx       # Lenis + ScrollTrigger sync
│  ├─ chat/
│  │  ├─ InterviewDesk.tsx      # notepad-style chatbot panel
│  │  └─ SuggestedQuestions.tsx
│  ├─ resume/ResumeViewer.tsx
│  └─ ui/                       # Button, Tag, Rule, Stamp, Link
│
├─ content/
│  ├─ profile.ts                # name, role, location, bio, socials, availability
│  ├─ stack.ts                  # tech stack "classified ads"
│  ├─ projects.ts               # project metadata
│  ├─ projects/*.mdx            # full case studies
│  ├─ experience.ts
│  ├─ education.ts
│  ├─ certifications.ts
│  ├─ testimonials.ts
│  ├─ now.ts
│  └─ chatbot-knowledge.md      # everything the chatbot is allowed to know
│
├─ lib/
│  ├─ gsap.ts                   # register plugins + custom eases (single source)
│  ├─ animations.ts             # reusable timelines/presets
│  ├─ ratelimit.ts
│  ├─ utils.ts                  # cn(), formatDate()
│  └─ types.ts                  # Project, Experience, etc.
│
├─ emails/ContactEmail.tsx      # React Email template
├─ public/
│  ├─ resume.pdf
│  ├─ images/projects/*
│  ├─ images/me-duotone.jpg
│  └─ textures/paper-grain.png  # subtle paper texture (tiny, tiled)
└─ .env.local
```

---

## 3. Routing

| Route | Type | Purpose |
|---|---|---|
| `/` | Static (SSG) | Front page with all sections |
| `/projects/[slug]` | SSG via `generateStaticParams` | Case study pages |
| `/resume` | Static | Inline PDF viewer + download |
| `/api/chat` | Edge/Node route handler, streaming | Chatbot |
| `/api/contact` | Node route handler | Send email via Resend |

Navigation in the masthead uses **anchor links** (`/#projects`) handled by Lenis `scrollTo` for smooth, offset-aware scrolling.

---

## 4. Design System (Tailwind v4 `@theme`)

All tokens live in `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Morning Edition (light) */
  --color-paper: #F4F1EA;
  --color-ink: #1A1A1A;
  --color-press-red: #D93A2B;
  --color-graphite: #8A847A;
  --color-mustard: #E8B94A;
  --color-rule: #1A1A1A;

  --font-display: var(--font-fraunces), Georgia, serif;
  --font-body: var(--font-newsreader), Georgia, serif;
  --font-mono: var(--font-jetbrains), ui-monospace, monospace;

  --radius-print: 2px;
  --ease-ink: cubic-bezier(0.77, 0, 0.18, 1);
}

/* Night Edition (dark) */
[data-theme="night"] {
  --color-paper: #14130F;
  --color-ink: #EDE8DC;
  --color-graphite: #8F897D;
  --color-rule: #EDE8DC;
}
```

**Grid:** 12-column editorial grid, `max-w-[1440px]`, column gap `24px`, with visible vertical column rules on desktop for sections like The Classifieds.

**Type scale (fluid with `clamp()`):**
- Masthead: `clamp(3rem, 12vw, 11rem)`, Fraunces 900, tight tracking
- Headline XL: `clamp(2.5rem, 6vw, 6rem)`
- Headline: `clamp(1.75rem, 3vw, 3rem)`
- Body: `1.125rem` / line-height 1.6, Newsreader
- Kicker / meta: `0.75rem` uppercase, JetBrains Mono, `tracking-[0.15em]`

**Texture:** a tiny tiled paper-grain PNG at ~4% opacity via `body::before`, `pointer-events: none`.

---

## 5. Animation Architecture (GSAP)

### 5.1 Single plugin registry — `lib/gsap.ts`
```ts
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, DrawSVGPlugin, ScrambleTextPlugin, CustomEase, useGSAP);

CustomEase.create("inkPress", "0.77,0,0.18,1");
CustomEase.create("stamp", "M0,0 C0.2,0 0.3,1.25 0.55,1.1 0.75,0.98 0.85,1 1,1");

gsap.defaults({ ease: "inkPress", duration: 0.9 });

export { gsap, ScrollTrigger, SplitText, Flip, useGSAP };
```

### 5.2 Smooth scroll — `components/motion/SmoothScroll.tsx`
- Create one Lenis instance in the root layout.
- Sync: `lenis.on("scroll", ScrollTrigger.update)` and drive Lenis from `gsap.ticker.add((t) => lenis.raf(t * 1000))`, with `gsap.ticker.lagSmoothing(0)`.
- Disable Lenis when `prefers-reduced-motion: reduce`.

### 5.3 Rules for every animated component
```ts
const scope = useRef<HTMLDivElement>(null);
useGSAP(() => {
  const mm = gsap.matchMedia();
  mm.add(
    { motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 1024px)" },
    (ctx) => {
      const { motion, desktop } = ctx.conditions!;
      if (!motion) return;           // static fallback already rendered by CSS
      // build timelines here; use desktop flag for heavy effects (pinning)
    }
  );
}, { scope });
```
- Wait for fonts before SplitText: `document.fonts.ready.then(...)`, and use `SplitText.create(el, { type: "lines", mask: "lines", autoSplit: true, onSplit() {...} })` so lines re-split on resize.
- Call `ScrollTrigger.refresh()` after images load in pinned sections.
- Hide pre-animation states with a `.js-motion` class on `<html>` to avoid flash of unstyled content (FOUC), and never hide content if JS fails.

### 5.4 Animation map

| Where | Effect | GSAP tools |
|---|---|---|
| First load | Printing-press preloader: mono counter 000→100, ink roller wipes the screen, masthead letters drop in | Timeline, SplitText (chars), clip-path, CustomEase |
| Page change | Page-turn overlay: a paper panel sweeps across showing the destination's headline, then reveals | Timeline in `PageTransition` + `template.tsx` |
| Hero headline | Lines rise from masks, one by one | SplitText `mask: "lines"`, stagger |
| Hero photo | Duotone image revealed by ink-wipe clip-path, scale 1.15 → 1 | clip-path tween |
| News ticker | Infinite marquee whose speed and direction react to scroll velocity | horizontalLoop helper, `ScrollTrigger.getVelocity()`, `quickTo` |
| Section headers | Mono kicker scrambles in; rule line draws left→right; headline lines rise | ScrambleText, scaleX, SplitText |
| Classifieds (stack) | Ads drop into the grid in batches; on hover a print "misregistration" offset shadow (red layer shifts 3px) | `ScrollTrigger.batch`, `quickTo` |
| Projects | Desktop: section pins and scrolls horizontally like turning broadsheet pages; images parallax inside cards; category filter re-layout | ScrollTrigger pin + `containerAnimation`, Flip |
| Experience | Vertical timeline line draws as you scroll; dates scramble; entries slide in | DrawSVG (scrub), ScrambleText |
| Certifications | Stamps slam onto the page with overshoot, random rotation, tiny paper shake | `stamp` ease, timeline |
| Contact | Letter sheet unfolds on enter; on submit it folds into an envelope and slides out, "POSTED" stamp appears | 3D rotateX timeline, Flip |
| Cursor | Ink-dot cursor that grows into a "READ" label on project cards | `gsap.quickTo` |
| Buttons | Magnetic pull on hover | `quickTo` |
| Chatbot | Notepad slides up from the bottom edge; answers appear line by line | Timeline |

All heavy effects (pinning, horizontal scroll, custom cursor) are **desktop + motion-allowed only**. Mobile gets lighter reveals.

---

## 6. Chatbot Architecture ("The Interview Desk")

```
[InterviewDesk.tsx]  --useChat()-->  POST /api/chat
                                         │
                       1. Zod-validate messages (max length, max 20 msgs)
                       2. Rate-limit by IP (Upstash: 15 req / 10 min)
                       3. Load content/chatbot-knowledge.md (build-time import)
                       4. streamText({ model, system: SYSTEM_PROMPT + knowledge, messages })
                                         │
                       <-- streamed text response ---
```

**System prompt rules:**
- Speak as "the Editor" of The [YOUR NAME] Daily, answering questions about [YOUR NAME] in third person, friendly and concise (max ~80 words).
- Only answer using the knowledge file. If unknown, say so and point to the contact section.
- Refuse unrelated tasks (coding help, essays, etc.) politely.
- Never invent salary, personal or private details.
- Can suggest: "Download the resume at /resume".

**UI:** a small tab labelled "INTERVIEW DESK" on the bottom-right edge. It opens a notepad panel (lined paper, mono labels) with 4 suggested-question chips, a streaming answer area, an input and a close button. It closes on `Esc` and traps focus while open.

---

## 7. Contact Flow

`Contact.tsx` (client form) → `POST /api/contact` → Zod validate → honeypot field check → rate limit (3 / hour / IP) → `resend.emails.send()` using the React Email template → JSON response → envelope animation on success, inline error otherwise.

---

## 8. Resume

- File: `public/resume.pdf` (keep it under 500 KB).
- `/resume` page: masthead "THE PRINT EDITION", embedded viewer (`<iframe src="/resume.pdf#view=FitH">` with an `<a>` fallback for mobile browsers that don't render PDFs inline), **Download** button (`<a href="/resume.pdf" download="[YOUR-NAME]-Resume.pdf">`).
- A "Print Edition" button sits in the masthead and footer on every page.
- Track downloads with Vercel Analytics `track("resume_download")`.

---

## 9. SEO

- `metadata` in `layout.tsx` (title template, description, keywords, canonical URL, Twitter/OG).
- `opengraph-image.tsx` renders a mini newspaper front page with name + role.
- `sitemap.ts`, `robots.ts`.
- JSON-LD `Person` schema (name, jobTitle, url, sameAs: socials).
- Each case study has its own `generateMetadata`.

---

## 10. Performance Budget

- Home page first-load JS: **< 200 KB gzipped**.
- Images: `next/image`, AVIF/WebP, explicit sizes, `priority` only on the hero photo.
- Fonts: `next/font` with `display: "swap"` and only needed weights.
- Chatbot panel and Lenis-heavy pieces: `next/dynamic` lazy load where possible.
- Kill all ScrollTriggers on unmount (handled by `useGSAP`).

---

## 11. Environment Variables

```
# Chatbot (pick one provider)
GOOGLE_GENERATIVE_AI_API_KEY=
# GROQ_API_KEY=
# ANTHROPIC_API_KEY=

# Contact
RESEND_API_KEY=
CONTACT_TO_EMAIL=

# Rate limit
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 12. Deployment

1. Push to GitHub.
2. Import the repo on Vercel and add the env vars.
3. Connect a custom domain (e.g. `yourname.dev`).
4. Verify the Resend sending domain.
5. Enable Vercel Analytics + Speed Insights.
