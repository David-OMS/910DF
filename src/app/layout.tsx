import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { AccentProvider } from "@/components/providers/AccentProvider";
import { HeroProvider } from "@/components/providers/HeroProvider";
import "@/styles/globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nine-Ten Development Foundation",
    template: "%s | 910DF",
  },
  description:
    "The Nine-Ten Development Foundation — integrated Water, Hygiene, Energy, and Education programmes across Abuja, Kaduna, Nasarawa, and Niger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">
        <AccentProvider>
          <HeroProvider>
            <SiteHeader />
            {children}
          </HeroProvider>
        </AccentProvider>
      </body>
    </html>
  );
}
