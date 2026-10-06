# GOALS.md — Why This Portfolio Exists

---

## 1. Primary Goal

Make **[YOUR NAME]** memorable enough that a recruiter or client **remembers the site a week later** and acts on it by downloading the resume, sending a message or scheduling an interview.

---

## 2. Business / Career Goals

| # | Goal | How the site achieves it |
|---|---|---|
| G1 | Get interview calls / freelance work | Resume one click away, clear "Open to work" status, frictionless contact |
| G2 | Prove real skill, not just claims | Case studies with problem → solution → result, live links, code |
| G3 | Stand out from 1000s of template portfolios | Strong editorial newspaper concept + crafted GSAP motion |
| G4 | Show frontend + motion expertise | The site itself is the strongest project |
| G5 | Answer common questions 24/7 | "Interview Desk" AI chatbot trained on my profile |

---

## 3. Visitor Goals

| Visitor | What they want | Time they'll give |
|---|---|---|
| Recruiter / HR | Name, role, location, availability, resume | 30–60 sec |
| Tech lead / hiring manager | Depth of projects, code quality, decisions | 3–5 min |
| Freelance client | Past work, trust, way to contact | 1–3 min |
| Fellow developer | Inspiration, how it was built | Varies |

**Rule:** a recruiter must be able to understand **who I am, what I do, and how to get my resume within 10 seconds** of landing.

---

## 4. Design Goals

1. A unique, cohesive **newspaper / editorial** identity across every page.
2. Typography-led design: serif headlines, mono metadata, real grid columns.
3. A warm print palette, never generic dark-mode-with-gradients.
4. Motion that feels like **ink, paper and printing press**, not generic fades.
5. Looks hand-designed and human, with **zero** "AI website" patterns (see ROLE.md §4).

---

## 5. Technical Goals

1. Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + GSAP**.
2. Content is easy to update: edit one TS/MDX file, redeploy.
3. Fast on a mid-range Android phone on 4G.
4. Accessible to keyboard and screen-reader users.
5. Fully SEO-ready (metadata, OG images, sitemap, JSON-LD).
6. Free or near-free to host and run (Vercel + free-tier LLM + Resend free tier).

---

## 6. Success Metrics

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility / Best Practices / SEO | 100 / 100 / 100 |
| LCP | < 2.5 s |
| CLS | < 0.1 |
| INP | < 200 ms |
| Animation frame rate | Smooth 60fps on desktop, no jank on mobile |
| Time to find resume | < 10 s |
| First JS load (home) | < 200 KB gzipped |
| Monthly resume downloads / contact messages | Track via Vercel Analytics, aim to grow month over month |

---

## 7. Non-Goals (What We Are NOT Building)

- A CMS or admin dashboard (content is in code)
- User accounts or login
- A complex blog platform (simple MDX only, optional)
- 3D / WebGL scenes (Three.js) — they fight the print concept and hurt performance
- Multi-language support (v1)
- E-commerce or payments
