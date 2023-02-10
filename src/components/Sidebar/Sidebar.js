import React, { useState } from "react";
import "./sidebar.scss";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/StateProvider";

const Sidebar = ({ header, page, items }) => {
  const [active, setActive] = useState("");
  const [{ sidebarOpen }, dispatch] = React.useContext(StateContext);

  const toKebabCase = (string) => {
    return string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };

  return (
    <div className={`pillow-sidebar ${sidebarOpen ? "open" : ""}`}>
      <h3 className="pillow-sidebar__header">{header}</h3>
      {items?.map((item) => (
        <Link
          className={`pillow-sidebar__item ${active ? "active" : ""}`}
          to={`/${page}/${toKebabCase(item)}`}
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        >
          {item}
        </Link>
      ))}

      {sidebarOpen ? (
        <IoArrowBackCircleOutline
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        />
      ) : (
        <IoArrowForwardCircleOutline
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        />
      )}
    </div>
  );
};

export default Sidebar;
