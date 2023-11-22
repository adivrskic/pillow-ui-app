import React from "react";
import { Badge } from "@adivrskic/pillow";

const BadgeComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Badge w/ Number</h4>
          <Badge
            label="9+"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Badge
            label="9+"
            variant="pressed"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>
        <div className="component-container__example">
          <h4>Badge w/ Text</h4>
          <Badge
            label="New!"
            variant="flat"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
          <Badge
            label="New!"
            variant="pressed"
            bgColor="#f2f3f7"
            textColor="#323232"
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Badge component implements the variant prop. The variant is a
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
              <code>label</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The label or information of the badge.</td>
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

export default BadgeComponent;
