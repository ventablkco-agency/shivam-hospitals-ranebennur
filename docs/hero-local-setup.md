# Local setup — Shivam Hospitals

The authoritative implementation is committed to the GitHub `building` branch. Clone it inside your WSL Linux home directory (not `/mnt/c`) to keep Astro/Vite file watching responsive.

```bash
mkdir -p ~/Ventablk/projects
cd ~/Ventablk/projects
git clone --branch building https://github.com/ventablkco-agency/shivam-hospitals-ranebennur.git
cd shivam-hospitals-ranebennur
npm install
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`.

For an existing clone:

```bash
cd ~/Ventablk/projects/shivam-hospitals-ranebennur
git fetch origin
git switch building
git pull --ff-only origin building
npm install
npm run dev
```

To run the dependency-free static preview instead, run `python -m http.server 4173` from the repository root and open `http://localhost:4173/preview.html`. This preview uses the aligned SVG stages and the decoded original-photo WebP.

Build check: `npm run build`.
