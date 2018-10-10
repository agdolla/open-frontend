import * as React from 'react';
import { shallow } from 'enzyme';
import ProjectPage from '../src/pages/ProjectPage';
import { projects } from '../src/utils/data';

describe('ProjectPage', () => {
  it('renders correctly', () => {
    const component = shallow(<ProjectPage projects={projects} />);
    expect(component).toMatchSnapshot();
  });
});
