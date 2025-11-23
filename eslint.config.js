import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  prettier,
  {
    ignores: ["_site/**", "assets/lunr.min.js", "assets/lunr-feed.js"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    files: ["assets/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        lunr: "readonly",
        $: "readonly",
        jQuery: "readonly",
      },
    },
  },
];
