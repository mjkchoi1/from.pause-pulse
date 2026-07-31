import { img } from "../media";
import type { Project } from "../types";

const P = "/projects/wave-to-change";

export const waveToChange: Project = {
  slug: "wave-to-change",
  title: "Wave to Change",
  year: "2023",
  category: "Inhabited bridge",
  location: "Han River, Seoul",
  status: "selected",
  order: 4,
  summary:
    "An inhabited bridge across the Han River: two stacked surfaces carrying housing, a library, a dock and a square between a wooded north bank and the city.",
  meta: [
    { label: "Year", value: "2023" },
    { label: "Location", value: "Han River, Seoul" },
    { label: "Programme", value: "Housing, library, sports, market, dock, restaurant" },
    { label: "Type", value: "Inhabited bridge" },
  ],
  intro: [
    "The two banks of this stretch of the Han River have almost nothing in common: greenery and the slope of Jeungmisan to the north, dense city to the south. The bridge is proposed as a way of merging that contrast — not a crossing but a piece of organic city laid across the water.",
    "Two layers do the work. The upper surface connects the shorelines with a continuous path that behaves like a ridge line; the lower one is deliberately maze-like, offering unexpected encounters. Where the surfaces are ripped apart, the openings — the project calls them intersections — let people move between layers on the slope itself, without stairs or lifts. Programme is distributed along the length: community space and media wall at the south, greenery and dock in the middle, housing to the north.",
  ],
  hero: img(
    `${P}/main-board.jpg`,
    "board",
    "Presentation image in ink-wash style: the white ribboned bridge winding across a pale river between mountains, with figures in hanbok walking its surfaces, birds overhead and blossom at the edges.",
  ),
  sections: [
    {
      type: "text",
      heading: "Two banks",
      body: [
        "Site work locates the crossing where the river narrows between the wooded northern edge and the built southern bank, and reads the surrounding network of paths, cycle routes and river-side parks that the bridge would have to pick up at each end.",
      ],
    },
    {
      type: "pair",
      items: [
        img(
          `${P}/site-analysis.jpg`,
          "diagram",
          "Site analysis: locator maps from the Korean peninsula to Seoul to the river reach, with the bridge marked in red, and two larger maps showing the road and rail network and the green structure of the parks on both banks.",
          "Site — location and river context",
        ),
        img(
          `${P}/concept-connect-blend.jpg`,
          "diagram",
          "Concept diagram titled connect and blend: a tree silhouette labelled north greenery against a city skyline labelled south urban, above a long line drawing of the bridge described as merging the contrast between two sides.",
          "Concept — connect and blend",
        ),
      ],
    },
    {
      type: "sequence",
      heading: "Organisation",
      intro:
        "Four diagrams set out the logic in order: the public-to-private gradient along the deck, the three programme bands, the entrance arms at each shore, and the two circulation layers.",
      columns: 2,
      items: [
        img(
          `${P}/diagram-public-private.jpg`,
          "diagram",
          "Paired diagrams: the first shading the deck from public at the wooded end to private at the city end, the second labelling the three bands as community space, greenery and dock, and housing.",
          "Public to private · Three bands",
        ),
        img(
          `${P}/diagram-access-circulation.jpg`,
          "diagram",
          "Paired diagrams: four entrance arms extending from the south side to the hillside and cycle paths with a concave plaza entrance to the north, and a circulation diagram separating pedestrian routes in pink from bike routes in teal across two layers.",
          "Access · Circulation",
        ),
        img(
          `${P}/program-diagram.jpg`,
          "diagram",
          "Programme bubble diagram: housing, shared office and educational space in blue, square and dock in violet, media wall, bar and restaurant in pink, with bikeports distributed along the length.",
          "Programme distribution",
        ),
        img(
          `${P}/intersection-diagram.jpg`,
          "diagram",
          "Axonometric marking three intersections along the bridge where the surfaces are torn open, with a pair of small diagrams showing one flat surface and the same surface ripped to create a slope between layers.",
          "Intersections — vertical movement without stairs",
        ),
      ],
    },
    {
      type: "sequence",
      heading: "Plans",
      columns: 1,
      items: [
        img(
          `${P}/roof-plan.jpg`,
          "drawing",
          "Roof plan of the bridge: two interwoven ribbons of deck, planted green in the centre, crossing the river between the two shorelines with intersection openings marked.",
          "Roof plan",
        ),
        img(
          `${P}/program-plan.jpg`,
          "drawing",
          "Programme plan of the lower deck naming educational place, shared office, housing, commercial, sports centre, pool, outdoor sports, square, dock, restaurant, bar and bike rental shop along the length of the bridge.",
          "Programme plan",
        ),
      ],
    },
    {
      type: "sequence",
      heading: "Sections",
      columns: 1,
      items: [
        img(
          `${P}/bridge-section-greenery.jpg`,
          "drawing",
          "Long section at 1:500 through the greenery and dock: the planted deck cantilevering over the water, a lower dock level reached from the slope, and the city skyline drawn faintly behind.",
          "Section B-B′ 1:500 — greenery and dock",
        ),
        img(
          `${P}/bridge-section-program.jpg`,
          "drawing",
          "Long section at 1:500 through the southern end showing bike rental shop, bar and restaurant occupying the wedge beneath the upper deck.",
          "Section B-B′ 1:500 — southern programme",
        ),
      ],
    },
    {
      type: "text",
      heading: "The library",
      body: [
        "At the widest point the two surfaces open far enough apart to hold a building. The library is set into that lens: a stepped reading landscape at the centre, book stacks and media rooms suspended as floating masses above it, and a theatre cut into the lower floor.",
      ],
    },
    {
      type: "sequence",
      columns: 2,
      items: [
        img(
          `${P}/library-plan-1f.jpg`,
          "drawing",
          "First floor plan of the lens-shaped library: a curved auditorium and theatre at the south edge, reading terraces at the centre and rotated rectangular rooms for media, office and children's spaces.",
          "Library, 1F",
        ),
        img(
          `${P}/library-plan-2f.jpg`,
          "drawing",
          "Second floor plan of the library showing the rotated floating volumes over the void, the stepped seating below and the perimeter reading edge.",
          "Library, 2F",
        ),
        img(
          `${P}/library-section-long.jpg`,
          "drawing",
          "Long section through the library: a shallow curved roof over stepped timber reading terraces, book stacks along the perimeter and suspended volumes above the central void.",
          "Library, long section",
        ),
        img(
          `${P}/library-section-short.jpg`,
          "drawing",
          "Short section through the library showing the sloped floor plate, the theatre carved into the lower level and the glazed edge onto the river.",
          "Library, short section",
        ),
      ],
    },
    {
      type: "sequence",
      heading: "Inside",
      columns: 1,
      items: [
        img(
          `${P}/interior-terraces.jpg`,
          "render",
          "Interior of the library: timber stepped terraces with books set into their risers, floating concrete volumes above, and a curved timber ceiling meeting the glazed river wall.",
        ),
      ],
    },
    {
      type: "pair",
      items: [
        img(
          `${P}/interior-gallery.jpg`,
          "render",
          "Exhibition alcove within the library with shelves, framed prints and a low platform, opening onto the reading room beyond.",
        ),
        img(
          `${P}/interior-reading.jpg`,
          "render",
          "Reading room at the lower level: long tables on a green rug, the stepped stacks rising to one side and the river visible through the full-height glazing.",
        ),
      ],
    },
    {
      type: "sequence",
      heading: "Envelope and dwelling",
      columns: 2,
      items: [
        img(
          `${P}/facade-module-study.jpg`,
          "diagram",
          "Façade study: the overall wave silhouette, a rectangular module applied to it, a variation of glass tones across the modules, and the resulting elevation with the city behind.",
          "Façade — module and glass variation",
        ),
        img(
          `${P}/housing-unit-types.jpg`,
          "drawing",
          "Housing unit plans for types A, B and C: single-level and two-level apartments with angled outer walls following the curve of the deck, each with kitchen, bathroom and sleeping area.",
          "Housing — unit types A, B, C",
        ),
        img(
          `${P}/exploded-axonometric.jpg`,
          "diagram",
          "Exploded axonometric of the library: roof, floating masses, second floor slab, façade, first floor slab and entrance, with a legend for community space, reading space, media room, theatre, office, mechanical room and foot spa.",
          "Exploded axonometric",
        ),
      ],
    },
  ],
  credits: [
    { label: "Year", value: "2023" },
    { label: "Location", value: "Han River, Seoul" },
    { label: "Programme", value: "Housing, library, sports, market, square, dock, restaurant" },
    { label: "Status", value: "Academic proposal" },
    { label: "Studio", value: "Ewha Womans University, spring 2023" },
  ],
};
