import React from "react";
import { TextField } from "@adivrskic/pillow";

const TextFieldComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Text Field Variants</h4>
          <TextField
            title="Example"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            variant="flat"
          />
          <TextField title="Example" content="" variant="pressed" />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The TextField component implements the variant prop. The variant is
            a global prop and has the following options:
          </p>
          <ul>
            <li>
              flat: <code>variant="flat"</code>
            </li>
            <li>
              pressed: <code>variant="pressed"</code>
            </li>
          </ul>
        </div>

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
              Callback function that fires when text changes in the text field.
            </td>
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
  );
};

export default TextFieldComponent;
