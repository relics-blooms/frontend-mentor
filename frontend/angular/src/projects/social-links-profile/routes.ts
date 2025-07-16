import { Route } from "@angular/router";

import $ProfilePage from "./$profile.page";
import _IndexPage from "./_index.page";
import ErrorPage from "./error.page";

const socialLinksProfileRoutes = [
  {
    component: _IndexPage,
    children: [],
    path: "social-links-profile",
    title: "Social Links Profile",
  },
  {
    component: $ProfilePage,
    children: [],
    path: "social-links-profile/:profile",
    title: "Social Links Profile",
  },
  {
    component: ErrorPage,
    children: [],
    path: "social-links-profile/**",
    title: "Error",
  },
] satisfies Route[];
export default socialLinksProfileRoutes;
