# Clief Notes Talent — Mockup

A clickable mockup of the Clief Notes Talent platform, built by Eduba.
**This is a demo. There is no backend, no real auth, no real data.**

Live: <https://talent.eduba.io>

## What this is

A polished, click-through prototype designed to show stakeholders what
the production platform will look and feel like. All forms submit to
nothing. All buttons either navigate to another screen or fire a toast.
All data is hardcoded in [`lib/mock-data.ts`](./lib/mock-data.ts).

## What's inside

- Public landing, sign in, terms, privacy
- Candidate flow — signup → 5-step intake → dashboard
- Company flow — signup → dashboard → browse → candidate profile (with
  intro-request modal) → post a job
- Admin panel — approval queue, candidates roster, companies roster,
  placements (with timeline, fee breakdown, and a copy-pasteable invoice
  generator)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build for production (static)

```bash
npm run build
# output goes to ./out — a fully static site
```

## Deploy

GitHub Actions builds and publishes to GitHub Pages on every push to
`main`. The site serves at <https://talent.eduba.io> via the `CNAME`
file in [`public/`](./public/CNAME).

## Stack

- Next.js 14 (App Router) with `output: "export"`
- TypeScript
- Tailwind CSS
- [`sonner`](https://sonner.emilkowal.ski/) for toasts
- No backend, no API routes, no environment variables

## Style

The aesthetic deliberately mirrors [eduba.io](https://eduba.io): a
cream-and-oxblood palette, Georgia for body, monospace for tags and
metadata, generous whitespace, no drop shadows, no rounded corners
larger than 4px. Visually it sits between a literary magazine and a
federal RFP.

## Where the build prompt lives

The original build prompt for this mockup lives in the Eduba internal
Talent directory (`~/Desktop/Eduba/Talent/`). For the production
implementation, the build prompt will be updated and tracked in the
production repository.

## Demo affordances

- A persistent `Demo · Mockup` watermark sits in the bottom-right of
  every screen so stakeholders never forget this is a prototype.
- The signin page routes by email keyword: `admin@…` → `/admin`,
  `…company…` → company dashboard, anything else → candidate dashboard.
- `/admin` is reachable directly — no URL-level auth, intentionally,
  since the demo isn't behind a login.
