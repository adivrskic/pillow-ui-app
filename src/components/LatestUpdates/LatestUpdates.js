import React from "react";
import "./latestupdates.scss";
import { StateContext } from "../../context/StateProvider";

const LatestUpdates = () => {
  const [{ sidebarOpen }] = React.useContext(StateContext);

  return (
    <div className="pillow-latest">
      <div className={`pillow-latest__content ${sidebarOpen ? "open" : ""}`}>
        <div className="pillow-latest__content-item">
          <h2 className="pillow-latest__content-item-heading">
            Latest Updates
          </h2>
          <p className="pillow-latest__content-item-text">
            Check out each version of the UI and the changes within them.
          </p>
        </div>
        <div className="pillow-latest__content-item">
          <h2 className="pillow-latest__content-item-heading">February 2023</h2>
          <p className="pillow-latest__content-item-text">v1.0.0 launched</p>
        </div>
        <div className="pillow-latest__content-item">
          <h2 className="pillow-latest__content-item-heading">
            February 23<sup>rd</sup>, 2023
          </h2>
          <p className="pillow-latest__content-item-text">v1.3.0 launched.</p>
          <p className="pillow-latest__content-item-text">
            Contains initial release versions of 9 components.
          </p>
        </div>
        <div className="pillow-latest__content-item">
          <h2 className="pillow-latest__content-item-heading">November 2023</h2>
          <p className="pillow-latest__content-item-text">v1.5.0 launched.</p>
          <p className="pillow-latest__content-item-text">
            Rework of all components.
          </p>
          <p className="pillow-latest__content-item-text">
            Neumorphic styles now work on any background color.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
