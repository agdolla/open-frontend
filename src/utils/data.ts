import { Project, Language, Teams } from './types';

export const languages: Record<string, Language> = {
  ruby: {
    name: 'Ruby',
    color: '#E72619'
  },
  go: {
    name: 'Go',
    color: '#001DFF'
  },
  mySql: {
    name: 'MySQL',
    color: '#038FEF'
  },
  java: {
    name: 'Java',
    color: '#814C21'
  },
  swift: {
    name: 'Swift',
    color: '#FB8B39'
  },
  javaScript: {
    name: 'JavaScript',
    color: '#F2DD57'
  },
}

export const projects: Project[] = [
  {
    title: 'Raster',
    description: 'Have you ever wondered what your images could look like if it were put through a virtual blender along with a heavy dose of rainbow glitter? Well now you won’t have to wonder—introducing Raster from Postmates.',
    language: languages.go,
    team: Teams.Infrastructure,
    img: '',
    github: '',
    isFeatured: true,
  },
];
