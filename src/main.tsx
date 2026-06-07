import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import AuthProvider from "./lib/provider/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors />
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
