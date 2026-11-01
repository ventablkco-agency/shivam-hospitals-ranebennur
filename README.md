# Shivam Hospitals — Website Project

**Agency:** Ventablk  
**Client:** Shivam Hospitals (also publicly listed as Shivam Hospitals / Hiregoudar Multispeciality Hospital)  
**Location:** Ranebennur, Haveri district, Karnataka, India  
**Repository:** https://github.com/ventablkco-agency/shivam-hospitals-ranebennur  
**Project status:** Discovery and foundation  
**Implementation status:** Not started

This repository is the source of truth for the website project. All implementation work is to happen on the `building` branch. Keep `main` as the stable release branch; merge reviewed, tested work through pull requests.

## Important accuracy rule

Directory listings are leads, not client-approved facts. The hospital must approve its official name, address, contact numbers, services, clinicians, qualifications, facilities, insurance/PM-JAY status, review quotations, operating hours, and all clinical claims before publication. See [hospital-facts.md](docs/hospital-facts.md) for confidence labels and verification status.

## Project goals

1. Establish a trustworthy, premium digital presence for local patients and families.
2. Help visitors quickly find the right department, clinician, contact channel, directions, and appointment process.
3. Make emergency contact information immediately findable without implying that a web form is an emergency service.
4. Present only verified medical, clinician, facility, and accreditation information.
5. Build a fast, accessible, mobile-first website with strong local search foundations.
6. Provide a maintainable content system that hospital staff and Ventablk can update safely.

## Proposed technical direction

- **Framework:** Astro + TypeScript; static-first rendering.
- **Styling:** Tailwind CSS, with a documented design-token layer.
- **Interactivity:** Small, deliberate client-side islands only where needed. React is optional, not the default.
- **Animation:** restrained motion, reduced-motion support, and no animation that delays access to essential information.
- **Hosting:** Cloudflare Pages (final choice subject to DNS, account ownership, and operational review).
- **Booking backend:** decide after discovery. Candidate: server-side Cloudflare Worker/Pages Function with a managed PostgreSQL service. Never expose privileged database credentials in the browser.
- **Repository:** GitHub; protected/stable `main`, active `building` branch, pull-request review before merging.

No framework scaffolding, application source, live integrations, analytics, or deployment configuration has been created at this stage.

## Proposed information architecture

- Home
- About the Hospital
  - Overview and history
  - Mission and values (only after management approval)
  - Infrastructure and patient information
- Specialities
  - Orthopaedics
  - Dermatology
  - Neurology
  - General Surgery
  - Urology
  - ENT
  - Maxillofacial Surgery
- Doctors
  - Clinician directory
  - Individual profiles and consultation schedules
- Facilities
  - Emergency and critical care
  - ICU
  - Operation theatres
  - Laboratory
  - Pharmacy
  - Inpatient rooms
- Patient Information
  - Appointment requests
  - Insurance and cashless services
  - PM-JAY / Ayushman Bharat information (only after current eligibility and package verification)
  - FAQs
- Patient Reviews
  - Selected Google review excerpts with source/date and permission/process review
  - Link to the live Google Business Profile
- Contact and Directions
- Privacy Notice
- Terms of Use
- Appointment Disclaimer
- 404 page
- Optional authenticated staff interface (separate scope and security review)

## Homepage content sequence (proposed)

1. Header with hospital identity, primary navigation, call action.
2. Hero: clear hospital positioning, primary appointment action, secondary call/directions action.
3. Trust strip: only substantiated facts (e.g. verified years, clinicians, services, accreditations).
4. Specialities overview linked to detailed pages.
5. Doctor/clinician introductions with verified credentials and schedules.
6. Facilities and infrastructure with original photography.
7. Hospital introduction and approved mission/values.
8. Patient experience / Google review excerpts, accurately attributed.
9. Appointment request section with clear response expectations.
10. Location, contact details, opening hours and directions.
11. FAQs based on real patient questions.
12. Footer with NAP, policies, social links, and emergency disclaimer where appropriate.

## UX principles

- Mobile-first layout and tap targets for Indian mobile users and average network conditions.
- Call, directions, and appointment-request actions must be distinct and consistently labelled.
- Sticky mobile call/WhatsApp actions only after phone numbers and WhatsApp ownership are confirmed.
- A booking request is not a confirmed appointment unless the hospital explicitly confirms it.
- Never suggest that an online form is suitable for emergencies.
- Plain language; prepare English first, then approved Kannada and Hindi translations.
- WCAG 2.2 AA target, keyboard access, visible focus, sufficient contrast, labels, and reduced motion.
- Optimise Core Web Vitals; use responsive image formats/sizes and avoid unnecessary client JavaScript.
- No fabricated testimonials, review stars, doctor counts, treatment outcomes, awards, or statistics.

## Project workflow

1. Discovery and client fact verification.
2. Brand asset audit and visual direction approval.
3. Sitemap, content model, page briefs, and SEO map.
4. Figma design system and homepage direction approval.
5. Astro implementation on `building`.
6. Integrations and booking flow (only after privacy/security scope approval).
7. Content population and structured data using verified facts.
8. Responsive, accessibility, performance, security, and SEO QA.
9. Client acceptance and controlled release to `main`.
10. Deployment, analytics/search-console setup, handover, and maintenance plan.

See the documents in `docs/` for detailed project foundations and outstanding client inputs.
