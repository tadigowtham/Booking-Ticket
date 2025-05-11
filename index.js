import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css"; // This should correctly reference the global.css file in the src folder

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
