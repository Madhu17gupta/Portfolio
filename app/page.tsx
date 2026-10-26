import Image from "next/image";
import portrait from "@/public/m2.jpeg";
import { site } from "@/content/site";
import { getGitHubContributions } from "@/lib/github";
import ProjectStory from "@/components/ProjectStory";

const stackGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that look considered and work across screen sizes.",
    tools: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    number: "02",
    title: "Styling & UI",
    description: "Clear layouts, reusable components, and responsive details.",
    tools: ["Tailwind CSS", "Responsive design", "Component systems", "Accessibility"],
  },
  {
    number: "03",
    title: "Backend & data",
    description: "The APIs and data layer behind useful web experiences.",
    tools: ["Node.js", "Express", "REST APIs", "MongoDB", "Firebase"],
  },
  {
    number: "04",
    title: "Workflow",
    description: "Tools for building, iterating, and sharing work.",
    tools: ["Git", "GitHub", "Vite", "Deployment"],
  },
];

const experience = [
  {
    period: "2026",
    title: "Building useful web applications",
    project: "Productivity Dashboard",
    description:
      "Worked through task flows, reusable React components, filtering, and local persistence in a TypeScript dashboard.",
    link: site.github + "/Productivity-Dashboard",
    tools: "React · TypeScript · Tailwind CSS",
  },
  {
    period: "2025–26",
    title: "Creating visual frontend experiences",
    project: "Spazio website",
    description:
      "Explored image-first presentation, page structure, and responsive layouts for a property-focused website.",
    link: site.github + "/spazio-website",
    tools: "React · JavaScript · Vite",
  },
  {
    period: "2026",
    title: "Developing a personal portfolio",
    project: "This website",
    description:
      "Bringing design and development together in a fast, accessible portfolio with live public GitHub activity.",
    link: site.github + "/Portfolio",
    tools: "Next.js · TypeScript · CSS",
  },
];

