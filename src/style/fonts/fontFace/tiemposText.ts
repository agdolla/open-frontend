import { css } from 'react-emotion';

import tiemposTextBold from '../families/Tiempos/TiemposText-Bold.otf';
import tiemposTextBoldItalic from '../families/Tiempos/TiemposText-BoldItalic.otf';
import tiemposTextMediumItalic from '../families/Tiempos/TiemposText-MediumItalic.otf';
import tiemposTextRegular from '../families/Tiempos/TiemposText-Regular.otf';
import tiemposTextRegularItalic from '../families/Tiempos/TiemposText-RegularItalic.otf';
import tiemposTextSemibold from '../families/Tiempos/TiemposText-Semibold.otf';
import tiemposTextSemiboldItalic from '../families/Tiempos/TiemposText-SemiboldItalic.otf';

export default css`
  @font-face {
    font-family: 'TiemposText';
    src: url(${tiemposTextRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'TiemposText';
    src: url(${tiemposTextRegularItalic}) format('opentype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'TiemposText';
    src: url(${tiemposTextMediumItalic}) format('opentype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'TiemposText';
    src: url(${tiemposTextSemibold}) format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'TiemposText';
    src: url(${tiemposTextSemiboldItalic}) format('opentype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'TiemposText';
    src: url(${tiemposTextBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'TiemposText';
    src: url(${tiemposTextBoldItalic}) format('opentype');
    font-weight: 700;
    font-style: italic;
  }
`;
