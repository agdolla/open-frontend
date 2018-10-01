import * as React from 'react';
import Animation from 'components/Animation';

import { Wrapper, Content, Title, Description, TextWrapper, ImageWrapper } from './styles';

const Header = () => (
  <Wrapper>
    <Content>
      <TextWrapper>
        <img src="/images/brandmark.svg" alt="postmates" />
        <Title>Postmates <br /> Open Source</Title>
        <Description>
          The monkey-rope is found in all whalers; but it was only in the
          Pequod that the monkey and his holder were ever tied together. This
          improvement...
        </Description>
      </TextWrapper>
      <ImageWrapper>
        <Animation time={60} />
        <Animation time={20} marginTop={-280} />
      </ImageWrapper>
    </Content>
  </Wrapper>
);

export default Header;
