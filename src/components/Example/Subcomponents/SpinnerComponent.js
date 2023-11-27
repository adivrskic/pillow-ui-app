import React from "react";
import { Spinner } from "@adivrskic/pillow";
import { StateContext } from "../../../context/StateProvider";
import { IoLogoGithub } from "react-icons/io5";

const SpinnerComponent = () => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  const colorProps = {
    bgColor,
    textColor,
  };
  return (
    <div className="component">
      <div className="component-container">
        <p className="component-container__subheading">
          Spinners are used to provide a cue that an action is processing.
        </p>
        <a
          className="link__global"
          href="https://github.com/adivrskic/pillow/tree/main/src/components/Spinner"
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
          <h4>Spinner Variants</h4>
          <Spinner
            complete={false}
            variant="flat"
            bgColor={colorProps.bgColor}
          />
          <Spinner
            complete={false}
            variant="pressed"
            bgColor={colorProps.bgColor}
          />
        </div>
      </div>

      <div className="component-container">
        <div className="component-container__api">
          <h3>Variant API</h3>
          <p>
            The Spinner component implements the variant prop. The variant is a
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
                <code>complete</code>
              </td>
              <td>
                <code>bool</code>
              </td>
              <td>If true, the spinner is removed.</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>The neumorphic variant of the spinner.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpinnerComponent;
