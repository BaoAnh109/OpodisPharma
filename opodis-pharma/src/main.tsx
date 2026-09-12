import "zmp-ui/zaui.css";
import "@/styles/tokens.css";
import "@/styles/globals.css";
import "@/styles/utilities.css";

import React from "react";
import { createRoot } from "react-dom/client";

import appConfig from "../app-config.json";
import App from "@/app/App";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig as Record<string, unknown>;
}

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Không tìm thấy phần tử #app để khởi chạy Mini App.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
