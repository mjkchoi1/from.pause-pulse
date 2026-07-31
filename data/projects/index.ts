import type { Project } from "../types";
import { fourRest } from "./four-rest";
import { fromPauseToPulse } from "./from-pause-to-pulse";
import {
  greenLighthouseStudy,
  newarkAdaptiveReuse,
  seoulFamilyHouse,
} from "./other-work";
import { silverWorld } from "./silver-world";
import { urbanVenue } from "./urban-venue";
import { waveToChange } from "./wave-to-change";

export const projects: Project[] = [
  fromPauseToPulse,
  silverWorld,
  urbanVenue,
  waveToChange,
  fourRest,
  seoulFamilyHouse,
  newarkAdaptiveReuse,
  greenLighthouseStudy,
];

const byOrder = (a: Project, b: Project) => a.order - b.order;

export const selectedWork = projects
  .filter((p) => p.status === "selected")
  .sort(byOrder);

export const otherWork = projects.filter((p) => p.status === "other").sort(byOrder);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Next project in reading order: selected work loops, other work follows its own list. */
export function getNextProject(slug: string): Project | undefined {
  const list = getProject(slug)?.status === "selected" ? selectedWork : otherWork;
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return undefined;
  return list[(i + 1) % list.length];
}
