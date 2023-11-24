import React from "react";
import { Chip } from "@adivrskic/pillow";
import { IoCartOutline } from "react-icons/io5";
import { StateContext } from "../../../context/StateProvider";

const ChipComponent = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div
          style={{
            ["--bg-color"]: `${bgColor}`,
            ["--text-color"]: `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4>Chip Variants</h4>
          <Chip label="Example" variant="flat" {...colorProps} />
          <Chip label="Example" variant="pressed" {...colorProps} />
        </div>
        <div
          style={{
            ["--bg-color"]: `${bgColor}`,
            ["--text-color"]: `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4>Chip w/ Icon</h4>
          <Chip
            icon={<IoCartOutline />}
            label="Example"
            variant="flat"
            {...colorProps}
          />
          <Chip
            icon={<IoCartOutline />}
            label="Example"
            variant="pressed"
            {...colorProps}
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Chip component implements the variant prop. The variant is a
            global prop and has the following options:
          </p>
          <table>
            <tr>
              <th>Option</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>flat</td>
              <td>
                <code>variant="flat"</code>
              </td>
            </tr>
            <tr>
              <td>pressed</td>
              <td>
                <code>variant="pressed"</code>
              </td>
            </tr>
          </table>
        </div>

        <div className="component-container__api">
          <h3>All Properties</h3>
          <table>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                <code>icon</code>
              </td>
              <td>
                <code>React.ReactNode</code>
              </td>
              <td>The optional icon of the chip.</td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The text in the chip.</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The neumorphic variant of the chip.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChipComponent;
