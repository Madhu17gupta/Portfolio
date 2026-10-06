# PROMPT.md — Prompts to Build "The [YOUR NAME] Daily"

> **How to use:**
> 1. Put `ROLE.md`, `GOALS.md`, `ARCHITECTURE.md`, `PRD.md` and this file in the root of your project (or a `/docs` folder).
> 2. Fill in **My Details** below (replace every `[ ... ]`).
> 3. Paste the **Master Prompt** into your AI coding tool (Cursor, Claude Code, Windsurf, etc.).
> 4. Then run the **Phase Prompts** one by one. Test after each phase before moving on.

---

## My Details (fill this first)

```
Name: [YOUR FULL NAME]
Newspaper name: The [YOUR NAME] Daily
Role: [e.g. Full-Stack Developer / Frontend Engineer]
City: [e.g. Mumbai, India]
Availability: [e.g. Open to full-time roles & freelance from Jan 2027]
Email: [you@email.com]
GitHub: [url]
LinkedIn: [url]
X/Twitter: [url]
Other: [LeetCode / Dribbble / Medium url]
Short bio: [2–3 sentences in your own voice]
Hero headline idea: [e.g. "Local Developer Builds Fast, Accessible Web Apps; Recruiters Take Notice"]
```

---

## MASTER PROMPT

```
You are building my personal portfolio website. Before writing any code, read these files
carefully and follow them strictly:

- docs/ROLE.md         → your role, mindset, banned patterns and engineering rules
- docs/GOALS.md        → why this site exists and the success metrics
- docs/ARCHITECTURE.md → tech stack, folder structure, design tokens, animation system
- docs/PRD.md          → every section, feature, animation and acceptance criterion

CONCEPT: An editorial / printed-newspaper portfolio called "The [YOUR NAME] Daily".
Sections are themed as: Front Page (home), The Classifieds (tech stack), Feature Stories
(projects + case study pages), The Archives (experience), Back Issues (education),
Credentials (certifications as rubber stamps), Currently (now), Reader Letters
(testimonials), Letters to the Editor (contact). Resume = "The Print Edition" (view +
download). Chatbot = "The Interview Desk". Social links in hero, contact and footer.

STACK: Next.js (latest stable, App Router) + TypeScript (strict) + Tailwind CSS v4
(@theme tokens in globals.css) + GSAP 3.13+ with @gsap/react (useGSAP) using ScrollTrigger,
SplitText, Flip, DrawSVGPlugin, ScrambleTextPlugin and CustomEase + Lenis smooth scroll
+ Vercel AI SDK for the chatbot + Resend for the contact form + Zod + Upstash rate limit.

DESIGN:
- Palette: paper #F4F1EA, ink #1A1A1A, press-red #D93A2B, graphite #8A847A, mustard #E8B94A.
  Night Edition (dark): paper #14130F, ink #EDE8DC.
- Fonts via next/font: Fraunces (display), Newsreader (body), JetBrains Mono (labels/meta).
- 12-column editorial grid, thin black rules, drop caps, mono kickers, section numbers
  ("No. 03"), square corners (max 2px radius), subtle paper-grain texture.
- Asymmetric layouts. It must look hand-designed, NOT like an AI/template website.
  Obey every item in the ROLE.md "Banned Patterns" list.

ANIMATION: Advanced, award-level GSAP motion themed around ink, paper and the printing
press, exactly as listed in ARCHITECTURE.md §5 and PRD.md §10 (A1–A15). Every animation:
uses useGSAP with a scope ref, is wrapped in gsap.matchMedia, respects
prefers-reduced-motion, animates only transform/opacity/clip-path, and disables heavy
effects (pinning, horizontal scroll, custom cursor) on mobile/touch.

MY DETAILS:
[paste the filled "My Details" block here]

RULES:
- Work in the phases listed below. Do ONLY the current phase, then stop and give me:
  files changed, how to test, and decisions you made.
- Put all content in /content as typed data. Use realistic placeholder content marked
  with // TODO(content) where my real data is missing.
- No new dependencies outside the approved list without asking.
- No TypeScript errors, no hydration warnings, no console errors.

Start with PHASE 1 now.
```

---

## PHASE PROMPTS

