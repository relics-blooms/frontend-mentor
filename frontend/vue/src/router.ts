import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "./index-page/pages/index-page.vue";
import NotFoundPage from "./not-found-page/pages/not-found-page.vue";
import RecipePageIndexPage from "./recipe-page/pages/recipe-page.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: IndexPage,
      children: [],
      name: "Index Page",
      path: "/",
    },
    {
      component: RecipePageIndexPage,
      name: "Recipe Page",
      path: "/recipe-page",
    },
    {
      component: NotFoundPage,
      path: "/:catchAll(.*)",
    },
  ],
});
