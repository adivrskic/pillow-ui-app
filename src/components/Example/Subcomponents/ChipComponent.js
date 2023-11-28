import React from "react";
import { Chip } from "@adivrskic/pillow";
import { IoCartOutline } from "react-icons/io5";
import { StateContext } from "../../../context/StateProvider";
import { IoLogoGithub } from "react-icons/io5";

const ChipComponent = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  return (
    <div className="component">
      <div className="component-container">
        <p className="component-container__subheading">
          Chips are used to help make selections or identify filtered content.
        </p>
        <a
          className="link__global"
          href="https://github.com/adivrskic/pillow/tree/main/src/components/Chip"
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
            Chip Variants
          </h4>
          <Chip label="Example" variant="flat" {...colorProps} />
          <Chip label="Example" variant="pressed" {...colorProps} />
        </div>
        <div
          style={{
            "--bg-color": `${bgColor}`,
            "--text-color": `${textColor}`,
          }}
          className="component-container__example"
        >
          <h4 className="component-container__example-heading">Chip w/ Icon</h4>
          <Chip
            icon={<IoCartOutline />}
            label="Example"
            variant="flat"
            {...colorProps}
          />
          <Chip
            icon={<IoCartOutline />}
            label="Example"
            variant="pressed"
            {...colorProps}
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3 className="component-container__heading">Variant API</h3>
          <p className="component-container__text">
            The Chip component implements the variant prop. The variant is a
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
                  icon
                </code>
              </td>
              <td className="component-container__table-data">
                <code className="component-container__table-data--code">
                  React.ReactNode
                </code>
              </td>
              <td className="component-container__table-data">
                The optional icon of the chip.
              </td>
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
                The text in the chip.
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
                The neumorphic variant of the chip.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChipComponent;
