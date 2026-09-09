import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact | 910DF",
  description: contactPage.support,
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        support={contactPage.support}
      />
      <ContactForm />
    </main>
  );
}
