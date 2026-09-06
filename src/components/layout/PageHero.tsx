type PageHeroProps = {
  eyebrow: string;
  title: string;
  support: string;
};

/** Compact inner-page opener under the solid header. */
export function PageHero({ eyebrow, title, support }: PageHeroProps) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="container-site section-site pt-28 md:pt-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {support}
        </p>
      </div>
    </header>
  );
}
