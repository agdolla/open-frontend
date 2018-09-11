import * as React from 'react';
import Header from 'components/Header';
import Project from 'components/Project';

import { PageContainer } from 'style/elements';

const HomePage = () => (
  <PageContainer>
    <Header />
    <div>
      <Project
        isFeatured
        language="go"
        team="Infrastructure"
        title="Raster"
        description="Have you ever wondered what your images could look like if it were put through a virtual blender along with a heavy dose of rainbow glitter? Well now you won’t have to wonder—introducing Raster from Postmates."
      />
      <Project
        language="mysql"
        team="Infrastructure"
        title="Entity Store"
        description="Want to feel superior to other infra engineers? Want to put them down for not using a scalable database solution based on MySQL? Well you’re in luck! We’ve already done the work to belittle our infra team to develop the latest and greatest in database technology."
      />
      <Project
        language="java"
        team="Frontend"
        title="Project"
        description="It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time."
      />
      <Project
        language="swift"
        team="mobile"
        title="Vu-cano"
        description="I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of both. But this was not the only jamming jeopardy he was exposed to."
      />
      <Project
        language="ruby"
        team="data"
        title="Project"
        description="In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything."
      />
    </div>
  </PageContainer>
);

export default HomePage;
