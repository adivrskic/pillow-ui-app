import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const sidebarOptions =
    location.pathname.indexOf("overview") > -1
      ? ["Installation", "Latest Updates"]
      : [
          "Alert",
          "Badge",
          "Button",
          "Card",
          "Chip",
          "Container",
          "IconButton",
          "List",
          "Shape",
          "Spinner",
          "Switch",
          "TextField",
          "Toast",
        ];

  const page =
    location.pathname.indexOf("overview") > -1 ? "overview" : "components";
  return (
    <div className="pillow__layout">
      <Sidebar header={page} page={page} items={sidebarOptions} />
      <Outlet />
    </div>
  );
};

export default Layout;
