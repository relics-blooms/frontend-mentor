/** @type {import("prettier").Options} */
const base_options = {};

/** @type {import("prettier").Config} */
export default {
  overrides: [
    {
      files: "*.css",
      options: {
        ...base_options,
        plugins: ["prettier-plugin-style-order"],
        parser: "css",
      },
    },
    {
      files: "*.html",
      options: {
        ...base_options,
        attributeGroups: ["$DEFAULT"],
        attributeSort: "ASC",
        plugins: [
          "prettier-plugin-organize-attributes",
          "prettier-plugin-tailwindcss"
        ],
        parser: "html",
      },
    },
    {
      files: "*.js",
      options: {
        ...base_options,
        plugins: [
          "prettier-plugin-organize-imports",
          "prettier-plugin-tailwindcss"
        ],
        parser: "babel",
      },
    },
    {
      files: "*.json",
      options: {
        ...base_options,
        plugins: ["prettier-plugin-sort-json"],
        parser: "json",
      },
    },
    {
      files: "*.md",
      options: {
        ...base_options,
        plugins: [],
        parser: "markdown",
      },
    },
    {
      files: "*.ts",
      options: {
        ...base_options,
        plugins: [
          "prettier-plugin-organize-imports",
          "prettier-plugin-tailwindcss"
        ],
        parser: "typescript",
      },
    },
    {
      files: "*.tsx",
      options: {
        ...base_options,
        plugins: [
          "prettier-plugin-organize-imports",
          "prettier-plugin-tailwindcss"
        ],
        parser: "typescript",
      },
    },
    {
      files: "*.yaml",
      options: {
        ...base_options,
        plugins: [],
        parser: "yaml",
      },
    },
    {
      files: "*.vue",
      options: {
        ...base_options,
        plugins: [
          "prettier-plugin-organize-imports",
          "prettier-plugin-tailwindcss"
        ],
        parser: "vue",
      },
    },
  ],
};
