import { Route } from "@angular/router";
import { IndexPage } from "./index-page/pages/index-page";
import { NotFoundPage } from "./not-found-page/pages/not-found-page";
import { RecipePage } from "./recipe-page/pages/recipe-page";

export default [
  {
    component: IndexPage,
    path: "",
    title: "Recipe Page",
  },
  {
    component: RecipePage,
    path: "recipe-page",
  },
  {
    component: NotFoundPage,
    path: "**",
  },
] satisfies Route[];
