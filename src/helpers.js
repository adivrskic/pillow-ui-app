import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const getGradientColor = (color) => {
  const rgb = [
    color.substring(1, 3),
    color.substring(3, 5),
    color.substring(5, 7),
  ];
  return `rgb(${rgb.map((c) => parseInt(c, 16) * 1.5).join()})`;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
};
