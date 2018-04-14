import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Project extends Component {
  static propTypes = {
    isFeatured: PropTypes.bool,
    lang: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string,
  };

  render() {
    const { isFeatured, lang, team, title, desc, img } = this.props;
    const classname = classnames('project', lang, isFeatured && 'featured');

    return (
      <div className={classname}>
        {isFeatured && img && <img src={img} />}
        <div className="content">
          <h6>
            <span className="lang">{lang}</span>{' '}
            <span className="spacer">&middot;</span>{' '}
            <span className="team">{team}</span>
          </h6>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default Project;
