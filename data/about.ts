/**
 * About-page content. Every line here is traceable to the source folder —
 * see content-audit.md. Fields the source does not establish are left out
 * rather than guessed.
 *
 * TODO(author): add — graduation year, any awards or exhibition results,
 * internships or office experience, the full software list, and a public
 * contact address (set `email` in data/site.ts; nothing renders while empty).
 */

export const about = {
  intro: [
    "Jiyeon Lee is an architecture student at Ewha Womans University in Seoul. Her studio work runs from an inhabited bridge across the Han River to a district masterplan in Gireum-dong, and returns repeatedly to one subject: how older people keep a role in the city.",
    "That thread runs through the adaptive reuse of the disused Wonju Station, the senior hub in the Gireum strategy, and the graduation project in Cheongju. Alongside the studio work sit a 1:20 envelope study, an urban forest competition entry, a house designed with a citizen client, and written research on adaptive reuse in Newark.",
  ],
  education: [
    {
      period: "",
      title: "Ewha Womans University, Seoul",
      detail: "Architecture",
    },
  ],
  studios: [
    {
      period: "2026",
      title: "From Pause to Pulse",
      detail: "건축설계 7 — graduation studio · Cheongju",
    },
    {
      period: "2025",
      title: "Urban Venue",
      detail: "Urban design studio · Gireum-dong, Seoul",
    },
    {
      period: "2025",
      title: "Rebuilding Memory through Adaptive Reuse",
      detail: "Architecture and the City — Prof. Hyeri Park · research essay",
    },
    {
      period: "2024",
      title: "Silver World",
      detail: "Adaptive reuse studio · former Wonju Station",
    },
    {
      period: "2023",
      title: "Wave to Change",
      detail: "Studio · inhabited bridge, Han River",
    },
    {
      period: "2023",
      title: "Green Lighthouse",
      detail: "Building environmental systems · case study, Copenhagen",
    },
  ],
  other: [
    {
      period: "",
      title: "FOUR, REST",
      detail: "Urban forest design competition entry · Incheon",
    },
    {
      period: "",
      title: "즐거운 나의 집",
      detail:
        "Seoul programme pairing student coordinators with citizen clients — house design",
    },
  ],
  tools: ["Rhinoceros", "Adobe Photoshop"],
} as const;
