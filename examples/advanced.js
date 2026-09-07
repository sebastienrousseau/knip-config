/**
 * Advanced Knip custom entry configuration
 */
const base = require("../index.cjs");
const custom = { ...base, entry: [...base.entry, "cli.js"] };
console.log("Updated entry patterns count:", custom.entry.length);
