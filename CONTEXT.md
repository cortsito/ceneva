# CONTEXT.md

snapshot for resuming work on ceneva — updated 2026-09-10 after the first three lesson-authoring units. read this first in a new session (or with a different ai) before touching anything; `CLAUDE.md` has the operating rules, this file has the "why" and "where things stand."

## What ceneva is

A web app that turns the official CENEVAL "Acuerdo 286" bachillerato-accreditation guide into a guided, measurable study path: diagnostic → route (area → unit → topic → lesson) → practice with explained feedback → simulacros whose errors link back to the exact topic/lesson to review. It's an independent product — not a reskin or continuation of "cenevalprep," and none of that product's content is reused.

The user is a solo, non-professional developer building this as their main vehicle for learning to code (see `docs/13-desarrollo-asistido-por-ia.md`, `docs/14-plan-de-aprendizaje.md`). They want to understand and be able to explain every part of what gets built, not just have it generated. Collaboration model: they assign work as files in `docs/tasks/`, expect clarifying questions before ambiguous or architecture-affecting changes, and want terse responses ("finished with X" + only necessary extra info — no emojis, no unrequested feature suggestions, no overengineering).

## Users and MVP

Target user: preparing for the Acuerdo 286 exam independently, often while working, limited time, uneven level across subjects. They need to know what to study next, not just a global score (`docs/02-usuario-y-problema.md`).

**MVP covers all seven areas** (pensamiento matemático, cultura digital, conciencia histórica, humanidades, ciencias naturales/experimentales/tecnología, lengua y comunicación, ciencias sociales), each kept as simple as possible: guest mode with local progress, short diagnostic, one navigable route per area, practice with explained feedback, a from-scratch simulator, basic progress dashboard. Build order: validate the full template (content + architecture) on pensamiento matemático first, then replicate the same pattern to the other six areas — still within the MVP, not deferred after it (`docs/07-mvp-y-roadmap.md`, `docs/12-plan-de-entrega.md`).

Out of scope for MVP: AI chat/bot, gamification, community, paid plans, predictive recommendations. An FAQ is in scope as static informational content (not a bot). Nothing in the app is or will be paid; a possible separate paid PDF product is a loose future idea, not a current priority.

## Architecture decisions

