import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import "./latestupdates.scss";
import { StateContext } from "../../context/StateProvider";

const LatestUpdates = () => {
  const latestUpdatesSidebarItems = ["Installation", "Latest Updates"];
  const [{ sidebarOpen }] = React.useContext(StateContext);

  return (
    <div className="pillow-latest">
      <Sidebar
        header={"Overview"}
        page={"overview"}
        items={latestUpdatesSidebarItems}
      />
      <div className={`pillow-latest__content ${sidebarOpen ? "open" : ""}`}>
        <div className="pillow-latest__content-item">
          <h2>Latest Updates</h2>
          <p>Check out each version of the UI and the changes within them.</p>
        </div>
        <div className="pillow-latest__content-item">
          <h2>February 2023</h2>
          <p>v1.0.0 launched</p>
        </div>
        <div className="pillow-latest__content-item">
          <h2>
            February 23<sup>rd</sup>, 2023
          </h2>
          <p>v1.3.0 launched</p>
          <p>Contains initial release versions of 9 components</p>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
