export const aboutPage = {
  eyebrow: "About",
  title: "Nine-Ten Development Foundation.",
  support:
    "910DF works with rural communities in Abuja, Kaduna, Nasarawa, and Niger States for women, children, and indigent families.",
};

export const aboutMission = {
  title: "Mission",
  body: "To improve the health, learning, and daily living conditions of women, children, and indigent families in rural communities across Abuja, Kaduna, Nasarawa, and Niger States.",
  whoTitle: "Who we serve",
  whoIntro: "Programmes focus on:",
  who: [
    "Women",
    "Children under five",
    "Primary school pupils",
    "Secondary school girls",
    "Indigent families in the operating states",
  ],
};

export type AboutTheoryLine = {
  name: string;
  detail: string;
};

export type AboutTheoryPillar = {
  label: string;
  body?: string;
  /** Optional stacked lines (used for WHEE response) */
  lines?: AboutTheoryLine[];
};

export const aboutTheory = {
  title: "Theory of change",
  intro:
    "Shortages in water, health and hygiene, power, and schooling reinforce one another. 910DF addresses them together.",
  pillars: [
    {
      label: "Problem",
      body: "Rural communities face chronic water scarcity, lack of electricity, under-nutrition and NOMA risk among children, high school dropout linked to period poverty among girls, and under-resourced public primary schools.",
    },
    {
      label: "Response",
      lines: [
        {
          name: "Water",
          detail: "Clean water access and community WASH committees.",
        },
        {
          name: "Health and hygiene",
          detail:
            "Menstrual hygiene support, and nutrition work including for children affected by NOMA.",
        },
        {
          name: "Energy",
          detail:
            "Clean solar energy systems for community hubs, health centres, and rural household clusters.",
        },
        {
          name: "Education",
          detail: "School support and tuition sponsorship for pupils who need it.",
        },
      ],
    },
    {
      label: "Long-term aim",
      body: "Improved community health, more equitable education, and stronger local livelihoods where basic services are reliable.",
    },
  ] satisfies AboutTheoryPillar[],
};

export const aboutCommunity = {
  title: "Working with communities",
  body: "910DF plans with traditional rulers, local leaders, and women’s groups. Local WASH (Water, Sanitation, and Hygiene) committees and school boards operate and maintain assets under ongoing 910DF oversight.",
};
