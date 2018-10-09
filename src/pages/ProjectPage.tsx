import * as React from 'react';
import { withRouteData } from 'react-static';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import ProjectList from 'components/ProjectList';
import { Project as ProjectType } from 'utils/types';

import { PageContainer } from 'style/elements';

interface Props {
  projects: ProjectType[];
}

const ProjectPage = ({ projects = [] }: Props) => (
  <PageContainer>
    <script dangerouslySetInnerHtml={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-27673166-11');
      `,
    }} />
    <Header />
    <Navbar />
    <ProjectList projects={projects} />
  </PageContainer>
);

export default withRouteData(ProjectPage);
