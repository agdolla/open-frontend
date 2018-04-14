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
    const classname = classnames('project', isFeatured && 'featured');

    return (
      <div className={classname}>
        <h6>
          {lang} &middot; {team}
        </h6>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Project;