### Phase 1 — Project Setup & Design System
```
PHASE 1: Set up the project.
1. Create a Next.js app (App Router, TypeScript strict, ESLint, src-less structure as in
   ARCHITECTURE.md §2). Install the approved dependencies.
2. Configure Tailwind CSS v4 with all design tokens from ARCHITECTURE.md §4 in
   app/globals.css, including the Night Edition overrides via [data-theme="night"].
3. Load Fraunces, Newsreader and JetBrains Mono with next/font and map them to the
   --font-display, --font-body and --font-mono tokens.
4. Add the paper-grain texture, base typography, fluid type scale with clamp(),
   focus-visible styles (press-red), selection colour and skip-to-content link.
5. Create lib/gsap.ts (plugin registry + custom eases), lib/utils.ts (cn), lib/types.ts.
6. Create all /content files with typed placeholder data based on MY DETAILS.
7. Build components/ui: Rule, Tag (mono), Button (square, ink border), Stamp, Kicker.
Stop after this phase.
```

### Phase 2 — Layout Shell
```
PHASE 2: Build the global layout.
1. Masthead: newspaper title, meta row (VOL. 01 · ISSUE [day of year] · [CITY] · live
   date), nav links, "Print Edition" button, Morning/Night Edition theme toggle (persists,
   no flash on load). Mobile: full-screen "Index" menu.
2. NewsTicker (static version for now).
3. SectionHeader component: section number, mono kicker, serif headline, full-width rule.
4. Footer "Colophon" with socials, back-to-top, credits line.
5. Root layout with landmarks, metadata, Vercel Analytics.
No animations yet. Stop after this phase.
```

### Phase 3 — All Sections (static, fully responsive)
```
PHASE 3: Build every section from PRD.md §6 without animation, fully responsive at
375 / 768 / 1440px:
Hero (Front Page), TechStack (The Classifieds), Projects (Feature Stories with lead +
secondary stories and category filter), Experience (The Archives with SVG timeline line),
Education (Back Issues), Certifications (Credentials stamps), Now (Currently),
Testimonials (Reader Letters), Contact (Letters to the Editor letter-style form UI only).
Follow the layout notes in the PRD exactly. Use asymmetric editorial grids, drop caps and
column rules. Re-check the ROLE.md banned patterns before finishing. Stop after this phase.
```

### Phase 4 — GSAP Motion System (the advanced animations)
```
PHASE 4: Implement the full GSAP animation system from ARCHITECTURE.md §5 and PRD.md §10.

Foundation:
- SmoothScroll.tsx: Lenis synced with ScrollTrigger (lenis.on('scroll', ScrollTrigger.update),
  gsap.ticker drives lenis.raf, lagSmoothing(0)). Disabled for reduced motion.
- Reusable motion components: SplitReveal (SplitText lines with mask:"lines",
  autoSplit:true, waits for document.fonts.ready), InkReveal (clip-path wipe + scale),
  DrawRule (scaleX from left), Scramble (ScrambleTextPlugin, mono charset), Magnetic
  (quickTo x/y), InkCursor (quickTo follow, grows on links, "READ" label on project cards,
  hidden on touch).
- Add a .js-motion class on <html> to set initial hidden states and avoid FOUC; content
  must remain visible if JS fails.

Section animations:
A1 Preloader "Printing Press": once per session, mono counter 000→100, ink roller wipe,
   masthead chars drop in with stagger, max 2.2s, skippable on click.
A2/A3 Hero: headline line-mask reveal (stagger 0.08), duotone photo ink-wipe reveal with
   scale 1.15→1, drop cap scale-in, magnetic CTAs.
A4 NewsTicker: seamless infinite loop (horizontalLoop helper) whose speed and direction
   react to ScrollTrigger velocity (smoothed with quickTo); pauses on hover/focus.
A5/A6 SectionHeader: kicker scrambles in, rule draws, headline lines rise.
A7 Classifieds: ScrollTrigger.batch drop-in; hover misregistration red shadow offset.
A8 Projects (desktop only): pin the section and scroll stories horizontally with
   containerAnimation; parallax images inside each card; mobile stays vertical.
A9 Project filter: Flip.getState → re-render → Flip.from with stagger.
A10 Experience: DrawSVG timeline scrubbed to scroll; entry dots ink in when reached;
   dates scramble.
A11 Certifications: stamps slam in (scale 1.6→1, random rotation ±8°, "stamp" ease,
   tiny container shake).
A13 Page transition: paper panel sweeps across showing the destination headline
   (TransitionLink plays exit timeline then router.push; template.tsx plays enter).
A15 Masthead shrinks into a slim bar after 120px scroll.

Requirements: useGSAP with scope everywhere, gsap.matchMedia with
(prefers-reduced-motion: no-preference) and (min-width: 1024px) conditions, only
transform/opacity/clip-path, ScrollTrigger.refresh() after images load, no layout shift,
smooth 60fps. Stop after this phase and list every animation with how to see it.
```

