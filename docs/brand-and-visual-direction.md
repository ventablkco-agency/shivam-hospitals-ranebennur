# Brand and visual direction

## Brand asset received

The hospital logo has now been supplied in this project conversation. It uses a multicolour mark with blue, green/lime and orange, the wordmark “SHIVAM HOSPITALS”, and the tagline “PASSION FOR HEALING”.

Use the supplied original logo as the source of truth. Do not redraw, recolour, distort, crop, or recreate the logo in CSS. Request an SVG/vector master and a transparent high-resolution export from the client for production use. Confirm the exact public/legal hospital name and tagline spelling before launch.

The HEX values below are practical digital approximations sampled from the supplied raster artwork, not an official brand standards document.

## Approved website art direction

**Minimal, white-led healthcare design.** Preserve recognition of the hospital's logo without reproducing all its colours throughout the interface. The website should feel calm, premium, clear and clinically credible—not loud, colourful, or promotional.

The visual identity is carried primarily by:
- Deep hospital blue for primary interaction and selected brand moments.
- Deep navy for typography and structural contrast.
- A restrained healing green for secondary emphasis.
- Warm, near-white surfaces and generous whitespace.

Lime and orange remain supporting colours inside the logo. They are not routine interface colours.

## Minimal website palette

### Core brand colours

| Token | HEX | Use |
|---|---|---|
| Brand blue | `#0060B8` | Primary CTA, active navigation, links, selected interface states |
| Deep navy | `#001840` | Headings, footer, strong structural text |
| Healing green | `#009040` | Small secondary accents, selected icons, subtle highlights |
| Dark accessible green | `#006B32` | Optional green button/background when white text is required |

### Neutral foundation

| Token | HEX | Use |
|---|---|---|
| White | `#FFFFFF` | Main page background |
| Soft white | `#F5F9F7` | Alternate section background |
| Pale sage | `#E8F0ED` | Occasional subtle highlight surface |
| Body text | `#152238` | Paragraphs and supporting content |
| Muted text | `#64748B` | Secondary labels and metadata |
| Border | `#E2E8F0` | Dividers, form borders and subtle outlines |

### Logo-only accents

| Token | HEX | Rule |
|---|---|---|
| Lime | `#A0D000` | Retain in the logo; use only as a rare decorative detail |
| Orange | `#FF6500` | Retain in the logo; do not use as a general CTA or section colour |

## Colour usage ratio

Treat this as a visual guideline, not a rigid CSS calculation:

- **80–85%** white and neutral surfaces.
- **10–15%** blue and navy.
- **Up to 5%** green accents.
- Lime and orange should appear primarily in the supplied logo, not as recurring UI colours.

## Interface rules

- Primary buttons: brand blue with white text. Keep the same treatment consistent across the site.
- Secondary actions: restrained outline or text-link treatment in brand blue.
- Green: use for small supporting accents, not as a second competing primary CTA.
- Headings: deep navy. Body copy: body-text neutral.
- Cards and panels: white or soft white, subtle borders, restrained shadows only where they clarify hierarchy.
- Avoid large blue/green gradient backgrounds, multicolour section backgrounds, lime buttons, orange buttons, and rainbow iconography.
- Do not colour every icon or heading. Most interface elements should remain neutral.
- Check WCAG 2.2 AA contrast for all text and interactive states. Do not use bright lime or orange for small text on white.
- Use colour with typography, spacing and layout—not as a substitute for hierarchy.

## Typography and composition

- Choose one considered type pairing after checking Kannada glyph coverage if Kannada pages are required.
- Use editorial heading scale, readable body sizes and clear line lengths.
- Use generous whitespace and an 8px spacing rhythm.
- Prefer strong photography and purposeful asymmetric composition over repetitive card grids.
- Use real hospital, clinician and facility photographs approved by management.
- Motion should be subtle, purposeful and reduced-motion aware.

## Directions for client / agency review

These are design concepts, with the supplied logo now informing the colour system.

### A — Institutional warmth (recommended)
White-led editorial healthcare design, deep blue typography and CTAs, restrained green details, authentic photography. Mood: established, calm, premium and locally trusted.

### B — Clinical precision
White and navy dominate, blue interaction states, minimal green. Mood: precise, modern, structured and medically focused.

### C — Human-centred local care
Soft white and pale sage surfaces, deep blue anchors, natural-light photography and approachable typography. Mood: welcoming, calm and community-oriented.

**Recommendation: Direction A, using the minimal palette above.** Do not introduce all logo colours as equal design colours.

## Asset checklist

- Supplied logo raster retained as received.
- Request SVG/vector master and transparent high-resolution exports.
- Request monochrome/reversed logo variants if available.
- Brand font licence/source files or permission to use licensed web fonts.
- Exterior and entrance photos, signage, reception, departments, rooms and facilities.
- Approved clinician portraits and credentials.
- Team/clinical photos with written consent and usage scope.
- Existing brochures, letterhead, prescription header, signage and social templates.
- Confirm photo subjects, dates, locations and consent. Store original assets with source and permission metadata.

## Figma handoff

1. Place the original logo and preserve its proportions.
2. Apply the minimal palette and document colour tokens.
3. Confirm direction A with the client.
4. Confirm English/Kannada/Hindi content strategy and font glyph coverage.
5. Test colour contrast and interactive states.
6. Design mobile navigation, homepage, speciality detail, doctor detail, appointment form and contact page.
7. Record component states, responsive behaviour, accessibility and motion rules.
