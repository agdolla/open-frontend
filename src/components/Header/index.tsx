import * as React from 'react';

import { Wrapper, Content, Title, Description, TextWrapper, ImageWrapper } from './styles';

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
      <ImageWrapper>
        <img src="http://placehold.it/300x300" alt="tmp" width="300" height="300" />
      </ImageWrapper>
    </Content>
  </Wrapper>
);

export default Header;
