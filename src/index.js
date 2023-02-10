import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

import "./fonts/Roboto-Black.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-Italic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-Regular.ttf";
import "./fonts/Roboto-Thin.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
