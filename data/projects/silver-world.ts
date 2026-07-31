import { img } from "../media";
import type { Project } from "../types";

const P = "/projects/silver-world";

export const silverWorld: Project = {
  slug: "silver-world",
  title: "Silver World",
  titleKo: "실버 세대를 위한, 실버세대에 의한, 실버 세대의 공간",
  year: "2024",
  category: "Adaptive reuse / Senior community",
  location: "Wonju",
  status: "selected",
  order: 2,
  summary:
    "The disused Wonju Station is reworked into a senior community: work, learning and living kept inside the structure a generation remembers.",
  meta: [
    { label: "Year", value: "2024" },
    { label: "Location", value: "Former Wonju Station, Gangwon, South Korea" },
    { label: "Programme", value: "Community, learning, wellness, housing" },
    { label: "Type", value: "Adaptive reuse" },
  ],
  intro: [
    "The project starts from a question the author put to the site: which part of the old Wonju Station survives in the memory of the generation that used it?",
    "Rather than clearing the station, the existing single-storey structure and its long façade are kept as the ground of the scheme. A low podium threads library, dining hall, greenhouse, gym and workshop through the retained frame; two residential towers land on top of it. The intention is not a care facility but a world of one's own for people at a turning point — a place to work, to learn a craft, and to sit down together.",
  ],
  hero: img(
    `${P}/hero-atrium.jpg`,
    "render",
    "Interior of the retained station hall: slender white columns and a deep beam grid throw a lattice of sunlight across the floor, with a timber-screened tea room and a long table beyond.",
  ),
  sections: [
    {
      type: "text",
      heading: "Working with what stands",
      body: [
        "The existing structure and façade are surveyed and retained as the datum of the project. New floor plates and a pair of residential towers are set into and above the old frame, so that the memory of the station is carried by the building rather than by a plaque.",
      ],
    },
    {
      type: "pair",
      items: [
        img(
          `${P}/program-axonometric.jpg`,
          "diagram",
          "Exploded programme axonometric: the retained station structure and façade shown as reference at top left, then the ground floor with library, gym, dining hall, greenhouse, community lounge, studio and gateball court, a second floor of co-working office, shared kitchen, auditorium, clinic, lecture, art and music rooms, and residential towers from the third floor up.",
          "Programme axonometric — retained structure, podium, towers",
        ),
        img(
          `${P}/massing-diagram.jpg`,
          "diagram",
          "Four-step massing diagram: crossing circulation axes across the existing footprint, extension of the low volume along those axes, the two residential towers dropped onto the podium, and the resulting composition.",
          "Massing — axes, podium, towers",
        ),
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/site-plan.jpg`,
        "drawing",
        "Site plan at 1:500 showing the cross-shaped podium with glazed greenhouse and planted courts, the two towers, surrounding low-rise fabric and a car park to the west.",
        "Site plan 1:500",
      ),
    },
    {
      type: "sequence",
      heading: "Plans",
      intro:
        "The ground floor keeps the most public and most physical programmes at grade — library, gym, dining hall, greenhouse, kitchen garden and gateball court. Learning, clinic and exhibition move to the first floor; housing sits above.",
      columns: 1,
      items: [
        img(
          `${P}/plan-1f.jpg`,
          "drawing",
          "First floor plan at 1:200: library and gym along the south edge, a swimming pool and yoga room to the west, dining hall, kitchen and glazed greenhouse to the east, a traditional sarangbang room and kitchen garden to the north, with lounges on the entrance axis.",
          "1F plan 1:200",
        ),
        img(
          `${P}/plan-2f.jpg`,
          "drawing",
          "Second floor plan at 1:200: lecture rooms, art and music rooms, clinic, small auditorium, co-working office and shared kitchen around a double-height void, with exhibition space to the east and housing plans inset.",
          "2F plan 1:200",
        ),
      ],
    },
    {
      type: "sequence",
      heading: "Sections and elevations",
      columns: 2,
      items: [
        img(
          `${P}/section-a.jpg`,
          "drawing",
          "Section A-A′ cutting through the swimming pool, dining hall and shared kitchen, with the twenty-metre residential tower rising behind the twelve-metre podium.",
          "Section A-A′",
        ),
        img(
          `${P}/section-b.jpg`,
          "drawing",
          "Section B-B′ through the podium showing the double-height community hall, the stepped seating and the second residential block beyond.",
          "Section B-B′",
        ),
        img(
          `${P}/elevation-front.jpg`,
          "drawing",
          "Front elevation: a long glazed colonnade at ground level with the two residential volumes of differing height set back above it.",
          "Front elevation",
        ),
        img(
          `${P}/elevation-side.jpg`,
          "drawing",
          "Side elevation showing the balconied face of the taller tower and the low glazed podium extending to the greenhouse.",
          "Side elevation",
        ),
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/render-exterior-aerial.jpg`,
        "render",
        "Evening view over the complex: the glazed podium wrapping a planted courtyard with the two residential blocks of differing height rising behind, and the swimming pool lit under the colonnade.",
        "The podium and the two residential blocks at dusk",
      ),
    },
    {
      type: "sequence",
      heading: "Inside",
      columns: 2,
      items: [
        img(
          `${P}/render-promenade.jpg`,
          "render",
          "Interior street beneath the retained beam grid: residents at café tables, a stair rising to the upper gallery and daylight patterning the floor.",
        ),
        img(
          `${P}/render-gallery.jpg`,
          "render",
          "Upper gallery hung with photographs, looking across a void to the reading tables and the glazed north wall.",
        ),
        img(
          `${P}/render-greenhouse-court.jpg`,
          "render",
          "Courtyard between the glazed greenhouse and a timber-framed pavilion at dusk, with residents walking and sitting under the trees.",
        ),
        img(
          `${P}/render-gateball-lawn.jpg`,
          "render",
          "Gateball lawn on the south side, framed by the glazed podium with the swimming pool visible behind the glass.",
        ),
      ],
    },
    {
      type: "pair",
      items: [
        img(
          `${P}/model-01.jpg`,
          "photo",
          "Physical model on a black ground: acrylic podium with the two solid white residential blocks, roof terraces and the transparent greenhouse volume.",
          "Model 1:200",
        ),
        img(
          `${P}/model-02.jpg`,
          "photo",
          "Second model view from the opposite corner, showing the cross-shaped podium and the recessed courtyards between the towers.",
          "Model 1:200",
        ),
      ],
    },
    {
      type: "text",
      heading: "Envelope",
      body: [
        "The parapet and green-roof build-up were resolved at 1:20. Above the concrete slab: vapour barrier, 220 mm thermal insulation, waterproofing, 50 mm protection mortar, a 30 mm drainage mat and 300 mm of topsoil. The wall carries 190 mm insulation behind reinforcing mesh, basecoat and stucco, and the glazing is held clear of the coping on anchors and spacers so the planted roof reads as a continuous line from outside.",
      ],
    },
    {
      type: "image",
      size: "inset",
      media: img(
        `${P}/envelope-detail.jpg`,
        "drawing",
        "Section detail at 1:20 through parapet, green roof and external wall: topsoil, drainage mat, protection mortar, thermal insulation and vapour barrier over the concrete slab; stucco, reinforcing mesh, insulation and waterproofing on the wall; glazing on anchors and spacers; ceramic tile floor build-up and a drainage pipe at the loadbearing base.",
        "Section detail 1:20 (A2)",
      ),
    },
    {
      type: "sequence",
      heading: "Presentation boards",
      intro:
        "The two boards as they were pinned up: the title board carrying the atrium view, concept diagram and site plan, and the drawing board holding plans, sections, elevations and renders together.",
      columns: 1,
      items: [
        img(
          `${P}/board-title.jpg`,
          "board",
          "Title board reading SILVER WORLD above the Korean tagline, with the atrium render across the top, the project statement and site plan at 1:500 below, the four-step concept diagram, an exterior render, and the exploded programme axonometric down the right-hand side.",
          "Title board",
        ),
        img(
          `${P}/board-drawings.jpg`,
          "board",
          "Drawing board arranging the 1F and 2F plans at 1:200 across the top, sections A-A′ and B-B′ and two elevations beneath them, with a vertical column of four interior and exterior renders down the right edge.",
          "Drawing board",
        ),
      ],
    },
  ],
  credits: [
    { label: "Year", value: "2024" },
    { label: "Location", value: "Former Wonju Station, Gangwon, South Korea" },
    { label: "Programme", value: "Library, dining, wellness, workshops, clinic, housing" },
    { label: "Status", value: "Academic proposal" },
    { label: "Studio", value: "Ewha Womans University, spring 2024" },
  ],
};
