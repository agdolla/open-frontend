import * as React from 'react';
import { shallow } from 'enzyme';
import ProjectList from '../src/components/ProjectList';
import { projects } from '../src/utils/data';

describe('ProjectList', () => {
  it('renders correctly', () => {
    const component = shallow(<ProjectList projects={projects} />);
    expect(component).toMatchSnapshot();
  });
});
