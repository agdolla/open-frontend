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

export const StyledLink = styled(Link)<{ active?: boolean }>`
  ${fonts.s14.regular};
  display: block;
  padding: 24px 0;
  border-bottom: 1px solid ${({ active }) =>
    (active ? Colors.BlueBright : rgba(Colors.BlueBright, 0))};
  color: ${({ active }) => (active ? Colors.BlueBright : Colors.BlueMedium)};
  ${({ active }) => active && 'font-weight: bold;'}
  transition: color 0.15s ease, border 0.15s ease;

  &:hover {
    color: ${Colors.BlueBright};
    border-bottom: 1px solid ${Colors.BlueBright};
  }
`;
