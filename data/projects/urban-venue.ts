import { img } from "../media";
import type { Project } from "../types";

const P = "/projects/urban-venue";

/*
  TODO(author): the presentation sheets credit the programme diagram to
  Jiyeon Lee by name, which suggests this studio ran with named contributions.
  If the masterplan was team work, add the team to `credits` — the page makes
  no authorship claim on its own.
*/

export const urbanVenue: Project = {
  slug: "urban-venue",
  title: "Urban Venue",
  year: "2025",
  category: "Urban design",
  location: "Gireum-dong, Seoul",
  status: "selected",
  order: 2,
  summary:
    "A district strategy for Gireum-dong after New Town redevelopment, and a four-lobed public building where its four programmes overlap.",
  meta: [
    { label: "Year", value: "2025" },
    { label: "Location", value: "Gireum-dong, Seongbuk-gu, Seoul" },
    { label: "Scale", value: "District masterplan and one public building" },
    { label: "Type", value: "Urban design studio" },
  ],
  intro: [
    "Between 2002 and 2024 Gireum-dong was rebuilt almost completely. Shanty settlements and narrow lanes gave way to large apartment complexes; collector roads were added and bus stops redistributed, so the district shifted from dependence on a single transit node to a more even pedestrian and transit grid. Total population fell while the population over 65 kept rising.",
    "The masterplan works with that condition rather than against it. Four overlapping districts — Fashion, Smart Farm, Start-up Hub and Senior Hub — are laid over the new street grid, and the building sits where all four meet. Its form is treated as a three-dimensional Venn diagram: four triangular masses generated between the site's pedestrian desire lines, filleted, then linked by a single red loop that becomes the circulation spine.",
  ],
  hero: img(
    `${P}/aerial-view.jpg`,
    "render",
    "Aerial view of a four-lobed building with terracotta-fin façades and planted roofs stepping over a public courtyard, set into a block of white apartment slabs and tree-lined streets.",
  ),
  sections: [
    {
      type: "text",
      heading: "Twenty-two years",
      body: [
        "The timeline pairs housing transformation with mobility. In 2002 the area was low-rise housing and makeshift dwellings served by a fragmented street network and a single station; by 2024 the New Town project had replaced the fabric with high-rise complexes, added collector and connecting roads, spread bus stops across several access points and reworked the station front into open plazas.",
      ],
    },
    {
      type: "image",
      size: "full",
      media: img(
        `${P}/historic-timeline.jpg`,
        "board",
        "Historic timeline board comparing Gireum-dong in 2002 and 2024: aerial figure-ground studies of shanty settlements and narrow roads against high-rise apartment complexes and an expanded road network, over graphs of total and elderly population change.",
        "Historic timeline, 2002–2024",
      ),
    },
    {
      type: "sequence",
      heading: "District analysis",
      columns: 2,
      items: [
        img(
          `${P}/road-network.jpg`,
          "diagram",
          "Road hierarchy diagram of the district: main roads in dark blue, secondary roads in mid blue and pedestrian routes as dotted lines, spreading through the wedge-shaped boundary.",
          "Road hierarchy",
        ),
        img(
          `${P}/open-space-network.jpg`,
          "diagram",
          "Open space diagram overlaying the road hierarchy with hatched green parcels, from the linear park along the western spine to the large oval park in the south-east.",
          "Open space",
        ),
        img(
          `${P}/zoning.jpg`,
          "diagram",
          "Zoning plan colouring the district into residential, commercial, mixed and civic parcels, with hatching distinguishing existing and proposed uses.",
          "Zoning",
        ),
        img(
          `${P}/masterplan-green.jpg`,
          "drawing",
          "Masterplan drawing showing proposed street trees, orange-toned pedestrian routes, blue cycle loops, green roofs and planted courtyards threaded through the existing blocks.",
          "Masterplan — green and pedestrian network",
        ),
      ],
    },
    {
      type: "text",
      heading: "Four districts",
      body: [
        "Each field carries its own programme — recycled fabric lab, showroom and upcycling workshop in the Fashion District; AI lab, bio-fibre crop farm and greenhouse deck in the Smart Farm; co-working and co-living in the Start-up Hub; community garden, care centre and intergenerational workshop in the Senior Hub. The overlaps are where the hybrids appear: a plant-dye lab between fashion and farming, a skill-transfer studio between start-ups and seniors.",
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/district-strategy.jpg`,
        "diagram",
        "Programme diagram: four overlapping coloured fields — Fashion District, Smart Farm, Start-up Hub and Senior Hub — each labelled with its programmes, with hybrid programmes named in the zones where the fields intersect.",
        "Four districts and their overlaps",
      ),
    },
    {
      type: "image",
      size: "full",
      media: img(
        `${P}/urban-model.jpg`,
        "photo",
        "Physical urban model photographed from above: the district picked out in yellow, blue, pink, green and violet blocks against a white contoured city, with the park void reading as a green oval.",
        "District model",
      ),
    },
    {
      type: "sequence",
      heading: "From paths to mass",
      intro:
        "The building is generated in five moves, each kept visible rather than smoothed away: pedestrian desire lines, masses set between them, edges filleted, volumes linked with overlapping geometry, and the whole read as one looping figure.",
      columns: 1,
      items: [
        img(
          `${P}/massing-process.jpg`,
          "diagram",
          "Five-step massing sequence in red line: establishing primary pedestrian paths, generating building masses in response to the path layout, softening the mass edges through filleting, linking the masses with overlapping Venn-inspired geometry, and integrating the connected volumes into a unified whole.",
          "Massing sequence",
        ),
        img(
          `${P}/site-plan.jpg`,
          "drawing",
          "Site plan at 1:500: the four filleted volumes set on a corner block, planted courtyards between them, pedestrian routes crossing diagonally through the site and street trees along all four edges.",
          "Site plan 1:500",
        ),
        img(
          `${P}/program-axonometric.jpg`,
          "diagram",
          "Exploded programme axonometric over the street: library, greenhouse and pop-up markets at ground level, greenhouse, exhibition hall and handcraft shops on the second floor, library and public gardening space on the third, café, event hall and seminar rooms on the fourth and fifth, and an atelier at the top.",
          "Programme axonometric, 1F–6F",
        ),
      ],
    },
    {
      type: "text",
      heading: "One ground plane",
      body: [
        "The central plaza, internal passages and roof gardens are conceived as one extended ground that rises, folds and branches through the four masses. Publicness is not held in a lobby: it is distributed along the loop as a gradient from the street up to the roof, so the building can be crossed as a shortcut, occupied for an event, or simply walked as a vertical park.",
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/model-photos.jpg`,
        "photo",
        "Three photographs of the physical model in cream card: close views of the fluted balustrade wrapping the upper deck over slender columns, and a long view across the model with white trees and small red figures marking the public route.",
        "Physical model",
      ),
    },
    {
      type: "sequence",
      heading: "Presentation sheets",
      intro:
        "The sheets as presented, carrying the full written argument alongside the drawings.",
      columns: 1,
      items: [
        img(
          `${P}/sheet-concept.jpg`,
          "board",
          "Concept sheet: the five-step massing diagram across the top, four columns of text explaining how pedestrian desire lines become a continuous public figure, and a render of the central plaza with people crossing between the curved volumes.",
          "Concept sheet",
        ),
        img(
          `${P}/sheet-floor-plans.jpg`,
          "board",
          "Colour-coded floor plan sheet: the exploded axonometric from ground floor to sixth-floor atelier with programme legends, beside a render of the planted courtyard and two columns of text describing the vertical sequence.",
          "Colour-coded floor plan sheet",
        ),
        img(
          `${P}/sheet-venn-programme.jpg`,
          "board",
          "Programme sheet titled Venn Diagram: Program, showing the four overlapping district fields mapped onto the street grid with every programme named.",
          "Programme sheet",
        ),
      ],
    },
  ],
  credits: [
    { label: "Year", value: "2025" },
    { label: "Location", value: "Gireum-dong, Seongbuk-gu, Seoul" },
    { label: "Programme", value: "Markets, greenhouse, library, workshops, event halls, atelier" },
    { label: "Status", value: "Academic proposal" },
    { label: "Studio", value: "Ewha Womans University, autumn 2025" },
  ],
};
