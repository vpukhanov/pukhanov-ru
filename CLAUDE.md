# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (also validates MDX/types)
- `npm run lint` — ESLint (flat config, next/core-web-vitals + prettier)
- No test framework; `npm run build` is the primary gate

## Architecture

Next.js 16 App Router personal site + blog. Deployed on Railway.

### Content

Blog posts are MDX files at `app/(prose)/posts/<slug>/page.mdx`. Each post exports frontmatter as `metadata` via remark-mdx-frontmatter:

```ts
// Required shape — see lib/posts.ts PostMetadata
{ title: string; description: string; datePublished: string; emoji?: string }
```

The `(prose)` route group shares a layout with Tailwind Typography prose styling. CV (`cv/page.mdx`) and privacy policy also live here.

Posts are discovered at build time by `lib/posts.ts` using fast-glob and dynamic imports — the slug must match the directory name exactly.

### Feed

Atom feed generated as a Route Handler at `app/posts/feed.xml/route.ts`. The `outputFileTracingIncludes` in `next.config.ts` ensures MDX files are bundled for this route.

### Styling

Tailwind CSS v4 (CSS-first config, no `tailwind.config` file). Custom fonts defined in `components/fonts.ts` (Inter sans + Charis serif). Dark mode supported.

### Key files

- `mdx-components.tsx` — root-level MDX component overrides (e.g. `MarkdownLink` for `<a>`)
- `next.config.ts` — MDX plugin setup + remark plugins
- `lib/posts.ts` — post discovery/sorting
- `lib/atom.ts` — Atom feed builder (uses `feed` package)

### Path alias

`@/*` maps to project root.
