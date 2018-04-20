import React, { Component } from 'react';
import Header from '../Header';
import Project from '../Project';
import tmp from '../../img/tmp.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <Project
            isFeatured
            lang="go"
            team="Infrastructure"
            title="Raster"
            desc="Have you ever wondered what your images could look like if it were put through a virtual blender along with a heavy dose of rainbow glitter? Well now you won’t have to wonder—introducing Raster from Postmates."
            img={tmp}
          />
          <Project
            lang="mysql"
            team="Infrastructure"
            title="Entity Store"
            desc="Want to feel superior to other infra engineers? Want to put them down for not using a scalable database solution based on MySQL? Well you’re in luck! We’ve already done the work to belittle our infra team to develop the latest and greatest in database technology."
          />
          <Project
            lang="java"
            team="Frontend"
            title="Project"
            desc="It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time."
          />
          <Project
            lang="swift"
            team="mobile"
            title="Vu-cano"
            desc="I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of both. But this was not the only jamming jeopardy he was exposed to."
          />
          <Project
            lang="ruby"
            team="data"
            title="Project"
            desc="In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything."
          />
        </main>
      </div>
    );
  }
}

export default App;
