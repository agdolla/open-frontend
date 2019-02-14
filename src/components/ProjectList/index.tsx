import * as React from 'react';
import Project from 'components/Project';
import { Project as ProjectType } from 'utils/types';

import { Wrapper, List } from './styles';

interface Props {
  projects: ProjectType[];
}

const ProjectList = ({ projects }: Props) => (
  <Wrapper>
    <List>
      {projects.map((p) => <Project key={p.title} {...p} />)}
    </List>
  </Wrapper>
);

export default ProjectList;
