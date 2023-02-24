import React, { useState, useEffect } from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";
import {
  IoPlanet,
  IoLogoGithub,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [selected, setSelected] = useState("");
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.indexOf("overview") > -1) setSelected("overview");
    if (location.pathname.indexOf("components") > -1) setSelected("components");
  }, [location]);

  return (
    <div className="pillow-nav">
      <svg id="display-none">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop stopColor={"#4884ee"} offset="0%" />
          <stop stopColor={"#06bcfb"} offset="100%" />
        </linearGradient>
      </svg>
      <Link
        className="pillow-nav__header"
        to="/"
        onClick={() => setSelected("")}
      >
        <IoPlanet style={{ fill: "url(#gradient)" }} />
        <h2>PILLOW UI</h2>
      </Link>

      <ul className="pillow-nav__links">
        <li
          onClick={() => setSelected("overview")}
          className={`pillow-nav__link ${
            selected === "overview" ? "active" : ""
          }`}
        >
          <Link to="/overview/installation">Overview</Link>
        </li>
        <li
          className={`pillow-nav__link ${
            selected === "components" ? "active" : ""
          }`}
          onClick={() => setSelected("components")}
        >
          <Link to="/components">Components</Link>
        </li>
      </ul>

      <a
        className="pillow-nav__link pillow-nav__link--gh"
        href="https://github.com/adivrskic/pillow"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoGithub style={{ fill: "url(#gradient)" }} />
        Github
      </a>

      <div
        className="pillow-nav__mobile"
        onClick={() => setMobileHeaderOpen(!mobileHeaderOpen)}
      >
        {mobileHeaderOpen ? (
          <IoCloseOutline style={{ stroke: "url(#gradient)" }} />
        ) : (
          <IoMenuOutline style={{ stroke: "url(#gradient)" }} />
        )}
      </div>

      {mobileHeaderOpen && (
        <div className="pillow-nav__mobile-content">
          <ul className="pillow-nav__mobile-links">
            <li
              onClick={() => {
                setMobileHeaderOpen(false);
              }}
              className={`pillow-nav__mobile-link ${
                selected === "overview" ? "active" : ""
              }`}
            >
              <Link to="/overview/installation">Overview</Link>
            </li>
            <li
              className={`pillow-nav__mobile-link ${
                selected === "components" ? "active" : ""
              }`}
              onClick={() => {
                setMobileHeaderOpen(false);
              }}
            >
              <Link to="/components">Components</Link>
            </li>
            <a
              className="pillow-nav__mobile-link"
              href="https://github.com/adivrskic/pillow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
