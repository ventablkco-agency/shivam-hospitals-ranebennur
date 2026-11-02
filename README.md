# Shivam Hospitals — Website Project

**Agency:** Ventablk  
**Client:** Shivam Hospitals  
**Location:** Ranebennur, Haveri district, Karnataka, India  
**Repository:** https://github.com/ventablkco-agency/shivam-hospitals-ranebennur  
**Project status:** Homepage hero implementation  
**Implementation status:** First hero milestone in progress

This repository is the source of truth for the website project. All implementation work is to happen on the `building` branch. Keep `main` as the stable release branch; merge reviewed, tested work through pull requests.

## Accuracy rule

Directory listings are leads, not client-approved facts. The hospital must approve its official name, address, contact numbers, services, clinicians, qualifications, facilities, insurance/PM-JAY status, review quotations, operating hours, and all clinical claims before publication. Do not invent clinician credentials, facilities, outcomes or statistics.

## Technical direction

- Astro + TypeScript; static-first rendering.
- Minimal client-side JavaScript; no WebGL dependency for the first hero.
- Lightweight canvas pixel reveal, reduced-motion support, and an immediate real-photo fallback.
- Cloudflare Pages remains the proposed host, subject to DNS/account/budget confirmation.
- No paid cloud resources or booking backend are provisioned.

## Homepage hero — first implementation

The `building` branch contains an Astro homepage hero with a three-stage, seeded pixel reveal: light architectural linework → illustrative 2.5D facade → the supplied hospital photograph. The hero intentionally has no navigation. The final layer uses the real supplied photo; the first two are illustrative generated references, not documentary images.

The first two stages are native SVGs built from one shared 960 × 540 facade coordinate system, so their geometry is registered exactly. The final original hospital photograph is stored as a compact base64 source in `assets-source/hero/`; the `predev` and `prebuild` scripts decode it into `public/images/hero/`.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

Build verification:

```bash
npm run build
```

The first hero is a focused implementation milestone, not the complete hospital website. The remaining pages, verified hospital content, SEO schema, contact workflow and backend decisions are separate work.
