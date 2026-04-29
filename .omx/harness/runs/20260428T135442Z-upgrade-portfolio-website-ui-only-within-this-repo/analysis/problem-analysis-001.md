# Problem Analysis 001

Run: 20260428T135442Z-upgrade-portfolio-website-ui-only-within-this-repo

## Documentation Checked

- `README.md`: confirms this is a Korean developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
- `package.json`: confirms Next.js 15, React 19, Tailwind CSS 4, lucide-react, Framer Motion, and no need for new dependencies.
- `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/skills/page.tsx`: current home/projects/skills presentation.
- `src/components/layout/Navigation.tsx`: current global navigation behavior.
- `src/lib/portfolio-data.ts`: canonical profile, highlights, projects, skills, experience, awards, and certifications.
- `.omx/harness/runs/.../contract-001.md`: task-local scope and verification contract.

## Problem Statement

The portfolio contains strong project evidence, but the interface reads like a conventional light card grid. The first viewport does not make the backend/ML/data positioning feel premium or immediately memorable, and the project/skill surfaces underplay concrete engineering signals.

## Observed Symptoms

- Hero uses soft gradient/background decoration and summary copy without a distinctive engineering artifact.
- Featured projects and skill groups are mostly repeated rounded cards, so impact metrics and technical depth blend together.
- Navigation is usable but generic and not integrated with the intended premium system aesthetic.
- The project and skill pages are accurate but visually flat relative to the desired "쌈@뽕한" upgrade.

## Suspected Root Cause

- UI composition emphasizes generic portfolio sections over a clear concept.
- Metrics are present in data but not orchestrated into a first-screen story.
- Styling primitives rely heavily on soft gradients, pills, and large rounded cards instead of an intentional visual system.

## Evidence

- Existing home page maps `highlights`, `featuredProjects`, `skillGroups`, `experienceItems`, and awards into conventional sections.
- Existing CSS includes blurred color circles and gradient backgrounds that dilute the command-center direction.
- Existing project/skill pages use repeated white cards with similar hierarchy.

## Solution Options

- Only recolor existing cards: rejected because it would not solve the first-viewport storytelling gap.
- Add a new dependency or canvas/3D layer: rejected because the repo already has enough UI primitives and the user disallowed dependency drift.
- Rebuild the home/projects/skills surfaces around a cohesive systems command-center aesthetic using existing data and components: chosen.

## Chosen Fix

- Redesign home, navigation, projects, and skills presentation with a dense but readable engineering systems language: metrics, pipelines, signal bars, impact cards, and tighter typography.
- Keep data and routing intact, limiting edits to UI code and global styling.
- Verify with lint, production build, and Playwright screenshots on desktop/mobile.

## Rejected Alternatives

- New dependency for charts/visualization | unnecessary for static portfolio impact blocks and violates the no-new-dependency constraint.
- Full content rewrite | risks changing factual claims; the upgrade should elevate existing verified content.
- Editing sibling portfolio folders | explicitly out of scope.

## Verification Result

- Pending until lint, build, browser screenshots, visual verdict, and harness validation complete.

## Documentation Decision

- README does not need a functional update because the public app behavior, commands, and stack remain unchanged. The visual redesign and verification details are recorded in this harness run instead.
