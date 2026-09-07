/**
 * Basic usage example for @sebastienrousseau/knip-config
 * Demonstrates importing and consuming the default preset in a standard project.
 */
const config = require("../index.cjs");

console.log("=== Basic Usage Example: @sebastienrousseau/knip-config ===");
if (typeof config === "string") {
  console.log("Loaded template length:", config.length, "characters");
} else if (Array.isArray(config)) {
  console.log("Loaded entries count:", config.length);
  console.log("First entry:", config[0]);
} else {
  console.log("Loaded configuration keys:", Object.keys(config));
}
