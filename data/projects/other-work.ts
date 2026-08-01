import { img } from "../media";
import type { Project } from "../types";

const H = "/projects/seoul-family-house";
const G = "/projects/green-lighthouse-study";
const N = "/projects/rebuilding-memory-newark";

export const seoulFamilyHouse: Project = {
  slug: "seoul-family-house",
  title: "A House for a Seoul Family",
  titleKo: "즐거운 나의 집",
  category: "House / Client project",
  location: "Seoul",
  status: "other",
  order: 1,
  summary:
    "A two-storey house designed with a citizen client as a student coordinator in the Seoul 즐거운 나의 집 programme.",
  meta: [
    { label: "Location", value: "Seoul" },
    { label: "Type", value: "Detached house" },
    { label: "Role", value: "Student coordinator — design with a citizen client" },
    { label: "Programme", value: "Studio, living, dining, guest room, bedrooms, terrace, pool" },
  ],
  intro: [
    "The client asked for three things: a warm space, a comfortable one separated from work, and somewhere friends could be invited. The brief was met literally — floor-to-ceiling windows for physical warmth, a clear split between the client's studio and the rest of the house, and a ground floor that can open up for guests.",
    "A corridor-type structure sets the central axis. The mass is expanded, then cut, and the cut becomes a bridge space between the two halves: on the ground floor, studio, guest room, living and dining; above, bedrooms, a terrace and a pool.",
  ],
  hero: img(
    `${H}/hero-exterior.jpg`,
    "render",
    "Exterior view of a white brick house in a garden: a glazed double-height corner to the left, a solid brick wing to the right, and an open upper terrace with lounge chairs between them.",
  ),
  sections: [
    {
      type: "list",
      heading: "Brief",
      rows: [
        { label: "Warm", value: "Physically warm space made by floor-to-ceiling windows" },
        { label: "Comfortable", value: "Living areas separated from the client's work" },
        { label: "Welcoming", value: "A house where friends can be invited and stay" },
      ],
    },
    {
      type: "pair",
      items: [
        img(
          `${H}/plan-1f.jpg`,
          "drawing",
          "Ground floor plan at 1:50: studio, living room with a long table, guest room, kid's playroom, dining room with kitchen island, and a garden to the west, with parking to the east.",
          "1F plan 1:50",
        ),
        img(
          `${H}/plan-2f.jpg`,
          "drawing",
          "First floor plan at 1:50: child's room and bedroom to the west, bathroom between them, and a terrace opening onto a long pool along the southern edge.",
          "2F plan 1:50",
        ),
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${H}/sections.jpg`,
        "drawing",
        "Two sections through the house: the first cutting through guest room, living room and studio with the stair rising to the bedroom, the second through dining room and living room with the terrace above.",
        "Sections",
      ),
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${H}/elevations.jpg`,
        "drawing",
        "Front, left and right elevations of the house: white brickwork against full-height glazing, a timber-slatted screen at the entrance and the recessed upper terrace.",
        "Elevations",
      ),
    },
    {
      type: "sequence",
      heading: "Boards",
      columns: 1,
      items: [
        img(
          `${H}/board-process.jpg`,
          "board",
          "Process board: the client's three requirements, the site constraints, a strategy diagram splitting rest space from living space across two floors, and a six-step design process from corridor-type structure through expansion, incision and bridge space to the final mass, with reference interior images.",
          "Requirements, strategy and design process",
        ),
        img(
          `${H}/board-drawings.jpg`,
          "board",
          "Drawing board pairing the 1:50 ground and first floor plans above the two sections through the house.",
          "Plans and sections",
        ),
      ],
    },
  ],
  credits: [
    { label: "Location", value: "Seoul" },
    { label: "Type", value: "House for a citizen client" },
    { label: "Role", value: "Student coordinator and designer" },
    {
      label: "Programme",
      value: "즐거운 나의 집 — Seoul programme pairing student coordinators with citizen clients",
    },
  ],
};

