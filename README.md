# highfidelity.dev

Colin O'Brien's personal site — built with [Astro](https://astro.build) and Tailwind CSS 4.

## Structure

    .
    ├── src/
    │   ├── content/          # Markdown content for the work + lab collections
    │   │   ├── work/
    │   │   └── lab/
    │   ├── content.config.ts # Content collection schemas
    │   ├── components/       # Astro components + the Contact.tsx React island
    │   ├── layouts/          # BaseLayout.astro (head, meta, gtag)
    │   ├── pages/            # File-based routes
    │   └── styles/           # global.css — Tailwind 4 @theme tokens + custom utilities
    ├── public/                # Static assets served as-is (favicon, robots.txt, manifest, OG image)
    └── astro.config.mjs

## Commands

| Command           | Action                                      |
| ------------------ | -------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`      | Start the local dev server at `localhost:4321` |
| `npm run build`    | Build the production site to `./dist/`       |
| `npm run preview`  | Preview the production build locally         |

## Content

New case studies go in `src/content/work/*.md`, new Lab entries in `src/content/lab/*.md` (or `.mdx` if the entry embeds a component). See existing entries for the expected frontmatter fields.

## Deployment

Deployed on Netlify. The build output directory is `dist/` (not Gatsby's old `public/` — update Netlify's site settings if migrating an existing site). The contact form uses Netlify Forms; its static markup is prerendered at build time so Netlify's form-detection bot can find it without a backend.
