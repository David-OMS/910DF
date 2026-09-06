import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutCommunity } from "@/content/about";

export function AboutCommunity() {
  return (
    <section className="border-b border-line" aria-labelledby="about-community-heading">
      <div className="section-site container-site max-w-3xl">
        <ScrollReveal as="div">
          <h2
            id="about-community-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {aboutCommunity.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {aboutCommunity.body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
