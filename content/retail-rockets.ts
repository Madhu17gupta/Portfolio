export interface StoryProject {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  kind: string;
  overview: string;
  features: string[];
  stack: string[];
  value: string;
  role: string;
  live?: { label: string; url: string };
  note?: string;
  /** Visual identity used for the cinematic background shift. */
  accent: string;
  backdrop: string;
  glow: string;
  /** Where this panel flies in from, and where it leaves to. */
  enter: { x: number; y: number; rotate: number; scale: number };
  exit: { x: number; y: number; rotate: number; scale: number };
  /** Right-hand visual: a live iframe of the real site, a screenshot, or a product visual. */
  visual: "launchpad" | "vault" | "review" | "image" | "iframe";
}

export const retailRocketsIntro = {
  company: "RETAIL ROCKETS",
  tagline: "Your Business Co-Pilot",
  description:
    "Retail-focused software products and digital builds designed, architected and delivered for real business operations: store floors, warehouses, teams and customers.",
};

export const storyProjects: StoryProject[] = [
  {
    id: "launchpad",
    index: "01",
    name: "LaunchPad",
    subtitle: "Retail Label Printing & Store Operations Suite",
    kind: "Desktop product",
    overview:
      "A desktop application that brings label printing, stock refill, repacking and supplier ordering together in one place, running on live data from the retailer's ERP.",
    features: [
      "Shelf label printing with custom templates, barcodes and thermal auto-cut",
      "Stock refill with warehouse-wise filters that show exactly what goes to the shelf",
      "Repacking planned automatically from consumption-based allocation",
      "Supplier orders comparing current vs. previous year, exported as ready-to-send PDFs",
      "Sales dashboard and role-based access for every user",
    ],
    stack: ["Electron", "React", "Node.js", "Oracle", "SQL Server", "SQLite"],
    value:
      "Fast, accurate label printing, data-driven refills and repacking, and complete store operations in one tool.",
    role: "Product concept, solution architecture, module design and delivery",
    note: "3-layer architecture: a RETAIL ROCKETS cloud server for licensing and auto-upgrades, a dedicated LaunchPad server at each client, and store PCs on the client's own ERP.",
    accent: "#f0a365",
    backdrop: "#2a1a0e",
    glow: "rgba(240,163,101,.26)",
    enter: { x: 0, y: 0, rotate: 0, scale: 1 },
    exit: { x: -58, y: -16, rotate: -9, scale: 0.82 },
    visual: "launchpad",
  },
  {
    id: "blackbox",
    index: "02",
    name: "BlackBox Vault",
    subtitle: "Secure Credential Management System",
    kind: "Security product",
    overview:
      "A secure, centralised vault where teams store and share passwords, server logins and system credentials with complete control and accountability.",
    features: [
      "AES-256 encryption for every stored credential",
      "Category management by system, client or purpose",
      "Controlled sharing between team members, managed by the admin",
      "Full audit logs recording every change with old and new values, user and time",
      "Mobile and web access, with complete user manuals and setup guides",
    ],
    stack: ["Flutter", "ASP.NET Core", "SQL Server"],
    value:
      "One secure home for all company credentials with bank-grade encryption and full accountability.",
    role: "Product concept, security design, development and documentation",
    live: { label: "bb.retailrockets.in", url: "https://bb.retailrockets.in" },
    accent: "#8fb7d6",
    backdrop: "#0d1b2a",
    glow: "rgba(143,183,214,.22)",
    enter: { x: 72, y: 34, rotate: 10, scale: 1.12 },
    exit: { x: 12, y: -78, rotate: -7, scale: 0.86 },
    visual: "vault",
  },
  {
    id: "servicerr",
    index: "03",
    name: "ServiceRR",
    subtitle: "Customer Review Management Platform",
    kind: "Multi-tenant SaaS",
    overview:
      "A SaaS platform that helps retailers capture genuine customer reviews right at the store and turn customer voice into actionable insight.",
    features: [
      "QR and link-based review collection at billing counters and store touchpoints",
      "Device tracking to identify unique and repeat reviewers for authentic data",
      "Access Master for role-based admin and store-level access",
      "Multi-client SaaS with a dedicated, secure space for every retailer",
      "Secure HTTPS deployment on a production server",
    ],
    stack: ["ASP.NET Core", "Next.js", "SQL Server", "IIS"],
    value:
      "Verified customer feedback at store level, helping retailers continuously raise service quality.",
    role: "Product concept, platform architecture, deployment and client onboarding",
    live: {
      label: "review.retailrockets.in",
      url: "https://review.retailrockets.in",
    },
    note: "Running live with a food retail client.",
    accent: "#63cfbb",
    backdrop: "#07262a",
    glow: "rgba(99,207,187,.22)",
    enter: { x: -84, y: 28, rotate: -11, scale: 0.92 },
    exit: { x: 80, y: 10, rotate: 8, scale: 0.88 },
    visual: "review",
  },
  {
    id: "retailrockets",
    index: "04",
    name: "RETAIL ROCKETS",
    subtitle: "Corporate Brand & Services Website",
    kind: "Company website",
    overview:
      "The official website of RETAIL ROCKETS, presenting the firm as “Your Business Co-Pilot” for retail, manufacturing and B2B distribution businesses.",
    features: [
      "Consulting showcase across ERP systems, retail operations, warehouse consulting and process design",
      "Industry focus on retail, manufacturing and B2B distribution",
      "Product showcase for the full RETAIL ROCKETS software range",
      "Enquiry and contact flow for new business",
      "Professional brand identity in RETAIL ROCKETS colours",
    ],
    stack: ["Next.js", "Brand design", "Content structure"],
    value:
      "A strong brand platform that builds trust and connects consulting expertise with products.",
    role: "Brand positioning, content structure and website delivery",
    live: { label: "retailrockets.in", url: "https://retailrockets.in" },
    accent: "#7f8bf5",
    backdrop: "#15174a",
    glow: "rgba(127,139,245,.24)",
    enter: { x: 18, y: -86, rotate: 7, scale: 1.14 },
    exit: { x: -74, y: 26, rotate: -10, scale: 0.84 },
    visual: "image",
  },
  {
    id: "spazio",
    index: "05",
    name: "Spazio",
    subtitle: "Portfolio & Lead-Generation Website",
    kind: "Client website",
    overview:
      "A premium website for SPAZIO, an architectural and interior design studio with 20+ years of experience, built around its tagline “Spaces Worth Creating.”",
    features: [
      "Segment-wise portfolio: residential, commercial, industrial, turnkey, modern living and office interiors",
      "Featured projects with a detailed view — flat interiors and landscape design",
      "Credibility stats upfront: 500+ projects, 200+ on-site executions, 20+ years",
      "Lead capture through “Plan Your Space”, WhatsApp chat, email and newsletter signup",
      "Responsive Home, About, Services, Gallery and Contact pages, hosted on Netlify",
    ],
    stack: ["React", "Responsive design", "Netlify"],
    value:
      "An elegant online portfolio that showcases the studio's work and brings in a steady flow of enquiries.",
    role: "Website concept, structure and delivery",
    live: {
      label: "spaziointeriors.netlify.app",
      url: "https://spaziointeriors.netlify.app",
    },
    accent: "#c9a26b",
    backdrop: "#241c13",
    glow: "rgba(201,162,107,.24)",
    enter: { x: 64, y: 62, rotate: 8, scale: 0.9 },
    exit: { x: 0, y: -40, rotate: -4, scale: 0.94 },
    visual: "iframe",
  },
];
