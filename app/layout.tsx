import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-madhu-1ae8.vercel.app"),
  title: "Madhu Gupta | Full-Stack Developer",
  description:
    "Explore Madhu Gupta's projects, web development skills, and live GitHub contributions.",
  openGraph: {
    title: "Madhu Gupta | Full-Stack Developer",
    description: "Projects, ideas, and code from Madhu Gupta.",
    images: ["/m2.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${manrope.variable}`}
    >
      <body>
        <SmoothScroll />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
