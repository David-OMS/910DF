import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { ProgramModules } from "@/components/sections/ProgramModules";
import { ProgramsHowWeWork } from "@/components/sections/ProgramsHowWeWork";
import { programsPage } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs | 910DF",
  description: programsPage.support,
};

export default function ProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow={programsPage.eyebrow}
        title={programsPage.title}
        support={programsPage.support}
      />
      <ProgramModules />
      <ProgramsHowWeWork />
    </main>
  );
}
