# Jiyeon Lee — Architecture Portfolio

Portfolio site for 이지연 (Jiyeon Lee), built with Next.js 15 (App Router),
TypeScript and Tailwind CSS v4. Every page is statically generated.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (type-check + lint included)
npm start
```

## How the site is organised

```
app/
  page.tsx              home — identity block + five selected works
  work/page.tsx         index of all work (selected + other)
  work/[slug]/page.tsx  one route per project, statically generated
  about/page.tsx        CV-style about page
components/             Figure, ProjectSections, DrawingViewer, WorkIndex …
data/
  types.ts              Project / Section / Media schema
  projects/*.ts         one file per project — all copy and image references
  site.ts               name, school, contact
  about.ts              about-page content
  asset-dimensions.json generated — real pixel sizes of published assets
public/projects/<slug>/ published, web-optimized images
scripts/                asset pipeline and review tooling
asset-manifest.json     maps every published asset back to its original source
content-audit.md        what is in the source folder and why it is used as it is
```

Original source files live outside this repo in the folder `지연 포폴` and are
never modified. `asset-manifest.json` records the path of every original; the
pipeline only ever writes copies into `public/projects/`.

## Content model

A project is data, not markup. Each entry in `data/projects/` provides a
header, an introduction, an ordered list of sections and a credits table:

```ts
{ slug, title, titleKo?, year?, category, location?, status, order,
  summary, meta[], intro[], hero?, sections[], credits[] }
```

`status` is `"selected"` (appears on the home page) or `"other"` (index only).
`order` sorts within each group.

Section types — use only what a project actually needs, so no two project
pages have the same shape:

| type | use |
| --- | --- |
| `text` | a labelled passage; heading sits in the left margin |
| `image` | one image, `size: "full" \| "wide" \| "inset"` |
| `pair` | two images side by side |
| `sequence` | ordered drawings or diagrams, `columns: 1 \| 2` |
| `list` | a quiet label/value table (programme, brief) |

Media is declared with `img(src, kind, alt, caption?)`. `kind` decides
behaviour: `render` and `photo` run to their edges; `drawing`, `diagram` and
`board` sit contained on a neutral field and open in the drawing viewer
(click to zoom, drag to pan, arrow keys, Esc).

Dimensions are never typed by hand — `img()` reads them from
`data/asset-dimensions.json`, so a wrong size fails the build rather than
shifting the layout.

## Adding a project

1. Add the originals' paths to `asset-manifest.json`, one entry per image:

   ```json
   { "project": "my-project", "out": "hero-view.jpg",
     "source": "4-1(24 Spring)/랜더1.jpg", "kind": "render", "maxWidth": 2000 }
   ```

   `out` is the published filename — give it a descriptive name; source
   filenames are never exposed. Optional: `trim: true` crops a uniform white
   border, `pdfPage` + `targetWidth` rasterizes a PDF page, `cropRectPt`
   crops that page.

2. Build and record the assets:

   ```bash
   python scripts/build-assets.py     # add --force to rebuild everything
   python scripts/gen-dimensions.py
   ```

3. Create `data/projects/my-project.ts` and export it from
   `data/projects/index.ts`. The route `/work/my-project` appears automatically.

4. Check nothing was dropped:

   ```bash
   python scripts/check-coverage.py
   ```

   This fails if a source image is unpublished, or a published asset is not
   referenced by any project — the site is meant to account for the whole
   source folder.

## Replacing an image

Point the manifest entry at the new source, delete the old file from
`public/projects/<slug>/`, then re-run `build-assets.py` and
`gen-dimensions.py`. Update the `alt` text in the project data — alt text
describes architectural content ("Second floor plan showing…"), not "image".

The pipeline re-encodes every file, which strips EXIF and GPS metadata.

## Editing metadata

- Project header, credits, intro and captions: `data/projects/<slug>.ts`
- Name, school, contact email: `data/site.ts` — the footer and About contact
  block render only when `email` is non-empty
- About page: `data/about.ts`

Fields that the source material does not establish are left out rather than
guessed; open `TODO(author)` comments mark what only the author can supply.

## Deploying

Vercel: import the GitHub repository and accept the defaults (framework
Next.js, `npm run build`). No environment variables are required.

Any Node host works too: `npm run build && npm start`.

## Review tooling

```bash
node scripts/shoot.mjs shots            # all routes at 1440/1024/768/390
SIZES=390 node scripts/shoot.mjs shots  # one breakpoint
```

Requires a server on `localhost:3000` and `npx playwright install chromium`.
