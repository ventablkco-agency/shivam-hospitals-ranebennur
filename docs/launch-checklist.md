# QA and launch acceptance checklist

## Content and clinical accuracy
- [ ] Every hospital identity, contact and location detail signed off by client.
- [ ] Each speciality/service is currently available and medically reviewed.
- [ ] Each clinician's identity, qualifications, registration, affiliation and schedule are verified.
- [ ] Facility claims and photos are accurate and approved.
- [ ] PM-JAY/insurance details checked against current official records and package scope.
- [ ] Google rating/count and review excerpts verified against the exact profile at approval time.
- [ ] No fabricated outcomes, guarantees, unsupported superiority claims or misleading availability.

## Design and accessibility
- [ ] Approved logo, visual direction, type and colour tokens.
- [ ] Responsive layouts tested on common Android/iOS screen sizes.
- [ ] Keyboard navigation, visible focus, landmarks and headings.
- [ ] WCAG 2.2 AA contrast target and accessible form errors.
- [ ] Reduced-motion preference respected.
- [ ] Images have meaningful alt text; decorative images are ignored by assistive tech.
- [ ] No content or action is blocked by animation.

## Functionality
- [ ] Phone, directions and approved WhatsApp links work.
- [ ] Appointment form validation and confirmation work.
- [ ] Request is explicitly not presented as a confirmed booking.
- [ ] Staff notification/delivery, duplicate handling and failure path tested.
- [ ] No patient form data leaked into URL, analytics, logs or third-party scripts.
- [ ] Emergency disclaimer and emergency phone are correct.
- [ ] 404, navigation and internal links checked.

## Performance and technical SEO
- [ ] Production build succeeds and no console/runtime errors.
- [ ] Core Web Vitals checked on representative mobile conditions.
- [ ] Images responsive, correctly sized and optimised.
- [ ] No unnecessary JS or third-party requests.
- [ ] Titles, descriptions, canonical tags and OG previews complete.
- [ ] Sitemap and robots.txt correct; preview environments not indexed.
- [ ] JSON-LD validates and matches visible verified facts.
- [ ] Search Console verified; sitemap submitted.
- [ ] NAP consistent across site and local profile.

## Security and privacy
- [ ] No secrets committed or present in browser bundle.
- [ ] Server-side validation, rate limits, bot mitigation and safe errors.
- [ ] Database permissions / row-level security reviewed.
- [ ] Staff authentication, roles and offboarding tested.
- [ ] Privacy notice, terms and consent reviewed by counsel.
- [ ] Data retention, deletion, backups and incident process documented.
- [ ] Vendor/data-processing terms reviewed.
- [ ] No live patient data in test fixtures or staging.

## Release and handover
- [ ] Client acceptance recorded.
- [ ] PR review and required CI checks pass.
- [ ] Merge to main via approved workflow.
- [ ] Domain/DNS and TLS verified.
- [ ] Redirects, uptime monitoring and rollback plan tested.
- [ ] Analytics only after privacy approval.
- [ ] Admin access, documentation, training and maintenance ownership handed over.
