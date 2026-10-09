// main.jsx — React এর entry point (হাত দিতে হবে না)
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import ProgressProvider from "./context/ProgressContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ProgressProvider: কোন ধাপ শেষ করেছ তা সব পেজে পাওয়া যাবে */}
    <ProgressProvider>
      <RouterProvider router={router} />
    </ProgressProvider>
  </React.StrictMode>
);
