import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-static';
import { Teams } from 'utils/types';
import { convertNameToSlug } from 'utils/helpers';

import { Nav, List, Item, StyledLink } from './styles';

const ROOT = '/';

const Navbar = ({ location }: RouteComponentProps<object>) => (
  <Nav>
    <List>
      <Item>
        <StyledLink to="/" activeRoute={location.pathname === ROOT}>
          All Projects
        </StyledLink>
      </Item>
      {Object.keys(Teams).map((team) => {
        const teamSlug = convertNameToSlug(team);
        return (
          <Item key={team}>
            <StyledLink to={`/${teamSlug}`} activeRoute={location.pathname === `/${teamSlug}`}>
              {team}
            </StyledLink>
          </Item>
        );
      })}
    </List>
  </Nav>
);

export default withRouter(Navbar);
