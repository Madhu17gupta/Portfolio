export interface TechTool {
  name: string;
  /** Short monogram shown on the tool's tile. */
  mark: string;
}

export interface TechGroup {
  number: string;
  title: string;
  description: string;
  accent: string;
  /** How many of the 6 grid columns this card takes on desktop. */
  span: number;
  tools: TechTool[];
}

export const techGroups: TechGroup[] = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that look considered and work across screen sizes.",
    accent: "#0e776b",
    span: 4,
    tools: [
      { name: "React", mark: "Re" },
      { name: "Next.js", mark: "Nx" },
      { name: "TypeScript", mark: "TS" },
      { name: "JavaScript", mark: "JS" },
      { name: "HTML & CSS", mark: "</>" },
    ],
  },
  {
    number: "02",
    title: "Styling & UI",
    description: "Clear layouts, reusable components, and responsive details.",
    accent: "#c96242",
    span: 2,
    tools: [
      { name: "Tailwind CSS", mark: "Tw" },
      { name: "Responsive design", mark: "Rd" },
      { name: "Component systems", mark: "Cs" },
      { name: "Accessibility", mark: "A11y" },
    ],
  },
  {
    number: "03",
    title: "Backend & data",
    description: "The APIs and data layer behind useful web experiences.",
    accent: "#3a6ea5",
    span: 3,
    tools: [
      { name: "Node.js", mark: "No" },
      { name: "Express", mark: "Ex" },
      { name: "REST APIs", mark: "{ }" },
      { name: "MongoDB", mark: "Mo" },
      { name: "Firebase", mark: "Fb" },
    ],
  },
  {
    number: "04",
    title: "Workflow",
    description: "Tools for building, iterating, and sharing work.",
    accent: "#7a5ea8",
    span: 3,
    tools: [
      { name: "Git", mark: "Gi" },
      { name: "GitHub", mark: "Gh" },
      { name: "Vite", mark: "Vi" },
      { name: "Deployment", mark: "Dp" },
    ],
  },
];

/** Flat list used by the ticker above the grid. */
export const tickerTools = techGroups.flatMap((group) =>
  group.tools.map((tool) => tool.name)
);
