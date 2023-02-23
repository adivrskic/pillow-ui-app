import React from "react";
import "./example.scss";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AlertComponent from "./Subcomponents/AlertComponent";
import BadgeComponent from "./Subcomponents/BadgeComponent";
import ButtonComponent from "./Subcomponents/ButtonComponent";
import { StateContext } from "../../context/StateProvider";

const Example = () => {
  const components = [
    "Alert",
    "Badge",
    "Button",
    "Card",
    "Chip",
    "Container",
    "List",
    "Spinner",
    "TextField",
  ];
  const location = useLocation();
  const Component =
    location.pathname.split("/").pop()[0].toUpperCase() +
    location.pathname.split("/").pop().slice(1);

  const [{ sidebarOpen }] = React.useContext(StateContext);

  return (
    <div>
      <Sidebar header={"Components"} page={"components"} items={components} />
      <div className="pillow-example">
        <div className={`pillow-example__content ${sidebarOpen ? "open" : ""}`}>
          <h2>{Component}</h2>
          {Component === "Alert" && <AlertComponent />}
          {Component === "Badge" && <BadgeComponent />}
          {Component === "Button" && <ButtonComponent />}
        </div>
      </div>
    </div>
  );
};

export default Example;
