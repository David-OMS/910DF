import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { programsPage } from "@/content/programs";

export function ProgramsHowWeWork() {
  const { howWeWork } = programsPage;

  return (
    <section className="border-t border-line bg-surface" aria-labelledby="how-we-work-heading">
      <div className="section-site container-site">
        <ScrollReveal as="div" className="max-w-2xl">
          <h2
            id="how-we-work-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {howWeWork.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {howWeWork.intro}
          </p>
        </ScrollReveal>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {howWeWork.steps.map((step, index) => (
            <ScrollReveal key={step.name} as="li" className="border-t border-line pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {step.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
