# Privacy, security and India compliance considerations

**Status:** Engineering requirements and legal-review checklist, not legal advice or a compliance certification.

## Data minimisation

The public site should work without collecting personal information. The appointment-request flow, if approved, should collect only what is necessary to arrange a callback or appointment: name, phone number, requested department (if needed), preferred date/time, contact preference and a clear acknowledgement/consent record.

Do not collect health history, symptoms, diagnosis, reports, Aadhaar, insurance identifiers or prescriptions through the generic form. Do not add advertising pixels or session replay to booking or patient-information flows without a specific privacy review.

## DPDP Act and Rules

India's Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025 have a phased commencement framework. The Rules were notified in November 2025; the commencement notifications provide different effective dates, including provisions scheduled one year and eighteen months after publication. At this project baseline (1 November 2026), do not assume every provision is already operative. Before launch, legal counsel must map the provisions and Rules in force on the actual launch date and the hospital's role as Data Fiduciary, plus Ventablk and vendors' roles as processors/service providers where applicable. Use the official Gazette/MeitY texts as authority.

Requirements to design for include clear purpose-specific notice, appropriate lawful basis/consent where required, purpose limitation, data minimisation, accuracy, storage limitation, reasonable security safeguards, grievance/contact route, handling of data-principal requests, processor arrangements, breach response and deletion workflows. The final obligations and effective dates require legal review.

## Website privacy notice must explain

- Identity and contact details of the responsible hospital/entity.
- Categories of data collected and purposes.
- Whether provision is optional or necessary and consequences of not providing it.
- Vendors/processors and categories of recipients.
- Retention criteria and deletion process.
- Contact/grievance route and applicable rights/processes.
- Cookie/analytics technologies and consent controls where used.
- Cross-border processing, if any, after vendor/data-flow confirmation.
- How to withdraw consent or correct/delete data, as applicable under operative law.

Do not publish a generic privacy template without matching actual data flows and legal approval.

## Security controls

- HTTPS everywhere; secure headers and strict content security policy after testing.
- Secrets only in server-side environment settings, never committed or bundled.
- Strong staff authentication, least privilege, MFA if supported, and role-based access.
- Rate limiting, bot/spam protection, server-side schema validation and safe error messages.
- Database permissions/RLS and least-privilege server credentials.
- No PII in query strings, third-party analytics, logs, screenshots or support tickets.
- Audit sensitive staff actions; retain only required metadata.
- Backup encryption, restore tests, retention schedule and deletion plan.
- Dependency scanning, secret scanning, peer review, controlled releases and rollback plan.
- Security incident triage, internal escalation and applicable legal/regulatory notification process.
- Test with synthetic data only.

## Healthcare-specific caution

Clinical information and appointment information can reveal sensitive context even where a statute uses a different legal classification. Treat all patient-related information as high-risk. Avoid claims that the site is “HIPAA compliant” or “DPDP compliant” unless the relevant scope, controls, contracts and legal basis have been independently assessed. HIPAA is not a generic Indian website compliance badge.

## Launch gates

- Approved privacy notice and terms reviewed by counsel.
- Confirmed data controller/fiduciary identity and grievance contact.
- Documented data map, purposes, vendors, retention and deletion.
- Consent/acknowledgement wording reviewed and recorded as appropriate.
- Staff access model and offboarding tested.
- Security review and incident plan signed off.
- Appointment workflow owner and response SLA confirmed.
- No real patient records in test/staging.
- Current DPDP commencement status checked again on launch date.

## References

- PIB, Ministry of Electronics & IT: DPDP Rules notification announcement (14 Nov 2025): https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014
- Gazette text of DPDP Rules, 2025 (G.S.R. 846(E)): https://egazette.gov.in/WriteReadData/2025/267650.pdf
- Gazette commencement notification (G.S.R. 843(E)): https://egazette.gov.in/WriteReadData/2025/267647.pdf

The official Gazette and MeitY material, plus advice from Indian counsel, take precedence over summaries.
