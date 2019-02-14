import * as React from 'react';
import { Root, Routes } from 'react-static';
import injectGlobals from 'style/globals';

injectGlobals();

const App = () => (
  <Root autoScrollToTop={false}>
    <div>
      <Routes />
    </div>
  </Root>
);

export default App;
