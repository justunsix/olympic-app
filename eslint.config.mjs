import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  pluginJs.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];

