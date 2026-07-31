import { img } from "../media";
import type { Project } from "../types";

const P = "/projects/four-rest";

export const fourRest: Project = {
  slug: "four-rest",
  title: "FOUR, REST",
  year: undefined,
  category: "Competition / Urban forest",
  location: "Incheon",
  status: "selected",
  order: 5,
  summary:
    "A competition entry for an urban forest in Incheon, where planting is selected for carbon uptake as much as for the four kinds of rest it offers.",
  meta: [
    { label: "Location", value: "Michuhol-gu, Incheon, South Korea" },
    { label: "Type", value: "Urban forest design competition" },
    { label: "Programme", value: "Forest trail, lawn park, wildflower garden, rental rest spaces" },
  ],
  intro: [
    "The title works as an acrostic: Urban rest, rest from Carbon, rest in Life, an Area for rest. Four readings of the same word set the brief for a linear forest along an Incheon boulevard.",
    "Incheon's greenhouse-gas emissions reached 66.77 MtCO₂eq in 2019, rising 5.7% a year since 2000, and the site sits in a district with high dust and fog. The proposal answers with planting rather than construction: high-sequestration species arranged in zigzag bands to keep air moving, soil-compaction-tolerant species where footfall is heaviest, dense screening against the roadway, and fire-resistant species forming a break along the road edge.",
  ],
  hero: img(
    `${P}/board-concept.jpg`,
    "board",
    "Competition concept board: the four-part acrostic Urban, Carbon, Life, Area leading to a carbon-neutral diagram, a net-zero cycle, and species tables pairing each kind of rest with rose, lily tree, cherry blossom, pine, magnolia, willow and silk tree.",
  ),
  sections: [
    {
      type: "text",
      heading: "Reading the site",
      body: [
        "Analysis covers particulate matter through 2023, the city's emissions trend, prevailing north-westerly winds and an annual mean of 12.5 °C, and a SWOT reading that identifies dense surrounding population and the levelled ground of the boulevard project as the site's real opportunities.",
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/board-site-analysis.jpg`,
        "board",
        "Site analysis board: location maps of the Incheon boulevard site with subway lines, a graph of fine and ultrafine dust through 2023, greenhouse-gas emission figures from 2000 to 2019, a climate summary and a SWOT diagram, above two perspective views of a forest trail and a lawn plaza.",
        "Site analysis — air quality, climate, SWOT",
      ),
    },
    {
      type: "text",
      heading: "Six programmes",
      body: [
        "The forest is occupied rather than fenced: a hidden vegetable garden in the middle of the city, a walking trail of red clay and acupressure paths, self-powered exercise equipment that returns energy to the site, a lawn for unhurried leisure, a wildflower garden that shifts through the seasons, and small rental rest spaces built of nature-friendly materials among the trees.",
      ],
    },
    {
      type: "image",
      size: "wide",
      media: img(
        `${P}/board-programs.jpg`,
        "board",
        "Programme board with six illustrated vignettes — garden in forest, walking trail, self-powered exercise equipment, lawn park, year-round wildflower garden and rental rest space — each captioned with its kind of rest, above two renders of a timber cabin among planting and a cultivated clearing looking out over the city.",
        "Six programmes",
      ),
    },
  ],
  credits: [
    { label: "Location", value: "Michuhol-gu, Incheon, South Korea" },
    { label: "Type", value: "Urban forest design competition entry" },
    { label: "Programme", value: "Forest trail, garden, lawn park, wildflower garden, rest spaces" },
  ],
};
