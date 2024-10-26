import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//components
import App from "./App.tsx";

//client side router
import { BrowserRouter } from "react-router-dom";

//styles
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
