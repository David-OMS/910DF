import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { impactFramework, impactMethod } from "@/content/impact";

export function ImpactMethod() {
  return (
    <section className="border-b border-line" aria-labelledby="impact-method-heading">
      <div className="section-site container-site max-w-3xl">
        <ScrollReveal as="div">
          <h2
            id="impact-method-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {impactMethod.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {impactMethod.body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ImpactFramework() {
  return (
    <section aria-labelledby="impact-framework-heading">
      <div className="section-site container-site">
        <ScrollReveal as="div" className="max-w-3xl">
          <h2
            id="impact-framework-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {impactFramework.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {impactFramework.intro}
          </p>
        </ScrollReveal>

        <ul className="mt-10 space-y-6">
          {impactFramework.pathways.map((row) => (
            <ScrollReveal
              key={row.pillar}
              as="li"
              className="grid gap-3 border-b border-line pb-6 last:border-b-0 md:grid-cols-3 md:gap-8"
            >
              <p className="text-sm font-semibold text-ink">{row.pillar}</p>
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Outputs: </span>
                {row.near}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Outcomes: </span>
                {row.longer}
              </p>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
