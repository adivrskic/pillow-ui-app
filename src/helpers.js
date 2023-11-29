export const getGradient = (fromColor) => {
  const rgb = [
    fromColor.substring(1, 3),
    fromColor.substring(3, 5),
    fromColor.substring(5, 7),
  ];
  const toColor = `rgb(${rgb.map((c) => parseInt(c, 16) * 1.5).join()})`;
  return `linear-gradient(to right, ${fromColor}, ${toColor})`;
};

export const getGradientToColor = (fromColor) => {
  const rgb = [
    fromColor.substring(1, 3),
    fromColor.substring(3, 5),
    fromColor.substring(5, 7),
  ];
  return `rgb(${rgb.map((c) => parseInt(c, 16) * 1.5).join()})`;
};

export const hexToRgba = (hex, alpha) => {
  let c = hex.substring(1).split("");

  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = "0x" + c.join("");
  return (
    "rgba(" +
    [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
    `,${alpha})`
  );
};

export const toKebabCase = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};
