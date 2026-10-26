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
  hosting?: string;
  tone: string;
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
      "Repacking instructions planned automatically from consumption-based allocation",
      "Supplier orders comparing current vs. previous year, exported as ready-to-send PDFs",
      "Sales dashboard for an instant view of store performance",
      "Role-based menus and permissions for every user",
    ],
    stack: ["Electron", "React", "Node.js", "Oracle", "SQL Server", "SQLite"],
    value:
      "Fast, accurate label printing, data-driven refills and repacking, and complete store operations in one tool.",
    role: "Product concept, solution architecture, module design and delivery",
    hosting:
      "3-layer scale-out: a RETAIL ROCKETS cloud server for licensing and auto-upgrades, a dedicated LaunchPad server at each client, and store PCs reading live ERP data.",
    tone: "amber",
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
      "Category management to organise credentials by system, client or purpose",
      "Controlled sharing between team members, managed by the admin",
      "Full audit logs recording every change with old and new values, user and time",
      "Mobile and web access for the team anywhere",
      "Complete user manuals and setup guides included",
    ],
    stack: ["Flutter", "ASP.NET Core", "SQL Server"],
    value:
      "One secure home for all company credentials with bank-grade encryption and full accountability.",
    role: "Product concept, security design, development and documentation",
    live: { label: "bb.retailrockets.in", url: "https://bb.retailrockets.in" },
    tone: "slate",
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
    hosting: "Running live with a food retail client.",
    tone: "teal",
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
    tone: "rust",
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
      "Featured projects with a detailed view for each — flat interiors and landscape design",
      "Credibility stats upfront: 500+ projects, 200+ on-site executions, 20+ years",
      "Lead capture through “Plan Your Space”, WhatsApp chat, email and newsletter signup",
      "Service coverage across Mumbai, Pune and Pan India",
      "Fully responsive Home, About, Services, Gallery and Contact pages",
    ],
    stack: ["React", "Responsive design", "Netlify"],
    value:
      "An elegant online portfolio that showcases the studio's work and brings in a steady flow of enquiries.",
    role: "Website concept, structure and delivery",
    live: {
      label: "spaziointeriors.netlify.app",
      url: "https://spaziointeriors.netlify.app",
    },
    hosting: "Hosted on Netlify.",
    tone: "green",
  },
];
