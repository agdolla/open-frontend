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
  kotlin: {
    name: 'Kotlin',
    color: '#EF8E3F',
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
    title: 'Center Slider View',
    description: 'Recentering slider/seek bar widget for android.',
    language: languages.java,
    team: Teams.Android,
    github: 'https://github.com/postmates/centersliderview-android',
  },
  {
    title: 'Cernan',
    description: 'Telemetry aggregation and shipping, last up the ladder.',
    language: languages.rust,
    team: Teams.Infrastructure,
    github: 'https://github.com/postmates/cernan',
  },
  {
    title: 'Ersa',
    description: 'Utilities for Lightning Components in Visualforce',
    language: languages.javaScript,
    team: Teams.Frontend,
    github: 'https://github.com/postmates/salesforce-ersa',
  },
  {
    title: 'ex-stats-tracker',
    description: 'Elixir statsd client.',
    language: languages.elixir,
    team: Teams.Infrastructure,
    github: 'https://github.com/postmates/ex-stats-tracker',
  },
  {
    title: 'ConsulMutEx',
    description: 'An Elixir module for acquiring and releasing locks with Consul and other backends.',
    language: languages.elixir,
    team: Teams.Infrastructure,
    github: 'https://github.com/postmates/consul_mut_ex',
  },
  {
    title: 'Quantiles',
    description: 'This crate is intended to be a collection of approxiate quantile algorithms that provide guarantees around space and computation.',
    language: languages.rust,
    team: Teams.Infrastructure,
    github: 'https://github.com/postmates/quantiles',
  },
  {
    title: 'Hopper',
    description: 'A Rust mpsc with unbounded members in bounded memory.',
    language: languages.rust,
    team: Teams.Infrastructure,
    github: 'https://github.com/postmates/hopper',
  },
];
