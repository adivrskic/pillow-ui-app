import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import {
  IoCalendarOutline,
  IoArrowForwardCircleOutline,
  IoLogoNpm,
  IoLogoGithub,
  IoBulbOutline,
  IoAppsOutline,
  IoLogoReact,
  IoCartOutline,
} from "react-icons/io5";
import { Alert, Badge, Button } from "@adivrskic/pillow";

const Home = () => {
  const [buttonSize, setButtonSize] = useState("small");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [badgeVariant, setBadgeVariant] = useState("flat");

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
              Pillow is a React UI Component Library for quickly and easily
              creating websites and applications in soft, neumorphic design.
            </p>
            <Link to="/overview/installation">
              <button type="button">Get Started</button>
            </Link>
          </div>
        </div>

        <img src="/images/hero-image.jpg" alt="Neumorphic planet" />
      </div>

      <div className="pillow-home__overview">
        <div>
          <h3>Principles</h3>
          <div className="pillow-home__overview-items">
            <div className="pillow-home__overview-item">
              <IoBulbOutline />
              <h4>Easy Installation</h4>
              <p>
                Cut to the chase and get started on your dream projects quickly
                with our components
              </p>
            </div>
            <div className="pillow-home__overview-item">
              <IoAppsOutline />
              <h4>Multiple Components</h4>
              <p>
                More than a dozen lightweight composable components ready to use
              </p>
            </div>
            <div className="pillow-home__overview-item">
              <IoLogoReact />
              <h4>Created with React</h4>
              <p>Built with and for use with the React framework</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pillow-home__getting-started">
        <div>
          <h3>Getting Started</h3>

          <div className="pillow-home__getting-started-items">
            <div className="pillow-home__getting-started-item">
              <h4>Installation</h4>
              <p>Get up and running with Pillow UI components</p>
              <Link to="/overview/installation">View Installation Page</Link>
              <IoArrowForwardCircleOutline />
            </div>
            <div className="pillow-home__getting-started-item">
              <h4>Latest Updates</h4>
              <p>View recent component updates and changes</p>
              <Link to="/overview/latest-updates">View Updates Page</Link>
              <IoCalendarOutline />
            </div>
          </div>
        </div>
      </div>

      <div className="pillow-home__recents">
        <div>
          <h3>Recently Added</h3>
          <div className="pillow-home__recents-items">
            <div className="pillow-home__recents-item">
              <h4>Alert</h4>
              <div className="pillow-home__recents-body">
                <Alert
                  heading="Header"
                  severity={alertSeverity}
                  label="Pillow UI Alert Body"
                  variant="flat"
                  role="button"
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
              <Link to="/components/alert">View Component</Link>
            </div>
            <div className="pillow-home__recents-item">
              <h4>Badge</h4>
              <div className="pillow-home__recents-body">
                <span>
                  <IoCartOutline />
                  <Badge content="9" variant={badgeVariant} />
                </span>
              </div>
              <div className="pillow-home__recents-options">
                <button onClick={() => setBadgeVariant("flat")}>Flat</button>
                <button onClick={() => setBadgeVariant("pressed")}>
                  Pressed
                </button>
              </div>
              <Link to="/components/badge">View Component</Link>
            </div>
            <div className="pillow-home__recents-item">
              <h4>Button</h4>
              <div className="pillow-home__recents-body">
                <Button
                  label="Pillow UI Button"
                  variant="flat"
                  size={buttonSize}
                  role="button"
                />
              </div>
              <div className="pillow-home__recents-options">
                <button onClick={() => setButtonSize("small")}>Small</button>
                <button onClick={() => setButtonSize("medium")}>Medium</button>
                <button onClick={() => setButtonSize("large")}>Large</button>
              </div>
              <Link to="/components/button">View Component</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pillow-home__external-links">
        <div>
          <h3>Resources and External Links</h3>
          <p>
            Check out these resources to view the code and learn more about the
            library
          </p>
          <div className="pillow-home__external-links-items">
            <Link
              to="https://github.com/adivrskic/pillow"
              className="pillow-home__external-links-item"
            >
              <h4>View Github Repository</h4>
              <IoLogoGithub />
            </Link>

            <Link
              to="https://www.npmjs.com/package/@adivrskic/pillow"
              className="pillow-home__external-links-item"
            >
              <h4>View Npm Package</h4>
              <IoLogoNpm />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
