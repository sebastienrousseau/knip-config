# `@sebastienrousseau/knip-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/knip-config`.

---

## Example Suite Overview

| File | Type | Feature Coverage | Command |
| :--- | :--- | :--- | :--- |
| [`basic.js`](./basic.js) | CommonJS | Standard default configuration import | `node examples/basic.js` |
| [`advanced.js`](./advanced.js) | CommonJS | Custom extension and rule overrides | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs) | ES Module | Native ESM consumption via `import` | `node examples/esm.mjs` |
| [`features.js`](./features.js) | CommonJS | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **Entrypoint Scanning**: Automatic discovery across src and root module entrypoints
- [x] **Project File Globbing**: Comprehensive source pattern matching for TS and JS
- [x] **Artifact Exclusion**: Safe exclusions for coverage, dist, and declaration files
- [x] **Zero Unused Dependency Tolerance**: Enforces zero dead dependencies in production
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
