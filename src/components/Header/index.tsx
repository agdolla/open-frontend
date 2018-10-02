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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua....
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
