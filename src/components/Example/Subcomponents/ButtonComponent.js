import React from "react";
import { Button } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";
import { IoLogoGithub } from "react-icons/io5";

const ButtonComponent = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  return (
    <div className="component">
      <div className="component-container">
        <p className="component-container__subheading">
          Buttons are used to trigger actions or events.
        </p>
        <a
          className="link__global"
          href="https://github.com/adivrskic/pillow/tree/main/src/components/Button"
        >
          <IoLogoGithub />
          View Source Code
        </a>
        <h3 className="component-container__heading">Examples</h3>
        <div
          style={{
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">
            Button Variants
          </h4>
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
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">Button Sizes</h4>
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
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">
            Button w/ Icon
          </h4>
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
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">
            Disabled Button
          </h4>
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
          <h3 className="component-container__heading">Size API</h3>
          <p className="component-container__text">
            The Button component implements the size prop. The size has the
            following options:
          </p>
          <table className="component-container__table">
            <tr className="component-container__table-row">
              <th className="component-container__table-header">Option</th>
              <th className="component-container__table-header">Example</th>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">small</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  size="small"
                </code>
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">medium</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  size="medium"
                </code>
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">large</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  size="large"
                </code>
              </td>
            </tr>
          </table>
        </div>
        <div className="component-container__api">
          <h3 className="component-container__heading">Variant API</h3>
          <p className="component-container__text">
            The Button component implements the variant prop. The variant is a
            global prop and has the following options:
          </p>
          <table className="component-container__table">
            <tr className="component-container__table-row">
              <th className="component-container__table-header">Option</th>
              <th className="component-container__table-header">Example</th>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">flat</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  variant="flat"
                </code>
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">pressed</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  variant="pressed"
                </code>
              </td>
            </tr>
          </table>
        </div>

        <div className="component-container__api">
          <h3 className="component-container__heading">All Properties</h3>
          <table className="component-container__table">
            <tr className="component-container__table-row">
              <th className="component-container__table-header">Property</th>
              <th className="component-container__table-header">Type</th>
              <th className="component-container__table-header">Description</th>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  disabled
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  bool
                </code>
              </td>
              <td className="component-container__table-data">
                Disables the button.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  href
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                Turns the button into a link.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  icon
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  React.ReactNode
                </code>
              </td>
              <td className="component-container__table-data">
                Adds an icon to the left of the button text.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  label
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                The label of the button.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  onClick
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  function
                </code>
              </td>
              <td className="component-container__table-data">
                Callback function that fires when the button is clicked.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  role
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                The role of the button.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  size
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                The size of the button.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  variant
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                The neumorphic variant of the button.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
