import * as React from 'react';
import Navbar from 'components/Navbar';
import brandmark from 'images/brandmark.svg';

import { Wrapper, Content, Title, Description } from './styles';

const Header = () => (
  <Wrapper>
    <Content>
      <div>
        <img src={brandmark} alt="postmates" />
        <Title>Postmates Open Source</Title>
        <Description>
          The monkey-rope is found in all whalers; but it was only in the
          Pequod that the monkey and his holder were ever tied together. This
          improvement...
        </Description>
      </div>
      <div>
        <img src="http://placehold.it/300x300" alt="tmp" width="300" height="300" />
      </div>
    </Content>
    <Navbar />
  </Wrapper>
);

export default Header;
