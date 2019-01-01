import styled from 'react-emotion';
import fonts from 'style/fonts';
import { Colors } from 'style/variables/palette';
import { below } from 'style/mixins/breakpoints';
import { tablet } from 'style/variables/breakpoints';

export const ExternalLink = styled.a<{ isFeatured?: boolean }>`
  display: flex;
  background: ${Colors.White};
  transition: border 0.2s ease;
  ${({ isFeatured }) => (isFeatured ? 'grid-column: 1 / 3;' : '')}
  border: 8px solid ${Colors.LightGrey};

  &:hover {
    border: 8px solid ${Colors.HighlighterYellow};
  }

  ${below(tablet)} {
    margin-bottom: 8px;
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

  ${below(tablet)} {
    display: none;
  }
`;

export const Content = styled.div`
  ${fonts.s32.regular};
`;

export const Details = styled.div`
  ${fonts.s11.bold};
  text-transform: uppercase;
  color: ${Colors.DarkGreyMedium};
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
  ${fonts.s18.regular};
  margin: 0;
  line-height: 1.56;
  color: ${Colors.DarkGreyMedium};
`;
