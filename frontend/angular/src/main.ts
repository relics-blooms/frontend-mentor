import { bootstrapApplication } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { RecipePageIndexPage } from "./recipe_page/pages/recipe-page-index-page";

@Component({
  selector: "app-main",
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class Main {}

bootstrapApplication(Main, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({
      eventCoalescing: true,
    }),
    provideRouter([
      {
        component: RecipePageIndexPage,
        path: "recipe_page",
      },
    ]),
  ],
}).catch((error) => {
  console.error("Error bootstrapping the application:", error);
});
