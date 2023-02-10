import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = ({ header, items }) => {
  return (
    <div className="pillow-sidebar">
      <h2 className="list-header">{header}</h2>
      {items?.map((item) => (
        <Link className="list-item" to={item}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
