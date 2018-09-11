import * as React from 'react';
import { Project as ProjectType } from 'types';

const Project = ({ isFeatured, language, team, title, description, img }: ProjectType) => (
  <div>
    {isFeatured && img && <img src={img} alt={title} />}
    <div className="content">
      <h6>
        <span className="language">{language}</span>{' '}
        <span className="spacer">&middot;</span>{' '}
        <span className="team">{team}</span>
      </h6>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Project;
