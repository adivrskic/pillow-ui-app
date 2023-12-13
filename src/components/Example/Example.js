import React, { useContext } from "react";
import "./example.scss";
import { useLocation } from "react-router-dom";
import { StateContext } from "../../context/StateProvider";
import { useConfig } from "./useConfig";
import Component from "./Component";

const Example = () => {
  const location = useLocation();
  const component = (
    location.pathname.split("/").pop()[0].toUpperCase() +
    location.pathname.split("/").pop().slice(1)
  ).replace("-", " ");
  const [{ sidebarOpen, bgColor, textColor }] = useContext(StateContext);

  const config = useConfig(bgColor, textColor);

  return (
    <div>
      <div className="pillow-example">
        <div
          className={`pillow-example__content ${
            sidebarOpen ? "pillow-example__content--open" : ""
          }`}
        >
          <Component config={config[component]} />
        </div>
      </div>
    </div>
  );
};

export default Example;
