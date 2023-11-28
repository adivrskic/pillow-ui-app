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
          className="component-container__link link__global"
          href="https://github.com/adivrskic/pillow/tree/main/src/components/Alert"
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
          <h4 className="component-container__example-heading">Error Alert</h4>
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
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
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
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">Info Alert</h4>
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
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">
            Success Alert
          </h4>
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
          <h3 className="component-container__heading">Severity API</h3>
          <p className="component-container__text">
            The Alert component implements the severity prop. The severity has
            the following options:
          </p>
          <table className="component-container__table">
            <tr className="component-container__table-row">
              <th className="component-container__table-header">Option</th>
              <th className="component-container__table-header">Example</th>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">error</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  severity="error"
                </code>
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">warning</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  severity="warning"
                </code>
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">info</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  severity="info"
                </code>
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">success</td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  severity="success"
                </code>
              </td>
            </tr>
          </table>
        </div>

        <div className="component-container__api">
          <h3 className="component-container__heading">Variant API</h3>
          <p className="component-container__text">
            The Alert component implements the variant prop. The variant is a
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
                  heading
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                The title of the alert.
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
                The label or information of the alert.
              </td>
            </tr>
            <tr className="component-container__table-row">
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  severity
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                The level of severity of the alert.
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
                The neumorphic variant of the alert.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
