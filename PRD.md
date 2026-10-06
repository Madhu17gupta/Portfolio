# PRD.md — Product Requirements Document
## "The [YOUR NAME] Daily" — Editorial Developer Portfolio

| Field | Value |
|---|---|
| Owner | [YOUR NAME] |
| Version | 1.0 |
| Stack | Next.js (App Router) · TypeScript · Tailwind CSS v4 · GSAP |
| Related docs | ROLE.md · GOALS.md · ARCHITECTURE.md · PROMPT.md |

---

## 1. Product Summary

A personal portfolio website designed as a **printed newspaper**. Visitors "read" about [YOUR NAME]: the front page introduces them, feature stories show projects, the archives show experience, and the classifieds list the tech stack. It includes a viewable/downloadable resume ("The Print Edition"), social links, a contact form ("Letters to the Editor") and an AI chatbot ("The Interview Desk") that answers questions about [YOUR NAME]. Advanced GSAP animations themed around ink, paper and printing presses bring it to life.

---

## 2. Target Users

| Persona | Need | Key feature |
|---|---|---|
| **Riya, Recruiter** | Quick check: role, skills, availability, resume | Hero + Print Edition button |
| **Arjun, Tech Lead** | Judge depth and code quality | Feature Stories (case studies) |
| **Meera, Startup Founder** | Hire a freelancer she can trust | Projects + testimonials + contact |
| **Dev visitors** | Inspiration | The site's craft and motion |

---

## 3. User Stories

1. As a recruiter, I can **view and download the resume** within 2 clicks from any page.
2. As a recruiter, I can see **role, location and "open to work" status** in the first screen.
3. As a tech lead, I can open a project and read **problem, approach, tech, challenges and results**.
4. As any visitor, I can **ask the chatbot** about skills, projects or availability and get an instant answer.
5. As any visitor, I can **send a message** and get confirmation it was sent.
6. As any visitor, I can find **GitHub, LinkedIn, X/Twitter and email** links easily.
7. As a visitor with motion sensitivity, I get a **calm, non-animated** version automatically.
8. As a mobile visitor, everything is **readable and usable** at 375px.

---

## 4. Information Architecture

```
Front Page (/)
 ├─ Masthead + Nav + News Ticker
 ├─ 01 Hero ................ "Front Page"
 ├─ 02 Tech Stack .......... "The Classifieds"
 ├─ 03 Projects ............ "Feature Stories"  → /projects/[slug]
 ├─ 04 Experience .......... "The Archives"
 ├─ 05 Education ........... "Back Issues"
 ├─ 06 Certifications ...... "Credentials"
 ├─ 07 Now ................. "Currently" (extra)
 ├─ 08 Testimonials ........ "Reader Letters" (extra)
 ├─ 09 Contact ............. "Letters to the Editor"
 └─ Footer ("Colophon") + socials
/resume ...................... "The Print Edition"
Global: Interview Desk chatbot · Ink cursor · Theme toggle · Page transitions
```

Section numbers ("No. 03") appear in mono next to each section headline, like page numbers in a paper.

---

## 5. Global Elements

### 5.1 Masthead (sticky, compact on scroll)
- **Content:** "THE [YOUR NAME] DAILY" title; meta row: `VOL. 01 · ISSUE [auto day of year] · [CITY], INDIA · [live date]`; nav links (Stories, Classifieds, Archives, Credentials, Letters); **"Print Edition"** button (resume); theme toggle ("Morning / Night Edition").
- **Behaviour:** full-size on load; on scroll down it shrinks into a slim bar (GSAP ScrollTrigger toggles a timeline). Mobile: hamburger opens a full-screen "Index" page listing sections like a newspaper contents page.
- **Acceptance:** nav scrolls smoothly to sections; active section is underlined in press-red.

### 5.2 News Ticker
- Breaking-news strip under the masthead: "BREAKING: [NAME] ships [project] · NOW OPEN TO FULL-TIME ROLES · CURRENTLY LEARNING [X] · ..."
- Infinite loop; speed reacts to scroll velocity; pauses on hover/focus.

### 5.3 Preloader ("Printing Press")
- First visit per session only (sessionStorage flag). Max 2.2 seconds, skippable on click.
- Mono counter 000→100, an ink roller bar wipes across, masthead chars drop into place, then the page reveals.
- Reduced motion: no preloader.

### 5.4 Ink Cursor (desktop only)
- 10px ink dot following the mouse with lag (`quickTo`). On links it scales up; on project cards it becomes a circle with "READ". Hidden on touch devices.

### 5.5 Page Transition
- Navigating to/from a case study: a paper panel sweeps across with the destination's headline in Fraunces, then sweeps away.

### 5.6 Footer ("Colophon")
- "Printed with Next.js, Tailwind CSS & GSAP. Set in Fraunces, Newsreader & JetBrains Mono."
- Social links as text (GitHub, LinkedIn, X, Email, + optional LeetCode/Dribbble).
- "Back to top ↑" link, copyright line, last-updated date.

