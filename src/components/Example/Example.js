import React from "react";
import "./example.scss";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AlertComponent from "./Subcomponents/AlertComponent";
import BadgeComponent from "./Subcomponents/BadgeComponent";
import ButtonComponent from "./Subcomponents/ButtonComponent";

const Example = () => {
  const components = ["Alert", "Badge", "Button"];
  const location = useLocation();
  const Component =
    location.pathname.split("/").pop()[0].toUpperCase() +
    location.pathname.split("/").pop().slice(1);

  console.log(Component);

  return (
    <div>
      <Sidebar header={"Components"} page={"components"} items={components} />
      <div className="pillow-example">
        <div className="pillow-example__content">
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
