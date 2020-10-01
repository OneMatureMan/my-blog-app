import React from 'react';
import PostListItem from '../../components/PostListItem';
import posts from '../fixtures/posts';
import { shallow } from 'enzyme';


test('should render PostListItem component correctly', () => {
    const wrapper = shallow(<PostListItem {...posts[1]} />);
    expect(wrapper).toMatchSnapshot();
})