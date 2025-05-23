import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure there's a div#root in your index.html"
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
