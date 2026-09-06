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
      blurb: "Fund programmes for women and children in rural communities.",
    },
    {
      label: "Volunteer",
      href: "/get-involved",
      blurb: "Support field work in Abuja, Kaduna, Nasarawa, and Niger States.",
    },
    {
      label: "Partner",
      href: "/get-involved",
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
 * Problem prose only. Response sits in the programme cards below.
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
        text: ": limited water access, little or no reliable electricity, under-resourced schools, and fragile nutrition. The effects fall hardest on ",
      },
      {
        text: "women, children under five, primary school pupils, and secondary school girls",
        isEmphasized: true,
      },
      { text: "." },
    ],
    [
      {
        text: "Chronic water scarcity",
        isEmphasized: true,
      },
      {
        text: " forces long trips to distant or unsafe sources. Women and girls usually carry that work, losing hours for school, paid work, or rest. Unsafe water also raises the risk of ",
      },
      {
        text: "waterborne illness",
        isEmphasized: true,
      },
      {
        text: ", which local clinics continue to treat.",
      },
    ],
    [
      {
        text: "Many of the same communities lack electricity",
        isEmphasized: true,
      },
      {
        text: ". Clinics and community hubs lose capacity after dark. Children have little reliable light for evening study. Where fuel is used at all, households often depend on ",
      },
      {
        text: "kerosene or diesel",
        isEmphasized: true,
      },
      { text: "." },
    ],
    [
      {
        text: "Among young children, ",
      },
      {
        text: "severe under-nutrition among under-fives",
        isEmphasized: true,
      },
      {
        text: " remains a serious risk. Scarce or undiversified food affects growth and energy, and families often have limited access to early screening and support at primary health centres.",
      },
    ],
    [
      {
        text: "Public primary schools are often ",
      },
      {
        text: "under-resourced",
        isEmphasized: true,
      },
      {
        text: ", with limited books, weak learning spaces, and little digital access. At secondary level, ",
      },
      {
        text: "period poverty",
        isEmphasized: true,
      },
      {
        text: " contributes to absenteeism and dropout when girls lack sanitary materials, private facilities, or basic menstrual health information.",
      },
    ],
    [
      {
        text: "These conditions reinforce one another. Time spent fetching water, lack of light after dark, under-nutrition in under-fives, and interrupted schooling compound household hardship.",
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
        body: "1.5-3 kVA solar BESS for community hubs, health centres, and rural household clusters.",
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
