/** @type {import("prettier").Options} */
const base_options = {};

/** @type {import("prettier").Config} */
export default {
  overrides: [
    {
      files: "*.component.ts",
      options: {
        ...base_options,
        plugins: [],
        parser: "angular",
      },
    },
    {
      files: "*.css",
      options: {
        ...base_options,
        plugins: [],
        parser: "css",
      },
    },
    {
      files: "*.html",
      options: {
        ...base_options,
        plugins: [],
        parser: "html",
      },
    },
    {
      files: "*.js",
      options: {
        ...base_options,
        plugins: [],
        parser: "babel",
      },
    },
    {
      files: "*.json",
      options: {
        ...base_options,
        plugins: [],
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
      files: "*.scss",
      options: {
        ...base_options,
        plugins: [],
        parser: "scss",
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
        plugins: [],
        parser: "vue",
      },
    },
  ],
};
