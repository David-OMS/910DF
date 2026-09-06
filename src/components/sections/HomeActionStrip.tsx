import Link from "next/link";

import { homeActionStrip } from "@/content/home";

export function HomeActionStrip() {
  return (
    <section
      aria-label="Get involved"
      className="relative z-20 -mt-12 px-5 md:-mt-16 md:px-8"
    >
      <div className="container-site">
        <div className="hero-copy-in hero-copy-delay-4 grid overflow-hidden rounded-sm border border-line bg-white md:grid-cols-3">
          {homeActionStrip.actions.map((action, index) => (
            <Link
              key={action.label}
              href={action.href}
              className={`group flex flex-col justify-between gap-6 px-6 py-7 transition-colors hover:bg-surface md:px-8 md:py-8 ${
                index < homeActionStrip.actions.length - 1
                  ? "border-b border-line md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div>
                <p className="text-sm font-medium text-accent">{action.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {action.blurb}
                </p>
              </div>
              <span className="text-sm font-medium text-ink transition-transform group-hover:translate-x-0.5">
                Continue →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
