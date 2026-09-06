"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { mainNav, siteName } from "@/content/navigation";

function linkIsActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  // Home keeps the transparent bar until scroll; other routes stay solid.
  const isOverlay = pathname === "/" && !isScrolled;
  const isSolid = !isOverlay;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const textClass = isSolid ? "text-ink" : "text-white text-on-hero";
  const mutedTextClass = isSolid
    ? "text-ink/80 hover:text-ink"
    : "text-white/90 hover:text-white text-on-hero";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isSolid ? "border-b border-line bg-white/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className={`font-sans text-lg font-semibold tracking-[0.18em] uppercase ${textClass}`}
        >
          {siteName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => {
            const isActive = linkIsActive(pathname, item.href);

            if (item.isCta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-dark"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive ? "font-medium text-accent" : mutedTextClass
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden ${textClass}`}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        className={`border-t border-line bg-white lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav aria-label="Mobile primary" className="container-site flex flex-col gap-1 py-4">
          {mainNav.map((item) => {
            const isActive = linkIsActive(pathname, item.href);

            if (item.isCta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mt-2 rounded-sm bg-accent px-4 py-3 text-center text-sm font-medium text-accent-ink"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm px-2 py-3 text-sm ${
                  isActive ? "font-medium text-accent" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
