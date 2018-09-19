import { convertNameToSlug } from './helpers';
import { Teams } from './types';

export const getProjectsForTeam = (projects, team) =>
  projects.filter(project => project.team === team);

export const buildTeamRoutes = projects => (
  Object.keys(Teams).map((team) => {
    const teamProjects = getProjectsForTeam(projects, team);
    return {
      path: convertNameToSlug(team),
      component: 'src/pages/ProjectPage',
      getData: () => ({
        projects: teamProjects,
      }),
    };
  })
);
