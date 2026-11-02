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

The `predev` hook decodes the final photo asset automatically before Astro starts; the `prebuild` hook does the same before production builds.

Build check: `npm run build`.
