export type ProgrammeModule = {
  id: string;
  name: string;
  /** Plain-language strand label */
  strand: string;
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
    "Six programmes in rural communities across Abuja, Kaduna, Nasarawa, and Niger States, covering water, hygiene, energy, education, and nutrition.",
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
        body: "Train local WASH committees and school management boards to operate and maintain installed assets.",
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
      name: "Clean water and sanitation",
      strand: "Water",
      who: "Rural households, especially women and girls who carry most of the daily water burden.",
      what: "Solar-powered boreholes and community WASH (Water, Sanitation, and Hygiene) committees responsible for operation and upkeep.",
      why: "Distant or unsafe water increases illness risk and costs women and girls hours each day.",
      imageSrc: "/images/programs/water.jpg",
      imageAlt: "Child drinking clean water from cupped hands at a communal tap",
    },
    {
      id: "energy",
      name: "Clean energy",
      strand: "Energy",
      who: "Community hubs, primary health centres, and rural household clusters without reliable power.",
      what: "1.5–3 kVA solar Battery Energy Storage Systems (BESS) for hubs, health centres, and household clusters.",
      why: "Without reliable power, clinics and community spaces lose capacity after dark, and children lack light for evening study.",
      imageSrc: "/images/programs/energy.jpg",
      imageAlt: "Workers installing solar panels on a rooftop",
    },
    {
      id: "school-support",
      name: "Primary school support",
      strand: "Education",
      who: "Pupils and teachers in under-resourced public primary schools.",
      what: "Mini-libraries with curriculum-approved books, and low-bandwidth solar-powered internet hubs.",
      why: "Many public primary schools lack books, adequate learning spaces, and basic connectivity.",
      imageSrc: "/images/programs/school-support.jpg",
      imageAlt: "Primary-school pupil studying with books at a desk",
    },
    {
      id: "tuition",
      name: "Tuition sponsorship",
      strand: "Education",
      who: "Top-performing pupils whose families face financial barriers to staying in school.",
      what: "Up to 50 sponsored pupils a year, selected by teachers and community elders on merit.",
      why: "School costs push capable pupils out of education.",
      imageSrc: "/images/programs/tuition.jpg",
      imageAlt: "Two pupils in school uniform working together at a classroom desk",
    },
    {
      id: "menstrual-hygiene",
      name: "Menstrual hygiene",
      strand: "Hygiene",
      who: "Secondary school girls affected by period poverty.",
      what: "Dignity Spaces in schools, quarterly sanitary pad supplies, and menstrual health education.",
      why: "Lack of sanitary materials and private facilities keeps girls out of class during menstruation.",
      imageSrc: "/images/programs/menstrual-hygiene.jpg",
      imageAlt: "Hands holding a sanitary pad",
    },
    {
      id: "nutrition",
      name: "Nutrition for under-5s",
      strand: "Nutrition",
      who: "Children under five at risk of severe under-nutrition.",
      what: "MUAC (Mid-Upper Arm Circumference) screening with local primary health centres, and therapeutic or fortified foods for children who need them.",
      why: "Severe under-nutrition in under-fives requires early screening and treatment through local health services.",
      imageSrc: "/images/programs/nutrition.jpg",
      imageAlt: "Young child holding bags of food support",
    },
  ] satisfies ProgrammeModule[],
};
