# ceneva

guía de estudio interactiva para acreditar el bachillerato mediante el acuerdo 286.

## requisitos

- node.js 22
- pnpm 11.19.0

## desarrollo local

```bash
pnpm install
pnpm dev
```

abre `http://localhost:3000`.

## calidad

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

para ejecutar las pruebas end-to-end por primera vez:

```bash
pnpm exec playwright install chromium
pnpm test:e2e
```

la arquitectura, decisiones de producto y contratos editoriales viven en `docs/`.
