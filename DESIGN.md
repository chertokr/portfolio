# DESIGN.md — Rachel Chertok Portfolio

## Direction contract — "The Feature Profile"

**THESIS.** The portfolio is a printed feature profile about a product manager — big grotesk headlines, an asymmetric editorial grid, and oversized data as the visual hooks. It refuses the AI-portfolio uniform: Inter, glass blur header, a stack of identical accordion cards, and a logo-cloud splash.

**OWN-WORLD.** Cool paper ground (`--paper #efece3`), near-black ink (`--ink #1a1712`), one signature **oxblood** (`--accent #7d1d2d`) carried in large fields, thick rules, and section markers — not scattered accents. Display type is **Bricolage Grotesque** (700/800); reading type is **Spectral** serif; labels are Bricolage semibold uppercase with modest tracking (never mono). Big folio numbers (01–05), 2–4px ink rules, pull-stats at display scale, a 12-column asymmetric grid.

**STORY.** The visitor meets a masthead (name as headline + one standout stat + editorial portrait), scans an editorial spread of experience and selected work where the big numbers ($300K, 2M+, +30%, 61M+) lead, then reaches the resume and a plain, confident contact close.

**FIRST VIEWPORT.** A magazine masthead, not a centered hero: oversized name set as a two-line headline flush-left, a kicker line above, the headshot framed as an editorial portrait to the right, one hero stat, and the folio/nav as a running head. Primary path (Experience / Work / Resume) sits in the running head.

**FORM.** Editorial feature profile, mode = Experience, calibrated "distinctive but scannable" for PM recruiting. User-pinned direction (no concept roll).

## Durable rules
- Two typefaces only: Bricolage Grotesque (display/labels), Spectral (body). No third face, no mono.
- One accent (oxblood). No rainbow category tags; work is differentiated by number + type, not by hue.
- Rules and folios carry structure; avoid soft-shadow rounded cards as the page grammar.
- Respect `prefers-reduced-motion`; visible `:focus-visible`; body/secondary text ≥4.5:1 on paper.
- Keep all product truth and content; the headshot is `public/headshot.png`.
