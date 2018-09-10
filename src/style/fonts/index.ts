import font from 'style/variables/fonts';
import { css } from 'emotion';

const weights = {
  regular: 400,
  medium: 500,
  bold: 600,
  boldCaps: 600,
};

const weightList = ['regular', 'medium', 'bold', 'boldCaps'];

const defaultSpacing = 'initial';

// Matrix of letter spacing to font-size and font-weight
// undefined values will take the default letter-spacing value of 'initial'
const matrix = {
  //  |   Regular  |   Medium   |   Bold   |  Bold (Caps)  |
  9: [undefined, undefined, -0.6, -0.6],
  10: [undefined, undefined, undefined, 0.56],
  11: [undefined, undefined, undefined, 0.64],
  12: [0.19, -0.10, -0.24, 0.72],
  14: [0.14, -0.16, -0.36, undefined],
  16: [0.14, -0.28, -0.48, undefined],
  18: [undefined, -0.36, -0.64, undefined],
  21: [undefined, -0.56, -0.88, undefined],
  24: [undefined, -0.80, -1.16, undefined],
  28: [undefined, undefined, -1.44, undefined],
  32: [undefined, undefined, -2, undefined],
  36: [undefined, undefined, -2.08, undefined],
  42: [undefined, undefined, -2.40, undefined],
  48: [undefined, undefined, -1.8, undefined],
  72: [undefined, undefined, -3.00, undefined],
};

const lineHeights = {
  1.6: 1.33,
};

/* Generates a map of font-sizes to css classes:
  {
    s10: {
      regular: 'css-1xa12s',
      medium: 'cs-97xaj2'
      ...
    },
    s11: {
      ...
    }
  }
*/

interface Fonts {
  [k: string]: {
    regular?: string;
    medium?: string;
    bold?: string;
    boldCaps?: string;
  };
}

const fonts: Fonts = Object.keys(matrix).reduce(
  (accum, size) => {
    const spacings = matrix[size];
    accum[`s${size}`] = {}; // font-size property is prefixed with 's';

    spacings.forEach((spacing, i) => {
      const weight = weightList[i];
      if (i === 3) {
        // If it's boldCaps we want to uppercase the letters
        accum[`s${size}`][weight] = css`
          font-family: ${font.family};
          font-size: ${size}px;
          letter-spacing: ${spacing ? `${spacing}px` : defaultSpacing};
          font-weight: ${weights[weight]};
          text-transform: uppercase;
          line-height: ${lineHeights[size] || 'normal'};
        `;
      } else {
        accum[`s${size}`][weight] = css`
          font-family: ${font.family};
          font-size: ${size}px;
          letter-spacing: ${spacing ? `${spacing}px` : defaultSpacing};
          font-weight: ${weights[weight]};
          line-height: ${lineHeights[size] || 'normal'};
        `;
      }
    });

    return accum;
  },
  {},
);

export default fonts;
