/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["tailwindcss"], // ← ajoute cette ligne
  rules: {
    "tailwindcss/no-contradicting-classname": "error", // ← ajoute cette ligne
  },
};
