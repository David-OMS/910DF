import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AccentProvider } from "@/components/providers/AccentProvider";
import { ActionStripProvider } from "@/components/providers/ActionStripProvider";
import { HeroProvider } from "@/components/providers/HeroProvider";
import { LogoProvider } from "@/components/providers/LogoProvider";
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
    "The Nine-Ten Development Foundation: integrated Water, Hygiene, Energy, and Education programmes across Abuja, Kaduna, Nasarawa, and Niger.",
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
      <body className="flex min-h-full flex-col font-sans text-ink">
        <AccentProvider>
          <LogoProvider>
            <HeroProvider>
              <ActionStripProvider>
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <SiteFooter />
              </ActionStripProvider>
            </HeroProvider>
          </LogoProvider>
        </AccentProvider>
      </body>
    </html>
  );
}
