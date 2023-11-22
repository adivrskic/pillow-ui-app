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
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Alert
            heading="Error"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="error"
            variant="pressed"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>
        <div className="component-container__example">
          <h4>Warning Alert</h4>
          <Alert
            heading="Warning"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="warning"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Alert
            heading="Warning"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="warning"
            variant="pressed"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>

        <div className="component-container__example">
          <h4>Info Alert</h4>
          <Alert
            heading="Info"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="info"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Alert
            heading="Info"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="info"
            variant="pressed"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>

        <div className="component-container__example">
          <h4>Success Alert</h4>
          <Alert
            heading="Success"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="success"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Alert
            heading="Success"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            severity="success"
            variant="pressed"
            bgColor="#f2f3f7"
            textColor="#323232"
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
          <ul>
            <li>
              error: <code>severity="error"</code>
            </li>
            <li>
              warning: <code>severity="warning"</code>
            </li>
            <li>
              info: <code>severity="info"</code>
            </li>
            <li>
              success: <code>severity="success"</code>
            </li>
          </ul>
        </div>

        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Alert component implements the variant prop. The variant is a
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