---

## 6. Section Requirements

### 01 · Home — "Front Page"
**Content:** big headline (e.g. *"Local Developer Builds Fast, Accessible Web Apps; Recruiters Take Notice"*), standfirst (1–2 sentence intro), duotone photo with caption, byline with role + location, availability badge ("NOW HIRING ME: Open to full-time & freelance"), CTAs: "Read the Stories" and "Get the Print Edition".
**Layout:** 12-col grid. Headline spans 8 cols, photo 4 cols. Standfirst set in two text columns with a drop cap.
**Animation:** SplitText line-mask reveal on headline (stagger 0.08s), photo ink-wipe reveal + scale, drop cap scales in, CTAs magnetic.
**Acceptance:** name, role, location, availability and resume button visible above the fold at 1440×900 and 375×812.

### 02 · Tech Stack — "The Classifieds"
**Content:** grouped ads: Frontend, Backend, Database, DevOps/Tools, Currently Learning. Each ad: `WANTED:` / `FOR HIRE:` label, tech name, one line of proof ("2 yrs · used in 5 projects"), small monochrome logo (optional).
**Layout:** dense multi-column grid with thin column rules, varied ad sizes (some span 2 cols) for a real classifieds look.
**Animation:** `ScrollTrigger.batch` drop-in; hover = red misregistration shadow offset; category headings scramble in.
**Acceptance:** no progress bars or percentages; every tech has a proof line.

### 03 · Projects — "Feature Stories"
**Content per project:** title, kicker (category), standfirst, cover image, tech tags (mono), year, role, links (Live, GitHub, Case Study).
**Layout:** 1 lead story (large) + 3–5 secondary stories. Desktop: pinned horizontal scroll strip of stories. Mobile: vertical stack.
**Filter:** All / Web Apps / AI / Open Source, with a Flip animation on re-layout.
**Case study page `/projects/[slug]` (MDX):** headline, standfirst, hero image, meta sidebar (role, timeline, stack, links), sections: *The Problem · The Approach · The Hard Part · The Result (with numbers) · What I'd Do Differently*, image gallery with captions, "Next Story →".
**Animation:** horizontal scroll with `containerAnimation`, image parallax inside cards, cursor "READ" label, page-turn transition.
**Acceptance:** minimum 3 projects; each has a working live or GitHub link; case study is readable without JS.

### 04 · Experience — "The Archives"
**Content per role:** dates, company, title, location/remote, 2–4 achievement bullets with numbers, tech used.
**Layout:** vertical timeline. Dates in mono on the left, SVG line in the middle, entries on the right.
**Animation:** DrawSVG line scrubbed to scroll; a dot "inks" at each entry as the line reaches it; dates scramble.
**Acceptance:** reverse-chronological; include internships/freelance if no full-time roles.

### 05 · Education — "Back Issues"
**Content:** degree, institution, years, CGPA/percentage (optional), one highlight (project/club/rank).
**Layout:** 2–3 compact "old edition" cards with a slightly darker, aged paper tone.
**Animation:** cards slide up with slight rotation that settles to 0.

### 06 · Certifications — "Credentials"
**Content:** name, issuer, date, credential ID, verify URL.
**Layout:** grid of circular/rectangular rubber-stamp badges in press-red or ink, slight random rotation.
**Animation:** stamps slam in one by one (scale 1.6 → 1, `stamp` ease) with a tiny shake.
**Acceptance:** every stamp links to its verification page (opens in a new tab).

### 07 · Now — "Currently" *(extra)*
Small single-column box: building, learning, reading, "last updated" date.

### 08 · Testimonials — "Reader Letters" *(extra, optional)*
2–4 quotes in italic serif with name, role, company. Simple fade/slide reveal.

### 09 · Contact — "Letters to the Editor"
**Content:** short intro, letter-style form: "Dear [NAME]," → message textarea → "Signed," name + email fields → "Post Letter" button. Hidden honeypot field. Direct email + social links beside it.
**Validation:** name 2–80 chars, valid email, message 10–2000 chars. Inline errors.
**Animation:** letter unfolds on enter; on success the letter folds into an envelope, slides off and a "POSTED" stamp appears with the confirmation text.
**Acceptance:** email arrives in the owner's inbox; success + error states visible; works by keyboard; rate limited.

---

## 7. Resume — "The Print Edition"
- Accessible from masthead, hero CTA, footer and chatbot answers.
- `/resume` page shows the PDF inline with a **Download** button and a "Back to Front Page" link.
- On mobile (where inline PDF may fail) show a preview image of page 1 + Download + "Open in new tab".
- **Acceptance:** downloaded file is named `[YOUR-NAME]-Resume.pdf`; download event is tracked.

---

