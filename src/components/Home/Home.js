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
import { getGradient } from "../../helpers";

const Home = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);
  const gradient = getGradient(bgColor);
  const colorProps = {
    bgColor,
    textColor,
  };

  const [buttonSize, setButtonSize] = useState("small");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [spinnerVariant, setSpinnerVariant] = useState("flat");

  return (
    <div className="pillow-home">
      <div className="pillow-home__hero">
        <div>
          <div className="pillow-home__hero-content">
            <h1>
              Pillow UI
              <br />A Neumorphic Design UI Component Library
            </h1>
            <p>
              Elevate your projects with a seamlessly integrated collection of
              sleek, soft UI elements, meticulously crafted to bring a tactile
              and modern feel to your applications.
            </p>
            <Link to="/overview/installation">
              <button
                style={{
                  background: `${gradient}`,
                  color: `${textColor}`,
                }}
                type="button"
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
              <IoBulbOutline style={{ stroke: "url(#gradient)" }} />
              <h4>Easy Installation</h4>
              <p>
                Streamline your workflow with components designed for easy
                integration, ensuring a smooth and efficient development
                process.
              </p>
            </div>
            <div className="pillow-home__overview-item">
              <IoCodeSlashOutline style={{ stroke: "url(#gradient)" }} />
              <h4>Developer Friendly</h4>
              <p>
                Easy to install, easy to import and easy to use. Responsive
                neumorphic components adapt flawlessly to deliver a consistent
                user experience.
              </p>
            </div>
            <div className="pillow-home__overview-item">
              <IoLogoReact style={{ fill: "url(#gradient)" }} />
              <h4>Created with React</h4>
              <p>
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
              <h4>Installation</h4>
              <p>Get up and running with Pillow UI components</p>
              <Link to="/overview/installation">View Installation Page</Link>
              <IoArrowForwardCircleOutline
                style={{ stroke: "url(#gradient)" }}
              />
            </div>
            <div className="pillow-home__getting-started-item">
              <h4>Latest Updates</h4>
              <p>View recent component updates and changes</p>
              <Link to="/overview/latest-updates">View Updates Page</Link>
              <IoCalendarOutline
                style={{ fill: "url(#gradient)", stroke: "url(#gradient)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pillow-home__recents">
        <div>
          <h3 className="pillow-home__header">Recent Additions</h3>
          <div className="pillow-home__recents-items">
            <div className="pillow-home__recents-item">
              <h4>Alert</h4>
              <div
                style={{
                  background: `${bgColor}`,
                  color: `${textColor}`,
                }}
                className="pillow-home__recents-body"
              >
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
                <button onClick={() => setAlertSeverity("info")}>Info</button>
                <button onClick={() => setAlertSeverity("warning")}>
                  Warning
                </button>
                <button onClick={() => setAlertSeverity("success")}>
                  Success
                </button>
              </div>
              <Link
                to="/components/alert"
                style={{
                  background: `${gradient}`,
                }}
              >
                View Component
              </Link>
            </div>
            <div className="pillow-home__recents-item">
              <h4>Button</h4>
              <div
                style={{
                  background: `${bgColor}`,
                  color: `${textColor}`,
                }}
                className="pillow-home__recents-body"
              >
                <Button
                  label="Pillow UI Button"
                  variant="flat"
                  size={buttonSize}
                  role="button"
                  {...colorProps}
                />
              </div>
              <div className="pillow-home__recents-options">
                <button onClick={() => setButtonSize("small")}>Small</button>
                <button onClick={() => setButtonSize("medium")}>Medium</button>
                <button onClick={() => setButtonSize("large")}>Large</button>
              </div>
              <Link
                to="/components/button"
                style={{
                  background: `${gradient}`,
                }}
              >
                View Component
              </Link>
            </div>
            <div className="pillow-home__recents-item">
              <h4>Spinner</h4>
              <div
                style={{
                  background: `${bgColor}`,
                  color: `${textColor}`,
                }}
                className="pillow-home__recents-body"
              >
                <span>
                  <Spinner
                    variant={spinnerVariant}
                    bgColor={colorProps.bgColor}
                  />
                </span>
              </div>
              <div className="pillow-home__recents-options">
                <button onClick={() => setSpinnerVariant("flat")}>Flat</button>
                <button onClick={() => setSpinnerVariant("pressed")}>
                  Pressed
                </button>
              </div>
              <Link
                to="/components/spinner"
                style={{
                  background: `${gradient}`,
                }}
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
          <p>
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
              <h4>View Github Repository</h4>
              <IoLogoGithub style={{ fill: "url(#gradient)" }} />
            </Link>

            <Link
              to="https://www.npmjs.com/package/@adivrskic/pillow"
              target="_blank"
              rel="noopener noreferrer"
              className="pillow-home__external-links-item"
            >
              <h4>View Npm Package</h4>
              <IoLogoNpm style={{ fill: "url(#gradient)" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
