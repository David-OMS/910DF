export const homeHeroCopy = {
  eyebrow: "Nine-Ten Development Foundation",
  headline: "Working for women and children in Northern Nigeria.",
  support:
    "We work with rural communities in Abuja, Kaduna, Nasarawa, and Niger States through WHEE: Water, Health and hygiene, Energy, and Education, supporting indigent families and pupils in primary and secondary schools.",
};

export const homeActionStrip = {
  actions: [
    {
      label: "Donate",
      href: "/get-involved#donate",
      blurb: "Fund programmes for women and children in rural communities.",
    },
    {
      label: "Volunteer",
      href: "/get-involved#volunteer",
      blurb: "Support field work in Abuja, Kaduna, Nasarawa, and Niger States.",
    },
    {
      label: "Partner",
      href: "/get-involved#partner",
      blurb: "Corporate and institutional partnerships linked to specific programmes.",
    },
  ],
};

export type TextPart = {
  text: string;
  isEmphasized?: boolean;
};

export type ProgrammeCard = {
  id: string;
  name: string;
  body: string;
  /** Set when the file exists under public/images/programs/; leave null for placeholder */
  imageSrc: string | null;
  imageAlt: string;
};

/**
 * Condensed problem only. Detail lives on Programs via Learn more.
 * Four cards follow WHEE (client pass Sep 2026).
 */
export const homeSituation = {
  paragraphs: [
    [
      {
        text: "In rural communities across Northern and North-Central Nigeria, including ",
      },
      {
        text: "Abuja, Kaduna, Nasarawa, and Niger States",
        isEmphasized: true,
      },
      {
        text: ", households face ",
      },
      {
        text: "multi-dimensional poverty",
        isEmphasized: true,
      },
      {
        text: ": limited water access, little or no reliable electricity, under-resourced schools, and fragile nutrition, including ",
      },
      {
        text: "NOMA",
        isEmphasized: true,
      },
      {
        text: " among young children. The effects fall hardest on ",
      },
      {
        text: "women, children under five, primary school pupils, and secondary school girls",
        isEmphasized: true,
      },
      {
        text: ". Limited water, power, schooling, and nutrition often compound one another in the same communities.",
      },
    ],
  ] as TextPart[][],
  work: {
    title: "What Nine-Ten is doing",
    items: [
      {
        id: "water",
        name: "Water",
        body: "Solar-powered boreholes and community WASH (Water, Sanitation, and Hygiene) committees.",
        imageSrc: "/images/programs/water.jpg",
        imageAlt: "Child drinking clean water from cupped hands at a communal tap",
      },
      {
        id: "health-hygiene",
        name: "Health and hygiene",
        body: "Menstrual hygiene in schools, and nutrition support including superfoods (RUTF) for children affected by NOMA and to help stop further growth of the disease.",
        imageSrc: "/images/programs/nutrition.jpg",
        imageAlt: "Young child holding bags of food support",
      },
      {
        id: "energy",
        name: "Energy",
        body: "1.5–3 kVA solar BESS for community hubs, health centres, and rural household clusters.",
        imageSrc: "/images/programs/energy.jpg",
        imageAlt: "Workers installing solar panels on a rooftop",
      },
      {
        id: "education",
        name: "Education",
        body: "Primary school libraries and connectivity, plus tuition sponsorship for up to 50 pupils a year.",
        imageSrc: "/images/programs/school-support.jpg",
        imageAlt: "Primary-school pupil studying with books at a desk",
      },
    ] satisfies ProgrammeCard[],
  },
};

/** Filenames under public/images/programs/ for the four WHEE cards */
export const programmeImageFiles = {
  water: "water.jpg",
  "health-hygiene": "nutrition.jpg",
  energy: "energy.jpg",
  education: "school-support.jpg",
} as const;
