import styled from 'react-emotion';
import fonts from 'style/fonts';
import { Colors } from 'style/variables/palette';
import { below } from 'style/mixins/breakpoints';
import { tablet } from 'style/variables/breakpoints';
import { gutter, maxContentWidth } from 'style/mixins/spacing';

export const Wrapper = styled.div`
  ${gutter};
  ${maxContentWidth};
`;

export const Content = styled.div`
  display: flex;
  padding-bottom: 80px;

  ${below(tablet)} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  ${fonts.s72.bold};
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  ${fonts.s14.regular};
  color: ${Colors.Black};
  line-height: 1.56;
  padding-right: 40px;
`;

export const TextWrapper = styled.div`
  padding-right: 12px;

  ${below(tablet)} {
    padding-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 600px;
  position: relative;

  ${below(tablet)} {
    text-align: center;
    margin-top: 28px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;
