# 910DF — Build log

---

## 2026-09-05 — Block 4: Situation + what we do

**Status:** In review.

### What landed

- Situation prose tightened to blueprint wording (no marasmus — that was not in the doc)
- “What Nine-Ten is doing”: six programme cards, three per row on large screens
- Card image slot ready (3:2); `imageSrc: null` shows placeholder until files land in `public/images/programs/`
- Per-item scroll reveal kept; spacing between situation paragraphs reduced

### Next

Programs preview (may overlap this workstreams list — decide whether to slim one)

---

## 2026-09-05 — Block 3: Action strip (bridge)

**Status:** Accepted.

### What landed

- `HomeActionStrip` — white bridge overlapping the hero; Donate / Volunteer / Partner as equal type columns with hairline dividers (geography left off — already in hero support)
- Copy in `homeActionStrip` inside `src/content/home.ts`
- Hero CTAs removed earlier so actions live only here
- Uses existing late stagger (`hero-copy-delay-4`) so the strip arrives after hero copy

### Notes

- Not the Welfare three-tone slab. Accent used for labels only
- All three actions point at `/get-involved` until that page exists
- “Where we work” dropped from the strip as redundant with hero subtext

---

## 2026-09-05 — Block 2: Hero + image lab

**Status:** Accepted.

### What landed

- Classroom photo as default hero (full Pexels res); green-shirt as swap candidate
- `HeroProvider` + `/preview/images` — swap photo, toggle greyscale (CSS, not a second file)
- `HomeHero` — scrim, 4+a copy, no on-hero CTAs
- Load motion: image ease-in; eyebrow → headline → support stagger; off when `prefers-reduced-motion`

### Notes

- Add heroes via `public/images/heroes` + `src/content/heroes.ts`

---

## 2026-09-05 — Block 1: Navbar

**Status:** Accepted.

### What landed

- `src/content/navigation.ts` — Home, About, Programs, Impact, Get involved (CTA), Contact
- `src/components/layout/SiteHeader.tsx` — fixed bar, Welfare-style overlay on Home until scroll, solid white + border after scroll / on other routes
- Active link uses `text-accent`; Get involved is the accent button
- Mobile menu (hamburger, full-width panel, locks body scroll while open)
- Header mounted in root layout

### Notes

- Overlay only on `/`
- Unbuilt routes 404 until those pages exist

---

## 2026-09-05 — Block 0: Shell

**Status:** Accepted.

### What landed

- Next.js (App Router), TypeScript, Tailwind v4 at the repo root (`910df`)
- Tokens in `src/styles/globals.css` — B&W base plus `--accent*` on `:root`
- Tailwind maps `bg-accent` / `text-accent` and friends to those variables
- Figtree and Newsreader via `next/font`
- `AccentProvider` keeps the chosen preset/custom accent in `localStorage` and writes the CSS variables
- Presets and custom colour helpers in `src/lib/accents.ts`
- Private accent page at `/preview/accents` (`noindex`, no public nav link)
- Small `Button` primitive for samples and later UI

### Notes

- Runtime vars are `--accent`, `--accent-dark`, `--accent-soft`, `--accent-ink` so Tailwind’s `--color-accent: var(--accent)` doesn’t chase its own tail
- Default accent stays Sahel gold until someone locks a different one from the preview
