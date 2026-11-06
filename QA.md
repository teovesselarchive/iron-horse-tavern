# Iron Horse Tavern verification

Checked November 5, 2026.

## Completed

- 11 HTML pages: local links and image paths resolve; one H1 per page; no duplicate IDs or missing image alt attributes.
- JavaScript syntax validated.
- Homepage tested at 320, 390, 768, 1024 and 1440px: no horizontal overflow.
- Non-404 routes checked at 320 and 1440px. Narrow-heading corrections rechecked where required; no overflow remains in those checks.
- Mobile menu opens and closes; gallery advances, closes with Escape, and restores focus; FAQ opens.
- Selected official website and PDF links return HTTP 200. Across the five sites, 53 distinct destinations were checked.
- All bundled WebP files decode successfully. Hero photos request high priority; content photos use responsive sources and native lazy loading.
- Desktop 1440×1000, mobile 390×844 and full-page desktop captures visually inspected. Initial incomplete screenshot paint was corrected by waiting for the rendered image; replacement captures show real photos.

See `data/qa-results.json` for recorded checks and `preview/` for screenshots.

## Scope and limits

Reservations, ordering, purchases and event inquiries lead to the existing business services. No live transaction, booking or inquiry was submitted. Third-party service availability and accessibility are outside this static site's control. No Lighthouse score or screen-reader certification is claimed.

The Impeccable helper engine was unavailable. Source guidance was applied directly; no detector, generated direction seed or automated quality pass is claimed. Independent visual review is recorded in `data/review.json`. The final disposition is `ship`: the reviewer scored the careers link, brunch labels, and photo attribution/alternative-text corrections resolved. This verdict covers those corrections; the earlier visual assessment covers the supplied homepages and source samples, not every interior route.

## November 6 homepage revision

- All five homepage widths (320, 390, 768, 1024, 1440px) checked again after the redesign: no document or heading overflow.
- All headlines contain fewer than eight words; banned-phrase and em-dash scan passed.
- All 59 pages across the five sites passed local-link, image-path, H1, ID and image-alt checks. New JavaScript passes syntax validation.
- Each mobile navigation opens and closes with Escape. Casa Lola gallery advances, closes with Escape, and restores focus. Its Google map inserts the correctly titled iframe. MIX marquee pauses with the control state updated. No live reservation, payment, or inquiry was submitted.
- Updated desktop, mobile and full-page captures are in preview/. Homepage research and derivative image provenance are recorded in data/.
- The earlier review above records the original build; the revised homepage review is tracked separately.

The independent pitch reviewer returned `ship` on the five scored fixes: direction-contract format, hero overlines, short story headlines, removal of repeated rise motion, and MIX bottle tracking. All five were scored resolved. This verdict covers the listed fixes; it is not a whole-site certification. See `data/pitch-review.json` and `data/pitch-verdict.json`.
