import React from "react";
import { Link } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
  return (
    <div className="pillow-notfound">
      <h2 className="pillow-notfound__heading">
        404
        <div className="pillow-notfound__divider"></div>
        <span className="pillow-notfound__text">Not Found</span>
      </h2>
      <Link to="/">
        <button type="button" className="link__global">
          Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
