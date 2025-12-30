import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Global ignores
  {
    ignores: [
      "dist/",
      "node_modules/",
      ".astro/",
      "public/",
      "*.config.mjs", // Ignore all config files (tailwind, astro, etc.)
    ],
  },

  // Base ESLint recommended config
  js.configs.recommended,

  // TypeScript ESLint recommended configs
  ...tseslint.configs.recommended,

  // Astro recommended configs
  ...eslintPluginAstro.configs.recommended,

  // JSX a11y recommended config
  jsxA11y.flatConfigs.recommended,

  // Custom rules for all files
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },

  // TypeScript-specific overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
];
