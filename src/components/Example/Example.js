import React from "react";
import "./example.scss";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { StateContext } from "../../context/StateProvider";
import { config } from "./config";
import Component from "./Component";

const Example = () => {
  const components = [
    "Alert",
    "Badge",
    "Button",
    "Card",
    "Chip",
    "Container",
    "IconButton",
    "List",
    "Shape",
    "Spinner",
    "Switch",
    "TextField",
    "Toast",
  ];
  const location = useLocation();
  const component = (
    location.pathname.split("/").pop()[0].toUpperCase() +
    location.pathname.split("/").pop().slice(1)
  ).replace("-", " ");

  console.log(component);
  const [{ sidebarOpen }] = React.useContext(StateContext);

  return (
    <div>
      <Sidebar header={"Components"} page={"components"} items={components} />
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
