import font from 'style/variables/fonts';
import { css } from 'emotion';

const weights = {
  regular: 400,
  regularItalic: 400,
  mediumItalic: 500,
  semiBold: 600,
  semiBoldItalic: 600,
  bold: 700,
  boldItalic: 700,
  boldCaps: 700,
};

const weightList = [
  'regular',
  'regularItalic',
  'mediumItalic',
  'semiBold',
  'semiBoldItalic',
  'bold',
  'boldItalic',
  'boldCaps',
];

const defaultSpacing = 'initial';

// Matrix of letter spacing to font-size and font-weight
// undefined values will take the default letter-spacing value of 'initial'
const matrix = {
  //  |Regular|RegularItalic|MediumItalic|SemiBold|SemiBoldItalic|Bold|BoldItalic|Bold (Caps)
  12: [0.19, 0.19, -0.10, -0.24, -0.24, -0.24, -0.24, 0.72],
  14: [undefined, undefined, undefined, -0.16, -0.16, -0.36, -0.36, undefined],
  16: [-0.2, 0.2, undefined, -0.28, -0.28, -0.48, -0.48, undefined],
  18: [undefined, undefined, -0.36, -0.36, -0.64, -0.64, -0.64, undefined],
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
    regularItalic?: string;
    mediumItalic?: string;
    semiBold?: string;
    semiBoldItalic?: string;
    bold?: string;
    boldItalic?: string;
    boldCaps?: string;
  };
}

const fonts: Fonts = Object.keys(matrix).reduce(
  (accum, size) => {
    const spacings = matrix[size];
    accum[`s${size}`] = {}; // font-size property is prefixed with 's';

    spacings.forEach((spacing, i) => {
      const weight = weightList[i];
      if (i === 7) {
        // If it's boldCaps we want to uppercase the letters
        accum[`s${size}`][weight] = css`
          font-family: ${font.tiemposText};
          font-size: ${size}px;
          letter-spacing: ${spacing ? `${spacing}px` : defaultSpacing};
          font-weight: ${weights[weight]};
          text-transform: uppercase;
          line-height: ${lineHeights[size] || 'normal'};
        `;
      } else {
        accum[`s${size}`][weight] = css`
          font-family: ${font.tiemposText};
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
