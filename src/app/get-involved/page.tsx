import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { DonateSection } from "@/components/sections/DonateSection";
import { GetInvolvedPaths } from "@/components/sections/GetInvolvedPaths";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { getInvolvedPage } from "@/content/get-involved";

export const metadata: Metadata = {
  title: "Get involved | 910DF",
  description: getInvolvedPage.support,
};

export default function GetInvolvedPage() {
  return (
    <main>
      <PageHero
        eyebrow={getInvolvedPage.eyebrow}
        title={getInvolvedPage.title}
        support={getInvolvedPage.support}
      />
      <GetInvolvedPaths />
      <DonateSection />
      <VolunteerSection />
      <PartnerSection />
    </main>
  );
}
