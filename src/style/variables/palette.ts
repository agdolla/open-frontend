import { isDark, rgba } from 'utils/color';

export type Color = string;

export enum Colors {
  Black = '#000',
  White = '#fff',
  DarkGrey = '#f7f8fa',
  Text = '#2D3138',
  LightText = '#8F95A3',
  FaintText = '#B4B8C1',
  Outline = '#D9DBE0',
  LightOutline = '#efefef',
  MediumGrey = '#ecedef',
  Base = '#f7f7f8',
  Hover = '#fafafa',
  Cta = '#00CC99',
  Error = '#DD3300',
  Warning = '#FED028',
  HeaderPink = '#F4DCDC',
  HeaderOrange = '#F5E7D8',
  HeaderBlue = '#DDEEF7',
  WarningPeach = '#FF8771',
  Yellow = '#FFFD3C',
  LightBlue = '#F4F5FB',
  BlueText = '#4F65BE',
  BlueBright = '#0C14F0',
  BlueMedium = '#5F73C6',
}

function readableColor(bgColor: Color) {
  return isDark(bgColor) ? Colors.White : Colors.Black;
}

function getForeground(bgColor: Color) {
  const color = readableColor(bgColor);
  if (color === Colors.White) {
    return color;
  }
  return Colors.Text;
}

function getPlaceholder(bgColor: Color) {
  return {
    [Colors.White]: rgba(Colors.White, 0.5),
    [Colors.Black]: rgba(Colors.Text, 0.5),
  }[readableColor(bgColor)];
}

function getCursor(bgColor: Color) {
  return {
    [Colors.White]: Colors.Cta,
    [Colors.Black]: Colors.Black,
  }[readableColor(bgColor)];
}

function getSecondaryText(bgColor: Color) {
  return {
    [Colors.White]: Colors.White,
    [Colors.Black]: Colors.LightText,
  }[readableColor(bgColor)];
}

const generateTheme = (bgColor: Color = Colors.White): Dictionary<Color> => ({
  background: bgColor,
  foreground: getForeground(bgColor),
  placeholder: getPlaceholder(bgColor),
  cursor: getCursor(bgColor),
  secondaryText: getSecondaryText(bgColor),
  ...Colors,
});

export default {
  generateTheme,
  Colors,
};
