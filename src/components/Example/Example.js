import React from "react";
import "./example.scss";
import Sidebar from "../Sidebar/Sidebar";

const Example = () => {
  const components = [
    "Alert",
    "Button",
    "Checkbox",
    "Navbar",
    "Pagination",
    "Select",
  ];

  return (
    <div>
      <Sidebar header={"Components"} page={"components"} items={components} />
      Example
    </div>
  );
};

export default Example;
