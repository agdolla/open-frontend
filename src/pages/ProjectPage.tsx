import * as React from 'react';
import { withRouteData } from 'react-static';
import Header from 'components/Header';
import Project from 'components/Project';
import { Project as ProjectType } from 'utils/types';

import { PageContainer } from 'style/elements';

interface Props {
  projects: ProjectType[];
}

const ProjectPage = ({ projects }: Props) => (
  <PageContainer>
    <Header />
    <div>
      {projects.map(p => <Project key={p.title}  {...p} />)}
    </div>
  </PageContainer>
);

export default withRouteData(ProjectPage)
