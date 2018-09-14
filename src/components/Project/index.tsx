import * as React from 'react';
import { Project as ProjectType } from 'utils/types';

import {
  ExternalLink,
  Wrapper,
  Image,
  Content,
  Details,
  Language,
  Team,
  Spacer,
  Title,
  Description,
} from './styles';

const Project = ({
  isFeatured,
  language,
  team,
  title,
  description,
  img,
  website,
  github,
}: ProjectType) => {
  const link = website || github;
  return (
    <ExternalLink href={link} isFeatured={isFeatured}>
      <Wrapper>
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
      {isFeatured && img && <Image src={img} alt={title} />}
    </ExternalLink>
  );
}

export default Project;
