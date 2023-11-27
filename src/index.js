import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

import "./fonts/Roboto-Italic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
