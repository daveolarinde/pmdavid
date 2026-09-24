# David Olarinde — Agile PM Portfolio

Next.js 14 (App Router) + Tailwind CSS + Framer Motion portfolio site, with SEO built in:
Open Graph tags, Twitter cards, JSON-LD structured data (Person schema), sitemap.xml,
robots.txt, and canonical URL.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. **Update the domain.** Replace `https://davidolarinde.com` in `app/layout.js`,
   `app/sitemap.js`, and `app/robots.js` with your real domain once you have one.
2. **Add an OG image.** Drop a 1200×630 image at `public/og-image.png` — this is what
   shows up when the link is shared on social/Slack/LinkedIn.
3. **Add a favicon.** Drop `favicon.ico` into `public/`.
4. **Update contact info.** `app/page.js` has a placeholder email and a `#` LinkedIn link —
   swap those for your real ones.
5. **Deploy.** Easiest path is [Vercel](https://vercel.com): `vercel` from this folder, or
   connect the repo in their dashboard.

## Structure

```
app/
  layout.js     → SEO metadata, JSON-LD, fonts
  page.js       → the portfolio page itself
  sitemap.js    → sitemap.xml
  robots.js     → robots.txt
  globals.css   → Tailwind + font import
```
