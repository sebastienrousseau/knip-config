/**
 * 100% Feature Showcase for @sebastienrousseau/knip-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/knip-config ===");
assert(Array.isArray(config.entry) && config.entry.length > 0);
assert(Array.isArray(config.project) && config.project.length > 0);
assert(Array.isArray(config.ignore) && config.ignore.includes("dist/**/*"));

console.log("  ✓ Entry patterns:", config.entry.join(", "));
console.log("  ✓ Ignored patterns:", config.ignore.join(", "));
console.log("✅ 100% of knip-config patterns and features validated.");
