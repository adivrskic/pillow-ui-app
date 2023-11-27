import React from "react";
import { List } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";
import { IoLogoGithub } from "react-icons/io5";

const ListComponent = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  return (
    <div className="component">
      <div className="component-container">
        <p className="component-container__subheading">
          Lists are used to display list items.
        </p>
        <a
          className="link__global"
          href="https://github.com/adivrskic/pillow/tree/main/src/components/List"
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
            {...colorProps}
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
            {...colorProps}
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
    </div>
  );
};

export default ListComponent;
