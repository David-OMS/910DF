export type NavItem = {
  href: string;
  label: string;
  /** Accent button instead of a plain text link */
  isCta?: boolean;
};

export const siteName = "910DF";

export const siteNameLong = "Nine-Ten Development Foundation";

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get involved", isCta: true },
  { href: "/contact", label: "Contact" },
];
