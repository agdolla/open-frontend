import * as React from 'react';
import { shallow } from 'enzyme';
import Project from '../src/components/Project';
import { projects } from '../src/utils/data';

describe('Project', () => {
  it('renders correctly', () => {
    const component = shallow(<Project {...projects[0]} />);
    expect(component).toMatchSnapshot();
  });
});
