// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced Knip custom entry configuration
 */
const base = require("../index.cjs");
const custom = { ...base, entry: [...base.entry, "cli.js"] };
console.log("Updated entry patterns count:", custom.entry.length);
