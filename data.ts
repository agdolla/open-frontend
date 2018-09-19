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
    description: 'Have you ever wondered what your images could look like if it were put through a virtual blender along with a heavy dose of rainbow glitter? Well now you won’t have to wonder—introducing Raster from Postmates.',
    language: languages.go,
    team: Teams.Infrastructure,
    img: '/images/tmp.png',
    github: 'https://github.com',
    isFeatured: true,
  },
  {
    title: 'Entity Store',
    description: 'Want to feel superior to other infra engineers? Want to put them down for not using a scalable database solution based on MySQL? Well you’re in luck! We’ve already done the work to belittle our infra team to develop the latest and greatest in database technology.',
    language: languages.mySql,
    team: Teams.Infrastructure,
    github: 'https://github.com',
  },
  {
    title: 'Priority Mail',
    description: "It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time",
    language: languages.javaScript,
    team: Teams.Frontend,
    github: 'https://github.com',
  },
  {
    title: 'Vu-cano',
    description: 'I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of both. But this was not the only jamming jeopardy he was exposed to.',
    language: languages.swift,
    team: Teams.iOS,
    github: 'https://github.com',
  },
  {
    title: 'Android Project',
    description: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything',
    language: languages.java,
    team: Teams.Android,
    github: 'https://github.com',
  },
  {
    title: 'Data Project',
    description: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything',
    language: languages.python,
    team: Teams.Data,
    github: 'https://github.com',
  },
  {
    title: 'Frontend Project',
    description: "It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time",
    language: languages.javaScript,
    team: Teams.Frontend,
    github: 'https://github.com',
  },
  {
    title: 'Infra Project',
    description: "It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time",
    language: languages.rust,
    team: Teams.Infrastructure,
    github: 'https://github.com',
  },
  {
    title: 'Knapsack',
    description: "It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time",
    language: languages.elixir,
    team: Teams.Infrastructure,
    github: 'https://github.com',
  },
  {
    title: 'Android Project 2',
    description: "It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time",
    language: languages.java,
    team: Teams.Android,
    github: 'https://github.com',
  },
  {
    title: 'Data Project 2',
    description: "It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time",
    language: languages.python,
    team: Teams.Data,
    github: 'https://github.com',
  },
];
