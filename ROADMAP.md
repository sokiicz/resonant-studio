# Resonant Labs — Roadmap & Strategic Notes

## Visitor Flow Vision (Site Redesign)

The site should guide visitors through a natural narrative arc:

1. **What's been built** — live apps, with proof of quality
2. **What's being built right now** — in progress, builds anticipation
3. **What could be built next** — idea queue, creates participation

The "In Progress" section on the homepage (below the app grid) is the bridge between done and possible. After seeing it, visitors should feel invited to contribute an idea — not because they're asked to, but because the momentum is visible.

---

## Idea Queue / Community Engagement

**Concept:** Show visitors how "open" or "busy" the pipeline is. A small signal — like "2 ideas in queue" or "open for ideas" — makes sending an idea feel timely and worthwhile. FOMO for a free, open-source product.

**Possible formats:**
- A subtle stat: "3 ideas being considered"
- A status indicator: "Taking new ideas · Queue: open" vs "Queue: building"
- A progress-style bar or meter showing capacity
- An animated queue counter on the homepage CTA section

**Data source:** Ideas currently come in via the chatbot widget (Web3Forms). To automate the queue counter, we'd need to:
- Store submitted ideas somewhere countable (Supabase, Airtable, or a simple JSON file updated manually)
- Expose the count to the site (API call or static file updated by a script)

**Not building yet** — need to decide on the data model first. Manual update of a number in `site-data.js` could work as a v1.

---

## Stats Bar Enhancements (Done / Planned)

### Live
- ✅ Lines Written by Hand: 0
- ✅ AI-Generated Code: 100%
- ✅ Released This Week: dynamic (last 7 days of updates)
- ✅ In Progress: dynamic (WIP_APPS count)

### Future ideas
- Ideas in Queue: `X ideas waiting` (needs data pipeline)
- Total apps shipped: auto-count from LIVE_APPS
- People using apps: would need analytics data

---

## Homepage Section Order (Current)

Hero → Stats Bar → Activity Ticker → Live Apps → In Progress → About → Blog Preview → Newsletter → CTA

**Proposed future order** to match visitor journey:
Hero → Stats (proof) → Live Apps → In Progress → [Idea Queue / CTA] → About → Blog

The CTA ("Got an idea?") currently lives at the bottom of apps.html. Consider pulling it up to sit directly under "In Progress" — while the momentum is fresh.

---

## Article Ideas (Save for Later)

- **"The Workspace Behind the Apps"** — full breakdown of the automation setup: wip-tracker, app-meta.json, site-data.js pipeline, WORKFLOW.md, how Claude Code connects it all. For people who want to replicate the workflow.
- **Re-write existing articles** to better fit the real story and his (he/him) voice. Current articles were written before the full workflow existed — they lack the depth and real context now available.
- **"Hidden projects"** — brief piece on Undertow and OpenClaw-style experiments; personal AI music projects that might never ship publicly.

---

## Site Redesign Considerations

When the time comes to rebuild:
- Architect around the visitor journey above, not categories
- The "open source / built with AI" angle is the core differentiator — make it a narrative thread, not a footnote
- Consider a timeline view as an alternative to the grid — shows momentum and consistency
- The chatbot widget could become a proper "submit an idea" flow with queue confirmation
- All app data already lives in `site-data.js` — a redesign is just a new shell around the same data
