import React from "react";
import { Button } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";

const ButtonComponent = () => {
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
          <h4>Button Variants</h4>
          <Button
            role="button"
            label="Click me!"
            variant="flat"
            {...colorProps}
          />
          <Button
            role="button"
            label="Click me!"
            variant="pressed"
            {...colorProps}
          />
        </div>

        <div
          style={{
            ["--bg-color"]: `${bgColor}`,
            ["--text-color"]: `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4>Button Sizes</h4>
          <Button
            role="button"
            label="Click me!"
            size="small"
            variant="flat"
            {...colorProps}
          />
          <Button
            role="button"
            label="Click me!"
            size="medium"
            variant="flat"
            {...colorProps}
          />
          <Button
            role="button"
            label="Click me!"
            size="large"
            variant="flat"
            {...colorProps}
          />
        </div>

        <div
          style={{
            ["--bg-color"]: `${bgColor}`,
            ["--text-color"]: `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4>Button w/ Icon</h4>
          <Button
            role="button"
            label="Click me!"
            variant="flat"
            icon="info"
            {...colorProps}
          />
        </div>

        <div
          style={{
            ["--bg-color"]: `${bgColor}`,
            ["--text-color"]: `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4>Disabled Button</h4>
          <Button
            role="button"
            label="Click me!"
            variant="flat"
            disabled
            {...colorProps}
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Size API</h3>
          <p>
            The Button component implements the size prop. The size has the
            following options:
          </p>
          <table>
            <tr>
              <th>Option</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>small</td>
              <td>
                <code>size="small"</code>
              </td>
            </tr>
            <tr>
              <td>medium</td>
              <td>
                <code>size="medium"</code>
              </td>
            </tr>
            <tr>
              <td>large</td>
              <td>
                <code>size="large"</code>
              </td>
            </tr>
          </table>
        </div>
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Button component implements the variant prop. The variant is a
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
                <code>disabled</code>
              </td>
              <td>
                <code>bool</code>
              </td>
              <td>Disables the button.</td>
            </tr>
            <tr>
              <td>
                <code>href</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>Turns the button into a link.</td>
            </tr>
            <tr>
              <td>
                <code>icon</code>
              </td>
              <td>
                <code>React.ReactNode</code>
              </td>
              <td>Adds an icon to the left of the button text.</td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The label of the button.</td>
            </tr>
            <tr>
              <td>
                <code>onClick</code>
              </td>
              <td>
                <code>function</code>
              </td>
              <td>Callback function that fires when the button is clicked.</td>
            </tr>
            <tr>
              <td>
                <code>role</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The role of the button.</td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The size of the button.</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The neumorphic variant of the button.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
