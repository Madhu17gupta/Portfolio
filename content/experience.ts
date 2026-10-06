import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    company: "Vanguard Tech Labs",
    title: "Senior Full-Stack Engineer",
    period: "2023 — PRESENT",
    location: "Mumbai, India (Hybrid)",
    type: "Full-Time",
    bullets: [
      "Architected a Next.js App Router migration for a flagship SaaS platform, trimming client JS bundles by 42% and dropping initial paint from 2.4s to 0.7s.",
      "Engineered an event-driven notification engine on Node.js and Redis streams handling over 1.2M daily transactional events with 99.99% delivery guarantee.",
      "Mentored a pod of 6 engineers on TypeScript strict practices, automated testing with Vitest/Playwright, and accessible component architectures.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    company: "Apex Digital Solutions",
    title: "Full-Stack Software Developer",
    period: "2021 — 2023",
    location: "Mumbai, India",
    type: "Full-Time",
    bullets: [
      "Developed high-traffic e-commerce and analytics interfaces serving 300k+ monthly active users, maintaining 99.9% uptime across seasonal spikes.",
      "Optimized slow PostgreSQL reporting queries by introducing composite indices and materialized views, cutting P95 response times by 68%.",
      "Built resilient RESTful microservices with Express, Zod validation, and automated OpenAPI documentation generators.",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Jest", "Git"],
  },
  {
    company: "Inovio Systems",
    title: "Frontend Engineering Intern",
    period: "2020 — 2021",
    location: "Mumbai, India",
    type: "Internship",
    bullets: [
      "Built reusable UI components conforming to WCAG 2.1 AA accessibility guidelines across 15 production dashboard views.",
      "Collaborated with product designers to implement responsive layouts and fluid interactions using CSS custom properties and JavaScript.",
    ],
    tech: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "Git", "Figma"],
  },
];
