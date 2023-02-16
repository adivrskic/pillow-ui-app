import React from "react";
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
} from "react-icons/io5";
import { Button } from "@adivrskic/pillow";

const Home = () => {
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

      <div className="pillow-home__overview pillow-home__overview--alt">
        <div>
          <h3>Recently Added</h3>
          <div className="pillow-home__overview-items">
            <div className="pillow-home__overview-item">
              <Button
                label="Pillow UI Button"
                variant="flat"
                size="small"
                role="button"
              />
              <div className="pillow-home__overview-divider"></div>
              <h4>Button</h4>
            </div>
            <div className="pillow-home__overview-item">
              {/* <Alert
                severity="info"
                label="Pillow UI Alert"
                variant="flat"
                size="small"
                role="button"
              /> */}
              <h4>Alert</h4>
            </div>
            <div className="pillow-home__overview-item">
              <h4>Card</h4>
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
            <Link to="" className="pillow-home__external-links-item">
              <h4>View Github Repository</h4>
              <IoLogoGithub />
            </Link>

            <Link to="/tbd" className="pillow-home__external-links-item">
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
