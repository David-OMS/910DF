import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { GetInvolvedTabs } from "@/components/sections/GetInvolvedTabs";
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
      <GetInvolvedTabs />
    </main>
  );
}
