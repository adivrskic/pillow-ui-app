import React from "react";
import { StateContext } from "../../context/StateProvider";
import "./colorpicker.scss";

const ColorPicker = () => {
  const [{ bgColor, textColor }, dispatch] = React.useContext(StateContext);

  return (
    <div className="pillow-color-picker">
      <div className="pillow-color-picker__container">
        <label htmlFor="bgColor" className="pillow-color-picker__label">
          {bgColor}
        </label>
        <input
          id="bgColor"
          className="pillow-color-picker__input"
          type="color"
          value={bgColor}
          onChange={(e) =>
            dispatch({ type: "SET_BG_COLOR", value: e.target.value })
          }
        />
      </div>
      <div className="pillow-color-picker__container">
        <label htmlFor="textColor" className="pillow-color-picker__label">
          {textColor}
        </label>
        <input
          id="textColor"
          className="pillow-color-picker__input"
          type="color"
          value={textColor}
          onChange={(e) =>
            dispatch({ type: "SET_TEXT_COLOR", value: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default ColorPicker;
