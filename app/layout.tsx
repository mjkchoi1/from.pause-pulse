import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_KR } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";
import "./globals.css";

/*
  One family across both scripts. IBM Plex Sans carries the technical,
  drawing-label register of the boards and has a matching Korean cut, so
  Korean titles set alongside English without a second typeface.
*/
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-latin",
  display: "swap",
});

const plexKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-kr",
  display: "swap",
});

/*
  The utility face, used only where the page carries drawing data: the figure
  register, project data values, years, and index numbering. Architectural
  sheets annotate in a tabular, monospaced register — dimension strings, scales,
  drawing numbers — so the data on the page is set the way the drawings are.
  Same superfamily as the text face, so this is a second cut, not a second voice.
*/
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jiyeonlee.work"),
  title: {
    default: `${site.name} — ${site.discipline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.discipline}`,
    description: site.description,
    type: "website",
    images: ["/projects/from-pause-to-pulse/main-render.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${plexKr.variable} ${plexMono.variable}`}
    >
      <body
        style={
          {
            "--font-plex": "var(--font-plex-latin), var(--font-plex-kr)",
          } as React.CSSProperties
        }
      >
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
