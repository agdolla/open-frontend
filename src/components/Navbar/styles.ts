import styled from 'react-emotion';
import { Link } from 'react-static';
import fonts from 'style/fonts';
import { Colors } from 'style/variables/palette';
import { rgba } from 'utils/color';

export const List = styled.ul`
  list-style: none;
  overflow: hidden;
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: -1px;
`;

export const Item = styled.li`
  align-items: center;
  margin-right: 32px;
`;

export const StyledLink = styled(Link)<{ activeRoute?: boolean }>`
  ${fonts.s14.regular};
  display: block;
  padding: 24px 0;
  border-bottom: 1px solid ${({ activeRoute }) =>
    (activeRoute ? Colors.BlueBright : rgba(Colors.BlueBright, 0))};
  color: ${({ activeRoute }) => (activeRoute ? Colors.BlueBright : Colors.BlueMedium)};
  ${({ activeRoute }) => activeRoute && 'font-weight: bold;'}
  transition: color 0.15s ease, border 0.15s ease;

  &:hover {
    color: ${Colors.BlueBright};
    border-bottom: 1px solid ${Colors.BlueBright};
  }
`;
