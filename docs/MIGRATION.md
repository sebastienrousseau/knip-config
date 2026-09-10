# Migration Guide for `@sebastienrousseau/knip-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/knip-config`.

## Upgrading from Previous Versions

1. Update package version:

   ```bash
   npm install --save-dev @sebastienrousseau/knip-config@latest
   ```

1. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/knip-config` in your `package.json` or config entrypoint.
