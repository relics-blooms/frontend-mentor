import { Route } from "@angular/router";

import _IndexPage from "./_index.page";
import ErrorPage from "./error.page";

const blogPreviewCardRoutes = [
  {
    component: _IndexPage,
    children: [],
    path: "blog-preview-card-component",
    title: "Blog Preview Card Component",
  },
  {
    component: ErrorPage,
    children: [],
    path: "blog-preview-card-component/**",
    title: "Blog Preview Card Component",
  },
] satisfies Route[];
export default blogPreviewCardRoutes;