## 8. Chatbot — "The Interview Desk"
- Bottom-right edge tab: "INTERVIEW DESK".
- Opens a notepad panel: header "Ask the Editor", 4 suggested chips (*"What's [NAME]'s strongest project?"*, *"What tech does [NAME] use?"*, *"Is [NAME] open to work?"*, *"How can I contact [NAME]?"*), streaming answers, input, close.
- Answers only from `content/chatbot-knowledge.md`; politely refuses off-topic requests; max ~80 words per answer.
- Limits: 500 chars per message, 15 requests / 10 min per IP; friendly message when limit is hit.
- **Acceptance:** first token appears in < 2s; panel is keyboard accessible (Tab, Esc to close, focus trap); works on mobile as a bottom sheet.

---

## 9. Social Links
GitHub, LinkedIn, X/Twitter, Email (+ optional LeetCode, Dribbble, Medium/Hashnode). Shown in hero byline (compact), contact section and footer. All from `content/profile.ts`. External links use `target="_blank" rel="noopener noreferrer"`.

---

## 10. Animation Specification Summary

| ID | Name | Trigger | Duration | Ease | Mobile | Reduced motion |
|---|---|---|---|---|---|---|
| A1 | Printing-press preloader | First load | ≤ 2.2s | inkPress | Yes (shorter) | Off |
| A2 | Headline line reveal | Enter viewport | 0.9s + stagger 0.08 | inkPress | Yes | Show instantly |
| A3 | Ink-wipe image reveal | Enter viewport | 1.1s | inkPress | Yes | Show instantly |
| A4 | Velocity ticker | Always | Loop | none | Yes (no velocity) | Static text |
| A5 | Rule draw | Enter viewport | 0.8s | inkPress | Yes | Static rule |
| A6 | Scramble kicker | Enter viewport | 0.6s | none | Yes | Plain text |
| A7 | Classifieds batch drop | Scroll batch | 0.6s | power3.out | Yes | Off |
| A8 | Horizontal stories pin | Scroll (scrub) | Scroll-linked | none | **No** (vertical) | Off |
| A9 | Project filter | Click | 0.6s | inkPress | Yes | Instant |
| A10 | Timeline DrawSVG | Scroll (scrub) | Scroll-linked | none | Yes | Full line |
| A11 | Stamp slam | Enter viewport | 0.5s each | stamp | Yes | Off |
| A12 | Letter fold / envelope | Submit success | 1.4s | inkPress | Yes | Fade only |
| A13 | Page-turn transition | Route change | 0.9s total | inkPress | Yes | Off |
| A14 | Ink cursor + magnetic | Mouse move | quickTo 0.4s | power3 | **No** | Off |
| A15 | Masthead shrink | Scroll > 120px | 0.4s | power2.out | Yes | Instant |

---

## 11. Non-Functional Requirements
- **Performance:** see GOALS.md §6 (Lighthouse ≥ 90 mobile, LCP < 2.5s, CLS < 0.1).
- **Accessibility:** WCAG 2.1 AA, semantic landmarks, skip-to-content link, focus-visible styles in press-red, all animations respect reduced motion, chatbot announces new messages with `aria-live="polite"`.
- **Browser support:** latest 2 versions of Chrome, Edge, Firefox, Safari (desktop + iOS), Chrome Android.
- **Security:** API keys only on the server; Zod validation; rate limiting; honeypot; no user data stored.
- **SEO:** metadata, OG image, sitemap, robots, JSON-LD Person.
- **Maintainability:** all content in `/content`; adding a project = add one entry + one MDX file.

---

## 12. Content the Owner Must Provide
- [ ] Full name, role title, city, availability status
- [ ] Short bio (2–3 sentences) + longer "about" for the chatbot
- [ ] Professional photo (will be converted to duotone)
- [ ] Tech stack list with one proof line each
- [ ] 3–6 projects: title, summary, images, links, case-study notes, results with numbers
- [ ] Experience entries with achievements
- [ ] Education details
- [ ] Certifications with verification URLs
- [ ] Resume PDF
- [ ] Social profile URLs + contact email
- [ ] 2–4 testimonials (optional)
- [ ] FAQ answers for the chatbot (availability, notice period, preferred roles, relocation)

---

## 13. Release Plan

| Milestone | Scope |
|---|---|
| M1 — Foundation | Setup, design tokens, fonts, masthead, footer, content types |
| M2 — Sections (static) | All sections built responsive, no animation |
| M3 — Motion | GSAP system, Lenis, all animations A1–A15 |
| M4 — Features | Case study pages, resume page, contact API, chatbot |
| M5 — Polish & launch | Dark mode, a11y audit, SEO, performance, deploy |

---

## 14. Open Questions
1. Final newspaper name: "The [NAME] Daily", "The [NAME] Times" or "The [NAME] Gazette"?
2. Which LLM provider for the chatbot (Gemini/Groq free tier vs paid)?
3. Include a blog ("Opinion Column") in v1 or v2?
