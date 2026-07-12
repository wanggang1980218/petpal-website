import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./index.css";

// Get base URL from vite config or fallback to repo name for GitHub Pages
// @ts-expect-error - Vite provides import.meta.env
const baseUrl = import.meta.env.BASE_URL || "/petpal-website/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
