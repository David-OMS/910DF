import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutMission } from "@/content/about";

export function AboutMission() {
  return (
    <section className="border-b border-line" aria-labelledby="about-mission-heading">
      <div className="section-site container-site">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ScrollReveal as="div">
            <h2
              id="about-mission-heading"
              className="font-display text-3xl text-ink md:text-4xl"
            >
              {aboutMission.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {aboutMission.body}
            </p>
          </ScrollReveal>

          <ScrollReveal as="div">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {aboutMission.whoTitle}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {aboutMission.whoIntro}
            </p>
            <ul className="mt-5 space-y-2">
              {aboutMission.who.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent pl-4 text-base text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
