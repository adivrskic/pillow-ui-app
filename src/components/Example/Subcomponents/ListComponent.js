import React from "react";
import { List } from "@adivrskic/pillow";

const ListComponent = () => {
  return (
    <div className="component">
      <div className="component-container">
        <h3>Examples</h3>
        <div className="component-container__example">
          <h4>List Variants</h4>
          <List
            header="List"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            listItems={[
              <p>List item 1</p>,
              <p>List item 2</p>,
              <p>List item 3</p>,
            ]}
            variant="flat"
          />
          <List
            header="List"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            listItems={[
              <p>List item 1</p>,
              <p>List item 2</p>,
              <p>List item 3</p>,
            ]}
            variant="pressed"
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The List component implements the variant prop. The variant is a
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
              <code>header</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The header of the list.</td>
          </tr>
          <tr>
            <td>
              <code>label</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The label of the list.</td>
          </tr>
          <tr>
            <td>
              <code>listItems</code>
            </td>
            <td>
              <code>React.ReactNode[]</code>
            </td>
            <td>An array of items to put into the list.</td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>The neumorphic variant of the list.</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ListComponent;
