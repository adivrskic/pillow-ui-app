import React from "react";
import { Chip } from "@adivrskic/pillow";
import { IoCar, IoCartOutline } from "react-icons/io5";

const ChipComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Chip Variants</h4>
          <Chip label="Example" variant="flat" />
          <Chip label="Example" variant="pressed" />
        </div>
        <div className="component-container__example">
          <h4>Chip w/ Icon</h4>
          <Chip icon={<IoCartOutline />} label="Example" variant="flat" />
          <Chip icon={<IoCartOutline />} label="Example" variant="pressed" />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Chip component implements the variant prop. The variant is a
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
              <code>icon</code>
            </td>
            <td>
              <code>React.ReactNode</code>
            </td>
            <td>The optional icon of the chip.</td>
          </tr>
          <tr>
            <td>
              <code>label</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The text in the chip.</td>
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

export default ChipComponent;
