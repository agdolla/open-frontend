import styled from 'react-emotion';
import fonts from 'style/fonts';
import { Colors } from 'style/variables/palette';
import { rgba } from 'utils/color';

export const Wrapper = styled.header`
  border-bottom: 1px solid ${rgba(Colors.BlueMedium, .15)};
`

export const Content = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  ${fonts.s64.bold};
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  ${fonts.s18.regular};
  color: ${Colors.BlueText};
  line-height: 1.56;
`;
