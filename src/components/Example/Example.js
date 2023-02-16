import React from "react";
import "./example.scss";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Alert, Badge, Button } from "@adivrskic/pillow";

const Example = () => {
  const components = ["Alert", "Badge", "Button"];
  const location = useLocation();
  const Component =
    location.pathname.split("/").pop()[0].toUpperCase() +
    location.pathname.split("/").pop().slice(1);

  return (
    <div>
      <Sidebar header={"Components"} page={"components"} items={components} />
      <div className="pillow-example">
        <div className="pillow-example__content">
          <h2>{Component}</h2>
        </div>
      </div>
    </div>
  );
};

export default Example;
