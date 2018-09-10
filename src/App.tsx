import * as React from 'react';
import { Router, Link } from 'react-static';
import injectGlobals from 'style/globals';

// NOTE: Generated at run time
// eslint-disable-next-line
import Routes from 'react-static-routes';

injectGlobals();

const App = () => (
  <Router>
    <div className="content">
      <Routes />
    </div>
  </Router>
);

export default App;
