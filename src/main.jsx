import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Global Toaster */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0f172a", // dark navy
            color: "#e5e7eb",
            border: "1px solid #14b8a6", // teal accent
          },
        }}
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
