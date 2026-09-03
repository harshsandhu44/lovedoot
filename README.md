# lovedoot

Monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/).

Apps live in `apps/*`, shared libraries in `packages/*`.

- `apps/web` — Next.js app
- `packages/eslint-config` — shared ESLint flat configs (`@lovedoot/eslint-config/base`, `/next`)
- `packages/tsconfig` — shared TypeScript configs (`@lovedoot/tsconfig/base.json`, `/nextjs.json`)

## Setup

```sh
pnpm install
```

## Commands

| Command                                      | What it does                       |
| -------------------------------------------- | ---------------------------------- |
| `pnpm lint`                                  | ESLint across packages (via Turbo) |
| `pnpm format`                                | Prettier write                     |
| `pnpm format:check`                          | Prettier check (CI)                |
| `pnpm build` / `pnpm dev` / `pnpm typecheck` | Turbo tasks across packages        |
