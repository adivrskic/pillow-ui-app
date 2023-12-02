import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/StateProvider";
import {
  IoCalendarOutline,
  IoArrowForwardCircleOutline,
  IoLogoNpm,
  IoLogoGithub,
  IoBulbOutline,
  IoCodeSlashOutline,
  IoLogoReact,
} from "react-icons/io5";
import { Alert, Button, Spinner } from "@adivrskic/pillow";

const Home = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);
  const colorProps = {
    bgColor,
    textColor,
  };

  const [buttonSize, setButtonSize] = useState("small");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [spinnerVariant, setSpinnerVariant] = useState("flat");

  return (
    <div className="pillow-home">
      <div className="pillow-ui-app__colors"></div>
      <div className="pillow-home__hero">
        <div>
          <div className="pillow-home__hero-content">
            <h1 className="pillow-home__hero-heading">
              Pillow UI
              <br />A Neumorphic Design UI Component Library
            </h1>
            <p className="pillow-home__hero-text">
              Elevate your projects with a seamlessly integrated collection of
              sleek, soft UI elements, meticulously crafted to bring a tactile
              and modern feel to your applications.
            </p>
            <Link to="/overview/installation">
              <button
                type="button"
                className="pillow-home__hero-link link__global"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <img src="/images/hero-image.jpg" alt="Neumorphic planet" />
      </div>

      <div className="pillow-home__overview">
        <div>
          <h3 className="pillow-home__header">Core Principles</h3>
          <div className="pillow-home__overview-items">
            <div className="pillow-home__overview-item">
              <IoBulbOutline />
              <h4 className="pillow-home__overview-item__heading">
                Easy Installation
              </h4>
              <p className="pillow-home__overview-item__text">
                Streamline your workflow with components designed for easy
                integration, ensuring a smooth and efficient development
                process.
              </p>
            </div>
            <div className="pillow-home__overview-item">
              <IoCodeSlashOutline />
              <h4 className="pillow-home__overview-item__heading">
                Developer Friendly
              </h4>
              <p className="pillow-home__overview-item__text">
                Easy to install, easy to import and easy to use. Responsive
                neumorphic components adapt flawlessly to deliver a consistent
                user experience.
              </p>
            </div>
            <div className="pillow-home__overview-item">
              <IoLogoReact />
              <h4 className="pillow-home__overview-item__heading">
                Created with React
              </h4>
              <p className="pillow-home__overview-item__text">
                Lightweight, built with and for use with the React framework.
                Start building interfaces that stand out and leave a lasting
                impression.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pillow-home__getting-started">
        <div>
          <h3 className="pillow-home__header">Getting Started</h3>

          <div className="pillow-home__getting-started-items">
            <div className="pillow-home__getting-started-item">
              <h4 className="pillow-home__getting-started-item__heading">
                Installation
              </h4>
              <p className="pillow-home__getting-started-item__text">
                Get up and running with Pillow UI components
              </p>
              <Link
                to="/overview/installation"
                className="pillow-home__getting-started-item__link"
              >
                View Installation Page
              </Link>
              <IoArrowForwardCircleOutline />
            </div>
            <div className="pillow-home__getting-started-item">
              <h4 className="pillow-home__getting-started-item__heading">
                Latest Updates
              </h4>
              <p className="pillow-home__getting-started-item__text">
                View recent component updates and changes
              </p>
              <Link
                to="/overview/latest-updates"
                className="pillow-home__getting-started-item__link"
              >
                View Updates Page
              </Link>
              <IoCalendarOutline />
            </div>
          </div>
        </div>
      </div>

      <div className="pillow-home__recents">
        <div>
          <h3 className="pillow-home__header">Recent Additions</h3>
          <div className="pillow-home__recents-items">
            <div className="pillow-home__recents-item">
              <h4 className="pillow-home__recents-item__heading">Alert</h4>
              <div className="pillow-home__recents-body">
                <Alert
                  heading="Header"
                  severity={alertSeverity}
                  label="Pillow UI Alert Body"
                  variant="flat"
                  role="button"
                  {...colorProps}
                />
              </div>
              <div className="pillow-home__recents-options">
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setAlertSeverity("info")}
                >
                  Info
                </button>
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setAlertSeverity("warning")}
                >
                  Warning
                </button>
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setAlertSeverity("success")}
                >
                  Success
                </button>
              </div>
              <Link to="/components/alert">View Component</Link>
            </div>
            <div className="pillow-home__recents-item">
              <h4>Button</h4>
              <div className="pillow-home__recents-body">
                <Button
                  label="Pillow UI Button"
                  variant="flat"
                  size={buttonSize}
                  role="button"
                  {...colorProps}
                />
              </div>
              <div className="pillow-home__recents-options">
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setButtonSize("small")}
                >
                  Small
                </button>
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setButtonSize("medium")}
                >
                  Medium
                </button>
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setButtonSize("large")}
                >
                  Large
                </button>
              </div>
              <Link
                className="pillow-home__recents-item-link"
                to="/components/button"
              >
                View Component
              </Link>
            </div>
            <div className="pillow-home__recents-item">
              <h4 className="pillow-home__recents-item-heading">Spinner</h4>
              <div className="pillow-home__recents-body">
                <span>
                  <Spinner
                    variant={spinnerVariant}
                    bgColor={colorProps.bgColor}
                  />
                </span>
              </div>
              <div className="pillow-home__recents-options">
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setSpinnerVariant("flat")}
                >
                  Flat
                </button>
                <button
                  className="pillow-home__recents-options-button"
                  onClick={() => setSpinnerVariant("pressed")}
                >
                  Pressed
                </button>
              </div>
              <Link
                className="pillow-home__recents-item-link"
                to="/components/spinner"
              >
                View Component
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pillow-home__external-links">
        <div>
          <h3 className="pillow-home__header">Resources and External Links</h3>
          <p className="pillow-home__external-links-text">
            Check out these resources to view the code and learn more about the
            library
          </p>
          <div className="pillow-home__external-links-items">
            <Link
              to="https://github.com/adivrskic/pillow"
              target="_blank"
              rel="noopener noreferrer"
              className="pillow-home__external-links-item"
            >
              <h4 className="pillow-home__external-links-item-heading">
                View Github Repository
              </h4>
              <IoLogoGithub />
            </Link>

            <Link
              to="https://www.npmjs.com/package/@adivrskic/pillow"
              target="_blank"
              rel="noopener noreferrer"
              className="pillow-home__external-links-item"
            >
              <h4 className="pillow-home__external-links-item-heading">
                View Npm Package
              </h4>
              <IoLogoNpm />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
