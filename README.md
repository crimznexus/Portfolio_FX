# Muhammad Faizan — portfolio

Static portfolio site built with Astro 7. No client-side framework; the JavaScript is the scroll-scrubbed backdrop, one IntersectionObserver for reveals, the copy-email button and two small fallbacks.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/projects.ts` | All project copy, screenshots and case-study content |
| `src/data/contact.ts` | Email and social links |
| `src/assets/shots/` | Source screenshots (Astro generates responsive WebP at build time) |
| `src/styles/global.css` | Tokens, cascade layers, glass system, reveals, view transitions |
| `src/components/ScrollBackdrop.astro` | Fixed canvas that scrubs through the project screens |
| `src/pages/work/[slug].astro` | Case-study template |
| `src/pages/colophon.astro` | "How this site is built" |

To add a project, add an entry to `projects` in `src/data/projects.ts` and drop its screenshots in `src/assets/shots/`. Then add its slug to `pick` in `src/components/WorkIndex.astro` to choose which screens show on the home page.

## Deploy

Vercel detects Astro automatically. Either import the GitHub repo at vercel.com/new, or:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

Update `site` in `astro.config.mjs` to the final domain so canonical URLs are right.
