# Sitemap and page specifications

## Primary navigation

Home · About · Specialities · Doctors · Facilities · Patient Information · Reviews · Contact

Primary action: **Request an appointment**. Secondary global action: **Call the hospital**. Emergency contact is separate and must be verified before use.

## Sitemap

| Route | Page | Primary intent | Notes |
|---|---|---|---|
| `/` | Home | Understand hospital and take next step | Strong local context; verified trust signals |
| `/about/` | About | Establish identity, history and approach | Mission/vision only with approval |
| `/specialities/` | Specialities index | Find relevant care | Link to service pages |
| `/specialities/orthopaedics/` | Orthopaedics | Understand scope and consult | Confirmed scope and clinician |
| `/specialities/dermatology/` | Dermatology | Understand scope and consult | Confirmed scope and clinician |
| `/specialities/neurology/` | Neurology | Understand scope and consult | Confirm coverage and availability |
| `/specialities/general-surgery/` | General surgery | Understand scope and consult | Confirm procedure scope |
| `/specialities/urology/` | Urology | Understand scope and consult | Confirm coverage |
| `/specialities/ent/` | ENT | Understand scope and consult | Confirm coverage |
| `/specialities/maxillofacial-surgery/` | Maxillofacial surgery | Understand scope and consult | Confirm naming and scope |
| `/doctors/` | Doctors index | Choose a clinician | Publish only credential-verified profiles |
| `/doctors/[slug]/` | Clinician profile | Check qualifications and schedule | One profile per verified clinician |
| `/facilities/` | Facilities | Understand available infrastructure | Confirm each claim and photo |
| `/patient-information/` | Patient information | Prepare for visit | Practical, plain-language guidance |
| `/appointments/` | Appointment request | Request a consultation | Not an emergency or instant confirmation |
| `/insurance-cashless/` | Insurance and cashless | Understand coverage process | Current network/package verification |
| `/ayushman-bharat/` | PM-JAY | Understand eligibility/process | Publish only after official status and package checks |
| `/reviews/` | Patient reviews | Read patient feedback | Source-linked Google excerpts; never fabricate |
| `/contact/` | Contact and directions | Call, message, navigate | Consistent NAP and map pin |
| `/faq/` | FAQs | Resolve practical questions | Answers verified by hospital staff |
| `/privacy/` | Privacy notice | Understand personal-data processing | Legal review required |
| `/terms/` | Terms of use | Understand site use | Legal review required |
| `/appointment-disclaimer/` | Appointment disclaimer | Understand request process | No guarantee until confirmed |
| `/404/` | Not found | Recover navigation | Helpful links and call action |

Optional private staff dashboard is a separate product scope; do not expose it in public navigation.

## Homepage section brief

### 1. Header
Hospital mark/wordmark, concise navigation, appointment CTA, call action. On mobile, prioritise one visible primary action and accessible menu.

### 2. Hero
Specific positioning statement approved by the hospital, Ranebennur location context, original hospital/clinical photography. CTA: appointment request. Secondary: call or directions. Avoid generic “world-class healthcare” claims.

### 3. Credibility facts
Use only substantiated items: verified years of operation, clinicians, departments, facilities, accreditation, scheme status. If not verified, omit the statistic rather than adding a placeholder.

### 4. Specialities
Curated department list with clear links; do not imply every condition is treated. Department descriptions must be medically reviewed.

### 5. Doctors
Current, credential-verified clinicians with profile links, qualifications, speciality, language, schedule and booking route.

### 6. Facilities
Original photography, clear labels and actual availability. No stock images presented as hospital facilities.

### 7. About
Short factual introduction, history and approved mission/values. Keep hospital story distinct from generic healthcare messaging.

### 8. Patient feedback
Selected, source-linked Google review excerpts. Verify profile identity, rating/count freshness and usage rights/attribution.

### 9. Appointment request
Minimal fields, purpose-specific privacy notice, consent, clear response timeframe, confirmation state and alternate phone route.

### 10. Contact and directions
Verified postal address, click-to-call, WhatsApp only if official, map/directions, hours and travel landmarks.

### 11. FAQs
Answer real patient questions: appointment process, hours, location, documents, insurance/cashless process, visiting rules and emergency contact—only after confirmation.

### 12. Footer
Consistent name/address/phone, quick links, social links, policies, copyright, and clear disclaimer.

## Content model

- Hospital: legal name, display name, short description, long description, approved logo, address, geo coordinates, phone, email, hours, map URL, social profiles.
- Speciality: canonical name, slug, short summary, detailed scope, symptoms/conditions only when medically reviewed, available clinician references, schedule, booking route, SEO title/description, medical reviewer.
- Clinician: full name, slug, approved image, exact credentials, registration details, speciality, languages, biography, experience basis, schedule, booking route, approval date.
- Facility: name, accurate description, availability, images, evidence/owner, approval date.
- Review: source profile, source URL, review text excerpt, date, reviewer display name only when appropriate, permission/attribution status, verification date.
- FAQ: question, answer, owner, reviewer, last-reviewed date.
- Page metadata: title, description, canonical URL, OG image, indexability, reviewer and last-updated date.

## Content standards

- English as initial source language. Kannada and Hindi versions should be translated and reviewed by fluent human reviewers.
- Avoid medical advice, diagnosis, guarantees, exaggerated comparisons, and treatment claims.
- Attribute every credential and measurable claim to evidence.
- Dates and schedules must be maintained; do not hard-code stale hours into multiple components.
- Each speciality page needs a clear scope, relevant clinician(s), appointment route, location and reviewed FAQ.
- No lorem ipsum, fake doctor bios, fake reviews or fabricated statistics.
