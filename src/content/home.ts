export const homeHeroCopy = {
  eyebrow: "Nine-Ten Development Foundation",
  headline: "Working for women and children in Northern Nigeria.",
  support:
    "We work with rural communities in Abuja, Kaduna, Nasarawa, and Niger States to improve water, energy, education, and nutrition, especially for women and children under five.",
};

export const homeActionStrip = {
  actions: [
    {
      label: "Donate",
      href: "/get-involved",
      blurb: "Support programmes that reach women and children in rural communities.",
    },
    {
      label: "Volunteer",
      href: "/get-involved",
      blurb: "Join local field work across our four states of operation.",
    },
    {
      label: "Partner",
      href: "/get-involved",
      blurb: "Companies and institutions looking for a clear, accountable fit.",
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
  /** Set when the file exists under public/images/programs/ — leave null for placeholder */
  imageSrc: string | null;
  imageAlt: string;
};

/**
 * Situation copy stays close to the blueprint problem statement.
 * Workstreams map 1:1 to the six programmes in the doc.
 *
 * Drop images into public/images/programs/ using the filenames below,
 * then set imageSrc from null to that path.
 */
export const homeSituation = {
  paragraphs: [
    [
      {
        text: "Rural communities in Northern and North-Central Nigeria — including ",
      },
      {
        text: "Abuja, Kaduna, Nasarawa, and Niger",
        isEmphasized: true,
      },
      {
        text: " — face multi-dimensional poverty that hits ",
      },
      {
        text: "women, children under five, primary school pupils, and secondary school girls",
        isEmphasized: true,
      },
      { text: " hardest." },
    ],
    [
      {
        text: "Chronic water scarcity, lack of electricity, severe under-nutrition among under-5s, high school-dropout rates — especially for girls due to period poverty — and under-resourced public primary schools",
        isEmphasized: true,
      },
      {
        text: " keep families stuck in the same cycle.",
      },
    ],
    [
      {
        text: "910DF responds with an integrated approach: clean water, nutrition, menstrual hygiene, sustainable energy, and foundational education support — delivered together, not as separate one-off drop-offs.",
      },
    ],
  ] as TextPart[][],
  work: {
    title: "What Nine-Ten is doing",
    items: [
      {
        id: "water",
        name: "Clean water and sanitation",
        body: "Solar-powered boreholes and community WASH committees.",
        imageSrc: "/images/programs/water.jpg",
        imageAlt: "Child drinking clean water from cupped hands at a communal tap",
      },
      {
        id: "energy",
        name: "Clean energy",
        body: "1.5–3 kVA solar BESS for community hubs, health centres, and rural household clusters.",
        imageSrc: "/images/programs/energy.jpg",
        imageAlt: "Workers installing solar panels on a rooftop",
      },
      {
        id: "school-support",
        name: "Primary school support",
        body: "Mini-libraries, curriculum-approved books, and low-bandwidth solar-powered internet hubs.",
        imageSrc: "/images/programs/school-support.jpg",
        imageAlt: "Primary-school pupil studying with books at a desk",
      },
      {
        id: "tuition",
        name: "Tuition sponsorship",
        body: "Up to 50 top-performing pupils a year, selected with teachers and community elders.",
        imageSrc: "/images/programs/tuition.jpg",
        imageAlt: "Two pupils in school uniform working together at a classroom desk",
      },
      {
        id: "menstrual-hygiene",
        name: "Menstrual hygiene",
        body: "Dignity Spaces, quarterly sanitary pads, and menstrual health education in secondary schools.",
        imageSrc: "/images/programs/menstrual-hygiene.jpg",
        imageAlt: "Hands holding a sanitary pad",
      },
      {
        id: "nutrition",
        name: "Nutrition for under-5s",
        body: "MUAC screening at primary health centres and fortified or therapeutic foods for malnourished children.",
        imageSrc: "/images/programs/nutrition.jpg",
        imageAlt: "Young child holding bags of food support",
      },
    ] satisfies ProgrammeCard[],
  },
};

/** Suggested filenames when you drop assets in public/images/programs/ */
export const programmeImageFiles = {
  water: "water.jpg",
  energy: "energy.jpg",
  "school-support": "school-support.jpg",
  tuition: "tuition.jpg",
  "menstrual-hygiene": "menstrual-hygiene.jpg",
  nutrition: "nutrition.jpg",
} as const;
