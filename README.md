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

## Releases (`apps/web`)

Versioning is automated with [release-please](https://github.com/googleapis/release-please).
On every push to `main`, the `Release` workflow opens/updates a **release PR**
that bumps `apps/web/package.json`, updates `apps/web/CHANGELOG.md`, and — when
merged — cuts a `web-v*` git tag and GitHub release. Version bumps are derived
from [Conventional Commits](https://www.conventionalcommits.org/).

Merging the release PR is also the **only** trigger for a Vercel production
deploy: `apps/web/vercel.json` disables auto-deploys on `main`, and the `Release`
job pings a Vercel deploy hook when (and only when) a release is created. Pushes
to `main` and PRs still get preview deployments.

The running version and commit are exposed at `/version`.
