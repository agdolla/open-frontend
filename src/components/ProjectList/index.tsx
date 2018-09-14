import * as React from 'react';
import Project from 'components/Project';
import { Project as ProjectType } from 'utils/types';

import { List } from './styles';

interface Props {
  projects: ProjectType[];
}

const ProjectList = ({ projects }: Props) => (
  <List>
    {projects.map(p => <Project key={p.title} {...p} />)}
  </List>
);

export default ProjectList;
