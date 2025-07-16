import { Route } from "@angular/router";

import _IndexPage from "./_index.page";

const errorRoutes = [
  {
    component: _IndexPage,
    children: [],
    path: "",
    title: "Frontend Mentor",
  },
] satisfies Route[];
export default errorRoutes;
