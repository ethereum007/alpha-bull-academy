# Alpha Bull Trading Academy

Next.js (App Router, TypeScript) site for AlphaBull Trading Academy. Migrated from the original Lovable Vite/React build.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix)
- Framer Motion
- Supabase (contact form + market data via Edge Functions)
- hCaptcha
- TanStack Query

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Environment

Copy the values into `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
NEXT_PUBLIC_SUPABASE_PROJECT_ID=...
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=...
```

## Build

```bash
npm run build
npm start
```

## Routes

- `/` — Home
- `/about`
- `/blog`, `/blog/[slug]`
- `/earnings`
- `/q3-results`
