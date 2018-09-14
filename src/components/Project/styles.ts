import styled from 'react-emotion';
import fonts from 'style/fonts';
import tiemposText from 'style/fonts/tiemposText';
import { Colors } from 'style/variables/palette';

export const Wrapper = styled.div<{ isFeatured?: boolean }>`
  background: ${Colors.White};
  padding: 32px;
  min-height: 296px;
  ${({ isFeatured }) => isFeatured ? 'grid-column: 1 / 3;' : ''}
`;

export const Content = styled.div`
  ${fonts.s32.regular};
`;

export const Details = styled.div`
  ${fonts.s11.bold};
  text-transform: uppercase;
  color: ${Colors.BlueLight};
  letter-spacing: normal;
`;

export const Language = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

export const Team = styled.span``;

export const Spacer = styled.span`
  padding: 0 4px;
`;

export const Title = styled.h3`
  ${fonts.s32.bold};
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Description = styled.p`
  ${tiemposText.s14.regular};
  margin: 0;
  line-height: 1.71;
  color: ${Colors.BlueText};
`;
