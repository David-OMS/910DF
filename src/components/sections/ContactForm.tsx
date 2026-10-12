"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { contactForm } from "@/content/contact";
import { enquiryCopy } from "@/content/enquiry";
import { submitEnquiry } from "@/lib/submit-enquiry";

const fieldClass =
  "mt-2 w-full border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus-visible:border-accent";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const result = await submitEnquiry({
      kind: "contact",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? "") || undefined,
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
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
    <section aria-labelledby="contact-form-heading">
      <div className="section-site container-site">
        <h2 id="contact-form-heading" className="sr-only">
          Enquiry form
        </h2>

        <form className="max-w-3xl space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium text-ink">
              {contactForm.nameLabel}
            </label>
            <input
              id="contact-name"
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
                htmlFor="contact-email"
                className="text-sm font-medium text-ink"
              >
                {contactForm.emailLabel}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="text-sm font-medium text-ink"
              >
                {contactForm.phoneLabel}{" "}
                <span className="font-normal text-muted">
                  ({contactForm.phoneOptional})
                </span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="text-sm font-medium text-ink"
            >
              {contactForm.subjectLabel}
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              className={fieldClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select subject
              </option>
              {contactForm.subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="text-sm font-medium text-ink"
            >
              {contactForm.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              className={fieldClass}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" variant="primary" disabled={isSending}>
              {isSending ? enquiryCopy.sendingLabel : contactForm.submitLabel}
            </Button>
            {isSubmitted ? (
              <p className="text-sm text-ink" role="status">
                {contactForm.successMessage}
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
