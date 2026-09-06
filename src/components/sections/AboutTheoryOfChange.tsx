import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutTheory } from "@/content/about";

export function AboutTheoryOfChange() {
  return (
    <section
      className="border-b border-line bg-surface"
      aria-labelledby="about-toc-heading"
    >
      <div className="section-site container-site">
        <ScrollReveal as="div" className="max-w-3xl">
          <h2
            id="about-toc-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {aboutTheory.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {aboutTheory.intro}
          </p>
        </ScrollReveal>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {aboutTheory.pillars.map((pillar, index) => (
            <ScrollReveal
              key={pillar.label}
              as="li"
              className="border-t border-line pt-5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                {String(index + 1).padStart(2, "0")} · {pillar.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {pillar.body}
              </p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
