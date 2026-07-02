export const project = {
  title: "From Pause to Pulse",
  subtitleKo: "액티브 시니어를 위한 자립형 상생 플랫폼",
  subtitleEn:
    "Empowering Active Seniors through a Self-sustaining Living Platform",
  designer: "이지연",
  designerEn: "Jiyeon Lee",
  studentId: "2173018",
  studio: "2026-1 건축설계 7",
  year: 2026,
  projectType: "Architecture Graduation Project",
  location: "Cheongju, South Korea",
  locationKo: "충청북도 청주시 상당구",
  site: "Site of the Former Lotte Young Plaza Cheongju",
  siteKo: "구 롯데 영플라자 청주점 부지",
  proposal: "Redevelopment proposal for a long-vacant commercial site",
  keywords: [
    "Pause",
    "Pulse",
    "Active Senior",
    "Self-sustaining Living Platform",
    "Lifelong Growth",
    "Public Living Room",
    "Tiny Town",
    "Wellness Maru",
    "Urban Promenade",
  ],
} as const;

export const nav = [
  { label: "Prologue", href: "#prologue" },
  { label: "Site", href: "#site" },
  { label: "Concept", href: "#concept" },
  { label: "Program", href: "#program" },
  { label: "Plans", href: "#plans" },
  { label: "Sections", href: "#sections" },
  { label: "Closing", href: "#closing" },
] as const;

export const images = {
  hero: {
    src: "/images/hero-main-render.png",
    width: 1757,
    height: 1049,
    alt: "Exterior render of From Pause to Pulse: a bright stacked civic building with a translucent mesh volume, terraces, and planted plaza in the old downtown of Cheongju, with the Cheoldanggan plaza in the foreground.",
  },
  siteAnalysis: {
    src: "/images/site-analysis.png",
    width: 2600,
    height: 1839,
    alt: "Site analysis of central Cheongju: a figure-ground map marking the site between Seongan-gil youth commercial street and Jungang Park senior district, with aging-population statistics and diagrams of youth and senior flows meeting at the underutilized site.",
  },
  plan1f: {
    src: "/images/plan-1f.png",
    width: 2800,
    height: 1980,
    alt: "First floor site plan at 1:200 showing the urban promenade cutting diagonally through two ground-floor volumes containing a cooking studio, gallery, café, and performance hall, surrounded by community garden, pop-up markets, community dining, gardens, and a performance lawn.",
  },
  sectionA: {
    src: "/images/section-a.png",
    width: 2800,
    height: 1980,
    alt: "Longitudinal section A showing basement parking, ground-floor cooking studio and gallery, an escalator and ramped library, co-working and mentoring levels, yoga, dance and Pilates studios, communal kitchen, short-stay units, and duplex co-living under pitched roofs.",
  },
  sectionB: {
    src: "/images/section-b.png",
    width: 2800,
    height: 1980,
    alt: "Longitudinal section B showing café and cooking studio at ground level, seminar room, hobby studio and library above, a gym, locker and sauna wellness floor, and studio units, co-living, and an outdoor lounge with roof gardens on the upper floors, with an atelier and parking below ground.",
  },
  exploded: {
    src: "/images/exploded-axonometric.png",
    width: 2000,
    height: 4669,
    alt: "Exploded axonometric diagram of the seven-floor building: a public ground floor and lifelong growth hub on floors one to three, a public living room on the fourth floor, and the Tiny Town residential village on floors five to seven, with a pink promenade flowing from the city plaza through the building.",
  },
  pauseConnectPulse: {
    src: "/images/pause-connect-pulse.png",
    width: 2600,
    height: 1300,
    alt: "Three-part concept section diagram: a grey stacked senior facility with separated floors, an intermediate stage where ramps and escalators begin to connect levels, and the final stage where an open ramped building pulses with café, music, and people flowing to and from the city.",
  },
  floorPlanStrip: {
    src: "/images/floor-plan-strip.png",
    width: 4412,
    height: 939,
    alt: "Horizontal strip of six floor plans from the second to the seventh floor: lifelong growth hub plans with mentoring, seminar and library spaces, the active living zone with gym and studios and running track, and residential zone plans with studio units, communal kitchen, co-living, and rooftop garden.",
  },
} as const;

export const prologue = {
  opening: ["After retirement, the rhythm of life does not end.", "It pauses — waiting for a new pulse."],
  body: "From Pause to Pulse reinterprets active seniors not as passive recipients of care, but as experienced urban subjects with knowledge, skills, social energy, and the desire to remain connected.",
  bodyKo:
    "이 프로젝트는 은퇴 이후의 삶을 보호의 대상이 아닌, 전문성과 숙련된 기술, 사회적 경험, 그리고 여전히 도시 안에서 활동하고자 하는 의지를 가진 능동적 주체의 시간으로 다시 읽는다.",
  question:
    "What kind of architecture can help active seniors maintain independence, continue meaningful roles, and build reciprocal relationships with the city and other generations?",
} as const;

