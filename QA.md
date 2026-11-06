# Iron Horse redesign verification

November 6, 2026. This record supersedes the earlier pitch checks for the replacement design.

- All 11 HTML routes pass local link/asset checks, banned-copy checks, and duplicate script/stylesheet checks.
- Homepage layouts checked at 320, 390, 768, 1024 and 1440px with no horizontal overflow.
- Menus, private events, visit, reservations, ordering and gallery checked at 320 and 1440px; no broken images or horizontal overflow recorded.
- Menu selections update the photograph and caption. On phones the photograph sits immediately below the selected dish.
- Palladio selection shows its correct Folsom details and matching Toast reservation link.
- Gallery opens and responds to arrow keys and Escape. Mobile navigation opens and closes with Escape.
- A fresh local browser page reported zero errors after the duplicate-loading fix; dish selection still worked.
- The opening photo arrival is disabled by reduced-motion CSS. No repeating marquee or scroll hijack is used.
- Local preview screenshots are provided in `preview/`; detailed check evidence is in `data/horse-*-checks.json`.

The independent reviewer identified four material corrections and scored all four resolved in the final ship verdict. That verdict covers the scored corrections; it is not a new whole-surface audit. See data/horse-review.json and data/horse-verdict.json. The Impeccable launcher and automated detector were unavailable, so no automated design certification is claimed. External bookings, purchases and event submissions were not performed.

## Restaurant hero and R Street photo update

Hero copy changed to the restaurant name and a direct description of its food, cocktails and copper-topped bar. Room images on the homepage, gallery, event and reservation pages now use R Street photographs. Captions and gallery enlargement match. The revised hero fits at 320, 390, 768, 1024 and 1440px without horizontal overflow. New photographs load correctly; all 11 routes still pass local link, asset and copy checks. Desktop and mobile previews are refreshed.

## Button styling refinement

Shared buttons now use inset sign frames, copper inverse actions and consistent hover, press and keyboard-focus states. Verified homepage overflow at 320, 390, 768, 1024 and 1440px; mobile hero targets are 54px tall. Confirmed mobile navigation opens and closes with Escape, the hero reservation link reaches its local route, and gallery controls still open and close the viewer. The reservation route has no button-text overflow at 320px. Existing reduced-motion support also covers the new transitions.
