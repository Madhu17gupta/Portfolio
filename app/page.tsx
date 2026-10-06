import { profile } from "@/content/profile";
import { Rule } from "@/components/ui/Rule";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/Stamp";
import { Kicker } from "@/components/ui/Kicker";

export default function Home() {
  return (
    <main
      id="main-content"
      className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-8 flex flex-col gap-8"
    >
      {/* Top Meta Header Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono tracking-widest text-graphite gap-2 border-b border-rule/30 pb-2">
        <span>VOL. 01 · ISSUE 042</span>
        <span>MUMBAI, INDIA</span>
        <span>THE DAILY EDITORIAL</span>
      </div>

      {/* Main Title Masthead */}
      <header className="text-center pt-2 pb-4">
        <h1 className="headline-masthead text-ink tracking-tighter">
          {profile.newspaperName}
        </h1>
        <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-graphite uppercase mt-2">
          {profile.role} · {profile.city}, {profile.country}
        </p>
      </header>

      <Rule variant="double" />

      {/* Hero Preview Block */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-6">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <Kicker number="NO. 01">FRONT PAGE DISPATCH</Kicker>
          <h2 className="headline-xl text-ink leading-tight">
            {profile.heroHeadline}
          </h2>
          <p className="font-editorial-body text-ink/90 text-lg sm:text-xl drop-cap max-w-3xl">
            {profile.heroStandfirst}
          </p>

          <div className="flex flex-wrap gap-3 items-center pt-2">
            <Button variant="primary">Read the Stories ↓</Button>
            <Button variant="outline">The Print Edition (Resume)</Button>
            <Tag variant="press-red">{profile.availability}</Tag>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-4 p-6 border border-rule/30 bg-ink/[0.02]">
          <Stamp variant="red" label="CERTIFIED ENG" sublabel="VERIFIED" rotation={4} />
          <div className="text-center lg:text-right font-mono text-xs text-graphite space-y-1">
            <p>DISPATCH DESK</p>
            <p className="text-ink font-semibold">{profile.email}</p>
            <p>PHASE 1 FOUNDATION COMPLETE</p>
          </div>
        </div>
      </section>

      <Rule variant="thick" />
    </main>
  );
}
