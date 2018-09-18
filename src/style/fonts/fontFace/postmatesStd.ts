import { css } from 'react-emotion';

import postmatesStdBoldEot from '../families/PostmatesStd/postmates_std_bold-webfont.eot';
import postmatesStdBoldWoff from '../families/PostmatesStd/postmates_std_bold-webfont.woff';
import postmatesStdBoldWoffDos from '../families/PostmatesStd/postmates_std_bold-webfont.woff2';
import postmatesStdBoldTtf from '../families/PostmatesStd/postmates_std_bold-webfont.ttf';

import postmatesStdMediumEot from '../families/PostmatesStd/postmates_std_medium-webfont.eot';
import postmatesStdMediumWoff from '../families/PostmatesStd/postmates_std_medium-webfont.woff';
import postmatesStdMediumWoffDos from '../families/PostmatesStd/postmates_std_medium-webfont.woff2';
import postmatesStdMediumTtf from '../families/PostmatesStd/postmates_std_medium-webfont.ttf';

import postmatesStdRegularEot from '../families/PostmatesStd/postmates_std_regular-webfont.eot';
import postmatesStdRegularWoff from '../families/PostmatesStd/postmates_std_regular-webfont.woff';
import postmatesStdRegularWoffDos from '../families/PostmatesStd/postmates_std_regular-webfont.woff2';
import postmatesStdRegularTtf from '../families/PostmatesStd/postmates_std_regular-webfont.ttf';

export default css`
  @font-face {
    font-family: 'PostmatesStd';
    src: url(${postmatesStdRegularEot});
    src: url('${postmatesStdRegularEot}#iefix') format('embedded-opentype'),
    url(${postmatesStdRegularWoffDos}) format('woff2'),
    url(${postmatesStdRegularWoff}) format('woff'),
    url(${postmatesStdRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PostmatesStd';
    src: url(${postmatesStdMediumEot});
    src: url('${postmatesStdMediumEot}#iefix') format('embedded-opentype'),
    url(${postmatesStdMediumWoffDos}) format('woff2'),
    url(${postmatesStdMediumWoff}) format('woff'),
    url(${postmatesStdMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'PostmatesStd';
    src: url(${postmatesStdBoldEot});
    src: url('${postmatesStdBoldEot}#iefix') format('embedded-opentype'),
    url(${postmatesStdBoldWoffDos}) format('woff2'),
    url(${postmatesStdBoldWoff}) format('woff'),
    url(${postmatesStdBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
`;
