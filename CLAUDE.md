# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@irbisadm/super-sort` is a published npm package of intentionally terrible, joke sorting
algorithms (bogo, bozo, miracle, time, taco, stalin, lucky). "Correctness" here means matching
the joke each algorithm documents in `readme.md` — several are deliberately broken or
non-terminating by design. Preserve the joke; don't "fix" an algorithm into a real sort.

## Commands

- `yarn install` — install deps (yarn is the package manager; `yarn.lock` is committed).
- `yarn build` — the only script. Runs `rollup -c`.

There is **no test runner and no linter** configured. TypeScript itself is the only correctness
gate: the build fails on type errors (`noEmitOnError: true`), so run `yarn build` to type-check.
Requires Node `>=18.17.1`.

## Build pipeline (rollup.config.mjs)

`yarn build` runs two Rollup passes:
1. `src/index.ts` → `dist/index.mjs` — ES bundle, minified with terser.
2. `dist/build/index.d.ts` → `types/index.d.ts` — rolled-up type declarations.

`types/index.d.ts` is a **generated artifact that is committed to git** (and shipped in the
package `files`). Regenerate it via `yarn build` rather than hand-editing — but note the public
API surface there must stay in sync with `src/index.ts` after any export change.

Version is single-sourced from `package.json`: the literal `__lib_version__` in `src/index.ts`
is string-replaced with `package.json`'s `version` at build time (`@rollup/plugin-replace`).
To release, bump `version` in `package.json` only.

## Architecture & conventions

- **One algorithm per file** `src/<name>-sort.ts`, each exporting a single named function with the
  uniform signature `(input: T[], direction: 'asc' | 'desc' = 'asc')` returning `T[]` or `Promise<T[]>`.
- **`src/index.ts` is the barrel and registry.** `superSort()` picks a random algorithm from the
  `superSortAlgorithms` object via `randomPick`. **Adding an algorithm = create the file + add it to
  both the import list and the `superSortAlgorithms` object here**, then `yarn build` to refresh types.
- **Shared helpers, reused by nearly every algorithm:**
  - `src/is-sorted.ts` — the `isSorted` / `isSortedDescending` validators. The canonical pattern is
    `const validator = direction === 'asc' ? isSorted : isSortedDescending`. Note these compare using
    JavaScript's default `.sort()` (lexicographic/string order, not numeric) — that quirk is intentional.
  - `src/random-stuff.ts` — `randomShuffle`, `fisherYatesShuffle`, `randomPick`.
- **Input-mutation behavior is deliberately inconsistent** and part of each algorithm's identity:
  e.g. `stalinSort` mutates the caller's array in place (`splice`), `luckySort` returns the input by
  reference, while `bozoSort`/`tacoSort` copy first. Match the intended behavior of the specific
  algorithm rather than normalizing across them.
- The project is MIT-licensed (`license.md`); source files carry **no** per-file license header — don't add one to new files.
