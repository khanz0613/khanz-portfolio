# Portfolio Upgrade Context

Target repo: `/Users/khanz/Documents/GitHub/portfolio-website`

Non-goals:
- Do not read, modify, or generate files in other portfolio folders or sibling projects.
- Do not add dependencies.
- Do not change resume/contact data unless required for UI correctness.

Current facts:
- Next.js 15, React 19, Tailwind CSS 4, Framer Motion, lucide-react.
- Main user-facing data lives in `src/lib/portfolio-data.ts`.
- Home currently presents correct content but uses conventional cards, soft gradients, and low-density sections.
- Navigation is functional but visually generic.
- Project and skills pages expose the data but do not strongly communicate backend/ML/data systems impact.

Design direction:
- Industrial systems command center: dark hero, metric rails, data-flow panels, engineering signal language.
- Keep the portfolio immediately useful on first screen: identity, strongest metrics, featured project impact, and primary actions visible without a marketing detour.
- Use existing Tailwind/lucide/motion patterns only.
