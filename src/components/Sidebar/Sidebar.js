import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./sidebar.scss";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/StateProvider";
import { toKebabCase } from "../../helpers";

const Sidebar = ({ header, page, items }) => {
  const [active, setActive] = useState("");
  const [{ sidebarOpen }, dispatch] = React.useContext(StateContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      setActive(
        location.pathname.slice(
          location.pathname.lastIndexOf("/") + 1,
          location.pathname.length
        )
      );
    }
  }, [location]);

  return (
    <div className={`pillow-sidebar ${sidebarOpen ? "open" : ""}`}>
      <h3 className="pillow-sidebar__header">{header}</h3>
      {items?.map((item) => (
        <Link
          key={item}
          className={`pillow-sidebar__item ${
            toKebabCase(item) === active ? "pillow-sidebar__item--active" : ""
          }`}
          to={`/${page}/${toKebabCase(item)}`}
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        >
          {item}
        </Link>
      ))}

      {sidebarOpen ? (
        <div
          className="pillow-sidebar__toggle"
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        >
          <IoArrowBackCircleOutline style={{ stroke: "url(#gradient)" }} />
        </div>
      ) : (
        <div
          className="pillow-sidebar__toggle"
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        >
          <IoArrowForwardCircleOutline style={{ stroke: "url(#gradient)" }} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