export const siteSection = {
  heading: "A dormant commercial site becomes a civic threshold for new social growth.",
  facts: [
    { label: "Location", value: "Cheongju, South Korea — Sangdang-gu, Nammun-ro" },
    { label: "Site", value: "Site of the Former Lotte Young Plaza Cheongju" },
    { label: "Proposal", value: "Redevelopment proposal for a long-vacant commercial site" },
    { label: "Condition", value: "Urban node between youth, senior, civic, and commercial flows" },
  ],
  paragraphs: [
    "The site sits at a hinge of central Cheongju: the youth-oriented commercial district of Seongan-gil on one side, and senior-oriented civic spaces such as Jungang Park on the other. It faces the public plaza of Yongdusa-ji Cheoldanggan, placing the project in direct dialogue with the city's cultural landscape.",
    "The long-vacant commercial site is read not as leftover property, but as an urban pause — a dormant condition of the old downtown waiting to be reactivated. Retirement produces a parallel, social pause: a temporary loss of rhythm, role, and identity.",
    "The project connects these two pauses — a paused site and a paused life — and turns them into a single new civic pulse.",
  ],
  stats: [
    { value: "24.5%", label: "Population aged 65+ in Cheongju, 2025 (11.2% in 2000)" },
    { value: "34.7%", label: "Share of seniors identifying as active seniors, 2025 (27.0% in 2020)" },
    { value: "28.4%", label: "Senior population of Jungang-dong, the district around the site" },
  ],
} as const;

export const activeSenior = {
  definition:
    "Active seniors — roughly aged 55 to 69 — are people entering a second phase of life with accumulated experience, professional skill, social energy, and the will to keep living autonomously.",
  definitionKo:
    "액티브 시니어는 경험 · 숙련 · 사회참여 의지를 가진 능동적 고령층(55–69세)으로, 노년의 연장이 아니라 은퇴 이후 제2의 삶을 능동적으로 시작하는 전환기적 주체이다.",
  needs: [
    {
      no: "01",
      title: "Continuing roles",
      ko: "역할 지속",
      description:
        "A structure in which work, volunteering, and the transfer of skills can continue as meaningful social roles after retirement.",
    },
    {
      no: "02",
      title: "Economic independence",
      ko: "경제적 자립",
      description:
        "A base for economic agency — income-generating activity and flexible forms of participation on one's own terms.",
    },
    {
      no: "03",
      title: "Social connection",
      ko: "사회적 연결",
      description:
        "A field of relationships that reduces isolation and makes intergenerational exchange and community formation possible.",
    },
    {
      no: "04",
      title: "Use of experience",
      ko: "경험의 활용",
      description:
        "An environment where accumulated skills and know-how are not shelved, but carried forward into teaching, making, and mentoring.",
    },
    {
      no: "05",
      title: "Autonomous environment",
      ko: "자율적 환경",
      description:
        "An open, flexible spatial structure that residents choose and operate themselves — rather than a controlled institution.",
    },
  ],
} as const;

export const concept = {
  steps: [
    {
      key: "pause",
      title: "Pause",
      text: "After retirement, career and social rhythm are paused.",
      ko: "은퇴와 함께 직업과 사회적 리듬이 잠시 멈춘다.",
    },
    {
      key: "connect",
      title: "Connect",
      text: "Shared circulation reconnects seniors to people and the city.",
      ko: "공유된 동선이 시니어를 사람과 도시에 다시 연결한다.",
    },
    {
      key: "pulse",
      title: "Pulse",
      text: "Encounter and participation generate a new pulse of everyday life.",
      ko: "만남과 참여가 일상의 새로운 박동을 만들어낸다.",
    },
  ],
  closing:
    "Conventional senior facilities stack care, amenity, and housing as separated layers. Here, ramps, voids, escalators, and open edges turn circulation into a social condenser — moving through the building becomes an opportunity to meet, observe, and gradually participate.",
} as const;

