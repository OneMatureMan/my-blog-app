import React from 'react';
import { shallow } from 'enzyme';
import { PostList } from '../../components/PostList';
import posts from '../fixtures/posts';


test('Should render Post list component without posts', () => {
    const wrapper = shallow(<PostList posts={[]}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('PostListItem').length).toBeFalsy();
});


test('Should render Post list component with posts', () => {
    const wrapper = shallow(<PostList posts={posts}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('PostListItem').length).toBe(3);
});