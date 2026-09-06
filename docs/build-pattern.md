# 910DF: Build pattern (locked)

How we build and document the site. Follow this for every slice. Cursor also mirrors the hard rules in `.cursorrules`.

---

## Lego / block build

The site is stacked **blocks**, not one giant page dump.

1. Build **one block** (or the thin shell that all blocks plug into).
2. Run it locally so it can be seen and inspected in the browser.
3. User reviews, tweaks, **finalises** that block.
4. Document what landed (see below).
5. Only then attach the **next** block.

Do not skip ahead and build three sections “while we’re here.” Do not start the next block until the current one is accepted (or explicitly deferred with notes).

### Default block order (Home first)

| Order | Block | Notes |
|---|---|---|
| 0 | **Shell** | Next.js + Tailwind + fonts + CSS accent variables + accent preview route wired enough to work |
| 1 | Navbar | |
| 2 | Hero | |
| 3 | Action strip | Bridge band under hero, Donate / Volunteer / Partner (not Welfare candy bars; no repeat of hero geography) |
| 4 | Situation + work | WFP-style: factual situation prose, then “What Nine-Ten is doing” workstreams |
| 5 | Programs preview | |
| 6 | Where we work | |
| 7 | Get-involved teaser | |
| 8 | Footer | |
| 9+ | Other pages | Reuse blocks; new page-only sections as their own slices |

Shell (0) is mandatory first: without tokens + preview plumbing, later blocks fight the foundation.

Each block = component(s) under `components/layout` or `components/sections`, composed by a route, not markup dumped in `page.tsx`.

---

## No hardcoding things that can change

Design and brand values that might change later (accents, related colours, type choices, spacing/radius scales, site copy) belong in tokens, theme config, or `src/content/`, not hardcoded in components. That is why accents are CSS variables: the preview picker and a later client colour lock should not require hunting hex through the tree. Inline one-off styling for changeable visuals is the same problem in another coat.

---

## Accent system + preview (required from day one)

**Not optional.** Preview exists for the developer (and to show the client in a controlled way). It is **not** a public homepage feature.

### Runtime model

- Accents are **CSS variables** on a root (e.g. `:root` / `html`): `--color-accent`, `--color-accent-dark`, `--color-accent-soft`, `--color-accent-ink` (and any derived values needed).
- UI reads those variables (via Tailwind theme mapping to the CSS variables). **No hardcoded accent hex in components.**
- Default values match `docs/design-system.md` (Sahel gold) until a final accent is locked for production.

Runtime CSS custom properties on `:root` / `html` use short names `--accent`, `--accent-dark`, `--accent-soft`, `--accent-ink` so Tailwind can map `--color-accent` → `var(--accent)` without a circular reference. Design docs may still say “accent tokens”; the source of truth for values is those CSS variables + `docs/design-system.md` defaults.

### Preview surface (required)

Pick one primary approach and implement it in the **shell** slice (can refine later, but must exist from the start):

- **Preferred:** a **separate private route** (e.g. `/preview/accents`, `/preview/images`, `/preview/brand`) that is **not linked** from public nav/footer. Unless someone has the URL (or you deploy it), visitors don’t stumble on it.
- Optional extra: same controls available only in local/dev, still keep the route so demos are easy.

The preview must let you:

- Switch among a **curated list** of accent presets (gold, orange, teal, etc.)
- Optionally pick a **custom** accent and derive dark/soft companions (document the derivation in code comments if non-obvious)
- See real UI chrome updating live (at least sample buttons, links, and a mini action-strip, and once Navbar/Hero exist, those blocks should respond too because they use the same variables)

When the client picks a final accent: update `docs/design-system.md`, set the production default variables, note the decision in the block log. Keep the preview route for future tweaks; still no public nav link.

---

## Documentation during / after each block

After a block is accepted (or at end of the slice if still iterating), update docs so you and another dev can trace the work.

### Where

| Doc | Role |
|---|---|
| `docs/build-log.md` | Chronological log: date, block name, what shipped, decisions, open questions |
| `docs/design-system.md` | Visual tokens; update when accent/type/layout rules change |
| `docs/site-ia.md` | Only if IA/sections change |
| Code comments | Local why/constraints only, plain English |

### Each build-log entry should include

- Block name and order number  
- Files/components added or touched  
- Behaviour worth knowing (e.g. sticky nav, mobile menu)  
- Accent/preview notes if that slice touched them  
- Status and any follow-up  

Create `docs/build-log.md` on the first shell slice; append from there.

Personal pricing/scope notes stay in `for_me/`, not mixed into the build log unless useful.

---

## Collaboration with this pattern

- User asks for the next block (or “go shell”).
- Implement **only** that block (+ docs for it).
- Stop for inspect / finalise.
- Do not start the next Lego piece without permission.
