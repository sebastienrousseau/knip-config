# `@sebastienrousseau/knip-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/knip-config`.

---

## Description
Shareable Knip configuration detecting unused files, dependencies, and exports.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/knip-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Entrypoint Scanning
- **Description**: Automatic discovery across src and root module entrypoints
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Project File Globbing
- **Description**: Comprehensive source pattern matching for TS and JS
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Artifact Exclusion
- **Description**: Safe exclusions for coverage, dist, and declaration files
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Zero Unused Dependency Tolerance
- **Description**: Enforces zero dead dependencies in production
- **Scope**: Production & Development
- **Status**: Stable & Active

