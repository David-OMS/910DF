import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  homeSituation,
  type TextPart,
  type ProgrammeCard,
} from "@/content/home";

function SituationParagraph({ parts }: { parts: TextPart[] }) {
  return (
    <ScrollReveal
      as="p"
      className="text-base leading-relaxed text-muted md:text-lg md:leading-relaxed"
    >
      {parts.map((part, index) =>
        part.isEmphasized ? (
          <strong key={index} className="font-semibold text-ink">
            {part.text}
          </strong>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </ScrollReveal>
  );
}

function ProgrammeMedia({ item }: { item: ProgrammeCard }) {
  if (item.imageSrc) {
    return (
      <div className="relative aspect-[3/2] overflow-hidden bg-surface">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover object-center grayscale"
        />
      </div>
    );
  }

  return (
    <div
      className="flex aspect-[3/2] items-end bg-surface px-4 py-3"
      aria-hidden="true"
    >
      <span className="text-xs uppercase tracking-[0.16em] text-muted/70">
        Image coming
      </span>
    </div>
  );
}

export function HomeSituation() {
  const { paragraphs, work } = homeSituation;

  return (
    <section className="section-backdrop-subtle" aria-label="Situation and work">
      <div className="section-site">
        <div className="container-site max-w-3xl">
          {paragraphs.map((parts, index) => (
            <SituationParagraph key={index} parts={parts} />
          ))}
        </div>
      </div>

      <div className="border-t border-line bg-white/50">
        <div className="section-site container-site">
          <ScrollReveal
            as="h2"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {work.title}
          </ScrollReveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {work.items.map((item) => (
              <ScrollReveal key={item.id} as="li" className="h-full">
                <article className="flex h-full flex-col overflow-hidden border border-line bg-white">
                  <ProgrammeMedia item={item} />
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="text-base font-semibold text-ink md:text-lg">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                      {item.body}
                    </p>
                    <Link
                      href={`/programs#${item.id}`}
                      className="mt-auto pt-5 text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
