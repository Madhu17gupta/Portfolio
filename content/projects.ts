import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "chronicle-analytics",
    title: "Chronicle: High-Throughput Real-Time Analytics & Editorial Dashboard",
    kicker: "LEAD STORY · FULL-STACK PLATFORM",
    category: "Full-Stack",
    lead: true,
    standfirst:
      "Engineered an event-driven analytics pipeline processing 40M+ monthly telemetry pings with sub-50ms query latencies and interactive canvas charts.",
    coverImage: "/images/projects/chronicle.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "ClickHouse", "Redis", "GSAP"],
    year: "2025",
    role: "Lead Full-Stack Architect",
    liveUrl: "https://chronicle-analytics.demo.dev",
    githubUrl: "https://github.com/madhugupta/chronicle-analytics",
    metrics: [
      { label: "P99 Query Latency", value: "< 48ms" },
      { label: "Ingestion Volume", value: "1.2k pings/sec" },
      { label: "Lighthouse Score", value: "99 / 100" },
    ],
  },
  {
    slug: "herald-commerce",
    title: "The Herald: Sub-Second Headless Commerce with Edge Cart Sync",
    kicker: "FEATURE · WEB APP",
    category: "Web Apps",
    standfirst:
      "A headless storefront delivering instant page transitions, optimistic cart synchronization, and localized pricing across 12 international markets.",
    coverImage: "/images/projects/herald.png",
    tags: ["Next.js App Router", "Tailwind CSS", "Shopify Storefront API", "Stripe"],
    year: "2024",
    role: "Frontend & API Specialist",
    liveUrl: "https://herald-commerce.demo.dev",
    githubUrl: "https://github.com/madhugupta/herald-commerce",
    metrics: [
      { label: "Checkout Conversion", value: "+ 28%" },
      { label: "Average First Load", value: "0.8s" },
    ],
  },
  {
    slug: "nexus-dispatch",
    title: "Nexus Dispatch: Distributed Job Worker & Scheduled Pipeline",
    kicker: "SYSTEMS · BACKEND",
    category: "Full-Stack",
    standfirst:
      "A fault-tolerant distributed queue runner built on Redis streams, featuring automatic retry backoffs, deduplication locks, and zero data loss.",
    coverImage: "/images/projects/nexus.png",
    tags: ["Node.js", "Fastify", "Redis Streams", "Docker", "Prometheus"],
    year: "2024",
    role: "Backend Engineer",
    liveUrl: "https://nexus-dispatch.demo.dev",
    githubUrl: "https://github.com/madhugupta/nexus-dispatch",
    metrics: [
      { label: "Uptime Record", value: "99.98%" },
      { label: "Max Concurrency", value: "5,000 workers" },
    ],
  },
  {
    slug: "scribe-ai",
    title: "Scribe: Local-First Research Notebook with Vector Retrieval",
    kicker: "INNOVATION · AI",
    category: "AI",
    standfirst:
      "An offline-first personal knowledge base integrating local embeddings, hybrid semantic vector search, and streaming LLM synthesis.",
    coverImage: "/images/projects/scribe.png",
    tags: ["TypeScript", "Vercel AI SDK", "SQLite / Wasm", "Vector Embeddings"],
    year: "2025",
    role: "Creator & Maintainer",
    liveUrl: "https://scribe-ai.demo.dev",
    githubUrl: "https://github.com/madhugupta/scribe-ai",
    metrics: [
      { label: "Query Time", value: "14ms" },
      { label: "GitHub Stars", value: "480+" },
    ],
  },
  {
    slug: "press-tokens",
    title: "Press Tokens: Zero-Runtime Editorial Design System for React",
    kicker: "COMMUNITY · OPEN SOURCE",
    category: "Open Source",
    standfirst:
      "An open-source collection of print-inspired layout primitives, typographic scales, and CSS grid utilities tailored for editorial publications.",
    coverImage: "/images/projects/press-tokens.png",
    tags: ["React 19", "Tailwind CSS v4", "TypeScript", "npm package"],
    year: "2025",
    role: "Author",
    liveUrl: "https://press-tokens.demo.dev",
    githubUrl: "https://github.com/madhugupta/press-tokens",
    metrics: [
      { label: "Weekly Downloads", value: "1.8k" },
      { label: "Bundle Footprint", value: "1.4 KB" },
    ],
  },
];
