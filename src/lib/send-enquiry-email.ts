import { Resend } from "resend";

import type { EnquiryPayload } from "@/types/enquiry";

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function escapePlain(value: string): string {
  return value.replace(/\r\n/g, "\n").trim();
}

function buildSubject(payload: EnquiryPayload): string {
  switch (payload.kind) {
    case "contact":
      return `Contact: ${payload.subject}`;
    case "volunteer":
      return `Volunteer: ${payload.volunteerType} — ${payload.name}`;
    case "partner":
      return `Partner: ${payload.organisation}`;
  }
}

function buildBody(payload: EnquiryPayload): string {
  switch (payload.kind) {
    case "contact":
      return [
        "New contact enquiry from the 910DF website.",
        "",
        `Name: ${escapePlain(payload.name)}`,
        `Email: ${escapePlain(payload.email)}`,
        `Phone: ${escapePlain(payload.phone ?? "(not provided)")}`,
        `Subject: ${escapePlain(payload.subject)}`,
        "",
        "Message:",
        escapePlain(payload.message),
      ].join("\n");
    case "volunteer":
      return [
        "New volunteer enquiry from the 910DF website.",
        "",
        `Volunteer type: ${escapePlain(payload.volunteerType)}`,
        `Name: ${escapePlain(payload.name)}`,
        `Email: ${escapePlain(payload.email)}`,
        `Phone: ${escapePlain(payload.phone)}`,
        `State: ${escapePlain(payload.state)}`,
        "",
        "Additional information:",
        escapePlain(payload.message ?? "(none)"),
      ].join("\n");
    case "partner":
      return [
        "New partner enquiry from the 910DF website.",
        "",
        `Organisation: ${escapePlain(payload.organisation)}`,
        `Area of interest: ${payload.interests.map(escapePlain).join(", ")}`,
        `Location of organisation: ${escapePlain(payload.location)}`,
        `Contact person name: ${escapePlain(payload.contactName)}`,
        `Email: ${escapePlain(payload.email)}`,
        `Phone: ${escapePlain(payload.phone)}`,
        "",
        "Resources available:",
        escapePlain(payload.resources),
      ].join("\n");
  }
}

function replyTo(payload: EnquiryPayload): string {
  return payload.email;
}

/** Sends one enquiry email via Resend. Server-only. */
export async function sendEnquiryEmail(
  payload: EnquiryPayload,
): Promise<{ id: string }> {
  const apiKey = requireEnv("RESEND_API_KEY");
  const to = requireEnv("CONTACT_TO_EMAIL");
  const from = requireEnv("CONTACT_FROM_EMAIL");

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: `910DF <${from}>`,
    to: [to],
    replyTo: replyTo(payload),
    subject: buildSubject(payload),
    text: buildBody(payload),
  });

  if (error || !data) {
    throw new Error(error?.message ?? "Resend send failed");
  }

  return { id: data.id };
}
