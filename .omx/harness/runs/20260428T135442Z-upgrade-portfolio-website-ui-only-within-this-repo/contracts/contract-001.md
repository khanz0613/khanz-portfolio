# Harness Contract 001

Run: 20260428T135442Z-upgrade-portfolio-website-ui-only-within-this-repo
Selected path: spec-first

## Scope

Upgrade portfolio-website UI only within this repo

## Done Criteria

- Only `/Users/khanz/Documents/GitHub/portfolio-website` is modified.
- Home page has a stronger first viewport with identity, backend/ML/data positioning, concrete metrics, and project impact visible immediately.
- Navigation, project listing, and skills page share a cohesive premium engineering visual language.
- Existing Next.js/Tailwind/Framer Motion/lucide stack is reused; no new dependencies are added.
- Mobile and desktop layouts avoid text overlap and preserve readable hierarchy.
- Lint, production build, and browser visual checks are executed and recorded.
- Harness artifacts include problem analysis, command evidence, visual verdict, evaluator report, handoff, and validation result.

## Verification Plan

- Run `npm run lint`.
- Run `npm run build`.
- Start the local Next.js dev server and inspect `/`, `/projects`, and `/skills` with Playwright CLI.
- Capture desktop and mobile screenshots under `output/playwright/`.
- Record a visual verdict with a 90+ target threshold.
- Run `node /Users/khanz/.codex/skills/harness/scripts/validate-harness-run.mjs .omx/harness/runs/20260428T135442Z-upgrade-portfolio-website-ui-only-within-this-repo`.

## Hard Fail Conditions

- Missing manifest, contract, evidence, evaluator report, or handoff.
- Missing problem analysis or documentation decision.
- Evaluator verdict is PASS without hard thresholds marked all-pass.
- Completion is claimed without command or manual QA evidence.
- Files outside `/Users/khanz/Documents/GitHub/portfolio-website` are modified.
- New runtime dependencies are introduced.
- Build or lint fails.
- Screenshots show broken layout, unreadable text, or incoherent overlap.
