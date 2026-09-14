import { defineConfig, globalIgnores } from "eslint/config";
import next_core_web_vitals from "eslint-config-next/core-web-vitals";
import next_typescript from "eslint-config-next/typescript";

const eslint_config = defineConfig([
  ...next_core_web_vitals,
  ...next_typescript,
  globalIgnores([
    ".next/**",
    "coverage/**",
    "playwright-report/**",
    "test-results/**",
    "next-env.d.ts",
  ]),
]);

export default eslint_config;
