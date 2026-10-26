# Madhu Gupta Portfolio

An editorial-style portfolio built with Next.js 16, React 19, and Tailwind CSS 4. It includes an introduction, selected public projects, skills, a live GitHub contribution calendar, contact links, and a printable resume page. The three photographs in `public/m1.jpeg`, `m2.jpeg`, and `m3.jpeg` are used across the homepage.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to check the production build.

## Update your details

- Edit `content/site.ts` to set the GitHub username and real email. Set `emailIsDemo` to `false` after replacing the demo address.
- Edit the introduction, skills, and selected project descriptions in `app/page.tsx`.
- Edit `app/resume/page.tsx` for the printable resume. Visitors can use **Print / Save as PDF** to download it.
- Set `NEXT_PUBLIC_SITE_URL` to your production URL for accurate social preview links.

The contribution graph reads GitHub's public contribution calendar on the server and refreshes at most once per hour. It needs no API key. If GitHub is unavailable, the page shows a link to the profile.

The older files in `content/` include unverified sample career details and are not used on the published pages. Replace them with real details before using them elsewhere.
