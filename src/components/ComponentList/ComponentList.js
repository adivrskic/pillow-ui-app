import React from "react";
import "./componentlist.scss";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { StateContext } from "../../context/StateProvider";
import { Alert, Badge, Button } from "@adivrskic/pillow";

const ComponentList = () => {
  const [{ sidebarOpen }] = React.useContext(StateContext);

  const components = {
    Alert: Alert,
    Badge: Badge,
    Button: Button,
  };

  const toKebabCase = (string) => {
    return string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };

  return (
    <div className="pillow-components">
      <Sidebar
        header={"Components"}
        page={"components"}
        items={Object.keys(components)}
      />
      <div
        className={`pillow-components__content ${sidebarOpen ? "open" : ""}`}
      >
        <h2>Components</h2>
        <div className="pillow-components__content-items">
          {Object.keys(components).map((component) => (
            <Link
              className="pillow-components__content-item"
              to={{
                pathname: `/components/${toKebabCase(component)}`,
                state: { component: component },
              }}
            >
              <h4>{component}</h4>
              <div className="pillow-components__content-item-body">
                {component === "Alert" && (
                  <Alert
                    heading="Header"
                    severity="info"
                    label="Pillow UI Alert Body"
                    variant="flat"
                    role="button"
                  />
                )}
                {component === "Badge" && <Badge label="9+" variant="flat" />}
                {component === "Button" && (
                  <Button
                    label="Pillow UI Button"
                    variant="flat"
                    size="small"
                    role="button"
                  />
                )}
                {/* {component === "Card" && (
                  <Card
                    heading
                    imageAlt
                    imageSrc
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    variant="flat"
                  />
                )} */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentList;
