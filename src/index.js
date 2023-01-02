import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/persianBaseStyle/style.css";
import "../src/assets/css/styleHelper.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
