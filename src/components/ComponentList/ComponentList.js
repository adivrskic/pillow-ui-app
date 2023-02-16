import React from "react";
import "./componentlist.scss";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { StateContext } from "../../context/StateProvider";
import { Alert, Button } from "@adivrskic/pillow";

const ComponentList = () => {
  const [{ sidebarOpen }] = React.useContext(StateContext);

  const components = ["Alert", "Button"];
  const toKebabCase = (string) => {
    return string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };

  return (
    <div className="pillow-components">
      <Sidebar header={"Components"} page={"components"} items={components} />
      <div
        className={`pillow-components__content ${sidebarOpen ? "open" : ""}`}
      >
        <h2>Components</h2>
        <div className="pillow-components__content-items">
          {components.map((component) => (
            <Link to={`/components/${toKebabCase(component)}`}>
              <div className="pillow-components__content-item">{component}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentList;
