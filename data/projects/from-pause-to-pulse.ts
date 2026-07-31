import { img } from "../media";
import type { Project } from "../types";

const P = "/projects/from-pause-to-pulse";

export const fromPauseToPulse: Project = {
  slug: "from-pause-to-pulse",
  title: "From Pause to Pulse",
  titleKo: "액티브 시니어를 위한 자립형 상생 플랫폼",
  year: "2026",
  category: "Mixed-use / Senior living",
  location: "Cheongju",
  status: "selected",
  order: 1,
  summary:
    "A self-sustaining living platform for active seniors on a long-vacant commercial site in central Cheongju.",
  meta: [
    { label: "Year", value: "2026" },
    { label: "Location", value: "Sangdang-gu, Cheongju, South Korea" },
    { label: "Programme", value: "Public ground, learning, wellness, co-living" },
    { label: "Type", value: "Redevelopment proposal" },
    { label: "Studio", value: "건축설계 7 — graduation studio, 2026-1" },
  ],
  intro: [
    "Retirement produces a pause: a temporary loss of rhythm, role and identity. The site — the long-vacant former Lotte Young Plaza, facing the Cheoldanggan plaza — holds a parallel pause in the old downtown of Cheongju.",
    "The project reads active seniors (roughly 55–69) not as recipients of care but as urban subjects with skill, social energy and the will to keep working. Seven floors stack a public ground, a lifelong growth hub, a wellness floor and a small residential village. Ramps, voids and open edges turn circulation into a social condenser, so that moving through the building becomes an occasion to meet, observe and take part.",
  ],
  hero: img(
    `${P}/main-render.png`,
    "render",
    "Exterior view of a stacked civic building with a translucent mesh volume, planted terraces and an open plaza, standing in the old downtown of Cheongju beside the Cheoldanggan plaza.",
  ),
  sections: [
    {
      type: "text",
      heading: "Site",
      body: [
        "The site sits at a hinge in central Cheongju: the youth-oriented commercial street of Seongan-gil on one side, senior-oriented civic spaces such as Jungang Park on the other. It faces the public plaza of Yongdusa-ji Cheoldanggan.",
        "In 2025 the population aged 65 and over in Cheongju reached 24.5%, up from 11.2% in 2000; in Jungang-dong, the district around the site, it stands at 28.4%. The vacant plot is read not as leftover property but as a dormant condition waiting to be reactivated.",
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/site-analysis.png`,
        "diagram",
        "Site analysis of central Cheongju: figure-ground mapping locating the site between the Seongan-gil commercial street and the Jungang Park senior district, with ageing-population statistics and diagrams of youth and senior flows converging on the underused plot.",
        "Site analysis — the site as a meeting point of youth and senior flows",
      ),
    },
    {
      type: "text",
      heading: "Pause, Connect, Pulse",
      body: [
        "Conventional senior facilities stack care, amenity and housing as separated layers. Here the section is the argument: ramps and escalators bind the floors into one continuous route, and the building begins to exchange people with the city rather than contain them.",
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/concept-pause-connect-pulse.png`,
        "diagram",
        "Three-part concept section: first a grey stacked senior facility with separated floors, then an intermediate state where ramps and escalators begin to connect levels, and finally an open ramped building exchanging people with the city.",
        "Concept sequence — Pause / Connect / Pulse",
      ),
    },
    {
      type: "image",
      size: "inset",
      media: img(
        `${P}/exploded-axonometric.png`,
        "diagram",
        "Exploded axonometric of the seven floors: a public ground floor, a lifelong growth hub on levels one to three, a public living room on the fourth floor, and the Tiny Town residential village on floors five to seven, with a promenade flowing from the city plaza up through the building.",
        "Exploded axonometric — vertical sequence from urban promenade to Tiny Town",
      ),
    },
    {
      type: "list",
      heading: "Vertical programme",
      rows: [
        {
          label: "1F — Urban Promenade",
          value:
            "Café · Performance hall · Gallery · Cooking studio · Community dining · Pop-up market · Community garden",
        },
        {
          label: "2–3F — Lifelong Growth Hub",
          value:
            "Library · Mentoring room · Seminar room · Hobby studio · Co-working · Health care pocket",
        },
        {
          label: "4F — Wellness Maru",
          value: "Gym · Yoga · Dance · Pilates · Sauna · Running track",
        },
        {
          label: "5–7F — Tiny Town",
          value:
            "Studio unit · Short-stay unit · Double unit · Duplex co-living · Communal kitchen · Rooftop garden",
        },
      ],
    },
    {
      type: "sequence",
      heading: "Plans",
      intro:
        "The ground floor is not a lobby: the plaza is drawn diagonally through the building as a promenade, and the activities of residents stay visible from the street.",
      columns: 1,
      items: [
        img(
          `${P}/plan-1f.png`,
          "drawing",
          "First floor site plan at 1:200 showing a promenade cutting diagonally between two ground-floor volumes containing a cooking studio, gallery, café and performance hall, surrounded by community garden, pop-up markets, community dining and a performance lawn.",
          "1F plan 1:200 — urban promenade",
        ),
        img(
          `${P}/plan-strip-2f-7f.png`,
          "drawing",
          "Strip of six floor plans from second to seventh floor: mentoring, seminar and library spaces in the growth hub, the active living zone with gym, studios and running track, and residential floors with studio units, communal kitchen, co-living and rooftop garden.",
          "2F–7F plans",
        ),
      ],
    },
    {
      type: "sequence",
      heading: "Sections",
      columns: 1,
      items: [
        img(
          `${P}/section-a.png`,
          "drawing",
          "Longitudinal section A: basement parking, ground-floor cooking studio and gallery, an escalator and ramped library, co-working and mentoring levels, yoga, dance and Pilates studios, communal kitchen, short-stay units and duplex co-living under pitched roofs.",
          "Section A — the ramp as social spine",
        ),
        img(
          `${P}/section-b.png`,
          "drawing",
          "Longitudinal section B: café and cooking studio at ground level, seminar room, hobby studio and library above, a wellness floor with gym, lockers and sauna, and studio units, co-living and an outdoor lounge with roof gardens on the upper floors.",
          "Section B — programme transition from ground to village",
        ),
      ],
    },
  ],
  credits: [
    { label: "Year", value: "2026" },
    { label: "Location", value: "Sangdang-gu, Cheongju, South Korea" },
    { label: "Site", value: "Former Lotte Young Plaza Cheongju" },
    { label: "Programme", value: "Community, learning, wellness and co-living platform" },
    { label: "Status", value: "Academic proposal" },
    { label: "Studio", value: "건축설계 7, 2026-1 — Ewha Womans University" },
  ],
};
