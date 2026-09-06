"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "p" | "li" | "h2" | "h3";
};

/**
 * Reveals this node when it crosses into the viewport while scrolling —
 * one item at a time, not a parent cascade.
 */
export function ScrollReveal({
  children,
  className = "",
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Tag = as;

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // ref typing across polymorphic tags
      ref={ref as never}
      className={`scroll-reveal ${isVisible ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
