import * as React from 'react';
import { Project as ProjectType } from 'utils/types';

import {
  Wrapper,
  Content,
  Details,
  Language,
  Team,
  Spacer,
  Title,
  Description,
} from './styles';

const Project = ({ isFeatured, language, team, title, description, img }: ProjectType) => (
  <Wrapper>
    {isFeatured && img && <img src={img} alt={title} />}
    <Content>
      <Details>
        <Language color={language.color}>{language.name}</Language>{' '}
        <Spacer>&middot;</Spacer>{' '}
        <Team>{team}</Team>
      </Details>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Content>
  </Wrapper>
);

export default Project;
