import * as React from 'react';

import { Wrapper, Cube, Front, Back, Top, Bottom, Left, Right } from './styles';

const Animation = ({ time = 60, marginTop = 0 }) => (
  <Wrapper marginTop={marginTop}>
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
