import { StackSection } from "@/lib/types";

export const stackSections: StackSection[] = [
  {
    category: "Frontend Architecture",
    ads: [
      {
        label: "FOR HIRE:",
        name: "Next.js / React 19",
        proof: "4+ yrs · Server Components, SSR, sub-second LCP on 10+ web apps",
        featured: true,
      },
      {
        label: "FOR HIRE:",
        name: "TypeScript (Strict)",
        proof: "3+ yrs · Zero `any`, typed RPC APIs, end-to-end schema safety",
      },
      {
        label: "FOR HIRE:",
        name: "Tailwind CSS v4 & CSS Modules",
        proof: "Design tokens, fluid typographic scales, pixel-accurate editorial grids",
      },
      {
        label: "FOR HIRE:",
        name: "GSAP Motion Suite",
        proof: "ScrollTrigger, SplitText, DrawSVG, performant 60fps micro-interactions",
        featured: true,
      },
      {
        label: "FOR HIRE:",
        name: "State & Data Fetching",
        proof: "TanStack Query, Zustand, optimistic UI updates, zero hydration mismatch",
      },
    ],
  },
  {
    category: "Backend & Systems",
    ads: [
      {
        label: "FOR HIRE:",
        name: "Node.js & Express / Fastify",
        proof: "High-throughput REST & WebSocket services handling 50k+ daily events",
        featured: true,
      },
      {
        label: "FOR HIRE:",
        name: "Python & FastAPI",
        proof: "Async microservices, background job workers, vector search pipelines",
      },
      {
        label: "FOR HIRE:",
        name: "REST, GraphQL & tRPC",
        proof: "Contract-first schemas, Zod validation pipelines, resilient error boundaries",
      },
      {
        label: "FOR HIRE:",
        name: "Auth & Security",
        proof: "NextAuth / Auth.js, JWT revocation, RBAC, OAuth2, rate-limiting guards",
      },
    ],
  },
  {
    category: "Databases & Caching",
    ads: [
      {
        label: "FOR HIRE:",
        name: "PostgreSQL & Prisma / Drizzle",
        proof: "Relational modeling, composite indexes, query plan optimization",
        featured: true,
      },
      {
        label: "FOR HIRE:",
        name: "Redis & Upstash",
        proof: "Sliding-window rate limiting, session store, hot-cache invalidation",
      },
      {
        label: "FOR HIRE:",
        name: "MongoDB & Mongoose",
        proof: "Document stores, aggregation pipelines, scalable replica clusters",
      },
    ],
  },
  {
    category: "DevOps & Cloud Infrastructure",
    ads: [
      {
        label: "FOR HIRE:",
        name: "Docker & Containerization",
        proof: "Multi-stage production builds, isolated dev environments, compose stacks",
      },
      {
        label: "FOR HIRE:",
        name: "AWS & Vercel Edge",
        proof: "S3, Lambda, CloudFront CDN, serverless edge middleware deployments",
      },
      {
        label: "FOR HIRE:",
        name: "CI/CD & Testing",
        proof: "GitHub Actions, automated lint/build test runners, Vitest, Playwright",
      },
    ],
  },
  {
    category: "Dispatches: Currently Exploring",
    ads: [
      {
        label: "WANTED:",
        name: "LLM Agents & Tool Use",
        proof: "Vercel AI SDK, LangChain, semantic embeddings, streaming rag pipelines",
        featured: true,
      },
      {
        label: "WANTED:",
        name: "Rust & WASM",
        proof: "Memory safety paradigms, low-latency utility tooling for the web",
      },
    ],
  },
];
