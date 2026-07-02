# From Pause to Pulse — Digital Graduation Exhibition

액티브 시니어를 위한 자립형 상생 플랫폼 · 이지연 · 2026-1 건축설계 7

One-project architecture graduation exhibition website built with Next.js
(App Router), TypeScript, Tailwind CSS v4, and Motion for React.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (type-check + lint included)
npm start
```

Deploys to Vercel as-is (no environment variables required).

## Structure

```
app/            layout, page, global styles (design tokens)
components/     one component per exhibition section + Figure/FadeIn/
                SectionLabel/StickyFigureText primitives
data/project.ts all copy, image metadata, program lists (edit content here)
public/images/  web-optimized exhibition images
source-assets/  original drawings, portfolio PDF (canonical source),
                and modeling.3dm (future 3D viewer — not used yet)
```

## Replacing images

1. Put the new file in `public/images/` using the same filename
   (e.g. `hero-main-render.png`).
2. If the pixel dimensions changed, update `width`/`height` for that
   entry in `data/project.ts` (`images` object). Alt text lives there too.

| File | Role |
| --- | --- |
| hero-main-render.png | Hero + Render section + Epilogue backdrop |
| site-analysis.png | Site as Pause |
| pause-connect-pulse.png | Concept (Pause / Connect / Pulse) |
| exploded-axonometric.png | Vertical Program (sticky) + Render section |
| plan-1f.png | 1F Urban Promenade + Plans |
| floor-plan-strip.png | Plans (horizontal viewer, 2F–7F) |
| section-a.png | Ramp as Social Spine + Tiny Town + Sections |
| section-b.png | Wellness Maru + Sections |
| prologue-reference.png | Reference only (not rendered) |

Large originals stay in `source-assets/`; the copies in `public/images/`
are downscaled for the web. `next/image` serves AVIF/WebP automatically.
