export type NavItem = {
  href: string;
  label: string;
  /** Accent button instead of a plain text link */
  isCta?: boolean;
};

export const siteName = "910DF";

export const siteNameLong = "Nine-Ten Development Foundation";

export const brandLogos = {
  /** Black + gold icon for light header */
  onLight: "/images/brand/mark-on-light.png",
  /** White + gold icon for dark / transparent header */
  onDark: "/images/brand/mark-on-dark.png",
  lockup: "/images/brand/logo-lockup.png",
  icon: "/images/brand/logo-icon.png",
} as const;

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get involved", isCta: true },
  { href: "/contact", label: "Contact" },
];

export const footerContent = {
  blurb:
    "Working with rural communities in Abuja, Kaduna, Nasarawa, and Niger States for water, energy, education, and nutrition for women and children.",
  statesLabel: "Where we work",
  states: ["Abuja", "Kaduna", "Nasarawa", "Niger"],
  exploreLabel: "Explore",
  involveLabel: "Get involved",
  involveLinks: [
    { href: "/get-involved#donate", label: "Donate" },
    { href: "/get-involved#volunteer", label: "Volunteer" },
    { href: "/get-involved#partner", label: "Partner" },
  ],
};
