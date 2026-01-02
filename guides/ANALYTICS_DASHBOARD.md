# Analytics Dashboard — Centralize & View

This guide explains how to consolidate site analytics (GA4, Clarity, Search Console, and form/CRM submissions) into a single reporting view (recommended: Google Looker Studio) and how to prepare your data sources (BigQuery, Google Sheets) for advanced reporting.

## Goals
- Single dashboard for stakeholders showing sessions, users, acquisition, engagement, and conversions.
- Easy access to Clarity session recordings and heatmaps.
- Raw event storage for custom queries (BigQuery export).
- Centralized event definitions in `script.js` or Google Tag Manager.

## Prerequisites
- GA4 property with Measurement ID
- Microsoft Clarity project
- Google account with access to Looker Studio
- (Optional) BigQuery project for GA4 export
- Access to GitHub repo to update `index.html` and `script.js`

## Data sources & how they fit
- Google Analytics 4 (GA4): primary behavioral and conversion data. Native connector in Looker Studio.
- Google Search Console: organic search impressions & queries. Native connector in Looker Studio.
- Microsoft Clarity: heatmaps and session recordings (use community connector or export to CSV/Sheets).
- Formspree / Contact forms: export submissions to CSV or push into Google Sheets for ingestion into Looker Studio.
- BigQuery (optional): raw GA4 event export for advanced querying and long-term storage.

## Step A — Prepare tracking in this repo
1. Open `index.html` and replace `GA_MEASUREMENT_ID` with your GA4 measurement ID (format `G-XXXXXXXXXX`).
2. Replace `CLARITY_PROJECT_ID` with your Clarity project ID.
3. Centralize event tracking in `script.js`:
   - Define a single function to send GA4 events (example: `sendEvent(name, params)`).
   - Send events for: `form_submit`, `cta_click`, `nav_click`, and `scroll_depth`.
4. (Optional) Add Google Tag Manager (GTM) snippet to `index.html` to manage tags without editing files going forward.

## Step B — Build a Looker Studio dashboard
1. Go to https://datastudio.google.com and click **Create → Report**.
2. Add data sources:
   - **GA4**: Choose your GA4 property (native connector).
   - **Search Console**: Add site impression and query data.
   - **Google Sheets**: Add a sheet containing Formspree/CSV exports (or use the Formspree → Sheets integration).
   - **BigQuery** (optional): Add your GA4 events dataset for advanced metrics.
3. Suggested panels / widgets:
   - Overview scorecards: Sessions, Users, New Users, Conversions (form_submissions), Bounce Rate (or engagement rate).
   - Acquisition chart: Sessions by channel over time.
   - Engagement: Average engagement time, Pages per session, Top pages.
   - Conversions: Form submissions by source, CTA clicks by page.
   - Clarity links: Add a text box with links to Clarity recordings/heatmaps for top pages.
4. Share the dashboard and pin the URL in `guides/readme.md`.

## Step C — Connect Microsoft Clarity
- Clarity doesn't have a native Looker Studio connector. Options:
  1. Use a third-party/community connector if you trust it (search in Looker Studio connectors gallery).
  2. Export Clarity reports (CSV) and import into Google Sheets, then connect the sheet to Looker Studio.
  3. Keep Clarity as a separate link in the dashboard for recordings and heatmaps (recommended for security and simplicity).

## Step D — Export GA4 to BigQuery (optional, recommended for analysis)
1. In GA4: Admin → Property → BigQuery Linking → Link.
2. Select or create a BigQuery project and dataset.
3. Choose daily streaming or daily export depending on volume and cost tolerance.
4. Once enabled, use BigQuery as a Looker Studio source or run SQL queries to build custom metrics.

## Step E — Forms & Contact Submissions
- If using Formspree:
  - Connect Formspree to Google Sheets (Formspree has integrations) or export CSVs to Google Drive.
  - Use the Google Sheets connector in Looker Studio to show submission counts and details.
- If you use a CRM, export/import contact data periodically to a sheet or BigQuery for joins.

## Step F — Recommended KPIs and events
- Sessions, Users, New Users
- Engagement Time (avg)
- Pages Per Session
- Conversions: `form_submit`, `contact_click` (CTA), `request_consultation`
- Top pages by views and conversion rate
- User acquisition channels (organic, direct, social, referral)

## Step G — Security & access
- Limit Looker Studio sharing to team Google accounts or view-only links for stakeholders.
- For BigQuery, manage IAM roles carefully (Viewer for dashboarding accounts).

## Example Looker Studio field mapping (GA4)
- `Event name` → use for segmentation (e.g., `form_submit`)
- `Event count` → metric for events
- `Page path + query string` → dimension for page-level reporting
- `Source / Medium` → acquisition breakdown

## Troubleshooting & tips
- If events don’t appear in GA4: check `script.js` console logs and use GA4 DebugView (Admin → DebugView) while testing.
- Clarity recordings take ~2 hours to appear.
- Looker Studio caches data; use the refresh button if you don’t see recent changes.

## Templates & next steps I can do for you
- create
- add a GTM snippet to `index.html` and an example tag + trigger to `script.js`.
- prepare a sample Google Sheet template for Formspree exports ready to connect to Looker Studio.

