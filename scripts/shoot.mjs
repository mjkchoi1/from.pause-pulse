// Visual review helper — captures each route at the four design breakpoints.
// Usage: node scripts/shoot.mjs [outDir] [route ...]
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const OUT = process.argv[2] ?? "shots";
const routes = process.argv.slice(3);
const ROUTES = routes.length
  ? routes
  : [
      "/",
      "/work",
      "/about",
      "/work/from-pause-to-pulse",
      "/work/silver-world",
      "/work/urban-venue",
      "/work/wave-to-change",
      "/work/four-rest",
      "/work/seoul-family-house",
      "/work/rebuilding-memory-newark",
      "/work/green-lighthouse-study",
    ];
const ALL_SIZES = [
  { name: "1440", width: 1440, height: 900 },
  { name: "1024", width: 1024, height: 768 },
  { name: "768", width: 768, height: 1024 },
  { name: "390", width: 390, height: 844 },
];
const only = process.env.SIZES?.split(",").map((s) => s.trim());
const SIZES = only ? ALL_SIZES.filter((s) => only.includes(s.name)) : ALL_SIZES;

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

for (const size of SIZES) {
  const ctx = await browser.newContext({
    viewport: { width: size.width, height: size.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  for (const route of ROUTES) {
    await page.goto(`http://localhost:3000${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    // force lazy images to load, then settle
    await page.evaluate(async () => {
      await new Promise((r) => {
        let y = 0;
        const step = () => {
          y += window.innerHeight;
          window.scrollTo(0, y);
          if (y < document.body.scrollHeight) setTimeout(step, 60);
          else {
            window.scrollTo(0, 0);
            setTimeout(r, 300);
          }
        };
        step();
      });
    });
    // next/image optimizes on demand in dev — wait for every image to decode
    await page
      .waitForFunction(
        () =>
          Array.from(document.images).every((i) => i.complete && i.naturalWidth > 0),
        null,
        { timeout: 120000 },
      )
      .catch(() => console.warn("  (images still pending)"));
    await page.waitForTimeout(600);
    const slug = route === "/" ? "home" : route.replace(/\//g, "-").replace(/^-/, "");
    await page.screenshot({
      path: path.join(OUT, `${slug}--${size.name}.png`),
      fullPage: true,
    });
    console.log("shot", slug, size.name);
  }
  await ctx.close();
}
await browser.close();
