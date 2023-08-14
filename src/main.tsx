import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/styles/main.css";
import "uno.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
