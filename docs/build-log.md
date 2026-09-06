# 910DF: Build log

---

## 2026-09-06: WHO-tone copy pass + Impact

**Status:** In review.

### What landed

- Home situation and action-strip copy tightened (no partner pitch; factual problem prose)
- Programs: support line cleaned; “Why it matters” rewritten without slogan/model talk; energy what trimmed
- About: governance block removed; results framework removed; community shortened; ToC kept short
- Impact page added with measurement method + results framework (moved off About)
- Footer: contact scaffold column removed; Contact remains under Explore

### Notes

- Get involved / Contact pages still deferred
- Programs still open for client taste on structure

---

## 2026-09-06: About page

**Status:** Revised (governance and results framework cut).

### What landed

- `/about` with PageHero, mission + who we serve, theory of change (problem / response / longer-term aim + intended pathways), community-first delivery, lean governance
- Copy in `src/content/about.ts` from the blueprint; no founding fiction; no CAC/SCUML how-tos; no stage apology line on the page

### Notes

- Programs remains client-review; Get involved still deferred
- Impact page still unbuilt (nav link will 404 until then)

---

## 2026-09-06: Programs page

**Status:** In review (client may revise).

### What landed

- `/programs` with `PageHero`, six deep modules (`#water`, `#energy`, `#school-support`, `#tuition`, `#menstrual-hygiene`, `#nutrition`), and a short How we work strip (4-phase delivery path)
- Copy in `src/content/programs.ts` from the blueprint (who / what / why + strand labels)
- Home “Learn more” hashes now resolve

### Notes

- Get involved still deferred until the client specifies Donate / Volunteer / Partner content
- About is next candidate when Programs is accepted

---

## 2026-09-06: Footer denser chrome

**Status:** In review.

### What landed

- Footer no longer uses full `section-site` padding; tighter vertical rhythm so it reads as site chrome, not another content block
- Same columns and copy

---

## 2026-09-06: Block 8: Footer

**Status:** In review (spacing tightened).

### What landed

- `SiteFooter` on all pages via root layout (flex column so it sits at the bottom)
- Copy in `footerContent` (`navigation.ts`): legal name, short blurb, explore nav, Donate/Volunteer/Partner, four states, contact note (no fake email/phone)
- Black bar, accent labels, © line

### Next

Get involved page (nav + strip currently 404), then Programs page for Learn more hashes

---

## 2026-09-05: Block 4: Situation + what we do

**Status:** Accepted.

### What landed

- Situation prose tightened to blueprint wording (no marasmus, that was not in the doc)
- “What Nine-Ten is doing”: six programme cards, three per row on large screens
- Card images wired; Learn more → `/programs#id`
- Per-item scroll reveal kept

---

## 2026-09-06: Problem prose + diagonal mobile fix

**Status:** In review.

### What landed

- Home situation expanded to problem-only paragraphs (water, power, under-5 nutrition, schools / period poverty, interlocking cycle); removed the “910DF responds” bridge
- Diagonal strip clip uses a fixed rem cut (not % of tall stacked height) so Donate is not cropped on mobile; extra top padding on the first cell

### Notes

- Still no invented stats; wording stays with the blueprint problem / pathways language
- Cards remain the response / approach beat

---

## 2026-09-06: Action strip → C + deeper peek

**Status:** In review.

### What landed

- Locked preference toward C (diagonal) as default in `action-strip` lab / provider
- Stronger hero overlap (`-mt-28` / `md:-mt-36`) so ~half the strip shows on first paint, not title-only
- Extra hero bottom padding so copy clears the taller peek

### Notes

- Applies to every variant; overlap is shared on `HomeActionStrip`
- Lab still at `/preview/action-strip` if you want to compare A/D/F again

---

## 2026-09-06: Action strip lab (A / C / D / F)

**Status:** Superseded (C preferred).

### What landed

- Private preview at `/preview/action-strip` with options A pills, C diagonal, D stepped, F arc
- `ActionStripProvider` + localStorage so a pick applies on the live home page
- Default was D (stepped); later set to C

### Notes

- Same Donate / Volunteer / Partner copy as the live strip
- Use “Use on home” on a card, then open `/` to compare in context

---

## 2026-09-05: Block 3: Action strip (bridge)

**Status:** Accepted (shape under review via lab).

### What landed

- `HomeActionStrip` as stepped blocks (Donate tall + accent, Volunteer mid, Partner short), separate panels bottom-aligned into the hero
- Copy in `homeActionStrip` inside `src/content/home.ts`
- Hero CTAs removed earlier so actions live only here
- Uses existing late stagger (`hero-copy-delay-4`) so the strip arrives after hero copy

### Notes

- Not the Welfare three-tone slab. Accent used for labels only
- All three actions point at `/get-involved` until that page exists
- “Where we work” dropped from the strip as redundant with hero subtext

---

## 2026-09-05: Block 2: Hero + image lab

**Status:** Accepted.

### What landed

- Classroom photo as default hero (full Pexels res); green-shirt as swap candidate
- `HeroProvider` + `/preview/images`, swap photo, toggle greyscale (CSS, not a second file)
- `HomeHero`, scrim, 4+a copy, no on-hero CTAs
- Load motion: image ease-in; eyebrow → headline → support stagger; off when `prefers-reduced-motion`

### Notes

- Add heroes via `public/images/heroes` + `src/content/heroes.ts`

---

## 2026-09-05: Block 1: Navbar

**Status:** Accepted.

### What landed

- `src/content/navigation.ts`, Home, About, Programs, Impact, Get involved (CTA), Contact
- `src/components/layout/SiteHeader.tsx`, fixed bar, Welfare-style overlay on Home until scroll, solid white + border after scroll / on other routes
- Active link uses `text-accent`; Get involved is the accent button
- Mobile menu (hamburger, full-width panel, locks body scroll while open)
- Header mounted in root layout

### Notes

- Overlay only on `/`
- Unbuilt routes 404 until those pages exist

---

## 2026-09-05: Block 0: Shell

**Status:** Accepted.

### What landed

- Next.js (App Router), TypeScript, Tailwind v4 at the repo root (`910df`)
- Tokens in `src/styles/globals.css`, B&W base plus `--accent*` on `:root`
- Tailwind maps `bg-accent` / `text-accent` and friends to those variables
- Figtree and Newsreader via `next/font`
- `AccentProvider` keeps the chosen preset/custom accent in `localStorage` and writes the CSS variables
- Presets and custom colour helpers in `src/lib/accents.ts`
- Private accent page at `/preview/accents` (`noindex`, no public nav link)
- Small `Button` primitive for samples and later UI

### Notes

- Runtime vars are `--accent`, `--accent-dark`, `--accent-soft`, `--accent-ink` so Tailwind’s `--color-accent: var(--accent)` doesn’t chase its own tail
- Default accent stays Sahel gold until someone locks a different one from the preview
