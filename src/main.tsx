import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/destyle.css";
import "./styles/output.css";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
