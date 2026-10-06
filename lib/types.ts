export interface Project {
  slug: string;
  title: string;
  kicker: string; // e.g. "FULL-STACK APP", "AI PLATFORM", "OPEN SOURCE"
  category: "Web Apps" | "AI" | "Open Source" | "Full-Stack";
  standfirst: string;
  coverImage: string;
  tags: string[];
  year: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  lead?: boolean; // lead story
  metrics?: { label: string; value: string }[];
}

export interface ClassifiedAd {
  label: "WANTED:" | "FOR HIRE:" | "EXPERT:" | "CORE:";
  name: string;
  proof: string;
  featured?: boolean;
}

export interface StackSection {
  category: string;
  ads: ClassifiedAd[];
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  type: "Full-Time" | "Contract" | "Internship";
  bullets: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  years: string;
  grade?: string;
  highlight: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  stampType?: "red" | "ink";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NowData {
  building: string;
  learning: string;
  reading: string;
  lastUpdated: string;
}

export interface Profile {
  name: string;
  newspaperName: string;
  role: string;
  city: string;
  country: string;
  availability: string;
  shortBio: string;
  longBio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  leetcode?: string;
  heroHeadline: string;
  heroStandfirst: string;
  photoUrl: string;
}
