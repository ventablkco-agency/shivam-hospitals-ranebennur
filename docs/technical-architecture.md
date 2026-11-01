# Technical architecture (proposed; not implemented)

## Principles

Static-first, minimal client JavaScript, accessible semantic HTML, secure-by-default data handling, low operational complexity, and no hospital operational dependency on a public web form.

## Proposed stack

| Layer | Direction | Rationale / decision |
|---|---|---|
| Web framework | Astro + TypeScript | HTML-first content pages and predictable performance |
| Styling | Tailwind CSS + project design tokens | Consistent responsive system |
| Interactive UI | Vanilla/ Astro islands; React only if a demonstrated need exists | Avoid unnecessary hydration |
| Animation | Optional GSAP for a few considered interactions | Must be lightweight and respect reduced motion |
| Hosting | Cloudflare Pages | Static delivery; validate account, DNS and build setup |
| API | Cloudflare Pages Functions or Workers | Server-side validation and controlled access |
| Database | Managed PostgreSQL candidate (e.g. Supabase) | Appointment request storage if required |
| Validation | Zod or equivalent schema validation | Validate at server boundary |
| Source control | GitHub | `building` work branch, PR review, stable `main` |

This is a proposal, not a final vendor commitment. Confirm hosting ownership, domain/DNS, budget, database region, support owner and operational responsibility before provisioning paid services.

## Frontend structure (planned)

- Public content routes for hospital, specialities, clinicians, facilities, patient information, reviews, contact and policies.
- Shared accessible site shell, navigation, footer, breadcrumbs and CTA components.
- Content data stored in typed files or a small CMS after edit workflow is decided.
- Interactive islands only for navigation, booking request and other genuinely interactive elements.
- Responsive, optimised images (AVIF/WebP with fallback), explicit dimensions, lazy loading below fold.
- Metadata, canonical URLs, sitemap, robots and structured data generated from verified content.

## Appointment request flow (candidate)

1. Patient opens the appointment page and sees what the form does and does not do.
2. Patient enters only necessary details: name, phone, requested department (if useful), preferred date/time, optional contact preference, and acknowledgement/consent.
3. Browser sends the request over HTTPS to a server-side endpoint.
4. Server validates shape, lengths, allowed values, rate limits and bot signals.
5. Server writes to a restricted table using server-side credentials only.
6. Patient receives a neutral acknowledgement with a reference number where appropriate; it must clearly say this is a request, not a confirmed appointment.
7. Authorised hospital staff contact the patient via the approved workflow and confirm or propose another time.
8. Operational staff handle cancellation, duplicate, failed notification and deletion requests through a defined procedure.

Do not collect symptoms, diagnosis, prescriptions, reports, Aadhaar, insurance documents or detailed health history in a general appointment form. If such collection is genuinely required, it needs a separate clinical/legal/security assessment and an approved channel.

## Backend security

- Never place database service-role keys, API secrets or privileged tokens in client bundles.
- Validate all input server-side; client validation is only usability support.
- Enforce rate limiting, bot protection, spam controls and safe error messages.
- Use parameterised queries / supported SDK patterns; avoid string-built SQL.
- Restrict database access with least privilege and row-level policies where applicable.
- Define staff authentication, MFA where supported, role separation and account offboarding.
- Do not use public database access for private appointment records.
- Keep PII out of URLs, analytics events, client error reports and routine logs.
- Encrypt transport; confirm provider encryption-at-rest and backup arrangements.
- Add audit records for staff access/updates, without logging unnecessary patient details.
- Define retention, deletion, access requests, backup lifecycle and incident response.
- Verify email/SMS/WhatsApp vendors, data flows, subprocessors, authentication and contractual terms.
- Separate production and staging data; never use real patient records in development.
- No patient-facing AI diagnosis, triage or treatment recommendation is in scope.

## Operations and reliability

- Define service owner, escalation path, uptime expectation, backup and restore testing.
- Monitoring should avoid personal/health data in telemetry.
- Use environment-specific secrets and deployment preview controls.
- Document rollback and static fallback: phone contact must remain available if booking API is unavailable.
- Use dependency updates, secret scanning, code review and CI checks before release.
- No paid cloud resource should be provisioned without explicit budget approval.

## Open technical decisions

- Is appointment booking a simple callback request or a live slot scheduler?
- Who receives requests and who is responsible for responding?
- Is a staff dashboard required, or will an existing hospital system remain the source of truth?
- Which database/vendor, region, backup/retention and budget are approved?
- Does the client own the hosting/domain accounts, or does Ventablk operate them under an agreement?
- Is a CMS needed, and who will maintain page content and clinician schedules?
