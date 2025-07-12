import "./main.css";
import RecipePageIndexPage from "./pages/recipe-page-index-page";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RecipePageIndexPage />} path="/" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
