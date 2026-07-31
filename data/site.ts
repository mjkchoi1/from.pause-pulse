/** Site-wide identity. Only verified information — see content-audit.md. */
export const site = {
  name: "Jiyeon Lee",
  nameKo: "이지연",
  discipline: "Architecture",
  school: "Ewha Womans University",
  // TODO(author): add a public contact email when one is decided.
  // Left empty on purpose — nothing is rendered while this is empty.
  email: "",
  description:
    "Architecture portfolio of Jiyeon Lee — studio, urban, competition and research work, Ewha Womans University.",
} as const;
