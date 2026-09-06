import type { Metadata } from "next";

import { AccentPreviewPanel } from "@/components/preview/AccentPreviewPanel";

export const metadata: Metadata = {
  title: "Accent preview | 910DF",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccentPreviewPage() {
  return (
    <main className="container-site section-site pt-24 md:pt-28">
      <AccentPreviewPanel />
    </main>
  );
}
