"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { partnerContent } from "@/content/get-involved";

const fieldClass =
  "mt-2 w-full border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus-visible:border-accent";

export function PartnerSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [interestError, setInterestError] = useState(false);

  function toggleInterest(option: string) {
    setInterestError(false);
    setInterests((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (interests.length === 0) {
      setInterestError(true);
      return;
    }

    setIsSubmitted(true);
  }

  return (
    <section
      id={partnerContent.id}
      className="border-b border-line"
      aria-labelledby="partner-heading"
    >
      <div className="section-site container-site">
        <div className="max-w-3xl">
          <h2
            id="partner-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {partnerContent.title}
          </h2>
          <blockquote className="mt-6 border-l-2 border-accent pl-5">
            <p className="font-display text-xl leading-snug text-ink md:text-2xl">
              {partnerContent.quote}
            </p>
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {partnerContent.body}
          </p>
        </div>

        <form className="mt-10 max-w-3xl space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="partner-org"
              className="text-sm font-medium text-ink"
            >
              {partnerContent.form.orgNameLabel}
            </label>
            <input
              id="partner-org"
              name="organisation"
              type="text"
              required
              autoComplete="organization"
              className={fieldClass}
            />
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-ink">
              {partnerContent.form.interestLabel}
            </legend>
            <p className="mt-1 text-sm text-muted">
              {partnerContent.form.interestHelp}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {partnerContent.form.interestOptions.map((option) => {
                const isChecked = interests.includes(option);

                return (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 border px-4 py-3 transition-colors ${
                      isChecked
                        ? "border-accent bg-surface"
                        : "border-line bg-white hover:border-muted"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="interest"
                      value={option}
                      checked={isChecked}
                      onChange={() => toggleInterest(option)}
                      className="size-4 accent-accent"
                    />
                    <span className="text-sm font-medium text-ink">
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>
            {interestError ? (
              <p className="mt-2 text-sm text-ink" role="alert">
                Select at least one pillar.
              </p>
            ) : null}
          </fieldset>

          <div>
            <label
              htmlFor="partner-resources"
              className="text-sm font-medium text-ink"
            >
              {partnerContent.form.resourcesLabel}
            </label>
            <p className="mt-1 text-sm text-muted">
              {partnerContent.form.resourcesHelp}
            </p>
            <textarea
              id="partner-resources"
              name="resources"
              rows={3}
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor="partner-location"
              className="text-sm font-medium text-ink"
            >
              {partnerContent.form.locationLabel}
            </label>
            <input
              id="partner-location"
              name="location"
              type="text"
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor="partner-contact-name"
              className="text-sm font-medium text-ink"
            >
              {partnerContent.form.contactNameLabel}
            </label>
            <input
              id="partner-contact-name"
              name="contactName"
              type="text"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="partner-email"
                className="text-sm font-medium text-ink"
              >
                {partnerContent.form.emailLabel}
              </label>
              <input
                id="partner-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <div>
              <label
                htmlFor="partner-phone"
                className="text-sm font-medium text-ink"
              >
                {partnerContent.form.phoneLabel}
              </label>
              <input
                id="partner-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" variant="primary">
              {partnerContent.form.submitLabel}
            </Button>
            {isSubmitted ? (
              <p className="text-sm text-ink" role="status">
                {partnerContent.form.successMessage}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
