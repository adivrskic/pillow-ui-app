import React, { useContext } from "react";
import { StateContext } from "./context/StateProvider";
import { hexToRgba, getGradient, getGradientToColor } from "./helpers.js";

const ColorProvider = ({ children }) => {
  const [{ bgColor, textColor }] = useContext(StateContext);
  const bg = hexToRgba(bgColor, 0.25);
  const border = hexToRgba("#4c4c4d", 0.25);
  const gradient = getGradient(bgColor);
  const gradientToColor = getGradientToColor(bgColor);

  return (
    <div
      id="color-provider"
      style={{
        "--page-bg": bg,
        "--border-color": bgColor,
        "--bg-color": bgColor,
        "--text-color": textColor,
        "--site-header-color": "#323232",
        "--site-text-color": "#4c4c4d",
        "--site-bg-color": "#FCFCFE",
        "--site-highlight-color": "#f2f3f7",
        "--site-bg-alt-color": bgColor,
        "--site-accent-color": textColor,
        "--site-border-color": border,
        "--gradient": gradient,
        "--gradient-to-color": gradientToColor,
      }}
    >
      {children}
    </div>
  );
};

export default ColorProvider;
