import { convertNameToSlug } from './helpers';
import { Teams, Meta } from './types';

export const getProjectsForTeam = (projects, team) =>
  projects.filter(project => project.team === team);

export const buildTeamRoutes = (projects, siteRoot) => (
  Object.keys(Teams).map((team) => {
    const teamProjects = getProjectsForTeam(projects, team);
    const pathSlug = convertNameToSlug(team);
    return {
      path: pathSlug,
      component: 'src/pages/ProjectPage',
      getData: () => ({
        projects: teamProjects,
        title: `${Meta.Title} - ${team}`,
        description: Meta.Description,
        url: `${siteRoot}/${pathSlug}`,
        siteRoot,
      }),
    };
  })
);
