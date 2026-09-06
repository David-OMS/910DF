import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import {
  ImpactFramework,
  ImpactMethod,
} from "@/components/sections/ImpactSections";
import { impactPage } from "@/content/impact";

export const metadata: Metadata = {
  title: "Impact | 910DF",
  description: impactPage.support,
};

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        eyebrow={impactPage.eyebrow}
        title={impactPage.title}
        support={impactPage.support}
      />
      <ImpactMethod />
      <ImpactFramework />
    </main>
  );
}
