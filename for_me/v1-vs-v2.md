# 910DF — What’s in v1 vs later (for you)

Personal scope sheet so you can price, promise, and protect your time. Public IA still lives in `docs/site-ia.md`. This folder is for you, not the client site.

---

## One-line split

| | |
|---|---|
| **v1** | Shop window: clear story, six programs, donate/volunteer/partner paths, Impact *framework*, professional look. |
| **v2+** | After they have registration, banking, and real field data: payments, live/updated graphs, CMS, extra sections, automation. |

---

## v1 — build this (quoted friends-rate scope)

### Pages
- Home
- About
- Programs (all six pillars)
- Impact (what we track + how we report — **no fake numbers**)
- Get involved (Donate / Volunteer / Partner)
- Contact

### Product behaviour
- Responsive, accessible, fast enough
- Content in typed files (`src/content/`) so copy changes don’t mean rewriting components
- Tailwind + reusable components (Button, layout, sections)
- Donate path honest: how to give / pledge form — **not** live card checkout unless banking is ready and they ask
- Volunteer + partnership inquiry paths
- Year-1 “100% to programs” line (from blueprint) unless they veto
- Welfare-inspired layout language (B&W hero, accent later) — logo/accent/contact **placeholders or deferred**, not blocking structure

### Impact in v1 (important)
- KPI list per pillar (from blueprint)
- Short method: baseline → field data → quarterly updates
- Layout that can hold charts later (section ready)
- **No** live feed from Kobo/ODK
- **No** invented “served X children” counters

### Docs / handover (for you + them)
- Locked IA (`docs/site-ia.md`)
- Repo structured so another dev can continue
- Brief handoff: how to edit content files, how to deploy (when you set hosting)

### Explicitly not in v1
- Storybook, Cypress, i18n
- CMS (Sanity/WordPress admin)
- Blog, Gallery, Events (empty = worse)
- Paystack/Flutterwave wiring
- Donor login / gift history
- Live M&E database → auto graphs
- Writing their CAC/SCUML filings
- Ongoing retainer / unlimited revisions

### Suggested revision rule when you quote
- e.g. **2 rounds** of feedback on v1, then extras = new small quote

---

## v1.5 — small add-ons (separate mini-quotes)

Do these only when they ask and/or when reality unblocks them.

| Add-on | When it makes sense | Notes |
|---|---|---|
| Real logo + final accent | They have brand direction | Visual polish, not new IA |
| Real phone / email / address / bank details | They have them | Swap placeholders |
| Static quarterly charts | After first pilot / first data | You (or they) drop in numbers; charts are manual or semi-manual |
| Domain + hosting setup | Launch | Often billed as cost + small setup fee |
| Pitch-deck export page or PDF link | CSR season | Optional; not core IA |
| Basic SEO (titles, OG images, sitemap) | Near launch | Cheap if done with v1; fine as tiny add-on |

---

## v2 — phase 2 (new conversation, new money)

Blueprint dreams that need **real ops + data**, not just more React.

### Transparency / graphs (from their doc)
Their plan: quarterly impact dashboards with simple visual graphs **on the website**.

| Level | What it is | Effort |
|---|---|---|
| **A — Manual dashboards** | You update charts each quarter from a spreadsheet they send | Low–mid |
| **B — Semi-auto** | Spreadsheet / Airtable / Google Sheet → site reads it | Mid |
| **C — Live M&E** | Kobo/ODK → database → authenticated pipeline → live charts | High — real product |

**Recommendation:** promise **A** (or B) in phase 2 once pilot data exists. Do **not** sell C in the same breath as v1 unless they have budget and a data person.

### Payments
- Paystack or Flutterwave
- Optional “Sponsor a Scholar” recurring
- Receipts / confirmation emails
Needs: SCUML, org account, who handles payouts/refunds

### Content they can edit themselves
- Headless CMS or similar so non-devs update programs, Field Notebook posts, stats
Worth it when updates are frequent and you’re tired of being the copy desk

### Field Notebook / updates
- Simple “Updates” or blog **when they have photos/stories**
Empty blog on day one = skip

### Gallery / events
- Only with real assets and a reason to maintain them

### i18n
- English + Hausa (or others) — only if they will actually maintain translations

### Heavier trust / product stuff
- Donor accounts
- Automated email sequences
- Full grant CRM
- Volunteer application workflow with document upload + screening

### Automated testing / Storybook
- Only if the site becomes a long-lived product with multiple developers

---

## How this maps to their blueprint (so you don’t get confused)

| Blueprint thing | Website? | Which phase |
|---|---|---|
| Mission, WHEE, six programs, ToC | Yes | **v1** |
| Geography (4 states) | Yes | **v1** |
| Donate / volunteer / CSR pathways | Yes | **v1** |
| 100% Year-1 giving frame + Field Notebook promise | Yes (copy) | **v1** |
| KPI / M&E framework explained | Yes | **v1** |
| Quarterly graphs on site | Yes, later | **v1.5/v2** (data first) |
| Live data from surveys | Ambition | **v2 C** |
| CAC, FIRS, SCUML, state ministries | Ops | Not a site feature |
| Board/staff structure detail | Light glance max | **v1** About only |
| Risk matrix, dual-sign-off, procurement checklists | Ops | Not on site |
| 90-day internal roadmap | Ops | Not a public page |
| First pilot (pads + mini-library) | Content when real | After it happens → Field Notebook / Impact |

---

## Pricing reminder (for you — not a client invoice)

Cold mid-freelancer band for this v1 shape: often ~₦700k–₦1.2M.  
Friends rate you were circling: ~₦550k–₦600k for **v1 only**.  
v1.5/v2 = new quotes. Graphs and Paystack are how scope creeps if you don’t name the split.

---

## Decision cheatsheet

**Include in the friends quote**  
→ Everything under **v1**.

**Say “we’ll add when you have data / banking”**  
→ Static or sheet-fed charts, Paystack, Field Notebook.

**Say “that’s a separate product”**  
→ Live Kobo→dashboard, CMS, donor login, i18n, Cypress/Storybook.

When they ask “can the site show live impact graphs?” answer:

> Yes — your plan calls for quarterly dashboards on the site. v1 ships the Impact page and a place for charts. Once the pilot gives us numbers, we add the graphs (manual or connected). Full live survey→website feed is phase 2.
