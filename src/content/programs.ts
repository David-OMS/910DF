export type ProgrammeModule = {
  id: string;
  letter: "W" | "H" | "E";
  name: string;
  who: string;
  what: string;
  why: string;
  imageSrc: string | null;
  imageAlt: string;
};

export const programsPage = {
  eyebrow: "Programs",
  title: "Programmes.",
  support:
    "Four programmes under WHEE in rural communities across Abuja, Kaduna, Nasarawa, and Niger States: Water, Health and hygiene, Energy, and Education.",
  modulesLabel: "Programmes",
  fieldLabels: {
    who: "Who it serves",
    what: "What we deliver",
    why: "Why it matters",
  },
  howWeWork: {
    title: "How we work",
    intro: "Each programme follows the same four delivery phases.",
    steps: [
      {
        name: "Community entry and co-design",
        body: "Work with traditional rulers, local leaders, and women’s groups to map needs before delivery starts.",
      },
      {
        name: "Procurement and installation",
        body: "Source materials suited to the region, including solar systems, school stock, and nutrition supplies.",
      },
      {
        name: "Capacity building",
        body: "Train local WASH (Water, Sanitation, and Hygiene) committees and school management boards to operate and maintain installed assets.",
      },
      {
        name: "Monitoring and handover",
        body: "Hand day-to-day management to the community over time, while 910DF retains oversight.",
      },
    ],
  },
  modules: [
    {
      id: "water",
      letter: "W",
      name: "Water",
      who: "Rural households, especially women and girls who carry most of the daily water burden.",
      what: "Solar-powered boreholes and community WASH (Water, Sanitation, and Hygiene) committees responsible for operation and upkeep.",
      why: "Distant or unsafe water increases illness risk and costs women and girls hours each day.",
      imageSrc: "/images/programs/water.jpg",
      imageAlt: "Child drinking clean water from cupped hands at a communal tap",
    },
    {
      id: "health-hygiene",
      letter: "H",
      name: "Health and hygiene",
      who: "Secondary school girls affected by period poverty, and children at risk of or affected by under-nutrition and NOMA.",
      what: "Dignity Spaces, quarterly sanitary pads, and menstrual health education in secondary schools. Nutrition support through MUAC (Mid-Upper Arm Circumference) screening at primary health centres, and provision of superfoods (RUTF, Ready-to-Use Therapeutic Food) for children who need them, including those affected by NOMA, to help stop further growth of the disease.",
      why: "Period poverty keeps girls out of class. Under-nutrition and NOMA require early screening and sustained nutrition support through local health services.",
      imageSrc: "/images/programs/nutrition.jpg",
      imageAlt: "Young child holding bags of food support",
    },
    {
      id: "energy",
      letter: "E",
      name: "Energy",
      who: "Community hubs, primary health centres, and rural household clusters without reliable power.",
      what: "1.5–3 kVA solar Battery Energy Storage Systems (BESS) for hubs, health centres, and household clusters.",
      why: "Without reliable power, clinics and community spaces lose capacity after dark, and children lack light for evening study.",
      imageSrc: "/images/programs/energy.jpg",
      imageAlt: "Workers installing solar panels on a rooftop",
    },
    {
      id: "education",
      letter: "E",
      name: "Education",
      who: "Pupils and teachers in under-resourced public primary schools, and top-performing pupils whose families face financial barriers to staying in school.",
      what: "Mini-libraries with curriculum-approved books and low-bandwidth solar-powered internet hubs. Tuition sponsorship for up to 50 pupils a year, selected by teachers and community elders on merit.",
      why: "Many public primary schools lack books, learning spaces, and basic connectivity. School costs push capable pupils out of education.",
      imageSrc: "/images/programs/school-support.jpg",
      imageAlt: "Primary-school pupil studying with books at a desk",
    },
  ] satisfies ProgrammeModule[],
};
