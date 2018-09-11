import styled, { css } from 'react-emotion';
import { mobile, tablet, desktop } from 'style/variables/breakpoints';
import { above, Breakpoint } from 'style/mixins/breakpoints';
import spacing from 'style/variables/spacing';

const enum GUTTER_TYPES {
  PADDING = 'padding',
  MARGIN = 'margin',
}

const getGutter = (bp: Breakpoint = desktop, type = GUTTER_TYPES.PADDING) => {
  if (bp === mobile) {
    return css`
      ${type}-left: ${spacing.sm};
      ${type}-right: ${spacing.sm};
    `;
  }
  if (bp === tablet) {
    return css`
      ${type}-left: ${spacing.md};
      ${type}-right: ${spacing.md};
    `;
  }
  return css`
    ${type}-left: ${spacing.lg};
    ${type}-right: ${spacing.lg};
  `;
};

export const gutter = css`
  ${getGutter(mobile)};

  ${above(mobile)} {
    ${getGutter(tablet)};
  }

  ${above(tablet)} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const responsivePadding = css`
  padding: ${spacing.sm};

  ${above(mobile)} {
    padding: ${spacing.md};
  }

  ${above(tablet)} {
    padding: ${spacing.lg};
  }
`;

export const maxContentWidth = css`
  max-width: 1080px;
  width: 100%;
`;
