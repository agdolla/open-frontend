import * as React from 'react';
import { Link } from 'react-static';
import { teams } from 'data';

import { List, Item, StyledLink } from './styles';

const Navbar = () => (
  <nav>
    <List>
      <Item>
        <StyledLink to="/" active>
          All Topics
        </StyledLink>
      </Item>
      {Object.values(teams).map(team => (
        <Item key={team}>
          <StyledLink to={`/${team.toLowerCase()}`}>{team}</StyledLink>
        </Item>
      ))}
    </List>
  </nav>
);

export default Navbar;
