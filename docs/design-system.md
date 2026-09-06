# 910DF — Design system (locked)

Visual language for the public site. Inspired by [Welfare](https://themewagon.github.io/welfare/) (B&W photography + one accent) — **not** a clone, and **not** their orange.

Logo mark still deferred. This file locks colour, type, and layout rules so build work stays consistent.

---

## Decision: accent

Welfare pops with **bright orange**. Fine for that template; too “charity theme default” if we copy it for 910DF.

**Default accent (production start): Sahel gold / amber**

These are the **default CSS variable values**. They can be switched live via the private accent preview (`docs/build-pattern.md`). Final client choice updates this table and the defaults.

| Token | CSS variable (runtime) | Default hex | Use |
|---|---|---|---|
| `accent` | `--accent` | `#C9962A` | Primary CTAs, active nav, key links, action-strip emphasis |
| `accent-dark` | `--accent-dark` | `#A67B1F` | Hover / pressed |
| `accent-soft` | `--accent-soft` | `#E4C56A` | Secondary strip panels, soft highlights (Welfare-style triple cards) |
| `accent-ink` | `--accent-ink` | `#1A1408` | Text on accent buttons when needed for contrast |

Tailwind colour names match the token (`bg-accent`, `text-accent-dark`, …) and resolve through `@theme` to `var(--accent*)`.

Why this default: reads warm (sun, grain, Sahel light), works on black-and-white photos, sits apart from Welfare orange, and avoids purple / neon / generic “NGO blue.”

**Components must use the CSS variables (via Tailwind theme), never hardcoded accent hex** — required so the preview picker and later client lock-in work without rewriting UI.

**Rejected as the only system:** purple/indigo, cream+#terracotta broadsheet look. Orange/teal/etc. may exist as **preview presets**, not as competing hardcoded themes in components.

---

## Base palette (black & white system)

| Token | Hex | Use |
|---|---|---|
| `black` | `#0B0B0B` | Hero overlays, footer, strong type |
| `white` | `#FFFFFF` | Page ground, ghost buttons on dark |
| `ink` | `#141414` | Body text on light |
| `muted` | `#5C5C5C` | Supporting copy |
| `line` | `#E6E6E6` | Dividers |
| `surface` | `#F7F7F5` | Alternate section ground (cool near-white, **not** warm cream `#F4F1EA`) |
| `overlay` | `rgba(0,0,0,0.45)` | Hero text legibility over photos |

Photography: **greyscale via CSS** (`grayscale` utility / filter) on the colour original. Do not bake a separate B&W file as the only asset — the image lab needs the colour master so you can toggle. Default on the live hero is greyscale on.

---

## Typography

Avoid default stacks (Inter, Roboto, Arial, system-only).

| Role | Font | Notes |
|---|---|---|
| Display / emotional headlines | **Newsreader** (serif) | Hero and major section titles — Welfare-style serif hit without newspaper layout |
| UI / body | **Figtree** (sans) | Nav, buttons, body, forms |

Load via `next/font` (Google). Fallbacks: `Georgia, serif` / `system-ui, sans-serif` only as fallbacks, not the design.

### Type scale ( foreuse)

- `text-xs` … follow Tailwind scale once theme is wired  
- Hero display: large, tight-ish tracking on all-caps brand if used  
- Section titles: clear hierarchy; one H1 per page  

---

## Layout language (from Welfare, adapted)

- Full-bleed B&W hero; transparent header over hero; brand left, nav right  
- Active nav link = `accent`  
- Overlapping **action strip** under hero: three panels using `accent` / `accent-soft` / `accent-dark` (or adjacent gold steps) — Donate / Volunteer / Partner (or Impact framing + those CTAs)  
- White (or `surface`) content sections below; generous whitespace  
- Cards for programs: image + title + short text — no dashboard chrome in the hero  
- Ghost (outline) button on dark heroes; solid `accent` buttons on light sections; white buttons on accent panels  

### Motion (intentional, not noisy)

- Header: transparent → solid on scroll (already in navbar)
- Hero load: image eases in (soft scale/fade); copy rises in a short stagger
- Later sections: fade/rise on enter when those blocks land
- Always honour `prefers-reduced-motion`
- No particles, loops, or glow stacks


---

## Radius, space, elevation

- Prefer slight radius on buttons/inputs (`rounded-sm` / `md`), not pill soup  
- Shadows: minimal; one soft level max — don’t stack multi-layer glam shadows  
- Spacing from a scale only (Tailwind theme), no magic `17px`

---

## Contrast rules

- `accent` on `white` and `accent` on `black` must stay WCAG AA for UI text/icons  
- Large display type on photos: white + overlay, not thin gold on busy faces  
- Never remove focus rings; use `accent` or a clear ring token  

---

## Tailwind mapping (when scaffolding)

Wire theme keys to CSS variables for accents; static hex OK for the fixed B&W base:

```
colors.black, white, ink, muted, line, surface  → fixed hex
colors.accent, accent-dark, accent-soft, accent-ink → var(--color-accent*) 
fontFamily.display → Newsreader
fontFamily.sans → Figtree
```

No raw accent hex in components once the theme exists. Preview route required from shell: see `docs/build-pattern.md`.

---

## Still deferred

- Final logo mark / wordmark treatment (may use typeset “910DF” / full name until then)  
- Real photography assets (use licensed or client-provided B&W; no random faces you don’t have rights to)  
- Real contact details  

---

## Veto

If the client insists on Welfare orange, swap only the accent tokens to an agreed orange hex — keep base B&W + type + layout rules. Don’t restyle the whole system ad hoc.
