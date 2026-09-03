# lovedoot

Monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/).

Apps live in `apps/*`, shared libraries in `packages/*`. Neither exists yet.

## Setup

```sh
pnpm install
```

## Commands

| Command | What it does |
| --- | --- |
| `pnpm lint` | ESLint over the repo |
| `pnpm format` | Prettier write |
| `pnpm format:check` | Prettier check (CI) |
| `pnpm build` / `pnpm dev` / `pnpm typecheck` | Turbo tasks (no-op until a package is added) |
