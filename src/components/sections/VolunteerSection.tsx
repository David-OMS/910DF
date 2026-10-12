"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { enquiryCopy } from "@/content/enquiry";
import { volunteerContent } from "@/content/get-involved";
import { submitEnquiry } from "@/lib/submit-enquiry";

const fieldClass =
  "mt-2 w-full border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus-visible:border-accent";

export function VolunteerSection() {
  const [trackId, setTrackId] = useState<string>(
    volunteerContent.tracks[0]?.id ?? "info",
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const volunteerType =
      volunteerContent.tracks.find((item) => item.id === trackId)?.label ??
      trackId;

    const result = await submitEnquiry({
      kind: "volunteer",
      volunteerType,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      state: String(data.get("state") ?? ""),
      message: String(data.get("message") ?? "") || undefined,
    });

    setIsSending(false);

    if (!result.ok) {
      setError(enquiryCopy.errorMessage);
      return;
    }

    setIsSubmitted(true);
    form.reset();
  }

  return (
    <section
      id={volunteerContent.id}
      className="border-b border-line"
      aria-labelledby="volunteer-heading"
    >
      <div className="section-site container-site">
        <div className="max-w-3xl">
          <h2
            id="volunteer-heading"
            className="font-display text-3xl text-ink md:text-4xl"
          >
            {volunteerContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {volunteerContent.body}
          </p>
        </div>

        <fieldset className="mt-10 max-w-3xl">
          <legend className="text-sm font-semibold text-ink">
            {volunteerContent.selectLabel}
          </legend>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {volunteerContent.tracks.map((track) => {
              const isSelected = track.id === trackId;

              return (
                <label
                  key={track.id}
                  className={`flex cursor-pointer flex-col gap-2 border px-4 py-4 transition-colors ${
                    isSelected
                      ? "border-accent bg-surface"
                      : "border-line bg-white hover:border-muted"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="volunteer-track"
                      value={track.id}
                      checked={isSelected}
                      onChange={() => {
                        setTrackId(track.id);
                        setIsSubmitted(false);
                        setError(null);
                      }}
                      className="size-4 accent-accent"
                    />
                    <span className="text-sm font-medium text-ink">
                      {track.label}
                    </span>
                  </span>
                  <span className="pl-7 text-sm leading-relaxed text-muted">
                    {track.description}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <form className="mt-10 max-w-3xl space-y-5" onSubmit={handleSubmit}>
          <input type="hidden" name="track" value={trackId} />

          <div>
            <label htmlFor="volunteer-name" className="text-sm font-medium text-ink">
              {volunteerContent.form.nameLabel}
            </label>
            <input
              id="volunteer-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="volunteer-email"
                className="text-sm font-medium text-ink"
              >
                {volunteerContent.form.emailLabel}
              </label>
              <input
                id="volunteer-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <div>
              <label
                htmlFor="volunteer-phone"
                className="text-sm font-medium text-ink"
              >
                {volunteerContent.form.phoneLabel}
              </label>
              <input
                id="volunteer-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="volunteer-state" className="text-sm font-medium text-ink">
              {volunteerContent.form.stateLabel}
            </label>
            <select
              id="volunteer-state"
              name="state"
              required
              className={fieldClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select state
              </option>
              {volunteerContent.form.stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="volunteer-message"
              className="text-sm font-medium text-ink"
            >
              {volunteerContent.form.messageLabel}{" "}
              <span className="font-normal text-muted">
                ({volunteerContent.form.messageOptional})
              </span>
            </label>
            <textarea
              id="volunteer-message"
              name="message"
              rows={4}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" variant="primary" disabled={isSending}>
              {isSending
                ? enquiryCopy.sendingLabel
                : volunteerContent.form.submitLabel}
            </Button>
            {isSubmitted ? (
              <p className="text-sm text-ink" role="status">
                {volunteerContent.form.successMessage}
              </p>
            ) : null}
            {error ? (
              <p className="text-sm text-ink" role="alert">
                {error}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
