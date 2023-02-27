import React from "react";
import { Spinner } from "@adivrskic/pillow";

const SpinnerComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Spinner Variants</h4>
          <Spinner complete={false} variant="flat" />
          <Spinner complete={false} variant="pressed" />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Spinner component implements the variant prop. The variant is a
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
              <code>complete</code>
            </td>
            <td>
              <code>bool</code>
            </td>
            <td>If false, the spinner is removed.</td>
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

export default SpinnerComponent;
