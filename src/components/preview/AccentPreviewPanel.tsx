"use client";

import { Button } from "@/components/ui/Button";
import { useAccent } from "@/components/providers/AccentProvider";
import { ACCENT_PRESETS } from "@/lib/accents";

export function AccentPreviewPanel() {
  const {
    mode,
    presetId,
    customHex,
    activeColors,
    setPreset,
    setCustomHex,
    resetToDefault,
  } = useAccent();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Private preview
        </p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Accent lab
        </h1>
        <p className="max-w-2xl text-muted">
          Dev-only route for trying accents live. Not linked from the public
          site. Choice is stored in this browser so the rest of the shell keeps
          the same tokens while you build.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">Presets</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ACCENT_PRESETS.map((preset) => {
            const isActive = mode === "preset" && presetId === preset.id;

            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => setPreset(preset.id)}
                className={`rounded-sm border p-4 text-left transition-colors ${
                  isActive
                    ? "border-accent bg-surface"
                    : "border-line bg-white hover:border-muted"
                }`}
              >
                <span
                  className="mb-3 block h-10 w-full rounded-sm"
                  style={{ backgroundColor: preset.colors.accent }}
                />
                <span className="block font-medium text-ink">{preset.label}</span>
                <span className="mt-1 block text-sm text-muted">
                  {preset.description}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">Custom accent</h2>
        <div className="flex flex-wrap items-end gap-4">
          <label className="space-y-2 text-sm text-ink">
            <span className="block">Colour</span>
            <input
              type="color"
              value={customHex}
              onChange={(event) => setCustomHex(event.target.value)}
              className="h-12 w-16 cursor-pointer rounded-sm border border-line bg-white p-1"
            />
          </label>
          <label className="space-y-2 text-sm text-ink">
            <span className="block">Hex</span>
            <input
              type="text"
              value={customHex}
              onChange={(event) => setCustomHex(event.target.value)}
              className="rounded-sm border border-line px-3 py-2 font-mono text-sm"
              spellCheck={false}
            />
          </label>
          <Button type="button" variant="primary" onClick={resetToDefault}>
            Reset to Sahel gold
          </Button>
        </div>
        <p className="text-sm text-muted">
          Dark and soft companions are derived from the base colour so one
          picker still drives the full accent set.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">Active tokens</h2>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["accent", activeColors.accent],
              ["accent-dark", activeColors.accentDark],
              ["accent-soft", activeColors.accentSoft],
              ["accent-ink", activeColors.accentInk],
            ] as const
          ).map(([name, value]) => (
            <div
              key={name}
              className="rounded-sm border border-line bg-white p-3"
            >
              <dt className="text-xs uppercase tracking-wide text-muted">
                {name}
              </dt>
              <dd className="mt-2 flex items-center gap-2 font-mono text-sm text-ink">
                <span
                  className="inline-block h-5 w-5 rounded-sm border border-line"
                  style={{ backgroundColor: value }}
                />
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">Live samples</h2>
        <p className="text-sm text-muted">
          These use the same token classes as the real site blocks will.
        </p>

        <div className="overflow-hidden rounded-sm border border-line">
          <div className="bg-black px-6 py-10 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Active nav sample
            </p>
            <p className="mt-4 font-display text-3xl">
              Headline on black-and-white ground
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="ghost">Ghost on hero</Button>
              <Button variant="primary">Primary CTA</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            <div className="bg-accent p-6 text-accent-ink">
              <p className="text-sm uppercase tracking-wide opacity-80">
                Panel one
              </p>
              <p className="mt-2 text-2xl font-semibold">Accent</p>
              <p className="mt-3 text-sm opacity-90">
                Action-strip style block using the main accent token.
              </p>
              <div className="mt-5">
                <Button variant="onAccent">Donate</Button>
              </div>
            </div>
            <div className="bg-accent-soft p-6 text-accent-ink">
              <p className="text-sm uppercase tracking-wide opacity-80">
                Panel two
              </p>
              <p className="mt-2 text-2xl font-semibold">Soft</p>
              <p className="mt-3 text-sm opacity-90">
                Lighter companion for the middle strip card.
              </p>
              <div className="mt-5">
                <Button variant="onAccent">Volunteer</Button>
              </div>
            </div>
            <div className="bg-accent-dark p-6 text-white">
              <p className="text-sm uppercase tracking-wide opacity-80">
                Panel three
              </p>
              <p className="mt-2 text-2xl font-semibold">Dark</p>
              <p className="mt-3 text-sm opacity-90">
                Darker companion for hover and the third strip card.
              </p>
              <div className="mt-5">
                <Button variant="onAccent">Partner</Button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base text-ink">
          Inline link sample:{" "}
          <a href="#samples" className="font-medium text-accent underline-offset-4 hover:underline">
            uses text-accent
          </a>
        </p>
      </section>
    </div>
  );
}
