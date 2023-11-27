import React from "react";
import "./componentlist.scss";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { StateContext } from "../../context/StateProvider";
import {
  Alert,
  Badge,
  Button,
  Card,
  Chip,
  Container,
  List,
  Spinner,
  TextField,
} from "@adivrskic/pillow";

const ComponentList = () => {
  const [{ sidebarOpen, bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  const components = {
    Alert,
    Badge,
    Button,
    Card,
    Chip,
    Container,
    List,
    Spinner,
    TextField,
  };

  const toKebabCase = (string) => {
    return string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };

  return (
    <div className="pillow-components">
      <div
        className={`pillow-components__content ${sidebarOpen ? "open" : ""}`}
      >
        <h2>All Components</h2>
        <div className="pillow-components__content-items">
          {Object.keys(components).map((component, index) => (
            <Link
              key={component + index}
              className="pillow-components__content-item"
              to={{
                pathname: `/components/${toKebabCase(component)}`,
                state: { component: component },
              }}
            >
              <h4>{component}</h4>
              <div
                style={{
                  ["--bg-color"]: `${bgColor}`,
                  ["--text-color"]: `${textColor}`,
                }}
                className="pillow-components__content-item-body"
              >
                {component === "Alert" && (
                  <Alert
                    heading="Header"
                    severity="info"
                    label="Pillow UI Alert Body"
                    variant="flat"
                    role="button"
                    {...colorProps}
                  />
                )}
                {component === "Badge" && (
                  <Badge label="9+" variant="flat" {...colorProps} />
                )}
                {component === "Button" && (
                  <Button
                    label="Pillow UI Button"
                    variant="flat"
                    size="small"
                    role="button"
                    {...colorProps}
                  />
                )}
                {component === "Card" && (
                  <Card
                    heading="Card Example"
                    // imageAlt="Planet neumorphic image"
                    // imageSrc="/images/hero-image.jpg"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    variant="flat"
                    {...colorProps}
                  />
                )}
                {component === "Chip" && (
                  <Chip
                    deletable={true}
                    icon={null}
                    label="Pillow Chip"
                    variant="flat"
                    {...colorProps}
                  />
                )}
                {component === "Container" && (
                  <Container variant="flat" {...colorProps}>
                    <div>Container content</div>
                    <ul>
                      <li>List item 1</li>
                      <li>List item 2</li>
                      <li>List item 3</li>
                    </ul>
                    <button>Container button</button>
                  </Container>
                )}
                {component === "List" && (
                  <List
                    header="List"
                    label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    listItems={[
                      <p>List item 1</p>,
                      <p>List item 2</p>,
                      <p>List item 3</p>,
                    ]}
                    variant="flat"
                    {...colorProps}
                  />
                )}
                {component === "Spinner" && (
                  <Spinner
                    complete={false}
                    variant="flat"
                    bgColor={colorProps.bgColor}
                  />
                )}
                {component === "TextField" && (
                  <TextField
                    title="Text Field Example"
                    content=""
                    onTextChange={() => console.log("change")}
                    variant="flat"
                    {...colorProps}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentList;
