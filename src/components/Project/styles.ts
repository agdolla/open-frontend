import styled from 'react-emotion';
import fonts from 'style/fonts';
import tiemposText from 'style/fonts/tiemposText';
import { Colors } from 'style/variables/palette';

export const ExternalLink = styled.a<{ isFeatured?: boolean }>`
  display: flex;
  background: ${Colors.White};
  transition: box-shadow 0.3s ease;
  ${({ isFeatured }) => (isFeatured ? 'grid-column: 1 / 3;' : '')}

  &:hover {
    box-shadow: 0 10px 24px 0 rgba(63, 86, 181, 0.2);
  }
`;

export const Wrapper = styled.div`
  padding: 32px;
  min-height: 296px;
`;

export const Image = styled.img`
  width: 300px;
  height: 100%;
  margin-top: -8px;
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
