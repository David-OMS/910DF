"use client";

import { useState } from "react";

import { donateContent, type DonatePillar } from "@/content/get-involved";

function BankRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-sm font-medium text-ink sm:text-right">{value}</dd>
    </div>
  );
}

export function DonateSection() {
  const [selectedId, setSelectedId] = useState<string>(
    donateContent.pillars[0]?.id ?? "water",
  );

  const selected: DonatePillar =
    donateContent.pillars.find((pillar) => pillar.id === selectedId) ??
    donateContent.pillars[0];

  return (
    <section
      id={donateContent.id}
      className="scroll-mt-24 border-b border-line md:scroll-mt-28"
      aria-labelledby="donate-heading"
    >
      <div className="section-site container-site">
        <div className="max-w-3xl">
          <h2
            id="donate-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {donateContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {donateContent.body}
          </p>
        </div>

        <fieldset className="mt-10 max-w-3xl">
          <legend className="text-sm font-semibold text-ink">
            {donateContent.selectLabel}
          </legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {donateContent.pillars.map((pillar) => {
              const isSelected = pillar.id === selectedId;

              return (
                <label
                  key={pillar.id}
                  className={`flex cursor-pointer items-center gap-3 border px-4 py-4 transition-colors ${
                    isSelected
                      ? "border-accent bg-surface"
                      : "border-line bg-white hover:border-muted"
                  }`}
                >
                  <input
                    type="radio"
                    name="donate-pillar"
                    value={pillar.id}
                    checked={isSelected}
                    onChange={() => setSelectedId(pillar.id)}
                    className="size-4 accent-accent"
                  />
                  <span className="text-sm font-medium text-ink">
                    <span className="text-accent">{pillar.letter}</span>
                    {" · "}
                    {pillar.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {selected ? (
          <div className="mt-10 grid gap-8 max-w-3xl md:grid-cols-2">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                {donateContent.referenceLabel}
              </h3>
              <p className="mt-3 font-mono text-2xl font-semibold text-ink">
                {selected.reference}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {donateContent.referenceHelp}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                {donateContent.bankLabel}
              </h3>
              <dl className="mt-2">
                <BankRow label="Bank" value={donateContent.bank.bankName} />
                <BankRow
                  label="Account name"
                  value={donateContent.bank.accountName}
                />
                <BankRow
                  label="Account number"
                  value={donateContent.bank.accountNumber}
                />
              </dl>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
