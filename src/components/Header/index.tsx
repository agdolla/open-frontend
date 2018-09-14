import * as React from 'react';
import Navbar from 'components/Navbar';

import { Wrapper, Content, Title, Description, TextWrapper } from './styles';

const Header = () => (
  <Wrapper>
    <Content>
      <TextWrapper>
        <img src="/images/brandmark.svg" alt="postmates" />
        <Title>Postmates Open Source</Title>
        <Description>
          The monkey-rope is found in all whalers; but it was only in the
          Pequod that the monkey and his holder were ever tied together. This
          improvement...
        </Description>
      </TextWrapper>
      <div>
        <img src="http://placehold.it/300x300" alt="tmp" width="300" height="300" />
      </div>
    </Content>
    <Navbar />
  </Wrapper>
);

export default Header;
