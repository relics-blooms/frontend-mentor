/// <reference types="@angular/localize" />

import Main from "./projects/main.component";
import configs from "./projects/main.configs";
import { bootstrapApplication } from "@angular/platform-browser";

bootstrapApplication(Main, configs).catch((error) => {
  console.error("Error bootstrapping the application:", error);
});
