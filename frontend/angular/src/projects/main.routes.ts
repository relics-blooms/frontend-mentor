import { Route } from "@angular/router";

import errorRoutes from "../error/routes";
import indexRoutes from "../index/routes";
import blogPreviewCardRoutes from "./blog-preview-component/routes";
import recipePageRoutes from "./recipe-page/routes";
import socialLinksProfileRoutes from "./social-links-profile/routes";

export default [
  ...blogPreviewCardRoutes,
  ...recipePageRoutes,
  ...socialLinksProfileRoutes,
  ...errorRoutes,
  ...indexRoutes,
] satisfies Route[];
