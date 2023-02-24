import React from "react";
import { Container } from "@adivrskic/pillow";

const ContainerComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Container Variants</h4>
          <Container
            children={[
              <div>A div</div>,
              <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </ul>,
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>,
            ]}
            variant="flat"
          />
          <Container
            children={[
              <div>A div</div>,
              <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </ul>,
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>,
            ]}
            variant="pressed"
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Container component implements the variant prop. The variant is
            a global prop and has the following options:
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
              <code>children</code>
            </td>
            <td>
              <code>React.ReactNode[]</code>
            </td>
            <td>An array of children of the container.</td>
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

export default ContainerComponent;
