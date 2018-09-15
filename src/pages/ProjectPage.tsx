import * as React from 'react';
import { withRouteData } from 'react-static';
import Header from 'components/Header';
import ProjectList from 'components/ProjectList';
import { Project as ProjectType } from 'utils/types';

import { PageContainer } from 'style/elements';

interface Props {
  projects: ProjectType[];
}

const ProjectPage = ({ projects = [] }: Props) => (
  <PageContainer>
    <Header />
    <ProjectList projects={projects} />
  </PageContainer>
);

export default withRouteData(ProjectPage);
