import * as React from 'react';
import { Router } from 'react-static';
import injectGlobals from 'style/globals';

// NOTE: Generated at run time
// eslint-disable-next-line
import Routes from 'react-static-routes';

injectGlobals();

const App = () => (
  <Router autoScrollToTop={false}>
    <div>
      <Routes />
    </div>
  </Router>
);

export default App;
