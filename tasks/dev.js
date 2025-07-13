import { parallel } from "gulp";
import maven_script from "./utilities/maven_script.js";
import pnpm_script from "./utilities/pnpm_script.js";

export const dev_pnpm_angular = pnpm_script("frontend/angular", "dev");
export const dev_pnpm_nest = pnpm_script("backend/nest", "dev");
export const dev_pnpm_react = pnpm_script("frontend/react", "dev");
export const dev_maven_springboot = maven_script(
  "backend/springboot",
  "spring-boot:run",
);
export const dev_pnpm_vue = pnpm_script("frontend/vue", "dev");
export const dev_pnpm_www = pnpm_script("frontend/www", "dev");

export const dev_all = parallel(
  dev_maven_springboot,
  dev_pnpm_angular,
  dev_pnpm_nest,
  dev_pnpm_react,
  dev_pnpm_vue,
  dev_pnpm_www,
);

export const dev_backend = parallel(dev_pnpm_nest, dev_maven_springboot);

export const dev_frontend = parallel(
  dev_pnpm_angular,
  dev_pnpm_react,
  dev_pnpm_vue,
  dev_pnpm_www,
);
