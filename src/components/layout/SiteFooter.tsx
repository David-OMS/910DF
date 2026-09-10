"use client";

import Link from "next/link";

import { BrandLogo } from "@/components/layout/BrandLogo";
import {
  footerContent,
  mainNav,
  siteName,
  siteNameLong,
} from "@/content/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const exploreLinks = mainNav.filter((item) => !item.isCta);

  return (
    <footer className="mt-auto border-t border-line bg-black text-white">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label={siteName}>
              <BrandLogo surface="dark" size="footer" wordmarkClassName="text-white" />
            </Link>
            <p className="mt-4 text-sm text-white/70">{siteNameLong}</p>
            <p className="mt-3 text-sm leading-snug text-white/60">
              {footerContent.blurb}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {footerContent.exploreLabel}
            </p>
            <ul className="mt-3 space-y-1.5">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {footerContent.involveLabel}
            </p>
            <ul className="mt-3 space-y-1.5">
              {footerContent.involveLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {footerContent.statesLabel}
            </p>
            <p className="mt-2 text-sm text-white/60">
              {footerContent.states.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4">
          <p className="text-xs text-white/45">
            © {year} {siteNameLong}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
