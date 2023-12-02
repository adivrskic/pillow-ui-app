import React from "react";
import { StateContext } from "../../context/StateProvider";
import { IoLogoGithub } from "react-icons/io5";

const Component = ({ config }) => {
  const [{ bgColor, textColor }] = React.useContext(StateContext);

  // const colorProps = {
  //   bgColor,
  //   textColor,
  // };

  return (
    <div className="component">
      <h2 className="pillow-example__content-header">{config?.component}</h2>
      <div className="component-container">
        <p className="component-container__subheading">{config?.subTitle}</p>
        <a
          className="component-container__link link__global"
          href={config?.ghLink}
        >
          <IoLogoGithub />
          View Source Code
        </a>
        <h3 className="component-container__heading">{config?.title}</h3>
        {config?.examples.map((component, i) => (
          <div
            style={{
              "--bg-color": `${bgColor}`,
              "--text-color": `${textColor}`,
            }}
            className="component-container__example"
          >
            <h4 className="component-container__example-heading">
              {component.heading}
            </h4>
            {component.components}
          </div>
        ))}
      </div>

      <div className="component-container">
        {config?.apis.map((api, i) => (
          <div className="component-container__api">
            <h3 className="component-container__heading">{api.title}</h3>
            <p className="component-container__text">{api?.subtitle}</p>
            <table className="component-container__table">
              <tr className="component-container__table-row">
                {api.th.map((th) => (
                  <th className="component-container__table-header">{th}</th>
                ))}
              </tr>
              {api.trs.map((tr, i) => (
                <tr className="component-container__table-row">
                  <td className="component-container__table-data">{tr.c1}</td>
                  <td className="component-container__table-data">
                    <code className="component-container__table-data--code">
                      {tr.c2}
                    </code>
                  </td>
                  {tr.c3 && (
                    <td className="component-container__table-data">
                      <code className="component-container__table-data--code">
                        {tr.c3}
                      </code>
                    </td>
                  )}
                </tr>
              ))}
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
