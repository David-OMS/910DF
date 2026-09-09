export type DonatePillar = {
  id: string;
  letter: "W" | "H" | "E";
  label: string;
  /** Payment reference the donor must include */
  reference: string;
};

export type VolunteerTrack = {
  id: "info" | "help" | "resources";
  label: string;
  description: string;
};

export const getInvolvedPage = {
  eyebrow: "Get involved",
  title: "Support the work.",
  support:
    "Choose how you want to take part: donate, volunteer, or partner with 910DF.",
  paths: [
    { href: "#donate", label: "Donate" },
    { href: "#volunteer", label: "Volunteer" },
    { href: "#partner", label: "Partner" },
  ],
};

export const donateContent = {
  id: "donate",
  title: "Donate",
  body: "Gifts support programmes for women, children, and indigent families in Abuja, Kaduna, Nasarawa, and Niger States. In the first year, donations go to programmes. Founders and the board cover running costs.",
  selectLabel: "What do you want to support?",
  referenceLabel: "Payment reference",
  referenceHelp:
    "Include this exact reference on your transfer so the gift can be allocated to the pillar you chose.",
  bankLabel: "Bank details",
  bank: {
    bankName: "To be confirmed",
    accountName: "To be confirmed",
    accountNumber: "To be confirmed",
  },
  pillars: [
    {
      id: "water",
      letter: "W",
      label: "Water",
      reference: "910DF-W",
    },
    {
      id: "health-hygiene",
      letter: "H",
      label: "Health and hygiene",
      reference: "910DF-H",
    },
    {
      id: "energy",
      letter: "E",
      label: "Energy",
      reference: "910DF-EN",
    },
    {
      id: "education",
      letter: "E",
      label: "Education",
      reference: "910DF-ED",
    },
  ] satisfies DonatePillar[],
};

export const volunteerContent = {
  id: "volunteer",
  title: "Volunteer",
  body: "Local volunteers support field work across Abuja, Kaduna, Nasarawa, and Niger States. Choose how you can help, then send your details.",
  selectLabel: "How do you want to volunteer?",
  tracks: [
    {
      id: "info",
      label: "Info",
      description: "Share information, awareness, or community outreach support.",
    },
    {
      id: "help",
      label: "Help",
      description: "Give time on the ground with programme delivery and field tasks.",
    },
    {
      id: "resources",
      label: "Resources",
      description: "Contribute materials, skills, or other in-kind resources.",
    },
  ] satisfies VolunteerTrack[],
  form: {
    nameLabel: "Full name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    stateLabel: "State",
    stateOptions: ["Abuja", "Kaduna", "Nasarawa", "Niger"],
    messageLabel: "Additional information",
    messageOptional: "Optional",
    submitLabel: "Submit",
    successMessage: "Thank you for offering to volunteer. 910DF will follow up using your contact details.",
  },
};

export const partnerContent = {
  id: "partner",
  title: "Partner",
  quote:
    "If you want to go fast, go alone. If you want to go far, go together.",
  body: "910DF welcomes partnerships with companies, institutions, and organisations that want to support Water, Health and hygiene, Energy, or Education programmes in Abuja, Kaduna, Nasarawa, and Niger States.",
  form: {
    orgNameLabel: "Organisation name",
    interestLabel: "Area of interest",
    interestHelp: "Select one or more programmes.",
    interestOptions: [
      "Water",
      "Health and hygiene",
      "Energy",
      "Education",
    ],
    resourcesLabel: "Resources available",
    resourcesHelp:
      "What your organisation can bring to a partnership, for example funding, equipment, technical expertise, logistics, or staff time.",
    locationLabel: "Location of organisation",
    contactNameLabel: "Contact person name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    submitLabel: "Submit",
    successMessage: "Thank you for your partnership interest.",
  },
};
