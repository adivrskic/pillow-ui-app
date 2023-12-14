import React, { useState, useEffect } from "react";
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

export const useConfig = (bgColor, textColor) => {
  const [colorProps, setColorProps] = useState({ bgColor, textColor });
  useEffect(() => {
    setColorProps({ bgColor, textColor });
  }, [bgColor, textColor]);

  return {
    Alert: {
      component: "Alert",
      title: "Examples",
      subTitle:
        "Alerts are used to communicate a state that affects a system, feature or page.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Alert",
      examples: [
        {
          components: [
            <Alert
              heading="Error"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="error"
              variant="flat"
              {...colorProps}
            />,
            <Alert
              heading="Error"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="error"
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Error Alert",
        },
        {
          components: [
            <Alert
              heading="Warning"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="warning"
              variant="flat"
              {...colorProps}
            />,
            <Alert
              heading="Warning"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="warning"
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Warning Alert",
        },
        {
          components: [
            <Alert
              heading="Info"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="info"
              variant="flat"
              {...colorProps}
            />,
            <Alert
              heading="Info"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="info"
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Warning Alert",
        },
        {
          components: [
            <Alert
              heading="Success"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="success"
              variant="flat"
              {...colorProps}
            />,
            <Alert
              heading="Success"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              severity="success"
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Success Alert",
        },
      ],
      apis: [
        {
          title: "Severity API",
          subtitle:
            "The Alert component implements the severity prop. The severity has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "error",
              c2: "severity=error",
            },
            {
              c1: "warning",
              c2: 'severity="warning"',
            },
            {
              c1: "info",
              c2: 'severity="info"',
            },
            {
              c1: "success",
              c2: 'severity="success"',
            },
          ],
        },
        {
          title: "Variant API",
          subtitle:
            "The Alert component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "heading",
              c2: "string",
              c3: "The title of the alert.",
            },
            {
              c1: "label",
              c2: "string",
              c3: "The label or information of the alert.",
            },
            {
              c1: "severity",
              c2: "string",
              c3: "The level of severity of the alert.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Badge: {
      component: "Badge",
      title: "Examples",
      subTitle:
        "Badges are used to give a quick highlight of an item's status.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Badge",
      examples: [
        {
          components: [
            <Badge label="9+" variant="flat" {...colorProps} />,
            <Badge label="9+" variant="pressed" {...colorProps} />,
          ],
          heading: "Badge with Number",
        },
        {
          components: [
            <Badge label="New!" variant="flat" {...colorProps} />,
            <Badge label="New!" variant="pressed" {...colorProps} />,
          ],
          heading: "Badge with Text",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "label",
              c2: "string",
              c3: "The label or information of the alert.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Button: {
      component: "Button",
      title: "Examples",
      subTitle: "Buttons are used to trigger actions or events.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Button",
      examples: [
        {
          components: [
            <Button
              role="button"
              label="Click me!"
              variant="flat"
              {...colorProps}
            />,
            <Button
              role="button"
              label="Click me!"
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Button Variants",
        },
        {
          components: [
            <Button
              role="button"
              label="Click me!"
              size="small"
              variant="flat"
              {...colorProps}
            />,
            <Button
              role="button"
              label="Click me!"
              size="medium"
              variant="flat"
              {...colorProps}
            />,
            <Button
              role="button"
              label="Click me!"
              size="large"
              variant="flat"
              {...colorProps}
            />,
          ],
          heading: "Button Sizes",
        },
        {
          components: [
            <Button
              role="button"
              label="Click me!"
              variant="flat"
              icon="info"
              {...colorProps}
            />,
          ],
          heading: "Button with Icon",
        },
        {
          components: [
            <Button
              role="button"
              label="Click me!"
              variant="flat"
              disabled
              {...colorProps}
            />,
          ],
          heading: "Disabled Button",
        },
      ],
      apis: [
        {
          title: "Size API",
          subtitle:
            "The Button component implements the size prop. The size has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "small",
              c2: 'size="small"',
            },
            {
              c1: "medium",
              c2: 'size="medium"',
            },
            {
              c1: "large",
              c2: 'size="large"',
            },
          ],
        },
        {
          title: "Variant API",
          subtitle:
            "The Button component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "disabled",
              c2: "bool",
              c3: "Disables the button.",
            },
            {
              c1: "href",
              c2: "string",
              c3: "Turns the button into a link.",
            },
            {
              c1: "icon",
              c2: "React.ReactNode",
              c3: "Adds an icon to the left of the button text.",
            },
            {
              c1: "label",
              c2: "string",
              c3: "The label or information of the alert.",
            },
            {
              c1: "onClick",
              c2: "function",
              c3: "Callback function that fires when the button is clicked.",
            },
            {
              c1: "role",
              c2: "string",
              c3: "The role of the button.",
            },
            {
              c1: "size",
              c2: "string",
              c3: "The size of the button.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Card: {
      component: "Card",
      title: "Examples",
      subTitle: "Cards are used to group and display content.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Card",
      examples: [
        {
          components: [
            <Card
              heading="Example"
              imageAlt="Image alt example"
              imageSrc="/images/hero-image.jpg"
              text="lorem ipsum dolor sit amet, consectetur adipiscing elit"
              variant="flat"
              {...colorProps}
            />,

            <Card
              heading="Example"
              imageAlt="Image alt example"
              imageSrc="/images/hero-image.jpg"
              text="lorem ipsum dolor sit amet, consectetur adipiscing elit"
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Card Variants",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "heading",
              c2: "string",
              c3: "The heading of the card.",
            },
            {
              c1: "imageAlt",
              c2: "string",
              c3: "The alt text of the image.",
            },
            {
              c1: "imageSrc",
              c2: "string",
              c3: "The path to the image.",
            },
            {
              c1: "text",
              c2: "string",
              c3: "The text of the card.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Chip: {
      component: "Chip",
      title: "Examples",
      subTitle:
        "Chips are used to help make selections or identify filtered content.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Chip",
      examples: [
        {
          components: [
            <Chip label="Example" variant="flat" {...colorProps} />,
            <Chip label="Example" variant="pressed" {...colorProps} />,
          ],
          heading: "Chip Variants",
        },
        {
          components: [
            <Chip
              icon={<IoCartOutline />}
              label="Example"
              variant="flat"
              {...colorProps}
            />,
            <Chip
              icon={<IoCartOutline />}
              label="Example"
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Chip with Icon",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "icon",
              c2: "React.ReactNode",
              c3: "The optional icon of the chip.",
            },
            {
              c1: "label",
              c2: "string",
              c3: "The text in the chip.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Container: {
      component: "Container",
      title: "Examples",
      subTitle:
        "Containers are used to limit content width and keep things fluid.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Container",
      examples: [
        {
          components: [
            <Container
              children={[
                <div>A div</div>,
                <ul>
                  <li>List Item 1</li>
                  <li>List Item 2</li>
                  <li>List Item 3</li>
                </ul>,
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>,
              ]}
              variant="flat"
              {...colorProps}
            />,
            <Container
              children={[
                <div>A div</div>,
                <ul>
                  <li>List Item 1</li>
                  <li>List Item 2</li>
                  <li>List Item 3</li>
                </ul>,
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>,
              ]}
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Container Variants",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "children",
              c2: "React.ReactNode[]",
              c3: "An array of children of the container.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    "Icon button": {
      component: "IconButton",
      title: "Examples",
      subTitle: "An icon button displaying only an icon with no label.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/IconButton",
      examples: [
        {
          components: [
            <IconButton
              icon={<IoCartOutline />}
              variant="flat"
              size="medium"
              {...colorProps}
            />,
            <IconButton
              icon={<IoCartOutline />}
              variant="pressed"
              size="medium"
              {...colorProps}
            />,
          ],
          heading: "IconButton Variants",
        },
        {
          components: [
            <IconButton
              icon={<IoCartOutline />}
              variant="flat"
              size="small"
              {...colorProps}
            />,
            <IconButton
              icon={<IoCartOutline />}
              variant="flat"
              size="medium"
              {...colorProps}
            />,
            <IconButton
              icon={<IoCartOutline />}
              variant="flat"
              size="large"
              {...colorProps}
            />,
          ],
          heading: "IconButton Sizes",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "icon",
              c2: "React.ReactNode",
              c3: "The icon.",
            },
            {
              c1: "size",
              c2: "string",
              c3: "The size of the icon button.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    List: {
      component: "List",
      title: "Examples",
      subTitle: "Lists are used to display list items.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/List",
      examples: [
        {
          components: [
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
            />,
            <List
              header="List"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              listItems={[
                <p>List item 1</p>,
                <p>List item 2</p>,
                <p>List item 3</p>,
              ]}
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "List Variants",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "header",
              c2: "string",
              c3: "The header of the list.",
            },
            {
              c1: "label",
              c2: "string",
              c3: "The label of the list.",
            },
            {
              c1: "listItems",
              c2: "React.ReactNode[]",
              c3: "	An array of items to put into the list.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Shape: {
      component: "Shape",
      title: "Examples",
      subTitle: "Various shapes for additional neumorphic designs.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Shape",
      examples: [
        {
          components: [
            <Shape
              width={100}
              height={100}
              round={true}
              variant="flat"
              {...colorProps}
            />,
            <Shape
              width={100}
              height={100}
              round={true}
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Shape Variants",
        },
        {
          components: [
            <Shape width={150} height={150} variant="flat" {...colorProps} />,
          ],
          heading: "Square",
        },
        {
          components: [
            <Shape
              width={150}
              height={150}
              round={true}
              variant="flat"
              {...colorProps}
            />,
          ],
          heading: "Circle",
        },
        {
          components: [
            <Shape
              width={50}
              height={50}
              animate={true}
              variant="flat"
              {...colorProps}
            />,
          ],
          heading: "Animated Shape",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Shape component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "width",
              c2: "number",
              c3: "The width of the shape.",
            },
            {
              c1: "height",
              c2: "number",
              c3: "The height of the shape.",
            },
            {
              c1: "round",
              c2: "bool",
              c3: "Determines if the shape is rounded.",
            },
            {
              c1: "animate",
              c2: "bool",
              c3: "Determines if the shape should be animated.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Spinner: {
      component: "Spinner",
      title: "Examples",
      subTitle:
        "Spinners are used to provide a cue that an action is processing.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Spinner",
      examples: [
        {
          components: [
            <Spinner
              complete={false}
              variant="flat"
              spinColor={colorProps.textColor}
              bgColor={colorProps.bgColor}
            />,
            <Spinner
              complete={false}
              variant="pressed"
              spinColor={colorProps.textColor}
              bgColor={colorProps.bgColor}
            />,
          ],
          heading: "Spinner Variants",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "complete",
              c2: "bool",
              c3: "If true, the spinner is removed.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Switch: {
      component: "Switch",
      title: "Examples",
      subTitle: "The switch is an alternative to a checkbox.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Switch",
      examples: [
        {
          components: [
            <Switch
              checked={true}
              onChange={() => console.log("Changed!")}
              variant={"flat"}
              {...colorProps}
            />,
            <Switch
              checked={true}
              onChange={() => console.log("Changed!")}
              variant={"pressed"}
              {...colorProps}
            />,
          ],
          heading: "Switch Variants",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "checked",
              c2: "bool",
              c3: "If true, the switch moves to the on position.",
            },
            {
              c1: "disabled",
              c2: "bool",
              c3: "If true, the switch becomes disabled.",
            },
            {
              c1: "required",
              c2: "bool",
              c3: "If true, the switch becomes required to be checked.",
            },
            {
              c1: "onChange",
              c2: "function",
              c3: "Callback function that fires when the switch is toggled.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the alert.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The text color of the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    "Text field": {
      component: "TextField",
      title: "Examples",
      subTitle: "Textareas are used to create multi-line text inputs.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Spinner",
      examples: [
        {
          components: [
            <TextField
              title="Example"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              variant="flat"
              {...colorProps}
            />,
            <TextField
              title="Example"
              content=""
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "TextField Variants",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "title",
              c2: "string",
              c3: "	The title of the text field.",
            },
            {
              c1: "content",
              c2: "string",
              c3: "The optional content of the text field.",
            },
            {
              c1: "onTextChange",
              c2: "function",
              c3: "	Callback function that fires when text changes in the text field.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the text field.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The color of the text in the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
    Toast: {
      component: "Toast",
      title: "Examples",
      subTitle:
        "The toast component gives users some visual feedback after they perform an action.",
      ghLink:
        "https://github.com/adivrskic/pillow/tree/main/src/components/Toast",
      examples: [
        {
          components: [
            <Toast
              title="This is a toast example."
              duration={30}
              onClose={() => "Closed!"}
              variant="flat"
              {...colorProps}
            />,
            <Toast
              title="This is a toast example."
              duration={30}
              onClose={() => "Closed!"}
              variant="pressed"
              {...colorProps}
            />,
          ],
          heading: "Toast Variants",
        },
      ],
      apis: [
        {
          title: "Variant API",
          subtitle:
            "The Badge component implements the variant prop. The variant is a global prop and has the following options:",
          th: ["Option", "Example"],
          trs: [
            {
              c1: "flat",
              c2: 'variant="flat"',
            },
            {
              c1: "pressed",
              c2: 'variant="pressed"',
            },
          ],
        },
        {
          title: "All Properties",
          th: ["Property", "Type", "Description"],
          trs: [
            {
              c1: "title",
              c2: "string",
              c3: "	The title of the toast.",
            },
            {
              c1: "duration",
              c2: "number",
              c3: "The number of seconds the toast will be active.",
            },
            {
              c1: "onClose",
              c2: "function",
              c3: "	Callback function that fires when toast is closed.",
            },
            {
              c1: "variant",
              c2: "string",
              c3: "The neumorphic variant of the text field.",
            },
            {
              c1: "textColor",
              c2: "string",
              c3: "The color of the text in the component.",
            },
            {
              c1: "bgColor",
              c2: "string",
              c3: "The background color of the component.",
            },
          ],
        },
      ],
    },
  };
};
