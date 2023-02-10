import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import "./overview.scss";
const Overview = () => {
  return (
    <div>
      <Sidebar header={"Overview"} items={["Installation", "Latest Updates"]} />
      <div className="overview-content"></div>
    </div>
  );
};

export default Overview;
