# Contribution workflow

## Branching

- `main`: stable, reviewed release branch.
- `building`: active project development branch.
- Short-lived feature branches may be created from `building` as work is split.

## Pull requests

- Do not push unfinished work directly to `main`.
- Open PRs into `building` for feature integration and into `main` only for approved releases.
- Describe scope, screenshots for UI changes, test evidence, data/security implications and any content claims needing client approval.
- Keep PRs focused and reviewable.
- Do not commit credentials, patient information, private medical records or real booking data.

## Commit conventions

Use clear conventional-style messages, e.g. `docs:`, `feat:`, `fix:`, `test:`, `chore:`.

## Before implementation

Review README, `docs/project-decisions.md`, hospital fact verification register, sitemap, visual direction, architecture and privacy requirements. Do not convert unverified research leads into public claims.
