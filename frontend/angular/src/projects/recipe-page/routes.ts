import { Route } from "@angular/router";

import $RecipePage from "./$recipe.page";
import _IndexPage from "./_index.page";
import ErrorPage from "./error.page";

const recipePageRoutes = [
  {
    component: _IndexPage,
    children: [],
    path: "recipe-page",
    title: "Recipe Page",
  },
  {
    component: $RecipePage,
    children: [],
    path: "recipe-page/:recipe",
    title: "Recipe Page",
  },
  {
    component: ErrorPage,
    children: [],
    path: "recipe-page/*",
    title: "Error",
  },
] satisfies Route[];
export default recipePageRoutes;
