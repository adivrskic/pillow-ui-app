import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import "./installation.scss";
import { StateContext } from "../../context/StateProvider";

const Installation = () => {
  const installationSidebarItems = ["Installation", "Latest Updates"];
  const [{ sidebarOpen }] = React.useContext(StateContext);

  return (
    <div className="pillow-installation">
      <Sidebar
        header={"Overview"}
        page={"overview"}
        items={installationSidebarItems}
      />
      <div
        className={`pillow-installation__content ${sidebarOpen ? "open" : ""}`}
      >
        <div className="pillow-installation__content-item">
          <h2>Introduction</h2>
          <p>
            Pillow UI is a flexible, neumorphic styled component framework for
            use in React applications.
          </p>
        </div>

        <div className="pillow-installation__content-item">
          <h2>Installation</h2>
          <p>
            Pillow UI is a flexible, neumorphic styled component framework for
            use in React applications.
          </p>
          <p>
            Pillow UI can be installed by <span className="highlight">NPM</span>
            , using the following command. It is recommended to also have{" "}
            <span className="highlight">react@16.8.0</span> and{" "}
            <span className="highlight">react-dom@16.8.0</span> or higher
            versions.
          </p>
          <code>$ npm i @adivrskic/pillow</code>
        </div>

        <div className="pillow-installation__content-item">
          <h2>How To Use It</h2>
          <p>
            Once installed as a dependency in your project, import by doing:
          </p>

          <code>{`import { Button } from '@adivrskic/pillow'`}</code>

          <p>Once imported, use the components in your code by doing: </p>

          <code>{`<Button role="button" label="Click me!" size="medium" variant="flat" />`}</code>
        </div>
      </div>
    </div>
  );
};

export default Installation;