export const floorGroups = [
  {
    id: "promenade",
    floors: "1F",
    name: "Urban Promenade",
    ko: "도시적 산책로",
    programs: [
      "Café",
      "Performance Hall",
      "Gallery",
      "Cooking Studio",
      "Community Dining",
      "Pop-up Market",
      "Community Garden",
      "Performance Lawn",
    ],
    description:
      "The ground floor is not a lobby but a public ground. The plaza extends into the building as a promenade, and the activities of active seniors become visible to the city.",
  },
  {
    id: "growth",
    floors: "2–3F",
    name: "Lifelong Growth Hub",
    ko: "평생 성장 허브",
    programs: [
      "Library",
      "Mentoring Room",
      "Seminar Room",
      "Hobby Studio",
      "Co-working Space",
      "Health Care Pocket",
    ],
    description:
      "Two floors of learning and role-making, connected by ramps. Moving along the ramp, one passes books, workshops, mentoring, and informal lounges — a continuous landscape of lifelong growth.",
  },
  {
    id: "maru",
    floors: "4F",
    name: "Public Living Room / Wellness Maru",
    ko: "공공의 마루",
    programs: [
      "Gym",
      "Yoga Studio",
      "Dance Studio",
      "Pilates Studio",
      "Sauna",
      "Running Track",
    ],
    description:
      "An open wellness floor suspended above the city — a civic maru. Wellness here means more than exercise: visibility, encounter, and the ability to remain present in urban life.",
  },
  {
    id: "tinytown",
    floors: "5–7F",
    name: "Tiny Town",
    ko: "작은 마을",
    programs: [
      "Studio Unit",
      "Short-Stay Unit",
      "Double Unit",
      "Duplex Co-living",
      "Communal Kitchen",
      "Lounges",
      "Rooftop Garden",
    ],
    description:
      "A small village within the building. Private units and shared rooms coexist: the communal kitchen becomes the village table, the lounge a neighborhood living room, the rooftop garden a shared yard.",
  },
] as const;

export const promenadeSection = {
  copy: "The ground floor opens itself as an urban promenade, extending the plaza into the building through cooking, dining, performance, market, garden, and gallery programs.",
  detail:
    "Residents, visitors, local citizens, and younger generations cross paths here naturally. The promenade does not simply move people through the building — it invites them to pause, observe, participate, and exchange.",
  programs: [
    "Community Garden",
    "Pop-up Markets",
    "Gallery",
    "Cooking Studio",
    "Community Dining",
    "Café",
    "Performance Hall",
    "Garden",
    "Performance Lawn",
  ],
} as const;

export const rampSection = {
  copy: "The ramp is not only circulation. It is a social spine where movement becomes encounter.",
  paragraphs: [
    "The ramp threads together learning, mentoring, library, hobby, co-working, health, and informal lounge spaces on the second and third floors.",
    "It turns walking into a sequence of observation, participation, and exchange — retirement understood not as a descent into inactivity, but as a gradual ascent into new knowledge, relationships, and contribution.",
  ],
} as const;

export const maruSection = {
  copy: "The fourth floor becomes an urban living room — open, civic, and shared.",
  paragraphs: [
    "Unlike a fitness floor hidden inside a building, this level is open, generous, and visually expansive: gym, yoga, dance, and Pilates studios, a sauna, lockers, and an indoor running track.",
    "Wellness is not only physical exercise. It includes visibility, encounter, psychological openness, and participation in urban life — a collective living room suspended above the city.",
  ],
  programs: ["Gym", "Yoga Studio", "Dance Studio", "Pilates Studio", "Sauna", "Running Track", "Locker"],
} as const;

export const tinyTownSection = {
  copy: "Above the public layers, housing becomes a small village: private enough to remain independent, shared enough to avoid isolation.",
  paragraphs: [
    "Instead of isolated rooms along anonymous corridors, floors five to seven are organized as a village-like structure where private units and shared spaces coexist.",
    "Residents choose when to be alone, when to meet, and when to take part in shared life — a softer form of collectivity that avoids both isolation and institutionalization.",
  ],
  programs: [
    "Studio Unit",
    "Short-Stay Unit",
    "Double Unit",
    "Duplex Co-living",
    "Communal Kitchen",
    "Family Lounge",
    "Outdoor Lounge",
    "Rooftop Garden",
  ],
} as const;

export const plansSection = {
  intro:
    "The plans trace the vertical narrative floor by floor — from public ground to lifelong growth, active living, and the residential village.",
  list: [
    { floor: "1F", name: "Site Plan / Urban Promenade" },
    { floor: "2F", name: "Lifelong Growth Hub" },
    { floor: "3F", name: "Lifelong Growth Hub" },
    { floor: "4F", name: "Active Living Zone" },
    { floor: "5F", name: "Residential Zone" },
    { floor: "6F", name: "Residential Zone" },
    { floor: "7F", name: "Residential Zone" },
  ],
} as const;

export const sectionsGallery = {
  a: "Vertical continuity between public ground, ramped growth spaces, wellness programs, and co-living layers.",
  b: "Programmatic transition from café and cooking studio to learning, wellness, and residential village.",
} as const;

export const renderSection = {
  copy: "The render shows the experiential image; the exploded diagram shows the architectural system.",
  renderCaption:
    "Final exterior view — a bright, open civic platform facing the Cheoldanggan plaza.",
  diagramCaption:
    "Exploded axonometric — the vertical sequence from urban promenade to Tiny Town.",
} as const;

export const epilogue = {
  koLines: [
    "은퇴 이후 잠시 멈춰 있던 삶은",
    "이곳에서 다시 역할을 얻고, 관계를 만들며,",
    "도시와 함께 박동하기 시작한다.",
  ],
  en: "From Pause to Pulse. A place where the rhythm after retirement begins again.",
} as const;
