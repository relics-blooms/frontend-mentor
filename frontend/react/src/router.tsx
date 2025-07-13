import { createBrowserRouter } from "react-router";
import IndexPage from "./index-page/pages/index-page";
import NotFoundPage from "./not-found-page/pages/not-found-page";
import RecipePageIndexPage from "./recipe-page/pages/recipe-page";

export default createBrowserRouter(
  [
    {
      children: [],
      element: <IndexPage />,
      path: "/",
    },
    {
      element: <RecipePageIndexPage />,
      path: "/recipe-page",
    },
    {
      element: <NotFoundPage />,
      path: "*",
    },
  ],
  {
    basename: "/react",
  },
);
