import Image from "next/image";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  programsPage,
  type ProgrammeModule,
} from "@/content/programs";

function ProgrammeMedia({ item }: { item: ProgrammeModule }) {
  if (item.imageSrc) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-surface md:aspect-[5/4]">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center grayscale"
        />
      </div>
    );
  }

  return (
    <div
      className="flex aspect-[4/3] items-end bg-surface px-4 py-3 md:aspect-[5/4]"
      aria-hidden="true"
    >
      <span className="text-xs uppercase tracking-[0.16em] text-muted/70">
        Image coming
      </span>
    </div>
  );
}

function ProgrammeFields({ item }: { item: ProgrammeModule }) {
  const { fieldLabels } = programsPage;
  const fields = [
    { label: fieldLabels.who, body: item.who },
    { label: fieldLabels.what, body: item.what },
    { label: fieldLabels.why, body: item.why },
  ];

  return (
    <dl className="mt-8 space-y-5">
      {fields.map((field) => (
        <div key={field.label}>
          <dt className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
            {field.label}
          </dt>
          <dd className="mt-2 text-base leading-relaxed text-muted">
            {field.body}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProgrammeBlock({
  item,
  index,
}: {
  item: ProgrammeModule;
  index: number;
}) {
  const imageFirst = index % 2 === 0;

  return (
    <ScrollReveal
      as="article"
      id={item.id}
      className="scroll-mt-24 border-b border-line last:border-b-0 md:scroll-mt-28"
    >
      <div className="section-site container-site">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className={imageFirst ? undefined : "md:order-2"}>
            <ProgrammeMedia item={item} />
          </div>
          <div className={imageFirst ? undefined : "md:order-1"}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {item.strand}
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {item.name}
            </h2>
            <ProgrammeFields item={item} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ProgramModules() {
  return (
    <div aria-label={programsPage.modulesLabel}>
      {programsPage.modules.map((item, index) => (
        <ProgrammeBlock key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
