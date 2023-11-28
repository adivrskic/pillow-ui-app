import React from "react";
import { Badge } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";
import { IoLogoGithub } from "react-icons/io5";

const BadgeComponent = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  return (
    <div className="component">
      <div className="component-container">
        <p className="component-container__subheading">
          Badges are used to give a quick highlight of an item's status.
        </p>
        <a
          className="component-container__link link__global"
          href="https://github.com/adivrskic/pillow/tree/main/src/components/Badge"
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
          <h4 className="component-container__example-heading">
            Badge w/ Number
          </h4>
          <Badge label="9+" variant="flat" {...colorProps} />
          <Badge label="9+" variant="pressed" {...colorProps} />
        </div>
        <div
          style={{
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">
            Badge w/ Text
          </h4>
          <Badge label="New!" variant="flat" {...colorProps} />
          <Badge label="New!" variant="pressed" {...colorProps} />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3 className="component-container__heading">Variant API</h3>
          <p className="component-container__text">
            The Badge component implements the variant prop. The variant is a
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
                  label
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  string
                </code>
              </td>
              <td className="component-container__table-data">
                The label or information of the badge.
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
                The neumorphic variant of the badge.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BadgeComponent;
