import type {
  ContactEnquiry,
  EnquiryPayload,
  PartnerEnquiry,
  VolunteerEnquiry,
} from "@/types/enquiry";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT = 200;
const MAX_LONG = 4000;

function asString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

function asOptionalString(value: unknown, max: number): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  return asString(value, max) ?? undefined;
}

function asEmail(value: unknown): string | null {
  const email = asString(value, MAX_SHORT);
  if (!email || !EMAIL_RE.test(email)) return null;
  return email;
}

function asStringArray(value: unknown, maxItems: number): string[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > maxItems) {
    return null;
  }
  const items: string[] = [];
  for (const item of value) {
    const s = asString(item, MAX_SHORT);
    if (!s) return null;
    items.push(s);
  }
  return items;
}

/** Validate and narrow raw JSON into an enquiry payload. */
export function parseEnquiry(raw: unknown): EnquiryPayload | null {
  if (!raw || typeof raw !== "object") return null;
  const body = raw as Record<string, unknown>;

  if (body.kind === "contact") {
    const name = asString(body.name, MAX_SHORT);
    const email = asEmail(body.email);
    const phone = asOptionalString(body.phone, MAX_SHORT);
    const subject = asString(body.subject, MAX_SHORT);
    const message = asString(body.message, MAX_LONG);
    if (!name || !email || !subject || !message) return null;
    const parsed: ContactEnquiry = {
      kind: "contact",
      name,
      email,
      subject,
      message,
    };
    if (phone) parsed.phone = phone;
    return parsed;
  }

  if (body.kind === "volunteer") {
    const volunteerType = asString(body.volunteerType, MAX_SHORT);
    const name = asString(body.name, MAX_SHORT);
    const email = asEmail(body.email);
    const phone = asString(body.phone, MAX_SHORT);
    const state = asString(body.state, MAX_SHORT);
    const message = asOptionalString(body.message, MAX_LONG);
    if (!volunteerType || !name || !email || !phone || !state) return null;
    const parsed: VolunteerEnquiry = {
      kind: "volunteer",
      volunteerType,
      name,
      email,
      phone,
      state,
    };
    if (message) parsed.message = message;
    return parsed;
  }

  if (body.kind === "partner") {
    const organisation = asString(body.organisation, MAX_SHORT);
    const interests = asStringArray(body.interests, 8);
    const resources = asString(body.resources, MAX_LONG);
    const location = asString(body.location, MAX_SHORT);
    const contactName = asString(body.contactName, MAX_SHORT);
    const email = asEmail(body.email);
    const phone = asString(body.phone, MAX_SHORT);
    if (
      !organisation ||
      !interests ||
      !resources ||
      !location ||
      !contactName ||
      !email ||
      !phone
    ) {
      return null;
    }
    const parsed: PartnerEnquiry = {
      kind: "partner",
      organisation,
      interests,
      resources,
      location,
      contactName,
      email,
      phone,
    };
    return parsed;
  }

  return null;
}
