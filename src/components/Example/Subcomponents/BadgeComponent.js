import React from "react";
import { Badge } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";

const BadgeComponent = () => {
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
          <h4>Badge w/ Number</h4>
          <Badge label="9+" variant="flat" {...colorProps} />
          <Badge label="9+" variant="pressed" {...colorProps} />
        </div>
        <div
          style={{
            ["--bg-color"]: `${bgColor}`,
            ["--text-color"]: `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4>Badge w/ Text</h4>
          <Badge label="New!" variant="flat" {...colorProps} />
          <Badge label="New!" variant="pressed" {...colorProps} />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Badge component implements the variant prop. The variant is a
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
                <code>label</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The label or information of the badge.</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The neumorphic variant of the badge.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BadgeComponent;
