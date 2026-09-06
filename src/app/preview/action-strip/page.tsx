import type { Metadata } from "next";

import { ActionStripPreviewPanel } from "@/components/preview/ActionStripPreviewPanel";

export const metadata: Metadata = {
  title: "Action strip preview | 910DF",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ActionStripPreviewPage() {
  return (
    <main className="container-site section-site pt-24 md:pt-28">
      <ActionStripPreviewPanel />
    </main>
  );
}
