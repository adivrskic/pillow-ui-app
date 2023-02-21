import React from "react";
import { Alert } from "@adivrskic/pillow";

const AlertComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Error Alert</h4>
          <Alert
            heading="Error"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="error"
            variant="flat"
          />
          <Alert
            heading="Error"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="error"
            variant="pressed"
          />
        </div>
        <div className="component-container__example">
          <h4>Warning Alert</h4>
          <Alert
            heading="Warning"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="warning"
            variant="flat"
          />
          <Alert
            heading="Warning"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="warning"
            variant="pressed"
          />
        </div>

        <div className="component-container__example">
          <h4>Info Alert</h4>
          <Alert
            heading="Info"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="info"
            variant="flat"
          />
          <Alert
            heading="Info"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="info"
            variant="pressed"
          />
        </div>

        <div className="component-container__example">
          <h4>Success Alert</h4>
          <Alert
            heading="Success"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="success"
            variant="flat"
          />
          <Alert
            heading="Success"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="success"
            variant="pressed"
          />
        </div>
      </div>

      <div className="component-container">
        <h3>Properties</h3>
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
  );
};

export default AlertComponent;
