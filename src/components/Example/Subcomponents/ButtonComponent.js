import React from "react";
import { Button } from "@adivrskic/pillow";
const ButtonComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Button Variants</h4>
          <Button
            role="button"
            label="Click me!"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Button
            role="button"
            label="Click me!"
            variant="pressed"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>

        <div className="component-container__example">
          <h4>Button Sizes</h4>
          <Button
            role="button"
            label="Click me!"
            size="small"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Button
            role="button"
            label="Click me!"
            size="medium"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Button
            role="button"
            label="Click me!"
            size="large"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>

        <div className="component-container__example">
          <h4>Button w/ Icon</h4>
          <Button
            role="button"
            label="Click me!"
            variant="flat"
            icon="info"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>

        <div className="component-container__example">
          <h4>Disabled Button</h4>
          <Button
            role="button"
            label="Click me!"
            variant="flat"
            disabled
            bgColor="#f2f3f7"
            textColor="#323232"
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
          <ul>
            <li>
              small: <code>size="small"</code>
            </li>
            <li>
              medium: <code>size="medium"</code>
            </li>
            <li>
              large: <code>size="large"</code>
            </li>
          </ul>
        </div>
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Button component implements the variant prop. The variant is a
            global prop and has the following options:
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
  );
};

export default ButtonComponent;
