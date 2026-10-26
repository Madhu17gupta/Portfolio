import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume | Madhu Gupta",
  description: "A printable overview of Madhu Gupta's skills and selected projects.",
};

const github = site.github;

export default function ResumePage() {
  return (
    <main className="resume-page" id="main-content">
      <div className="resume-toolbar"><a href="/">← BACK TO PORTFOLIO</a><PrintButton /></div>
      <article className="resume-sheet">
        <header className="resume-header"><div><span className="resume-kicker">THE PRINT EDITION / RESUME</span><h1>Madhu Gupta<span className="mark-dot">.</span></h1><p>Full-Stack Developer</p></div><div className="resume-contact"><span>BASED IN INDIA</span><a href={github}>{github}</a><span>{site.emailIsDemo ? "DEMO EMAIL: " : "EMAIL: "}{site.email}</span></div></header>
        <section><h2>Profile</h2><p>Full-stack developer creating responsive web applications and practical digital experiences. Interested in clear interfaces, maintainable code, and building useful tools with React, TypeScript, and modern web technologies.</p></section>
        <section><h2>Technical skills</h2><div className="resume-columns"><p><strong>Frontend</strong><br />React, Next.js, TypeScript, JavaScript, Tailwind CSS</p><p><strong>Backend & data</strong><br />Node.js, Express, REST APIs, MongoDB, Firebase</p><p><strong>Workflow</strong><br />Git, GitHub, responsive design, component-based development</p></div></section>
        <section><h2>Selected projects</h2><div className="resume-project"><div><h3>Productivity Dashboard</h3><p>Task and progress tracking dashboard built with React and TypeScript.</p></div><a href={`${github}/Productivity-Dashboard`}>VIEW CODE ↗</a></div><div className="resume-project"><div><h3>Personal Productivity Dashboard</h3><p>Responsive planning interface using reusable React components and local storage.</p></div><a href={`${github}/Personal-Productivity-Dashboard`}>VIEW CODE ↗</a></div><div className="resume-project"><div><h3>Spazio Website</h3><p>React and Vite frontend website experiment.</p></div><a href={`${github}/spazio-website`}>VIEW CODE ↗</a></div></section>
        <footer className="resume-foot"><span>PORTFOLIO EDITION / {new Date().getFullYear()}</span>{site.emailIsDemo && <span>CONTACT EMAIL IS A DEMO PLACEHOLDER</span>}</footer>
      </article>
    </main>
  );
}
