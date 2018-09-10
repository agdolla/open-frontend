import { css } from 'emotion';
import { injectGlobal } from 'react-emotion';
import emotionNormalize from 'emotion-normalize';
import { fonts, palette } from 'style/variables';
import fontMatrix from 'style/fonts';
import fontFace from 'style/fonts/fontFace/postmatesStd';

const globalStyles = css`
  ${emotionNormalize};
  ${fontFace};
  *, *::after, *::before {
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${palette.Colors.Text};
    color: #fff;
  }

  *:focus {
    outline: none;
  }

  html {
    color: ${palette.Colors.Text};
    font-family: ${fonts.family}, Helvetica Neue, Helvetica;
    font-size: 10px;
    height: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    /*
    font-weight, size, spacing come from matrix defined in style/fonts,
    however, emotion does not allow composing with nested selectors */
    ${fontMatrix.s16.regular};
    background-color: ${palette.Colors.White};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  textarea,
  input {
    border: 0;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }`;

export default () => injectGlobal`${globalStyles};`;