export const newarkAdaptiveReuse: Project = {
  slug: "rebuilding-memory-newark",
  title: "Rebuilding Memory through Adaptive Reuse",
  year: "2025",
  category: "Research",
  location: "Newark, New Jersey",
  status: "other",
  order: 2,
  summary:
    "An essay on the Hahne & Co. building and the local logic of transformation in Newark — adaptive reuse as rewriting rather than preservation.",
  meta: [
    { label: "Year", value: "2025" },
    { label: "Type", value: "Research essay" },
    { label: "Course", value: "Architecture and the City — Ewha Womans University" },
    { label: "Instructor", value: "Prof. Hyeri Park" },
  ],
  intro: [
    "Newark was once called Brick City: red kilns along the Passaic River made the factories and rowhouses that defined its skyline, and when industry collapsed those same bricks became monuments to loss.",
    "The essay reads three sites — Hahne & Co., Ironside Newark and the Ballantine Brewery — to argue that adaptive reuse in Newark is not preservation but transformation. Each project rewrites the city's identity through material texture, social agency and institutional partnership; recovery came not from imported capital but from local collaboration between universities, artists and small developers reclaiming the physical and social fabric.",
  ],
  hero: img(
    `${N}/fig1-reuse-sites-map.jpg`,
    "diagram",
    "Parcel-level land-use map of downtown Newark with ward boundaries, the redevelopment plan area hatched, and the three adaptive reuse sites — Hahne & Co., Ironside Newark and Ballantine Brewery — marked in violet along Broad Street between Broad Street Station and Newark Penn Station.",
    "Adaptive reuse sites in downtown Newark. Author's overlay on QGIS, 2025",
  ),
  sections: [
    {
      type: "text",
      heading: "Argument",
      body: [
        "Newark's identity was forged by both industrial production and African American culture: the brick industry gave the city its material DNA, while the Great Migration brought the cultural and political energy that made it a centre of Black Arts, jazz and civil rights activism by the 1960s.",
        "The decline of manufacturing in the 1970s left large voids — abandoned warehouses and hollowed civic cores. The essay treats those voids as vessels for cultural resilience rather than as failures, and tests that reading against the material and institutional history of three sites.",
      ],
    },
    {
      type: "text",
      heading: "Hahne & Co.",
      ko: "From commerce to culture",
      body: [
        "Built in 1901, the Hahne & Co. Department Store represented early twentieth-century optimism in retail and urban life: a steel frame and red-brick façade, and one of the first department stores in New Jersey with open-plan interiors and large civic windows. After it closed in 1986 the building stood vacant for decades.",
        "In 2017 Beyer Blinder Belle and L+M Development Partners, working with Rutgers University, restored it as a mixed-use cultural hub. The renovation preserved the façade while inserting new public programmes — among them Express Newark, a collaborative art space advancing the legacy of the Black Arts Movement of the 1970s.",
      ],
    },
    {
      type: "text",
      heading: "Ironside Newark",
      ko: "Industry rewired",
      body: [
        "A former freight warehouse, Ironside Newark (Perkins Eastman, 2018) adapts industrial geometry to the digital age. The original brick grid remains intact while glass volumes insert transparency — literally and metaphorically — into a once-closed typology.",
        "It was developed through a tri-partnership among Rutgers University, city agencies and local developers, a model of inclusive governance that is rare in US post-industrial cities. It reveals a city learning to build again with its own institutions, not imported investors.",
      ],
    },
    {
      type: "text",
      heading: "Ballantine Brewery",
      ko: "The people's memory",
      body: [
        "Once one of the largest breweries in America, Ballantine closed in 1972, leaving massive red-brick structures behind. In the 1990s local artists began informally reoccupying the site, converting it into studios and performance halls.",
        "Without formal funding the project evolved organically into a community university — a living laboratory for local culture. It embodies bottom-up reuse, driven by community agency rather than market capital.",
      ],
    },
    {
      type: "list",
      heading: "Comparative framework",
      rows: [
        {
          label: "Hahne & Co.",
          value:
            "Department store → art and education hub · University–developer · Black Arts continuity",
        },
        {
          label: "Ironside",
          value: "Freight warehouse → office and tech · Public–private · Civic transparency",
        },
        {
          label: "Ballantine",
          value: "Brewery → artist studios · Community-led · Cultural commons",
        },
      ],
    },
    {
      type: "text",
      heading: "From fragments to network",
      body: [
        "Urban analysis of satellite imagery reveals a measurable reintensification of the downtown core: pedestrian flows, civic events and creative industries now align along Broad Street, connecting the three sites into a linear cultural corridor. The pattern suggests adaptive reuse has scaled up from isolated building projects to a citywide morphology of continuity.",
        "Demographic data confirms the spatial recovery. Between 2010 and 2020 Newark's population grew by 12.4%, more than twice the New Jersey state average of 5.7% (U.S. Census, 2021), reversing a decline that had run since the 1930s.",
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${N}/fig6-morphology-2005-2025.jpg`,
        "diagram",
        "Paired satellite views of downtown Newark in 2005 and 2025 with the redeveloped core shaded orange and the university district blue: the orange area expands substantially by 2025 and extends south-east along the corridor towards the Prudential Center.",
        "Urban morphological change in downtown Newark, 2005–2025. Source: Google Earth; author's analysis, 2025",
      ),
    },
    {
      type: "pair",
      items: [
        img(
          `${N}/fig7a-population-growth.jpg`,
          "diagram",
          "Bar chart comparing population growth from 2010 to 2020: Newark at 12.4 per cent against the New Jersey state average of 5.7 per cent.",
          "Population growth, Newark and New Jersey, 2010–2020",
        ),
        img(
          `${N}/fig7b-population-trend.jpg`,
          "diagram",
          "Line chart of Newark's population from 1930 to 2020: a peak above 440,000 in 1930, a long decline to roughly 270,000 by 1990, and a recovery to about 305,000 by 2020.",
          "Newark population trend, 1930–2020. Source: U.S. Census Bureau; author's visualization, 2025",
        ),
      ],
    },
    {
      type: "text",
      heading: "The Newark model",
      body: [
        "The three projects collectively define what the essay calls the Newark Model of Adaptive Reuse, structured around three interdependent logics. Material logic: locally produced brick sustains the tactile continuity of the city. Cultural logic: Black-led creative programmes transform architecture into instruments of justice. Institutional logic: city–university–community collaborations replace extraction with stewardship.",
        "In Newark, adaptive reuse is not nostalgia — it is authorship. The city rebuilds itself not by forgetting but by remembering differently, and the red brick, once a symbol of labour, becomes a medium of cultural dignity and continuity.",
      ],
    },
  ],
  credits: [
    { label: "Year", value: "2025" },
    { label: "Course", value: "Architecture and the City, autumn 2025" },
    { label: "Instructor", value: "Prof. Hyeri Park" },
    { label: "Institution", value: "Ewha Womans University" },
    { label: "Keywords", value: "Adaptive reuse · Local identity · Industrial heritage · Resilience" },
    {
      label: "Drawings",
      value:
        "All drawings by the author — mapping on QGIS parcel data, morphological analysis on Google Earth imagery, population charts on U.S. Census Bureau figures",
    },
  ],
};

export const greenLighthouseStudy: Project = {
  slug: "green-lighthouse-study",
  title: "Green Lighthouse",
  year: "2023",
  category: "Technical study",
  location: "Copenhagen",
  status: "other",
  order: 3,
  summary:
    "An environmental systems study of the Green Lighthouse in Copenhagen: daylight, hybrid ventilation, biomass heating and passive cooling.",
  meta: [
    { label: "Year", value: "2023" },
    { label: "Subject", value: "Green Lighthouse, Copenhagen" },
    { label: "Type", value: "Building environmental systems case study" },
  ],
  intro: [
    "A case study of an existing building rather than a design project. The analysis takes the Green Lighthouse apart system by system — internal climate, e-stack ventilation, biomass boiler and space heating, indoor lighting and passive cooling — and checks each against measured performance.",
    "U-values and g-values are tabulated for roof windows, façade windows and external awning blinds; room temperature distribution, annual space-heating consumption and the fuel mix of the biomass supply are read from the building's own monitoring data.",
  ],
  hero: img(
    `${G}/board-1.jpg`,
    "board",
    "Analysis board on the Green Lighthouse in Copenhagen: internal climate charts and U-value tables, an e-stack ventilation description, a biomass fuel pie chart and room temperature graphs, around a cutaway section showing hybrid ventilation, solar heating, radiator floor and surplus heat storage.",
    "Systems analysis, part one",
  ),
  sections: [
    {
      type: "image",
      size: "wide",
      media: img(
        `${G}/board-2.jpg`,
        "board",
        "Second analysis board continuing the study with further performance data, system diagrams and photographs of the building's daylight and shading strategies.",
        "Systems analysis, part two",
      ),
    },
  ],
  credits: [
    { label: "Year", value: "2023" },
    { label: "Subject", value: "Green Lighthouse, Copenhagen — existing building" },
    { label: "Type", value: "Coursework case study" },
  ],
};
