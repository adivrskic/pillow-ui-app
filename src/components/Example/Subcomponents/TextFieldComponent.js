import React from "react";
import { TextField } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";

const TextFieldComponent = () => {
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
          <h4>Text Field Variants</h4>
          <TextField
            title="Example"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            variant="flat"
            {...colorProps}
          />
          <TextField
            title="Example"
            content=""
            variant="pressed"
            {...colorProps}
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The TextField component implements the variant prop. The variant is
            a global prop and has the following options:
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
                <code>title</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The title of the text field.</td>
            </tr>
            <tr>
              <td>
                <code>content</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The optional content of the text field.</td>
            </tr>
            <tr>
              <td>
                <code>onTextChange</code>
              </td>
              <td>
                <code>function</code>
              </td>
              <td>
                Callback function that fires when text changes in the text
                field.
              </td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The neumorphic variant of the text field.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TextFieldComponent;
