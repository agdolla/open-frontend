export enum Meta {
  Title = 'Postmates Open Source',
  Description = 'Open source software at Postmates.',
}

export interface Language {
  name: string; // eslint-disable-line
  color: string;
}

export interface Project {
  title: string;
  description: string;
  language: Language;
  team: string;
  github?: string;
  website?: string;
  img?: string;
  slug?: string;
  isFeatured?: boolean;
}

export enum Teams {
  Frontend = 'Frontend',
  Infrastructure = 'Infrastructure',
  Android = 'Android',
  iOS = 'iOS',
  Data = 'Data',
}
