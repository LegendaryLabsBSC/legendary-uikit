import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#2F70FF",
  primaryBright: "#588cff",
  primaryDark: "#2559cc",
  secondary: "#40c2e9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#DAE9F6",
  backgroundDisabled: "#c4d1dd",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#46557d",
  tertiary: "#EFF4F5",
  text: "#192b5d",
  textDisabled: "#828b93",
  textSubtle: "#46557d",
  borderColor: "#98a3ac",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#40c2e9",
  background: "#000000",
  backgroundDisabled: "#57585c",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#FFFFFF",
  inputSecondary: "#9a9a9d",
  primaryDark: "#0098A1",
  tertiary: "#45464A",
  text: "#FFFFFF",
  textDisabled: "#37383b",
  textSubtle: "#FFFFFF",
  borderColor: "#57585c",
  card: "#0F152A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
