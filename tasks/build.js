import { parallel } from "gulp";
import maven_script from "./utilities/maven_script.js";
import pnpm_script from "./utilities/pnpm_script.js";

export const build_pnpm_angular = pnpm_script("frontend/angular", "build");
export const build_pnpm_nest = pnpm_script("backend/nest", "build");
export const build_pnpm_react = pnpm_script("frontend/react", "build");
export const build_maven_springboot = maven_script(
  "backend/springboot",
  "clean package",
);
export const build_pnpm_vue = pnpm_script("frontend/vue", "build");
export const build_pnpm_www = pnpm_script("frontend/www", "build");

export const build_all = parallel(
  build_pnpm_angular,
  build_pnpm_nest,
  build_pnpm_react,
  build_pnpm_vue,
  build_pnpm_www,
);

export const build_backend = parallel(build_pnpm_nest, build_maven_springboot);

export const build_frontend = parallel(
  build_pnpm_angular,
  build_pnpm_react,
  build_pnpm_vue,
  build_pnpm_www,
);
