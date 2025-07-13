import { bootstrapApplication } from "@angular/platform-browser";
import configs from "./configs";
import { Main } from "./main.component";

bootstrapApplication(Main, configs).catch((error) => {
  console.error("Error bootstrapping the application:", error);
});
