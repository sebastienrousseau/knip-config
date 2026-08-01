const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/knip-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert(Array.isArray(cjsConfig.entry), "Entry must be an array");

  console.log("✅ knip-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
