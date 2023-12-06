import React, { useState } from "react";
import "./installation.scss";
import { StateContext } from "../../context/StateProvider";
import { FaNpm, FaYarn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
const Installation = () => {
  const [selectedTab, setSelectedTab] = useState("npm");
  const [{ sidebarOpen }] = React.useContext(StateContext);

  return (
    <div className="pillow-installation">
      <div
        className={`pillow-installation__content ${sidebarOpen ? "open" : ""}`}
      >
        <div className="pillow-installation__content-item">
          <h2 className="pillow-installation__content-header">Introduction</h2>
          <p className="pillow-installation__content-text">
            Pillow UI is a flexible, neumorphic styled component framework for
            use in React applications.
          </p>
        </div>

        <div className="pillow-installation__content-item">
          <h2 className="pillow-installation__content-header">Installation</h2>
          <p className="pillow-installation__content-text">
            Pillow UI components can be installed with
            <span className="pillow-installation__content-text--highlight">
              npm
            </span>
            or
            <span className="pillow-installation__content-text--highlight">
              yarn
            </span>
            , using one of the following commands. It is recommended to also
            have{" "}
            <span className="pillow-installation__content-text--highlight">
              react@16.8.0
            </span>
            and
            <span className="pillow-installation__content-text--highlight">
              react-dom@16.8.0
            </span>{" "}
            or higher versions.
          </p>
          <div className="pillow-installation__tablist">
            <button
              className={`pillow-installation__tablist-button ${
                selectedTab === "npm" &&
                "pillow-installation__tablist-button--selected"
              }`}
              onClick={() => setSelectedTab("npm")}
            >
              <FaNpm />
              npm
            </button>
            <button
              className={`pillow-installation__tablist-button ${
                selectedTab === "yarn" &&
                "pillow-installation__tablist-button--selected"
              }`}
              onClick={() => setSelectedTab("yarn")}
            >
              <FaYarn />
              yarn
            </button>
          </div>
          <div className="pillow-installation__tab-panel">
            {selectedTab === "npm" ? (
              <code className="pillow-installation__content-text--code">
                $ npm i @adivrskic/pillow
                <span
                  className="pillow-installation__content-text--code-copy"
                  onClick={navigator.clipboard.writeText(
                    "$ npm i @adivrskic/pillow"
                  )}
                >
                  Copy
                </span>
              </code>
            ) : (
              <code className="pillow-installation__content-text--code">
                $ yarn add @adivrskic/pillow
                <span
                  className="pillow-installation__content-text--code-copy"
                  onClick={navigator.clipboard.writeText(
                    "$ yarn add @adivrskic/pillow"
                  )}
                >
                  Copy
                </span>
              </code>
            )}
          </div>
        </div>

        <div className="pillow-installation__content-item">
          <h2 className="pillow-installation__content-heading">
            How To Use It
          </h2>
          <p className="pillow-installation__content-text">
            Once installed as a dependency in your project, import a component
            by doing:
          </p>

          <code className="pillow-installation__content-text--code">
            {`import { Button } from '@adivrskic/pillow'`}
            <span
              className="pillow-installation__content-text--code-copy"
              onClick={navigator.clipboard.writeText(
                "import { Button } from '@adivrskic/pillow'"
              )}
            >
              Copy
            </span>
          </code>

          <p>
            Once a component has been imported, use it in your code by doing:
          </p>

          <code className="pillow-installation__content-text--code">
            <pre>
              {`<Button 
  role="button" 
  label="Click me!" 
  size="medium" 
  variant="flat" 
/>`}
            </pre>

            <span
              className="pillow-installation__content-text--code-copy"
              onClick={navigator.clipboard.writeText(
                '<Button role="button" label="Click me!" size="medium" variant="flat" />'
              )}
            >
              Copy
            </span>
          </code>
        </div>
        <div className="pillow-installation__content-item">
          <h2 className="pillow-installation__content-heading">Contribute</h2>
          <p className="pillow-installation__content-text">
            If you have an idea that will make Pillow UI better for developers
            everywhere, open a pull request and let's collaborate!
          </p>

          <a
            className="pillow-installation__content-link link__global"
            href="https://github.com/adivrskic/pillow/pulls"
          >
            <IoLogoGithub /> Open a Pull Request
          </a>
        </div>
      </div>
    </div>
  );
};

export default Installation;
