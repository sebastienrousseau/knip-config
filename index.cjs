// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Modern Knip CommonJS Configuration
 */
module.exports = {
  entry: ["src/index.{ts,tsx,js,jsx}", "index.{ts,js,mjs,cjs}"],
  project: ["src/**/*.{ts,tsx,js,jsx}", "index.{ts,js,mjs,cjs}"],
  ignore: ["**/*.d.ts", "coverage/**/*", "dist/**/*"],
  ignoreDependencies: [],
};
