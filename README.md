# Iron Horse Tavern

A complete responsive website design concept for Iron Horse Tavern, prepared for Vessel Archive. This is an independent redesign study; the official restaurant website remains https://www.ironhorsetavern.net/.

## Run locally

No build tools or package installation required. From this folder run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 . All local paths are relative, including for GitHub project hosting. The site is also portable to static hosting.

## Included

- November 6 Iron Horse redesign with eight sections, five verified menu selections, and venue-specific copy; complete official menu directory, gallery, private events, visit and reservation routes.
- Every current branch with separate hours, phone, directions and booking links.
- Official ordering, social, event and legal destinations preserved.
- Accessible mobile navigation, keyboard photo gallery, native FAQ disclosures and reduced-motion support.
- Dish photography responds to menu selection; mobile images open directly beneath the selected dish.
- Separate R Street and Palladio visit panels with matching reservation destinations.
- Self-hosted fonts with licenses; responsive WebP photos with unchanged originals and provenance.
- Research and source audit in `data/`; product and design documentation.

## Content and publication

Homepage facts were rechecked November 6, 2026. Menu prices, hours, promotions, availability and booking terms can change. Transactions and inquiries are handled by the restaurant’s existing services; this static site does not accept form submissions. The visit map loads from Google only when selected. Google Maps images were used for atmosphere research only and are not bundled.

This public repository is a reviewable design concept, not an official business launch. It uses `noindex,nofollow`. Before a business launch, obtain client approval and image/brand rights, verify all business details and link destinations, replace concept metadata, and set the final canonical URL. Image provenance is not a transfer of copyright.

## Editing

Edit the HTML pages directly. Shared structural styles are in `assets/styles.css`; the current Iron Horse identity and responsive layouts are in `assets/horse.css` across all pages. Navigation and galleries use `assets/app.js`; menu previews, location selection and maps use `assets/horse.js`. The older pitch files are retained as history and are not loaded. Facts and photograph origins are recorded in `data/venue-facts.json`, `data/revision-facts.json`, and `data/image-sources.json`. No credentials, analytics, or database are included.

## Previews and checks

[Desktop](preview/desktop.jpg) · [Mobile](preview/mobile.jpg) · [Full page](preview/desktop-full.jpg) · [Verification](QA.md)
