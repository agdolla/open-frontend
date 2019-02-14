import * as React from 'react';
import { withRouteData } from 'react-static';
import PageMeta from 'components/PageMeta';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import ProjectList from 'components/ProjectList';
import { Project as ProjectType } from 'utils/types';

import { PageContainer } from 'style/elements';

interface Props {
  projects: ProjectType[];
  title: string;
  description: string;
  url: string;
  siteRoot: string;
}

const ProjectPage = ({
  projects = [], title, description, url, siteRoot,
}: Props) => (
  <PageContainer>
    <PageMeta title={title} description={description} url={url} siteRoot={siteRoot} />
    <Header />
    <Navbar />
    <ProjectList projects={projects} />
  </PageContainer>
);

export default withRouteData(ProjectPage);
