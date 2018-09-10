import * as React from 'react';
import brandmark from 'images/brandmark.svg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="intro">
          <img className="brandmark" src={brandmark} />
          <h1>Postmates Open Source</h1>
          <p>
            The monkey-rope is found in all whalers; but it was only in the
            Pequod that the monkey and his holder were ever tied together. This
            improvement...
          </p>
        </div>
        <div className="helix">
          <img src="http://placehold.it/300x300" width="300" height="300" />
        </div>
        <nav>
          <ol>
            <li>
              <a href="#" className="active">
                All Topics
              </a>
            </li>
            <li>
              <a href="#">Infrastructure</a>
            </li>
            <li>
              <a href="#">Frontend</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Data</a>
            </li>
          </ol>
        </nav>
      </header>
    );
  }
}

export default Header;