function SectionTitle({
  index,
  label,
  title,
  description,
  id,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  id: string;
}) {
  return (
    <div className="section-title" id={id}>
      <div className="section-title-main">
        <span className="section-label"><span>{index}</span> / {label}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default async function Home() {
  const contributions = await getGitHubContributions(site.githubUsername);

  return (
    <main id="main-content" className="portfolio">
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="#top" aria-label="Madhu Gupta, back to top">
            <span className="brand-symbol">m<span>.</span></span>
            <span className="brand-name">Madhu Gupta</span>
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Tech stack</a>
          </nav>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowIcon /></a>
        </div>
      </header>

      <section className="hero section-container" id="top" aria-labelledby="hero-heading">
        <div className="hero-text">
          <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="hero-overline">HELLO, I&apos;M MADHU GUPTA</p>
          <h1 id="hero-heading">I build digital<br />experiences that<br /><em>feel effortless.</em></h1>
          <p className="hero-description">
            A full-stack developer who loves turning ideas into responsive,
            useful products. I work across thoughtful interfaces and the
            engineering that makes them work.
          </p>
          <div className="hero-buttons">
            <a className="primary-link" href="#projects">Explore my work <ArrowIcon /></a>
            <a className="secondary-link" href="/resume">View resume <ArrowIcon /></a>
          </div>
          <div className="hero-quick-links">
            <span>BASED IN INDIA</span>
            <span className="quick-divider" />
            <a href={site.github} target="_blank" rel="noreferrer">GITHUB <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-backdrop" />
          <div className="portrait-frame">
            <Image
              src={portrait}
              alt="Portrait of Madhu Gupta"
              priority
              sizes="(max-width: 800px) 90vw, 480px"
            />
          </div>
          <div className="portrait-caption">
            <span className="caption-mark">{"<"}developer /{">"}</span>
            <span>DESIGN MINDED.<br />BUILD FOCUSED.</span>
          </div>
        </div>
      </section>

      <div className="specialties" aria-label="Focus areas">
        <div className="section-container specialties-inner">
          <span>FRONTEND DEVELOPMENT</span><i />
          <span>FULL-STACK THINKING</span><i />
          <span>THOUGHTFUL INTERFACES</span>
        </div>
      </div>

      <section className="about-section section-container section-space" aria-labelledby="about">
        <SectionTitle
          id="about"
          index="01"
          label="ABOUT ME"
          title="Developer by craft. Curious by nature."
        />
        <div className="about-layout">
          <div className="about-lead">
            <span className="tiny-label">A LITTLE ABOUT ME</span>
            <p>I care about the space where <em>good design</em> meets <em>solid engineering.</em></p>
          </div>
          <div className="about-body">
            <p>
              I&apos;m Madhu, a full-stack developer based in India. I enjoy
              building digital products that feel intuitive to use and are
              thoughtfully put together behind the scenes.
            </p>
            <p>
              My work spans React interfaces, TypeScript applications, and
              backend APIs. I like breaking big ideas into clear, manageable
              pieces and learning something new with every project.
            </p>
            <a className="inline-link" href="#experience">See how I work <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="projects-section section-space" aria-labelledby="projects">
        <div className="section-container">
          <SectionTitle
            id="projects"
            index="02"
            label="SELECTED PROJECTS"
            title="Things I&apos;ve built."
            description="Products and digital builds delivered at RETAIL ROCKETS — scroll through the story of each one."
          />
        </div>
        <ProjectStory />
        <div className="section-container">
          <a className="all-projects-link" href={site.github + "?tab=repositories"} target="_blank" rel="noreferrer">
            Explore all GitHub repositories <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="experience-section section-container section-space" aria-labelledby="experience">
        <SectionTitle
          id="experience"
          index="03"
          label="EXPERIENCE"
          title="Learning through building."
          description="Selected project experience, shown here until a formal work history is added."
        />
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-row" key={item.project}>
              <div className="experience-meta"><span>0{index + 1}</span><time>{item.period}</time></div>
              <div className="experience-content">
                <span className="experience-project">{item.project}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="experience-tools">{item.tools}</span>
              </div>
              <a className="experience-arrow" href={item.link} target="_blank" rel="noreferrer" aria-label={"View " + item.project + " on GitHub"}><ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section section-space" aria-labelledby="stack">
        <div className="section-container">
          <SectionTitle
            id="stack"
            index="04"
            label="TECH STACK"
            title="The tools behind the work."
            description="A practical toolkit for creating modern, responsive web applications."
          />
          <div className="stack-list">
            {stackGroups.map((group) => (
              <div className="stack-row" key={group.number}>
                <span className="stack-number">{group.number}</span>
                <div className="stack-heading"><h3>{group.title}</h3><p>{group.description}</p></div>
                <div className="stack-tags">{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="github-section section-container section-space" aria-labelledby="github">
        <SectionTitle
          id="github"
          index="05"
          label="GITHUB ACTIVITY"
          title="Always building."
          description="A live view of public contribution activity from my GitHub profile."
        />
        <div className="github-card">
          <div className="github-card-head">
            <div><span className="github-icon" aria-hidden="true">{"{ }"}</span><div><strong>@{site.githubUsername}</strong><span>PUBLIC ACTIVITY / PAST YEAR</span></div></div>
            <a href={site.github} target="_blank" rel="noreferrer">View profile <ArrowIcon /></a>
          </div>
          {contributions.length > 0 ? (
            <>
              <div className="graph-scroll">
                <div className="graph-inner">
                  <div className="contribution-grid" role="img" aria-label="GitHub contribution activity over the past year">
                    {contributions.map((day) => <span key={day.date} className={"contribution-day level-" + day.level} title={day.date + ": activity level " + day.level} />)}
                  </div>
                </div>
              </div>
              <div className="graph-footer">
                <span>UPDATED HOURLY FROM GITHUB</span>
                <div className="graph-legend"><span>LESS</span>{[0, 1, 2, 3, 4].map((level) => <i className={"level-" + level} key={level} />)}<span>MORE</span></div>
              </div>
            </>
          ) : (
            <p className="graph-fallback">The activity graph is unavailable right now. You can see it directly on <a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>.</p>
          )}
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact">
        <div className="section-container contact-inner">
          <div>
            <span className="section-label"><span>06</span> / CONTACT</span>
            <h2 id="contact">Have an idea?<br /><em>Let&apos;s build it.</em></h2>
            <p>Whether it&apos;s a role, a project, or a conversation about the web, I&apos;d be glad to connect.</p>
            <div className="contact-links">
              <a className="contact-primary" href={"mailto:" + site.email + "?subject=Hello%20Madhu"}>Send an email <ArrowIcon /></a>
              <a className="contact-secondary" href={site.github} target="_blank" rel="noreferrer">Find me on GitHub <ArrowIcon /></a>
            </div>
            {site.emailIsDemo && <span className="demo-note">Demo contact address — update it in content/site.ts before publishing.</span>}
          </div>
          <div className="contact-deco" aria-hidden="true"><span>{"<"}</span><strong>let&apos;s talk</strong><span>{"/>"}</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <a className="footer-brand" href="#top">Madhu Gupta<span>.</span></a>
          <p>Made with care, curiosity, and code.</p>
          <div><a href="/resume">Resume <ArrowIcon /></a><a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a><a href="#top">Back to top ↑</a></div>
          <small>© {new Date().getFullYear()} Madhu Gupta</small>
        </div>
      </footer>
    </main>
  );
}
