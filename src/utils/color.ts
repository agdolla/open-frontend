const hashSignRegExp = /^#/;

const parseToRgb = (color: string) => {
  const hex = color.replace(hashSignRegExp, '');

  const factor = hex.length / 3;
  const repeat = 3 - factor;

  const r = parseInt(hex.slice(0, 1 * factor).repeat(repeat), 16);
  const g = parseInt(hex.slice(1 * factor, 2 * factor).repeat(repeat), 16);
  const b = parseInt(hex.slice(2 * factor, 3 * factor).repeat(repeat), 16);

  return [r, g, b];
};

const toZeroOneRange = (eightBitValue: number) => eightBitValue / 255;
const toRelativeLuminance = (channel: number) =>
  (channel <= 0.03928 ? (channel / 12.92) : ((channel + 0.055) / 1.055) ** 2.4);

// https://www.w3.org/TR/WCAG20/#relativeluminancedef
const getLuminance = (color: string) => {
  const [r, g, b] = parseToRgb(color).map(toZeroOneRange).map(toRelativeLuminance);

  return (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
};

export const rgba = (color: string, alpha?: number) => {
  const [r, g, b] = parseToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha !== undefined ? alpha : 1})`;
};

export const isDark = (color: string) => (getLuminance(color) <= 0.179);