### Phase 5 — Case Studies & Resume
```
PHASE 5:
1. /projects/[slug] pages from MDX with generateStaticParams + generateMetadata.
   Layout per PRD §6.03: headline, standfirst, hero image, meta sidebar, sections
   (The Problem, The Approach, The Hard Part, The Result, What I'd Do Differently),
   captioned gallery, "Next Story →". Style MDX elements editorially (drop cap, pull quotes,
   captions). Add page-turn transition and section reveals.
2. /resume "The Print Edition" page: inline PDF viewer (iframe #view=FitH), Download button
   (download="[YOUR-NAME]-Resume.pdf"), mobile fallback (preview + open in new tab),
   track("resume_download") with Vercel Analytics.
Stop after this phase.
```

### Phase 6 — Contact & Chatbot
```
PHASE 6:
1. Contact: /api/contact route with Zod validation, honeypot, Upstash rate limit
   (3/hour/IP), Resend + React Email template. Client form with inline errors, loading
   state, and A12 animation: on success the letter folds into an envelope, slides out
   and a "POSTED" stamp appears. Accessible and keyboard friendly.
2. Interview Desk chatbot: /api/chat with Vercel AI SDK streamText, provider from env,
   system prompt + content/chatbot-knowledge.md as described in ARCHITECTURE.md §6,
   Zod validation (500 chars/message, last 20 messages), Upstash rate limit (15/10min/IP).
   UI: "INTERVIEW DESK" edge tab → notepad panel (lined paper, mono labels) that slides up
   with GSAP, 4 suggested question chips, streaming answers, aria-live="polite",
   focus trap, Esc to close, mobile bottom sheet. Lazy-load the panel with next/dynamic.
3. Write content/chatbot-knowledge.md from my details with clear headings
   (About, Skills, Projects, Experience, Education, Certifications, Availability, Contact,
   FAQ).
Stop after this phase.
```

### Phase 7 — Polish, SEO, Accessibility, Performance
```
PHASE 7:
1. Night Edition: verify every section and animation in dark mode.
2. SEO: metadata, opengraph-image.tsx (mini newspaper front page with my name + role),
   sitemap.ts, robots.ts, JSON-LD Person schema with sameAs socials.
3. 404 page: "This story was never printed" with a link back to the front page.
4. Accessibility audit: landmarks, alt text, contrast AA, keyboard flow, reduced-motion
   check of every animation.
5. Performance: next/image everywhere, priority only on hero photo, lazy load chatbot,
   check bundle size (< 200KB first-load JS on home), no CLS from fonts or SplitText.
6. Final review against GOALS.md success metrics and ROLE.md Definition of Done.
   Give me a checklist of what passes and anything I still need to provide (TODO(content)).
```

---

## Quick Fix Prompts (use anytime)

**If it starts looking generic:**
```
This section looks like a generic AI template. Re-read ROLE.md §4 (Banned Patterns) and
the newspaper concept. Redesign it so it looks like it was printed in a real newspaper:
asymmetric grid, serif headline, mono kicker, rules, real editorial hierarchy.
```

**If animations feel janky:**
```
The animations stutter. Audit every GSAP tween: animate only transform/opacity/clip-path,
add will-change only during the animation, check that ScrollTrigger is refreshed after
images and fonts load, remove duplicate triggers, and make sure Lenis and ScrollTrigger
are synced via gsap.ticker. Report what you changed.
```

**If SplitText breaks on resize:**
```
Use SplitText.create with autoSplit: true and build the animation inside onSplit(self)
returning the tween, wait for document.fonts.ready first, and use mask: "lines".
```

**To add a new project later:**
```
Add a new project to content/projects.ts and create content/projects/[slug].mdx using the
existing case-study structure. Details: [title, summary, stack, links, problem, approach,
hard part, results].
```
