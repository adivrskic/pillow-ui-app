import React from "react";
import { Alert } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";
import { IoLogoGithub } from "react-icons/io5";
const AlertComponent = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  return (
    <div className="component">
      <div className="component-container">
        <p className="component-container__subheading">
          Alerts are used to communicate a state that affects a system, feature
          or page.
        </p>
        <a
          className="link__global"
          href="https://github.com/adivrskic/pillow/tree/main/src/components/Alert"
        >
          <IoLogoGithub />
          View Source Code
        </a>
        <h3>Examples</h3>
        <div
          style={{
            ["--bg-color"]: `${bgColor}`,
            ["--text-color"]: `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4>Error Alert</h4>
          <Alert
            heading="Error"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="error"
            variant="flat"
            {...colorProps}
          />
          <Alert
            heading="Error"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="error"
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
          <h4>Warning Alert</h4>
          <Alert
            heading="Warning"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="warning"
            variant="flat"
            {...colorProps}
          />
          <Alert
            heading="Warning"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="warning"
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
          <h4>Info Alert</h4>
          <Alert
            heading="Info"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="info"
            variant="flat"
            {...colorProps}
          />
          <Alert
            heading="Info"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="info"
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
          <h4>Success Alert</h4>
          <Alert
            heading="Success"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="success"
            variant="flat"
            {...colorProps}
          />
          <Alert
            heading="Success"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="success"
            variant="pressed"
            {...colorProps}
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Severity API</h3>
          <p>
            The Alert component implements the severity prop. The severity has
            the following options:
          </p>
          <table>
            <tr>
              <th>Option</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>error</td>
              <td>
                <code>severity="error"</code>
              </td>
            </tr>
            <tr>
              <td>warning</td>
              <td>
                <code>severity="warning"</code>
              </td>
            </tr>
            <tr>
              <td>info</td>
              <td>
                <code>severity="info"</code>
              </td>
            </tr>
            <tr>
              <td>success</td>
              <td>
                <code>severity="success"</code>
              </td>
            </tr>
          </table>
        </div>

        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Alert component implements the variant prop. The variant is a
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
                <code>heading</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The title of the alert.</td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The label or information of the alert.</td>
            </tr>
            <tr>
              <td>
                <code>severity</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The level of severity of the alert.</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The neumorphic variant of the alert.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
