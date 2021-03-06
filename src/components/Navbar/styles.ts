import styled from 'react-emotion';
import { Link } from '@reach/router';
import fonts from 'style/fonts';
import { Colors } from 'style/variables/palette';
import { rgba } from 'utils/color';
import { maxContentWidth } from 'style/mixins/spacing';
import { below } from 'style/mixins/breakpoints';
import { tablet, desktop } from 'style/variables/breakpoints';
import spacing from 'style/variables/spacing';

// TODO: Add sticky and update styles if applied
// https://developers.google.com/web/updates/2017/09/sticky-headers
export const Nav = styled.nav`
  ${maxContentWidth};
  border-bottom: 1px solid ${rgba(Colors.LightGrey, 0.5)};

  ${below(desktop)} {
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
  }

  ${below(tablet)} {
    padding-left: ${spacing.sm};
    padding-right: ${spacing.sm};
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: -1px;
  overflow-x: scroll;
`;

export const Item = styled.li`
  align-items: center;
  margin-right: 32px;
  white-space: nowrap;
`;

export const StyledLink = styled(Link)<{ activeRoute?: boolean }>`
  ${fonts.s14.regular};
  display: block;
  padding-bottom: 12px;
  border-bottom:
    ${({ activeRoute }) => (activeRoute ? '4px' : '1px')} solid
    ${({ activeRoute }) => (activeRoute ? Colors.HighlighterYellow : rgba(Colors.Black, 0))};
  color: ${({ activeRoute }) => (activeRoute ? Colors.Black : Colors.DarkGreyMedium)};
  ${({ activeRoute }) => activeRoute && 'font-weight: bold;'}
  transition: color 0.15s ease, border 0.15s ease;
  line-height: 1.5;

  &:hover {
    color: ${Colors.Black};
    border-bottom: 4px solid ${Colors.HighlighterYellow};
  }
`;
