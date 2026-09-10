import type { Metadata } from "next";

import { BrandPreviewPanel } from "@/components/preview/BrandPreviewPanel";

export const metadata: Metadata = {
  title: "Logo preview | 910DF",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BrandPreviewPage() {
  return (
    <main className="container-site section-site pt-24 md:pt-28">
      <BrandPreviewPanel />
    </main>
  );
}
