import { Project, Language, Teams } from './src/utils/types';

export const languages: Record<string, Language> = {
  go: {
    name: 'Go',
    color: '#001DFF',
  },
  mySql: {
    name: 'MySQL',
    color: '#038FEF',
  },
  java: {
    name: 'Java',
    color: '#A5C845',
  },
  swift: {
    name: 'Swift',
    color: '#FB8B39',
  },
  javaScript: {
    name: 'JavaScript',
    color: '#EFD427',
  },
  python: {
    name: 'Python',
    color: '#3A79AC',
  },
  rust: {
    name: 'Rust',
    color: '#814C21',
  },
  elixir: {
    name: 'Elixir',
    color: '#E72619',
  },
};

export const projects: Project[] = [
  {
    title: 'Raster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    language: languages.go,
    team: Teams.Infrastructure,
    img: '/images/tmp.png',
    github: 'https://github.com',
    isFeatured: true,
  },
  {
    title: 'Entity Store',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    language: languages.mySql,
    team: Teams.Infrastructure,
    github: 'https://github.com',
  },
  {
    title: 'Priority Mail',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    language: languages.javaScript,
    team: Teams.Frontend,
    github: 'https://github.com',
  },
  {
    title: 'iOS Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    language: languages.swift,
    team: Teams.iOS,
    github: 'https://github.com',
  },
  {
    title: 'Android Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    language: languages.java,
    team: Teams.Android,
    github: 'https://github.com',
  },
  {
    title: 'Data Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    language: languages.python,
    team: Teams.Data,
    github: 'https://github.com',
  },
  {
    title: 'Frontend Project',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    language: languages.javaScript,
    team: Teams.Frontend,
    github: 'https://github.com',
  },
  {
    title: 'Infra Project',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    language: languages.rust,
    team: Teams.Infrastructure,
    github: 'https://github.com',
  },
  {
    title: 'Knapsack',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    language: languages.elixir,
    team: Teams.Infrastructure,
    github: 'https://github.com',
  },
  {
    title: 'Android Project 2',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    language: languages.java,
    team: Teams.Android,
    github: 'https://github.com',
  },
  {
    title: 'Data Project 2',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    language: languages.python,
    team: Teams.Data,
    github: 'https://github.com',
  },
];
