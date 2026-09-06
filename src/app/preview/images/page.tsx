import type { Metadata } from "next";

import { ImagePreviewPanel } from "@/components/preview/ImagePreviewPanel";

export const metadata: Metadata = {
  title: "Image preview | 910DF",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImagePreviewPage() {
  return (
    <main className="container-site section-site pt-24 md:pt-28">
      <ImagePreviewPanel />
    </main>
  );
}
