import React from "react";
import { Card } from "@adivrskic/pillow";

const CardComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>Card Variants</h4>
          <Card
            heading="Example"
            imageAlt="Image alt example"
            imageSrc="/images/hero-image.jpg"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit"
            variant="flat"
          />

          <Card
            heading="Example"
            imageAlt="Image alt example"
            imageSrc="/images/hero-image.jpg"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit"
            variant="pressed"
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Card component implements the variant prop. The variant is a
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
            <td>The heading of the card.</td>
          </tr>
          <tr>
            <td>
              <code>imageAlt</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The alt text of the image.</td>
          </tr>
          <tr>
            <td>
              <code>imageSrc</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The path to the image.</td>
          </tr>
          <tr>
            <td>
              <code>text</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The text of the card.</td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The neumorphic variant of the card.</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CardComponent;
