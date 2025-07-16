import { Route } from "@angular/router";

import ForbiddenPage from "./forbidden.page";
import NotFoundPage from "./not-found.page";
import UnauthorizedPage from "./unauthorized.page";

const errorRoutes = [
  {
    component: ForbiddenPage,
    children: [],
    path: "forbidden",
    title: "Forbidden Page",
  },
  {
    component: NotFoundPage,
    children: [],
    path: "not-found",
    title: "Not Found Page",
  },
  {
    component: UnauthorizedPage,
    children: [],
    path: "unauthorized",
    title: "Unauthorized Page",
  },
] satisfies Route[];
export default errorRoutes;
