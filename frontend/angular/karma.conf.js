import karmaChromeJasmine from "karma-chrome-launcher";
import karmaCover from "karma-coverage";
import karmaJasmine from "karma-jasmine";
import karmaJasmineHtmlReporter from "karma-jasmine-html-reporter";
import path from "node:path";

/** @param {import("karma").Config} config */
export default function (config) {
  config.set({
    basePath: "",
    browsers: ["Chrome"],
    client: {
      jasmine: {},
    },
    coverageReporter: {
      dir: path.join(import.meta.dirname, "./coverage/angular"),
      subdir: ".",
      reporters: [
        {
          type: "html",
        },
        {
          type: "text-summary",
        },
      ],
    },
    frameworks: ["jasmine"],
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    plugins: [
      karmaChromeJasmine,
      karmaCover,
      karmaJasmine,
      karmaJasmineHtmlReporter,
    ],
    reporters: ["progress", "kjhtml"],
    restartOnFileChange: true,
  });
}
