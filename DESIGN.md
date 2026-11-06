---
name: "Iron Horse Tavern"
description: "The tavern sign and the room behind it: brick, cream, leather and copper."
colors:
  brick: "#63251f"
  accent: "#762e24"
  paper: "#f2e9d6"
  on-accent: "#fff1d6"
  ink: "#35221d"
  muted: "#685044"
  panel: "#e6dac0"
  line: "#35221d44"
  leather: "#292520"
  copper: "#dfb27e"
  copper-interactive: "#d6a16f"
typography:
  display:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(76px,9.7vw,160px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-.035em"
  display-mobile:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(44px,11vw,72px)"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-.03em"
  headline:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(40px,5.4vw,85px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.025em"
  dish-title:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(25px,2.4vw,38px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.25
rounded:
  square: "0"
  toggle: "2px"
spacing:
  gutter: "clamp(24px,5vw,88px)"
  section: "clamp(70px,8vw,130px)"
  mobile-gutter: "22px"
  mobile-section: "65px"
  narrow-gutter: "18px"
  action-gap: "12px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "18px 29px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "18px 29px"
  button-inverse:
    backgroundColor: "{colors.copper}"
    textColor: "#351b15"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "18px 29px"
  navigation:
    backgroundColor: "{colors.brick}"
    textColor: "{colors.on-accent}"
  dish-choice:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "25px 0"
  location-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "19px 12px"
  map-panel:
    textColor: "{colors.ink}"
    padding: "15px 20px"
---

# Design System: Iron Horse Tavern

## Overview

**Creative North Star: "The tavern sign and the room behind it"**

Heavy sign-painted lettering, brick red and cream make a substantial Sacramento tavern identity. Real room and food photographs provide atmosphere; leather-dark and copper sections create deliberate changes in pace. The official logo remains intact.

This is the implemented replacement across all 11 pages. The source of truth is assets/horse.css over assets/styles.css, with assets/horse.js and assets/app.js providing interaction. The current direction is data/horse-direction.md; data/pitch-direction.md is historical.

**Key Characteristics:**

- Alfa Slab One display type with practical DM Sans information.
- Real photographs, square frames and flat material-colored surfaces.
- Text-only actions, visible keyboard focus and intentional mobile compositions.

## Colors

### Primary

Brick is the header, happy-hour, event and footer surface. Accent is the deeper red action and selected-location color. Paper and on-accent supply readable reversals.

### Secondary

Copper supplies the brunch and event-contact panels. Copper-interactive supplies inverse-button hover, selection and dark-surface focus accents.

### Neutral

Paper is the primary page surface; ink and muted support practical text. Panel separates menu and inner-page heading regions. Leather grounds the room gallery. Line is the translucent ink divider.

**The Shared World Rule.** Every route uses the replacement identity; the old homepage/inner-page palette split is obsolete.

## Typography

Alfa Slab One is locally hosted at weight 400; DM Sans is locally hosted at weights 400–700. Display headings are broadly uppercase; story headings and dish names retain natural case. The frontmatter records the hero, menu heading and dish scales. Inner-page titles use clamp(44px,6vw,88px), with a 16ch maximum; mobile titles use clamp(34px,9vw,55px). Supporting text is generally 13–17px; story copy is limited to 43ch. The mobile navigation inherits an 18px label size.

## Layout

The shell is uncapped. Desktop gutters are fluid; key content sections gain a 1560px-centered inset above 1700px. The desktop header centers the logo between navigation groups; heights step from 108px to 92px at 1100px, 90px at 900px and 82px at 650px. Navigation becomes a disclosure at 900px.

The homepage uses a full photographic opening, asymmetric story/menu/gallery spreads, alternating material-colored sections and a two-column visit panel. At 650px these become deliberate single-column compositions with 22px gutters; selected narrow-layout details use 18px below 360px. The dish photograph moves directly below its selected item on mobile. Wide-screen hero type is capped; mobile uses its own scale and crop. Browser review covered 320, 390, 768, 1024 and 1440px; current captures are in .impeccable/review.

## Elevation & Depth

Photographic overlays protect hero legibility. Solid surfaces, imagery and fine rules provide depth. There are no box shadows. The native gallery dialog uses a dark translucent backdrop.

**The Flat Surface Rule.** Use real photography, tonal sections and ruled borders for depth; do not add box shadows.

## Shapes

Buttons, photographs and main panels have square corners. The navigation toggle also uses square corners. The story wordmark has a slight painted-sign rotation; this is not a license to add tilted promotional labels.

## Components

- **Actions:** primary red, outlined secondary and copper inverse variants use uppercase text-only labels with a fine inset frame, echoing the tavern sign. Base and mobile hero buttons are at least 54px tall; the header action is at least 50px. Hover changes fill and border color; press moves the control down 1px. Keyboard focus uses a contrasting 3px ring with a 5px offset. The mobile menu and gallery controls share the framed treatment. Reduced-motion disables transitions and animations.
- **Navigation:** brick surface, cream labels, underline hover/current state. The disclosure closes on Escape, link selection, outside click or desktop resize; Escape restores toggle focus.
- **Dish selector:** four buttons update a shared image on click, keyboard focus or mouse hover. The selected title turns warm red; its “View dish” cue gains weight. Descriptions remain readable without JavaScript. Honey Truffle Pizza is a fifth, text-only menu feature.
- **Location selector and map:** two pressed-state buttons switch branch-specific details, with a red underline indicating selection. Maps load only on activation and receive focus. Both branches remain in the document without JavaScript.
- **Gallery:** square photographic controls open a native dialog with Previous, Next and Close; arrow keys, Escape and opener-focus restoration are retained. Home room images do not scale on hover; the separate gallery route retains its small inherited image zoom.
- **Motion:** the opening room scales from 1.055 to 1 over 1.7s with cubic-bezier(.16,1,.3,1). Common state transitions last 0.2s. Reduced-motion disables animations, transitions and smooth scrolling. There is no parallax or repeated section entrance system.

No local form or input component exists: booking, ordering and inquiry use the established service destinations.

## Do's and Don'ts

### Do:

- Do retain the official logo, real photographs and source-backed restaurant information.
- Do use the shared brick, cream, leather and copper identity across every route.
- Do retain keyboard interaction, visible focus and reduced-motion support.

### Don't:

- Don't reuse another client’s signature layout, palette or slogans.
- Don't restore the rejected condensed-type newspaper direction or random ingredient headline.
- Don't add decorative button arrows, highlighted hero words, theme switches or invented testimonials.
