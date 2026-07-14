# Contributing to super-sort

Thanks for wanting to make bad sorting algorithms worse. Contributions are welcome!

## Ground rule: keep the joke

super-sort is a collection of **intentionally terrible / joke** sorting algorithms.
"Correct" means matching the joke each algorithm documents in the [readme](./readme.md) —
several are deliberately broken, non-terminating, or absurd by design. Please preserve the
joke; don't quietly turn one into a real, efficient sort.

## Getting started

Requires **Node >= 18.17.1** and **Yarn** (Yarn 1 / classic).

```bash
yarn install      # install dependencies
yarn build        # bundle + type-check (rollup); fails on type errors
yarn test         # run the vitest suite once
yarn test:watch   # vitest in watch mode
```

## Adding an algorithm

1. Create `src/<name>-sort.ts` exporting a single function with the standard signature
   `(input: T[], direction?: 'asc' | 'desc') => T[] | Promise<T[]>`.
2. Register it in `src/index.ts` — both the import list and the `superSortAlgorithms` object.
3. Add a section to `readme.md` describing the joke and its "complexity".
4. Add tests in `src/<name>-sort.test.ts`. If the algorithm can loop forever, only test
   inputs that provably terminate quickly (see the existing chaotic-sort tests).
5. Run `yarn build` to regenerate `types/index.d.ts`.

## Commit messages

This repo uses [Conventional Commits](https://www.conventionalcommits.org/). Releases are
fully automated by **semantic-release** from your commit history:

| Prefix | Effect |
| ------ | ------ |
| `feat:` | minor release |
| `fix:` | patch release |
| `docs:`, `test:`, `chore:`, `build:`, `ci:` | no release |
| `BREAKING CHANGE:` in the body | major release |

Please don't bump the version in `package.json` yourself — semantic-release owns it.

## Branches & releases

- Work on feature branches / `develop`, then open a PR against `main`.
- **CI** (build + test) runs on every PR.
- Merging to `main` triggers a release: version bump, changelog, git tag, GitHub Release,
  and npm publish (via OIDC trusted publishing).

## Code of conduct

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).
