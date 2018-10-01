import * as React from 'react';

import { Wrapper, Cube, Front, Back, Top, Bottom, Left, Right } from './styles';

const Animation = ({ time = 60 }) => (
  <Wrapper>
    <Cube time={time}>
      <Front />
      <Back />
      <Top />
      <Bottom />
      <Left />
      <Right />
    </Cube>
  </Wrapper>
);

export default Animation;