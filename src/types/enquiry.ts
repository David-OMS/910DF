export type EnquiryKind = "contact" | "volunteer" | "partner";

export type ContactEnquiry = {
  kind: "contact";
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export type VolunteerEnquiry = {
  kind: "volunteer";
  /** Selected option label, e.g. Info / Help / Resources */
  volunteerType: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  message?: string;
};

export type PartnerEnquiry = {
  kind: "partner";
  organisation: string;
  interests: string[];
  resources: string;
  location: string;
  contactName: string;
  email: string;
  phone: string;
};

export type EnquiryPayload = ContactEnquiry | VolunteerEnquiry | PartnerEnquiry;
