import React from "react";
import { Link } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
  return (
    <div className="pillow-notfound">
      <h2>
        404
        <div className="pillow-notfound__divider"></div>
        <span>Not Found</span>
      </h2>
      <Link to="/">
        <button type="button">Home Page</button>
      </Link>
    </div>
  );
};

export default NotFound;
