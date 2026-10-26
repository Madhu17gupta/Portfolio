import Image from "next/image";
import m1 from "@/public/m1.jpeg";
import m2 from "@/public/m2.jpeg";
import m3 from "@/public/m3.jpeg";
import { getGitHubContributions } from "@/lib/github";
import { site } from "@/content/site";

const github = site.github;
const demoEmail = site.email;

const work = [
  {
    number: "01",
    title: "Productivity Dashboard",
    category: "WEB APPLICATION / TYPESCRIPT",
    description: "A personal workspace for organizing tasks, tracking progress, and making the day feel more manageable.",
    details: "React · TypeScript · Tailwind CSS",
    code: `${github}/Productivity-Dashboard`,
    live: "https://productivity-dashboard-self-eight.vercel.app",
  },
  {
    number: "02",
    title: "Personal Productivity Dashboard",
    category: "INTERFACE / TYPESCRIPT",
    description: "A responsive dashboard exploring reusable components, everyday planning, and a clear information hierarchy.",
    details: "React · TypeScript · Local storage",
    code: `${github}/Personal-Productivity-Dashboard`,
  },
  {
    number: "03",
    title: "Spazio Website",
    category: "FRONTEND / JAVASCRIPT",
    description: "A frontend website experiment built with React and Vite, focused on layout and visual presentation.",
    details: "React · JavaScript · Vite",
    code: `${github}/spazio-website`,
  },
];

const skills = [
  { title: "Frontend", items: "React, Next.js, TypeScript, JavaScript, responsive UI" },
  { title: "Backend", items: "Node.js, Express, REST APIs" },
  { title: "Data & tools", items: "MongoDB, Firebase, Git, GitHub, Tailwind CSS" },
];

