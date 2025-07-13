import { createBrowserRouter } from "react-router";
import IndexPage from "./index-page/pages/index-page";
import NotFoundPage from "./not-found-page/pages/not-found-page";

export default createBrowserRouter(
  [
    {
      element: <IndexPage />,
      path: "/",
    },
    {
      element: <NotFoundPage />,
      path: "*",
    },
  ],
  {
    basename: "/",
  },
);
