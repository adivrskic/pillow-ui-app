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
      <Link
        className="pillow-nav__header"
        to="/"
        onClick={() => setSelected("")}
      >
        <IoPlanet />
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
        <IoLogoGithub />
        Github
      </a>

      <div
        className="pillow-nav__mobile"
        onClick={() => setMobileHeaderOpen(!mobileHeaderOpen)}
      >
        {mobileHeaderOpen ? <IoCloseOutline /> : <IoMenuOutline />}
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