function SectionHeading({ number, eyebrow, title, id }: { number: string; eyebrow: string; title: string; id: string }) {
  return (
    <div className="section-heading" id={id}>
      <span className="section-number">{number} / {eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default async function Home() {
  const contributions = await getGitHubContributions(site.githubUsername);

  return (
    <main id="main-content" className="site-shell">
      <div className="topline" aria-label="Publication details">
        <span>VOL. 01 <span className="topline-separator">/</span> THE PORTFOLIO ISSUE</span>
        <span>INDIA <span className="topline-separator">/</span> AVAILABLE FOR OPPORTUNITIES</span>
      </div>

      <header className="masthead">
        <div className="masthead-mark">MG<span className="mark-dot">.</span></div>
        <div className="masthead-title">
          <p>THE PERSONAL EDITION OF</p>
          <h1>Madhu Gupta<span className="mark-dot">.</span></h1>
          <span>FULL-STACK DEVELOPER & CREATIVE PROBLEM SOLVER</span>
        </div>
        <a className="header-contact" href="/resume">PRINT EDITION <span aria-hidden="true">↗</span></a>
      </header>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">01 ABOUT</a>
        <a href="#work">02 SELECTED WORK</a>
        <a href="#skills">03 TOOLBOX</a>
        <a href="#github">04 GITHUB</a>
        <a href="#contact">05 CONTACT</a>
        <a href="/resume">RESUME ↗</a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow"><span className="red-square" /> HELLO, I’M MADHU</span>
          <h2 id="hero-title">Ideas into<br /><em>interfaces.</em><br />Code into impact.</h2>
          <p>I build thoughtful digital experiences, from clean, responsive interfaces to the systems behind them. Curious by nature, always learning, and happiest when an idea becomes something people can use.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">EXPLORE MY WORK <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={`${github}?tab=repositories`} target="_blank" rel="noreferrer">VISIT GITHUB <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/resume">PRINT RESUME <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-bottom"><span>SCROLL TO READ THE STORY</span><span aria-hidden="true">↓</span></div>
        </div>
        <figure className="hero-image">
          <Image src={m2} alt="Madhu smiling in a blue shirt" priority sizes="(max-width: 760px) 100vw, 40vw" />
          <figcaption><span>FIG. 01 — THE PERSON BEHIND THE PIXELS</span><span>© MADHU GUPTA</span></figcaption>
        </figure>
      </section>

      <div className="ticker" aria-hidden="true"><span>DESIGN-MINDED DEVELOPER</span><span>✳</span><span>BUILDING FOR THE WEB</span><span>✳</span><span>OPEN TO NEW IDEAS</span><span>✳</span><span>DESIGN-MINDED DEVELOPER</span></div>

      <section className="about section-pad" aria-labelledby="about">
        <SectionHeading id="about" number="01" eyebrow="THE INTRODUCTION" title="A little about me" />
        <div className="about-grid">
          <div className="about-photo">
            <Image src={m1} alt="Madhu standing beneath a pendant light" sizes="(max-width: 760px) 100vw, 32vw" />
            <span>BEHIND THE SCENES / 01</span>
          </div>
          <div className="about-story">
            <p className="large-quote">“Good work starts with curiosity and gets better with care.”</p>
            <p>I’m Madhu, a full-stack developer based in India. I enjoy creating responsive websites and practical applications that make complicated things feel simple.</p>
            <p>My work moves between interface design, React and TypeScript development, and building APIs. I care about readable code, useful details, and experiences that work well on every screen.</p>
            <div className="about-note"><span>WHAT DRIVES ME</span><strong>Learning. Making. Improving.</strong></div>
          </div>
        </div>
      </section>

      <section className="work section-pad" aria-labelledby="work">
        <SectionHeading id="work" number="02" eyebrow="SELECTED WORK" title="Stories in the making" />
        <div className="section-intro"><p>A selection of public projects. Open the code to see how each one came together.</p><a href={`${github}?tab=repositories`} target="_blank" rel="noreferrer">ALL REPOSITORIES ↗</a></div>
        <div className="project-grid">
          {work.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.number}>
              <div className="project-top"><span>PROJECT NO. {project.number}</span><span>{project.category}</span></div>
              <div className="project-art" aria-hidden="true"><span>{index === 2 ? "S" : index === 1 ? "P" : "D"}</span><div className="art-lines"><i /><i /><i /></div></div>
              <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{project.details}</div><div className="project-links"><a href={project.code} target="_blank" rel="noreferrer">VIEW CODE ↗</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE SITE ↗</a>}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-pad" aria-labelledby="skills">
        <SectionHeading id="skills" number="03" eyebrow="THE TOOLBOX" title="What I work with" />
        <div className="skills-grid">
          <div className="skills-intro"><span className="big-asterisk">✳</span><p>My toolkit keeps growing. These are the technologies I use to turn a rough sketch into a working product.</p></div>
          {skills.map((skill, index) => <div className="skill-block" key={skill.title}><span>0{index + 1} / AREA OF PRACTICE</span><h3>{skill.title}</h3><p>{skill.items}</p></div>)}
        </div>
      </section>

      <section className="github-section section-pad" aria-labelledby="github">
        <SectionHeading id="github" number="04" eyebrow="OPEN SOURCE LOG" title="The contribution desk" />
        <div className="github-header"><div><span className="eyebrow">PUBLIC GITHUB ACTIVITY</span><p>A year of showing up, experimenting, and shipping in public.</p></div><a href={github} target="_blank" rel="noreferrer">@{site.githubUsername} ↗</a></div>
        <div className="contribution-panel">
          {contributions.length > 0 ? <>
            <div className="graph-scroll"><div className="graph-inner"><div className="graph-months"><span>ONE YEAR OF ACTIVITY</span><span>UPDATED FROM GITHUB</span></div><div className="contribution-grid" role="img" aria-label="GitHub contribution activity over the past year">{contributions.map((day) => <span key={day.date} className={`contribution-day level-${day.level}`} title={`${day.date}: activity level ${day.level}`} />)}</div></div></div>
            <div className="graph-footer"><span>Source: GitHub public contribution calendar</span><div className="graph-legend"><span>LESS</span>{[0, 1, 2, 3, 4].map((level) => <i className={`level-${level}`} key={level} />)}<span>MORE</span></div></div>
          </> : <p className="graph-fallback">The live activity graph is temporarily unavailable. View Madhu’s contributions directly on <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>.</p>}
        </div>
      </section>

      <section className="workspace section-pad" aria-label="Workspace photograph"><div className="workspace-image"><Image src={m3} alt="Madhu working at a desk in a shared workspace" sizes="100vw" /></div><div className="workspace-caption"><span>FIG. 02 / THE WORKSPACE</span><span>THOUGHTFUL WORK, ONE DAY AT A TIME.</span></div></section>

      <section className="contact section-pad" aria-labelledby="contact"><SectionHeading id="contact" number="05" eyebrow="LETTERS TO THE EDITOR" title="Let’s make something good." /><div className="contact-grid"><p>Have a project, a role, or simply an idea worth discussing? I’d love to hear about it.</p><div className="contact-actions"><a className="button button-red" href={`mailto:${demoEmail}?subject=Hello%20Madhu`}>SEND AN EMAIL <span aria-hidden="true">↗</span></a>{site.emailIsDemo && <span>DEMO EMAIL — REPLACE IN <code>content/site.ts</code></span>}<a href={github} target="_blank" rel="noreferrer">FIND ME ON GITHUB ↗</a></div></div></section>

      <footer className="footer"><div className="footer-main"><strong>Madhu Gupta<span className="mark-dot">.</span></strong><p>Making useful things for the web.</p></div><div className="footer-links"><a href="#about">ABOUT</a><a href="#work">WORK</a><a href="#github">GITHUB ACTIVITY</a><a href="#main-content">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} MADHU GUPTA</span><span>DESIGNED LIKE A DAILY. BUILT FOR THE WEB.</span></div></footer>
    </main>
  );
}
