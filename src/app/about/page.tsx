import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { AboutCommunity } from "@/components/sections/AboutCommunity";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutTheoryOfChange } from "@/components/sections/AboutTheoryOfChange";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: "About | 910DF",
  description: aboutPage.support,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        support={aboutPage.support}
      />
      <AboutMission />
      <AboutTheoryOfChange />
      <AboutCommunity />
    </main>
  );
}
