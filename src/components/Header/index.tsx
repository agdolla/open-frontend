import * as React from 'react';
import Animation from 'components/Animation';

import { Wrapper, Content, Title, Description, TextWrapper, ImageWrapper } from './styles';

const Header = () => (
  <Wrapper>
    <Content>
      <TextWrapper>
        <img src="/images/logo.svg" alt="postmates" />
        <Title>Postmates <br /> Open Source</Title>
        <Description>
           We love open-source software. Check out some of the projects we've shared with the community.
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
