import Link from "next/link";

import { homeActionStrip } from "@/content/home";

type ActionItem = (typeof homeActionStrip.actions)[number];

function ActionBody({
  action,
  labelClassName,
  blurbClassName,
  ctaClassName,
}: {
  action: ActionItem;
  labelClassName: string;
  blurbClassName: string;
  ctaClassName: string;
}) {
  return (
    <>
      <div>
        <p className={`text-sm font-semibold tracking-wide ${labelClassName}`}>
          {action.label}
        </p>
        <p className={`mt-3 text-sm leading-relaxed ${blurbClassName}`}>
          {action.blurb}
        </p>
      </div>
      <span
        className={`text-sm font-medium transition-transform group-hover:translate-x-0.5 ${ctaClassName}`}
      >
        Continue →
      </span>
    </>
  );
}

/** A: soft rounded pills with gaps */
export function ActionStripPills({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-3 md:flex-row md:items-stretch md:gap-4 ${className}`}
    >
      {homeActionStrip.actions.map((action, index) => (
        <Link
          key={action.label}
          href={action.href}
          className={`group flex flex-1 flex-col justify-between gap-5 rounded-full px-8 py-8 transition-colors md:min-h-[11rem] md:px-9 ${
            index === 0
              ? "bg-accent text-accent-ink hover:bg-accent-dark"
              : "border border-line bg-white text-ink hover:border-muted"
          }`}
        >
          <ActionBody
            action={action}
            labelClassName={index === 0 ? "text-accent-ink" : "text-accent"}
            blurbClassName={index === 0 ? "text-accent-ink/80" : "text-muted"}
            ctaClassName={index === 0 ? "text-accent-ink" : "text-ink"}
          />
        </Link>
      ))}
    </div>
  );
}

/** C: one band with an angled top edge */
export function ActionStripDiagonal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`action-strip-diagonal overflow-hidden bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.12)] ${className}`}
    >
      <div className="grid md:grid-cols-3">
        {homeActionStrip.actions.map((action, index) => (
          <Link
            key={action.label}
            href={action.href}
            className={`group flex min-h-[11rem] flex-col justify-between gap-5 px-6 pb-8 transition-colors hover:bg-surface md:px-8 ${
              index === 0 ? "pt-14 md:pt-16" : "pt-8 md:pt-14"
            } ${
              index < homeActionStrip.actions.length - 1
                ? "border-b border-line md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <ActionBody
              action={action}
              labelClassName="text-accent"
              blurbClassName="text-muted"
              ctaClassName="text-ink"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

const steppedShell = [
  "min-h-[13.5rem] md:min-h-[17.5rem] bg-accent text-accent-ink hover:bg-accent-dark",
  "min-h-[11.5rem] md:min-h-[14.5rem] border border-line bg-white text-ink hover:border-muted",
  "min-h-[10rem] md:min-h-[11.5rem] border border-line bg-surface text-ink hover:border-muted",
] as const;

/** D: stepped heights, bottom-aligned */
export function ActionStripStepped({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-3 md:flex-row md:items-end md:gap-4 ${className}`}
    >
      {homeActionStrip.actions.map((action, index) => (
        <Link
          key={action.label}
          href={action.href}
          className={`group flex flex-1 flex-col justify-between gap-6 rounded-sm px-6 py-7 transition-colors md:px-7 md:py-8 ${steppedShell[index]}`}
        >
          <ActionBody
            action={action}
            labelClassName={index === 0 ? "text-accent-ink" : "text-accent"}
            blurbClassName={index === 0 ? "text-accent-ink/80" : "text-muted"}
            ctaClassName={index === 0 ? "text-accent-ink" : "text-ink"}
          />
        </Link>
      ))}
    </div>
  );
}

/** F: curved shelf; actions sit on the arc */
export function ActionStripArc({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="action-strip-arc overflow-hidden bg-white shadow-[0_-10px_28px_rgba(0,0,0,0.14)]"
      >
        <div className="grid gap-0 px-4 pb-8 pt-14 md:grid-cols-3 md:gap-2 md:px-8 md:pb-10 md:pt-20">
          {homeActionStrip.actions.map((action, index) => (
            <Link
              key={action.label}
              href={action.href}
              className={`group flex flex-col justify-between gap-5 rounded-sm px-5 py-6 transition-colors hover:bg-surface md:min-h-[10rem] md:px-6 ${
                index === 1 ? "md:-mt-4" : ""
              } ${index === 0 || index === 2 ? "md:mt-3" : ""}`}
            >
              <ActionBody
                action={action}
                labelClassName="text-accent"
                blurbClassName="text-muted"
                ctaClassName="text-ink"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
