import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WorkerProvider } from "@/providers/workbox/WorkboxProvider.tsx";
import App from "@/App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WorkerProvider>
      <App />
    </WorkerProvider>
  </StrictMode>,
);
