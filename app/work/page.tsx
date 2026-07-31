import type { Metadata } from "next";
import WorkIndex from "@/components/WorkIndex";
import { otherWork, selectedWork } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Studio, urban, competition, client and research work by Jiyeon Lee, 2023–2026.",
};

export default function WorkPage() {
  return (
    <div className="page pt-10 md:pt-16">
      <h1 className="sr-only">Work</h1>
      <WorkIndex selected={selectedWork} other={otherWork} />
    </div>
  );
}
