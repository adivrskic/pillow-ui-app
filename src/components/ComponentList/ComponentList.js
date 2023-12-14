import React from "react";
import "./componentlist.scss";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/StateProvider";
import {
  Alert,
  Badge,
  Button,
  Card,
  Chip,
  Container,
  IconButton,
  List,
  Shape,
  Spinner,
  Switch,
  TextField,
  Toast,
} from "@adivrskic/pillow";
import { IoCartOutline } from "react-icons/io5";

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
    IconButton,
    List,
    Shape,
    Spinner,
    Switch,
    TextField,
    Toast,
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
        className={`pillow-components__content ${
          sidebarOpen ? "pillow-components__content--open" : ""
        }`}
      >
        <h2 className="pillow-components__content-header">All Components</h2>
        <div className="pillow-components__content-items">
          {Object.keys(components).map((component, index) => (
            <Link
              key={component + index}
              className="pillow-components__content-item"
              style={{
                "--bg-color": `${bgColor}`,
              }}
              to={{
                pathname: `/components/${toKebabCase(component)}`,
                state: { component: component },
              }}
            >
              <h4 className="pillow-components__content-item-header">
                {component}
              </h4>
              <div
                style={{
                  "--bg-color": `${bgColor}`,
                  "--text-color": `${textColor}`,
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
                {component === "IconButton" && (
                  <IconButton
                    icon={<IoCartOutline />}
                    variant="flat"
                    size="small"
                  />
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
                {component === "Shape" && (
                  <Shape
                    width={150}
                    height={150}
                    variant="flat"
                    {...colorProps}
                  />
                )}
                {component === "Spinner" && (
                  <Spinner
                    complete={false}
                    variant="flat"
                    spinColor={colorProps.textColor}
                    bgColor={colorProps.bgColor}
                  />
                )}
                {component === "Switch" && (
                  <Switch
                    checked={true}
                    required={true}
                    onChange={() => console.log("Changed!")}
                    variant="flat"
                    {...colorProps}
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
                {component === "Toast" && (
                  <Toast
                    title="This is a Toast example"
                    duration={30}
                    onClose={() => console.log("Closed")}
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
