import * as React from 'react';

interface Props {
  isFeatured: boolean;
  language: string;
  team: string;
  title: string;
  description: string;
  img?: string;
}

class Project extends React.Component<Props> {
  render() {
    const { isFeatured, language, team, title, description, img } = this.props;

    return (
      <div>
        {isFeatured && img && <img src={img} />}
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
  }
}

export default Project;