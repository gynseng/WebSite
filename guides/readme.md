# Guides Overview & Quick Index

This document provides a compact overview and quick index for the three support guides in this folder. Use the table below to jump to a guide, read a short summary, and see the most important topics covered.

| Guide | Summary | Key Topics |
|------:|:--------|:-----------|
| [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) | Set up Google Analytics 4, Microsoft Clarity, and basic SEO tasks. | GA4 measurement ID, Clarity project ID, sitemap, robots, event tracking, troubleshooting |
| [FAVICON_GUIDE.md](./FAVICON_GUIDE.md) | How to add and verify a modern SVG favicon and generate PNG fallbacks for full compatibility. | `favicon.svg`, PNGs, site.webmanifest, generation tools, testing, cache clearing |
| [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) | Instructions to deploy the site to GitHub Pages, configure Formspree contact form, and optionally connect a custom domain. | GitHub Pages setup, Formspree integration, DNS records, verification checklist |

**Quick Tips**
- **Search:** Use your editor's project search for keywords like `GA_MEASUREMENT_ID`, `CLARITY_PROJECT_ID`, `favicon.svg`, or `Formspree` to locate implementation points quickly.
- **Files to check in repo root:** `index.html`, `styles.css`, `script.js`, `sitemap.xml`, `robots.txt`, `favicon.svg`, `site.webmanifest`.
- **Testing:** After edits, push to GitHub and wait ~5–15 minutes for Pages updates; wait up to 24–48 hours for analytics/SEO/DNS propagation when applicable.

**How to contribute**
- To suggest changes or improvements, open a pull request against the `main` branch with your proposed edits to the relevant guide file.
- For copy or content corrections, edit the specific `*.md` file and include a short summary in the PR description.

**Last updated:** 2026-01-01

If you'd like, I can expand each guide's one-line summary into a short paragraph, add direct anchor links to major sections, or generate a single consolidated `README.md` at the repo root that links into this folder. Which would you prefer?

## Centralizing Analytics

If you want a single place to view site performance and user behavior, centralize these data sources: **Google Analytics 4 (GA4)**, **Microsoft Clarity**, **Google Search Console**, and your contact/form submissions (Formspree or CSV exports). For consolidated reporting use **Google Looker Studio** and optionally **BigQuery** for raw event analysis.

- **Quick links (add your real links here):**
	- GA4 property: `<PASTE_GA4_URL_OR_ID>`
	- Looker Studio dashboard: `<PASTE_LOOKER_STUDIO_URL>`
	- Microsoft Clarity: `<PASTE_CLARITY_PROJECT_URL>`
	- BigQuery project/dataset: `<PASTE_BIGQUERY_URL>`

- **Where to configure in this repo:**
	- Tracking IDs: `index.html` (replace `GA_MEASUREMENT_ID`, `CLARITY_PROJECT_ID`).
	- Event definitions: `script.js` (centralize event tracking here).
	- Documentation & dashboard links: `guides/readme.md` or `guides/ANALYTICS_DASHBOARD.md` (created below).

- **Fast setup (3 steps):**
	1. Replace tracking placeholders in `index.html` with your real IDs.
 2. Confirm events are sent from `script.js` (form submissions, CTA clicks, scroll events).
 3. Build or connect a Looker Studio dashboard (GA4 + Search Console + sheet/BigQuery for forms; optional Clarity connector).



