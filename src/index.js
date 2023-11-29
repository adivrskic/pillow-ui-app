import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import ColorProvider from "./ColorProvider";
import App from "./App";

import "./fonts/Roboto-Italic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StateProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </StateProvider>
  </BrowserRouter>
);