- **Stack**: Next.js + TypeScript, Tailwind CSS, Supabase (auth + Postgres) added later without changing the base experience. Deploy target: **Vercel only** (GitHub Pages was dropped — static export would've fought with future Supabase auth), on the free tier as long as possible. Package manager: **pnpm**. Test runner/e2e: **Playwright**.
- **Content**: curriculum, lessons, and questions are versioned Markdown/JSON/TS in the repo (not a CMS), with stable ids that never change once published. See `docs/11-modelo-de-contenido-y-datos.md` for the exact schemas.
- **Progress**: starts in localStorage (versioned schema), migrates to Supabase later behind a storage abstraction so feature code doesn't change.
- **App structure** (not yet scaffolded): `app` (routes/composition only) / `features` (curriculum, lesson, practice, progress, diagnostic, simulator — self-contained, communicate only via public types/functions) / `content` (pure editorial data) / `components` (generic UI) / `lib` (storage, validation, utilities). Domain rules (e.g. topic mastery status) live in pure, testable functions, never inline in a screen. See `docs/10-arquitectura-de-aplicacion.md`.
- **Simulator and question bank**: both built entirely from zero, sourced from the official guide, AI-assisted under the user's supervision. Nothing from cenevalprep or any prior simulator is reused — this was a real contradiction across docs/03/05/08/09 that's now resolved and reflected in those files.
- **Question format** (confirmed from the actual guide, not assumed): every question has **exactly 3 options** — 1 correct + 2 distractors, never 4. The guide's four reactivo shapes (cuestionamiento directo, jerarquización, completamiento, relación de elementos) all still resolve to 3 lettered options; jerarquización/relación just encode a full sequence or mapping inside one option string. This is now in `docs/11`'s `question` type, which also has `common_error?` and `source_reference?` fields.
- **Mastery rule**: a topic is "dominado" at ≥80% accuracy over ≥5 questions; drops to "en progreso" below 60% later (`docs/06-datos-y-progreso.md`). Important: the guide's own "reactivos oficiales" count per topic (usually 1, occasionally 2) is the real exam's *weighting*, not a target for ceneva's practice bank — most topics need several more authored questions than their official count to clear the mastery minimum.

## Where things actually stand (repo state)

No application code exists yet. What exists:

- **`docs/00` through `docs/15`** (Spanish): the full product/architecture spec. Several were edited on 2026-09-10 to resolve contradictions discovered during review — see `docs/tasks/2026-09-10-report_project-understanding.md` sections 7–11 for the full list of what changed and why.
- **`content/source-maps/<area-id>.md`** (7 files, one per area, all done): the area → unit → topic curriculum tree extracted from `docs/guiaoficial.pdf` pages 11–20, plus a full lesson-breakdown plan per area. Verified line-by-line against the actual PDF on 2026-09-10 — accurate, including edge cases (split-reactivo topics, a genuinely missing `6.2.1` code in lengua y comunicación).
- **`content/lessons/pensamiento-matematico/pm-1-1-pensamiento-estadistico/`** (4 files): the first fully-written unit — tipos de variables, tipos de muestra, medidas de tendencia central, medidas de dispersión. this is the pilot/reference unit for the whole project's lesson-authoring pattern.
- **`content/lessons/pensamiento-matematico/pm-1-2-pensamiento-probabilistico/`** (3 files): the second pensamiento matemático unit — combinaciones y permutaciones, probabilidad simple, probabilidad condicional y teorema de bayes.
- **`content/lessons/cultura-digital/cd-2-1-ciudadania-digital/`** (5 files): the first unit outside the math pilot — identidad digital, licenciamiento de software, servicios digitales, amenazas y medidas de seguridad digital.
- **`docs/tasks/2026-09-10-report_curriculum-mapping-guide.md`**: step-by-step instructions for turning the guide into curriculum data (steps 1–5: tree extraction → lesson breakdown → lesson content → question bank → validation). steps 1–2 are done for all 7 areas; step 3 is in progress (three units done); step 4 (question bank) has not started for any area yet.
- **`docs/tasks/2026-09-10-report_lesson-blueprint.md`**: the copyable base structure for lesson files, with area-by-area content guidance (math/science = calculation-heavy worked examples; history/social/humanities = concept-contrast examples; lengua y comunicación's English subarea = actual English example sentences, Spanish scaffolding around them) and the "intenta primero / respuesta" convention for guided practice.
- **`docs/tasks/2026-09-10-report_project-understanding.md`**: the full history — initial analysis, every resolved contradiction, the curriculum-mapping review findings, and the pilot-lesson fix. Read this if you need the reasoning behind any decision above, not just the conclusion.
- **`docs/guiaoficial.pdf`**: the source of truth for curriculum scope. Pages 11–20 are the full area/subárea/tema table with official reactivo counts. **Pages 26–30 have the exam's actual reactivo format rules and a few real sample questions (one per area shown so far)** — these are the calibration reference for question format and for checking a lesson actually teaches what gets tested, not just what the compressed orientación text says. Worth reading further (pages 30+) as more areas' Step 3/4 work starts, since each area seems to get its own small sample-question block before its bibliografía.

## A concrete lesson already learned

`pm-tipos-de-variables-01.md`'s original draft only taught cuantitativa/cualitativa/categórica, matching the guide's orientación text — but the guide's own sample question for that exact tema tests cuantitativa **discreta vs. continua**, never mentioned in the orientación summary. Fixed now, but the general rule stands for every future lesson: check the sample-question pages for that topic before finalizing depth, don't just paraphrase the orientación column.

## Immediate next steps (in order)

1. continue step 3 for the remaining pensamiento matemático units in `content/source-maps/pensamiento-matematico.md` (`1.3` through `1.6`), using the blueprint.
2. start step 4 for at least the first math pilot unit (`1.1`) after its question bank is ready to author; this is needed to validate the mastery rule end to end.
3. then etapa 0 (`docs/12-plan-de-entrega.md`): next.js + typescript + tailwind scaffold, pnpm, playwright, lint/format/ci, base layout and routes — this has not started yet.
4. repeat the content pattern for the other areas per the blueprint; cultura digital now provides the first non-math reference unit.

No open contradictions or unresolved decisions are blocking this — everything from the initial review is settled (see the understanding report, sections 7–11).
