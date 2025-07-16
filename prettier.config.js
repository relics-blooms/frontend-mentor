/** @type {import("prettier").Options} */
const base_options = {
  arrowParens: "always",
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "strict",
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "always",
  quoteProps: "as-needed",
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  vueIndentScriptAndStyle: true,
};

/** @type {import("prettier").Config} */
export default {
  overrides: [
    {
      files: "*.css",
      options: {
        ...base_options,
        parser: "css",
        plugins: ["prettier-plugin-style-order"],
      },
    },
    {
      files: "*.html",
      options: {
        ...base_options,
        attributeGroups: ["$DEFAULT"],
        attributeSort: "ASC",
        parser: "html",
        plugins: [
          "prettier-plugin-organize-attributes",
          "prettier-plugin-tailwindcss",
        ],
        tailwindAttributes: [
          ":class",
          "[className]",
          "[class]",
          "[ngClass]",
          "class",
          "className",
          "clsx",
          "ngClass",
        ],
      },
    },
    {
      files: "*.js",
      options: {
        ...base_options,
        parser: "babel",
        plugins: ["prettier-plugin-organize-imports"],
      },
    },
    {
      files: "*.json",
      options: {
        ...base_options,
        parser: "json",
        plugins: ["prettier-plugin-sort-json"],
      },
    },
    {
      files: "*.md",
      options: {
        ...base_options,
        parser: "markdown",
        plugins: [],
      },
    },
    {
      files: "*.ts",
      options: {
        ...base_options,
        attributeGroups: ["$DEFAULT"],
        attributeSort: "ASC",
        parser: "typescript",
        plugins: [
          "prettier-plugin-organize-attributes",
          "prettier-plugin-organize-imports",
          "prettier-plugin-tailwindcss",
        ],
        tailwindAttributes: [
          ":class",
          "[className]",
          "[class]",
          "[ngClass]",
          "class",
          "className",
          "clsx",
          "ngClass",
        ],
      },
    },
    {
      files: "*.tsx",
      options: {
        ...base_options,
        attributeGroups: ["$DEFAULT"],
        attributeSort: "ASC",
        parser: "typescript",
        plugins: [
          "prettier-plugin-organize-attributes",
          "prettier-plugin-organize-imports",
          "prettier-plugin-tailwindcss",
        ],
        tailwindAttributes: [
          ":class",
          "[className]",
          "[class]",
          "[ngClass]",
          "class",
          "className",
          "clsx",
          "ngClass",
        ],
      },
    },
    {
      files: "*.yaml",
      options: {
        ...base_options,
        parser: "yaml",
        plugins: [],
      },
    },
    {
      files: "*.vue",
      options: {
        ...base_options,
        parser: "vue",
        plugins: [
          "prettier-plugin-organize-attributes",
          "prettier-plugin-organize-imports",
          "prettier-plugin-tailwindcss",
        ],
        tailwindAttributes: [
          ":class",
          "[className]",
          "[class]",
          "[ngClass]",
          "class",
          "className",
          "clsx",
          "ngClass",
        ],
      },
    },
  ],
};
